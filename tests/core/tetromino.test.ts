import { describe, it, expect } from 'vitest';
import type { Rotation } from '../../src/types';
import {
  KINDS,
  COLORS,
  getCells,
  rotate,
  kickTests,
  boxHeight,
  getMatrix,
} from '../../src/core/tetromino';

describe('tetromino', () => {
  it('has all 7 kinds with colors', () => {
    expect(KINDS).toHaveLength(7);
    for (const k of KINDS) expect(typeof COLORS[k]).toBe('number');
  });

  it('every piece has exactly 4 cells per state', () => {
    const states: Rotation[] = [0, 1, 2, 3];
    for (const k of KINDS) {
      for (const s of states) {
        expect(getCells(k, s)).toHaveLength(4);
      }
    }
  });

  it('rotate cycles through 4 states', () => {
    let s: Rotation = 0;
    for (let i = 0; i < 4; i++) s = rotate(s, 1);
    expect(s).toBe(0);
    expect(rotate(0, -1)).toBe(3);
  });

  it('I differs across rotations', () => {
    const a = JSON.stringify(getCells('I', 0));
    const b = JSON.stringify(getCells('I', 1));
    expect(a).not.toBe(b);
  });

  it('O is invariant under rotation', () => {
    const a = JSON.stringify(getCells('O', 0));
    const b = JSON.stringify(getCells('O', 1));
    expect(a).toBe(b);
  });

  it('kick tables provide multiple tests per transition', () => {
    expect(kickTests('T', 0, 1).length).toBeGreaterThan(1);
    expect(kickTests('I', 0, 1).length).toBeGreaterThan(1);
  });

  it('I and T use different kick data', () => {
    expect(kickTests('I', 0, 1)).not.toEqual(kickTests('T', 0, 1));
  });

  it('boxHeight matches matrix', () => {
    expect(boxHeight('I')).toBe(4);
    expect(boxHeight('T')).toBe(3);
    expect(boxHeight('O')).toBe(2);
    expect(getMatrix('O', 0)).toEqual(['XX', 'XX']);
  });
});
