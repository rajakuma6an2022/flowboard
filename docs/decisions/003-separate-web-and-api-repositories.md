# ADR-003: Separate repositories for the web app and the API

- Status: Accepted
- Date: 2026-10-20
- Supersedes: the mocked-API half of ADR-001

## Context

ADR-001 mocked the API with MSW. That is good for frontend depth but proves nothing about API
design, data modelling or deployment, and many target roles want the full MERN stack. The web
app and the API will deploy to different hosts (Vercel and Render).

## Decision

- This repository (`flowboard`) stays the React SPA. The API lives in its own repository,
  `flowboard-api` (Express 5 + MongoDB), with its own CI, ADRs and deployment.
- The browser only talks to the web origin. Vercel proxies `/api` to the API host, so cookies
  stay first-party later. (Details in its own ADR on Day 3.)
- The data contract is a single Zod file owned by the API (`src/contract/schemas.ts`). This
  repository keeps an identical copy at `src/lib/schemas.ts`, and CI fails if the two differ
  (a contract drift check, added on Day 3).
- MSW is kept for component tests and Storybook only.

## Alternatives considered

- **One monorepo with workspaces and a shared package**: the cleanest way to share types and
  change both sides in one pull request. Rejected here because I wanted independently
  deployable repositories and a standalone API repository to show.
- **A shared npm package for the contract**: avoids copying but needs publishing and a release
  for every field change. Too heavy for one developer.
- **OpenAPI plus generated clients**: the right tool for large teams or public APIs.
- **Keep MSW as the backend**: cheapest, but no real persistence, concurrency or deployment.

## Consequences

- Easier: independent deploys (no Vercel build changes), focused repositories, and an API repo an
  interviewer can read on its own.
- Harder: two repositories and two sets of pull requests; a contract change touches both; the
  drift check relies on the API repository being public (or on a token). Free-tier API hosting
  sleeps when idle, which the web app has to handle.
