import type { Cmd } from './input';
import { MobileGestureTracker } from './mobileGesture';

interface MobileInputOptions {
  root: HTMLElement;
  onCommand: (cmd: Cmd) => void;
  onMenu: () => void;
}

export class MobileInput {
  private layer: HTMLDivElement;
  private menuButton: HTMLButtonElement;
  private tracker = new MobileGestureTracker();
  private activePointer: number | null = null;
  private active = false;

  constructor(private opts: MobileInputOptions) {
    this.layer = document.createElement('div');
    this.layer.className = 'mobile-touch-layer';
    this.layer.setAttribute('aria-hidden', 'true');

    const bubble = document.createElement('div');
    bubble.className = 'mobile-control-bubble';
    this.layer.appendChild(bubble);

    this.menuButton = document.createElement('button');
    this.menuButton.type = 'button';
    this.menuButton.className = 'mobile-menu-button';
    this.menuButton.textContent = 'MENU';
    this.menuButton.setAttribute('aria-label', 'Pause and open menu');

    this.opts.root.appendChild(this.layer);
    this.opts.root.appendChild(this.menuButton);
  }

  bind() {
    this.layer.addEventListener('pointerdown', this.onPointerDown);
    this.layer.addEventListener('pointermove', this.onPointerMove);
    this.layer.addEventListener('pointerup', this.onPointerUp);
    this.layer.addEventListener('pointercancel', this.onPointerCancel);
    this.menuButton.addEventListener('click', this.onMenuClick);
  }

  unbind() {
    this.layer.removeEventListener('pointerdown', this.onPointerDown);
    this.layer.removeEventListener('pointermove', this.onPointerMove);
    this.layer.removeEventListener('pointerup', this.onPointerUp);
    this.layer.removeEventListener('pointercancel', this.onPointerCancel);
    this.menuButton.removeEventListener('click', this.onMenuClick);
  }

  setActive(active: boolean) {
    this.active = active;
    this.layer.classList.toggle('active', active);
    this.menuButton.classList.toggle('active', active);
    if (!active) this.cancelPointer();
  }

  private onPointerDown = (e: PointerEvent) => {
    if (!this.active || this.activePointer !== null) return;
    e.preventDefault();
    this.activePointer = e.pointerId;
    this.layer.setPointerCapture(e.pointerId);
    this.tracker.start(e.clientX, e.clientY);
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.active || e.pointerId !== this.activePointer) return;
    e.preventDefault();
    for (const cmd of this.tracker.move(e.clientX, e.clientY)) this.opts.onCommand(cmd);
  };

  private onPointerUp = (e: PointerEvent) => {
    if (!this.active || e.pointerId !== this.activePointer) return;
    e.preventDefault();
    for (const cmd of this.tracker.end(e.clientX, e.clientY)) this.opts.onCommand(cmd);
    this.releasePointer(e.pointerId);
  };

  private onPointerCancel = (e: PointerEvent) => {
    if (e.pointerId !== this.activePointer) return;
    this.cancelPointer();
  };

  private onMenuClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.opts.onMenu();
  };

  private cancelPointer() {
    if (this.activePointer !== null) this.releasePointer(this.activePointer);
    this.tracker.cancel();
  }

  private releasePointer(pointerId: number) {
    if (this.layer.hasPointerCapture(pointerId)) {
      this.layer.releasePointerCapture(pointerId);
    }
    this.activePointer = null;
    this.tracker.cancel();
  }
}
