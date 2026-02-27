import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { BetaRegisterForm } from "./BetaRegisterForm";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  QrCode,
  FileText,
  Shield,
  BarChart3,
  Users,
  Clock,
  Layers,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GalvanoTrack Software – Digitaler Laufzettel für Galvanik-Betriebe",
  description:
    "GalvanoTrack: Die spezialisierte Software für Galvanik und Oberflächentechnik. Digitale Laufzettel, QR-Code-Verfolgung, ISO 9001 & IATF 16949 konform. Jetzt Beta testen.",
  alternates: {
    canonical: `${siteConfig.url}/galvanik-software`,
  },
  openGraph: {
    title: "GalvanoTrack – Galvanik-Software für Rückverfolgbarkeit",
    description:
      "Digitale Laufzettel, Chargenverfolgung und ISO-konforme Dokumentation für Galvanik-Betriebe.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/galvanik-software`,
  },
  twitter: {
    card: "summary_large_image",
    title: "GalvanoTrack – Galvanik-Software",
    description:
      "Die SaaS-Lösung für Galvanik: Digitaler Laufzettel, QR-Code, ISO 9001, IATF 16949.",
  },
};

const breadcrumbs = [{ name: "Software", href: "/galvanik-software" }];

const features = [
  {
    icon: QrCode,
    title: "QR-Code Verfolgung",
    desc: "Jeder Auftrag erhält einen QR-Code. Scannen an jeder Station – keine Verwechslungen, lückenlose Rückverfolgbarkeit.",
  },
  {
    icon: FileText,
    title: "Digitaler Laufzettel",
    desc: "Papier-Laufzettel ade. Alle Prozessparameter werden digital und manipulationssicher erfasst.",
  },
  {
    icon: Layers,
    title: "Chargenverfolgung",
    desc: "Vollständige Verfolgung von der Vorreinigung bis zur Verpackung. Rückwärts- und Vorwärtssuche in Sekunden.",
  },
  {
    icon: Shield,
    title: "ISO 9001 & IATF 16949",
    desc: "Audit-Export auf Knopfdruck. Alle Pflichtdokumentationen werden automatisch vollständig generiert.",
  },
  {
    icon: BarChart3,
    title: "Echtzeitauswertung",
    desc: "Schichtdicken-Statistiken, Badparameter-Trends und Qualitätskennzahlen auf einem übersichtlichen Dashboard.",
  },
  {
    icon: Bell,
    title: "Grenzwert-Alerts",
    desc: "Automatische Benachrichtigung bei Parametern außerhalb der Spezifikation – bevor fehlerhafte Teile zum Kunden gelangen.",
  },
  {
    icon: Users,
    title: "Mehrere Standorte",
    desc: "Verwalten Sie mehrere Galvaniklinien oder Standorte in einer Ansicht. Rollenbezogene Zugriffsrechte.",
  },
  {
    icon: Clock,
    title: "Aufbewahrungsfristen",
    desc: "Automatische Archivierung nach konfigurierbaren Fristen: 5 Jahre (ISO 9001) oder 15 Jahre (IATF 16949).",
  },
  {
    icon: Zap,
    title: "Schnelle Einrichtung",
    desc: "In 30 Minuten einsatzbereit. Keine IT-Abteilung notwendig. Läuft direkt im Browser.",
  },
];

const benefits = [
  "Keine Papier-Laufzettel mehr – 100% digital",
  "Audit in Minuten statt Tagen vorbereiten",
  "Reklamationen schnell auf Chargenebene zurückverfolgen",
  "ISO 9001 und IATF 16949 Anforderungen erfüllen",
  "DSGVO-konform in deutschen Rechenzentren gespeichert",
  "Keine Installation – läuft im Browser",
];

export default function GalvanikSoftwarePage() {
  return (
    <>
      <WebPageSchema
        name="GalvanoTrack Software – Digitaler Laufzettel für Galvanik-Betriebe"
        description="Die spezialisierte SaaS-Software für Galvanik und Oberflächentechnik: QR-Code, ISO 9001, IATF 16949."
        url="/galvanik-software"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium border border-blue-800/40 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                Beta-Programm läuft – Jetzt kostenlos teilnehmen
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Die Software, die{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Galvanik-Betriebe
                </span>{" "}
                wirklich brauchen
              </h1>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                GalvanoTrack ist die erste SaaS-Lösung, die speziell für
                Galvanik und Oberflächentechnik entwickelt wurde: Digitaler
                Laufzettel, QR-Code-Verfolgung und ISO-konforme Dokumentation –
                in einem System.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#beta-anmeldung"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Jetzt Beta testen
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-8 py-3 rounded-lg font-medium hover:border-zinc-500 transition-colors"
                >
                  Demo ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-zinc-900/50 border-y border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Alle Funktionen im Überblick
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Entwickelt mit Galvanik-Praktikern – für die tägliche Arbeit im
                Betrieb, nicht für IT-Spezialisten.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section className="py-12 bg-zinc-900/30 border-y border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Für welche Betriebe ist GalvanoTrack geeignet?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Lohnbeschichter",
                  desc: "Auftragsbasierte Dokumentation mit Kunden-Trennbarkeit",
                },
                {
                  label: "Automotive-Zulieferer",
                  desc: "IATF 16949 und PPAP-Dokumentation vollständig abgedeckt",
                },
                {
                  label: "Eigene Galvanik",
                  desc: "Integriert in Ihre Fertigung – ISO 9001 konform",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beta Anmeldung */}
        <section id="beta-anmeldung" className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium border border-blue-800/30 mb-4">
                  Begrenzte Beta-Plätze
                </span>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Jetzt für die Beta anmelden
                </h2>
                <p className="text-zinc-400">
                  Werden Sie einer der ersten Galvanik-Betriebe, die
                  GalvanoTrack nutzen. Kostenlos während der Beta-Phase.
                  Direkter Kontakt zum Entwicklerteam.
                </p>
              </div>
              <BetaRegisterForm />
            </div>
          </div>
        </section>

        {/* Weiterführende Links */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800 pt-12">
            <h2 className="text-xl font-bold text-white mb-6">
              Mehr über GalvanoTrack
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/funktionen",
                  label: "Alle Funktionen",
                  desc: "Vollständige Funktionsübersicht",
                },
                {
                  href: "/wissen/digitaler-laufzettel",
                  label: "Digitaler Laufzettel",
                  desc: "Was das bedeutet und warum es sich lohnt",
                },
                {
                  href: "/wissen/iso-9001-galvanik",
                  label: "ISO 9001 in der Galvanik",
                  desc: "Normkonforme Dokumentation",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-zinc-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
