import * as THREE from 'three';
import type { Scene } from './scene';
import { COLS } from '../core/board';
import { shade } from '../core/tetromino';

const GRAVITY = -26;

/** A square (pixel) particle pool. */
class Pool {
  points: THREE.Points;
  private positions: Float32Array;
  private colors: Float32Array;
  private base: Float32Array;
  private vel: Float32Array;
  private life: Float32Array;
  private max: Float32Array;
  private cursor = 0;
  private drag: number;
  private gravity: boolean;

  constructor(scene: Scene, size: number, max: number, drag = 1, gravity = true) {
    this.drag = drag;
    this.gravity = gravity;
    this.positions = new Float32Array(max * 3);
    this.colors = new Float32Array(max * 3);
    this.base = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.max = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    const mat = new THREE.PointsMaterial({
      size,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    for (let i = 0; i < max; i++) this.positions[i * 3 + 1] = -9999;
    scene.add(this.points);
  }

  private plant(x: number, y: number, z: number, hex: number, vx: number, vy: number, vz: number, life: number) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.life.length;
    const ix = i * 3;
    this.positions[ix] = x;
    this.positions[ix + 1] = y;
    this.positions[ix + 2] = z;
    const c = new THREE.Color(hex);
    this.base[ix] = c.r;
    this.base[ix + 1] = c.g;
    this.base[ix + 2] = c.b;
    this.colors[ix] = c.r;
    this.colors[ix + 1] = c.g;
    this.colors[ix + 2] = c.b;
    this.vel[ix] = vx;
    this.vel[ix + 1] = vy;
    this.vel[ix + 2] = vz;
    this.life[i] = life;
    this.max[i] = life;
  }

  /** random-angle burst */
  spawn(x: number, y: number, z: number, hex: number, power: number, up: number, life: number) {
    const a = Math.random() * Math.PI * 2;
    const sp = power * (0.4 + Math.random() * 0.9);
    this.plant(x, y, z, hex, Math.cos(a) * sp, up + Math.random() * power, Math.sin(a) * sp * 0.4, life);
  }

  /** explicit velocity (for radial shockwave rings) */
  vec(x: number, y: number, z: number, hex: number, vx: number, vy: number, vz: number, life: number) {
    this.plant(x, y, z, hex, vx, vy, vz, life);
  }

  update(dts: number) {
    const d = Math.pow(this.drag, dts * 60);
    for (let i = 0; i < this.life.length; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dts;
      const ix = i * 3;
      if (this.life[i] <= 0) {
        this.colors[ix] = this.colors[ix + 1] = this.colors[ix + 2] = 0;
        this.positions[ix + 1] = -9999;
        continue;
      }
      if (this.gravity) this.vel[ix + 1] += GRAVITY * dts;
      this.vel[ix] *= d;
      this.vel[ix + 1] *= d;
      this.vel[ix + 2] *= d;
      this.positions[ix] += this.vel[ix] * dts;
      this.positions[ix + 1] += this.vel[ix + 1] * dts;
      this.positions[ix + 2] += this.vel[ix + 2] * dts;
      if (this.gravity && this.positions[ix + 1] < 0) {
        this.life[i] = 0;
        this.colors[ix] = this.colors[ix + 1] = this.colors[ix + 2] = 0;
        this.positions[ix + 1] = -9999;
        continue;
      }
      const f = this.life[i] / this.max[i];
      this.colors[ix] = this.base[ix] * f;
      this.colors[ix + 1] = this.base[ix + 1] * f;
      this.colors[ix + 2] = this.base[ix + 2] * f;
    }
    (this.points.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (this.points.geometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
  }
}

export class Effects {
  private sparks: Pool;
  private embers: Pool;
  private glints: Pool;
  private ring: Pool;
  private shakeMag = 0;
  private punchMag = 0;

  constructor(private scene: Scene) {
    this.sparks = new Pool(scene, 0.5, 1700, 0.92);
    this.embers = new Pool(scene, 1.3, 420, 0.97);
    this.glints = new Pool(scene, 0.3, 800, 0.9);
    this.ring = new Pool(scene, 0.5, 700, 0.94, true); // gravity ON — ring expands then arcs down
  }

  private palette(color: number): number[] {
    return [color, shade(color, 1.5), shade(color, 0.5), 0xffffff, shade(color, 0.8)];
  }

  /** Fabulous multi-layer pixel burst tinted by the clearing piece color. */
  explode(originX: number, rows: number[], color: number, intensity = 1) {
    if (rows.length === 0) return;
    const pal = this.palette(color);
    const bright = [0xffffff, shade(color, 1.6), color];
    const pick = () => pal[Math.floor(Math.random() * pal.length)];
    const pickB = () => bright[Math.floor(Math.random() * bright.length)];
    const cxBase = originX + (COLS - 1) / 2;

    for (const row of rows) {
      const cy = row + 0.5;
      // 1) shockwave expressed as a particle ring (pure radial, gravity arcs it)
      const ringN = Math.floor(22 + intensity * 5);
      const sp = 5 + 2.5 * intensity;
      for (let k = 0; k < ringN; k++) {
        const ang = (k / ringN) * Math.PI * 2 + (Math.random() - 0.5) * 0.05;
        this.ring.vec(
          cxBase,
          cy,
          0.5,
          pick(),
          Math.cos(ang) * sp,
          Math.sin(ang) * sp,
          0,
          0.5 + Math.random() * 0.25,
        );
      }
      // 2) chaotic scatter sparks
      const scatter = Math.floor(26 * intensity);
      for (let k = 0; k < scatter; k++) {
        this.sparks.spawn(
          originX + Math.random() * (COLS - 1),
          row + (Math.random() - 0.5),
          0.5,
          pick(),
          11 * intensity,
          6,
          0.45 + Math.random() * 0.5,
        );
      }
      // 3) slow, lingering embers
      const emberN = Math.floor(7 * intensity);
      for (let k = 0; k < emberN; k++) {
        this.embers.spawn(
          originX + Math.random() * (COLS - 1),
          row + (Math.random() - 0.5),
          0.5,
          pick(),
          5 * intensity,
          3.5,
          0.8 + Math.random() * 0.7,
        );
      }
      // 4) tiny bright glints (sparkle)
      const glintN = Math.floor(14 * intensity);
      for (let k = 0; k < glintN; k++) {
        this.glints.spawn(
          originX + Math.random() * (COLS - 1),
          row + (Math.random() - 0.5),
          0.5,
          pickB(),
          13 * intensity,
          5,
          0.3 + Math.random() * 0.35,
        );
      }
    }
  }

  garbageSlam(originX: number, rows: number, color = 0x6f7488) {
    const pal = [color, shade(color, 1.2), shade(color, 0.6)];
    const pick = () => pal[Math.floor(Math.random() * pal.length)];
    for (let k = 0; k < 34; k++) {
      const x = originX + Math.random() * (COLS - 1);
      this.sparks.spawn(x, rows * 0.5 + Math.random() * 2, 0.4, pick(), 5, 10, 0.6);
    }
  }

  lockDust(originX: number, cells: Array<[number, number]>, color: number) {
    const pal = [color, shade(color, 1.3), 0xffffff];
    const pick = () => pal[Math.floor(Math.random() * pal.length)];
    for (const [x, y] of cells) {
      for (let k = 0; k < 4; k++) {
        this.sparks.spawn(originX + x, y, 0.4, pick(), 1.6, 1.2, 0.4);
      }
    }
  }

  shake(amount: number) {
    this.shakeMag = Math.max(this.shakeMag, amount);
  }
  punch(amount: number) {
    this.punchMag = Math.max(this.punchMag, amount);
  }

  update(dt: number) {
    const dts = Math.min(dt, 50) / 1000;
    this.sparks.update(dts);
    this.embers.update(dts);
    this.glints.update(dts);
    this.ring.update(dts);

    if (this.shakeMag > 0.001) {
      this.scene.applyShake(
        new THREE.Vector3(
          (Math.random() - 0.5) * this.shakeMag,
          (Math.random() - 0.5) * this.shakeMag,
          (Math.random() - 0.5) * this.shakeMag * 0.5,
        ),
      );
      this.shakeMag *= 0.86;
    }
    if (this.punchMag > 0.001) {
      this.scene.applyPunch(this.punchMag);
      this.punchMag *= 0.88;
    }
  }
}
