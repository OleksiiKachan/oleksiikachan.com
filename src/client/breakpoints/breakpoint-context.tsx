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

export const BreakpointProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
