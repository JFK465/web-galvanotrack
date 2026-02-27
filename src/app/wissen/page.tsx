import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WebPageSchema } from "@/components/seo/StructuredData";
import {
  BookOpen,
  ClipboardCheck,
  QrCode,
  Package,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wissen & Ratgeber – Galvanik & Oberflächentechnik",
  description:
    "Fachwissen zu ISO-Normen, Rückverfolgbarkeit und Digitalisierung in der Galvanik. Praktische Ratgeber für Galvanik-Betriebe.",
  alternates: {
    canonical: `${siteConfig.url}/wissen`,
  },
  openGraph: {
    title: "Wissen & Ratgeber – Galvanik & Oberflächentechnik",
    description:
      "Fachwissen zu ISO-Normen, Rückverfolgbarkeit und Digitalisierung für Galvanik-Betriebe.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/wissen`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissen & Ratgeber – Galvanik & Oberflächentechnik",
    description:
      "Fachwissen zu ISO-Normen und Digitalisierung für Galvanik-Betriebe.",
  },
};

const wissenArticles = [
  {
    slug: "iso-9001-galvanik",
    title: "ISO 9001 in der Galvanik",
    description:
      "Was Galvanik-Betriebe bei der Einführung eines Qualitätsmanagementsystems beachten müssen.",
    icon: ClipboardCheck,
    category: "Compliance",
  },
  {
    slug: "iatf-16949",
    title: "IATF 16949 für Automotive",
    description:
      "Die Anforderungen der Automobilindustrie an Galvanik-Zulieferer und wie Sie diese erfüllen.",
    icon: BookOpen,
    category: "Compliance",
  },
  {
    slug: "digitaler-laufzettel",
    title: "Digitaler Laufzettel",
    description:
      "Wie Sie mit digitalen Laufzetteln Zeit sparen und Fehler reduzieren.",
    icon: FileText,
    category: "Praxis",
  },
  {
    slug: "qr-code-verfolgung",
    title: "QR-Code Verfolgung",
    description:
      "QR-Codes effektiv für die Rückverfolgung in der Galvanik einsetzen.",
    icon: QrCode,
    category: "Technologie",
  },
  {
    slug: "chargenverfolgung",
    title: "Chargenverfolgung",
    description:
      "Lückenlose Chargendokumentation von der Vorreinigung bis zur Verpackung.",
    icon: Package,
    category: "Praxis",
  },
  {
    slug: "oberflaechenpruefung",
    title: "Oberflächenprüfung",
    description:
      "Methoden und Standards zur Prüfung von Galvanik-Beschichtungen.",
    icon: ClipboardCheck,
    category: "Qualität",
  },
  {
    slug: "galvanik-dokumentation",
    title: "Galvanik-Dokumentation",
    description:
      "Welche Dokumente in der Galvanik gefordert sind und wie Sie diese effizient erstellen.",
    icon: FileText,
    category: "Praxis",
  },
];

export default function WissenPage() {
  return (
    <>
      <WebPageSchema
        name="Wissen & Ratgeber – Galvanik & Oberflächentechnik"
        description="Fachwissen zu ISO-Normen, Rückverfolgbarkeit und Digitalisierung für Galvanik-Betriebe."
        url="/wissen"
        breadcrumb={[{ name: "Wissen", href: "/wissen" }]}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
                  Wissen & Ratgeber
                </h1>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                  Fachwissen zu ISO-Normen, Rückverfolgbarkeit und
                  Digitalisierung in der Galvanik. Praxisnahe Anleitungen für
                  Galvanik-Betriebe.
                </p>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wissenArticles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <Link
                      key={article.slug}
                      href={`/wissen/${article.slug}`}
                      className="group bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-900/30 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-blue-400 uppercase tracking-wider">
                            {article.category}
                          </span>
                          <h2 className="text-lg font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-sm text-zinc-400 mt-2">
                            {article.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
                        <span>Artikel lesen</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-16 bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-8 text-center border border-blue-800/30">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Galvanik digitalisieren
                </h2>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  Entdecken Sie, wie GalvanoTrack Ihnen hilft, Zeit zu sparen
                  und ISO-konform zu dokumentieren.
                </p>
                <Link
                  href="/demo"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Kostenlos testen →
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
