import { COLORS } from '../core/tetromino';
import { getMatrix } from '../core/tetromino';
import { COLS } from '../core/board';
import type { Engine } from '../core/engine';
import type { Difficulty } from '../types';

const GARBAGE_COLOR = `#${(COLORS.G).toString(16).padStart(6, '0')}`;

function el(tag: string, cls?: string, text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function renderMini(kind: string): HTMLElement {
  const m = getMatrix(kind as never, 0);
  const wrap = el('div', 'minipiece');
  wrap.style.gridTemplateColumns = `repeat(${m[0].length}, 12px)`;
  const color = `#${(COLORS[kind] ?? 0x888888).toString(16).padStart(6, '0')}`;
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      const cell = el('div', 'cell' + (m[r][c] === 'X' ? ' on' : ''));
      if (m[r][c] === 'X') cell.style.color = cell.style.background = color;
      wrap.appendChild(cell);
    }
  }
  return wrap;
}

interface PanelCfg {
  side: 'left' | 'right';
  title: string;
}

export class Hud {
  private root: HTMLElement;
  private panels: Record<'player' | 'ai', HTMLElement> = {} as never;
  private garbageBoxes: Record<'player' | 'ai', HTMLElement> = {} as never;
  private nextBoxes: Record<'player' | 'ai', HTMLElement> = {} as never;
  private holdBoxes: Record<'player' | 'ai', HTMLElement> = {} as never;
  private comboBadges: Record<'player' | 'ai', HTMLElement> = {} as never;
  private popupLayer: HTMLElement;
  private flashEl: HTMLElement;
  private sig: Record<'player' | 'ai', string> = { player: '', ai: '' };

  constructor(root: HTMLElement) {
    this.root = root;
    const topbar = el('div', 'topbar');
    topbar.appendChild(el('h1', '', 'NEON  TETRIS'));
    topbar.appendChild(el('div', 'sub', 'VS · AI'));
    root.appendChild(topbar);

    this.panels.player = this.buildPanel({ side: 'left', title: 'YOU' });
    this.panels.ai = this.buildPanel({ side: 'right', title: 'AI' });
    root.appendChild(this.panels.player);
    root.appendChild(this.panels.ai);

    this.popupLayer = el('div', 'popup-layer');
    root.appendChild(this.popupLayer);
    this.flashEl = el('div');
    this.flashEl.id = 'flash';
    root.appendChild(this.flashEl);
  }

  private buildPanel(cfg: PanelCfg): HTMLElement {
    const p = el('div', 'panel ' + cfg.side);
    p.appendChild(el('h2', '', cfg.title));
    p.appendChild(this.stat('SCORE', 'score', '0'));
    p.appendChild(this.stat('LINES', 'lines', '0'));
    p.appendChild(this.stat('LEVEL', 'level', '1'));
    p.appendChild(el('div', 'combo-badge'));
    p.appendChild(el('div', 'mini-label', 'NEXT'));
    const next = el('div', 'next-box');
    p.appendChild(next);
    p.appendChild(el('div', 'mini-label', 'HOLD'));
    const hold = el('div', 'hold-box');
    p.appendChild(hold);
    p.appendChild(el('div', 'mini-label', 'INCOMING GARBAGE'));
    const gviz = el('div', 'gviz');
    p.appendChild(gviz);

    const key = cfg.side === 'left' ? 'player' : 'ai';
    this.nextBoxes[key] = next;
    this.holdBoxes[key] = hold;
    this.comboBadges[key] = p.querySelector('.combo-badge') as HTMLElement;
    this.garbageBoxes[key] = gviz;

    return p;
  }

  private stat(label: string, key: string, value: string): HTMLElement {
    const row = el('div', 'stat');
    row.appendChild(el('span', 'label', label));
    row.appendChild(el('span', 'value ' + key, value));
    return row;
  }

  setDifficulty(d: Difficulty) {
    (this.panels.ai.querySelector('h2') as HTMLElement).textContent = `AI · LV ${d}`;
  }

  setMode(mode: 'single' | 'vs') {
    const ai = this.panels.ai;
    const p = this.panels.player;
    if (mode === 'single') {
      // single: only one field (centered). Place this HUD panel just to the
      // LEFT of the centered field so it stays near the gameplay without overlap.
      ai.style.display = 'none';
      p.style.left = 'auto';
      p.style.right = 'calc(50% + 150px)';
    } else {
      ai.style.display = '';
      p.style.left = '';
      p.style.right = '';
    }
    p.style.transform = '';
    this.sig = { player: '', ai: '' };
  }

  update(who: 'player' | 'ai', engine: Engine) {
    const nexts = engine.peekNext(3);
    const sig = `${engine.score}|${engine.lines}|${engine.level}|${engine.combo}|${engine.hold}|${nexts.join(',')}|${engine.inboundPending}|${engine.inboundHole}`;
    if (sig === this.sig[who]) return;
    this.sig[who] = sig;

    const panel = this.panels[who];
    (panel.querySelector('.score') as HTMLElement).textContent = String(engine.score);
    (panel.querySelector('.lines') as HTMLElement).textContent = String(engine.lines);
    (panel.querySelector('.level') as HTMLElement).textContent = String(engine.level);
    this.comboBadges[who].textContent =
      engine.combo > 0 ? `COMBO x${engine.combo + 1}` : '';

    // next
    this.nextBoxes[who].innerHTML = '';
    nexts.forEach((k) => this.nextBoxes[who].appendChild(renderMini(k)));

    // hold
    this.holdBoxes[who].innerHTML = '';
    if (engine.hold) this.holdBoxes[who].appendChild(renderMini(engine.hold));

    // incoming garbage shape preview
    this.renderGarbage(this.garbageBoxes[who], engine.inboundPending, engine.inboundHole);
  }

  private renderGarbage(box: HTMLElement, pending: number, hole: number) {
    box.innerHTML = '';
    const rows = Math.min(8, Math.max(0, pending));
    if (rows === 0) {
      const empty = el('div', 'gviz-empty', '—');
      box.appendChild(empty);
      return;
    }
    for (let r = 0; r < rows; r++) {
      const row = el('div', 'grow');
      for (let x = 0; x < COLS; x++) {
        const c = el('div', 'gcell');
        if (x !== hole) {
          c.classList.add('on');
          c.style.background = GARBAGE_COLOR;
          c.style.boxShadow = `0 0 4px ${GARBAGE_COLOR}`;
        }
        row.appendChild(c);
      }
      box.appendChild(row);
    }
  }

  popup(text: string, who: 'player' | 'ai') {
    const p = el('div', 'popup ' + who, text);
    if (who === 'ai') {
      p.style.left = '62%';
    } else {
      p.style.left = '38%';
    }
    this.popupLayer.appendChild(p);
    setTimeout(() => p.remove(), 950);
  }

  flash(color: string, intensity: number) {
    this.flashEl.style.background = color;
    this.flashEl.style.transition = 'none';
    this.flashEl.style.opacity = String(intensity);
    // force reflow then fade
    void this.flashEl.offsetWidth;
    this.flashEl.style.transition = 'opacity 0.5s ease-out';
    this.flashEl.style.opacity = '0';
  }
}
