import type { ClearType } from '../types';

// --- Timing constants (ms) ---
export const LOCK_DELAY_MS = 500;
export const LOCK_RESET_MAX = 15;
export const GARBAGE_DELAY_MS = 1000; // warning window before inbound garbage is applied
export const MAX_GARBAGE_BURST = 8; // cap on garbage sent in one clear
export const DAS_MS = 170;
export const ARR_MS = 50;

/** Seconds per row at a given level (guideline formula), clamped. */
export function secondsPerRow(level: number): number {
  const s = Math.pow(0.8 - (level - 1) * 0.007, level - 1);
  return Math.max(s, 0.001);
}

const BASE_SCORE: Record<ClearType, number> = {
  none: 0,
  single: 100,
  double: 300,
  triple: 500,
  tetris: 800,
  'tspin-mini': 100,
  'tspin-single': 400,
  'tspin-double': 800,
  'tspin-triple': 1200,
};

/** Base score for a clear, level-multiplied. B2B applies 1.5x to hard clears. */
export function scoreFor(
  type: ClearType,
  level: number,
  backToBack = false,
): number {
  const base = BASE_SCORE[type] ?? 0;
  const hard = type === 'tetris' || type.startsWith('tspin');
  const mult = backToBack && hard ? 1.5 : 1;
  return Math.floor(base * level * mult);
}

const LINES_FOR: Record<ClearType, number> = {
  none: 0,
  single: 1,
  double: 2,
  triple: 3,
  tetris: 4,
  'tspin-mini': 0,
  'tspin-single': 1,
  'tspin-double': 2,
  'tspin-triple': 3,
};

/**
 * Outgoing base garbage for a clear type.
 * Rule: clearing n lines sends (n - 1) garbage lines to the opponent.
 */
export function attackFor(type: ClearType): number {
  return Math.max(0, (LINES_FOR[type] ?? 0) - 1);
}

export function clearTypeFor(lines: number, tspin: boolean): ClearType {
  if (tspin) {
    switch (lines) {
      case 0:
        return 'tspin-mini';
      case 1:
        return 'tspin-single';
      case 2:
        return 'tspin-double';
      case 3:
        return 'tspin-triple';
    }
  }
  switch (lines) {
    case 1:
      return 'single';
    case 2:
      return 'double';
    case 3:
      return 'triple';
    case 4:
      return 'tetris';
    default:
      return 'none';
  }
}

/** Did this clear qualify as a "hard" clear for back-to-back chaining? */
export function isHardClear(type: ClearType): boolean {
  return type === 'tetris' || type.startsWith('tspin');
}
