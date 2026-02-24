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
  Truck,
  Users,
  Building2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Galvanik Software | Digitale Lösung für Galvanik-Betriebe",
  description:
    "Die führende Galvanik Software für Rückverfolgbarkeit, QR-Code Verwaltung und ISO-konforme Dokumentation. Optimiert für Galvanik-Betriebe jeder Größe.",
  keywords: [
    "Galvanik Software",
    "Galvanik Betrieb",
    "Galvanik Digitalisierung",
    "Galvanik Rückverfolgbarkeit",
    "Oberflächentechnik Software",
  ],
  alternates: {
    canonical: `${siteConfig.url}/galvanik`,
  },
  openGraph: {
    title: "Galvanik Software | Digitale Lösung für Galvanik-Betriebe",
    description:
      "Die SaaS-Lösung für lückenlose Rückverfolgbarkeit in der Galvanik. QR-Code basierte Auftragsverfolgung, ISO-konforme Dokumentation.",
    url: `${siteConfig.url}/galvanik`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Galvanik Software | Digitale Lösung",
    description:
      "Die führende Galvanik Software für Rückverfolgbarkeit und ISO-konforme Dokumentation.",
  },
};

export default function GalvanikPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEONavigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Branchenlösung für Galvanik
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Galvanik Software für{" "}
                <span className="text-gradient">
                  lückenlose Rückverfolgbarkeit
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für Galvanik-Betriebe. QR-Code basierte
                Auftragsverfolgung, ISO-konforme Dokumentation und
                Automotive-Compliance – ohne teures ERP.
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
                  <span>ISO 9001 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>IATF 16949 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>14 Tage kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Probleme Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">
                Die Herausforderung
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Probleme in Galvanik-Betrieben
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Galvanik-Betriebe stehen vor großen Herausforderungen bei der
                Digitalisierung.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Papier-Laufzettel",
                  description:
                    "Manuelle Zettelwirtschaft führt zu Fehlern, Unleserlichkeit und verlorenen Aufträgen.",
                },
                {
                  icon: Shield,
                  title: "Fehlende Rückverfolgbarkeit",
                  description:
                    "Ohne lückenlose Dokumentation sind Sie bei Audits schutzlos. ISO-Anforderungen nicht erfüllbar.",
                },
                {
                  icon: Clock,
                  title: "Zeitintensive Nachverfolgung",
                  description:
                    "Wo ist welcher Auftrag? Welche Batch-Nummer wurde verwendet? Stunden an Suchzeit täglich.",
                },
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-destructive" />
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

        {/* Lösung Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Die Lösung</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Galvanik Software von GalvanoTrack
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Digitalisieren Sie Ihre Galvanik-Prozesse in 4 einfachen
                Schritten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Auftrag anlegen",
                  description:
                    "Erstellen Sie Aufträge schnell per Handy oder Tablet.",
                },
                {
                  number: "02",
                  title: "QR-Code drucken",
                  description:
                    "Jedem Werkstück wird ein einzigartiger QR-Code zugewiesen.",
                },
                {
                  number: "03",
                  title: "Scannen & Dokumentieren",
                  description:
                    "Badzusammensetzung, Zeiten, Mitarbeiter – alles automatisch.",
                },
                {
                  number: "04",
                  title: "Rückverfolgen",
                  description:
                    "Mit einem Klick die komplette Historie für Audits und Reklamationen.",
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
                Was unsere Galvanik Software bietet
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: QrCode,
                  title: "QR-Code Verwaltung",
                  description:
                    "Einzigartige QR-Codes für jedes Werkstück. Bulk-Druck, individuelle Labels.",
                },
                {
                  icon: ScanLine,
                  title: "Scan-Interface",
                  description:
                    "Optimiert für mobile Geräte. Scannen Sie Bad-Nummern, Chargen und Stationen.",
                },
                {
                  icon: FileText,
                  title: "ISO-Dokumentation",
                  description:
                    "ISO-konforme Aufzeichnungen. Badzusammensetzung, Temperatur, Zeiten.",
                },
                {
                  icon: Truck,
                  title: "Lieferanten-Verfolgung",
                  description:
                    "Verfolgen Sie Werkstücke vom Eingang bis zum Versand.",
                },
                {
                  icon: Users,
                  title: "Mitarbeiter-Tracking",
                  description:
                    "Wer hat welche Bearbeitung durchgeführt? Dokumentation für Audits.",
                },
                {
                  icon: Shield,
                  title: "Audit-Ready",
                  description:
                    "Alle Daten für IATF 16949, ISO 9001 ready. Exportieren Sie Berichte.",
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

        {/* Vorteile Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-medium">
                  Warum GalvanoTrack
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Die beste Galvanik Software?
                </h2>
                <p className="text-muted-foreground mb-8">
                  ERP-Systeme sind oft überdimensioniert und teuer. GalvanoTrack
                  ist:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Zap,
                      title: "Einfach & Schnell",
                      description:
                        "Kein kompliziertes ERP. In 30 Minuten eingerichtet. Intuitiv.",
                    },
                    {
                      icon: Shield,
                      title: "ISO-konform",
                      description:
                        "Alle Anforderungen für ISO 9001 und IATF 16949 erfüllt.",
                    },
                    {
                      icon: Building2,
                      title: "Branchen-Know-how",
                      description:
                        "Entwickelt von Experten für die Galvanik-Branche.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                <Card className="relative bg-zinc-900 border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Im Vergleich</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <h4 className="font-semibold text-green-500 mb-2">
                          GalvanoTrack
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                            399€/Monat
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                            30 Min. Einrichtung
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                            ISO-konform
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                            Mobile-first
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-muted border border-border">
                        <h4 className="font-semibold text-muted-foreground mb-2">
                          Klassisches ERP
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <span className="text-destructive">×</span> 50.000€+
                            Einstieg
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-destructive">×</span> Monate
                            Implementierung
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-destructive">×</span>{" "}
                            Konfiguration nötig
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-destructive">×</span>{" "}
                            Wochenschulungen
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Interne Verlinkung Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Entdecken Sie verwandte Themen
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  href: "/lohnbeschichtung",
                  label: "Lohnbeschichtung Software",
                },
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
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-medium">Kontakt</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Bereit für digitale Rückverfolgbarkeit?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen
                  GalvanoTrack in einem 30-minütigen Live-Termin.
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
      <SEOFooter />
    </div>
  );
}
