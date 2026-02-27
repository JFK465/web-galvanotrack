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
  Shield,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "QR-Code Verfolgung in der Galvanik – Anleitung & Best Practices",
  description:
    "QR-Codes für die Auftragsverfolgung in der Galvanik: So richten Sie QR-Code-basierte Rückverfolgbarkeit ein, wählen die richtige Hardware und vermeiden typische Fehler.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/qr-code-verfolgung`,
  },
  openGraph: {
    title: "QR-Code Verfolgung in der Galvanik",
    description:
      "Anleitung und Best Practices für QR-Code-basierte Auftragsverfolgung in Galvanik-Betrieben.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen/qr-code-verfolgung`,
  },
  twitter: {
    card: "summary_large_image",
    title: "QR-Code Verfolgung in der Galvanik",
    description:
      "Anleitung für QR-Code-basierte Rückverfolgbarkeit in Galvanik-Betrieben.",
  },
};

const breadcrumbs = [
  { name: "Wissen", href: "/wissen" },
  { name: "QR-Code Verfolgung", href: "/wissen/qr-code-verfolgung" },
];

export default function QRCodeVerfolgungPage() {
  return (
    <>
      <WebPageSchema
        name="QR-Code Verfolgung in der Galvanik"
        description="QR-Codes für die Auftragsverfolgung in der Galvanik: Anleitung und Best Practices."
        url="/wissen/qr-code-verfolgung"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-900/30 text-purple-400 mb-4">
                Technologie
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                QR-Code Verfolgung in der Galvanik: Anleitung & Best Practices
              </h1>
              <p className="text-lg text-zinc-400">
                QR-Codes sind heute die einfachste und zuverlässigste
                Technologie für die Werkstückverfolgung in der Galvanik. Dieser
                Leitfaden zeigt, wie Sie QR-Code-basierte Rückverfolgbarkeit
                effektiv einrichten, welche Hardware empfehlenswert ist und
                welche Fehler Sie vermeiden sollten.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Warum QR-Codes für die Galvanik?
                </h2>
                <p className="text-zinc-400">
                  Galvanische Beschichtungsprozesse sind komplexe, mehrstufige
                  Abläufe. Jedes Werkstück durchläuft Vorbehandlung,
                  verschiedene Bäder, Zwischenspülungen und Nachbehandlung. An
                  jeder Station müssen relevante Daten erfasst werden. QR-Codes
                  lösen das Zuordnungsproblem elegant: Jeder Scan ordnet die
                  erfassten Daten automatisch dem richtigen Auftrag zu.
                </p>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Smartphone,
                      title: "Kein Spezial-Gerät",
                      desc: "Jedes Smartphone kann QR-Codes lesen – keine teure Spezial-Hardware nötig.",
                    },
                    {
                      icon: QrCode,
                      title: "Eindeutige Zuordnung",
                      desc: "Jeder QR-Code ist einzigartig – keine Verwechslungen möglich.",
                    },
                    {
                      icon: Shield,
                      title: "Robust & zuverlässig",
                      desc: "QR-Codes sind lesbar, selbst wenn sie schmutzig oder teilweise beschädigt sind.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center"
                    >
                      <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
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
                  QR-Code vs. Barcode vs. RFID
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          Kriterium
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          QR-Code
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          Barcode
                        </th>
                        <th className="text-left py-3 px-4 text-zinc-300 font-semibold">
                          RFID
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400 text-sm">
                      {[
                        ["Kosten", "Sehr niedrig", "Niedrig", "Hoch"],
                        ["Lesegerät", "Smartphone", "Scanner", "RFID-Reader"],
                        ["Datenmenge", "Mittel", "Gering", "Hoch"],
                        [
                          "Chemikalienbeständigkeit",
                          "Ja (Etiketten)",
                          "Ja (Etiketten)",
                          "Bedingt",
                        ],
                        ["Beschädigungstoleranz", "Bis 30%", "Gering", "Hoch"],
                        [
                          "Galvanik-Eignung",
                          "Sehr gut",
                          "Gut",
                          "Eingeschränkt",
                        ],
                      ].map(([k, qr, bc, rf]) => (
                        <tr key={k} className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium text-white">
                            {k}
                          </td>
                          <td className="py-3 px-4 text-green-300">{qr}</td>
                          <td className="py-3 px-4">{bc}</td>
                          <td className="py-3 px-4">{rf}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Etiketten für die Galvanik: Was Sie beachten müssen
                </h2>
                <p className="text-zinc-400">
                  Galvanische Umgebungen sind anspruchsvoll: Chemikalien,
                  Feuchtigkeit, Wärme und mechanische Beanspruchung – normale
                  Etiketten halten diesen Bedingungen nicht stand. Wählen Sie
                  speziell für Industrie-Umgebungen ausgelegte Etiketten:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Polyester-Etiketten: chemikalienbeständig, feuchtigkeitsfest, bis 150°C",
                    "Metallisierte Folien-Etiketten: für besonders raue Umgebungen",
                    "Lasergravierte Schilder: für permanente Kennzeichnung von Gestellen",
                    "Empfehlung Druckverfahren: Thermotransferdruck statt Inkjet",
                    "Etikettengröße: mindestens 20x20mm für zuverlässige Lesbarkeit",
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
                  Schritt-für-Schritt: QR-Code-Verfolgung einrichten
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Software auswählen",
                      desc: "Eine auf Galvanik spezialisierte Software wie GalvanoTrack bringt QR-Code-Verwaltung bereits integriert mit.",
                    },
                    {
                      num: "02",
                      title: "Hardware beschaffen",
                      desc: "Etikettendrucker (Zebra, Honeywell), geeignete Etiketten und optional ein dedizierter Handscanner.",
                    },
                    {
                      num: "03",
                      title: "Etiketten-Vorlage erstellen",
                      desc: "QR-Code + Auftragsnummer + Kundenkürzel + Beschichtungsart in übersichtlichem Format.",
                    },
                    {
                      num: "04",
                      title: "Scan-Stationen einrichten",
                      desc: "An jeder Bearbeitungsstation ein Smartphone oder Tablet mit Scan-App bereitstellen.",
                    },
                    {
                      num: "05",
                      title: "Pilotlauf durchführen",
                      desc: "Einen Auftrag komplett durch den digitalen Prozess führen und Ergebnisse prüfen.",
                    },
                    {
                      num: "06",
                      title: "Schulung und Rollout",
                      desc: "Mitarbeiter in 15 Minuten schulen – die Bedienung ist bewusst einfach gehalten.",
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
                  Typische Fehler vermeiden
                </h2>
                <ul className="space-y-3">
                  {[
                    "Zu kleine QR-Codes: Mindestens 20x20mm, sonst Lesefehler bei schmutziger Optik",
                    "Falsche Etiketten: Standard-Papieretiketten lösen sich in der Galvanik ab",
                    "Keine Backup-Lösung: Wenn der QR-Code beschädigt wird, braucht es eine Ausweichlösung",
                    "Manuelle Nacherfassung zulassen: Schafft Lücken in der Rückverfolgbarkeit",
                    "Nur einen Scan pro Auftrag: Jede Station muss einen eigenen Scan erfordern",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="text-red-400 font-bold flex-shrink-0">
                        ×
                      </span>
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
                      href: "/wissen/digitaler-laufzettel",
                      label: "Digitaler Laufzettel",
                      desc: "Einführung und Vorteile",
                    },
                    {
                      href: "/wissen/chargenverfolgung",
                      label: "Chargenverfolgung",
                      desc: "Lückenlose Chargendokumentation",
                    },
                    {
                      href: "/wissen/iso-9001-galvanik",
                      label: "ISO 9001 Galvanik",
                      desc: "Normanforderungen und Umsetzung",
                    },
                    {
                      href: "/qr-code-galvanik",
                      label: "QR-Code Lösungsseite",
                      desc: "GalvanoTrack QR-Code-Verwaltung",
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
                <QrCode className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">
                  QR-Code Verfolgung mit GalvanoTrack
                </h2>
                <p className="text-zinc-400 mb-6">
                  In 30 Minuten eingerichtet. Keine Schulung erforderlich.
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
