# Upgrade Report: GalvanoTrack

> Audit am: 2026-02-24
> Projektverzeichnis: web-galvanotrack/
> Aktuelle Seitenanzahl: 19

## Score

**5.5/20.5 Punkte (26.8%)** – Rot

Das Projekt hat erhebliche Luecken gegenueber dem Pipeline-Standard. Es fehlen wichtige SEO-Komponenten, ein Blog-System, Wissen-Seiten und wichtige rechtliche Seiten.

## Gap-Tabelle

| # | Kategorie | Status | Punkte | Details |
|---|-----------|--------|--------|---------|
| 1 | Core Pages | TEILWEISE | 1/2 | /preise und /kontakt vorhanden, /funktionen fehlt (nur #features Anker auf Homepage) |
| 2 | Legal Pages | FEHLT | 0/2 | /datenschutz, /impressum, /agb fehlen komplett. Footer verweist auf ungueltige "#" Links |
| 3 | Software Landing Page | FEHLT | 0/2 | Keine dedizierte /galvanik-software oder aehnlich Seite vorhanden |
| 4 | Branchen-Seiten | OK | 1/1 | 8 Branchen-Seiten vorhanden: /galvanik, /lohnbeschichtung, /oberflaechenveredlung, /elektroplattierung, /chrom-nickel, /zink-nickel, /pulverbeschichtung, /automotive-galvanik |
| 5 | Wissen-Seiten | FEHLT | 0/1 | /wissen Index und alle Wissen-Artikel fehlen |
| 6 | Blog System | FEHLT | 0/1 | /blog, content/blog/, src/lib/blog.ts komplett fehlend |
| 7 | Tool/Rechner | FEHLT | 0/0.5 | /tools Verzeichnis mit Rechnern fehlt |
| 8 | Mega-Menu Navbar | TEILWEISE | 1/2 | Nur ein einfaches Dropdown ("Loesungen") statt Mega-Menu mit mehreren Spalten (Produkt, Branchen, Wissen, Tools) |
| 9 | Multi-Column Footer | TEILWEISE | 0.5/1 | 4-Spalten Footer vorhanden (in seo-navigation.tsx), ABER: keine Newsletter-Section |
| 10 | Breadcrumbs | FEHLT | 0/1 | src/components/layout/Breadcrumbs.tsx existiert nicht |
| 11 | StructuredData | FEHLT | 0/2 | Keine JSON-LD Schemas (WebSite, Organization, SoftwareApplication) vorhanden |
| 12 | Sitemap | FEHLT | 0/2 | src/app/sitemap.ts und src/app/robots.ts fehlen komplett |
| 13 | Proxy (ehem. Middleware) | FEHLT | 0/0.5 | src/proxy.ts existiert nicht, kein App-Subdomain-Redirect |
| 14 | SEO Metadata | TEILWEISE | 1/2 | layout.tsx hat Basis-Metadata (Title, Description, OG, Twitter), ABER: keine canonical URLs, keine eigenen Metadata auf Unterseiten |
| 15 | Animations | TEILWEISE | 0.5/0.5 | Framer Motion in Verwendung (fadeInUp, staggerContainer), ABER: src/lib/animations.ts fehlt (Animationen inline in page.tsx definiert) |

## Vorhandene Staerken

- **Branchen-Seiten**: 8 spezialisierte Branchen-Seiten vorhanden (Galvanik, Lohnbeschichtung, Oberflaechenveredlung, Elektroplattierung, Chrom-Nickel, Zink-Nickel, Pulverbeschichtung, Automotive)
- **Compliance-Themen**: ISO 9001, IATF 16949, ISO-Rueckverfolgbarkeit als eigene Seiten
- **Framer Motion**: Animationen auf Homepage vorhanden (fadeInUp, staggerContainer)
- **Basis-SEO**: Root-Metadata mit Title, Description, Keywords, OpenGraph, Twitter Cards
- **Tech-Stack**: Next.js 16, Tailwind 4, shadcn/ui, Framer Motion bereits installiert
- **19 Seiten**:Fuer ein neues Projekt eine gute Grundlage

## Empfohlene Upgrade-Reihenfolge

Priorisiert nach Impact (Hoch-gewichtete Kategorien zuerst):

### Phase 1: Rechtliches & SEO-Grundlagen (Hoch priorisiert)

1. **Legal Pages** – Rechtlich zwingend erforderlich
   - /datenschutz/page.tsx erstellen
   - /impressum/page.tsx erstellen
   - /agb/page.tsx erstellen
   - Footer-Links in seo-navigation.tsx reparieren

2. **Sitemap & Robots** – Wichtig fuer Google-Indexierung
   - src/app/sitemap.ts erstellen (alle 19+ Seiten eintragen)
   - src/app/robots.ts erstellen

3. **SEO Metadata Fixes** – Jede Unterseite braucht eigene Metadata
   - Canonical URLs auf allen Seiten
   - title.template in layout.tsx
   - Eigene Metadata auf Branchen-Seiten

### Phase 2: SEO-Optimierung (Hoch priorisiert)

4. **StructuredData** – JSON-LD fuer SEO
   - src/components/seo/StructuredData.tsx erstellen
   - WebSite, Organization, SoftwareApplication Schemas einbinden

5. **Software Landing Page** – SEO-optimierte Seite fuer Keyword
   - /galvanik-software/page.tsx erstellen
   - Beta-Registrierungsformular
   - /api/beta-register/route.ts

6. **Breadcrumbs** – Wichtig fuer UX und SEO
   - src/components/layout/Breadcrumbs.tsx erstellen
   - Auf allen Unterseiten einbauen

### Phase 3: Content-Erweiterung (Mittel priorisiert)

7. **Wissen-System** – 3+ Wissen-Seiten + Index
   - /wissen/page.tsx (Index)
   - /wissen/iso-9001/page.tsx
   - /wissen/iatf-16949/page.tsx
   - /wissen/rueckverfolgbarkeit/page.tsx

8. **Blog-System** – Content-Marketing
   - src/lib/blog.ts erstellen
   - /blog/page.tsx (Index)
   - /blog/[slug]/page.tsx (Detail)
   - content/blog/ mit 3-5 Artikeln
   - gray-matter und next-mdx-remote installieren

9. **Tool/Rechner** – Interaktive Elemente
   - /tools/kosten-rechner/page.tsx erstellen

### Phase 4: Navigation & UX (Mittel priorisiert)

10. **Mega-Menu Navbar** – Bessere Navigation
    - Mega-Menu mit Dropdowns fuer Produkt, Branchen, Wissen, Tools
    - Alle bestehenden Links integrieren
    - Bestehende seo-navigation.tsx ersetzen

11. **Footer Upgrade** – Newsletter + mehr Spalten
    - Newsletter-Section hinzufuegen
    - 4-Spalten Layout beibehalten

### Phase 5: Infrastruktur (Niedrig priorisiert)

12. **Proxy (Middleware)** – App-Subdomain-Redirect
    - src/proxy.ts erstellen fuer app.galvanotrack.de Redirect

13. **Core Page: /funktionen**
    - /funktionen/page.tsx erstellen (oder #features Anker zu echter Seite machen)

## Build-Empfehlungen

Nach dem Audit wird empfohlen, im BUILD-Modus folgende Komponenten zu erstellen:

1. Legal Pages (3 Seiten)
2. Sitemap + Robots
3. StructuredData + Metadata
4. Breadcrumbs
5. Mega-Menu Navbar
6. Footer mit Newsletter
7. Software Landing Page
8. Wissen-System
9. Blog-System

Das Projekt hat eine gute Grundlage mit 19 Seiten und Branchen-Content, aber es fehlen die technischen SEO-Komponenten und das Content-Marketing-System komplett.
