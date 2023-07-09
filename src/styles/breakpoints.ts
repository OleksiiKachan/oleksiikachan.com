export const mobileBreakpoint = 767;
export const tabletMinBreakpoint = mobileBreakpoint + 1;
export const tabletMaxBreakpoint = 1024;
export const desktopBreakpoint = tabletMaxBreakpoint + 1;
export const wideDesktopBreakpoint = 1920;

const breakpoints = {
  mobile: `${mobileBreakpoint}px`,
  tabletMin: `${tabletMinBreakpoint}px`,
  tabletMax: `${tabletMaxBreakpoint}px`,
  desktop: `${desktopBreakpoint}px`,
  wideDesktop: `${wideDesktopBreakpoint}px`,
};

export const mobileMQ = `(max-width: ${breakpoints.mobile})`;
export const tabletMQ = `(max-width: ${breakpoints.tabletMax}) and (min-width: ${breakpoints.tabletMin})`;
export const desktopMQ = `(min-width: ${breakpoints.desktop})`;

export const mediaQueries = {
  [mobileMQ]: `mobile`,
  [tabletMQ]: `tablet`,
  [desktopMQ]: `desktop`,
};

export default breakpoints;
