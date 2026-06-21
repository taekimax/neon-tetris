import { describe, it, expect } from 'vitest';
import { Board, COLS, ROWS } from '../../src/core/board';
import { getCells } from '../../src/core/tetromino';

describe('board', () => {
  it('starts empty with correct size', () => {
    const b = new Board();
    expect(b.grid).toHaveLength(ROWS);
    expect(b.grid[0]).toHaveLength(COLS);
    expect(b.getCell(0, 0)).toBeNull();
  });

  it('does not collide in empty space at the top', () => {
    const b = new Board();
    expect(b.collides(getCells('I', 0), 3, ROWS - 2)).toBe(false);
  });

  it('detects floor / wall collisions', () => {
    const b = new Board();
    // I horizontal cells sit at dyUp=2 inside a 4-tall box; oy=-3 pushes them below y=0.
    expect(b.collides(getCells('I', 0), 0, -3)).toBe(true); // below floor
    expect(b.collides(getCells('O', 0), -1, 5)).toBe(true); // left wall
    expect(b.collides(getCells('O', 0), COLS, 5)).toBe(true); // right wall
  });

  it('places and reads back cells', () => {
    const b = new Board();
    b.place(getCells('O', 0), 4, 0, 'O');
    expect(b.getCell(4, 0)?.kind).toBe('O');
    expect(b.getCell(5, 1)?.kind).toBe('O');
  });

  it('detects collision with placed blocks', () => {
    const b = new Board();
    b.place(getCells('O', 0), 4, 0, 'O');
    expect(b.collides(getCells('O', 0), 4, 0)).toBe(true);
  });

  it('clears full rows and drops the stack', () => {
    const b = new Board();
    // fill bottom row except one gap, then close it
    for (let x = 0; x < COLS; x++) b.setCell(x, 0, 'G');
    const res = b.clearLines();
    expect(res.count).toBe(1);
    expect(res.rows).toEqual([0]);
    expect(b.getCell(0, 0)).toBeNull(); // cleared
  });

  it('clears a tetris and reports 4 rows', () => {
    const b = new Board();
    for (let y = 0; y < 4; y++)
      for (let x = 0; x < COLS; x++) b.setCell(x, y, 'G');
    const res = b.clearLines();
    expect(res.count).toBe(4);
  });
});
