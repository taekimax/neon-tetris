import type { Difficulty } from '../types';

function el(tag: string, cls?: string, text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

const DIFFS: Array<{ d: Difficulty; label: string }> = [
  { d: 1, label: 'EASY' },
  { d: 2, label: 'NORMAL' },
  { d: 3, label: 'HARD' },
];

export class Menu {
  private root: HTMLElement;
  private current: HTMLElement | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  private clear() {
    if (this.current) this.current.remove();
    this.current = null;
  }

  showStart(onSingle: () => void, onVs: (d: Difficulty) => void) {
    this.clear();
    const s = el('div', 'screen');
    s.appendChild(el('div', 'big', 'NEON TETRIS'));
    s.appendChild(
      el(
        'div',
        'tag',
        '혼자 즐기는 싱글플레이 또는 AI와 대전하는 VS 모드. 라인을 클리어하고 기록을 세우세요.',
      ),
    );

    s.appendChild(el('div', 'mini-label', 'MODE'));
    const singleBtn = el('button', 'btn primary mode-btn', 'SINGLE PLAY');
    singleBtn.addEventListener('click', onSingle);
    s.appendChild(singleBtn);

    const row = el('div', 'diff-row');
    for (const { d, label } of DIFFS) {
      const b = el('button', 'diff-btn');
      b.dataset.d = String(d);
      b.appendChild(el('span', 'n', String(d)));
      b.appendChild(el('span', 't', label));
      b.addEventListener('click', () => onVs(d));
      row.appendChild(b);
    }
    s.appendChild(el('div', 'mini-label', 'VS AI · 난이도 선택'));
    s.appendChild(row);

    s.appendChild(
      el(
        'div',
        'controls-hint',
        '← → 이동 · ↓ 소프트드롭 · SPACE 하드드롭 · ↑/X 회전 · Z 반대회전 · C 홀드 · P 일시정지',
      ),
    );

    this.root.appendChild(s);
    this.current = s;
  }

  showPause(onResume: () => void, onQuit: () => void) {
    this.clear();
    const s = el('div', 'screen');
    s.appendChild(el('div', 'big', 'PAUSED'));
    const resume = el('button', 'btn primary', '계속 (P)');
    resume.addEventListener('click', onResume);
    const quit = el('button', 'btn ghost', '메인으로');
    quit.addEventListener('click', onQuit);
    s.appendChild(resume);
    s.appendChild(quit);
    this.root.appendChild(s);
    this.current = s;
  }

  showGameOver(
    winner: 'player' | 'ai',
    onRematch: () => void,
    onMenu: () => void,
  ) {
    this.clear();
    const s = el('div', 'screen');
    const title = el('div', 'big', winner === 'player' ? 'YOU WIN' : 'YOU LOSE');
    title.style.color = winner === 'player' ? 'var(--g)' : 'var(--player)';
    s.appendChild(title);
    s.appendChild(
      el('div', 'tag', winner === 'player' ? 'AI를 탑아웃시켰습니다!' : '아쉽게도 패배...'),
    );
    const rematch = el('button', 'btn primary', '한 판 더 (R)');
    rematch.addEventListener('click', onRematch);
    const menu = el('button', 'btn ghost', '메인으로');
    menu.addEventListener('click', onMenu);
    s.appendChild(rematch);
    s.appendChild(menu);
    this.root.appendChild(s);
    this.current = s;
  }

  showSingleOver(lines: number, score: number, onRematch: () => void, onMenu: () => void) {
    this.clear();
    const s = el('div', 'screen');
    const title = el('div', 'big', 'GAME OVER');
    title.style.color = 'var(--coin)';
    s.appendChild(title);
    s.appendChild(el('div', 'tag', `LINES ${lines}  ·  SCORE ${score}`));
    const rematch = el('button', 'btn primary', '한 판 더 (R)');
    rematch.addEventListener('click', onRematch);
    const menu = el('button', 'btn ghost', '메인으로');
    menu.addEventListener('click', onMenu);
    s.appendChild(rematch);
    s.appendChild(menu);
    this.root.appendChild(s);
    this.current = s;
  }

  hide() {
    this.clear();
  }
}
