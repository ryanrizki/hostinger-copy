# Source vs Clone: Visual Comparison

How: `npm run compare` → `compare/source-*.png` vs `compare/clone-*.png` (1440 + 375). Screenshots are git-ignored (source images are Hostinger's content). Re-run after every visual change and update this table.

Last run: 2026-10-14 · clone = https://hostinger-copy.pages.dev

| Height | Source | Clone |
|--------|--------|-------|
| Desktop 1440 | ~5460px | ~3720px |
| Mobile 375 | ~5660px | ~4640px |

## Gaps

| # | Section | Source | Clone now | Gap | Status |
|---|---------|--------|-----------|-----|--------|
| 1 | Header | Logo, 5 nav dropdowns, language, account; hamburger on mobile | Logo + "Gabung" button | Big | Open |
| 2 | Hero | H1 regular weight, 1 line, 1 button | Added eyebrow, badge, 3 facts; extra-bold H1 | Medium | Open |
| 3 | Testimonials | Grey borderless cards, quote icon, partner logo; arrows / dots | White bordered cards, initials avatar; scroll-snap | Medium | Open |
| 4 | Steps | Centered columns, big violet number, button below | Left-aligned, number chip, no button | Medium | Open |
| 5 | Benefits | Lavender bg, 2 columns: icon list + large illustration | 3 cards grid | Big | Open |
| 6 | FAQ | Dark band + button linking out | Accordion (5 Q&A) | Big | **Decision needed** |
| 7 | Media | Section with outline button + banners | Missing | Big | Open |
| 8 | Program terms | Illustration + text + button, 2 columns | Missing | Big | Open |
| 9 | Final CTA | Dark band + button | Signup form on dark bg | Medium | Keep form (shows API + tests); match band style above it |
| 10 | Footer | 6 columns, socials, payments, legal | One line | Big | Open |
| 11 | Style | DM Sans, regular headings, purple-navy, lavender bands, flat grey cards | Plus Jakarta bold, slate navy, grey, bordered cards | Medium | Open |

## Root cause

Discovery was built from DOM text + computed styles because browser screenshots below the fold were blank. Nobody looked at the full rendered page before building. The design-system skill then pushed visuals further away.

**Fix in process:** napkin rule 8 + `npm run compare` + screenshot-first method in [DISCOVERY.md](DISCOVERY.md).

## Line we keep (not copied even in a close match)

- Brand name, logo, all copy: own (fictional "AwanHost")
- Photos / illustrations: own simple shapes, no Hostinger images
- Partner company logos: placeholder names, no real logos
- Payment / social logos in footer: text or generic icons only
