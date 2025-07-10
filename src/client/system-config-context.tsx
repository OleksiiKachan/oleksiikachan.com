import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { mediaQueries } from 'styles/breakpoints';

export const SystemConfigContext = createContext({ breakpoint: `desktop` });

export const SystemConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [_breakpoint, setBreakpoint] = useState(`desktop`);

  const currentBreakpoint = useRef<string>(undefined);

  /**
   * Fix for 100vh for iOS
   */
  useEffect(() => {
    if (typeof window !== `undefined`) {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;

      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty(`--vh`, `${vh}px`);
    }
  }, [_breakpoint]);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const mediaObjects = Object.keys(mediaQueries).map((mediaQuery) =>
        window.matchMedia(mediaQuery)
      );

      if (!currentBreakpoint.current) {
        const initialBreakpoint = Object.keys(mediaQueries)
          .map((mediaQuery) => window.matchMedia(mediaQuery))
          .filter((mediaObject) => mediaObject.matches)
          .map((matchedMedia) => mediaQueries[matchedMedia.media])
          .toString();

        currentBreakpoint.current = initialBreakpoint;
        setBreakpoint(initialBreakpoint);
      }

      const breakpointListener = (event: MediaQueryListEvent) => {
        if (event.matches) {
          const newBreakpoint = mediaQueries[event.media];

          if (currentBreakpoint.current !== newBreakpoint) {
            currentBreakpoint.current = newBreakpoint;
            setBreakpoint(newBreakpoint);
          }
        }
      };

      // effin safari < 14 uses the deprecated addListener/removeListener
      mediaObjects.forEach((mediaObject) => {
        if (typeof mediaObject?.addEventListener === `function`) {
          mediaObject.addEventListener(`change`, breakpointListener);
        } else {
          mediaObject?.addListener(breakpointListener);
        }
      });

      return () => {
        mediaObjects.forEach((mediaObject) => {
          if (typeof mediaObject?.removeEventListener === `function`) {
            mediaObject.removeEventListener(`change`, breakpointListener);
          } else {
            mediaObject?.removeListener(breakpointListener);
          }
        });
      };
    }
  }, []);

  return (
    <SystemConfigContext.Provider
      value={{
        breakpoint: _breakpoint,
      }}
    >
      {children}
    </SystemConfigContext.Provider>
  );
};

export const useSystemConfigContext = () => {
  const context = useContext(SystemConfigContext);

  if (!context) {
    throw new Error(
      `SystemConfigContext must be used within a SystemConfigProvider`
    );
  }

  return context;
};

export default useSystemConfigContext;
