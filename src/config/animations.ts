import type { Transition } from 'framer-motion';

export const transitions = {
  navSlide: { type: `spring`, bounce: 0, duration: 0.4 },
  hamburger: { type: `tween`, duration: 0.1 },
  timelineLine: { duration: 1.5 },
  timelineItem: { duration: 0.7, type: `spring` },
} satisfies Record<string, Transition>;

export const keyframes = {
  navSlide: {
    initial: { y: `-100%` },
    animate: { y: 0 },
    exit: { y: `-100%` },
  },
  timelineLine: { animate: { bottom: [`150%`, `0%`] } },
  timelineCircle: { animate: { scale: [0, 1], y: `-50%` } },
  timelineInfo: { animate: { opacity: [0, 1], x: [`-100%`, `0%`] } },
  timelineDetails: { animate: { opacity: [0, 1], x: [`100%`, `0%`] } },
};

export const stagger = {
  circleBase: 0.4,
  contentBase: 0.2,
  step: 0.1,
};
