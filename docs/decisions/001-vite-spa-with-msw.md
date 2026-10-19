# ADR-001: Vite SPA with a mocked API (MSW) instead of Next.js

- Status: **Partly superseded by [ADR-003](003-separate-web-and-api-repositories.md)** (the SPA decision stands; the mocked-API decision does not)
- Date: 2026-10-19

## Context

Flowboard is a highly interactive, client-heavy app (drag and drop, optimistic updates,
keyboard handling). It has no SEO requirement and no server-rendered data. I also want
failure paths (500, 409, offline) to be testable on demand, which a real shared backend
makes awkward. A separate project (Ledger) already covers Next.js and a real backend.

## Decision

Use React + Vite + TypeScript as a single-page app. Mock the REST API with MSW, running in
the browser (dev, tests and the deployed demo) with a persistent in-browser store.

## Alternatives considered

- **Next.js**: adds server rendering and routing conventions I do not need here, and would
  duplicate what Ledger already demonstrates.
- **json-server or a tiny Express API**: needs hosting, cannot be shipped inside the static
  demo, and makes failure injection harder.
- **Mocking inside components or hooks**: bypasses the real fetch and Query code, so tests
  would not exercise the code that runs in production.

## Consequences

- Easier: deterministic error testing, zero-cost deployment, same handlers for dev, tests
  and the live demo.
- Harder: the README must state plainly that the API is mocked. A service worker must be
  served correctly in production, which I verify on deploy.
- Not shown here: real auth or a real database (that is Ledger's job).

## Update (2026-10-20)

I replaced the mocked API with a real Express + MongoDB backend in its own repository
(see ADR-003). The SPA choice is unchanged. MSW stays, but only for component tests and
Storybook, where deterministic network responses matter. The live demo now uses the real API.
