import { describe, expect, it } from 'vitest';
import { MobileGestureTracker } from '../../src/render/mobileGesture';

describe('MobileGestureTracker', () => {
  it('treats a still tap as a hard drop', () => {
    const g = new MobileGestureTracker();

    g.start(120, 420);

    expect(g.end(124, 423)).toEqual(['hard']);
  });

  it('emits repeated horizontal moves while dragging left or right', () => {
    const g = new MobileGestureTracker({ horizontalStepPx: 24 });

    g.start(160, 460);

    expect(g.move(185, 462)).toEqual(['right']);
    expect(g.move(238, 461)).toEqual(['right', 'right']);
    expect(g.move(184, 461)).toEqual(['left', 'left']);
    expect(g.end(184, 461)).toEqual([]);
  });

  it('resolves a quick horizontal swipe on release', () => {
    const g = new MobileGestureTracker({ horizontalStepPx: 24 });

    g.start(220, 460);

    expect(g.end(168, 464)).toEqual(['left', 'left']);
  });

  it('rotates counterclockwise for an upward-left drag', () => {
    const g = new MobileGestureTracker();

    g.start(160, 460);
    expect(g.move(118, 392)).toEqual([]);

    expect(g.end(112, 370)).toEqual(['ccw']);
  });

  it('rotates clockwise for upward-right and centered upward drags', () => {
    const upRight = new MobileGestureTracker();
    upRight.start(160, 460);
    expect(upRight.end(210, 374)).toEqual(['cw']);

    const upCenter = new MobileGestureTracker({ rotateCenterBandPx: 30 });
    upCenter.start(160, 460);
    expect(upCenter.end(146, 372)).toEqual(['cw']);
  });

  it('does not emit horizontal moves while an upward rotation gesture is active', () => {
    const g = new MobileGestureTracker({ horizontalStepPx: 20 });

    g.start(200, 500);

    expect(g.move(170, 440)).toEqual([]);
    expect(g.move(135, 400)).toEqual([]);
    expect(g.end(135, 400)).toEqual(['ccw']);
  });
});
