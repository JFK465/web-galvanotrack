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
  Building2,
  Printer,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "QR-Code Galvanik – Digitale Rückverfolgung mit QR-Codes",
  description:
    "GalvanoTrack - QR-Code Lösung für Galvanik-Betriebe. Jedes Werkstück erhält einen einzigartigen QR-Code für lückenlose Rückverfolgbarkeit.",
  keywords: [
    "QR-Code Galvanik",
    "QR-Code Rückverfolgung",
    "QR-Code Beschichtung",
    "QR-Code Etikett",
    "Barcode Galvanik",
  ],
    alternates: {
    canonical: `${siteConfig.url}/qr-code-galvanik`,
  },
  openGraph: {
    title: "QR-Code Galvanik | Digitale Rückverfolgung",
    description:
      "QR-Code Lösung für Galvanik. Jedes Werkstück erhält einen einzigartigen QR-Code.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR-Code Galvanik – GalvanoTrack",
    description: "QR-Code-basierte Auftragsverfolgung für Galvanik-Betriebe.",
  },
};

export default function QRCodGalvanikPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="QR-Code Galvanik – Digitale Rückverfolgung mit QR-Codes"
        description="QR-Code-Lösung für Galvanik-Betriebe: Lückenlose Rückverfolgbarkeit."
        url="/qr-code-galvanik"
        breadcrumb={[{ name: "QR-Code Galvanik", href: "/qr-code-galvanik" }]}
      />
      <Navbar />
      <main>
        <div className="pt-20 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "QR-Code Galvanik", href: "/qr-code-galvanik" }]}
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
                  <QrCode className="w-4 h-4" />
                  QR-Code Lösung
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                QR-Code für{" "}
                <span className="text-gradient">Galvanik-Betriebe</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Jedes Werkstück erhält einen einzigartigen QR-Code. Einfach
                scannen und alle Prozessdaten sind sofort verfügbar. Die moderne
                Lösung für Rückverfolgbarkeit in der Galvanik.
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
                  <span>Einzigartige Codes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Bulk-Druck</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>14 Tage kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wie es funktioniert Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">
                So funktioniert&apos;s
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                QR-Code basierte Rückverfolgung
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "QR-Code generieren",
                  description:
                    "Für jeden Auftrag werden einzigartige QR-Codes erstellt.",
                },
                {
                  number: "02",
                  title: "Drucken",
                  description:
                    "QR-Codes auf Etiketten drucken oder direkt auf Werkstücke.",
                },
                {
                  number: "03",
                  title: "Scannen",
                  description:
                    "An jeder Station den QR-Code scannen mit dem Smartphone.",
                },
                {
                  number: "04",
                  title: "Dokumentieren",
                  description:
                    "Alle Daten werden automatisch erfasst und gespeichert.",
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

        {/* Vorteile Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Vorteile</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Warum QR-Codes für Galvanik?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ScanLine,
                  title: "Schnelle Erfassung",
                  description:
                    "In Millisekunden sind alle Daten erfasst. Keine manuellen Eingaben mehr.",
                },
                {
                  icon: Shield,
                  title: "Fehlervermeidung",
                  description:
                    "Keine Tippfehler mehr. Der Code enthält alle wichtigen Informationen.",
                },
                {
                  icon: Clock,
                  title: "Zeitersparnis",
                  description:
                    "Sekundenschnelle Datenerfassung statt minutenlanger manueller Einträge.",
                },
                {
                  icon: FileText,
                  title: "Lückenlose Dokumentation",
                  description:
                    "Jeder Prozessschritt wird automatisch protokolliert.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Nutzung",
                  description:
                    "Funktioniert mit jedem Smartphone oder Tablet. Keine spezielle Hardware nötig.",
                },
                {
                  icon: Printer,
                  title: "Flexible Etiketten",
                  description:
                    "Verschiedene Etikettenformate für jede Anforderung.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="card-metallic h-full hover:border-primary/50 transition-colors"
                >
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

        {/* Hardware Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Hardware</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Welche Hardware wird benötigt?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                GalvanoTrack funktioniert mit handelsüblicher Hardware.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Smartphone/Tablet",
                  description:
                    "Die Kamera Ihres Smartphones reicht zum Scannen. Optional: RFID-Scanner für noch schnellere Erfassung.",
                },
                {
                  icon: Printer,
                  title: "Etikettendrucker",
                  description:
                    "Standard-Etikettendrucker für QR-Code Etiketten. Wir empfehlen: Zebra, Brother oder Dymo.",
                },
                {
                  icon: QrCode,
                  title: "QR-Code Labels",
                  description:
                    "Wetterfeste Labels für den rauen Galvanik-Alltag. Verschiedene Größen und Materialien.",
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

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Bereits ab 89€ für Scanner und 199€ für Etikettendrucker
              </p>
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
                {
                  href: "/digitaler-laufzettel",
                  label: "Digitaler Laufzettel",
                },
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/iso-9001-galvanik", label: "ISO 9001 Galvanik" },
                { href: "/preise", label: "Preise" },
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
                  Bereit für QR-Code Rückverfolgung?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen, wie
                  einfach QR-Code basierte Rückverfolgung funktioniert.
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
