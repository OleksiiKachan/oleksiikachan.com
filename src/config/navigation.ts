export const ROUTES = [`/about`, `/projects`, `/timeline`] as const;

export type Route = (typeof ROUTES)[number];

export type NavItem = {
  caption: string;
  href: Route;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { caption: `About me`, href: `/about` },
  { caption: `Projects`, href: `/projects` },
  { caption: `Timeline`, href: `/timeline` },
];

export const isNavItemActive = (href: Route, pathname: string): boolean =>
  pathname === href || pathname.startsWith(`${href}/`);
