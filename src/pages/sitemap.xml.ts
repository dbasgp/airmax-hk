import type { APIRoute } from 'astro';
import { products } from '../data/products';

const site = 'https://airmax.hk';
const locales = ['zh', 'en'] as const;

const staticRoutes = ['', '/products', '/why-airmax', '/enquiry', '/about'];
const productRoutes = products.map((p) => `/products/${p.id}`);
const allRoutes = [...staticRoutes, ...productRoutes];

function url(locale: string, path: string) {
  return `${site}/${locale}${path}`;
}

export const GET: APIRoute = () => {
  const urls = allRoutes.flatMap((path) =>
    locales.map(
      (locale) => `  <url>
    <loc>${url(locale, path)}</loc>
    <xhtml:link rel="alternate" hreflang="zh-HK" href="${url('zh', path)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url('en', path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url('zh', path)}"/>
  </url>`
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
