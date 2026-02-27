import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import {
  CheckCircle2,
  ArrowRight,
  QrCode,
  FileText,
  Layers,
  Shield,
  BarChart3,
  Bell,
  Users,
  Clock,
  Zap,
  ClipboardCheck,
  Package,
  Download,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funktionen – GalvanoTrack Galvanik-Software",
  description:
    "Alle Funktionen von GalvanoTrack im Überblick: Digitaler Laufzettel, QR-Code-Verfolgung, Chargenverfolgung, ISO 9001, IATF 16949 und mehr. Spezialisiert für Galvanik-Betriebe.",
  alternates: {
    canonical: `${siteConfig.url}/funktionen`,
  },
  openGraph: {
    title: "Funktionen – GalvanoTrack Galvanik-Software",
    description:
      "Alle Funktionen von GalvanoTrack: Digitaler Laufzettel, QR-Code, Chargenverfolgung, ISO-Compliance.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/funktionen`,
  },
  twitter: {
    card: "summary_large_image",
    title: "GalvanoTrack Funktionen",
    description:
      "Digitaler Laufzettel, QR-Code-Verfolgung und ISO-Compliance für Galvanik-Betriebe.",
  },
};

const breadcrumbs = [{ name: "Funktionen", href: "/funktionen" }];

const featureGroups = [
  {
    category: "Auftragsverfolgung & Laufzettel",
    color: "blue",
    features: [
      {
        icon: FileText,
        title: "Digitaler Laufzettel",
        desc: "Ersetzt Papier-Fertigungsbegleitkarten vollständig. Jede Prozessstation wird digital erfasst – unveränderlich und nachvollziehbar.",
      },
      {
        icon: QrCode,
        title: "QR-Code pro Auftrag",
        desc: "Automatisch generierter QR-Code für jeden Auftrag. Scannen an jeder Station ordnet die Daten korrekt zu – keine manuelle Eingabe nötig.",
      },
      {
        icon: Layers,
        title: "Chargenverfolgung",
        desc: "Vollständige Chargendokumentation von der Vorreinigung bis zur Verpackung. Rückwärts- und Vorwärtssuche in Sekunden.",
      },
      {
        icon: Package,
        title: "Wareneingangs-Management",
        desc: "Materialchargen erfassen, Lieferanten-Lot-Nummern verknüpfen und beim Wareneingang direkt prüfen.",
      },
    ],
  },
  {
    category: "Qualität & Compliance",
    color: "green",
    features: [
      {
        icon: Shield,
        title: "ISO 9001 & IATF 16949",
        desc: "Alle Pflichtdokumentationen werden automatisch vollständig und normkonform erstellt. Audit-Export auf Knopfdruck.",
      },
      {
        icon: ClipboardCheck,
        title: "Prüfprotokolle",
        desc: "Schichtdickenmessungen, Haftfestigkeit, Salzsprühtest und weitere Prüfergebnisse direkt mit der Charge verknüpfen.",
      },
      {
        icon: Bell,
        title: "Grenzwert-Überwachung",
        desc: "Automatische Alerts bei Überschreitung von Toleranzen – Temperatur, pH-Wert, Stromdichte oder Schichtdicke.",
      },
      {
        icon: FileText,
        title: "Nichtkonformitäten",
        desc: "n.i.O.-Teile dokumentieren, Korrekturmaßnahmen einleiten und bis zur Abstellung verfolgen.",
      },
    ],
  },
  {
    category: "Auswertung & Reporting",
    color: "purple",
    features: [
      {
        icon: BarChart3,
        title: "Echtzeit-Dashboard",
        desc: "Überblick über alle laufenden Aufträge, Badparameter und Qualitätskennzahlen in einer Ansicht.",
      },
      {
        icon: Download,
        title: "Export & Berichte",
        desc: "Prüfprotokolle, Chargenberichte und Audit-Dokumente als PDF oder Excel exportieren – auf Knopfdruck.",
      },
      {
        icon: Clock,
        title: "Historische Auswertung",
        desc: "Trends bei Badparametern, Schichtdicken und Ausschussquoten über beliebige Zeiträume analysieren.",
      },
      {
        icon: Users,
        title: "Mitarbeiter-Aktivitäten",
        desc: "Wer hat welche Charge bearbeitet, welche Scans wurden durchgeführt – vollständige Rückverfolgbarkeit.",
      },
    ],
  },
  {
    category: "System & Integration",
    color: "orange",
    features: [
      {
        icon: Zap,
        title: "Schnelle Einrichtung",
        desc: "In 30 Minuten betriebsbereit. Keine IT-Expertise nötig. Direkt im Browser – kein Software-Download.",
      },
      {
        icon: Users,
        title: "Mehrbenutzer & Rollen",
        desc: "Rollenbasierte Zugriffsrechte: Bediener, Qualitätsprüfer, Meister, Geschäftsführung – jeder sieht, was er braucht.",
      },
      {
        icon: Lock,
        title: "Datensicherheit",
        desc: "DSGVO-konform, Hosting in deutschen Rechenzentren. Verschlüsselte Dateiübertragung, tägliche Backups.",
      },
      {
        icon: Clock,
        title: "Aufbewahrungsfristen",
        desc: "Konfigurierbare Archivierung: 5 Jahre (ISO 9001), 15 Jahre (IATF 16949) oder kundenspezifisch.",
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-900/20 border-blue-800/30",
  green: "text-green-400 bg-green-900/20 border-green-800/30",
  purple: "text-purple-400 bg-purple-900/20 border-purple-800/30",
  orange: "text-orange-400 bg-orange-900/20 border-orange-800/30",
};

const iconColorMap: Record<string, string> = {
  blue: "text-blue-400",
  green: "text-green-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
};

export default function FunktionenPage() {
  return (
    <>
      <WebPageSchema
        name="Funktionen – GalvanoTrack Galvanik-Software"
        description="Alle Funktionen von GalvanoTrack: Digitaler Laufzettel, QR-Code-Verfolgung, Chargenverfolgung, ISO-Compliance."
        url="/funktionen"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        {/* Header */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-6 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Alle Funktionen im Überblick
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                GalvanoTrack wurde gemeinsam mit Galvanik-Praktikern entwickelt.
                Jede Funktion löst ein reales Problem im Tagesbetrieb.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Groups */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {featureGroups.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full border ${colorMap[group.color]}`}
                  >
                    {group.category}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
                    >
                      <feature.icon
                        className={`w-7 h-7 mb-4 ${iconColorMap[group.color]}`}
                      />
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
            ))}
          </div>
        </section>

        {/* Compliance Übersicht */}
        <section className="py-12 bg-zinc-900/40 border-y border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Normkonforme Dokumentation – was GalvanoTrack abdeckt
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  norm: "ISO 9001:2015",
                  items: [
                    "Prozessdokumentation",
                    "Chargenaufzeichnungen",
                    "Prüfprotokolle",
                    "Nichtkonformitäten",
                    "Audit-Export",
                  ],
                },
                {
                  norm: "IATF 16949",
                  items: [
                    "15-Jahre-Archivierung",
                    "PPAP-Dokumentation",
                    "Control Plan Support",
                    "Rückverfolgbarkeit",
                    "Lieferantenbewertung",
                  ],
                },
                {
                  norm: "Gesetzlich",
                  items: [
                    "DSGVO-konform",
                    "TRGS 555 (Unterweisungen)",
                    "Gefahrstoff-Dokumentation",
                    "WHG-Protokolle",
                    "Abfallnachweise",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.norm}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                >
                  <h3 className="font-bold text-white mb-4 text-center">
                    {col.norm}
                  </h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-zinc-400"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-2xl p-10 text-center border border-blue-800/30">
              <h2 className="text-2xl font-bold text-white mb-4">
                GalvanoTrack in Aktion sehen
              </h2>
              <p className="text-zinc-400 mb-8">
                Vereinbaren Sie eine kostenlose Demo und erleben Sie alle
                Funktionen live – anhand Ihrer eigenen Prozesse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Demo anfordern
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/galvanik-software"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-8 py-3 rounded-lg font-medium hover:border-zinc-500 transition-colors"
                >
                  Zur Beta-Anmeldung
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-zinc-800 pt-8">
              <h3 className="text-lg font-bold text-white mb-4">
                Weiterführende Informationen
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/wissen/digitaler-laufzettel",
                    label: "Digitaler Laufzettel",
                    desc: "Warum die Umstellung sich lohnt",
                  },
                  {
                    href: "/wissen/chargenverfolgung",
                    label: "Chargenverfolgung",
                    desc: "Lückenlose Dokumentation",
                  },
                  {
                    href: "/wissen/iso-9001-galvanik",
                    label: "ISO 9001 Galvanik",
                    desc: "Normkonforme Dokumentation",
                  },
                  {
                    href: "/wissen/iatf-16949",
                    label: "IATF 16949",
                    desc: "Automotive-Anforderungen",
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
