# RADCOM Website - Documentație

Website RADCOM construit pe Next.js + Payload CMS (monorepo). Limbi: EN (principală) și RO.

## Stack curent
- Frontend: Next.js 15 (App Router)
- CMS: Payload 3 (Next.js admin)
- DB local: SQLite (`apps/payload/payload.db`)
- Media: Payload Media collection + assets locale fallback
- Local: `web` pe 3000, `payload` pe 3001

## Structură repo
- `apps/web` - website public (Next.js)
- `apps/payload` - CMS + admin (Payload)
- `apps/web/app/lib/sanity-queries.ts` - client Payload (nume fișier păstrat)
- `apps/web/app/lib/content.ts` - fallback content (RO/EN)

## Rulare locală
```bash
pnpm install

# CMS (Payload) - http://localhost:3001/admin
pnpm --filter radcom-payload dev

# Frontend - http://localhost:3000/en
pnpm --filter radcom-web dev
```

## Environment
`apps/payload/.env`
```
DATABASE_URL=file:./payload.db
PAYLOAD_SECRET=...
```

`apps/web/.env`
```
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3001
```

## CMS (Payload) - colecții principale
- Pages (pagini statice: Despre, Contact, Politici)
- Services (iFleet, OptiFare, eXact)
- Industries
- Articles (blog)
- Partners (banda parteneri)
- Jobs (Cariere)
- Media (imagini)
- Globals: Home, Settings

## Scripturi utile (Payload)
```bash
# Seed conținut inițial
pnpm --filter radcom-payload exec tsx scripts/seed.ts

# Copiere RO → EN (fallback)
pnpm --filter radcom-payload exec tsx scripts/sync-ro-to-en.ts

# Traduceri EN (core)
pnpm --filter radcom-payload exec tsx scripts/translate-en-core.ts

# Creare admin
pnpm --filter radcom-payload exec tsx scripts/create-admin.ts
```

## Acces
- Frontend: `http://localhost:3000/en` și `http://localhost:3000/ro`
- Admin: `http://localhost:3001/admin`

## Monitorizare
- UptimeRobot: frontend + admin (monitorizare manuală)

---

**Actualizat**: 3 februarie 2026
