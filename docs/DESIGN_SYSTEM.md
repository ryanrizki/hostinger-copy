# Design System

Generated with the `ui-ux-pro-max` skill (`--design-system`, then `--domain landing|typography|ux`), then edited. Tokens live in `src/styles/global.css` under `@theme`; this file explains them.

## What the skill suggested vs what we kept

| Skill output | Kept? | Why |
|---|---|---|
| Palette: night indigo `#0F172A` + violet CTA `#7C3AED` | ✅ | Matches the source page's mood (navy hero, violet CTA) without copying its exact values |
| Pattern "AI Personalization Landing" | ❌ | Needs analytics + segments; out of scope. Used "Hero + Testimonials + CTA" (social proof before CTA) instead |
| Style "Bento Box Grid" | ⚠️ partial | Kept rounded-2xl cards + soft shadow; dropped asymmetric spans (too few items to justify) |
| Fonts Space Grotesk + Inter | ❌ | Mood tagged "crypto/DeFi". Swapped to **Plus Jakarta Sans** (from typography search: "friendly SaaS"), which is also an Indonesian-designed typeface and fits the audience |
| Hover scale 1.02 | ❌ | Motion without meaning on static cards. Hover = color/shadow only |
| UX: aria-live errors, labels, blur validation, submit feedback | ✅ | Became the form spec below |

## Color tokens

| Token | Value | Use | Contrast |
|---|---|---|---|
| `ink` | `#0F172A` | Hero + final-CTA background, headings on light | – |
| `ink-soft` | `#1E1B4B` | Cards on dark | – |
| `brand` | `#7C3AED` | Primary button, links, step numbers | white on brand 5.7:1 ✅ |
| `brand-strong` | `#6D28D9` | Button hover | white 7.1:1 ✅ |
| `brand-tint` | `#EDE9FE` | Badges, icon chips on light | brand-strong on tint 6.0:1 ✅ |
| `brand-on-dark` | `#C4B5FD` | Accents, badge text on ink | 9.7:1 on ink ✅ |
| `surface` | `#FFFFFF` | Page background | – |
| `surface-alt` | `#F8FAFC` | Alternating sections, cards | – |
| `text` | `#0F172A` | Body on light | 17.9:1 ✅ |
| `text-muted` | `#475569` | Secondary text on light | 7.6:1 (7.2 on surface-alt) ✅ |
| `text-on-dark` | `#CBD5E1` | Body on ink | 12:1 ✅ |
| `line` | `#E2E8F0` | Borders, dividers | decorative |
| `danger` | `#B91C1C` | Error text + border | 6.5:1 on white ✅ |
| `success` | `#15803D` | Success message | 5.0:1 on white ✅ |

Ratios computed with the WCAG formula (script in AI log #8), not estimated.

Rule: components use tokens (`bg-brand`, `text-muted`), never raw hex.

## Typography

- Family: **Plus Jakarta Sans** (Google Fonts, `display=swap`), fallback `system-ui, sans-serif`
- Scale (mobile → desktop): H1 `2.25rem → 3.5rem`/800 · H2 `1.75rem → 2.5rem`/700 · H3 `1.125rem`/600 · body `1rem`/400, line-height 1.6 · small `0.875rem`
- Measure: paragraphs max `65ch`

## Spacing, radius, shadow

- 4px base (Tailwind default scale). Section padding `py-16 md:py-24`. Container `max-w-6xl px-4`.
- Radius: controls `rounded-xl` (12px), cards `rounded-2xl` (16px), badges `rounded-full`
- Shadow: one level only, `shadow-sm` on cards, `shadow-lg shadow-brand/20` on primary button hover

## Components

**Button (primary):** `bg-brand text-white font-semibold rounded-xl px-6 min-h-12`. Hover `bg-brand-strong`. Focus `outline-2 outline-offset-2 outline-brand` (white outline on dark). Disabled `opacity-50 cursor-not-allowed`. One primary CTA per section.

**Card:** `bg-surface-alt rounded-2xl p-6 border border-line`. On dark: `bg-ink-soft border-white/10`.

**Step:** number chip `size-10 rounded-full bg-brand-tint text-brand-strong font-bold`, title H3, one sentence. Desktop 4 columns, mobile stacked.

**Testimonial:** card + initials avatar (`size-10 rounded-full bg-brand text-white`), quote, name + role. Row uses `overflow-x-auto snap-x` on mobile, grid on desktop.

**Accordion (FAQ):** native `<details>/<summary>`. Summary is full-width row, min height 48px, chevron rotates via `[open]` (disabled under reduced motion).

**Form field:** visible `<label>` above, input `min-h-12 rounded-xl border-line`, required marked with `*` + `aria-required`. Error text below field in `danger`, linked via `aria-describedby`, input gets `aria-invalid="true"`. Validate on blur and on submit; on submit error focus first invalid field. Status region `role="status" aria-live="polite"` for success/failure.

## Accessibility rules

- Skip link to `#main`
- One H1, sequential headings
- Focus ring always visible (never `outline: none` without a replacement)
- Touch targets ≥ 44px
- `prefers-reduced-motion: reduce` turns off transitions and smooth scroll
- Color never the only signal: errors have text, steps have numbers
- Icons are inline SVG with `aria-hidden="true"` next to visible text

## Breakpoints

Tailwind defaults: base (mobile) → `md` 768 → `lg` 1024. Tested at 375 and 1440.
