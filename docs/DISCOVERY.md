# Discovery

Source: `https://www.hostinger.com/id/afiliasi` (read 2026-10-13). Copy below is paraphrased; the clone uses its own wording and a placeholder brand.

## Method

1. **Look at the real page first.** `npm run compare` takes full-page screenshots of the source and the clone at 1440px and 375px (scrolls first so lazy sections render, hides the cookie banner without answering it). Open and read every screenshot.
2. Then read the DOM text and computed styles for exact values (fonts, colors, sizes).
3. Never build from text or code alone.

> **Correction (2026-10-14):** the first version of this breakdown came from DOM text only, because the browser screenshots below the fold came back blank. It missed the real layouts (two-column benefits, FAQ band, media and terms sections, mega footer) and the clone drifted. Rebuilt from full-page screenshots below. Gap list: [COMPARISON.md](COMPARISON.md).

## Page breakdown (verified from screenshots)

Source height: ~5460px desktop, ~5660px mobile.

| # | Section | Desktop layout | Mobile layout | CTA |
|---|---------|---------------|---------------|-----|
| 1 | Header | Dark bar: logo left, 5 dropdown nav items, language switch + account icon right | Logo + hamburger | – |
| 2 | Hero | Deep purple-navy, centered: H1 (regular weight, large), one-line subtitle, one violet button. Nothing else | Same, stacked | Primary → external portal |
| 3 | Testimonials | White bg, centered H2. 3 light-grey borderless cards, violet quote icon top-left, quote, partner company logo bottom. Prev/next arrows | One card + dot pager, swipe | – |
| 4 | Steps | White bg, centered H2. 4 centered columns: big violet number, bold title, short text. Violet button centered below | Stacked, centered, full-width button | Secondary → portal |
| 5 | Benefits | **Lavender bg**, centered H2. Two columns: left = 3 rows (small icon + bold title + text); right = large illustration (photo of person on violet panel, floating stat cards) | List, then illustration below | – |
| 6 | FAQ | **Dark purple band**, centered: H2, one line, violet button that links to a help page. Not an accordion | Same | "Cek FAQ" → external |
| 7 | Media | Very light lavender bg, centered H2, one line, outline button; banner area below | Same | Outline → media page |
| 8 | Program terms | White bg, two columns: left = illustration (person with laptop + "approved" check card, violet blocks); right = H2, text, violet button | Text + button, then illustration | → terms page |
| 9 | Final CTA | Dark purple band, centered H2, one line, violet button | Same | Primary → portal |
| 10 | Footer | Light grey: breadcrumb, 6 link columns, logo + social icons row, payment logos, legal links, copyright | Columns collapse to accordions | – |
| – | Cookie banner | Bottom overlay | Same | Out of scope |

### Visual tokens (computed)

- Font: DM Sans; headings regular weight (~400), not bold
- Hero bg: `rgb(17,12,41)`; band sections: darker purple
- Primary button: `rgb(103,61,230)`, radius 12px
- Section rhythm: white / lavender / dark purple bands alternate
- Cards: light grey, no border, no shadow

## Problem statement

**Who:** Indonesian content creators, bloggers, YouTubers, and web agencies who already reach people buying hosting.
**Job:** Decide in under a minute whether the program is worth joining, then sign up.
**Business goal:** More qualified affiliate sign-ups at zero acquisition cost per affiliate.
**Page's job:** Answer "how much can I earn, how hard is it, can I trust them?" and push to one action: sign up.

## Assumptions

1. Language: Bahasa Indonesia only for v1; content in a JSON file so a second locale is a file copy.
2. Brand: placeholder brand **"AwanHost"** (fictional), own logo text, own copy. No Hostinger assets.
3. Signup: original CTA leaves to an external portal. Clone uses an **on-page form (name, email, website/channel)** posting to a mock API, so there is a real flow to design and test.
4. Testimonials: fictional people, placeholder avatars (initials), clearly sample data.
5. Commission number (40%) kept as example data in JSON, not hardcoded.
6. FAQ, media and terms: source uses link-out sections. Clone currently has an FAQ accordion and no media/terms sections. **Pending decision**, see [COMPARISON.md](COMPARISON.md).
7. Cookie banner: out of scope (no tracking cookies used).
8. Static page; only the signup endpoint runs server-side.

## Open questions (for interviewer)

1. Pixel match or "same structure, own design system" acceptable? → first assumed the latter; after side-by-side comparison, moving to **close layout match, own brand + copy + illustrations**.
2. Should signup be real (stored) or mocked? → assumed mocked, optional KV storage.
3. Any required stack or host? → chose Astro + Cloudflare Pages (see ADRs).
4. Indonesian only, or bilingual? → assumed ID only, i18n-ready.
