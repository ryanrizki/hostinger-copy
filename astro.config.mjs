import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // faq.html, not faq/index.html: Pages serves /faq directly instead of redirecting to /faq/.
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
