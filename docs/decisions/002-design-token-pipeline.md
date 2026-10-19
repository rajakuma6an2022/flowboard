# ADR-002: Design tokens flow from Figma variables to Tailwind theme

- Status: Accepted
- Date: 2026-10-19

## Context

I want one source of truth for color, radius, spacing and type so components never
hard-code values, and so a design change is a single edit. I also need status colors that
meet WCAG contrast when used as text.

## Decision

Define Figma variables (color, radius, spacing, type). Mirror them 1:1 as CSS custom
properties inside Tailwind v4's `@theme` block in `src/index.css`. Components use only
token-backed utilities (`bg-primary`, `rounded-card`, `text-text-secondary`).

Status colors have two roles: base colors (`success`, `warning`) for fills and icons, and
darker `*-text` variants for text, because `#16A34A` (3.3:1) and `#F59E0B` (2.15:1) fail
4.5:1 on white. Form-control borders use `#64748B` (4.76:1) to meet the 3:1 minimum for
UI components, instead of the decorative `#E2E8F0` border color.

## Alternatives considered

- **Hard-coded Tailwind palette classes** (`bg-indigo-600`): faster, but design and code
  drift apart and the Figma file stops being the source of truth.
- **CSS-in-JS theme object**: extra runtime and tooling for no benefit here.
- **Style Dictionary / Tokens Studio export**: powerful but more setup than a 7-day
  project justifies. Tokens are copied manually and kept in sync by name.

## Consequences

- Easier: re-theming, consistent contrast, and design review against Figma by token name.
- Harder: tokens are synced manually; they can drift if I forget. The README lists the
  mapping table.
