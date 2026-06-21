import type { Kind } from '../types';
import { KINDS } from './tetromino';

function shuffle<T>(arr: T[], rng: () => number): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** 7-bag randomizer. */
export class Randomizer {
  private queue: Kind[] = [];
  constructor(private rng: () => number = Math.random) {}

  private refill() {
    const bag = shuffle([...KINDS], this.rng);
    this.queue.push(...bag);
  }

  next(): Kind {
    if (this.queue.length === 0) this.refill();
    return this.queue.shift()!;
  }

  peek(n: number): Kind[] {
    while (this.queue.length < n) this.refill();
    return this.queue.slice(0, n);
  }
}
