import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { CheckCircle2, ArrowRight, Package, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Chargenverfolgung in der Galvanik – Lückenlose Dokumentation",
  description:
    "Chargenverfolgung in der Galvanik: Warum sie unverzichtbar ist, welche Anforderungen gelten und wie Sie lückenlose Chargendokumentation von der Vorreinigung bis zur Verpackung sicherstellen.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/chargenverfolgung`,
  },
  openGraph: {
    title: "Chargenverfolgung in der Galvanik",
    description:
      "Lückenlose Chargendokumentation: Anforderungen, Umsetzung und Software-Unterstützung.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/chargenverfolgung`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chargenverfolgung in der Galvanik",
    description: "Lückenlose Chargendokumentation für Galvanik-Betriebe.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "Chargenverfolgung", href: "/wissen/chargenverfolgung" },
];

export default function ChargenverfolgungPage() {
  return (
    <>
      <WebPageSchema
        name="Chargenverfolgung in der Galvanik – Lückenlose Dokumentation"
        description="Chargenverfolgung in der Galvanik: Anforderungen, Umsetzung und Software-Unterstützung."
        url="/wissen/chargenverfolgung"
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
                Chargenverfolgung in der Galvanik: Lückenlose Dokumentation
              </h1>
              <p className="text-lg text-zinc-400">
                Eine Charge in der Galvanik umfasst alle Werkstücke, die
                gemeinsam in einem Bad behandelt wurden. Die lückenlose
                Verfolgung dieser Chargen ist nicht nur für ISO 9001 und IATF
                16949 verpflichtend – sie ist auch im Reklamationsfall das
                entscheidende Instrument zur Fehleranalyse und
                Schadensminimierung.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Was ist eine Charge in der Galvanik?
                </h2>
                <p className="text-zinc-400">
                  In der Galvanik bezeichnet eine Charge (auch: Batch) die Menge
                  von Werkstücken, die in einem einzigen Galvanikbad-Durchgang
                  behandelt wird. Chargen können nach verschiedenen Kriterien
                  definiert werden:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Zeitbasiert: Alle Teile, die in einem definierten Zeitfenster behandelt wurden",
                    "Badbasiert: Alle Teile eines Bad-Durchgangs (1 Hebekorbinhalt = 1 Charge)",
                    "Kundenauftragbasiert: Alle Teile eines Kundenauftrags",
                    "Materialchargenbasiert: Alle Teile aus derselben Materiallieferung",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <Package className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 mt-4">
                  In der Praxis empfiehlt sich eine Kombination: Die
                  Chargennummer enthält sowohl die Auftragsreferenz als auch
                  einen laufenden Bad-Durchgangzähler.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Was muss bei jeder Charge dokumentiert werden?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Badzusammensetzung",
                      desc: "Konzentration aller Badchemikalien zu Beginn des Durchgangs",
                    },
                    {
                      title: "Prozessparameter",
                      desc: "Temperatur, pH-Wert, Stromdichte, Spannung, Einwirkzeit",
                    },
                    {
                      title: "Badidentifikation",
                      desc: "Welches Bad (Bad-Nr. 3, Zink-Nickel), laufende Bad-Nummer, Chargennummer",
                    },
                    {
                      title: "Zeitstempel",
                      desc: "Einlegezeit und Entnahmezeit der Teile",
                    },
                    {
                      title: "Mitarbeiter-ID",
                      desc: "Wer war verantwortlicher Bediener",
                    },
                    {
                      title: "Prüfergebnisse",
                      desc: "Schichtdicke, Haftfestigkeit, Korrosionstest-Ergebnisse",
                    },
                    {
                      title: "Abweichungen",
                      desc: "Jede Prozessabweichung und eingeleitete Maßnahme",
                    },
                    {
                      title: "Materialcharge",
                      desc: "Welche Materiallieferung (Lot-Nummer des Lieferanten)",
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
                  Chargenverfolgung von der Vorreinigung bis zur Verpackung
                </h2>
                <p className="text-zinc-400">
                  Eine vollständige Chargenverfolgung beginnt nicht erst bei der
                  Galvanik-Station, sondern beim Wareneingang und endet erst
                  nach der Verpackung:
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      station: "Wareneingang",
                      data: "Lieferant, Materialcharge, Zustand, Wareneingangsprüfung",
                    },
                    {
                      station: "Vorreinigung",
                      data: "Reinigungsmittel, Konzentration, Temperatur, Einwirkzeit",
                    },
                    {
                      station: "Dekapierung",
                      data: "Säurekonzentration, Temperatur, Zeit",
                    },
                    {
                      station: "Galvanikbad",
                      data: "Vollständige Baddaten (s. oben)",
                    },
                    {
                      station: "Spülung",
                      data: "Spülwasser-Qualität, Leitfähigkeit, Durchfluss",
                    },
                    {
                      station: "Passivierung/Versiegelung",
                      desc: "Chemikalienart, Konzentration, Temperatur",
                    },
                    { station: "Trocknung", data: "Temperatur, Zeit, Methode" },
                    {
                      station: "Endprüfung",
                      data: "Prüfer, Messgeräte, Messwerte, Ergebnis (i.O./n.i.O.)",
                    },
                    {
                      station: "Verpackung & Versand",
                      data: "Verpackungsart, Lieferung, Versanddatum",
                    },
                  ].map((item) => (
                    <div key={item.station} className="flex gap-4 items-start">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">
                          {item.station}:
                        </span>
                        <span className="text-zinc-400 ml-2">
                          {item.data ||
                            (item as { data?: string; desc?: string }).desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Aufbewahrungsfristen für Chargenaufzeichnungen
                </h2>
                <p className="text-zinc-400">
                  Die Aufbewahrungsfristen für Chargenaufzeichnungen richten
                  sich nach Normen, Kundenvereinbarungen und gesetzlichen
                  Anforderungen:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "ISO 9001: Mindestens so lange, wie vereinbart (typisch 5-10 Jahre)",
                    "IATF 16949: Mindestens 15 Jahre nach Produktionslaufende",
                    "Automobilindustrie: Oft die Fahrzeuglebensdauer + 10 Jahre",
                    "Luftfahrt/Medizin: Oft 20-30 Jahre oder unbegrenzt",
                    "DSGVO: Personenbezogene Daten nur so lange wie nötig",
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
                  Digitale Chargenverfolgung mit GalvanoTrack
                </h2>
                <p className="text-zinc-400">
                  GalvanoTrack bietet vollständige digitale Chargenverfolgung –
                  von der Erstellung der Chargennummer bis zum automatischen
                  Archivieren:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Automatische Chargennummern-Vergabe nach konfigurierbarem Schema",
                    "QR-Code pro Charge ermöglicht schnellen Zugriff auf alle Chargen-Daten",
                    "Alle Prozessparameter werden stationsweise erfasst und gespeichert",
                    "Rückwärtssuche: Welche Chargen waren in Bad Nr. 3 am 15. März?",
                    "Vorwärtssuche: Welche Kunden haben Teile aus Charge 2024-0342 erhalten?",
                    "Unveränderliche Archivierung für die gesamte Aufbewahrungsfrist",
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
                      href: "/wissen/qr-code-verfolgung",
                      label: "QR-Code Verfolgung",
                      desc: "QR-Codes für Chargenverfolgung einsetzen",
                    },
                    {
                      href: "/wissen/iso-9001-galvanik",
                      label: "ISO 9001 Galvanik",
                      desc: "Normanforderungen und Dokumentation",
                    },
                    {
                      href: "/wissen/galvanik-dokumentation",
                      label: "Galvanik-Dokumentation",
                      desc: "Welche Dokumente insgesamt gefordert sind",
                    },
                    {
                      href: "/batch-verfolgung",
                      label: "Batch-Verfolgung Software",
                      desc: "GalvanoTrack Chargenverfolgung",
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
                <Package className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  Lückenlose Chargenverfolgung mit GalvanoTrack
                </h2>
                <p className="text-zinc-400 mb-6">
                  Jede Charge vollständig dokumentiert – automatisch.
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
