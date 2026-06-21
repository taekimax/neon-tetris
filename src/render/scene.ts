import * as THREE from 'three';
import { EffectComposer as Composer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { KINDS, getMatrix, shade } from '../core/tetromino';

export interface SceneOptions {
  canvas: HTMLCanvasElement;
}

type Floater = {
  obj: THREE.Group;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
};

// background volume bounds
const X_MIN = -70;
const X_MAX = 70;
const Y_MIN = -6;
const Y_MAX = 46;
const Z_MIN = -96;
const Z_MAX = -14;
const VMAX = 6; // max float speed
const WANDER = 2.2; // trajectory randomness strength

function wrap(v: number, lo: number, hi: number): number {
  const span = hi - lo;
  return ((((v - lo) % span) + span) % span) + lo;
}

export class Scene {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly composer: Composer;
  private camBase = new THREE.Vector3(0, 11, 40);
  private camTarget = new THREE.Vector3(0, 9.5, 0);

  private cubeGeo = new THREE.BoxGeometry(1, 1, 1);
  private matCache: Record<number, THREE.MeshLambertMaterial> = {};
  private floaters: Floater[] = [];

  constructor(opts: SceneOptions) {
    const canvas = opts.canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const sky = this.skyTexture();
    this.scene = new THREE.Scene();
    this.scene.background = sky;
    this.scene.fog = new THREE.Fog(0xbcd9f5, 55, 130); // depth fade for the floating field

    this.camera = new THREE.PerspectiveCamera(52, 1, 0.1, 600);
    this.camera.position.copy(this.camBase);
    this.camera.lookAt(this.camTarget);

    const hemi = new THREE.HemisphereLight(0xdcefff, 0x6a78a0, 1.2);
    this.scene.add(hemi);
    const key = new THREE.DirectionalLight(0xfff6e0, 1.0);
    key.position.set(6, 24, 20);
    this.scene.add(key);

    this.buildFloaters();

    this.composer = new Composer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(new OutputPass());
  }

  private skyTexture(): THREE.Texture {
    const c = document.createElement('canvas');
    c.width = 4;
    c.height = 256;
    const ctx = c.getContext('2d')!;
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#86baff');
    g.addColorStop(1, '#dcefff');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 4, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  private mat(hex: number): THREE.MeshLambertMaterial {
    if (!this.matCache[hex]) this.matCache[hex] = new THREE.MeshLambertMaterial({ color: hex });
    return this.matCache[hex];
  }
  private cube(x: number, y: number, z: number, hex: number, parent: THREE.Object3D) {
    const m = new THREE.Mesh(this.cubeGeo, this.mat(hex));
    m.position.set(x, y, z);
    parent.add(m);
  }

  private buildBlock(color: number): THREE.Group {
    const g = new THREE.Group();
    const kind = KINDS[Math.floor(Math.random() * KINDS.length)];
    const m = getMatrix(kind as never, 0);
    const rows = m.length;
    const cols = m[0].length;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (m[r][c] === 'X') this.cube(c - (cols - 1) / 2, rows - 1 - r, 0, color, g);
      }
    }
    return g;
  }

  private buildFloaters() {
    const colors = [
      0x33ffff, 0xffe14d, 0xff4dff, 0x4dff88, 0xff4d6d, 0x4d8aff, 0xff9b3d,
      0x3a9d3a, 0xd98b2a, 0xff9bb0, 0xb98cf0, 0x46c6ff,
    ];
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    for (let i = 0; i < 42; i++) {
      // darker shades so background blocks stay subtle and don't disturb gameplay
      const obj = this.buildBlock(shade(colors[Math.floor(Math.random() * colors.length)], 0.4));
      const x = rnd(X_MIN, X_MAX);
      const y = rnd(Y_MIN, Y_MAX);
      const z = rnd(Z_MIN, Z_MAX);
      obj.position.set(x, y, z);
      obj.scale.setScalar(rnd(0.8, 2.6));
      obj.rotation.set(rnd(0, Math.PI * 2), rnd(0, Math.PI * 2), rnd(0, Math.PI * 2));
      this.floaters.push({
        obj,
        x,
        y,
        z,
        vx: rnd(-3, 3),
        vy: rnd(-2.5, 2.5),
        vz: rnd(-1.2, 1.2),
        rotX: rnd(-1.4, 1.4),
        rotY: rnd(-1.4, 1.4),
        rotZ: rnd(-1.4, 1.4),
      });
      this.scene.add(obj);
    }
  }

  add(obj: THREE.Object3D) {
    this.scene.add(obj);
  }
  remove(obj: THREE.Object3D) {
    this.scene.remove(obj);
  }

  resize(w: number, h: number) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
  }

  private shakeOffset = new THREE.Vector3();
  applyShake(v: THREE.Vector3) {
    this.shakeOffset.copy(v);
  }
  private punch = 0;
  applyPunch(amount: number) {
    this.punch = Math.max(this.punch, amount);
  }

  render(dt: number) {
    const dts = Math.min(dt, 50) / 1000;
    const k = dts * 60;

    // free, indeterministic floating: wandering velocity (curved paths), tumble, wrap
    for (const f of this.floaters) {
      f.vx = THREE.MathUtils.clamp(f.vx + (Math.random() - 0.5) * WANDER * k, -VMAX, VMAX);
      f.vy = THREE.MathUtils.clamp(f.vy + (Math.random() - 0.5) * WANDER * k, -VMAX, VMAX);
      f.vz = THREE.MathUtils.clamp(f.vz + (Math.random() - 0.5) * WANDER * k, -VMAX, VMAX);
      f.x = wrap(f.x + f.vx * dts, X_MIN, X_MAX);
      f.y = wrap(f.y + f.vy * dts, Y_MIN, Y_MAX);
      f.z = wrap(f.z + f.vz * dts, Z_MIN, Z_MAX);
      f.obj.position.set(f.x, f.y, f.z);
      f.obj.rotation.x += f.rotX * dts;
      f.obj.rotation.y += f.rotY * dts;
      f.obj.rotation.z += f.rotZ * dts;
    }

    // event-driven camera offset only
    this.camera.position.set(
      this.camBase.x + this.shakeOffset.x,
      this.camBase.y + this.shakeOffset.y,
      this.camBase.z + this.shakeOffset.z - this.punch * 2.4,
    );
    this.camera.lookAt(
      this.camTarget.x + this.shakeOffset.x * 0.5,
      this.camTarget.y + this.shakeOffset.y * 0.5,
      this.camTarget.z,
    );
    this.shakeOffset.multiplyScalar(0.85);
    this.punch *= 0.86;
    this.composer.render();
  }
}
