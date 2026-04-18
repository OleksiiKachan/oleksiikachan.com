import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { isNavItemActive, NAV_ITEMS } from 'config/navigation';

describe(`isNavItemActive`, () => {
  it(`exact path match returns true`, () => {
    expect(isNavItemActive(`/about`, `/about`)).toBe(true);
  });

  it(`sub-path activates parent route`, () => {
    expect(isNavItemActive(`/projects`, `/projects/agw`)).toBe(true);
  });

  it(`prefix without slash does not match`, () => {
    expect(isNavItemActive(`/about`, `/aboutx`)).toBe(false);
  });

  it(`different route returns false`, () => {
    expect(isNavItemActive(`/timeline`, `/about`)).toBe(false);
  });
});

describe(`NAV_ITEMS`, () => {
  it(`every href maps to an existing page file`, () => {
    const root = join(process.cwd(), `src`, `app`);
    NAV_ITEMS.forEach(({ href }) => {
      const dir = href.replace(/^\//, ``);
      const pagePath = join(root, dir, `page.tsx`);
      expect(existsSync(pagePath), `Missing page for route ${href}`).toBe(true);
    });
  });

  it(`no item points to /contact`, () => {
    expect(NAV_ITEMS.map((item) => item.href)).not.toContain(`/contact`);
  });
});
