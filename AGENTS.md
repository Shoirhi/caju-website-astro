# Repository Guidelines

## Project Structure & Module Organization
Source lives in `src/`, with route-facing pages under `src/pages`, shared Astro components in `src/components`, and utilities in `src/lib`. Content collections and definitions sit in `content.config.ts` and the `src/content` subfolders created per collection. Global styling is centralized in `src/styles`, while static assets ship from `public/`. Keep new feature directories shallow; co-locate components, styles, and tests within the same feature folder when practical.

## Build, Test, and Development Commands
Install dependencies with `pnpm install`. Use `pnpm dev` for the local dev server, `pnpm build` for optimized static output, and `pnpm preview` to rehearse the production bundle. Reach for `pnpm astro check` when you need a fast syntax and types sanity pass before pushing.

## Coding Style & Naming Conventions
Follow the existing 4-space indentation used in Astro, TypeScript, and JSX files. Prefer PascalCase for components, camelCase for helpers, and kebab-case for files exposed as routes (e.g., `blog/index.astro`). Keep imports path-alias friendly by relying on the `@/` prefix configured for `src`. Run the Tailwind plugin via Vite automatically; avoid duplicating utility classes when `tailwind-merge` already covers the pattern.

## Testing Guidelines
The project does not yet include a formal test runner—add end-to-end coverage with Playwright or integration checks with Astro’s testing utilities when extending critical flows. Store new tests beside the feature they cover (for example, `src/pages/blog/blog.spec.ts`). Document manual verification steps in the pull request when automated coverage is missing.

## Commit & Pull Request Guidelines
Commit messages in this repo trend toward conventional summaries (imperative verbs, <72 characters). Reference related issues in the body when applicable (`Refs #123`). For pull requests, include a concise problem statement, screenshots or screen recordings for UI changes, and a checklist of manual or automated tests executed. Ensure the diff keeps content, components, and assets aligned with the structure noted above before requesting review.
