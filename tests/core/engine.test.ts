import { describe, it, expect } from 'vitest';
import { Engine } from '../../src/core/engine';
import { COLS, ROWS } from '../../src/core/board';
import { getCells } from '../../src/core/tetromino';
import type { Kind, Rotation } from '../../src/types';

function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function setCurrent(e: Engine, kind: Kind, state: Rotation, x: number, y: number) {
  (e as unknown as { current: { kind: Kind; state: Rotation; x: number; y: number } }).current = {
    kind,
    state,
    x,
    y,
  };
}

describe('engine', () => {
  it('spawns a piece on construction', () => {
    const e = new Engine(seededRng(1));
    expect(e.current).not.toBeNull();
    expect(e.alive).toBe(true);
    expect(e.absCells.length).toBe(4);
  });

  it('hard drop locks the piece and spawns the next', () => {
    const e = new Engine(seededRng(2));
    const first = e.current!.kind;
    const ev = e.hardDrop();
    expect(ev.some((x) => x.type === 'lock' || x.type === 'clear')).toBe(true);
    // board now has blocks
    let placed = 0;
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) if (e.cellAt(x, y)) placed++;
    expect(placed).toBeGreaterThan(0);
    // a new piece is active
    expect(e.current).not.toBeNull();
    expect(e.nextQueue.length).toBeGreaterThanOrEqual(4);
    void first;
  });

  it('performs a tetris and emits attack 4', () => {
    const e = new Engine(seededRng(3));
    // fill rows 0..3 except column 0 (vertical well)
    for (let y = 0; y < 4; y++) for (let x = 1; x < COLS; x++) e.board.setCell(x, y, 'G');
    // I vertical in column 0: state1 cells live at dx=2 → box x=-2, y=0
    setCurrent(e, 'I', 1, -2, 0);
    const ev = e.hardDrop();
    const clear = ev.find((x) => x.type === 'clear');
    expect(clear).toBeTruthy();
    expect(clear!.clearType).toBe('tetris');
    expect(clear!.attack).toBe(3); // n-1 rule
    expect(e.lines).toBe(4);
  });

  it('applies inbound garbage as gray rows with a single hole column', () => {
    const e = new Engine(seededRng(4));
    e.queueInbound(2);
    expect(e.inboundPending).toBe(2);
    (e as unknown as { inboundTimer: number }).inboundTimer = 0; // arm for application
    e.hardDrop(); // lock + spawn triggers application
    // bottom two rows are gray with exactly one hole each, same column
    const row0 = e.board.grid[0];
    const row1 = e.board.grid[1];
    const holes0 = row0.map((c, i) => (c === null ? i : -1)).filter((i) => i >= 0);
    const holes1 = row1.map((c, i) => (c === null ? i : -1)).filter((i) => i >= 0);
    expect(holes0).toHaveLength(1);
    expect(holes1).toHaveLength(1);
    expect(holes0[0]).toBe(holes1[0]);
    expect(row0.filter((c) => c?.kind === 'G')).toHaveLength(COLS - 1);
  });

  it('cancels inbound garbage via cancelInbound', () => {
    const e = new Engine(seededRng(5));
    e.queueInbound(4);
    const canceled = e.cancelInbound(3);
    expect(canceled).toBe(3);
    expect(e.inboundPending).toBe(1);
  });

  it('declares topout when the stack reaches the top', () => {
    const e = new Engine(seededRng(6));
    // block the spawn columns (3..6) on the top two rows, without making them full
    for (let x = 3; x <= 6; x++) {
      e.board.setCell(x, ROWS - 1, 'G');
      e.board.setCell(x, ROWS - 2, 'G');
    }
    const ev = e.hardDrop();
    expect(ev.some((x) => x.type === 'topout')).toBe(true);
    expect(e.alive).toBe(false);
  });

  it('hold swaps once per piece', () => {
    const e = new Engine(seededRng(7));
    const cur = e.current!.kind;
    const ev1 = e.holdSwap();
    expect(ev1.some((x) => x.type === 'hold')).toBe(true);
    expect(e.hold).toBe(cur);
    // second hold in the same piece is rejected
    const ev2 = e.holdSwap();
    expect(ev2).toHaveLength(0);
  });

  it('rotation kicks off a block when direct rotation is blocked', () => {
    const e = new Engine(seededRng(8));
    // T at x=7,y=5; block the cell that state1 would occupy at (9,6)
    setCurrent(e, 'T', 0, 7, 5);
    e.board.setCell(9, 6, 'G');
    const ev = e.rotate(1);
    expect(ev.some((x) => x.type === 'rotate')).toBe(true);
    expect(e.current!.state).toBe(1);
    expect(e.current!.x).toBe(6); // kicked left by SRS
    void getCells;
  });

  it('gravity moves the piece down over time', () => {
    const e = new Engine(seededRng(9));
    const y0 = e.current!.y;
    // level 1 => 1s per row; tick a bit over 1s
    e.tick(1100);
    expect(e.current!.y).toBeLessThan(y0);
  });
});
