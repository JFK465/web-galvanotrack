# Upgrade Report: GalvanoTrack

> Audit am: 2026-02-27
> Projektverzeichnis: web-galvanotrack/
> Aktuelle Seitenanzahl: 25 page.tsx Dateien (signifikanter Fortschritt seit letztem Audit 2026-02-24)

---

## Score

**14,5 / 20,5 Punkte (70,7%)** — Orange

*Hinweis: Gegenueber dem letzten Audit (5,5/20,5 – 26,8% Rot) wurde das Projekt massiv ausgebaut. Fast alle kritischen Luecken wurden geschlossen. Die verbleibenden Gaps sind gezielte Einzelpunkte.*

---

## Gap-Tabelle

| # | Kategorie | Status | Punkte | Details |
|---|-----------|--------|--------|---------|
| 1 | Core Pages | TEILWEISE | 1/2 | `/preise` und `/kontakt` vorhanden. `/funktionen` **fehlt** (kein `src/app/funktionen/page.tsx`). Demo-Seite `/demo` ersetzt Funktionen-Seite nicht vollwertig. |
| 2 | Legal Pages | OK | 2/2 | `/datenschutz`, `/impressum`, `/agb` alle vorhanden. |
| 3 | Software Landing Page | FEHLT | 0/2 | Kein `/galvanik-software/page.tsx` oder vergleichbarer Slug. Die Sitemap referenziert diese Seite nicht. Kein Beta-Formular, kein `/api/beta-register/route.ts`. |
| 4 | Branchen-Seiten | OK | 1/1 | 8+ Branchen-Seiten: `/galvanik`, `/lohnbeschichtung`, `/oberflaechenveredlung`, `/automotive-galvanik`, `/chrom-nickel`, `/zink-nickel`, `/elektroplattierung`, `/pulverbeschichtung`. |
| 5 | Wissen-Seiten | TEILWEISE | 0,5/1 | `/wissen/page.tsx` (Index) vorhanden und gut aufgebaut. Aber: alle 7 verlinkten Detail-Seiten (`/wissen/iso-9001-galvanik`, `/wissen/iatf-16949` etc.) existieren **nicht** als `page.tsx`. Nutzer landen auf 404. Sitemap-Eintraege fuer nicht-existente Seiten. |
| 6 | Blog System | TEILWEISE | 0,5/1 | `/blog/page.tsx`, `/blog/[slug]/page.tsx`, `src/lib/blog.ts`, `next-mdx-remote`, `gray-matter` alle vorhanden. Nur **3 MDX-Artikel** (Ziel: 5+). Blog-Index fehlt Kategorie-Filter. |
| 7 | Tool/Rechner | FEHLT | 0/0,5 | Kein `src/app/tools/*/page.tsx`. Kein interaktiver Rechner. |
| 8 | Mega-Menu Navbar | OK | 2/2 | `src/components/layout/Navbar.tsx` ist ein vollwertiges Mega-Menu mit 4 Dropdown-Kategorien (Produkt, Branchen, Loesungen, Ressourcen), Hover-Delay 150ms, AnimatePresence, Mobile-Accordion, Hamburger-Toggle, CTAs. Technisch exzellent. |
| 9 | Multi-Column Footer | OK | 1/1 | `src/components/layout/Footer.tsx`: 5 Spalten (Brand + 4 Kategorien), Newsletter-Formular mit Loading/Success-State, Bottom-Bar, "Made in Germany"-Trust-Badge. Vollstaendig. |
| 10 | Breadcrumbs | TEILWEISE | 0,5/1 | `src/components/layout/Breadcrumbs.tsx` existiert und wird korrekt auf Blog-Post-Seiten eingesetzt. **Fehlt** auf allen Branchen-Seiten (z. B. `/lohnbeschichtung` nutzt `SEONavigation` statt Standard-Navbar, keine Breadcrumbs). Inkonsistente Verwendung. |
| 11 | StructuredData | OK | 2/2 | `src/components/seo/StructuredData.tsx` enthaelt: `WebSiteSchema`, `OrganizationSchema`, `SoftwareApplicationSchema` (ohne `aggregateRating` — UWG-konform), `FAQSchema`, `BreadcrumbSchema`, `WebPageSchema`, `ArticleSchema`. Alle 3 Pflicht-Schemas in `layout.tsx` eingebunden. |
| 12 | Sitemap | TEILWEISE | 1/2 | `src/app/sitemap.ts` vorhanden. **Probleme:** (a) `/funktionen` fehlt; (b) Blog-Posts statisch hartcodiert statt dynamisch via `getBlogPosts()`; (c) `/wissen/*` Detail-URLs eingetragen, aber Seiten existieren nicht (tote Links fuer Crawler); (d) keine Software-Landing-Page-URL mit Priority 0.9. |
| 13 | Proxy (ehem. Middleware) | FEHLT | 0/0,5 | Kein `src/proxy.ts` und kein `src/middleware.ts`. Kein App-Subdomain-Redirect, obwohl `appUrl` in `seo-config.ts` definiert ist. |
| 14 | SEO Metadata | TEILWEISE | 1/2 | `layout.tsx` mit title.template, OG, Twitter, canonical korrekt. `/lohnbeschichtung` hat vollstaendige Metadata inkl. canonical und twitter. `/blog/[slug]` hat `generateMetadata`. **Probleme:** `/preise/page.tsx` hat kein `alternates.canonical` und kein `twitter`. Homepage `page.tsx` exportiert keine eigene Metadata (nur Root-Layout). Viele Branchen-Seiten fehlen `twitter`-Metadata. |
| 15 | Animations | OK | 2/2 | `framer-motion` v12.34.3 in `package.json`. Homepage verwendet `fadeInUp` und `staggerContainer` auf allen Sections. `Navbar.tsx` nutzt `AnimatePresence`. Kein zentrales `src/lib/animations.ts` (Varianten inline in `page.tsx` definiert) — kleines Manko, aber Framer Motion vollstaendig integriert. |

**Gesamt: 14,5 / 20,5 Punkte (70,7%) — Orange**

---

## Detailbefunde

### Kritische Fehler

#### Homepage (page.tsx) — Veraltete monolithische Architektur

Die `src/app/page.tsx` ist ein 1031-Zeilen-Monolith mit **eigener Navigation** (einfache `Navigation()`-Funktion, kein Mega-Menu) und **eigenem Footer** (inline, nur 2 Spalten, keine Newsletter-Section). Sie importiert **nicht** die Standard-Komponenten aus `src/components/layout/`. Das bedeutet:

- Auf der Startseite ist der Mega-Menu aus `Navbar.tsx` **nicht aktiv** — nur ein altes 5-Link-Menü
- Der professionelle Footer aus `Footer.tsx` erscheint auf der **Startseite nicht**
- Zusaetzlich enthaelt die Homepage **kyrillische Zeichen** (`исторических` in ProblemSection) und **chinesische Zeichen** (`纸质` in einer Ueberschrift) — Artefakte aus dem KI-Generierungsprozess, die sofort behoben werden muessen

#### Inkonsistente Navigationssysteme

Das Projekt hat **zwei parallele Navigationssysteme**:
1. `src/components/layout/Navbar.tsx` — vollwertiges Mega-Menu (Zinc-Dunkles Design)
2. `src/components/seo-navigation.tsx` — aeltere SEO-Navigationsvariante

Branchen-Seiten (`/lohnbeschichtung`, `/galvanik`, `/preise` etc.) nutzen `SEONavigation`/`SEOFooter`. Wissen/Blog-Seiten nutzen die echte `Navbar`-Komponente. Unterschiedliches Erscheinungsbild auf verschiedenen Seitentypen.

#### Wissen-Detail-Seiten fehlen komplett (7 Seiten)

Der Wissen-Index `/wissen/page.tsx` verlinkt auf 7 Detail-Artikel (`/wissen/iso-9001-galvanik` etc.). Diese Routen existieren **nicht** als `page.tsx` — 404-Fehler fuer Nutzer und Crawler. Die Sitemap enthaelt diese URLs als valide Eintraege, was Crawling-Ressourcen verschwendet.

### Mittelschwere Probleme

#### Keine Software Landing Page

Fehlt `/galvanik-software/page.tsx` mit Beta-Badge, Beta-Registrierungsformular, `/api/beta-register/route.ts` und dediziertem SoftwareApplication-JSON-LD. Dies ist die wichtigste Conversion-Seite fuer den Haupt-Keyword-Cluster "Galvanik Software" (Priority 0.9 in Sitemap).

#### Kein Tool/Rechner

Kein interaktiver Rechner. Passende Ideen: "IATF-16949-Audit-Readiness-Check", "Zeitersparnis-Rechner fuer digitale Laufzettel" oder "Batch-Verfolgungskosten-Rechner".

#### Blog: Zu wenige Artikel, kein Kategorie-Filter

Nur 3 MDX-Artikel vorhanden (Ziel: 5+). Blog-Index `/blog/page.tsx` enthaelt keinen Kategorie-Filter.

### Kleinere Probleme

- **Proxy fehlt:** Kein `src/proxy.ts` fuer App-Subdomain-Redirect (app.galvanotrack.de)
- **Sitemap:** Blog-Posts statisch statt dynamisch via `getBlogPosts()`
- **Breadcrumbs:** Fehlen auf Branchen-Seiten
- **Keine `src/lib/animations.ts`:** Varianten inline in `page.tsx` statt shared library
- **Texte mit ae/oe statt Umlauten:** Einige generierte Texte nutzen Ersatz-Schreibweise statt ae/oe/ue

---

## Empfohlene Upgrade-Reihenfolge

### Prioritaet 1 — Kritische Korrekturen (sofort)

**1. Homepage-Konsolidierung und Bugfixes**
- `page.tsx` auf Standard-`Navbar` und Standard-`Footer` umstellen
- Kyrillische Zeichen (`исторических`) und chinesische Zeichen (`纸质`) entfernen
- Homepage-Sections in `src/components/home/` auslagern
- Score-Impact: Konsistenz des Mega-Menus auf 100%

**2. Wissen-Detail-Seiten erstellen (7 Seiten)**
Erstelle die 7 fehlenden `/wissen/*/page.tsx` Seiten:
- `/wissen/iso-9001-galvanik/page.tsx`
- `/wissen/iatf-16949/page.tsx`
- `/wissen/digitaler-laufzettel/page.tsx`
- `/wissen/qr-code-verfolgung/page.tsx`
- `/wissen/chargenverfolgung/page.tsx`
- `/wissen/oberflaechenpruefung/page.tsx`
- `/wissen/galvanik-dokumentation/page.tsx`

Jede Seite: 800+ Woerter, BreadcrumbSchema, WebPage-Schema, interne Verlinkung.
Score-Impact: Kategorie #5 von TEILWEISE auf OK (+0,5 Punkte)

### Prioritaet 2 — Hohe SEO-Wirkung

**3. Software Landing Page `/galvanik-software`**
- `src/app/galvanik-software/page.tsx` mit Beta-Badge, Formular
- `src/app/api/beta-register/route.ts`
- Sitemap-Eintrag mit Priority 0.9
- Score-Impact: +2 Punkte (Kategorie #3)

**4. Funktionen-Seite `/funktionen`**
- `src/app/funktionen/page.tsx` mit allen Features
- Sitemap-Eintrag Priority 0.8
- Score-Impact: +0,5 Punkte (Kategorie #1 vollstaendig)

**5. Blog: 2 weitere Artikel + Kategorie-Filter**
- 2 neue MDX-Artikel in `content/blog/`
- Blog-Index mit Kategorie-Filter-Buttons
- Score-Impact: Kategorie #6 von TEILWEISE auf OK (+0,5 Punkte)

### Prioritaet 3 — Mittlere Verbesserungen

**6. Breadcrumbs auf Branchen-Seiten + Navbar vereinheitlichen**
- `SEONavigation`/`SEOFooter` durch Standard-`Navbar`/`Footer` ersetzen
- `<Breadcrumbs />` in alle Branchen-Seiten einfuegen
- Score-Impact: Kategorie #10 von TEILWEISE auf OK (+0,5 Punkte)

**7. Tool/Rechner**
- z. B. `src/app/tools/audit-readiness-check/page.tsx`
- Score-Impact: +0,5 Punkte (Kategorie #7)

**8. SEO Metadata vervollstaendigen**
- `/preise/page.tsx`: `alternates.canonical` und `twitter` ergaenzen
- Alle Branchen-Seiten: `twitter`-Metadata ergaenzen
- Score-Impact: Kategorie #14 von TEILWEISE auf OK (+1 Punkt)

**9. Sitemap aktualisieren**
- Blog-Posts dynamisch via `getBlogPosts()` laden
- `/funktionen` und `/galvanik-software` hinzufuegen
- Nicht-existente `/wissen/*` URLs entfernen (bis Seiten erstellt sind)
- Score-Impact: Kategorie #12 von TEILWEISE auf OK (+1 Punkt)

### Prioritaet 4 — Kleinere Ergaenzungen

**10. `src/lib/animations.ts` erstellen**
Varianten aus `page.tsx` extrahieren, alle Sections importieren aus `@/lib/animations`.

**11. `src/proxy.ts` erstellen**
App-Subdomain-Redirect fuer `app.galvanotrack.de`.
Score-Impact: +0,5 Punkte (Kategorie #13)

---

## Vorhandene Staerken

Das Projekt ist seit dem letzten Audit (2026-02-24) erheblich ausgebaut worden und hat viele Pipeline-Standard-Elemente bereits korrekt implementiert:

**Mega-Menu Navbar:**
`src/components/layout/Navbar.tsx` ist ein exzellentes Mega-Menu mit 4 Dropdown-Kategorien, korrektem Hover-Delay (150ms), AnimatePresence, Mobile-Accordion und CTAs. Referenz-Level.

**Footer:**
`src/components/layout/Footer.tsx` vollstaendig mit 5 Spalten, Newsletter-Formular mit Loading/Success-State, Bottom-Bar und Trust-Badge.

**Structured Data:**
`src/components/seo/StructuredData.tsx` enthaelt alle wichtigen Schema-Typen — alle korrekt ohne `aggregateRating` (UWG-konform). In `layout.tsx` korrekt eingebunden.

**Blog-System:**
Technisch vollstaendig: `blog.ts` mit `getBlogPosts()`, `getRelatedPosts()`, `getCategories()`. Blog-Detail-Seite mit MDX-Rendering, Related Posts, CTA-Section, Breadcrumbs und ArticleSchema.

**Branchen-Seiten (8):**
Gut ausgebaut mit eigenem Metadata, branchenspezifischem Content und internen Verlinkungen.

**Tech-Stack:**
Next.js 16.1.6, React 19, TypeScript 5, Tailwind CSS 4, framer-motion 12.34.3, gray-matter, next-mdx-remote 6.0.0, react-hook-form, zod — alles aktuell und korrekt konfiguriert.

**Assets:**
OG-Image `/public/og.png`, Logo-Varianten (`logo.svg`, `logo-dark.svg`, `logo-icon.svg`), Favicon-Set vollstaendig, Feature-Images und Hero-Image vorhanden.

**UWG-Compliance:**
Keine Fake-Testimonials, keine erfundenen Bewertungszahlen, SoftwareApplicationSchema ohne `aggregateRating`. Korrekt.

---

## Upgrade-Potential-Zusammenfassung

| Upgrade-Schritt | Aufwand | Score-Gewinn |
|---|---|---|
| Wissen-Detail-Seiten (7) | Mittel | +0,5 |
| Software Landing Page | Hoch | +2,0 |
| Funktionen-Seite | Niedrig | +0,5 |
| Blog: 2 Artikel + Filter | Niedrig | +0,5 |
| Tool/Rechner | Mittel | +0,5 |
| Breadcrumbs + Navbar-Vereinheitlichung | Niedrig | +0,5 |
| SEO Metadata komplett | Niedrig | +1,0 |
| Sitemap aktualisieren | Niedrig | +1,0 |
| Proxy | Niedrig | +0,5 |
| **Gesamt-Potential** | | **+7,0 Punkte** |

Nach vollstaendigem Upgrade: **21,5 / 20,5 Punkte** — alle Kategorien auf OK.

> Dieser Report wurde automatisch generiert am 2026-02-27 durch den SaaS-Upgrader-Agent (Modus: AUDIT).
> Vorgaenger-Report vom 2026-02-24 (Score: 5,5/20,5 – Rot) wurde ueberschrieben.
