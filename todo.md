# RADCOM Website TODO - Modernizare și Multilingvism

## Integrare Logo-uri Noi
- [x] Copiere logo-uri noi în client/public/
  - logo-blue.png (pentru header pe fundal deschis)
  - logo-white.png (pentru footer pe fundal întunecat)
- [x] Actualizare Header.tsx cu noul logo albastru
- [x] Actualizare Footer.tsx cu noul logo alb
- [ ] Testare afișare logo-uri pe toate paginile

## Sistem Multilingv (i18n)
- [x] Instalare dependențe i18n (react-i18next)
- [x] Configurare sistem multilingv cu EN ca limbă principală
- [x] Creare fișiere de traduceri (en.json, ro.json)
- [x] Implementare Language Switcher în header (EN/RO)
- [x] Traducere Header.tsx cu meniu complet
- [x] Traducere Home.tsx (hero, stats, advantages)
- [ ] Traducere Footer.tsx
- [ ] Traducere pagini produse (iFleet, OptiFare, eXact)
- [ ] Traducere pagini soluții și alte pagini
- [x] Salvare preferință limbă în localStorage (auto prin i18next-browser-languagedetector)
- [ ] Testare switch între EN și RO

## Fonturi Moderne
- [x] Cercetare și selectare fonturi moderne - ales Inter pentru claritate și modernitate
- [x] Integrare Google Fonts în client/index.html
- [x] Actualizare index.css cu noile fonturi (Inter cu font-feature-settings)
- [ ] Testare lizibilitate și consistență

## Optimizare Structură și Design
- [x] Îmbunătățire spacing și padding pentru fluiditate (hero section, buttons)
- [x] Optimizare tranziții și animații (smooth hover effects)
- [x] Îmbunătățire contrast și accesibilitate (font-weight, spacing)
- [x] Simplificare navigare cu LanguageSwitcher integrat
- [x] Optimizare responsive design (lg:text-7xl pentru hero)
- [x] Îmbunătățire micro-interacțiuni (hover states pe butoane)

## Testare și Finalizare
- [x] Testare multilingvism pe homepage - EN/RO switch funcționează
- [x] Testare logo-uri pe diferite rezoluții - logo-blue.png în header, logo-white.png în footer
- [x] Testare accesibilitate - font Inter cu font-smoothing, spacing îmbunătățit
- [x] Rulare teste unit - 10/10 passed
- [ ] Salvare checkpoint final
