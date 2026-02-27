import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Clock, Zap, Users, Building2, Search, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "ISO Rückverfolgbarkeit – Konforme Dokumentation für Galvanik",
  description: "GalvanoTrack: ISO-konforme Rückverfolgbarkeit in der Galvanik. Lückenlose Chargen-Nachverfolgung und Audit-Vorbereitung nach ISO 9001 & IATF 16949.",
  keywords: ["ISO Rückverfolgbarkeit", "Rückverfolgbarkeit Galvanik", "ISO 9001 Rückverfolgbarkeit", "Chargenrückverfolgung", "Dokumentationspflichten Galvanik"],
    alternates: {
    canonical: `${siteConfig.url}/iso-ruckverfolgbarkeit`,
  },
  openGraph: {
    title: "ISO Rückverfolgbarkeit | Konforme Dokumentation",
    description: "Die SaaS-Lösung für ISO-konforme Rückverfolgbarkeit.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO Rückverfolgbarkeit – GalvanoTrack",
    description: "ISO-konforme Rückverfolgbarkeit und Chargen-Dokumentation für Galvanik.",
  },
};

export default function ISORueckverfolgbarkeitPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="ISO Rückverfolgbarkeit – Konforme Dokumentation für Galvanik"
        description="ISO-konforme Rückverfolgbarkeit für Galvanik-Betriebe: Chargen-Nachverfolgung."
        url="/iso-ruckverfolgbarkeit"
        breadcrumb={[{ name: "ISO Rückverfolgbarkeit", href: "/iso-ruckverfolgbarkeit" }]}
      />
      <Navbar />
      <main>
        <div className="pt-20 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "ISO Rueckverfolgbarkeit", href: "/iso-ruckverfolgbarkeit" }]} />
        </div>
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Search className="w-4 h-4" />
                  ISO Konform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                ISO{" "}
                <span className="text-gradient">Rückverfolgbarkeit</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für ISO-konforme Rückverfolgbarkeit in der Galvanik.
                Dokumentieren Sie alle Prozesse und erfüllen Sie die Dokumentationspflichten.
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
              <span className="text-primary font-medium">ISO Anforderungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Was fordert die ISO?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Lückenlose Dokumentation", description: "Jeder Prozessschritt muss dokumentiert werden." },
                { title: "Chargen-Rückverfolgung", description: "Von Rohstoff bis Endprodukt rückverfolgbar." },
                { title: "Revisionssicherheit", description: "Daten müssen unveränderbar gespeichert werden." },
                { title: "Zeitnahe Erfassung", description: "Dokumentation in Echtzeit, nicht nachträglich." },
                { title: "Nachvollziehbarkeit", description: "Wer hat wann was gemacht?" },
                { title: "Audit-Trail", description: "Alle Änderungen müssen nachvollziehbar sein." }
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
                { icon: QrCode, title: "QR-Code Rückverfolgung", description: "Jedes Werkstück ist jederzeit rückverfolgbar." },
                { icon: Database, title: "Revisionssichere Daten", description: "Alle Daten werden unveränderbar gespeichert." },
                { icon: Clock, title: "Echtzeit-Erfassung", description: "Dokumentation in Echtzeit." },
                { icon: Users, title: "Mitarbeiter-Tracking", description: "Wer hat welche Bearbeitung durchgeführt?" },
                { icon: ScanLine, title: "Bad-Protokolle", description: "Alle Parameter werden automatisch erfasst." },
                { icon: Shield, title: "Audit-Exporte", description: "Mit einem Klick alle Berichte." }
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
                { href: "/iso-9001-galvanik", label: "ISO 9001 Galvanik" },
                { href: "/iatf-16949", label: "IATF 16949" },
                { href: "/batch-verfolgung", label: "Batch-Verfolgung" },
                { href: "/digitaler-laufzettel", label: "Digitaler Laufzettel" }
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
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Bereit für ISO-konforme Rückverfolgbarkeit?</h2>
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
