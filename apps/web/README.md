# RADCOM Web (Next.js SSG)

Acest app este baza noului site, optimizat pentru Cloudflare Pages (static export).

## Comenzi

```bash
pnpm --filter radcom-web dev
pnpm --filter radcom-web build
```

## Note
- `next.config.mjs` folosește `output: "export"` pentru build static.
- Imaginile vor veni din Sanity CDN (fără Cloudinary în faza 1).
- Publicare: build la fiecare publicare în Sanity (webhook Cloudflare Pages).

## Cloudflare Pages (free) – setup rapid
1. Creează un proiect Cloudflare Pages și conectează repo-ul.
2. Build settings:
   - **Build command:** `pnpm --filter radcom-web build`
   - **Build output:** `apps/web/out`
   - **Root directory:** `/`
3. Env vars (Pages):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (ex: `production`)
   - `NEXT_PUBLIC_SANITY_API_VERSION` (opțional, ex: `2024-01-01`)

## Webhook Sanity → Cloudflare Pages
1. În Cloudflare Pages: **Settings → Builds & deployments → Deploy hooks** → creează un hook.
2. În Sanity Studio: **Settings → API → Webhooks** → adaugă un webhook:
   - **URL:** hook-ul generat de Cloudflare
   - **Triggers:** `create`, `update`, `delete`
   - **Filter (opțional):** `_type in ["home","page","service","solution","article","job","partner","settings"]`
