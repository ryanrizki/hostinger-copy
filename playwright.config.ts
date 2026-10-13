import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: { baseURL: 'http://localhost:8788' },
  // Wrangler, not `astro preview`: only Wrangler serves functions/ (the signup API).
  webServer: {
    command: 'npm run build && npx wrangler pages dev --port 8788',
    url: 'http://localhost:8788',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
