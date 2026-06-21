import { describe, it, expect } from 'vitest';
import { Randomizer } from '../../src/core/randomizer';
import { KINDS } from '../../src/core/tetromino';

describe('randomizer (7-bag)', () => {
  it('emits only valid kinds', () => {
    const r = new Randomizer();
    for (let i = 0; i < 100; i++) {
      expect(KINDS).toContain(r.next());
    }
  });

  it('each bag of 7 contains every kind exactly once', () => {
    const r = new Randomizer();
    const bag = Array.from({ length: 7 }, () => r.next());
    expect(bag.sort()).toEqual([...KINDS].sort());
  });

  it('is deterministic with an injected rng', () => {
    let seed = 12345;
    const rng = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    const a = Array.from({ length: 7 }, () => new Randomizer(rng).next());
    let seed2 = 12345;
    const rng2 = () => {
      seed2 = (seed2 * 1103515245 + 12345) & 0x7fffffff;
      return seed2 / 0x7fffffff;
    };
    const b = Array.from({ length: 7 }, () => new Randomizer(rng2).next());
    expect(a).toEqual(b);
  });

  it('peek does not consume', () => {
    const r = new Randomizer();
    const peeked = r.peek(3);
    expect(r.next()).toBe(peeked[0]);
  });
});
