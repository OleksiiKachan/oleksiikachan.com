'use client';

import { useEffect } from 'react';
import type { Breakpoint } from './use-breakpoint';

export const useIosVhFix = (breakpoint: Breakpoint): void => {
  useEffect(() => {
    if (typeof window === `undefined`) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
  }, [breakpoint]);
};
