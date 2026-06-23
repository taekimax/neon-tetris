import './ui/styles.css';
import { Scene } from './render/scene';
import { BoardView } from './render/boardView';
import { Effects } from './render/effects';
import { Input, type Cmd } from './render/input';
import { MobileInput } from './render/mobileInput';
import { AudioEngine } from './render/audio';
import { Hud } from './ui/hud';
import { Menu } from './ui/menu';
import { Match, type GameMode, type MatchEvent } from './versus/match';
import { COLS } from './core/board';
import type { EngineEvent, Difficulty } from './types';
import { COLORS } from './core/tetromino';
import type { Engine } from './core/engine';

enum State {
  Menu,
  Playing,
  Paused,
  Over,
}

const canvas = document.getElementById('game') as HTMLCanvasElement;
const hudRoot = document.getElementById('hud') as HTMLElement;
const overlay = document.getElementById('overlay') as HTMLElement;

const scene = new Scene({ canvas });
const audio = new AudioEngine();
const hud = new Hud(hudRoot);
const menu = new Menu(overlay);
const effects = new Effects(scene);

let playerView: BoardView | null = null;
let aiView: BoardView | null = null;
let match: Match | null = null;
let input: Input;
let mobileInput: MobileInput | null = null;
let state: State = State.Menu;
let currentMode: GameMode = 'vs';
const mobileControlsQuery = window.matchMedia('(any-pointer: coarse), (pointer: coarse)');

function resize() {
  const viewport = window.visualViewport;
  const w = Math.round(viewport?.width ?? window.innerWidth);
  const h = Math.round(viewport?.height ?? window.innerHeight);
  scene.resize(w, h);
  if (playerView) {
    layoutFields(currentMode);
    positionMute(currentMode);
  }
  syncMobileInput();
}
window.addEventListener('resize', resize);
window.visualViewport?.addEventListener('resize', resize);
resize();

function isCompactLayout(): boolean {
  return mobileControlsQuery.matches || window.innerWidth < 820 || window.innerWidth / window.innerHeight < 0.75;
}

function syncMobileInput() {
  mobileInput?.setActive(state === State.Playing && mobileControlsQuery.matches);
}

function engineOf(who: 'player' | 'ai'): Engine {
  return who === 'player' ? match!.player : match!.ai;
}
function viewOf(who: 'player' | 'ai'): BoardView {
  return who === 'player' ? playerView! : aiView!;
}

// --- event-driven FX/audio ---
function handleMatchEvents(events: MatchEvent[]) {
  for (const { who, event } of events) handleEvent(who, event);
}

function handleEvent(who: 'player' | 'ai', event: EngineEvent) {
  switch (event.type) {
    case 'clear': {
      const e = engineOf(who);
      const v = viewOf(who);
      const color = COLORS[event.kind ?? 'I'] ?? clearColor(event.clearType);
      const big = event.clearType === 'tetris' || event.clearType?.startsWith('tspin');
      if (event.clearedRows && event.clearedRows.length) {
        effects.explode(
          v.originX,
          event.clearedRows,
          color,
          1 + (event.linesCleared ?? 0) * 0.6 + (big ? 1.0 : 0),
        );
      }
      const popupText = clearPopup(event, e.combo);
      if (popupText) hud.popup(popupText, who);
      if (big) audio.sfx('tetris');
      else audio.sfx('line');
      if (e.combo >= 1) audio.sfx('combo');
      hud.flash(big ? '#bff' : '#fff', big ? 0.5 : 0.18 + (event.linesCleared ?? 0) * 0.05);
      effects.shake((event.linesCleared ?? 1) * 0.5 + (big ? 0.4 : 0));
      if (big) effects.punch(0.7);
      break;
    }
    case 'garbage-applied': {
      const v = viewOf(who);
      const n = event.garbageIn ?? 1;
      effects.garbageSlam(v.originX, n);
      v.startGarbageRise(n);
      audio.sfx('garbage');
      effects.shake(0.3 * n);
      break;
    }
    case 'lock': {
      const v = viewOf(who);
      effects.lockDust(v.originX, event.cells ?? [], COLORS[event.kind ?? 'I'] ?? 0xffffff);
      break;
    }
    default:
      break;
  }
}

function clearColor(type?: string): number {
  if (type === 'tetris') return COLORS.I;
  if (type?.startsWith('tspin')) return 0xff2dff;
  if (type === 'triple') return 0x66ccff;
  return 0xffffff;
}

function clearPopup(event: EngineEvent, combo: number): string {
  const t = event.clearType;
  if (t === 'tetris') return 'TETRIS!';
  if (t === 'tspin-triple') return 'T-SPIN TRIPLE!';
  if (t === 'tspin-double') return 'T-SPIN DOUBLE!';
  if (t === 'tspin-single' || t === 'tspin-mini') return 'T-SPIN!';
  if (event.b2b) return 'B2B!';
  if (combo >= 1) return `COMBO x${combo + 1}`;
  return '';
}

// --- input ---
function onCmd(c: Cmd) {
  if (c === 'pause') {
    togglePause();
    return;
  }
  if (c === 'restart') {
    if (state === State.Over && match) startSame();
    return;
  }
  if (state !== State.Playing || !match) return;
  switch (c) {
    case 'left':
      match.playerMove(-1);
      audio.sfx('move');
      break;
    case 'right':
      match.playerMove(1);
      audio.sfx('move');
      break;
    case 'soft':
      match.playerSoftDrop();
      break;
    case 'hard':
      match.playerHardDrop();
      audio.sfx('drop');
      break;
    case 'cw':
      match.playerRotate(1);
      audio.sfx('rotate');
      break;
    case 'ccw':
      match.playerRotate(-1);
      audio.sfx('rotate');
      break;
    case 'hold':
      match.playerHold();
      audio.sfx('hold');
      break;
  }
}

input = new Input(onCmd);
input.bind();
mobileInput = new MobileInput({
  root: overlay,
  onCommand: onCmd,
  onMenu: () => {
    if (state === State.Playing) togglePause();
  },
});
mobileInput.bind();
const legacyMobileControlsQuery = mobileControlsQuery as MediaQueryList & {
  addListener?: (listener: () => void) => void;
};
if (typeof mobileControlsQuery.addEventListener === 'function') {
  mobileControlsQuery.addEventListener('change', syncMobileInput);
} else {
  legacyMobileControlsQuery.addListener?.(syncMobileInput);
}

function togglePause() {
  if (state === State.Playing) {
    state = State.Paused;
    syncMobileInput();
    menu.showPause(
      () => {
        state = State.Playing;
        menu.hide();
        syncMobileInput();
      },
      () => toMenu(),
    );
  } else if (state === State.Paused) {
    state = State.Playing;
    menu.hide();
    syncMobileInput();
  }
}

function layoutFields(mode: GameMode) {
  const off = (COLS - 1) / 2;
  const spread = isCompactLayout() ? 5.8 : 9;
  if (!playerView) return;
  if (mode === 'single') {
    playerView.group.position.x = 0 - off;
    if (aiView) aiView.group.visible = false;
  } else {
    playerView.group.position.x = -spread - off;
    if (aiView) {
      aiView.group.position.x = spread - off;
      aiView.group.visible = true;
    }
  }
}

function startGame(mode: GameMode, d: Difficulty) {
  currentMode = mode;
  audio.resume();
  audio.startBgm();
  audio.sfx('start');
  match = new Match(d, mode);
  match.onEvents(handleMatchEvents);

  if (!playerView) {
    playerView = new BoardView(match.player, -9, 0xe52521);
    scene.add(playerView.group);
  } else {
    playerView.engine = match.player;
  }
  if (!aiView) {
    aiView = new BoardView(match.ai, 9, 0x43b047);
    scene.add(aiView.group);
  } else {
    aiView.engine = match.ai;
  }
  layoutFields(mode);
  hud.setMode(mode);
  hud.setDifficulty(d);
  positionMute(mode);
  menu.hide();
  state = State.Playing;
  syncMobileInput();
}

function startSame() {
  if (!match) return;
  match.rematch();
  playerView!.engine = match.player;
  aiView!.engine = match.ai;
  layoutFields(currentMode);
  positionMute(currentMode);
  menu.hide();
  state = State.Playing;
  syncMobileInput();
}

function toMenu() {
  state = State.Menu;
  syncMobileInput();
  audio.stopBgm();
  menu.showStart(() => startGame('single', 1), (d) => startGame('vs', d));
}

// mute toggle button
const muteBtn = document.createElement('div');
muteBtn.className = 'muted-toggle';
muteBtn.textContent = '🔊 SOUND';
muteBtn.addEventListener('click', () => {
  const m = !audio.isMuted();
  audio.setMuted(m);
  muteBtn.textContent = m ? '🔇 MUTED' : '🔊 SOUND';
});
overlay.appendChild(muteBtn);

// place the sound button just below the HUD panel
function positionMute(mode: GameMode) {
  if (mode === 'single') {
    muteBtn.style.left = 'auto';
    muteBtn.style.right = 'calc(50% + 150px)';
  } else {
    muteBtn.style.right = 'auto';
    muteBtn.style.left = '30px';
  }
  muteBtn.style.bottom = 'auto';
  muteBtn.style.top = 'calc(50% + 215px)';
}
positionMute('vs');

menu.showStart(() => startGame('single', 1), (d) => startGame('vs', d));

// --- main loop ---
let last = performance.now();
let acc = 0;
const FIXED = 1000 / 120;

function frame(now: number) {
  const dt = Math.min(now - last, 100);
  last = now;

  if (state === State.Playing && match) {
    input.update(dt);
    acc += dt;
    while (acc >= FIXED) {
      match.update(FIXED);
      acc -= FIXED;
    }
    if (match.state === 'over') {
      state = State.Over;
      syncMobileInput();
      audio.sfx('over');
      if (currentMode === 'single') {
        menu.showSingleOver(match.player.lines, match.player.score, startSame, toMenu);
      } else {
        menu.showGameOver(match.winner ?? 'ai', startSame, toMenu);
      }
    }
  }

  if (match && playerView) {
    playerView.update(dt);
    playerView.sync();
    hud.update('player', match.player);
    if (currentMode === 'vs' && aiView && aiView.group.visible) {
      aiView.update(dt);
      aiView.sync();
      hud.update('ai', match.ai);
    }
  }
  effects.update(dt);
  scene.render(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
