# RADCOM Website TODO - Sitemap.xml Dinamic

## Implementare Endpoint Sitemap.xml
- [x] Creare fișier server/sitemap.ts cu funcție de generare XML
- [x] Configurare listă completă de pagini (home, servicii, produse, soluții, compania, cariere, blog, contact)
- [x] Adăugare frecvențe de actualizare (daily, weekly, monthly)
- [x] Adăugare priorități SEO (0.0-1.0) pentru fiecare pagină
- [x] Integrare în server/_core/index.ts ca endpoint GET /sitemap.xml

## Configurare Rute și Priorități
- [x] Homepage: priority 1.0, changefreq daily
- [x] Pagini produse (iFleet, OptiFare, eXact): priority 0.9, changefreq weekly
- [x] Pagina servicii: priority 0.9, changefreq weekly
- [x] Pagini soluții: priority 0.7, changefreq monthly
- [x] Compania, Cariere, Contact: priority 0.6-0.8, changefreq monthly/weekly
- [x] Blog/Stiri: priority 0.7, changefreq weekly

## Testare & Validare
- [x] Testare accesare /sitemap.xml în browser - funcționează perfect
- [x] Validare XML cu validator - format corect conform sitemap.org
- [x] Verificare toate URL-urile sunt absolute și corecte - 14 pagini incluse
- [x] Testare format XML conform standard sitemap.org - valid

## Finalizare
- [x] Adăugare link către sitemap în robots.txt - creat client/public/robots.txt
- [ ] Documentare în README
- [ ] Salvare checkpoint final
