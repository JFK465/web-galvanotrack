import type { Metadata } from "next";
import Link from "next/link";
import {
  QrCode,
  ScanLine,
  FileText,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Users,
  Truck,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Lohnbeschichtung Software | Digitale Lösung für Lohnbeschichter",
  description:
    "Die Software für Lohnbeschichtung. QR-Code Verwaltung, ISO-konforme Dokumentation und Rückverfolgbarkeit für Lohnbeschichter. 14 Tage kostenlos testen.",
  keywords: [
    "Lohnbeschichtung Software",
    "Lohnbeschichter",
    "Lohnbeschichtung Digitalisierung",
    "Galvanik Lohnfertiger",
    "Lohnbeschichtung Rückverfolgbarkeit",
  ],
  alternates: {
    canonical: `${siteConfig.url}/lohnbeschichtung`,
  },
  openGraph: {
    title: "Lohnbeschichtung Software | Digitale Lösung für Lohnbeschichter",
    description:
      "Die SaaS-Lösung für Lohnbeschichter. QR-Code basierte Auftragsverfolgung, ISO-konforme Dokumentation.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/lohnbeschichtung`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lohnbeschichtung Software | Digitale Lösung",
    description:
      "Die Software für Lohnbeschichtung mit QR-Code Verwaltung und ISO-konformer Dokumentation.",
  },
};

export default function LohnbesichtungPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="Lohnbeschichtung Software – Digitale Lösung für Lohnbeschichter"
        description="Die Software für Lohnbeschichter mit ISO-konformer Dokumentation."
        url="/lohnbeschichtung"
        breadcrumb={[{ name: "Lohnbeschichtung", href: "/lohnbeschichtung" }]}
      />
      <Navbar />
      <main>
        <div className="pt-20 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Lohnbeschichtung", href: "/lohnbeschichtung" }]}
          />
        </div>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Speziell für Lohnbeschichter
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Lohnbeschichtung Software für{" "}
                <span className="text-gradient">
                  ISO-konforme Dokumentation
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Lohnbeschichter. Erfüllen Sie die
                strengen Anforderungen Ihrer Kunden mit lückenloser
                Rückverfolgbarkeit und ISO-konformer Dokumentation.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg px-8">
                    Kostenlose Demo starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Alle Features entdecken
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Kunden-Dokumentation</span>
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

        {/* Vorteile Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Vorteile</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Warum Lohnbeschichter GalvanoTrack nutzen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Erfüllen Sie die hohen Anforderungen Ihrer Kunden aus Automotive
                und Industrie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Kundendokumentation",
                  description:
                    "Erstellen Sie automatisch alle erforderlichen Dokumentationen für Ihre Kunden. Chargen-Nachweise, Badprotokolle, Analysen.",
                },
                {
                  icon: Shield,
                  title: "Audit-Sicher",
                  description:
                    "Alle Daten für ISO 9001 und IATF 16949 Audits ready. Keine Nacharbeiten mehr vor Kundenaudits.",
                },
                {
                  icon: Clock,
                  title: "Zeitersparnis",
                  description:
                    "Keine manuellen Listen mehr. Alle Daten werden automatisch erfasst und sind jederzeit abrufbar.",
                },
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
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

        {/* Prozess Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">
                So funktioniert&apos;s
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Digitaler Workflow für Lohnbeschichtung
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Auftrag erfassen",
                  description:
                    "Kundendaten, Anforderungen und Spezifikationen digital erfassen.",
                },
                {
                  number: "02",
                  title: "Werkstücke kennzeichnen",
                  description:
                    "QR-Codes für jede Charge oder jedes Werkstück generieren.",
                },
                {
                  number: "03",
                  title: "Prozess dokumentieren",
                  description:
                    "Alle Parameter automatisch erfassen: Bad, Zeit, Temperatur, Mitarbeiter.",
                },
                {
                  number: "04",
                  title: "Dokumentation erstellen",
                  description: "Mit einem Klick alle Kunden-Docs exportieren.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden lg:block absolute -right-3 top-8 text-primary/30 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Features</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Was Lohnbeschichter benötigen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: QrCode,
                  title: "QR-Code Verwaltung",
                  description:
                    "Einzigartige QR-Codes für jede Charge. Bulk-Druck, individuelle Labels.",
                },
                {
                  icon: ScanLine,
                  title: "Scan-Interface",
                  description:
                    "Scannen Sie Bad-Nummern, Chargen und Stationen in Echtzeit.",
                },
                {
                  icon: FileText,
                  title: "Kundendokumente",
                  description:
                    "Automatische Erstellung von Chargenprotokollen und Analysenberichten.",
                },
                {
                  icon: Truck,
                  title: "Lieferanten-Verfolgung",
                  description:
                    "Verfolgen Sie Werkstücke vom Eingang bis zum Versand.",
                },
                {
                  icon: Users,
                  title: "Mitarbeiter-Doku",
                  description: "Wer hat welche Bearbeitung durchgeführt?",
                },
                {
                  icon: Shield,
                  title: "Audit-Ready",
                  description: "Alle Daten für ISO 9001 und IATF 16949 ready.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="card-metallic h-full hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interne Verlinkung Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Entdecken Sie verwandte Themen
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { href: "/galvanik", label: "Galvanik Software" },
                {
                  href: "/oberflaechenveredlung",
                  label: "Oberflächenveredlung",
                },
                { href: "/iso-9001-galvanik", label: "ISO 9001 Galvanik" },
                {
                  href: "/digitaler-laufzettel",
                  label: "Digitaler Laufzettel",
                },
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

        {/* CTA Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-medium">Kontakt</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Bereit für ISO-konforme Dokumentation?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen
                  GalvanoTrack speziell für Lohnbeschichtung.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Kostenlose Demo</p>
                      <p className="text-sm text-muted-foreground">
                        30 Minuten Live-Präsentation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">14 Tage kostenlos testen</p>
                      <p className="text-sm text-muted-foreground">
                        Voller Funktionsumfang
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="bg-zinc-900 border-border">
                  <CardHeader>
                    <CardTitle>Demo anfragen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href="/kontakt">
                      <Button className="w-full size-lg">
                        Kostenlose Demo starten
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
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
