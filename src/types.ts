// Shared core types. Framework-agnostic.

export type Kind = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
export type Rotation = 0 | 1 | 2 | 3;
export type Direction = 1 | -1;
export type Difficulty = 1 | 2 | 3;

export interface Cell {
  /** Tetromino kind, or 'G' for garbage. */
  kind: string;
  /** Optional color tint (hex) — used to tint garbage as a dark shade of its source. */
  tint?: number;
}

export type Row = (Cell | null)[];
export type Grid = Row[];

/** (dx, dy) offset; dy is UP-positive (row 0 = bottom of the board). */
export type Offset = [number, number];

/** Events emitted by an engine after an action. Consumed by match/render. */
export interface EngineEvent {
  type:
    | 'lock' // piece locked (no line clear)
    | 'clear' // line(s) cleared
    | 'move'
    | 'rotate'
    | 'hold'
    | 'spawn'
    | 'garbage-applied'
    | 'topout';
  clearType?: ClearType;
  linesCleared?: number;
  clearedRows?: number[];
  /** Absolute [x,y] cells of the piece that just locked (for particle FX). */
  cells?: Array<[number, number]>;
  /** Kind of the piece involved (for coloring FX). */
  kind?: string;
  /** Outgoing garbage this player wants to send to the opponent (before cancel). */
  attack?: number;
  /** Number of garbage rows just applied to this player. */
  garbageIn?: number;
  /** True if the locked/rotated move was a T-Spin (for scoring/fx). */
  tspin?: boolean;
  /** True if this clear is a back-to-back hard clear (consecutive). */
  b2b?: boolean;
}

export type ClearType =
  | 'none'
  | 'single'
  | 'double'
  | 'triple'
  | 'tetris'
  | 'tspin-mini'
  | 'tspin-single'
  | 'tspin-double'
  | 'tspin-triple';
