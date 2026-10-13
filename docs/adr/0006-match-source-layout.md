# ADR 0006: Match the source layout 1:1, keep content our own

**Status:** accepted · 2026-10-14 · supersedes the visual choices in DESIGN_SYSTEM v1

## Context
A side-by-side screenshot comparison ([COMPARISON.md](../COMPARISON.md)) showed the clone had drifted: 2 sections missing, header/footer simplified, different layouts, type and colors. The brief is "copy this page". The product owner asked for a 1:1 match and for the FAQ to work like the source (dark band + button).

## Decision
1. Match the source's **layout, section order, sizes, spacing, colors, typography and behavior**, using values measured with Playwright.
2. Keep **content our own**: brand, logo glyph, copy, illustrations, partner names, social/payment items.
3. FAQ on the landing page is a band with a button, like the source. The Q&A lives on `/faq`.
4. The source's CTAs leave for an external signup portal. Ours go to `/daftar`, which hosts the signup form (keeps the API + tests from v1).
5. Build flat files (`faq.html`) so Pages serves `/faq` without a redirect.

## Alternatives
- Keep v1 "same structure, own design": rejected by the product owner after comparison.
- Copy source assets/copy verbatim for a true pixel match: rejected. Not ours to publish.

## Consequences
- Header/footer become shared components in `layouts/Base.astro` (now 3 pages).
- PRD stories US-1, US-5, US-6 updated.
- Every visual change is checked with `npm run compare` (napkin rule 8).
