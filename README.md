# AirMax.hk

Bilingual (EN + 繁體中文) showcase site for DBA air coolers. No cart, no payments — all leads go to WhatsApp.

**Stack:** Astro 4 · Tailwind CSS 3 · GSAP 3 · Lenis · TypeScript · Static output → Render

---

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
```

Default locale is `/zh`. Both `/zh/` and `/en/` routes are pre-rendered.

---

## Product images

Images live in `public/images/products/`. Filenames must match the `image` field in `src/data/products.ts` (e.g. `debi003a.jpg`).

To download from source URLs:

```bash
# Example — repeat for each product
curl -L "https://www.dba.hk/..." -o public/images/products/debi003a.jpg
```

---

## Build + deploy

### Build locally
```bash
npm run build     # outputs to dist/
npm run preview   # preview at http://localhost:4321
```

### Render static site
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

### Manual API deploy (webhook unreliable)
```bash
curl -X POST "https://api.render.com/v1/services/<SERVICE_ID>/deploys" \
  -H "Authorization: Bearer $RENDER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

---

## i18n

Translations live in `src/i18n/index.ts`. All UI strings are in the `ui.zh` and `ui.en` objects.

Product copy (name, highlights, enquiry messages) is in `src/data/products.ts` as `{ en, zh }` pairs.

> ⚠️ Chinese copy is machine-drafted — have a native HK speaker review before launch.

---

## WhatsApp flow

Every CTA calls `waLink(text)` from `src/data/products.ts`, which encodes a pre-filled message to `wa.me/85221210503`.

The standalone enquiry form (`/[lang]/enquiry`) composes a message from name + product + message fields entirely client-side — no backend required.

---

## SEO checklist before launch

- [ ] Product images added to `public/images/products/`
- [ ] OG image at `public/og.jpg` (1200×630)
- [ ] Native speaker review of Chinese copy
- [ ] Confirm WhatsApp number +852 2121 0503
- [ ] Confirm DEBI003X price/coverage (see note in products.ts)
- [ ] Point `airmax.hk` DNS to Render
