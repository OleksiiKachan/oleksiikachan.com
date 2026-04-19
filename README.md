# oleksiikachan.com

Personal portfolio site built with Next.js.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: SASS
- **Animation**: Framer Motion
- **Testing**: Vitest + React Testing Library
- **Package Manager**: pnpm

## Getting Started

**Prerequisites**: Node 24, pnpm

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start dev server with Turbo |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Lint all files |
| `pnpm test:unit` | Run unit tests |
| `pnpm check-types` | TypeScript type check |

## Pages

| Route | Description |
|---|---|
| `/about` | About / hero |
| `/projects` | Projects listing |
| `/projects/[id]` | Project detail |
| `/timeline` | Experience timeline |

## Project Structure

```
src/
├── app/          # Next.js App Router pages
├── scenes/       # Full-page components
├── components/   # Reusable UI components
├── data/         # Hardcoded content (about, projects, timeline)
├── config/       # App config (animations, navigation)
├── analytics/    # GTM, bot detection
├── client/       # Client utilities (breakpoints, context)
├── hooks/        # React hooks
├── lib/          # Utility functions
└── styles/       # SASS variables and breakpoints
```
