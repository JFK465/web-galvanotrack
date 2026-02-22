import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Zap, Users, Building2, Droplets, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "Chrom Nickel Galvanik | CrNi Beschichtung Software",
  description: "GalvanoTrack - Die Software für Chrom-Nickel Galvanik. Dokumentation und Rückverfolgbarkeit für CrNi-Beschichtungen. ISO-konform.",
  keywords: ["Chrom Nickel Galvanik", "CrNi Beschichtung", "Chrom Nickel Software", "Edelstahl Galvanik", "NiCr Beschichtung"],
  openGraph: {
    title: "Chrom Nickel Galvanik | CrNi Beschichtung Software",
    description: "Die SaaS-Lösung für Chrom-Nickel Galvanik.",
  },
};

export default function ChromNickelPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEONavigation />
      <main>
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Hexagon className="w-4 h-4" />
                  CrNi Beschichtung
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Chrom-Nickel Galvanik{" "}
                <span className="text-gradient">Software</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Chrom-Nickel Beschichtungen. Dokumentieren Sie alle
                Prozessparameter und erfüllen Sie ISO-Anforderungen.
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
                  <span>ISO 9001 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>IATF 16949 ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Verfahren</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Chrom-Nickel Verfahren</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Hartchrom", description: "Verschleißfeste Chromschichten für tribologische Anwendungen." },
                { title: "Dekorchrom", description: "Dekorative Chromschichten für optische Anwendungen." },
                { title: "Glänznickel", description: "Hochglänzende Nickelschichten als Untergrund." },
                { title: "Mattnickel", description: "Mattierte Nickelschichten für spezielle Optik." },
                { title: "Chrom-Nickel", description: "Kombinationsschichten für besondere Eigenschaften." },
                { title: "Mikrochrom", description: "Dünne Chromschichten für Präzisionsbauteile." }
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
                { icon: QrCode, title: "QR-Code Verwaltung", description: "Einzigartige QR-Codes für jedes Werkstück." },
                { icon: ScanLine, title: "Scan-Interface", description: "Scannen Sie Bad-Nummern und Parameter." },
                { icon: FileText, title: "Dokumentation", description: "ISO-konforme Aufzeichnungen." },
                { icon: Shield, title: "Audit-Ready", description: "Alle Daten für Audits ready." },
                { icon: Users, title: "Mitarbeiter-Tracking", description: "Wer hat was bearbeitet?" },
                { icon: Building2, title: "Branchen-Know-how", description: "Entwickelt für Galvanik." }
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
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/elektroplattierung", label: "Elektroplattierung" },
                { href: "/zink-nickel", label: "Zink-Nickel" },
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
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Bereit für digitale Dokumentation?</h2>
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
      <SEOFooter />
    </div>
  );
}
