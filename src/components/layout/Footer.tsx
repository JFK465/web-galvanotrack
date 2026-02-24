"use client";

import { useState } from "react";
import Link from "next/link";
import { QrCode, Mail, Check, ArrowRight } from "lucide-react";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    heading: "Produkt",
    links: [
      { label: "Funktionen", href: "/funktionen" },
      { label: "Preise", href: "/preise" },
      { label: "Demo", href: "/demo" },
      { label: "Digitaler Laufzettel", href: "/digitaler-laufzettel" },
      { label: "QR-Code Loesung", href: "/qr-code-galvanik" },
    ],
  },
  {
    heading: "Branchen",
    links: [
      { label: "Galvanik", href: "/galvanik" },
      { label: "Lohnbeschichtung", href: "/lohnbeschichtung" },
      { label: "Oberflaechenveredlung", href: "/oberflaechenveredlung" },
      { label: "Automotive", href: "/automotive-galvanik" },
      { label: "Chrom-Nickel", href: "/chrom-nickel" },
    ],
  },
  {
    heading: "Ressourcen",
    links: [
      { label: "Wissen", href: "/wissen" },
      { label: "Blog", href: "/blog" },
      { label: "ISO Rueckverfolgbarkeit", href: "/iso-ruckverfolgbarkeit" },
      { label: "ISO 9001 Galvanik", href: "/iso-9001-galvanik" },
      { label: "IATF 16949", href: "/iatf-16949" },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Success
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="bg-green-900/30 border border-green-800 rounded-lg p-4 text-center">
        <Check className="w-5 h-5 text-green-500 mx-auto mb-2" />
        <p className="text-sm text-green-400">Vielen Dank fuer Ihre Anmeldung!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ihre E-Mail-Adresse"
          className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors flex items-center gap-2"
      >
        {status === "loading" ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span className="hidden sm:inline">Abonnieren</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Newsletter: Galvanik-Infos
              </h3>
              <p className="text-sm text-zinc-400">
                Erhalten Sie regelmaessig Updates zu ISO-Compliance, Digitalisierung und Best Practices.
              </p>
            </div>
            <div className="md:w-96">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">GalvanoTrack</span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Die SaaS-Loesung fuer Galvanik-Betriebe: Digitaler Laufzettel mit QR-Code,
              ISO-konforme Dokumentation und Automotive-Compliance.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>Made in Germany</span>
              <span aria-label="Deutschland-Flagge" role="img">
                🇩🇪
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} GalvanoTrack. Alle Rechte vorbehalten.
          </p>

          <nav
            aria-label="Rechtliche Links"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 order-1 sm:order-2"
          >
            <Link href="/impressum" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              AGB
            </Link>
            <Link href="/kontakt" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
