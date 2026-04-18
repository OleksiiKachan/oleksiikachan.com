import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { desktopMQ, mobileMQ, tabletMQ } from 'styles/breakpoints';
import { useBreakpoint } from './use-breakpoint';

const mockMatchMedia = (matchingQuery: string) => {
  vi.stubGlobal(
    `matchMedia`,
    vi.fn((query: string) => ({
      matches: query === matchingQuery,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
};

beforeEach(() => {
  vi.restoreAllMocks();
});

describe(`useBreakpoint`, () => {
  it(`returns "desktop" when desktop media query matches`, () => {
    mockMatchMedia(desktopMQ);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe(`desktop`);
  });

  it(`returns "mobile" when mobile media query matches`, () => {
    mockMatchMedia(mobileMQ);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe(`mobile`);
  });

  it(`returns "tablet" when tablet media query matches`, () => {
    mockMatchMedia(tabletMQ);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe(`tablet`);
  });
});
