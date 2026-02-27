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
  ClipboardCheck,
  Shield,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ISO 9001 in der Galvanik – Anforderungen & Umsetzung",
  description:
    "Wie Galvanik-Betriebe ISO 9001 erfolgreich einführen: Qualitätsmanagementsystem, Dokumentationspflichten, Rückverfolgbarkeit und praktische Umsetzungstipps.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/iso-9001-galvanik`,
  },
  openGraph: {
    title: "ISO 9001 in der Galvanik – Anforderungen & Umsetzung",
    description:
      "Alles zu ISO 9001 für Galvanik-Betriebe: Qualitätsmanagementsystem, Dokumentation und Rückverfolgbarkeit.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/iso-9001-galvanik`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO 9001 in der Galvanik",
    description:
      "Anforderungen und praktische Umsetzung für Galvanik-Betriebe.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "ISO 9001 in der Galvanik", href: "/wissen/iso-9001-galvanik" },
];

export default function ISO9001GalvanikPage() {
  return (
    <>
      <WebPageSchema
        name="ISO 9001 in der Galvanik – Anforderungen & Umsetzung"
        description="Wie Galvanik-Betriebe ISO 9001 erfolgreich einführen: Qualitätsmanagementsystem, Dokumentationspflichten und Rückverfolgbarkeit."
        url="/wissen/iso-9001-galvanik"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            {/* Header */}
            <div className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 mb-4">
                Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                ISO 9001 in der Galvanik: Anforderungen & Umsetzung
              </h1>
              <p className="text-lg text-zinc-400">
                Die ISO 9001 ist für viele Galvanik-Betriebe längst kein
                optionales Zertifikat mehr – Kunden aus der Automobilindustrie
                und anderen Schlüsselbranchen fordern es als Mindeststandard.
                Dieser Ratgeber zeigt, was ISO 9001 konkret für Ihren Betrieb
                bedeutet und wie Sie die Anforderungen effizient erfüllen.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-zinc max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Was ist ISO 9001?
                </h2>
                <p className="text-zinc-400">
                  ISO 9001 ist die international führende Norm für
                  Qualitätsmanagementsysteme (QMS). Sie legt Anforderungen fest,
                  wie Unternehmen ihre Prozesse strukturieren, überwachen und
                  verbessern müssen – unabhängig von Branche oder
                  Unternehmensgröße. In der neuesten Version ISO 9001:2015
                  stehen risikobasiertes Denken und die Führungsverantwortung
                  stärker im Mittelpunkt als je zuvor.
                </p>
                <p className="text-zinc-400">
                  Für Galvanik-Betriebe ist die Norm besonders relevant, da
                  galvanische Beschichtungsprozesse stark von Prozessstabilität
                  und lückenloser Dokumentation abhängen. Schwankungen in der
                  Badzusammensetzung, der Temperatur oder der Einwirkzeit wirken
                  sich direkt auf die Beschichtungsqualität aus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Kernprinzipien der ISO 9001 für Galvanik
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Kundenorientierung",
                      desc: "Kundenforderungen systematisch erfassen und einhalten – inklusive Qualitätsnachweise und Rückverfolgbarkeit.",
                    },
                    {
                      title: "Führungsverantwortung",
                      desc: "Die Unternehmensleitung muss das QMS aktiv unterstützen und Qualitätsziele definieren.",
                    },
                    {
                      title: "Risikobasiertes Denken",
                      desc: "Risiken in Galvanikprozessen (Badzusammenbruch, Fehlerchargen) frühzeitig identifizieren und steuern.",
                    },
                    {
                      title: "Kontinuierliche Verbesserung",
                      desc: "Durch Korrekturmaßnahmen und regelmäßige Audits Prozesse stetig optimieren.",
                    },
                    {
                      title: "Prozessorientierung",
                      desc: "Alle Galvanikschritte als zusammenhängende Prozesskette betrachten und steuern.",
                    },
                    {
                      title: "Evidenzbasierte Entscheidungen",
                      desc: "Entscheidungen auf Basis von messbaren Daten und dokumentierten Kennzahlen treffen.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
                  Dokumentationspflichten nach ISO 9001
                </h2>
                <p className="text-zinc-400">
                  ISO 9001:2015 verlangt bestimmte dokumentierte Informationen.
                  Für Galvanik-Betriebe bedeutet das konkret, dass folgende
                  Nachweise vorhanden und aktuell sein müssen:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Qualitätspolitik und messbare Qualitätsziele",
                    "Aufzeichnungen über Kalibrierungen von Messmitteln (pH-Meter, Dickenmessgeräte)",
                    "Prüfnachweise für jede Charge: Badzusammensetzung, Temperatur, Einwirkzeit",
                    "Nichtkonformitätsberichte und eingeleitete Korrekturmaßnahmen",
                    "Interne Auditberichte und Ergebnisse der Managementbewertung",
                    "Nachweise über die Qualifikation und Schulung der Mitarbeiter",
                    "Lieferantenbeurteilungen und Wareneingangsprüfungen",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <FileText className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Rückverfolgbarkeit als Kernelemente
                </h2>
                <p className="text-zinc-400">
                  Abschnitt 8.5.2 der ISO 9001 fordert Rückverfolgbarkeit, wenn
                  diese vertraglich vereinbart wurde oder gesetzlich
                  vorgeschrieben ist. In der Praxis verlangen nahezu alle
                  Tier-1- und Tier-2-Kunden der Automobilindustrie eine
                  vollständige Rückverfolgbarkeit jeder Charge.
                </p>
                <p className="text-zinc-400 mt-4">
                  Das bedeutet: Für jedes beschichtete Werkstück muss
                  nachvollziehbar sein, welches Bad verwendet wurde, wer die
                  Bearbeitung durchgeführt hat, welche Materialcharge eingesetzt
                  wurde und welche Prüfergebnisse erzielt wurden. Mit
                  papierbasierter Zettelwirtschaft ist dies kaum praktikabel.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Schritt-für-Schritt: ISO 9001 Einführung im Galvanik-Betrieb
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Gap-Analyse durchführen",
                      desc: "Vergleich des Ist-Zustands mit den ISO-Anforderungen. Wo fehlen Dokumentationen, Prozessbeschreibungen oder Nachweise?",
                    },
                    {
                      num: "02",
                      title: "Prozesse beschreiben",
                      desc: "Alle Galvanikprozesse systematisch dokumentieren: Vorbehandlung, Beschichtungsbäder, Nachbehandlung, Prüfung.",
                    },
                    {
                      num: "03",
                      title: "Digitale Erfassung einführen",
                      desc: "Digitale Laufzettel statt Papier. QR-Code-basierte Erfassung an jeder Station spart Zeit und erhöht Datenqualität.",
                    },
                    {
                      num: "04",
                      title: "Mitarbeiter schulen",
                      desc: "Alle Beteiligten auf die neuen Prozesse und das QMS schulen. Verständnis für 'Warum' schafft Akzeptanz.",
                    },
                    {
                      num: "05",
                      title: "Internes Audit",
                      desc: "Vor der Zertifizierung einen internen Audit durchführen, um letzte Lücken zu schließen.",
                    },
                    {
                      num: "06",
                      title: "Zertifizierungsaudit",
                      desc: "Eine akkreditierte Zertifizierungsstelle führt das externe Audit durch und erteilt das ISO 9001-Zertifikat.",
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

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Wie GalvanoTrack die ISO-9001-Anforderungen erfüllt
                </h2>
                <p className="text-zinc-400">
                  GalvanoTrack wurde von Grund auf so entwickelt, dass die
                  Nutzung der Software automatisch die wesentlichen
                  ISO-9001-Dokumentationsanforderungen erfüllt:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Automatische Protokollierung jedes Bearbeitungsschritts mit Zeitstempel und Mitarbeiter-ID",
                    "Digitale Badzusammensetzungen, Temperaturen und Einwirkzeiten pro Charge",
                    "Sofortiger Audit-Export als PDF oder CSV – keine manuelle Aufbereitung",
                    "Nichtkonformitäten direkt im System erfassen und Korrekturmaßnahmen dokumentieren",
                    "Alle Daten unveränderbar archiviert, DSGVO-konform in Deutschland gehostet",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Internal Links */}
              <section className="mt-12 border-t border-zinc-800 pt-8">
                <h2 className="text-xl font-bold text-white mb-4">
                  Weiterführende Artikel
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/wissen/iatf-16949",
                      label: "IATF 16949 für Automotive",
                      desc: "Erweiterte Anforderungen für Automobilzulieferer",
                    },
                    {
                      href: "/wissen/galvanik-dokumentation",
                      label: "Galvanik-Dokumentation",
                      desc: "Welche Dokumente gefordert sind",
                    },
                    {
                      href: "/wissen/chargenverfolgung",
                      label: "Chargenverfolgung",
                      desc: "Lückenlose Chargendokumentation",
                    },
                    {
                      href: "/iso-9001-galvanik",
                      label: "ISO 9001 Lösungsseite",
                      desc: "Unsere Software-Lösung für ISO 9001",
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

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-8 text-center border border-blue-800/30">
                <ClipboardCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  ISO 9001 Compliance mit GalvanoTrack
                </h2>
                <p className="text-zinc-400 mb-6">
                  Entdecken Sie, wie GalvanoTrack Ihren Betrieb audit-ready
                  macht.
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
