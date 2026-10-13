# ADR 0002: Tailwind CSS v4 with tokens in `@theme`

**Status:** accepted · 2026-10-13

## Context
Need consistent styling driven by a design system, fast to write, easy for AI tools to produce and for reviewers to read.

## Decision
Tailwind v4 via `@tailwindcss/vite`. Design tokens (colors, fonts, radii) are defined once in `src/styles/global.css` under `@theme`, which makes them utility classes (`bg-brand`, `font-display`).

## Alternatives
- Plain CSS with custom properties: fine, but more files and naming to manage.
- CSS-in-JS: needs a JS runtime, rejected.

## Consequences
- Tokens are the single source of truth; [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) documents them.
- No `tailwind.config.js` needed (v4 is CSS-first).
