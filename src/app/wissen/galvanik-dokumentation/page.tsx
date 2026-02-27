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
  Shield,
  FolderOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Galvanik-Dokumentation – Welche Unterlagen sind Pflicht?",
  description:
    "Welche Dokumente in der Galvanik gesetzlich und normativ gefordert sind: Vollständiger Überblick über Pflichtdokumentationen für ISO 9001, IATF 16949 und Arbeitsschutz.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/galvanik-dokumentation`,
  },
  openGraph: {
    title: "Galvanik-Dokumentation – Welche Unterlagen sind Pflicht?",
    description:
      "Pflichtdokumentationen für Galvanik-Betriebe: ISO, IATF, Arbeitsschutz und mehr.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/galvanik-dokumentation`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Galvanik-Dokumentation",
    description: "Welche Unterlagen in Galvanik-Betrieben Pflicht sind.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "Galvanik-Dokumentation", href: "/wissen/galvanik-dokumentation" },
];

export default function GalvanikDokumentationPage() {
  return (
    <>
      <WebPageSchema
        name="Galvanik-Dokumentation – Welche Unterlagen sind Pflicht?"
        description="Vollständiger Überblick über Pflichtdokumentationen für Galvanik-Betriebe."
        url="/wissen/galvanik-dokumentation"
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
                Galvanik-Dokumentation: Welche Unterlagen sind Pflicht?
              </h1>
              <p className="text-lg text-zinc-400">
                Galvanik-Betriebe unterliegen einer Vielzahl von
                Dokumentationspflichten – aus Normen, Gesetzen und
                Kundenanforderungen. Wer den Überblick verliert, riskiert
                Zertifizierungsversagen, Bußgelder oder Haftungsrisiken. Dieser
                Leitfaden gibt Ihnen eine vollständige Übersicht.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Dokumentationspflichten nach Herkunft
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Normen",
                      desc: "ISO 9001, IATF 16949, Branchennormen",
                      color: "blue",
                    },
                    {
                      title: "Gesetze",
                      desc: "Arbeitsschutz, Gefahrstoffrecht, Wasserrecht, DSGVO",
                      color: "purple",
                    },
                    {
                      title: "Kunden",
                      desc: "Qualitätssicherungsvereinbarungen, Customer Specific Requirements",
                      color: "green",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center"
                    >
                      <FolderOpen
                        className={`w-8 h-8 mx-auto mb-3 ${item.color === "blue" ? "text-blue-400" : item.color === "purple" ? "text-purple-400" : "text-green-400"}`}
                      />
                      <h3 className="font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Qualitätsmanagement-Dokumente (ISO 9001/IATF)
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      doc: "Qualitätshandbuch",
                      desc: "Beschreibt das gesamte QMS (in ISO 9001:2015 nicht mehr verpflichtend, aber empfohlen)",
                    },
                    {
                      doc: "Prozessbeschreibungen",
                      desc: "Für alle relevanten Galvanikprozesse: Vorbehandlung, Beschichtung, Prüfung",
                    },
                    {
                      doc: "Arbeitsanweisungen",
                      desc: "Schritt-für-Schritt-Anleitung für standardisierte Tätigkeiten",
                    },
                    {
                      doc: "Formulare und Aufzeichnungen",
                      desc: "Laufzettel, Prüfprotokolle, Chargenaufzeichnungen, Kalibrierprotokolle",
                    },
                    {
                      doc: "Nichtkonformitätsberichte",
                      desc: "Dokumentation von Qualitätsabweichungen und Korrekturmaßnahmen",
                    },
                    {
                      doc: "Audit-Berichte",
                      desc: "Interne Auditberichte und Managementbewertungsprotokolle",
                    },
                    {
                      doc: "Lieferantenbewertungen",
                      desc: "Qualifikation und Bewertung von Chemikalien- und Material-Lieferanten",
                    },
                  ].map((item) => (
                    <div
                      key={item.doc}
                      className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                    >
                      <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">
                          {item.doc}
                        </span>
                        <p className="text-sm text-zinc-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Gesetzlich vorgeschriebene Dokumentationen
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      area: "Gefahrstoffrecht",
                      items: [
                        "Sicherheitsdatenblätter für alle verwendeten Chemikalien",
                        "Betriebsanweisung und Unterweisungsnachweise der Mitarbeiter",
                        "Gefährdungsbeurteilung für alle Gefahrstofftätigkeiten",
                      ],
                    },
                    {
                      area: "Wasserrecht (WHG)",
                      items: [
                        "Anlagendokumentation für wasserrechtlich relevante Anlagen",
                        "Abwasserüberwachung und -messprotokolle",
                        "Indirekteinleiterkataster (falls vorhanden)",
                      ],
                    },
                    {
                      area: "Arbeitsschutz",
                      items: [
                        "Gefährdungsbeurteilungen für alle Arbeitsplätze",
                        "Betriebsärztliche und sicherheitstechnische Betreuungsnachweise",
                        "Unfallmeldungen und Ersthelfer-Qualifikationen",
                      ],
                    },
                    {
                      area: "Umweltrecht",
                      items: [
                        "Abfallnachweise für gefährliche Abfälle (Begleitscheine)",
                        "Emissionserklärungen (bei genehmigungspflichtigen Anlagen)",
                        "Immissionsschutz-Dokumentationen",
                      ],
                    },
                  ].map((area) => (
                    <div
                      key={area.area}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-5"
                    >
                      <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        {area.area}
                      </h3>
                      <ul className="space-y-2">
                        {area.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-zinc-400"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Aufbewahrungsfristen im Überblick
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          Dokument
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          Frist
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          Grundlage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400 text-sm">
                      {[
                        [
                          "Chargenaufzeichnungen (Automotive)",
                          "15 Jahre",
                          "IATF 16949",
                        ],
                        [
                          "Prüfprotokolle (ISO 9001)",
                          "5-10 Jahre",
                          "ISO 9001, Kundenvertrag",
                        ],
                        ["Abfallbegleitscheine", "3 Jahre", "KrWG §50"],
                        ["Abwasserprotokolle", "5 Jahre", "AbwV"],
                        ["Unfallberichte", "5 Jahre", "DGUV"],
                        ["Gefahrstoff-Unterweisungen", "5 Jahre", "TRGS 555"],
                        [
                          "Kalibrierprotokolle",
                          "mind. Kalibrierintervall",
                          "ISO 9001",
                        ],
                      ].map(([doc, frist, grund]) => (
                        <tr key={doc} className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium text-white">
                            {doc}
                          </td>
                          <td className="py-3 px-4 text-blue-300">{frist}</td>
                          <td className="py-3 px-4">{grund}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Digitale Dokumentation mit GalvanoTrack
                </h2>
                <p className="text-zinc-400">
                  GalvanoTrack deckt die wichtigsten Pflichtdokumentationen für
                  Galvanik-Betriebe digital ab und erleichtert die Einhaltung
                  aller Normen:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Digitale Laufzettel ersetzen Papier-Fertigungsbegleitkarten",
                    "Chargenaufzeichnungen automatisch vollständig und unveränderlich",
                    "Prüfprotokolle direkt mit Chargen und Aufträgen verknüpft",
                    "Nichtkonformitäten erfassen und Korrekturmaßnahmen dokumentieren",
                    "Audit-Export auf Knopfdruck für ISO 9001 und IATF 16949",
                    "Alle Daten DSGVO-konform in deutschen Rechenzentren gespeichert",
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
                      href: "/wissen/iso-9001-galvanik",
                      label: "ISO 9001 Galvanik",
                      desc: "Normanforderungen detailliert",
                    },
                    {
                      href: "/wissen/chargenverfolgung",
                      label: "Chargenverfolgung",
                      desc: "Chargen vollständig dokumentieren",
                    },
                    {
                      href: "/wissen/oberflaechenpruefung",
                      label: "Oberflächenprüfung",
                      desc: "Prüfprotokolle und Normen",
                    },
                    {
                      href: "/wissen/iatf-16949",
                      label: "IATF 16949",
                      desc: "Automotive-Dokumentationsanforderungen",
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
                <FolderOpen className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  Dokumentation effizienter gestalten
                </h2>
                <p className="text-zinc-400 mb-6">
                  GalvanoTrack automatisiert Ihre Pflichtdokumentationen.
                  Weniger Aufwand, mehr Compliance.
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
