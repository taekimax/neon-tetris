import { ARR_MS, DAS_MS } from '../core/rules';

export type Cmd =
  | 'left'
  | 'right'
  | 'soft'
  | 'hard'
  | 'cw'
  | 'ccw'
  | 'hold'
  | 'pause'
  | 'restart';

const KEYMAP: Record<string, Cmd> = {
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
  ArrowDown: 'soft',
  KeyS: 'soft',
  Space: 'hard',
  ArrowUp: 'cw',
  KeyX: 'cw',
  KeyZ: 'ccw',
  ControlLeft: 'ccw',
  KeyC: 'hold',
  ShiftLeft: 'hold',
  KeyP: 'pause',
  Escape: 'pause',
  KeyR: 'restart',
};

const REPEAT = new Set<Cmd>(['left', 'right', 'soft']);

export class Input {
  private held = new Set<Cmd>();
  private das = { left: 0, right: 0 };
  private armed = { left: false, right: false };
  private arr = { left: 0, right: 0 };
  private softTimer = 0;
  private onKeyDown: (e: KeyboardEvent) => void;
  private onKeyUp: (e: KeyboardEvent) => void;

  constructor(private cb: (c: Cmd) => void) {
    this.onKeyDown = (e) => {
      const cmd = KEYMAP[e.code];
      if (!cmd) return;
      // prevent page scroll for game keys
      if (
        e.code.startsWith('Arrow') ||
        e.code === 'Space' ||
        e.code === 'Tab'
      ) {
        e.preventDefault();
      }
      if (e.repeat) return; // we handle our own repeats
      if (REPEAT.has(cmd)) {
        if (cmd === 'left' || cmd === 'right') {
          this.das[cmd] = 0;
          this.armed[cmd] = false;
          this.arr[cmd] = 0;
        } else if (cmd === 'soft') {
          this.softTimer = 0;
        }
        this.held.add(cmd);
      }
      this.cb(cmd);
    };
    this.onKeyUp = (e) => {
      const cmd = KEYMAP[e.code];
      if (!cmd) return;
      this.held.delete(cmd);
      if (cmd === 'left' || cmd === 'right') this.armed[cmd] = false;
    };
  }

  bind() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }
  unbind() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  update(dt: number) {
    for (const dir of ['left', 'right'] as const) {
      if (!this.held.has(dir)) continue;
      if (!this.armed[dir]) {
        this.das[dir] += dt;
        if (this.das[dir] >= DAS_MS) this.armed[dir] = true;
      } else {
        this.arr[dir] += dt;
        if (this.arr[dir] >= ARR_MS) {
          this.arr[dir] = 0;
          this.cb(dir);
        }
      }
    }
    if (this.held.has('soft')) {
      this.softTimer += dt;
      if (this.softTimer >= ARR_MS) {
        this.softTimer = 0;
        this.cb('soft');
      }
    }
  }
}
