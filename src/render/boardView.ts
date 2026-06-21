import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { COLS, ROWS } from '../core/board';
import { COLORS, shade } from '../core/tetromino';
import type { Engine } from '../core/engine';

const VISIBLE_ROWS = 20;
const BLOCK = 0.92;

const colorCache: Record<string, THREE.Color> = {};
function colorOf(hex: number): THREE.Color {
  const key = hex.toString();
  if (!colorCache[key]) colorCache[key] = new THREE.Color(hex);
  return colorCache[key];
}

export class BoardView {
  readonly group: THREE.Group;
  engine: Engine;
  private blocks: THREE.InstancedMesh;
  private garbage: THREE.InstancedMesh;
  private ghost: THREE.InstancedMesh;
  private dummy = new THREE.Object3D();

  private rise = { active: false, n: 0, t: 0, dur: 0.35 };

  constructor(engine: Engine, cx: number, accentColor: number) {
    this.engine = engine;
    this.group = new THREE.Group();
    this.group.position.set(cx - (COLS - 1) / 2, 0, 0);

    // glossy white rounded card behind the field
    const cardGeo = new RoundedBoxGeometry(COLS + 0.8, VISIBLE_ROWS + 0.8, 0.5, 4, 0.7);
    const cardMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 40,
      specular: 0x999999,
    });
    const card = new THREE.Mesh(cardGeo, cardMat);
    card.position.set((COLS - 1) / 2, (VISIBLE_ROWS - 1) / 2, -0.6);
    this.group.add(card);

    // accent top bar (player/AI color), glossy
    const barGeo = new RoundedBoxGeometry(COLS + 0.4, 0.7, 0.45, 3, 0.3);
    const barMat = new THREE.MeshPhongMaterial({
      color: accentColor,
      shininess: 90,
      specular: 0xffffff,
    });
    const bar = new THREE.Mesh(barGeo, barMat);
    bar.position.set((COLS - 1) / 2, VISIBLE_ROWS - 0.1, -0.3);
    this.group.add(bar);

    // play pieces: glossy rounded cubes
    const geo = new RoundedBoxGeometry(BLOCK, BLOCK, BLOCK, 3, 0.16);
    const mat = new THREE.MeshPhongMaterial({ shininess: 80, specular: 0xffffff });
    this.blocks = new THREE.InstancedMesh(geo, mat, COLS * ROWS + 8);
    this.blocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.group.add(this.blocks);

    // garbage: glossy cube tinted with the (dark) source color
    const gGeo = new RoundedBoxGeometry(BLOCK, BLOCK, BLOCK, 2, 0.16);
    const gMat = new THREE.MeshPhongMaterial({ shininess: 50, specular: 0x666666 });
    this.garbage = new THREE.InstancedMesh(gGeo, gMat, COLS * ROWS);
    this.garbage.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.group.add(this.garbage);

    // ghost: translucent dark shade of the current piece
    const ghGeo = new RoundedBoxGeometry(BLOCK, BLOCK, BLOCK, 2, 0.16);
    const ghMat = new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 0.32,
      shininess: 10,
      depthWrite: false,
    });
    this.ghost = new THREE.InstancedMesh(ghGeo, ghMat, 8);
    this.group.add(this.ghost);
  }

  startGarbageRise(n: number) {
    if (n <= 0) return;
    this.rise = { active: true, n, t: 0, dur: 0.35 };
  }

  update(dt: number) {
    if (!this.rise.active) return;
    this.rise.t += dt / 1000;
    if (this.rise.t >= this.rise.dur) this.rise.active = false;
  }

  sync() {
    const e = this.engine;
    let i = 0;
    let gi = 0;
    const riseOff = this.rise.active ? (1 - this.rise.t / this.rise.dur) * this.rise.n : 0;

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const cell = e.cellAt(x, y);
        if (!cell) continue;
        const isGarbage = cell.kind === 'G';
        const off = isGarbage && this.rise.active && y < this.rise.n ? -riseOff : 0;
        this.dummy.position.set(x, y + off, 0);
        this.dummy.rotation.set(0, 0, 0);
        this.dummy.scale.setScalar(1);
        this.dummy.updateMatrix();
        if (isGarbage) {
          this.garbage.setMatrixAt(gi, this.dummy.matrix);
          this.garbage.setColorAt(gi, colorOf(cell.tint ?? COLORS.G));
          gi++;
        } else {
          this.blocks.setMatrixAt(i, this.dummy.matrix);
          this.blocks.setColorAt(i, colorOf(COLORS[cell.kind] ?? 0x888888));
          i++;
        }
      }
    }

    const cur = e.current;
    if (cur && e.alive) {
      for (const [x, y] of e.absCells) {
        this.dummy.position.set(x, y, 0);
        this.dummy.scale.setScalar(1.05);
        this.dummy.updateMatrix();
        this.blocks.setMatrixAt(i, this.dummy.matrix);
        this.blocks.setColorAt(i, colorOf(COLORS[cur.kind] ?? 0x888888));
        i++;
      }
    }
    this.blocks.count = i;
    this.blocks.instanceMatrix.needsUpdate = true;
    if (this.blocks.instanceColor) this.blocks.instanceColor.needsUpdate = true;
    this.garbage.count = gi;
    this.garbage.instanceMatrix.needsUpdate = true;
    if (this.garbage.instanceColor) this.garbage.instanceColor.needsUpdate = true;

    let g = 0;
    if (cur && e.alive) {
      const ghostCol = colorOf(shade(COLORS[cur.kind] ?? 0x888888, 0.55));
      for (const [x, y] of e.ghostCells) {
        this.dummy.position.set(x, y, 0);
        this.dummy.scale.setScalar(1);
        this.dummy.updateMatrix();
        this.ghost.setMatrixAt(g, this.dummy.matrix);
        this.ghost.setColorAt(g, ghostCol);
        g++;
      }
    }
    this.ghost.count = g;
    this.ghost.instanceMatrix.needsUpdate = true;
    if (this.ghost.instanceColor) this.ghost.instanceColor.needsUpdate = true;
  }

  setAccent(_color: number) {
    /* accent set at construction */
  }

  get originX(): number {
    return this.group.position.x;
  }
}
