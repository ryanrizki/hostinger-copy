// Full-page screenshots of the source page and the clone, desktop + mobile.
// Usage: npm run compare            (clone = live site)
//        CLONE_URL=http://localhost:8788 npm run compare
// Output: compare/*.png (git-ignored: source screenshots are Hostinger's content, never commit them).
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const sites = {
  source: 'https://www.hostinger.com/id/afiliasi',
  clone: process.env.CLONE_URL ?? 'https://hostinger-copy.pages.dev/',
};
mkdirSync('compare', { recursive: true });
const browser = await chromium.launch();

for (const [width, tag] of [[1440, 'desktop'], [375, 'mobile']]) {
  for (const [name, url] of Object.entries(sites)) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, locale: 'id-ID' });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    // Scroll through so lazy-loaded sections render, then hide the cookie banner (never answer it).
    for (let y = 0; y < 8000; y += 400) { await page.mouse.wheel(0, 400); await page.waitForTimeout(120); }
    await page.waitForTimeout(1500);
    await page.addStyleTag({ content: '[id*=cookie i],[class*=cookie i],[class*=consent i]{display:none!important}' });
    await page.evaluate(() => window.scrollTo(0, 0));
    const file = `compare/${name}-${tag}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file, await page.evaluate(() => document.documentElement.scrollHeight) + 'px tall');
    await page.close();
  }
}
await browser.close();
