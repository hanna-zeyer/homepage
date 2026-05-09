import { defineConfig } from 'astro/config';

export default defineConfig({
  // If deploying to hanna-zeyer.github.io/homepage, keep base: '/homepage'
  // If using a custom domain (e.g. hanna-zeyer.de), remove the base line entirely.
  site: 'https://hanna-zeyer.github.io',
  base: '/homepage/',
});
