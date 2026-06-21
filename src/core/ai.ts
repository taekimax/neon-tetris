import type { Difficulty, Grid, Kind, Offset, Rotation } from '../types';
import { COLS, ROWS } from './board';
import { getCells } from './tetromino';

export type AICommand = 'left' | 'right' | 'rotCW' | 'rotCCW' | 'drop';

export interface AIParams {
  interval: number; // ms between AI decisions/actions
  noise: number; // 0..1 chance to pick a sub-optimal (top-k) placement
  topk: number; // pool size for noisy choice
  lookahead: number; // 0 = greedy, 1 = consider next piece
  holeBias: number; // easy modes sometimes accept hole-leaving moves
}

export const DIFFICULTY: Record<Difficulty, AIParams> = {
  1: { interval: 900, noise: 0.3, topk: 3, lookahead: 0, holeBias: 0.2 },
  2: { interval: 500, noise: 0.1, topk: 1, lookahead: 0, holeBias: 0 },
  3: { interval: 250, noise: 0, topk: 1, lookahead: 1, holeBias: 0 },
};

// Weights (Dellacherie-style), tuned for synthwave AI.
const W = { agg: -0.51, lines: 0.76, holes: -0.45, bump: -0.18, well: -0.2 };

function collidesGrid(grid: Grid, cells: Offset[], ox: number, oy: number): boolean {
  for (const [dx, dy] of cells) {
    const x = ox + dx;
    const y = oy + dy;
    if (x < 0 || x >= COLS || y < 0) return true;
    if (y >= ROWS) continue;
    if (grid[y][x]) return true;
  }
  return false;
}

function dropY(grid: Grid, cells: Offset[], x: number): number {
  let y = ROWS;
  while (!collidesGrid(grid, cells, x, y - 1)) y--;
  return y;
}

function heightsOf(grid: Grid): number[] {
  const h = new Array<number>(COLS).fill(0);
  for (let x = 0; x < COLS; x++) {
    for (let y = ROWS - 1; y >= 0; y--) {
      if (grid[y][x]) {
        h[x] = y + 1;
        break;
      }
    }
  }
  return h;
}

export function evaluate(grid: Grid): number {
  const h = heightsOf(grid);
  const agg = h.reduce((a, b) => a + b, 0);
  let holes = 0;
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < h[x]; y++) if (!grid[y][x]) holes++;
  }
  let bump = 0;
  for (let x = 0; x < COLS - 1; x++) bump += Math.abs(h[x] - h[x + 1]);
  let lines = 0;
  for (let y = 0; y < ROWS; y++) if (grid[y].every((c) => c !== null)) lines++;
  return W.agg * agg + W.lines * lines + W.holes * holes + W.bump * bump;
}

/** Clone a grid. */
export function cloneGrid(grid: Grid): Grid {
  return grid.map((row) => row.slice());
}

function placeAndClear(grid: Grid, cells: Offset[], x: number, y: number, kind: string): Grid {
  const g = cloneGrid(grid);
  for (const [dx, dy] of cells) {
    const ax = x + dx;
    const ay = y + dy;
    if (ay >= 0 && ay < ROWS && ax >= 0 && ax < COLS) g[ay][ax] = { kind };
  }
  // clear full rows
  return g.filter((row) => !row.every((c) => c !== null)).length === ROWS
    ? g
    : (() => {
        const kept = g.filter((row) => !row.every((c) => c !== null));
        while (kept.length < ROWS) kept.push(new Array(COLS).fill(null));
        return kept;
      })();
}

export interface Placement {
  state: Rotation;
  x: number;
  score: number;
}

/** All candidate placements for a kind, sorted best-first. */
export function candidates(grid: Grid, kind: Kind): Placement[] {
  const out: Placement[] = [];
  for (let s = 0 as Rotation; s < 4; s = (s + 1) as Rotation) {
    const cells = getCells(kind, s);
    for (let x = -2; x <= COLS; x++) {
      const y = dropY(grid, cells, x);
      // skip placements that vanish above the board
      const anyInField = cells.some(([dx, dy]) => y + dy >= 0 && y + dy < ROWS);
      if (!anyInField) continue;
      if (collidesGrid(grid, cells, x, y)) continue;
      const sim = placeAndClear(grid, cells, x, y, kind);
      out.push({ state: s, x, score: evaluate(sim) });
    }
  }
  out.sort((a, b) => b.score - a.score);
  return out;
}

/** Pick a placement for a kind given difficulty + rng. */
export function pickPlacement(
  grid: Grid,
  kind: Kind,
  params: AIParams,
  rng: () => number,
): Placement | null {
  const cs = candidates(grid, kind);
  if (cs.length === 0) return null;
  if (params.noise > 0 && rng() < params.noise) {
    const pool = cs.slice(0, Math.max(1, params.topk));
    return pool[Math.floor(rng() * pool.length)];
  }
  return cs[0];
}

export interface MoveDecision {
  useHold: boolean;
  target: Placement;
}

/** Decide the AI's next target (current vs hold). Looks ahead if configured. */
export function decide(
  grid: Grid,
  current: Kind,
  hold: Kind | null,
  next: Kind | null,
  params: AIParams,
  rng: () => number,
): MoveDecision | null {
  const cur = pickPlacement(grid, current, params, rng);
  if (params.lookahead > 0 && next && cur) {
    // promote current placements that set up a good next move
    const cells = getCells(current, cur.state);
    const y = dropY(grid, cells, cur.x);
    const sim = placeAndClear(grid, cells, cur.x, y, current);
    const nxt = pickPlacement(sim, next, { ...params, lookahead: 0 }, rng);
    if (nxt) cur.score += nxt.score * 0.5;
  }
  if (hold) {
    const hld = pickPlacement(grid, hold, params, rng);
    if (hld && (!cur || hld.score > cur.score + 2)) {
      return { useHold: true, target: hld };
    }
  }
  if (!cur) return null;
  return { useHold: false, target: cur };
}

/** Build the visible-action command sequence from the current pose to a target. */
export function planMoves(
  fromState: Rotation,
  fromX: number,
  to: Placement,
): AICommand[] {
  const cmds: AICommand[] = [];
  let dr = (to.state - fromState + 4) % 4;
  if (dr === 3) cmds.push('rotCCW');
  else for (let i = 0; i < dr; i++) cmds.push('rotCW');
  const dx = to.x - fromX;
  if (dx > 0) for (let i = 0; i < dx; i++) cmds.push('right');
  else for (let i = 0; i < -dx; i++) cmds.push('left');
  cmds.push('drop');
  return cmds;
}
