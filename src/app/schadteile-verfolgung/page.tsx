import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, AlertTriangle, Users, Building2, Search, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Schadteile-Rückverfolgung – Reklamations-Management Galvanik",
  description: "GalvanoTrack: Schadteile-Rückverfolgung für Galvanik-Betriebe. Reklamations-Management, 8D-Reports und Ursachenanalyse – IATF 16949 konform.",
  keywords: ["Schadteile Rückverfolgung", "Reklamations-Management", "8D Report Galvanik", " Reklamation Galvanik", "Schaden Rückverfolgung"],
    alternates: {
    canonical: `${siteConfig.url}/schadteile-verfolgung`,
  },
  openGraph: {
    title: "Schadteile Rückverfolgung | Reklamations-Management",
    description: "Die SaaS-Lösung für Schadteile-Rückverfolgung.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schadteile-Rückverfolgung – GalvanoTrack",
    description: "Reklamations-Management und Schadteile-Rückverfolgung für Galvanik.",
  },
};

export default function SchadteileVerfolgungPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="Schadteile-Rückverfolgung – Reklamations-Management Galvanik"
        description="Schadteile-Rückverfolgung für Galvanik-Betriebe: 8D-Reports und Ursachenanalyse."
        url="/schadteile-verfolgung"
        breadcrumb={[{ name: "Schadteile-Verfolgung", href: "/schadteile-verfolgung" }]}
      />
      <Navbar />
      <main>
        <div className="pt-20 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Schadteile-Verfolgung", href: "/schadteile-verfolgung" }]} />
        </div>
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <AlertTriangle className="w-4 h-4" />
                  Reklamations-Management
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Schadteile{" "}
                <span className="text-gradient">Rückverfolgung</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Schadteile-Rückverfolgung in der Galvanik.
                Schnell Ursachen finden und 8D-Reports erstellen.
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
                  <span>8D Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Ursachenanalyse</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Prozess</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Reklamations-Workflow</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "1. Erfassung", description: "Schaden wird erfasst mit Bild, Beschreibung und Charge." },
                { title: "2. Analyse", description: "Ursache wird durch QR-Code Rückverfolgung ermittelt." },
                { title: "3. Maßnahmen", description: "Korrekturmaßnahmen werden definiert und umgesetzt." },
                { title: "4. 8D Report", description: "Automatische Erstellung des 8D-Reports." },
                { title: "5. Wirksamkeit", description: "Überprüfung der Maßnahmen wird dokumentiert." },
                { title: "6. Prävention", description: "Maßnahmen zur Vermeidung werden implementiert." }
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
                { icon: QrCode, title: "QR-Code Rückverfolgung", description: "Schnell die Ursache finden." },
                { icon: Search, title: "Ursachenanalyse", description: "Welche Charge, welches Bad, wer?" },
                { icon: FileText, title: "8D Reports", description: "Automatische Erstellung." },
                { icon: Activity, title: "Statistiken", description: "Reklamationsquoten überwachen." },
                { icon: Users, title: "Eskalations-Management", description: "Automatische Benachrichtigungen." },
                { icon: Shield, title: "Audit-Ready", description: "Alle Maßnahmen dokumentiert." }
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
                { href: "/batch-verfolgung", label: "Batch-Verfolgung" },
                { href: "/iso-ruckverfolgbarkeit", label: "ISO Rückverfolgbarkeit" },
                { href: "/automotive-galvanik", label: "Automotive Galvanik" },
                { href: "/galvanik", label: "Galvanik Software" }
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
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Bereit für besseres Reklamations-Management?</h2>
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
