import { describe, it, expect } from 'vitest';
import {
  secondsPerRow,
  scoreFor,
  attackFor,
  clearTypeFor,
  isHardClear,
  GARBAGE_DELAY_MS,
  MAX_GARBAGE_BURST,
} from '../../src/core/rules';

describe('rules', () => {
  it('gravity speeds up with level', () => {
    expect(secondsPerRow(5)).toBeLessThan(secondsPerRow(1));
    expect(secondsPerRow(1)).toBeCloseTo(1.0, 5);
  });

  it('scores scale and order correctly', () => {
    expect(scoreFor('tetris', 1)).toBeGreaterThan(scoreFor('triple', 1));
    expect(scoreFor('triple', 1)).toBeGreaterThan(scoreFor('double', 1));
    expect(scoreFor('double', 1)).toBeGreaterThan(scoreFor('single', 1));
    expect(scoreFor('tetris', 3)).toBeGreaterThan(scoreFor('tetris', 1));
  });

  it('back-to-back boosts hard clears only', () => {
    expect(scoreFor('tetris', 1, true)).toBeGreaterThan(scoreFor('tetris', 1, false));
    expect(scoreFor('single', 1, true)).toBe(scoreFor('single', 1, false));
  });

  it('attack amounts follow the n-1 rule', () => {
    expect(attackFor('single')).toBe(0); // 1-1
    expect(attackFor('double')).toBe(1); // 2-1
    expect(attackFor('triple')).toBe(2); // 3-1
    expect(attackFor('tetris')).toBe(3); // 4-1
    expect(attackFor('tspin-double')).toBe(1); // 2-1
    expect(attackFor('tspin-triple')).toBe(2); // 3-1
  });

  it('classifies clear types', () => {
    expect(clearTypeFor(4, false)).toBe('tetris');
    expect(clearTypeFor(1, true)).toBe('tspin-single');
    expect(clearTypeFor(0, false)).toBe('none');
  });

  it('hard-clear flags', () => {
    expect(isHardClear('tetris')).toBe(true);
    expect(isHardClear('tspin-single')).toBe(true);
    expect(isHardClear('triple')).toBe(false);
  });

  it('exposes tuning constants', () => {
    expect(GARBAGE_DELAY_MS).toBe(1000);
    expect(MAX_GARBAGE_BURST).toBe(8);
  });
});
