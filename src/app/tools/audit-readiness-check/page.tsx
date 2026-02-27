import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { AuditCheckTool } from "./AuditCheckTool";

export const metadata: Metadata = {
  title: "IATF-Audit-Readiness-Check – Ist Ihre Galvanik audit-bereit?",
  description:
    "Kostenloser Online-Check: Ist Ihre Galvanik für ein ISO 9001 oder IATF 16949 Audit vorbereitet? 22 praxisnahe Fragen, sofortige Auswertung und konkrete Handlungsempfehlungen.",
  alternates: {
    canonical: `${siteConfig.url}/tools/audit-readiness-check`,
  },
  openGraph: {
    title: "IATF-Audit-Readiness-Check für Galvanik-Betriebe",
    description:
      "Kostenloser Check: Wie audit-bereit ist Ihre Galvanik? Sofortige Auswertung und Handlungsempfehlungen.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/tools/audit-readiness-check`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit-Readiness-Check Galvanik",
    description:
      "22 Fragen, sofortige Auswertung – Ist Ihre Galvanik ISO/IATF-audit-bereit?",
  },
};

const breadcrumbs = [
  { name: "Tools", href: "/tools/audit-readiness-check" },
  {
    name: "Audit-Readiness-Check",
    href: "/tools/audit-readiness-check",
  },
];

export default function AuditReadinessCheckPage() {
  return (
    <>
      <WebPageSchema
        name="IATF-Audit-Readiness-Check für Galvanik-Betriebe"
        description="Kostenloser Check: Wie audit-bereit ist Ihre Galvanik? 22 Fragen, sofortige Auswertung."
        url="/tools/audit-readiness-check"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-zinc-950">
        <div className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            <div className="mb-10 text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 mb-4">
                Kostenloser Check
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                IATF-Audit-Readiness-Check
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Beantworten Sie 22 praxisnahe Fragen zu Ihrer
                Qualitätsdokumentation und erhalten Sie sofort eine
                Einschätzung, wie gut Ihre Galvanik auf ein ISO 9001 oder IATF
                16949 Audit vorbereitet ist.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  22 Praxisfragen
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Sofortige Auswertung
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Handlungsempfehlungen
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  Kritische Lücken identifizieren
                </span>
              </div>
            </div>

            <AuditCheckTool />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
