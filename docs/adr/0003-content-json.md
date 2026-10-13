# ADR 0003: Page copy in one JSON file

**Status:** accepted · 2026-10-13

## Context
Copy will change (commission %, testimonials, FAQ) and a second language is likely. A CMS is overkill for v1.

## Decision
All user-facing strings in `src/content/id.json`, imported by `index.astro` and passed to components as props.

## Alternatives
- Astro content collections: built for many entries (blogs); one page doesn't need schemas and loaders.
- Headless CMS: adds a service, credentials, and build hooks. Later scope.

## Consequences
- Non-developers can edit one file.
- New locale = copy the file + add a route.
- Swapping to a CMS later = replace the import, components unchanged.
