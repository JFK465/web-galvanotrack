"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavDropdown {
  label: string;
  items: { name: string; href: string; description?: string }[];
}

const navDropdowns: NavDropdown[] = [
  {
    label: "Produkt",
    items: [
      { name: "Funktionen", href: "/funktionen", description: "Alle Features im Ueberblick" },
      { name: "Preise", href: "/preise", description: "Tarife und Kosten" },
      { name: "Demo", href: "/demo", description: "Produktdemo ansehen" },
    ],
  },
  {
    label: "Branchen",
    items: [
      { name: "Galvanik", href: "/galvanik", description: "Fuer Galvanik-Betriebe" },
      { name: "Lohnbeschichtung", href: "/lohnbeschichtung", description: "Fuer Lohnbeschichter" },
      { name: "Oberflaechenveredlung", href: "/oberflaechenveredlung", description: "Fuer Veredlungsbetriebe" },
      { name: "Automotive", href: "/automotive-galvanik", description: "Fuer Autozulieferer" },
      { name: "Chrom-Nickel", href: "/chrom-nickel", description: "Cr-Ni Beschichtung" },
      { name: "Zink-Nickel", href: "/zink-nickel", description: "Zn-Ni Beschichtung" },
    ],
  },
  {
    label: "Loesungen",
    items: [
      { name: "Digitaler Laufzettel", href: "/digitaler-laufzettel", description: "Papierloses Auftragsmanagement" },
      { name: "QR-Code Loesung", href: "/qr-code-galvanik", description: "Mobile Erfassung" },
      { name: "Batch-Verfolgung", href: "/batch-verfolgung", description: "Chargenrueckverfolgung" },
      { name: "Schadteile-Verfolgung", href: "/schadteile-verfolgung", description: "Fehlerdokumentation" },
      { name: "ISO 9001", href: "/iso-9001-galvanik", description: "Qualitaetsmanagement" },
      { name: "IATF 16949", href: "/iatf-16949", description: "Automotive-Compliance" },
    ],
  },
  {
    label: "Ressourcen",
    items: [
      { name: "Wissen", href: "/wissen", description: "Ratgeber & Fachartikel" },
      { name: "Blog", href: "/blog", description: "Aktuelle Beitraege" },
      { name: "ISO Rueckverfolgbarkeit", href: "/iso-ruckverfolgbarkeit", description: "Normen & Guidelines" },
    ],
  },
];

function DropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
        {dropdown.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-2 w-72 z-50"
          >
            <div className="bg-zinc-800 rounded-lg shadow-xl border border-zinc-700 p-2">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-md text-sm hover:bg-zinc-700 transition-colors"
                >
                  <span className="font-medium text-white block">{item.name}</span>
                  {item.description && (
                    <span className="block text-xs text-zinc-400 mt-0.5">{item.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">GalvanoTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navDropdowns.map((dropdown) => (
              <DropdownMenu key={dropdown.label} dropdown={dropdown} />
            ))}
            <Link href="/preise" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Preise
            </Link>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://app.galvanotrack.de" target="_blank">
              <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
                Anmelden
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Kostenlos testen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 border-t border-zinc-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.label}>
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 text-zinc-300 cursor-pointer list-none">
                      <span className="font-medium">{dropdown.label}</span>
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="ml-4 mt-2 space-y-1 border-l border-zinc-700 pl-4">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-zinc-400 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                </div>
              ))}
              <Link
                href="/preise"
                className="block py-2 text-zinc-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preise
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-zinc-800 mt-4">
                <Link href="https://app.galvanotrack.de" target="_blank">
                  <Button variant="ghost" size="sm" className="w-full justify-center text-zinc-300">
                    Anmelden
                  </Button>
                </Link>
                <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full justify-center bg-blue-600 hover:bg-blue-700">
                    Kostenlos testen
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
