# Devbites Inc. website

Static Astro site. Content lives in `src/data/site.ts`; page in `src/pages/index.astro`; styles in `src/styles/global.css`.

```bash
npm install
npm run dev      # http://127.0.0.1:4321
npm run build    # static output in dist/ (host on Netlify, Cloudflare Pages, GitHub Pages…)
```

## Before launch
- Confirm the contact address (`site.email`, currently the placeholder `info@devbites.ca`) and the domain in `astro.config.mjs`.
- Client logos: drop approved files in `public/clients/<name>.svg` and set `logo` on the entry in `src/data/site.ts`. Until then the strip shows text names.
- Case-study images are from the 2018 portfolio (`public/work/`). BMO Life mocks show BMO branding; confirm you may show them.
