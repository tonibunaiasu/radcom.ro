# Website RADCOM - Documentație

Website modern și profesional pentru RADCOM, construit cu React, TypeScript, TailwindCSS și tRPC, cu sistem complet de gestionare conținut (CMS).

## 📋 Caracteristici Principale

### Design și Branding
- Culori brand RADCOM respectate: Primary Blue (#003DA5), Accent Yellow (#FFD700), Neon Green (#00FF00)
- Design responsive pentru toate dispozitivele (mobile, tablet, desktop)
- Header sticky cu navigare organizată pe categorii
- Footer complet cu link-uri și social media

### Structura Website-ului

#### 1. Homepage
- Hero section cu tagline "Soluții integrate hardware + software"
- Secțiune statistici (Top 3 companii, Servicii IT&C Complete, Soluții Perfect Integrate)
- Grid servicii principale (6 servicii featured)
- Soluții pe industrii (5 industrii)
- Avantaje cu 4 pilari: **Responsivitate**, **Customizare**, **Elemente UI**, **Cod curat**
- Carousel parteneri
- CTA section pentru contact

#### 2. Servicii
Pagini dedicate pentru fiecare categorie:
- **Dezvoltare Software**: Transport, Medical, Telecom
- **Infrastructură**: Rețele de Telecomunicații, Rețele de Fibră Optică
- **Programe Europene**: Consultanță și finanțare

Fiecare serviciu include: descriere, tehnologii utilizate, beneficii, case studies

#### 3. Soluții pe Industrii
Pagini dedicate pentru:
- **Transport**: Sisteme management flote, tracking GPS, ticketing electronic
- **Medical**: Dosar medical electronic, portal pacienți, imagistică medicală
- **Telecom**: VoIP, SMS/MMS, USSD, SS7, call center, IVR
- **Media & Mobile**: Aplicații mobile, platforme multimedia
- **Internet**: E-commerce, gestiune identitate utilizatori

Fiecare soluție include: provocări rezolvate, beneficii specifice

#### 4. Compania
Pagină cu 3 tabs:
- **Despre**: Informații despre companie, statistici (15+ ani experiență, 500+ proiecte, 100+ clienți)
- **Echipă**: Grid cu membri echipă (nume, poziție, departament, biografie, contact)
- **Certificări**: ISO 9001:2015, ISO 27001:2013, Top 3 Companii IT România, Partener Microsoft Gold

#### 5. Cariere
- Secțiune beneficii (4 pilari: Proiecte Inovatoare, Dezvoltare Profesională, Echipă Prietenoasă, Pachet Competitiv)
- Listă job-uri active cu filtrare
- Detalii job: cerințe, beneficii, departament, locație, tip (full-time/part-time/contract/internship)
- Secțiune cultură companiei

#### 6. Blog & Știri
- Listă articole cu featured image, categorie, autor, dată publicare
- Sidebar cu categorii, articole recente, newsletter CTA
- Tags pentru fiecare articol
- Sistem de filtrare pe categorii

#### 7. Contact
- Formular contact (nume, email, telefon, mesaj)
- Informații contact (email, telefon, adresă)
- Social media links
- Program de lucru
- Placeholder pentru hartă locație

## 🗄️ Sistem CMS (Gestionare Conținut)

### Colecții Disponibile

#### 1. Services (Servicii)
Câmpuri: titlu, slug, descriere scurtă, descriere completă, categorie (dezvoltare/infrastructură/programe_europene), icon, tehnologii (JSON), beneficii (JSON), featured image

#### 2. Solutions (Soluții pe Industrii)
Câmpuri: industrie, slug, descriere, provocări (JSON), beneficii specifice (JSON), featured image

#### 3. Team Members (Membri Echipă)
Câmpuri: nume, poziție, biografie, departament, email, LinkedIn, imagine, ordine

#### 4. Blog Posts (Articole Blog)
Câmpuri: titlu, slug, autor, dată publicare, categorie, conținut, excerpt, tags (JSON), featured image, status (draft/published)

#### 5. Case Studies (Cazuri de Studiu)
Câmpuri: titlu, slug, client, industrie, descriere, rezultate, servicii utilizate, conținut detaliat, featured image

#### 6. Partners (Parteneri)
Câmpuri: nume, logo, website, descriere, categorie, ordine

#### 7. Pages (Pagini Custom)
Câmpuri: titlu, slug, conținut, status (draft/published)

#### 8. Settings (Setări)
Câmpuri: key, value, type (text/json/boolean)

#### 9. Job Listings (Poziții Disponibile)
Câmpuri: titlu, slug, departament, locație, tip, descriere, cerințe (JSON), beneficii (JSON), status (active/closed)

### Gestionare Conținut

Toate colecțiile pot fi gestionate prin:
1. **Database UI** din Management Panel (dreapta sus)
2. **tRPC API** pentru operațiuni programatice
3. **SQL direct** pentru operațiuni avansate

## 🚀 Cum să Adaugi Conținut Nou

### Adăugare Serviciu Nou
```sql
INSERT INTO services (title, slug, shortDescription, description, category, icon, technologies, benefits)
VALUES (
  'Nume Serviciu',
  'nume-serviciu',
  'Descriere scurtă',
  'Descriere completă...',
  'dezvoltare',
  'icon-name',
  '["React", "Node.js", "PostgreSQL"]',
  '["Beneficiu 1", "Beneficiu 2"]'
);
```

### Adăugare Articol Blog
```sql
INSERT INTO blog_posts (title, slug, author, publishedAt, category, content, excerpt, tags, status)
VALUES (
  'Titlu Articol',
  'titlu-articol',
  'Autor Nume',
  NOW(),
  'Categorie',
  'Conținut complet...',
  'Excerpt scurt',
  '["tag1", "tag2"]',
  'published'
);
```

### Adăugare Membru Echipă
```sql
INSERT INTO team_members (name, position, biography, department, email, linkedin, `order`)
VALUES (
  'Nume Prenume',
  'Poziție',
  'Biografie scurtă...',
  'Departament',
  'email@radcom.ro',
  'https://linkedin.com/in/profil',
  4
);
```

### Adăugare Job Listing
```sql
INSERT INTO job_listings (title, slug, department, location, type, description, requirements, benefits, status)
VALUES (
  'Titlu Poziție',
  'titlu-pozitie',
  'Departament',
  'București / Remote',
  'full-time',
  'Descriere job...',
  '["Cerință 1", "Cerință 2"]',
  '["Beneficiu 1", "Beneficiu 2"]',
  'active'
);
```

## 📱 Acces Management Panel

Pentru a gestiona conținutul website-ului:

1. Click pe butonul din header (dreapta sus) pentru a deschide **Management UI**
2. Navighează la **Database** pentru a vedea și edita toate colecțiile
3. Folosește **Settings** pentru a modifica informații de contact, social media, etc.
4. Folosește **Code** pentru a descărca backup complet al codului

## 🎨 Personalizare Design

### Modificare Culori Brand
Editează fișierul `client/src/index.css` și actualizează variabilele CSS:

```css
@theme {
  --color-primary: oklch(0.45 0.20 250); /* Blue #003DA5 */
  --color-accent: oklch(0.85 0.15 90);   /* Yellow #FFD700 */
  /* ... alte culori */
}
```

### Modificare Logo
1. Înlocuiește logo-ul în `Header.tsx` și `Footer.tsx`
2. Sau folosește **Settings** din Management UI pentru a încărca logo nou

## 🔧 Comenzi Utile

```bash
# Pornire server dezvoltare
pnpm dev

# Rulare teste
pnpm test

# Build pentru producție
pnpm build

# Actualizare schema bază de date
pnpm db:push

# Populare date inițiale
npx tsx seed-database.mjs
```

## 📊 Statistici Proiect

- **10 teste** unit passed (100% success rate)
- **9 colecții** CMS configurate
- **7 pagini** principale implementate
- **6 servicii** populate inițial
- **5 soluții** pe industrii
- **3 membri** echipă
- **2 articole** blog
- **2 job listings** active

## 🌐 Deployment

Website-ul este gata pentru deployment. Folosește butonul **Publish** din Management UI pentru a publica website-ul live.

## 📞 Suport

Pentru întrebări sau asistență tehnică, contactează echipa de dezvoltare RADCOM.

---

**Versiune**: 1.0.0  
**Data**: Ianuarie 2026  
**Dezvoltat cu**: React 19, TypeScript, TailwindCSS 4, tRPC 11, Drizzle ORM
