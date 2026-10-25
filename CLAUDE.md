# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run build            # Production build
npm run preview          # Preview production build

# Testing & Validation
npm run check            # Run all checks (svelte-check, oxfmt, oxlint, cspell, test)
npm run test             # Run Vitest tests
npm run svelte-check:check  # Type check only

# Linting & Formatting
npm run oxlint:fix       # Auto-fix lint issues (oxlint)
npm run oxfmt:fix        # Auto-format code under src/ (oxfmt)
npm run fix              # Run all auto-fixes
```

## Architecture

This is a SvelteKit v2 (Svelte 5) portfolio site using TypeScript and Tailwind CSS.

### Key Directories
- `src/lib/component/` - Reusable Svelte components
- `src/lib/functions/` - Utility functions
- `src/lib/server/` - Server-side only code (used in +page.server.ts)
- `src/lib/schemas/` - Zod validation schemas
- `src/routes/` - SvelteKit file-based routing

### Routes Structure
- `/` - Home page with sections for Develop, Works, Books, About
- `/about` - Career timeline
- `/develop` - Personal projects list
- `/works` - Professional project portfolio
- `/books` - Book recommendations
- `/contact` - Contact form (uses sveltekit-superforms + Zod)
- `/privacy` - Privacy policy

### Data Flow
- Server data loading via `+page.server.ts` files
- Form handling with sveltekit-superforms
- Markdown processing pipeline: remark-parse → remark-rehype → rehype plugins → rehype-stringify

## Code Style

- Formatting is enforced by oxfmt (`.oxfmtrc.json`): **tabs**, **single quotes**, **no trailing commas**
- Linting is enforced by oxlint with its default rules (`.oxlintrc.json`)
- Follow existing import ordering: Svelte/SvelteKit → external → `$lib/*` → relative → type imports

## Agent Rules

- **Do not commit.** Never run `git commit` (or push). Leave changes in the working tree; the user commits manually.
