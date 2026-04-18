import { describe, it, expect } from 'vitest';
import { transitions, keyframes, stagger } from './animations';

describe(`transitions`, () => {
  it(`navSlide is a spring with bounce 0 and duration 0.4`, () => {
    expect(transitions.navSlide).toEqual({
      type: `spring`,
      bounce: 0,
      duration: 0.4,
    });
  });

  it(`hamburger is a tween with duration 0.1`, () => {
    expect(transitions.hamburger).toEqual({ type: `tween`, duration: 0.1 });
  });

  it(`timelineLine has duration 1.5`, () => {
    expect(transitions.timelineLine).toEqual({ duration: 1.5 });
  });

  it(`timelineItem is a spring with duration 0.7`, () => {
    expect(transitions.timelineItem).toEqual({ duration: 0.7, type: `spring` });
  });
});

describe(`keyframes`, () => {
  it(`navSlide has initial, animate and exit with y values`, () => {
    expect(keyframes.navSlide.initial).toEqual({ y: `-100%` });
    expect(keyframes.navSlide.animate).toEqual({ y: 0 });
    expect(keyframes.navSlide.exit).toEqual({ y: `-100%` });
  });

  it(`timelineLine animates bottom from 150% to 0%`, () => {
    expect(keyframes.timelineLine.animate).toEqual({ bottom: [`150%`, `0%`] });
  });

  it(`timelineCircle animates scale and y`, () => {
    expect(keyframes.timelineCircle.animate).toEqual({
      scale: [0, 1],
      y: `-50%`,
    });
  });

  it(`timelineInfo animates opacity and x from left`, () => {
    expect(keyframes.timelineInfo.animate).toEqual({
      opacity: [0, 1],
      x: [`-100%`, `0%`],
    });
  });

  it(`timelineDetails animates opacity and x from right`, () => {
    expect(keyframes.timelineDetails.animate).toEqual({
      opacity: [0, 1],
      x: [`100%`, `0%`],
    });
  });
});

describe(`stagger`, () => {
  it(`circleBase is 0.4`, () => {
    expect(stagger.circleBase).toBe(0.4);
  });

  it(`contentBase is 0.2`, () => {
    expect(stagger.contentBase).toBe(0.2);
  });

  it(`step is 0.1`, () => {
    expect(stagger.step).toBe(0.1);
  });
});
