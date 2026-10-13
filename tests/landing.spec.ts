import { test, expect } from '@playwright/test';

test('landing renders, CTAs lead to signup, FAQ page opens', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('main ol > li')).toHaveCount(4);
  await expect(page.locator('main a[href="/daftar"]')).toHaveCount(3);

  await page.getByRole('link', { name: 'Lihat FAQ' }).click();
  await expect(page).toHaveURL(/\/faq$/);
  const first = page.locator('main details').first();
  await first.locator('summary').click();
  await expect(first).toHaveAttribute('open', '');
});

test('empty submit shows errors and focuses first field', async ({ page }) => {
  await page.goto('/daftar');
  await page.getByRole('button', { name: 'Kirim pendaftaran' }).click();
  await expect(page.locator('#name')).toBeFocused();
  await expect(page.locator('#name')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('#email-error')).not.toBeEmpty();
  await expect(page.locator('#agree-error')).not.toBeEmpty();
});

test('valid submit succeeds; API rejects bad input', async ({ page, request }) => {
  await page.goto('/daftar');
  await page.getByLabel('Nama lengkap').fill('Uji Coba');
  await page.getByLabel('Email').fill('uji@contoh.com');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Kirim pendaftaran' }).click();
  await expect(page.getByRole('status')).toHaveText(/Terima kasih/);

  const res = await request.post('/api/signup', { data: { name: 'x', email: 'bad', agree: false } });
  expect(res.status()).toBe(400);
  expect(Object.keys((await res.json()).errors).sort()).toEqual(['agree', 'email', 'name']);
});
