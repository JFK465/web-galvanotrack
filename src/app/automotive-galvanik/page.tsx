import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Zap, Users, Building2, Car, Award, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Automotive Galvanik – Software für IATF-16949-Lieferanten",
  description: "GalvanoTrack: IATF 16949 konforme Dokumentation für Automotive-Galvanik. PPAP-Unterstützung und lückenlose Rückverfolgbarkeit für OEM-Lieferanten.",
  keywords: ["Automotive Galvanik", "Automotive Lieferant Galvanik", "IATF 16949 Galvanik", "PPAP Dokumentation", "Automotive Software"],
    alternates: {
    canonical: `${siteConfig.url}/automotive-galvanik`,
  },
  openGraph: {
    title: "Automotive Galvanik | Lieferanten-Software",
    description: "Die SaaS-Lösung für Automotive-Galvanik.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Galvanik – GalvanoTrack",
    description: "IATF 16949 konforme Dokumentation für OEM-Lieferanten in der Galvanik.",
  },
};

export default function AutomotiveGalvanikPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="Automotive Galvanik – Software für IATF-16949-Lieferanten"
        description="IATF 16949 konforme Dokumentation für Automotive-Galvanik."
        url="/automotive-galvanik"
        breadcrumb={[{ name: "Automotive Galvanik", href: "/automotive-galvanik" }]}
      />
      <Navbar />
      <main>
        <div className="pt-20 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Automotive Galvanik", href: "/automotive-galvanik" }]} />
        </div>
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Car className="w-4 h-4" />
                  Automotive
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Automotive{" "}
                <span className="text-gradient">Galvanik</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Galvanik-Lieferanten in der Automobilindustrie.
                Erfüllen Sie die strengen Anforderungen von OEMs und Tier-1-Lieferanten.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg px-8">
                    Kostenlose Demo starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>IATF 16949 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>PPAP ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">OEM Anforderungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">OEM Lieferanten-Anforderungen</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "IATF 16949", description: "Qualitätsmanagementsystem für Automotive." },
                { title: "PPAP", description: "Production Part Approval Process Dokumentation." },
                { title: "VDA 6.3", description: "Prozess-Audit nach VDA Standards." },
                { title: "8D Report", description: "Problemlösungsprozess für Reklamationen." },
                { title: "FMEA", description: "Fehlermöglichkeits- und Einflussanalyse." },
                { title: "SPC", description: "Statistische Prozesskontrolle." }
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full hover:border-primary/50 transition-colors">
                  <CardHeader><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: QrCode, title: "QR-Code Rückverfolgung", description: "Jedes Werkstück ist rückverfolgbar." },
                { icon: FileCheck, title: "PPAP Dokumentation", description: "Automatische Erstellung aller PPAP-Docs." },
                { icon: FileText, title: "Bad-Dokumentation", description: "Alle Parameter werden erfasst." },
                { icon: Award, title: "Audit-Vorbereitung", description: "Mit einem Klick alle Berichte." },
                { icon: Users, title: "Mitarbeiter-Qualifikation", description: "Nachweis der Kompetenzen." },
                { icon: Shield, title: "IATF 16949 ready", description: "Alle Anforderungen erfüllt." }
              ].map((feature, index) => (
                <Card key={index} className="card-metallic h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground">{feature.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Entdecken Sie verwandte Themen</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { href: "/iatf-16949", label: "IATF 16949" },
                { href: "/iso-9001-galvanik", label: "ISO 9001" },
                { href: "/zink-nickel", label: "Zink-Nickel" },
                { href: "/batch-verfolgung", label: "Batch-Verfolgung" }
              ].map((link, index) => (
                <Link key={index} href={link.href}>
                  <Card className="card-metallic h-full hover:border-primary/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex items-center justify-between">
                      <span className="font-medium">{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-medium">Kontakt</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Bereit für Automotive-Compliance?</h2>
                <p className="text-muted-foreground mb-8">Vereinbaren Sie eine kostenlose Demo.</p>
              </div>
              <div>
                <Card className="bg-zinc-900 border-border">
                  <CardHeader><CardTitle>Demo anfragen</CardTitle></CardHeader>
                  <CardContent>
                    <Link href="/kontakt"><Button className="w-full">Kostenlose Demo starten</Button></Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
