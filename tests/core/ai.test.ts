import { describe, it, expect } from 'vitest';
import {
  DIFFICULTY,
  candidates,
  pickPlacement,
  planMoves,
  decide,
  evaluate,
} from '../../src/core/ai';
import { Board, COLS, ROWS } from '../../src/core/board';
import { getCells } from '../../src/core/tetromino';
import type { Kind, Rotation } from '../../src/types';

function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

describe('ai', () => {
  it('exposes difficulties 1/2/3 with decreasing intervals', () => {
    expect(DIFFICULTY[1].interval).toBeGreaterThan(DIFFICULTY[2].interval);
    expect(DIFFICULTY[2].interval).toBeGreaterThan(DIFFICULTY[3].interval);
  });

  it('prefers flat I placement on an empty board (no holes)', () => {
    const b = new Board();
    const cs = candidates(b.grid, 'I');
    expect(cs.length).toBeGreaterThan(0);
    expect(cs[0].state).toBe(0); // horizontal
  });

  it('picked placement is legal (lands without collision)', () => {
    const b = new Board();
    const p = pickPlacement(b.grid, 'T', DIFFICULTY[3], seededRng(1));
    expect(p).not.toBeNull();
    const cells = getCells('T', p!.state);
    // drop to rest and assert no collision
    let y = ROWS;
    const g = b.grid;
    const collides = (ox: number, oy: number) =>
      cells.some(([dx, dy]) => {
        const x = ox + dx;
        const yy = oy + dy;
        if (x < 0 || x >= COLS || yy < 0) return true;
        if (yy >= ROWS) return false;
        return !!g[yy][x];
      });
    while (!collides(p!.x, y - 1)) y--;
    expect(collides(p!.x, y)).toBe(false);
  });

  it('planMoves builds rotation + shift + drop sequence', () => {
    const cmds = planMoves(0, 3, { state: 1, x: 5, score: 0 });
    expect(cmds).toEqual(['rotCW', 'right', 'right', 'drop']);
  });

  it('planMoves handles CCW when cheaper', () => {
    const cmds = planMoves(0, 4, { state: 3, x: 4, score: 0 });
    expect(cmds).toEqual(['rotCCW', 'drop']);
  });

  it('decide returns a legal target for the current piece', () => {
    const b = new Board();
    const d = decide(b.grid, 'T', null, 'I', DIFFICULTY[3], seededRng(2));
    expect(d).not.toBeNull();
    expect(d!.useHold).toBe(false);
  });

  it('evaluate rewards fewer holes', () => {
    const flat = new Board();
    flat.setCell(0, 0, 'G');
    flat.setCell(1, 0, 'G');
    const holed = new Board();
    holed.setCell(0, 1, 'G'); // leaves a hole at (0,0)
    holed.setCell(1, 0, 'G');
    expect(evaluate(flat.grid)).toBeGreaterThan(evaluate(holed.grid));
  });

  it('is deterministic at hard difficulty (noise 0)', () => {
    const b = new Board();
    const a = pickPlacement(b.grid, 'L', DIFFICULTY[3], seededRng(5));
    const c = pickPlacement(b.grid, 'L', DIFFICULTY[3], seededRng(99));
    expect(a).toEqual(c);
    void (null as unknown as Kind);
    void (0 as unknown as Rotation);
  });
});
