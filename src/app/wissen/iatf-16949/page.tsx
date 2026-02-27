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
  BookOpen,
  Shield,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IATF 16949 für Automotive-Galvanik – Anforderungen & Compliance",
  description:
    "IATF 16949 im Galvanik-Betrieb: Automotive-Norm verstehen, Anforderungen umsetzen und Kunden-Audits erfolgreich bestehen. Praxisleitfaden für Lohnbeschichter.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/iatf-16949`,
  },
  openGraph: {
    title: "IATF 16949 für Automotive-Galvanik",
    description:
      "Anforderungen, Unterschiede zur ISO 9001 und Umsetzung im Galvanik-Betrieb.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/iatf-16949`,
  },
  twitter: {
    card: "summary_large_image",
    title: "IATF 16949 für Automotive-Galvanik",
    description:
      "Praxisleitfaden für Galvanik-Betriebe als Automobilzulieferer.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "IATF 16949 für Automotive", href: "/wissen/iatf-16949" },
];

export default function IATF16949Page() {
  return (
    <>
      <WebPageSchema
        name="IATF 16949 für Automotive-Galvanik – Anforderungen & Compliance"
        description="IATF 16949 im Galvanik-Betrieb: Automotive-Norm verstehen und umsetzen."
        url="/wissen/iatf-16949"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 mb-4">
                Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                IATF 16949: Automotive-Norm für Galvanik-Zulieferer
              </h1>
              <p className="text-lg text-zinc-400">
                Die IATF 16949 ist der globale QMS-Standard der
                Automobilindustrie. Galvanik-Betriebe, die als Tier-1- oder
                Tier-2-Zulieferer tätig sind, müssen diese Norm erfüllen – oder
                sie werden als Lieferant nicht zugelassen. Dieser Leitfaden
                erklärt alles, was Sie für die Compliance benötigen.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Was ist IATF 16949?
                </h2>
                <p className="text-zinc-400">
                  Die IATF 16949 (International Automotive Task Force) ist die
                  branchenspezifische Erweiterung der ISO 9001 für die
                  Automobilindustrie. Sie wurde von führenden
                  Automobilherstellern wie BMW, Daimler, Ford, GM, PSA und
                  Volkswagen gemeinsam entwickelt und ist seit 2016 die
                  Nachfolgerin der ISO/TS 16949.
                </p>
                <p className="text-zinc-400 mt-4">
                  Galvanik-Betriebe, die Automobilteile beschichten – ob
                  Zink-Nickel-Beschichtungen für Korrosionsschutz,
                  Chrombeschichtungen für Dekorteile oder Kupferbeschichtungen
                  für elektrische Kontakte – unterliegen in der Regel den
                  Anforderungen dieser Norm.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  IATF 16949 vs. ISO 9001: Die wichtigsten Unterschiede
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          Aspekt
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          ISO 9001
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          IATF 16949
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400 text-sm">
                      {[
                        [
                          "Zielbranche",
                          "Alle Branchen",
                          "Nur Automobilindustrie",
                        ],
                        [
                          "Prozessansatz",
                          "Allgemein",
                          "Spezifisch für Serienproduktion",
                        ],
                        [
                          "Rückverfolgbarkeit",
                          "Wenn vereinbart",
                          "Immer verpflichtend",
                        ],
                        ["APQP/PPAP", "Nicht gefordert", "Verpflichtend"],
                        ["MSA", "Nicht gefordert", "Verpflichtend"],
                        ["SPC", "Empfohlen", "Häufig verpflichtend"],
                        [
                          "Kundenspezifika",
                          "Nicht geregelt",
                          "Customer-Specific Requirements",
                        ],
                      ].map(([aspect, iso, iatf]) => (
                        <tr key={aspect} className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium text-white">
                            {aspect}
                          </td>
                          <td className="py-3 px-4">{iso}</td>
                          <td className="py-3 px-4 text-blue-300">{iatf}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Spezielle Anforderungen für Galvanik-Betriebe
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "Prozessfähigkeitsnachweise",
                      desc: "Galvanikprozesse müssen nachweislich fähig sein (Cpk ≥ 1,67). Beschichtungsdicken, Haftfestigkeit und Korrosionsbeständigkeit werden statistisch überwacht.",
                    },
                    {
                      icon: AlertTriangle,
                      title: "Änderungsmanagement",
                      desc: "Jede Änderung an der Badzusammensetzung, den Prozessparametern oder der Anlage muss dokumentiert und genehmigt werden (Change Management).",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Produktionslenkungsplan",
                      desc: "Ein Produktionslenkungsplan (Control Plan) muss alle kritischen Merkmale, Prüfmethoden und Reaktionspläne für jeden Galvanikprozess dokumentieren.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                    >
                      <item.icon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Kundenspezifische Anforderungen (CSR)
                </h2>
                <p className="text-zinc-400">
                  Neben der IATF 16949 selbst haben fast alle großen OEMs eigene
                  kundenspezifische Anforderungen (Customer Specific
                  Requirements, CSR), die zusätzlich erfüllt werden müssen.
                  Diese sind beim IATF-Zertifizierungsaudit mit zu überprüfen.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "BMW Group: spezifische Prüfvorschriften und Freigabeverfahren",
                    "Volkswagen Group: VDA 6.3 Prozessaudit als Ergänzung",
                    "Ford Motor Company: ANPQP-Anforderungen",
                    "Stellantis: CS-9 Dokumentationsanforderungen",
                    "Mercedes-Benz: MBN-Normen für Beschichtungsprozesse",
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
                  Rückverfolgbarkeit nach IATF 16949
                </h2>
                <p className="text-zinc-400">
                  Im Gegensatz zur ISO 9001 ist Rückverfolgbarkeit nach IATF
                  16949 immer verpflichtend – nicht nur wenn vertraglich
                  vereinbart. Für jedes Automotive-Bauteil muss die vollständige
                  Produktions- und Prüfhistorie lückenlos dokumentiert und
                  mindestens 15 Jahre aufbewahrt werden.
                </p>
                <p className="text-zinc-400 mt-4">
                  Bei einem Rückruf muss ein Galvanik-Betrieb innerhalb
                  kürzester Zeit alle betroffenen Teile identifizieren können:
                  Welche Chargen, welche Bäder, welche Lieferungen. Dies ist mit
                  Papier-Laufzetteln praktisch unmöglich und erfordert eine
                  digitale Lösung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  GalvanoTrack und IATF 16949-Compliance
                </h2>
                <p className="text-zinc-400">
                  GalvanoTrack unterstützt Galvanik-Betriebe dabei, die
                  IATF-16949-Anforderungen zu erfüllen:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Lückenlose Chargenverfolgung mit Zeitstempel und Mitarbeiter-ID",
                    "Prozessparameter-Erfassung für jeden Galvanikschritt",
                    "Audit-Berichte auf Knopfdruck – keine manuelle Aufbereitung",
                    "15-jährige Aufbewahrung gemäß IATF-Anforderungen",
                    "Nichtkonformitätsdokumentation und Korrekturmaßnahmen",
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

              <section className="mt-12 border-t border-zinc-800 pt-8">
                <h2 className="text-xl font-bold text-white mb-4">
                  Weiterführende Artikel
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/wissen/iso-9001-galvanik",
                      label: "ISO 9001 in der Galvanik",
                      desc: "Grundlagen der Qualitätsnorm",
                    },
                    {
                      href: "/wissen/chargenverfolgung",
                      label: "Chargenverfolgung",
                      desc: "Lückenlose Chargendokumentation",
                    },
                    {
                      href: "/wissen/oberflaechenpruefung",
                      label: "Oberflächenprüfung",
                      desc: "Prüfmethoden und Standards",
                    },
                    {
                      href: "/iatf-16949",
                      label: "IATF 16949 Lösungsseite",
                      desc: "Unsere Automotive-Compliance-Lösung",
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
                <BookOpen className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  IATF 16949-Compliance mit GalvanoTrack
                </h2>
                <p className="text-zinc-400 mb-6">
                  Machen Sie Ihren Betrieb automotive-ready. Kostenlose Demo
                  verfügbar.
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
