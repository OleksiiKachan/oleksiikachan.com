'use client';

import { useEffect, useRef, useState } from 'react';
import { mediaQueries } from 'styles/breakpoints';

export type Breakpoint = `mobile` | `tablet` | `desktop`;

const getInitialBreakpoint = (): Breakpoint => {
  if (typeof window === `undefined`) return `desktop`;
  const match = Object.keys(mediaQueries)
    .map((query) => window.matchMedia(query))
    .find((mo) => mo.matches);
  return match ? (mediaQueries[match.media] as Breakpoint) : `desktop`;
};

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] =
    useState<Breakpoint>(getInitialBreakpoint);
  const currentBreakpoint = useRef<Breakpoint>(breakpoint);

  useEffect(() => {
    if (typeof window === `undefined`) return;

    const mediaObjects = Object.keys(mediaQueries).map((query) =>
      window.matchMedia(query)
    );

    const listener = (event: MediaQueryListEvent) => {
      if (event.matches) {
        const next = mediaQueries[event.media] as Breakpoint;
        if (currentBreakpoint.current !== next) {
          currentBreakpoint.current = next;
          setBreakpoint(next);
        }
      }
    };

    mediaObjects.forEach((mo) => mo.addEventListener(`change`, listener));

    return () => {
      mediaObjects.forEach((mo) => mo.removeEventListener(`change`, listener));
    };
  }, []);

  return breakpoint;
};
