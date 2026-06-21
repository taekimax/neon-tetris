import { describe, it, expect } from 'vitest';
import { Match } from '../../src/versus/match';
import { COLS, ROWS } from '../../src/core/board';
import type { Kind, Rotation } from '../../src/types';

function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function setCurrent(m: Match, who: 'player' | 'ai', kind: Kind, state: Rotation, x: number, y: number) {
  const engine = who === 'player' ? m.player : m.ai;
  (engine as unknown as { current: { kind: Kind; state: Rotation; x: number; y: number } }).current = {
    kind,
    state,
    x,
    y,
  };
}

describe('match', () => {
  it('routes a player tetris as garbage to the AI', () => {
    const m = new Match(3, 'vs', seededRng(1));
    for (let y = 0; y < 4; y++) for (let x = 1; x < COLS; x++) m.player.board.setCell(x, y, 'G');
    setCurrent(m, 'player', 'I', 1, -2, 0);
    m.playerHardDrop();
    // n-1 rule: tetris (4 lines) sends 3; no combo (first clear), no b2b
    expect(m.ai.inboundPending).toBe(3);
  });

  it('cancel: outgoing garbage offsets own inbound before sending', () => {
    const m = new Match(3, 'vs', seededRng(2));
    m.player.queueInbound(4);
    // player clears a double (attack 1): total 1 cancels 1 inbound, nothing sent
    for (let y = 0; y < 2; y++) for (let x = 2; x < COLS; x++) m.player.board.setCell(x, y, 'G');
    setCurrent(m, 'player', 'O', 0, 0, 0);
    m.playerHardDrop();
    expect(m.player.inboundPending).toBe(3); // 4 - 1 canceled
    expect(m.ai.inboundPending).toBe(0); // remaining 0 sent
  });

  it('detects a winner when one engine tops out', () => {
    const m = new Match(3, 'vs', seededRng(3));
    // block AI spawn area, then force AI to top out via a hard drop
    for (let x = 3; x <= 6; x++) {
      m.ai.board.setCell(x, ROWS - 1, 'G');
      m.ai.board.setCell(x, ROWS - 2, 'G');
    }
    m.ai.hardDrop();
    m.update(0);
    expect(m.winner).toBe('player');
    expect(m.state).toBe('over');
  });

  it('rematch resets state', () => {
    const m = new Match(3, 'vs', seededRng(4));
    m.winner = 'ai';
    m.state = 'over';
    m.rematch();
    expect(m.winner).toBeNull();
    expect(m.state).toBe('playing');
    expect(m.player.alive).toBe(true);
    expect(m.ai.alive).toBe(true);
  });
});
