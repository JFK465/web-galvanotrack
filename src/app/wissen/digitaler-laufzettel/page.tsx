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
  FileText,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digitaler Laufzettel in der Galvanik – Einführung & Vorteile",
  description:
    "Vom Papier-Laufzettel zum digitalen Prozess: Wie der digitale Laufzettel in der Galvanik Zeit spart, Fehler reduziert und ISO-Compliance sichert.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/digitaler-laufzettel`,
  },
  openGraph: {
    title: "Digitaler Laufzettel in der Galvanik",
    description:
      "Einführung, Vorteile und Umsetzung des digitalen Laufzettels in Galvanik-Betrieben.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/digitaler-laufzettel`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitaler Laufzettel in der Galvanik",
    description:
      "Vom Papier zum digitalen Prozess – Ratgeber für Galvanik-Betriebe.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "Digitaler Laufzettel", href: "/wissen/digitaler-laufzettel" },
];

export default function DigitalerLaufzettelPage() {
  return (
    <>
      <WebPageSchema
        name="Digitaler Laufzettel in der Galvanik – Einführung & Vorteile"
        description="Vom Papier-Laufzettel zum digitalen Prozess: Zeitersparnis, Fehlerreduktion und ISO-Compliance."
        url="/wissen/digitaler-laufzettel"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 mb-4">
                Praxis
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Digitaler Laufzettel in der Galvanik: Einführung & Vorteile
              </h1>
              <p className="text-lg text-zinc-400">
                Der Laufzettel ist das Herzstück der Galvanik-Fertigung. Er
                begleitet jedes Werkstück durch alle Bearbeitungsstationen und
                dokumentiert, was wann womit gemacht wurde. Doch der klassische
                Papier-Laufzettel hat ausgedient – hier erfahren Sie, warum der
                digitale Laufzettel die bessere Wahl ist und wie Sie ihn
                einführen.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Was ist ein Laufzettel in der Galvanik?
                </h2>
                <p className="text-zinc-400">
                  Ein Laufzettel (auch: Auftragskarte, Fertigungsbegleitkarte)
                  ist ein Dokument, das einen Fertigungsauftrag durch den
                  gesamten Produktionsprozess begleitet. In der Galvanik enthält
                  er typischerweise:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Auftragsnummer, Kundennummer und Teilenummer",
                    "Beschichtungsart, Schichtdicke und Anforderungen",
                    "Durchlaufstationen mit Datum und Mitarbeiter-Kürzel",
                    "Badzusammensetzung und Prozessparameter",
                    "Prüfergebnisse und Qualitätsfreigaben",
                    "Liefertermin und Versandinformationen",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Probleme mit dem Papier-Laufzettel
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: FileText,
                      title: "Unleserlichkeit",
                      desc: "Handschriftliche Einträge werden unleserlich, besonders bei schlechten Arbeitsbedingungen (Nässe, Schmutz, Öl).",
                    },
                    {
                      icon: Clock,
                      title: "Suchaufwand",
                      desc: "Das Auffinden alter Laufzettel für Reklamationen oder Audits kann Stunden oder Tage dauern.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Datenverlust",
                      desc: "Nasse, beschmierte oder verlorene Laufzettel führen zu unwiederbringlichem Datenverlust.",
                    },
                    {
                      icon: FileText,
                      title: "Auswertungslücken",
                      desc: "Statistische Auswertungen von Papier-Laufzetteln sind manuell und fehleranfällig.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Vorteile des digitalen Laufzettels
                </h2>
                <p className="text-zinc-400">
                  Der digitale Laufzettel überwindet alle Schwächen des Papiers
                  und bietet darüber hinaus neue Möglichkeiten:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Echtzeit-Sichtbarkeit: Jeder Auftrag ist jederzeit auffindbar – per Suchfunktion oder QR-Code-Scan",
                    "Automatische Zeitstempel: Kein manuelles Einträgen – Datum und Uhrzeit werden automatisch erfasst",
                    "Unveränderlichkeit: Einmal erfasste Daten sind revisionssicher und manipulationssicher",
                    "Sofortige Auswertbarkeit: Durchlaufzeiten, Ausschussraten und Prozessparameter auf Knopfdruck",
                    "ISO-Compliance: Alle geforderten Nachweise sind automatisch strukturiert vorhanden",
                    "Skalierbarkeit: Gleiches System für 10 oder 10.000 Aufträge täglich",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  QR-Code als Schlüsseltechnologie
                </h2>
                <p className="text-zinc-400">
                  Moderne digitale Laufzettel setzen auf QR-Codes als Verbindung
                  zwischen physischem Werkstück und digitalem Datensatz. Jedes
                  Werkstück erhält beim Auftragseingang einen einzigartigen
                  QR-Code-Aufkleber. An jeder Bearbeitungsstation scannt der
                  Mitarbeiter den Code mit dem Smartphone – und alle relevanten
                  Daten werden automatisch dem richtigen Auftrag zugeordnet.
                </p>
                <p className="text-zinc-400 mt-4">
                  Der Vorteil: Kein Tippen, kein Suchen in Listen, keine
                  Verwechslungen. Der Prozess ist so einfach, dass Mitarbeiter
                  ohne jegliche Schulung sofort produktiv sind.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Einführung des digitalen Laufzettels: So geht es
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Prozessanalyse",
                      desc: "Welche Informationen werden auf dem Laufzettel heute erfasst? Was fehlt, was ist überflüssig?",
                    },
                    {
                      num: "02",
                      title: "Software auswählen",
                      desc: "Eine spezialisierte Lösung für Galvanik (wie GalvanoTrack) ist einem generischen System vorzuziehen.",
                    },
                    {
                      num: "03",
                      title: "Pilotbetrieb starten",
                      desc: "Beginnen Sie mit einem Auftrag oder einer Abteilung. Parallel-Betrieb ist in der Einführungsphase möglich.",
                    },
                    {
                      num: "04",
                      title: "Mitarbeiter einbinden",
                      desc: "Erklären Sie den Nutzen. Mitarbeiter, die die Vorteile verstehen, werden zu Botschaftern.",
                    },
                    {
                      num: "05",
                      title: "Vollständige Einführung",
                      desc: "Nach erfolgreichem Piloten den Papierprozess schrittweise ablösen.",
                    },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                    >
                      <span className="text-3xl font-bold text-blue-900 flex-shrink-0">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-zinc-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 border-t border-zinc-800 pt-8">
                <h2 className="text-xl font-bold text-white mb-4">
                  Weiterführende Artikel
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/wissen/qr-code-verfolgung",
                      label: "QR-Code Verfolgung",
                      desc: "QR-Codes effektiv einsetzen",
                    },
                    {
                      href: "/wissen/chargenverfolgung",
                      label: "Chargenverfolgung",
                      desc: "Lückenlose Chargendokumentation",
                    },
                    {
                      href: "/wissen/galvanik-dokumentation",
                      label: "Galvanik-Dokumentation",
                      desc: "Welche Dokumente gefordert sind",
                    },
                    {
                      href: "/digitaler-laufzettel",
                      label: "Software-Lösung",
                      desc: "GalvanoTrack für digitale Laufzettel",
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
              </section>

              <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-8 text-center border border-blue-800/30">
                <FileText className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  Digitaler Laufzettel mit GalvanoTrack
                </h2>
                <p className="text-zinc-400 mb-6">
                  Starten Sie in 30 Minuten. Keine komplizierte Einrichtung,
                  keine Schulung.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Kostenlose Demo starten
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
