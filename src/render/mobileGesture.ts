import type { Cmd } from './input';

export interface MobileGestureConfig {
  tapMaxDistancePx?: number;
  horizontalActivationPx?: number;
  horizontalStepPx?: number;
  rotateActivationYPx?: number;
  rotateCenterBandPx?: number;
  upwardBias?: number;
}

type Point = {
  x: number;
  y: number;
};

type GestureMode = 'pending' | 'horizontal' | 'rotate';

const DEFAULT_CONFIG = {
  tapMaxDistancePx: 14,
  horizontalActivationPx: 20,
  horizontalStepPx: 28,
  rotateActivationYPx: 46,
  rotateCenterBandPx: 24,
  upwardBias: 0.7,
} satisfies Required<MobileGestureConfig>;

export class MobileGestureTracker {
  private cfg: Required<MobileGestureConfig>;
  private startPoint: Point | null = null;
  private lastStepX = 0;
  private mode: GestureMode = 'pending';

  constructor(config: MobileGestureConfig = {}) {
    this.cfg = { ...DEFAULT_CONFIG, ...config };
  }

  start(x: number, y: number) {
    this.startPoint = { x, y };
    this.lastStepX = x;
    this.mode = 'pending';
  }

  move(x: number, y: number): Cmd[] {
    if (!this.startPoint) return [];
    const dx = x - this.startPoint.x;
    const dy = y - this.startPoint.y;

    if (this.mode === 'pending') {
      if (this.isRotation(dx, dy)) {
        this.mode = 'rotate';
        return [];
      }
      if (this.isHorizontal(dx, dy)) {
        this.mode = 'horizontal';
      } else {
        return [];
      }
    }

    if (this.mode === 'rotate') return [];
    return this.horizontalCommands(x);
  }

  end(x: number, y: number): Cmd[] {
    if (!this.startPoint) return [];
    const dx = x - this.startPoint.x;
    const dy = y - this.startPoint.y;
    const distance = Math.hypot(dx, dy);
    const mode = this.mode;

    let commands: Cmd[] = [];
    if (mode === 'rotate' || this.isRotation(dx, dy)) {
      commands = [this.rotationCommand(dx)];
    } else if (mode === 'horizontal' || this.isHorizontal(dx, dy)) {
      commands = this.horizontalCommands(x);
    } else if (distance <= this.cfg.tapMaxDistancePx) {
      commands = ['hard'];
    }

    this.cancel();
    return commands;
  }

  cancel() {
    this.startPoint = null;
    this.lastStepX = 0;
    this.mode = 'pending';
  }

  private isHorizontal(dx: number, dy: number): boolean {
    return (
      Math.abs(dx) >= this.cfg.horizontalActivationPx &&
      Math.abs(dx) >= Math.abs(dy)
    );
  }

  private isRotation(dx: number, dy: number): boolean {
    return (
      dy <= -this.cfg.rotateActivationYPx &&
      Math.abs(dy) >= Math.abs(dx) * this.cfg.upwardBias
    );
  }

  private rotationCommand(dx: number): Cmd {
    return dx < -this.cfg.rotateCenterBandPx ? 'ccw' : 'cw';
  }

  private horizontalCommands(x: number): Cmd[] {
    const delta = x - this.lastStepX;
    const steps = Math.trunc(Math.abs(delta) / this.cfg.horizontalStepPx);
    if (steps <= 0) return [];

    const dir: Cmd = delta > 0 ? 'right' : 'left';
    this.lastStepX += steps * this.cfg.horizontalStepPx * Math.sign(delta);
    return Array.from({ length: steps }, () => dir);
  }
}
