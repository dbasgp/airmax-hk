Project: AirMax.hk — DBA Air Coolers Showcase & WhatsApp Leads
Build a fast, animated, bilingual (English + Traditional Chinese) showcase site for DBA's air cooler range, aimed at the Hong Kong market. No cart, no checkout, no payments — this is a showcase that funnels visitors to WhatsApp to enquire/order. Astro + Tailwind + GSAP + Lenis. Deploy on Render as a Static Site.
Brand: AirMax — consumer-facing HK brand fronting DBA air coolers. Premium but approachable. Same design quality as our DryTech site: clean, technical-premium, generous whitespace, restrained palette + one cool accent, large product photography, distinctive not templated. Full-page scroll animation feel (GSAP + Lenis), respecting prefers-reduced-motion.
Languages: English + Traditional Chinese (繁體). Astro i18n routing: /en/... and /zh/..., language switcher in header. All product data and UI strings translatable. Default to 繁體 for HK visitors, EN fallback. hreflang tags for SEO.
Lead capture = WhatsApp redirect. Every "Enquire" / "Order" CTA opens https://wa.me/<number>?text=<pre-filled message> with product context. A simple enquiry form (name, product interest, message) composes a WhatsApp message and opens wa.me. No backend, no email service.
Products live in a typed bilingual src/data/products.ts (I'll provide it). Show price as reference info if desired, but no purchasing.
Sections:

Home — animated hero, featured coolers, brand promise, CTA to range + WhatsApp
Product range — animated cards, coverage/airflow specs, per-product "Enquire on WhatsApp"
Product detail (or expandable cards) — gallery, full specs, enquire CTA
Why AirMax — feature grid (cooling power, air purification, smart control, quiet, coverage)
Enquiry form → WhatsApp redirect
About / Contact (WhatsApp + email), footer with bilingual links

Quality bar: Lighthouse 90+; mobile-first; semantic HTML; hreflang for EN/繁體; sitemap + robots.txt; lazy-loaded modern-format images; accessible; proper meta/OG per language.
Deliverables: Working Astro repo; bilingual src/data/products.ts; README with local-dev + Render static-deploy steps.