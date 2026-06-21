import type { ClearType, Direction, EngineEvent, Grid, Kind, Rotation } from '../types';
import { Board, COLS, ROWS } from './board';
import { Randomizer } from './randomizer';
import {
  GARBAGE_DELAY_MS,
  LOCK_DELAY_MS,
  LOCK_RESET_MAX,
  attackFor,
  clearTypeFor,
  isHardClear,
  scoreFor,
  secondsPerRow,
} from './rules';
import { boxHeight, boxWidth, getCells, kickTests } from './tetromino';

const NEXT_PREVIEW = 5;

interface ActivePiece {
  kind: Kind;
  state: Rotation;
  x: number; // box bottom-left column
  y: number; // box bottom-left row
}

export class Engine {
  readonly board = new Board();
  private rng: () => number;
  private bag: Randomizer;
  current: ActivePiece | null = null;
  hold: Kind | null = null;
  canHold = true;
  readonly nextQueue: Kind[] = [];

  level = 1;
  lines = 0;
  score = 0;
  combo = -1;
  b2b = false;
  alive = true;
  /** When false (AI engine), the piece only moves via explicit commands. */
  gravityEnabled = true;

  // inbound garbage
  inboundPending = 0;
  inboundTimer = 0; // ms remaining before application (<=0 means armed)
  inboundHole = -1; // hole column for the pending garbage (for preview + apply)
  inboundTint = 0x3a3f55; // color (dark shade of the attacker's piece) for pending garbage

  private dropTimer = 0;
  private lockTimer = 0;
  private resetCount = 0;
  private dropScore = 0;
  lastActionWasRotate = false;

  constructor(rng: () => number = Math.random) {
    this.rng = rng;
    this.bag = new Randomizer(rng);
    for (let i = 0; i < NEXT_PREVIEW; i++) this.nextQueue.push(this.bag.next());
    this.spawn();
  }

  // --- snapshot helpers ---
  get cells() {
    return this.current ? getCells(this.current.kind, this.current.state) : [];
  }
  get absCells(): Array<[number, number]> {
    if (!this.current) return [];
    const [x, y] = [this.current.x, this.current.y];
    return getCells(this.current.kind, this.current.state).map(([dx, dy]) => [x + dx, y + dy]);
  }
  ghostY(): number {
    if (!this.current) return 0;
    let y = this.current.y;
    const cells = getCells(this.current.kind, this.current.state);
    while (!this.board.collides(cells, this.current.x, y - 1)) y--;
    return y;
  }
  get ghostCells(): Array<[number, number]> {
    const cur = this.current;
    if (!cur) return [];
    const gy = this.ghostY();
    const cells = getCells(cur.kind, cur.state);
    return cells.map(([dx, dy]) => [cur.x + dx, gy + dy]);
  }
  peekNext(n: number): Kind[] {
    while (this.nextQueue.length < n) this.nextQueue.push(this.bag.next());
    return this.nextQueue.slice(0, n);
  }

  private spawnX(kind: Kind) {
    return Math.floor((COLS - boxWidth(kind)) / 2);
  }
  private spawnY(kind: Kind) {
    return ROWS - boxHeight(kind);
  }

  private spawn(kind?: Kind): EngineEvent[] {
    const k: Kind = kind ?? this.nextQueue.shift()!;
    this.nextQueue.push(this.bag.next());
    const events: EngineEvent[] = [];
    // apply armed inbound garbage before spawning the new piece
    if (this.inboundTimer <= 0 && this.inboundPending > 0) {
      const n = this.inboundPending;
      this.applyGarbage(n);
      this.inboundPending = 0;
      if (n > 0) events.push({ type: 'garbage-applied', garbageIn: n });
    }
    const piece: ActivePiece = { kind: k, state: 0, x: this.spawnX(k), y: this.spawnY(k) };
    this.current = piece;
    this.canHold = true;
    this.dropTimer = 0;
    this.lockTimer = 0;
    this.resetCount = 0;
    this.dropScore = 0;
    this.lastActionWasRotate = false;
    if (this.board.collides(this.cells, piece.x, piece.y)) {
      this.alive = false;
      events.push({ type: 'topout' });
      return events;
    }
    events.push({ type: 'spawn' });
    return events;
  }

  // --- public actions ---
  move(dir: Direction): EngineEvent[] {
    const cur = this.current;
    if (!cur || !this.alive) return [];
    const cells = getCells(cur.kind, cur.state);
    if (!this.board.collides(cells, cur.x + dir, cur.y)) {
      cur.x += dir;
      this.lastActionWasRotate = false;
      this.touch();
      return [{ type: 'move' }];
    }
    return [];
  }

  rotate(dir: Direction): EngineEvent[] {
    const cur = this.current;
    if (!cur || !this.alive || cur.kind === 'O') return [];
    const from = cur.state;
    const to = (((from + dir) % 4) + 4) % 4 as Rotation;
    const cells = getCells(cur.kind, to);
    for (const [kx, ky] of kickTests(cur.kind, from, to)) {
      const nx = cur.x + kx;
      const ny = cur.y + ky;
      if (!this.board.collides(cells, nx, ny)) {
        cur.state = to;
        cur.x = nx;
        cur.y = ny;
        this.lastActionWasRotate = true;
        this.touch();
        return [{ type: 'rotate' }];
      }
    }
    return [];
  }

  softDrop(): EngineEvent[] {
    if (!this.current || !this.alive) return [];
    if (this.tryStepDown()) {
      this.dropScore += 1;
      this.lastActionWasRotate = false;
      return [{ type: 'move' }];
    }
    return [];
  }

  hardDrop(): EngineEvent[] {
    const cur = this.current;
    if (!cur || !this.alive) return [];
    const gy = this.ghostY();
    const fallen = cur.y - gy;
    this.dropScore += fallen * 2;
    cur.y = gy;
    return this.lock();
  }

  holdSwap(): EngineEvent[] {
    if (!this.current || !this.alive || !this.canHold) return [];
    const cur = this.current.kind;
    const prev = this.hold;
    this.hold = cur;
    this.canHold = false;
    if (prev) {
      this.current = { kind: prev, state: 0, x: this.spawnX(prev), y: this.spawnY(prev) };
      this.dropTimer = 0;
      this.lockTimer = 0;
      this.resetCount = 0;
      this.lastActionWasRotate = false;
      if (this.board.collides(this.cells, this.current.x, this.current.y)) {
        this.alive = false;
        return [{ type: 'hold' }, { type: 'topout' }];
      }
    } else {
      const ev = this.spawn();
      this.canHold = false; // the held-in piece is not immediately re-holdable
      return [{ type: 'hold' }, ...ev];
    }
    return [{ type: 'hold' }];
  }

  // --- time-driven update ---
  tick(dt: number): EngineEvent[] {
    if (!this.alive) return [];
    const events: EngineEvent[] = [];
    const interval = secondsPerRow(this.level) * 1000;
    this.dropTimer += dt;
    let moved = false;
    if (this.gravityEnabled) {
      while (this.dropTimer >= interval) {
        this.dropTimer -= interval;
        if (this.tryStepDown()) {
          moved = true;
        } else {
          this.dropTimer = 0;
          break;
        }
      }
    } else {
      this.dropTimer = 0;
    }
    if (moved) {
      this.lockTimer = 0;
      this.lastActionWasRotate = false;
    }
    if (this.isResting()) {
      this.lockTimer += dt;
      if (this.lockTimer >= LOCK_DELAY_MS) {
        const e = this.lock();
        events.push(...e);
      }
    } else {
      this.lockTimer = 0;
      this.resetCount = 0;
    }
    if (this.inboundPending > 0) this.inboundTimer -= dt;
    return events;
  }

  // --- garbage (inbound owned by engine; cancel driven by match) ---
  queueInbound(n: number, tint?: number) {
    if (n <= 0) return;
    if (this.inboundPending === 0) this.inboundHole = Math.floor(this.rng() * COLS);
    if (tint !== undefined) this.inboundTint = tint;
    this.inboundPending += n;
    if (this.inboundTimer <= 0) this.inboundTimer = GARBAGE_DELAY_MS;
  }
  /** Cancel up to n inbound rows; returns how many were actually canceled. */
  cancelInbound(n: number): number {
    const c = Math.min(n, this.inboundPending);
    this.inboundPending -= c;
    if (this.inboundPending === 0) {
      this.inboundTimer = 0;
      this.inboundHole = -1;
    }
    return c;
  }

  // --- internals ---
  private tryStepDown(): boolean {
    if (!this.current) return false;
    const cells = this.cells;
    if (!this.board.collides(cells, this.current.x, this.current.y - 1)) {
      this.current.y -= 1;
      return true;
    }
    return false;
  }

  private isResting(): boolean {
    if (!this.current) return false;
    return this.board.collides(this.cells, this.current.x, this.current.y - 1);
  }

  private touch() {
    if (!this.current) return;
    if (this.isResting()) {
      if (this.resetCount >= LOCK_RESET_MAX) {
        this.lock();
        return;
      }
      this.lockTimer = 0;
      this.resetCount++;
    } else {
      this.lockTimer = 0;
      this.resetCount = 0;
    }
  }

  private detectTSpin(): boolean {
    if (!this.current || this.current.kind !== 'T' || !this.lastActionWasRotate) return false;
    // center of the T's 3x3 box is at (x+1, y+1)
    const cx = this.current.x + 1;
    const cy = this.current.y + 1;
    const corners: Array<[number, number]> = [
      [cx - 1, cy + 1],
      [cx + 1, cy + 1],
      [cx - 1, cy - 1],
      [cx + 1, cy - 1],
    ];
    const filled = corners.filter(([x, y]) => {
      if (x < 0 || x >= COLS || y < 0) return true; // walls/floor count as filled
      return this.board.getCell(x, y) !== null;
    }).length;
    return filled >= 3;
  }

  private lock(): EngineEvent[] {
    if (!this.current) return [];
    const events: EngineEvent[] = [];
    const cur = this.current;
    const tspin = this.detectTSpin();
    const absCells: Array<[number, number]> = this.cells.map(([dx, dy]) => [
      cur.x + dx,
      cur.y + dy,
    ]);
    this.board.place(this.cells, cur.x, cur.y, cur.kind);
    const { rows, count } = this.board.clearLines();
    const clearType: ClearType = clearTypeFor(count, tspin);

    if (count > 0) {
      this.combo += 1;
      const hard = isHardClear(clearType);
      const backToBack = hard && this.b2b; // previous clear was also hard
      const base = scoreFor(clearType, this.level, backToBack);
      const comboBonus = Math.max(0, this.combo) * 50 * this.level;
      this.score += base + comboBonus + this.dropScore;
      this.lines += count;
      this.level = Math.floor(this.lines / 10) + 1;
      this.b2b = hard;
      events.push({
        type: 'clear',
        clearType,
        linesCleared: count,
        clearedRows: rows,
        cells: absCells,
        kind: cur.kind,
        attack: attackFor(clearType),
        tspin,
        b2b: backToBack,
      });
    } else {
      this.combo = -1;
      this.score += this.dropScore;
      events.push({ type: 'lock', cells: absCells, kind: cur.kind });
    }
    this.dropScore = 0;

    if (!this.alive) return events;
    const spawnEvents = this.spawn();
    events.push(...spawnEvents);
    return events;
  }

  private applyGarbage(n: number) {
    if (n <= 0) return;
    const hole = this.inboundHole >= 0 ? this.inboundHole : Math.floor(this.rng() * COLS);
    this.inboundHole = -1;
    // topout if the stack already reaches the top buffer row
    if (this.board.grid[ROWS - 1].some((c) => c !== null)) {
      this.alive = false;
      return;
    }
    const grayRow = () =>
      Array.from({ length: COLS }, (_, x) =>
        x === hole ? null : { kind: 'G', tint: this.inboundTint },
      );
    for (let i = 0; i < n; i++) {
      this.board.grid.pop(); // remove top row
      this.board.grid.unshift(grayRow()); // push gray row at bottom
    }
  }

  get grid(): Grid {
    return this.board.grid;
  }
  cellAt(x: number, y: number) {
    return this.board.getCell(x, y);
  }
}
