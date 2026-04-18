'use client';

import { createContext, useContext } from 'react';
import { useBreakpoint } from './use-breakpoint';
import { useIosVhFix } from './use-ios-vh-fix';

type BreakpointContextValue = {
  isDesktop: boolean;
};

const BreakpointContext = createContext<BreakpointContextValue>({
  isDesktop: true,
});

export const BreakpointProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const breakpoint = useBreakpoint();
  useIosVhFix(breakpoint);

  return (
    <BreakpointContext.Provider value={{ isDesktop: breakpoint === `desktop` }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpointContext = (): BreakpointContextValue =>
  useContext(BreakpointContext);
