"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { QrCode, Menu, X, ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// SEO Navigation mit allen Links
function SEONavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const mainNavItems = [
    { label: "Galvanik Software", href: "/galvanik" },
    { label: "Lohnbeschichtung", href: "/lohnbeschichtung" },
    { label: "Oberflächenveredlung", href: "/oberflaechenveredlung" },
    { label: "ISO 9001", href: "/iso-9001-galvanik" },
    { label: "IATF 16949", href: "/iatf-16949" },
  ];

  const solutionsItems = [
    { label: "Digitaler Laufzettel", href: "/digitaler-laufzettel" },
    { label: "QR-Code Lösung", href: "/qr-code-galvanik" },
    { label: "Preise", href: "/preise" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">GalvanoTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Lösungen
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Anmelden
            </Button>
            <Link href="/kontakt">
              <Button size="sm">
                Kostenlos testen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-border"
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider py-2">Lösungen</p>
              {solutionsItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" size="sm">
                Anmelden
              </Button>
              <Link href="/kontakt">
                <Button size="sm">
                  Kostenlos testen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// SEO Footer
function SEOFooter() {
  const footerLinks = {
    "Galvanik Software": [
      { label: "Galvanik Übersicht", href: "/galvanik" },
      { label: "Oberflächenveredlung", href: "/oberflaechenveredlung" },
      { label: "Lohnbeschichtung", href: "/lohnbeschichtung" },
      { label: "Elektroplattierung", href: "/elektroplattierung" },
    ],
    "Compliance": [
      { label: "ISO 9001 Galvanik", href: "/iso-9001-galvanik" },
      { label: "IATF 16949", href: "/iatf-16949" },
      { label: "ISO Rückverfolgbarkeit", href: "/iso-ruckverfolgbarkeit" },
      { label: "Automotive Galvanik", href: "/automotive-galvanik" },
    ],
    "Lösungen": [
      { label: "Digitaler Laufzettel", href: "/digitaler-laufzettel" },
      { label: "QR-Code Galvanik", href: "/qr-code-galvanik" },
      { label: "Batch-Verfolgung", href: "/batch-verfolgung" },
      { label: "Schadteile-Verfolgung", href: "/schadteile-verfolgung" },
    ],
    "Unternehmen": [
      { label: "Preise", href: "/preise" },
      { label: "Demo", href: "/demo" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  };

  return (
    <footer className="py-12 border-t border-border bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">GalvanoTrack</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-4">
              Der digitale Laufzettel für Galvanik & Oberflächentechnik. Einfach,
              schnell, ISO-konform.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>IATF 16949</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 GalvanoTrack. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/impressum" className="hover:text-foreground">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
            <Link href="/agb" className="hover:text-foreground">AGB</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Made in Germany
          </p>
        </div>
      </div>
    </footer>
  );
}

export { SEONavigation, SEOFooter };
