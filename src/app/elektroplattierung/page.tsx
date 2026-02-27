import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Clock, Zap, Users, Building2, Droplets, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Elektroplattierung Software – Digitale Lösung für Galvanik",
  description: "GalvanoTrack: Software für Elektroplattierung. QR-Code-Verwaltung, ISO-konforme Dokumentation und lückenlose Rückverfolgbarkeit für Galvanik-Betriebe.",
  keywords: ["Elektroplattierung Software", "Galvanik Software", "Elektrochemische Beschichtung", "Galvanik Digitalisierung", "Galvanik Rückverfolgbarkeit"],
    alternates: {
    canonical: `${siteConfig.url}/elektroplattierung`,
  },
  openGraph: {
    title: "Elektroplattierung Software | Digitale Lösung für Galvanik",
    description: "Die SaaS-Lösung für Elektroplattierung. QR-Code basierte Auftragsverfolgung.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elektroplattierung Software – GalvanoTrack",
    description: "Digitale Lösung für Elektroplattierung mit ISO-konformer Dokumentation.",
  },
};

export default function ElektroplattierungPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="Elektroplattierung Software – Digitale Lösung für Galvanik"
        description="Software für Elektroplattierung: QR-Code-Auftragsverfolgung, ISO-konform."
        url="/elektroplattierung"
        breadcrumb={[{ name: "Elektroplattierung", href: "/elektroplattierung" }]}
      />
      <Navbar />
      <main>
        <div className="pt-20 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Elektroplattierung", href: "/elektroplattierung" }]} />
        </div>
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Droplets className="w-4 h-4" />
                  Elektroplattierung
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Elektroplattierung Software für{" "}
                <span className="text-gradient">lückenlose Rückverfolgbarkeit</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Elektroplattierung. QR-Code basierte Auftragsverfolgung,
                ISO-konforme Dokumentation und Automotive-Compliance.
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
                  <span>Alle Verfahren</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>ISO 9001 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>14 Tage kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Unterstützte Verfahren</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Für alle Elektroplattierungs-Verfahren
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Verzinken", description: "Elektrolytische Verzinkung für Korrosionsschutz." },
                { title: "Vernickeln", description: "Hartnickel und Glänznickel für Verschleißschutz." },
                { title: "Verchromen", description: "Hartchrom und Dekorchrom für Optik und Schutz." },
                { title: "Kupfer", description: "Kupferunterlagen für bessere Haftung." },
                { title: "Zinn", description: "Zinnbeschichtung für Lötfähigkeit." },
                { title: "Edelmetalle", description: "Gold, Silber, Palladium für Elektronik." }
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Features</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Was unsere Software bietet
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: QrCode, title: "QR-Code Verwaltung", description: "Einzigartige QR-Codes für jedes Werkstück." },
                { icon: ScanLine, title: "Scan-Interface", description: "Scannen Sie Bad-Nummern und Stationen." },
                { icon: FileText, title: "Bad-Dokumentation", description: "Alle Parameter automatisch erfasst." },
                { icon: Settings, title: "Prozess-Steuerung", description: "Bad-Zusammensetzung, Temperatur, Zeit." },
                { icon: Users, title: "Mitarbeiter-Tracking", description: "Wer hat welche Bearbeitung durchgeführt?" },
                { icon: Shield, title: "Audit-Ready", description: "ISO 9001 und IATF 16949 ready." }
              ].map((feature, index) => (
                <Card key={index} className="card-metallic h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
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
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/zink-nickel", label: "Zink-Nickel" },
                { href: "/chrom-nickel", label: "Chrom-Nickel" },
                { href: "/iso-9001-galvanik", label: "ISO 9001" }
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
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Bereit für digitale Rückverfolgbarkeit?</h2>
                <p className="text-muted-foreground mb-8">Vereinbaren Sie eine kostenlose Demo.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Kostenlose Demo</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>14 Tage kostenlos testen</span>
                  </div>
                </div>
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
