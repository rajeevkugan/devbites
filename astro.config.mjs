import { defineConfig } from 'astro/config';

// Fully static output: host `dist/` on Netlify, Cloudflare Pages, GitHub Pages, etc.
export default defineConfig({
  site: 'https://devbites.com',
  compressHTML: true,
});
