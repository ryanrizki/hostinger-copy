# Source vs Clone: Visual Comparison

How: `npm run compare` → `compare/source-*.png` vs `compare/clone-*.png` (1440 + 375). Screenshots are git-ignored (source images are Hostinger's content). Re-run after every visual change and update this table.

Last run: 2026-10-14 (after v2 redeploy) · clone = https://hostinger-copy.pages.dev (same heights as local build)

| Height | Source | Clone |
|--------|--------|-------|
| Desktop 1440 | ~5460px | ~3720px (v1) → **~5220px (v2)** |
| Mobile 375 | ~5660px | ~4640px (v1) → **~5340px (v2)** |

## Gaps

| # | Section | Source | Clone v1 | Gap | Status (v2) |
|---|---------|--------|-----------|-----|--------|
| 1 | Header | Logo, 5 nav dropdowns, language, account; hamburger on mobile | Logo + "Gabung" button | Big | Done: same nav structure, dropdowns, language, account, hamburger |
| 2 | Hero | H1 regular weight, 1 line, 1 button | Added eyebrow, badge, 3 facts; extra-bold H1 | Medium | Done: H1 regular, 1 line, 1 button |
| 3 | Testimonials | Grey borderless cards, quote icon, partner logo; arrows / dots | White bordered cards, initials avatar; scroll-snap | Medium | Done: grey borderless cards, quote icon, partner wordmark, mobile dots |
| 4 | Steps | Centered columns, big violet number, button below | Left-aligned, number chip, no button | Medium | Done: centered, violet numbers, button below |
| 5 | Benefits | Lavender bg, 2 columns: icon list + large illustration | 3 cards grid | Big | Done: lavender, 2 columns, own SVG illustration |
| 6 | FAQ | Dark band + button linking out | Accordion (5 Q&A) | Big | Done: dark band + button (as source); Q&A on `/faq` |
| 7 | Media | Section with outline button + banners | Missing | Big | Done: outline button + video slot (placeholder, no embed) |
| 8 | Program terms | Illustration + text + button, 2 columns | Missing | Big | Done: 2 columns, own SVG illustration |
| 9 | Final CTA | Dark band + button | Signup form on dark bg | Medium | Done: dark band + button; form moved to `/daftar` |
| 10 | Footer | 6 columns, socials, payments, legal | One line | Big | Done: breadcrumb, 6 columns (mobile accordions), socials, payments, legal |
| 11 | Style | DM Sans, regular headings, purple-navy, lavender bands, flat grey cards | Plus Jakarta bold, slate navy, grey, bordered cards | Medium | Done: DM Sans regular headings, measured colors + sizes |

## Remaining differences (accepted)

- Illustrations are abstract SVG, not photos of people
- Partner logos are text wordmarks; social/payment logos are text chips
- Media video is a static placeholder (source embeds a third-party video player)
- Page is ~240px shorter on desktop: own copy has different line lengths, smaller footer

## Root cause

Discovery was built from DOM text + computed styles because browser screenshots below the fold were blank. Nobody looked at the full rendered page before building. The design-system skill then pushed visuals further away.

**Fix in process:** napkin rule 8 + `npm run compare` + screenshot-first method in [DISCOVERY.md](DISCOVERY.md).

## Line we keep (not copied even in a close match)

- Brand name, logo, all copy: own (fictional "AwanHost")
- Photos / illustrations: own simple shapes, no Hostinger images
- Partner company logos: placeholder names, no real logos
- Payment / social logos in footer: text or generic icons only
