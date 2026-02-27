import type { Metadata } from "next";
import Link from "next/link";
import {
  QrCode,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Users,
  Building2,
  FileText,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Preise – GalvanoTrack Galvanik Software",
  description:
    "GalvanoTrack Preise: ab 199 €/Monat für alle Features. Keine Setup-Gebühren, monatlich kündbar. 14 Tage kostenlos testen – ohne Kreditkarte.",
  keywords: [
    "Galvanik Software Preis",
    "GalvanoTrack Preis",
    "Rückverfolgbarkeit Kosten",
    "ISO Software Galvanik",
    "Laufzettel Software Preis",
  ],
  alternates: {
    canonical: `${siteConfig.url}/preise`,
  },
  openGraph: {
    title: "Preise – GalvanoTrack Galvanik Software",
    description:
      "Ab 199 €/Monat für alle Features. Keine Setup-Gebühren, monatlich kündbar.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    url: `${siteConfig.url}/preise`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise – GalvanoTrack Galvanik Software",
    description: "Ab 199 €/Monat für alle Features. Keine Setup-Gebühren.",
  },
};

const breadcrumbs = [{ name: "Preise", href: "/preise" }];

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        name="Preise – GalvanoTrack Galvanik Software"
        description="Transparente Preise für GalvanoTrack: ab 199 €/Monat, monatlich kündbar, 14 Tage kostenlos testen."
        url="/preise"
        breadcrumb={breadcrumbs}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="mb-4 max-w-7xl mx-auto">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <CreditCard className="w-4 h-4" />
                  Transparente Preise
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Einfache,{" "}
                <span className="text-gradient">transparente Preise</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Keine versteckten Kosten. Keine Setup-Gebühren. Sie zahlen nur
                einen monatlichen Festpreis und können jederzeit kündigen.
              </p>
            </div>
          </div>
        </section>

        {/* Preise Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <Card className="card-metallic">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Für kleine Betriebe</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">199€</span>
                    <span className="text-muted-foreground">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Bis 500 Aufträge/Monat</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">QR-Code Verwaltung</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Scan-Interface</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Basis-Dokumentation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">E-Mail Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/kontakt" className="w-full">
                    <Button variant="outline" className="w-full">
                      Jetzt starten
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Pro Plan - Empfohlen */}
              <Card className="card-metallic border-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Beliebt
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pro</CardTitle>
                  <CardDescription>Für wachsende Betriebe</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">399€</span>
                    <span className="text-muted-foreground">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Unbegrenzte Aufträge</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">QR-Code Verwaltung</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Scan-Interface</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">ISO-Dokumentation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Audit-Exporte</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">E-Mail Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">API-Zugang</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/kontakt" className="w-full">
                    <Button className="w-full">Kostenlos testen</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="card-metallic">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>Für große Betriebe</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">799€</span>
                    <span className="text-muted-foreground">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Alles aus Pro</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Mehrere Standorte</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">
                        Individuelle Integrationen
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">
                        Dedizierter Account Manager
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Telefon-Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">On-Site Schulung</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/kontakt" className="w-full">
                    <Button variant="outline" className="w-full">
                      Kontaktieren
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Inklusive Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Inklusive</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Bei allen Plänen inklusive
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Schnelle Einrichtung",
                  description: "In 30 Minuten einsatzbereit.",
                },
                {
                  icon: Shield,
                  title: "ISO-konform",
                  description: "Alle Anforderungen erfüllt.",
                },
                {
                  icon: Users,
                  title: "Unbegrenzte Nutzer",
                  description: "Alle Mitarbeiter können nutzen.",
                },
                {
                  icon: Clock,
                  title: "24/7 Verfügbarkeit",
                  description: "Cloud-basiert, immer erreichbar.",
                },
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
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
                Optionale Hardware
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sie brauchen lediglich ein Smartphone. Optional bieten wir:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle>QR-Code Scanner</CardTitle>
                  <CardDescription>Für schnellere Erfassung</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">ab 89€</div>
                  <p className="text-sm text-muted-foreground">
                    Einmalig. Für professionelle Scanner.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle>Etikettendrucker</CardTitle>
                  <CardDescription>Für QR-Code Labels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">ab 199€</div>
                  <p className="text-sm text-muted-foreground">
                    Einmalig. Thermo-Transfer Drucker.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Häufig gestellte Fragen
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Gibt es eine Mindestvertragslaufzeit?",
                  answer:
                    "Nein. Sie können monatlich kündigen. Wir empfehlen jedoch eine Nutzung von mindestens 6 Monaten, um alle Vorteile zu nutzen.",
                },
                {
                  question: "Was ist in der kostenlosen Testphase enthalten?",
                  answer:
                    "Sie erhalten vollen Zugriff auf alle Features für 14 Tage. Keine Kreditkarte erforderlich.",
                },
                {
                  question: "Können mehrere Standorte einen Account nutzen?",
                  answer:
                    "Ja, im Enterprise Plan. Im Pro Plan können Sie mehrere Standorte mit separaten Accounts verwalten.",
                },
                {
                  question: "Welche Zahlungsmethoden werden akzeptiert?",
                  answer:
                    "Wir akzeptieren Überweisung und auf Anfrage auch Lastschrift.",
                },
              ].map((faq, index) => (
                <Card key={index} className="card-metallic">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                { href: "/galvanik", label: "Galvanik Software" },
                {
                  href: "/digitaler-laufzettel",
                  label: "Digitaler Laufzettel",
                },
                { href: "/iso-9001-galvanik", label: "ISO 9001 Galvanik" },
                { href: "/kontakt", label: "Kontakt" },
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
                  Noch Fragen?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Kontaktieren Sie uns für eine individuelle Beratung.
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
                    <CardTitle>Kontaktieren Sie uns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href="/kontakt">
                      <Button className="w-full size-lg">
                        Kontaktseite besuchen
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
