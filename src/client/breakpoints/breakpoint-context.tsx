'use client';

import { createContext, useContext } from 'react';
import { useBreakpoint } from './use-breakpoint';
import { useIosVhFix } from './use-ios-vh-fix';

type BreakpointContextValue = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const BreakpointContext = createContext<BreakpointContextValue>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
});

type BreakpointProviderProps = {
  children: React.ReactNode;
};

export const BreakpointProvider = ({ children }: BreakpointProviderProps) => {
  const breakpoint = useBreakpoint();
  useIosVhFix(breakpoint);

  return (
    <BreakpointContext.Provider
      value={{
        isMobile: breakpoint === `mobile`,
        isTablet: breakpoint === `tablet`,
        isDesktop: breakpoint === `desktop`,
      }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpointContext = (): BreakpointContextValue =>
  useContext(BreakpointContext);
