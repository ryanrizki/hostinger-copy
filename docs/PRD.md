# PRD: AwanHost Affiliate Landing Page

Status: v1 · Owner: Ryan Rizki · Source analysis: [DISCOVERY.md](DISCOVERY.md)

## 1. Goal

Turn a visiting creator into a registered affiliate. One page, one action: sign up.

## 2. Non-goals

- Affiliate dashboard, tracking links, payouts
- Auth / accounts
- CMS, multi-locale switcher (structure ready, not built)
- Cookie consent (no tracking cookies)

## 3. Users

| Persona | Need | Worry |
|---------|------|-------|
| Tech blogger / YouTuber | Recurring income from hosting reviews | "Is the commission worth it?" |
| Web agency / freelancer | Earn on hosting they already recommend | "Is signup a hassle?" |
| Beginner creator | Low-risk side income | "Do they actually pay?" |

## 4. User stories + acceptance criteria

**US-1 Value at a glance**: As a visitor, I see what the program offers within the first screen.
- [ ] Hero shows program name, one-line value prop, commission figure, primary CTA
- [ ] Hero fits in 1 viewport at 375×667 and 1440×900

**US-2 Trust**: As a visitor, I see that other partners are paid and happy.
- [ ] ≥3 testimonial cards with name, role, quote
- [ ] Horizontal scroll on mobile with native scroll-snap; no JS carousel

**US-3 How it works**: As a visitor, I understand the steps to start earning.
- [ ] 4 numbered steps, each with title + one sentence
- [ ] Step 4 states the starting commission from content data

**US-4 Why join**: As a visitor, I see why this program beats others.
- [ ] 3 benefit items, icon + title + sentence

**US-5 Questions answered**: As a visitor, I can get answers without leaving the page.
- [ ] FAQ accordion, ≥5 items, native `<details>`, keyboard operable

**US-6 Sign up**: As a visitor, I can register from the page.
- [ ] Form: name (required), email (required, valid), website/channel URL (optional, valid URL), agree-to-terms checkbox (required)
- [ ] Client-side validation with inline error text tied via `aria-describedby`
- [ ] POST `/api/signup` → 200 shows success message; 400 shows field errors from server; network/5xx shows retry message
- [ ] Submit button disabled while sending
- [ ] Every CTA on the page scrolls to the form

## 5. Content

All copy lives in `src/content/id.json`. No string in components. Brand name, commission %, testimonials, steps, benefits, FAQ: all data.

## 6. Non-functional requirements

| Area | Target |
|------|--------|
| Performance | Lighthouse ≥ 95 mobile; < 50 KB JS shipped |
| Accessibility | WCAG 2.1 AA: contrast, focus visible, labels, landmarks, reduced motion respected |
| SEO | Title, meta description, OG tags, one H1, semantic sections, `lang="id"` |
| Responsive | 360px → 1440px, no horizontal scroll |
| Security | Server validates all input; never trusts client; no secrets in repo |

## 7. Success metrics (if this went live)

- Signup conversion: form submits / unique visitors
- CTA click-through: CTA clicks / visitors
- Form error rate: failed validations / submit attempts (target < 15%)

## 8. Scope

**In v1:** sections above, mocked signup API, Cloudflare Pages deploy, 3 Playwright tests.
**Later:** store signups in KV/D1, Turnstile bot check, English locale, analytics events, A/B test hero copy.

## 9. Risks

| Risk | Mitigation |
|------|-----------|
| Copying brand / copyrighted copy | Fictional brand, own copy, placeholder avatars |
| Spam signups once live | Turnstile + rate limit (later scope) |
| Scope creep into pixel-perfect clone | Graded on process; design system defines look |
