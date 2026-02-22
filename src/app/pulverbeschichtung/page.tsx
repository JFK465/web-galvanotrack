import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Zap, Users, Building2, Palette, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "Pulverbeschichtung Software | Digitale Lösung für Beschichtungsbetriebe",
  description: "GalvanoTrack - Die Software für Pulverbeschichtung. QR-Code Verwaltung, Dokumentation und Rückverfolgbarkeit für Pulverbeschichtungs-Betriebe.",
  keywords: ["Pulverbeschichtung Software", "Pulverbeschichtung Digitalisierung", "Pulverbeschichtung Dokumentation", "Lackiererei Software", "Beschichtung Software"],
  openGraph: {
    title: "Pulverbeschichtung Software | Digitale Lösung",
    description: "Die SaaS-Lösung für Pulverbeschichtung.",
  },
};

export default function PulverbeschichtungPage() {
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
                  <PaintBucket className="w-4 h-4" />
                  Pulverbeschichtung
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Pulverbeschichtung{" "}
                <span className="text-gradient">Software</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Pulverbeschichtungs-Betriebe. Dokumentieren Sie alle
                Prozessparameter und Farb-Chargen für ISO-Konformität.
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
                  <span>Chargen-Rückverfolgung</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Anwendungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Pulverbeschichtung Anwendungen</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Architektur", description: "Fenster, Türen, Fassadenelemente aus Aluminium." },
                { title: "Möbelindustrie", description: "Büromöbel, Stühle, Tische, Schränke." },
                { title: "Automotive", description: "Felgen, Anbauteile, Motorräder." },
                { title: "Gartenbau", description: "Gartenmöbel, Zäune, Tore." },
                { title: "Maschinenbau", description: "Gehäuse, Gestelle, Rahmen." },
                { title: "Elektroindustrie", description: "Schaltschränke, Verteilergehäuse." }
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
                { icon: ScanLine, title: "Scan-Interface", description: "Scannen Sie Farb-Chargen und Stationen." },
                { icon: FileText, title: "Dokumentation", description: "ISO-konforme Aufzeichnungen." },
                { icon: Palette, title: "Farb-Verwaltung", description: "Verwalten Sie Pulver-Chargen und Farben." },
                { icon: Shield, title: "Audit-Ready", description: "Alle Daten für Audits ready." },
                { icon: Building2, title: "Branchen-Know-how", description: "Entwickelt für Beschichtung." }
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
                { href: "/oberflaechenveredlung", label: "Oberflächenveredlung" },
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/iso-9001-galvanik", label: "ISO 9001" },
                { href: "/preise", label: "Preise" }
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
