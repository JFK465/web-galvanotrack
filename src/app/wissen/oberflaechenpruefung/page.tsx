import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { CheckCircle2, ArrowRight, ClipboardCheck, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Oberflächenprüfung in der Galvanik – Methoden & Normen",
  description:
    "Methoden und Standards zur Prüfung von Galvanik-Beschichtungen: Schichtdickenmessung, Salzsprühtest, Haftfestigkeitsprüfung und ISO-konforme Dokumentation.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/oberflaechenpruefung`,
  },
  openGraph: {
    title: "Oberflächenprüfung in der Galvanik",
    description:
      "Methoden und Standards zur Qualitätsprüfung von Galvanik-Beschichtungen.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/oberflaechenpruefung`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Oberflächenprüfung in der Galvanik",
    description: "Prüfmethoden und Normen für Galvanik-Beschichtungen.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "Oberflächenprüfung", href: "/wissen/oberflaechenpruefung" },
];

export default function OberflaechenpruefungPage() {
  return (
    <>
      <WebPageSchema
        name="Oberflächenprüfung in der Galvanik – Methoden & Normen"
        description="Methoden und Standards zur Prüfung von Galvanik-Beschichtungen."
        url="/wissen/oberflaechenpruefung"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-900/30 text-yellow-400 mb-4">
                Qualität
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Oberflächenprüfung in der Galvanik: Methoden & Normen
              </h1>
              <p className="text-lg text-zinc-400">
                Die Qualitätsprüfung von Galvanik-Beschichtungen ist ein
                unverzichtbarer Bestandteil jedes QMS in der Galvanik. Ohne
                dokumentierte Prüfergebnisse fehlt der Nachweis, dass die
                Beschichtung den Anforderungen entspricht. Dieser Leitfaden
                erklärt die wichtigsten Prüfmethoden und wie Sie diese
                normenkonform dokumentieren.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Warum Oberflächenprüfung unverzichtbar ist
                </h2>
                <p className="text-zinc-400">
                  Galvanik-Beschichtungen müssen definierte Eigenschaften
                  erfüllen: eine bestimmte Mindestschichtdicke, ausreichende
                  Haftfestigkeit, Korrosionsbeständigkeit und optische Qualität.
                  Ohne regelmäßige, dokumentierte Prüfungen können Fehler
                  unentdeckt in den Markt gelangen – mit gravierenden Folgen für
                  Reklamationen, Garantiefälle und im Automotive-Bereich sogar
                  Rückrufe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Die wichtigsten Prüfmethoden im Überblick
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Schichtdickenmessung",
                      norm: "DIN EN ISO 2178, ISO 2360",
                      desc: "Die Schichtdicke ist die wichtigste Kenngröße. Methoden: Magnetisches Verfahren (für nicht-magnetische Schichten auf Stahl), Wirbelstrom (für nicht-leitende Schichten), Röntgenfluoreszenz (zerstörungsfrei, sehr präzise), Querschliffmessung (destruktiv, sehr genau).",
                    },
                    {
                      title: "Salzsprühtest (Korrosionstest)",
                      norm: "DIN EN ISO 9227",
                      desc: "Standardtest zur Bewertung der Korrosionsbeständigkeit. Prüfkörper werden in einer 5%igen NaCl-Lösung beschäubt. Bewertungskriterien: Zeit bis zum ersten Rotrost (für Zink-Beschichtungen), Ausbreitung der Korrosion von Schnitkanten.",
                    },
                    {
                      title: "Haftfestigkeitsprüfung",
                      norm: "DIN EN ISO 2409, ISO 4624",
                      desc: "Gitterschnittprüfung und Pull-off-Test. Die Beschichtung muss ausreichend mit dem Grundwerkstoff haften. Bei Automotive-Teilen oft zusätzlich Thermowechsel-Prüfungen.",
                    },
                    {
                      title: "Visuelle Prüfung",
                      norm: "DIN EN ISO 1461, kundenspezifisch",
                      desc: "Optische Beurteilung der Oberfläche: Gleichmäßigkeit, Farbe, Glanz, Fehlerstellen (Poren, Risse, Einschlüsse, Flecken). Oft mit Referenzmustern abgeglichen.",
                    },
                    {
                      title: "Porositätsprüfung",
                      norm: "DIN EN ISO 4520",
                      desc: "Elektrochemische Tests oder Ferroxyltest zur Erkennung von Poren, die bis zum Grundwerkstoff reichen. Besonders wichtig bei Schutzschichten.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-5"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <ClipboardCheck className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>
                          <span className="text-xs text-blue-400">
                            {item.norm}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Prüfhäufigkeit und Stichprobenpläne
                </h2>
                <p className="text-zinc-400">
                  Wie oft geprüft werden muss, hängt von Norm, Kundenanforderung
                  und internem QMS ab. Typische Anforderungen:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Erstbemusterung (PPAP): 100% Prüfung aller Merkmale an einer definierten Stückzahl",
                    "Serienproduktion: Stichprobenprüfung nach AQL-Tabellen oder festgelegter Frequenz",
                    "Badwechsel oder -korrektur: Anlaufprüfung der ersten Teile aus dem neuen Bad",
                    "Reklamation oder Nonkonformität: 100%-Prüfung der betroffenen Charge",
                    "Regelmäßige Systemkalibierung: Messgeräte täglich oder nach Schichtbeginn prüfen",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Prüfergebnisse dokumentieren – ISO-konform
                </h2>
                <p className="text-zinc-400">
                  Prüfergebnisse müssen so dokumentiert sein, dass sie später
                  nachvollzogen werden können. Ein vollständiger
                  Prüfprotokoll-Datensatz enthält:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Auftragsnummer und Chargennummer der geprüften Teile",
                    "Datum, Uhrzeit und Name des Prüfers",
                    "Verwendetes Messmittel (inkl. Seriennummer und Kalibrierungsdatum)",
                    "Messwerte an definierten Messpunkten",
                    "Sollwert, Toleranz und Ergebnis (i.O./n.i.O.)",
                    "Bei n.i.O.: Eingeleitete Maßnahme und Verantwortlicher",
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
                  Prüfergebnisse digital erfassen mit GalvanoTrack
                </h2>
                <p className="text-zinc-400">
                  GalvanoTrack ermöglicht die direkte digitale Erfassung von
                  Prüfergebnissen – entweder manuell über die App oder per
                  automatischer Übernahme aus digitalen Messmitteln. Alle
                  Ergebnisse sind der jeweiligen Charge automatisch zugeordnet.
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Prüfprotokolle werden automatisch mit Chargendaten verknüpft",
                    "Grenzwerte sind konfigurierbar – automatische Warnung bei n.i.O.",
                    "Messmittel-Verwaltung mit Kalibrierdaten integriert",
                    "Statistische Auswertung der Messwerte über Chargen hinweg",
                    "Export der Prüfprotokolle für Kunden und Zertifizierungen",
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

              <section className="mt-12 border-t border-zinc-800 pt-8">
                <h2 className="text-xl font-bold text-white mb-4">
                  Weiterführende Artikel
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/wissen/chargenverfolgung",
                      label: "Chargenverfolgung",
                      desc: "Vollständige Chargen-Dokumentation",
                    },
                    {
                      href: "/wissen/iso-9001-galvanik",
                      label: "ISO 9001 Galvanik",
                      desc: "Qualitätsmanagementsystem",
                    },
                    {
                      href: "/wissen/galvanik-dokumentation",
                      label: "Galvanik-Dokumentation",
                      desc: "Alle geforderten Dokumente",
                    },
                    {
                      href: "/wissen/iatf-16949",
                      label: "IATF 16949",
                      desc: "Automotive-Compliance",
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
                <ClipboardCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  Prüfprotokolle digital mit GalvanoTrack
                </h2>
                <p className="text-zinc-400 mb-6">
                  Alle Prüfergebnisse automatisch mit der richtigen Charge
                  verknüpft.
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
