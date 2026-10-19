# Flowboard

An accessible Kanban board built with React, TypeScript and TanStack Query.
The point of this project is depth, not novelty: keyboard drag and drop, optimistic
updates that roll back correctly when the server fails, and a typed, tested data layer.

> **Status:** work in progress

## Important: the API is mocked

All data comes from a **mocked REST API (MSW) running in the browser**, with data persisted
in `localStorage`. There is no real backend. This is intentional so failures (500, 409,
offline) can be injected and tested. See `docs/decisions/001-vite-spa-with-msw.md`.

## Scripts

| Command                   | What it does                        |
| ------------------------- | ----------------------------------- |
| `npm run dev`             | Start the dev server                |
| `npm test`                | Run unit and component tests        |
| `npm run lint`            | Lint with oxlint                    |
| `npm run typecheck`       | Type-check with `tsc -b`            |
| `npm run build`           | Type-check and build for production |
| `npm run storybook`       | Start Storybook on port 6006        |
| `npm run build-storybook` | Build static Storybook              |

Requires Node 22 or newer.

## Design tokens (Figma variable to code)

| Figma variable       | CSS variable (`src/index.css`) | Tailwind utility      |
| -------------------- | ------------------------------ | --------------------- |
| color/primary        | `--color-primary`              | `bg-primary`          |
| color/text-secondary | `--color-text-secondary`       | `text-text-secondary` |
| color/danger-text    | `--color-danger-text`          | `text-danger-text`    |
| radius/card (12px)   | `--radius-card`                | `rounded-card`        |
| type/h1 (24px)       | `--text-h1`                    | `text-h1`             |

## Architecture decisions

Decision records live in [`docs/decisions`](docs/decisions).
