import type { Direction, Kind, Offset, Rotation } from '../types';

export const KINDS: Kind[] = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

/** Neon palette (synthwave). */
export const COLORS: Record<string, number> = {
  I: 0x33ffff,
  O: 0xffe14d,
  T: 0xff4dff,
  S: 0x4dff88,
  Z: 0xff4d6d,
  J: 0x4d8aff,
  L: 0xff9b3d,
  G: 0x3a3f55, // garbage — distinctive dark slate
};

/** Spawn matrices, top row first. '.' = empty, 'X' = filled. */
const SHAPES: Record<Kind, string[]> = {
  I: ['....', 'XXXX', '....', '....'],
  O: ['XX', 'XX'],
  J: ['X..', 'XXX', '...'],
  L: ['..X', 'XXX', '...'],
  S: ['.XX', 'XX.', '...'],
  T: ['.X.', 'XXX', '...'],
  Z: ['XX.', '.XX', '...'],
};

/** Rotate a string-matrix clockwise. */
function rotateMatrix(m: string[]): string[] {
  const h = m.length;
  const w = m[0].length;
  const out: string[] = [];
  for (let r = 0; r < w; r++) {
    let row = '';
    for (let c = 0; c < h; c++) {
      row += m[h - 1 - c][r];
    }
    out.push(row);
  }
  return out;
}

export function boxHeight(kind: Kind): number {
  return SHAPES[kind].length;
}

export function boxWidth(kind: Kind): number {
  return SHAPES[kind][0].length;
}

/** Matrix for a piece at a given rotation state. */
export function getMatrix(kind: Kind, state: Rotation): string[] {
  let m = SHAPES[kind];
  for (let i = 0; i < state; i++) m = rotateMatrix(m);
  return m;
}

/** Cells as (dx, dyUp) offsets relative to the box's bottom-left corner. */
export function getCells(kind: Kind, state: Rotation): Offset[] {
  const m = getMatrix(kind, state);
  const h = m.length;
  const cells: Offset[] = [];
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < m[r].length; c++) {
      if (m[r][c] === 'X') cells.push([c, (h - 1) - r]);
    }
  }
  return cells;
}

export function rotate(state: Rotation, dir: Direction): Rotation {
  return (((state + dir) % 4) + 4) % 4 as Rotation;
}

// --- SRS wall-kick tables (dx, dyUp; +y = up). ---
type KickMap = Record<string, Offset[]>;

export const KICKS_JLSTZ: KickMap = {
  '0>1': [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
  '1>0': [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
  '1>2': [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
  '2>1': [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
  '2>3': [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
  '3>2': [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
  '3>0': [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
  '0>3': [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
};

export const KICKS_I: KickMap = {
  '0>1': [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
  '1>0': [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
  '1>2': [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
  '2>1': [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
  '2>3': [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
  '3>2': [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
  '3>0': [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
  '0>3': [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
};

export function kickTests(kind: Kind, from: Rotation, to: Rotation): Offset[] {
  const key = `${from}>${to}`;
  const table = kind === 'I' ? KICKS_I : KICKS_JLSTZ;
  return table[key] ?? [[0, 0]];
}

/** Darken (f<1) or brighten (f>1) a hex color. */
export function shade(hex: number, f: number): number {
  const r = Math.min(255, Math.floor(((hex >> 16) & 0xff) * f));
  const g = Math.min(255, Math.floor(((hex >> 8) & 0xff) * f));
  const b = Math.min(255, Math.floor((hex & 0xff) * f));
  return (r << 16) | (g << 8) | b;
}
