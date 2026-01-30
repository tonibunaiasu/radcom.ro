# Sanity Studio (RO/EN)

Setup (necesită cont Sanity):

1) `cd apps/studio`
2) `pnpm create sanity@latest`
3) Alege:
   - Project: `radcom`
   - Dataset: `production`
   - Template: `Clean project` (cu TypeScript)
4) Adaugă schema pentru: pages, services, serviceDetail, testimonials, awards, news, careers, settings.
5) Configurează localizarea RO/EN în schema (fields localizate).

Notes:
- Vom conecta Next.js la Sanity prin `@sanity/client` + `@sanity/image-url`.
- Pentru Cloudflare Pages: publicăm site-ul static, rebuild on publish (webhook).
