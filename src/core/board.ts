import type { Grid, Offset } from '../types';

export const COLS = 10;
export const ROWS = 22; // 20 visible + 2 hidden buffer rows on top

export class Board {
  grid: Grid;

  constructor() {
    this.grid = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => null),
    );
  }

  inBounds(x: number, y: number): boolean {
    return x >= 0 && x < COLS && y >= 0 && y < ROWS;
  }

  getCell(x: number, y: number) {
    if (!this.inBounds(x, y)) return null;
    return this.grid[y][x];
  }

  setCell(x: number, y: number, kind: string) {
    if (this.inBounds(x, y)) this.grid[y][x] = { kind };
  }

  /** True if placing cells at (ox, oy) collides with walls/floor/blocks. */
  collides(cells: Offset[], ox: number, oy: number): boolean {
    for (const [dx, dy] of cells) {
      const x = ox + dx;
      const y = oy + dy;
      if (x < 0 || x >= COLS || y < 0) return true; // walls + floor
      if (y >= ROWS) continue; // open sky above
      if (this.grid[y][x]) return true;
    }
    return false;
  }

  place(cells: Offset[], ox: number, oy: number, kind: string) {
    for (const [dx, dy] of cells) {
      const x = ox + dx;
      const y = oy + dy;
      if (this.inBounds(x, y)) this.grid[y][x] = { kind };
    }
  }

  /** Clear all full rows; return the indices (pre-clear) that were removed. */
  clearLines(): { rows: number[]; count: number } {
    const rows: number[] = [];
    for (let y = 0; y < ROWS; y++) {
      if (this.grid[y].every((c) => c !== null)) rows.push(y);
    }
    if (rows.length === 0) return { rows, count: 0 };
    // Remove cleared rows, keep order bottom->top, then pad empty rows on top.
    const surviving = this.grid.filter((_, y) => !rows.includes(y));
    while (surviving.length < ROWS) {
      // New empty rows appear at the top (highest index = highest y).
      surviving.push(Array.from({ length: COLS }, () => null));
    }
    this.grid = surviving;
    return { rows, count: rows.length };
  }
}
