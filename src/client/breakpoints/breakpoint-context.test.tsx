import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';

vi.mock(`./use-breakpoint`, () => ({ useBreakpoint: vi.fn() }));
vi.mock(`./use-ios-vh-fix`, () => ({ useIosVhFix: vi.fn() }));

import { useBreakpoint } from './use-breakpoint';
import { BreakpointProvider, useBreakpointContext } from './breakpoint-context';

const mockBreakpoint = (value: `mobile` | `tablet` | `desktop`) => {
  vi.mocked(useBreakpoint).mockReturnValue(value);
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <BreakpointProvider>{children}</BreakpointProvider>
);

beforeEach(() => {
  vi.resetAllMocks();
});

describe(`BreakpointProvider`, () => {
  it(`exposes isMobile true when breakpoint is mobile`, () => {
    mockBreakpoint(`mobile`);
    const { result } = renderHook(() => useBreakpointContext(), { wrapper });
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(false);
  });

  it(`exposes isTablet true when breakpoint is tablet`, () => {
    mockBreakpoint(`tablet`);
    const { result } = renderHook(() => useBreakpointContext(), { wrapper });
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  it(`exposes isDesktop true when breakpoint is desktop`, () => {
    mockBreakpoint(`desktop`);
    const { result } = renderHook(() => useBreakpointContext(), { wrapper });
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
  });

  it(`only one breakpoint flag is true at a time`, () => {
    mockBreakpoint(`tablet`);
    const { result } = renderHook(() => useBreakpointContext(), { wrapper });
    const trueCount = [
      result.current.isMobile,
      result.current.isTablet,
      result.current.isDesktop,
    ].filter(Boolean).length;
    expect(trueCount).toBe(1);
  });
});
