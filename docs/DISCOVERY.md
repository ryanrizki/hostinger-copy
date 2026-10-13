# Discovery

Source: `https://www.hostinger.com/id/afiliasi` (read 2026-10-13). Copy below is paraphrased; the clone uses its own wording and a placeholder brand.

## Page breakdown

| # | Section | Layout | Content | CTA |
|---|---------|--------|---------|-----|
| 1 | Header | Logo only, dark bar | Brand mark | – |
| 2 | Hero | Dark navy, centered, single column | H1 program name, one-line value prop (big commission, free to join) | Primary: "Daftar program afiliasi" → external affiliate portal |
| 3 | Testimonials | Carousel of quote cards, prev/next arrows | 3–4 partner quotes (high conversion, on-time payout, good support), photo + name | – |
| 4 | How it works | 4 numbered steps | Sign up in < 1 min → track in dashboard → use ready-made banners → claim commission (starts 40%, grows with sales) | Secondary: "Daftar afiliasi" |
| 5 | Benefits | 3 columns + image | High conversion, performance-based commission, easy promo assets | – |
| 6 | Resources | 3 cards | FAQ, Media assets, Program terms | Links: "Cek FAQ", "Lihat semua media", "Lihat selengkapnya" |
| 7 | Final CTA | Centered banner | Better performance = higher commission | "Daftar Afiliasi" |
| 8 | Footer | Site-wide footer | Links, legal | – |
| – | Cookie banner | Bottom overlay | Accept / reject / settings | – |

### Visual tokens observed

- Font: DM Sans
- Hero bg: `rgb(17,12,41)` (deep navy-purple)
- Primary button: `rgb(103,61,230)` (violet), radius 12px
- H1: 56px, regular weight
- Body: white, light-grey cards
- Page height ~5300px desktop

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
6. Resource links (FAQ, media, terms): FAQ becomes an on-page accordion; media + terms link to `#` placeholders.
7. Cookie banner: out of scope (no tracking cookies used).
8. Static page; only the signup endpoint runs server-side.

## Open questions (for interviewer)

1. Pixel match or "same structure, own design system" acceptable? → assumed the latter.
2. Should signup be real (stored) or mocked? → assumed mocked, optional KV storage.
3. Any required stack or host? → chose Astro + Cloudflare Pages (see ADRs).
4. Indonesian only, or bilingual? → assumed ID only, i18n-ready.
