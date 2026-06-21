import type { Difficulty, Direction, EngineEvent } from '../types';
import { Engine } from '../core/engine';
import { MAX_GARBAGE_BURST } from '../core/rules';
import { COLORS, shade } from '../core/tetromino';
import { DIFFICULTY, decide, planMoves, type AICommand } from '../core/ai';

export type PlayerId = 'player' | 'ai';
export type GameMode = 'single' | 'vs';

export interface MatchEvent {
  who: PlayerId;
  event: EngineEvent;
}

export type MatchState = 'playing' | 'over';

export class Match {
  readonly player: Engine;
  readonly ai: Engine;
  readonly difficulty: Difficulty;
  readonly mode: GameMode;
  winner: PlayerId | null = null;
  state: MatchState = 'playing';

  private aiRng: () => number;
  private aiPlan: AICommand[] = [];
  private aiHoldPending = false;
  private aiTimer = 0;

  private handler: ((events: MatchEvent[]) => void) | null = null;

  constructor(difficulty: Difficulty, mode: GameMode = 'vs', rng: () => number = Math.random) {
    this.difficulty = difficulty;
    this.mode = mode;
    this.aiRng = rng;
    this.player = new Engine(rng);
    this.ai = new Engine(rng);
    this.ai.gravityEnabled = false; // AI places pieces explicitly
  }

  onEvents(cb: (events: MatchEvent[]) => void) {
    this.handler = cb;
  }

  /** Route garbage for clears and forward events to the handler. */
  private sink(who: PlayerId, events: EngineEvent[]) {
    if (events.length === 0) return;
    const collected: MatchEvent[] = [];
    for (const e of events) {
      this.route(who, e);
      collected.push({ who, event: e });
    }
    if (this.handler) this.handler(collected);
  }

  // --- player input (forwarded) ---
  playerMove(dir: Direction) {
    this.sink('player', this.player.move(dir));
  }
  playerRotate(dir: Direction) {
    this.sink('player', this.player.rotate(dir));
  }
  playerSoftDrop() {
    this.sink('player', this.player.softDrop());
  }
  playerHardDrop() {
    this.sink('player', this.player.hardDrop());
  }
  playerHold() {
    this.sink('player', this.player.holdSwap());
  }

  update(dt: number) {
    if (this.state !== 'playing') return;
    this.sink('player', this.player.tick(dt));
    if (this.mode === 'vs') {
      this.sink('ai', this.ai.tick(dt));
      this.driveAI(dt);
    }
    this.checkWinner();
  }

  private driveAI(dt: number) {
    if (!this.ai.alive || !this.ai.current) return;
    const params = DIFFICULTY[this.difficulty];
    this.aiTimer += dt;
    if (this.aiTimer < params.interval) return;
    this.aiTimer -= params.interval;

    if (this.aiHoldPending) {
      this.sink('ai', this.ai.holdSwap());
      this.aiHoldPending = false;
      this.aiPlan = [];
      return;
    }
    if (this.aiPlan.length === 0) {
      const next = this.ai.peekNext(1)[0];
      const dec = decide(
        this.ai.grid,
        this.ai.current.kind,
        this.ai.hold,
        next,
        params,
        this.aiRng,
      );
      if (!dec) return;
      if (dec.useHold) {
        this.aiHoldPending = true;
        return;
      }
      this.aiPlan = planMoves(this.ai.current.state, this.ai.current.x, dec.target);
    }
    const cmd = this.aiPlan.shift();
    if (cmd) this.sink('ai', this.execAI(cmd));
  }

  private execAI(cmd: AICommand): EngineEvent[] {
    switch (cmd) {
      case 'left':
        return this.ai.move(-1);
      case 'right':
        return this.ai.move(1);
      case 'rotCW':
        return this.ai.rotate(1);
      case 'rotCCW':
        return this.ai.rotate(-1);
      case 'drop':
        return this.ai.hardDrop();
    }
  }

  /** Outgoing garbage with cancel + combo/B2B adders, capped. */
  private route(who: PlayerId, event: EngineEvent) {
    if (this.mode === 'single') return; // no opponent
    if (event.type !== 'clear' || !event.attack) return;
    const from = who === 'player' ? this.player : this.ai;
    const to = who === 'player' ? this.ai : this.player;
    const comboBonus = Math.max(0, from.combo);
    const b2bBonus = event.b2b ? 1 : 0;
    let total = event.attack + comboBonus + b2bBonus;
    total = Math.min(total, MAX_GARBAGE_BURST);
    if (total <= 0) return;
    const canceled = from.cancelInbound(total);
    const remaining = total - canceled;
    if (remaining > 0) {
      // garbage is a dark shade of the attacker's clearing-piece color
      const tint = shade(COLORS[event.kind ?? 'I'] ?? 0x55607a, 0.5);
      to.queueInbound(remaining, tint);
    }
  }

  private checkWinner() {
    if (this.state !== 'playing') return;
    if (this.mode === 'single') {
      if (!this.player.alive) {
        this.winner = null;
        this.state = 'over';
      }
      return;
    }
    if (!this.player.alive && this.ai.alive) {
      this.winner = 'ai';
      this.state = 'over';
    } else if (!this.ai.alive) {
      this.winner = 'player';
      this.state = 'over';
    }
  }

  rematch() {
    const fresh = new Engine(this.aiRng);
    Object.assign(this.player, new Engine(this.aiRng));
    Object.assign(this.ai, fresh);
    this.ai.gravityEnabled = false;
    this.winner = null;
    this.state = 'playing';
    this.aiPlan = [];
    this.aiHoldPending = false;
    this.aiTimer = 0;
  }
}
