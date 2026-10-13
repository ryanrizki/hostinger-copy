# Design System (v2: matched to source)

Tokens live in `src/styles/global.css` under `@theme`. Values are **measured** from the source page with Playwright (`getComputedStyle` + bounding boxes), not estimated. See [COMPARISON.md](COMPARISON.md).

## History

- **v1** (2026-10-13) came from the `ui-ux-pro-max` skill: slate navy, Plus Jakarta Sans, bordered cards. Built before anyone looked at the rendered source, so it drifted from the brief.
- **v2** (2026-10-14) replaces it with the source page's measured visual language. Kept from v1: the UX/a11y rules (form errors, focus, reduced motion) and the token-only rule. Decision: [ADR 0006](adr/0006-match-source-layout.md).

## Color tokens

| Token | Value | Use | Contrast |
|---|---|---|---|
| `night` | `#110C29` | Nav, hero | on-dark text 18.0:1 ✅ |
| `band` | `#251951` | FAQ + final CTA bands | white 15.7:1 ✅ |
| `brand` | `#673DE6` | Buttons, step numbers, quote icon | white on brand 6.2:1 ✅ |
| `brand-strong` | `#5631C9` | Button hover | white 7.8:1 ✅ |
| `lavender` | `#E6E8FF` | Benefits section | body 13.1:1, muted 7.2:1 ✅ |
| `lavender-soft` | `#F5F6FF` | Media section, signup page | brand text 5.8:1 ✅ |
| `card` | `#F5F5F6` | Testimonial cards, footer | ink 16.3:1, muted 8.0:1 ✅ |
| `ink` | `#18181A` | Headings | – |
| `body` | `#222225` | Body text | – |
| `muted` | `#4A4A55` | Secondary text | 8.7:1 on white ✅ |
| `on-dark` | `#F8F9FA` | Text on night | – |
| `line` | `#DADCE0` | Dividers | decorative |
| `danger` / `success` | `#B91C1C` / `#15803D` | Form states | 6.5 / 5.0 on white ✅ |

Ratios computed with the WCAG formula.

## Typography

- **DM Sans** (Google Fonts, `display=swap`), weights 400/600/700
- Headings are **regular weight (400)**, like the source

| Role | Desktop | Mobile |
|---|---|---|
| H1 | 56/64 | 40/48 |
| H2 (`.h2`) | 48/56 | 32/40 |
| H2 terms section | 36/44 | 28/36 |
| H3 benefits | 20/28, 600 | same |
| H3 steps | 18/26, 600 | same |
| Step number | 24/32, 600, brand | 20/28 |
| Body | 16/24 | same |
| Footer | 14/20 | same |

## Layout

- Container `.wrap`: 1280px content (`max-w-page`), 40px side padding below xl, 16px on mobile
- Section `.section`: 80px vertical padding desktop, 48px mobile
- Nav: 72px desktop, 58px mobile, sticky, soft shadow
- Two-column sections (benefits, terms): illustration + text, 80px gap; stacked on mobile

## Components

| Component | Spec |
|---|---|
| `.btn` | 48px min height, 12px/40px padding, radius 12, 600 weight, brand bg. Full width on mobile |
| Outline button | Same size, 1px brand border, brand text (media section) |
| Testimonial card | `card` bg, no border, radius 16, padding 32 (24 mobile), gap 24; quote icon top, partner name bottom. Mobile: one card + dot pager |
| Step | Centered: number, title, text; button below the list |
| Band | Full-width `band` bg, centered H2 + one line + button |
| Footer column | Mobile: `<details>` accordion; desktop: always open via `::details-content` |

## Own vs source

Matched: layout, sizes, spacing, colors, type, behavior.
Ours: brand + logo glyph, all copy, illustrations (abstract SVG, no photos), partner names (fictional wordmarks), social/payment items as plain text chips.

## Accessibility rules

Skip link · one H1 per page · visible focus · touch targets ≥ 44px · reduced motion respected · labelled form fields with `aria-invalid="true"` + `aria-describedby` errors · decorative SVG `aria-hidden`.
