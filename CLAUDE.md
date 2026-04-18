All development must follow TDD (use the `/tdd` skill).

Portfolio site with no API routes — all data is currently hardcoded in page files.

## Code Style

- Use `type` over `interface` for all type definitions
- Use arrow functions over the `function` keyword
- Do not use type imports from `react`. Use the global `React.*` namespace instead (e.g., `React.ReactNode`, not `import type { ReactNode } from 'react'`)
