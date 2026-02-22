import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, CheckCircle2, ArrowRight, Zap, Clock, Video, Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "Demo | GalvanoTrack - Kostenlose Live-Demo",
  description: "Vereinbaren Sie eine kostenlose Live-Demo von GalvanoTrack. 30 Minuten persönliche Präsentation unserer Galvanik Software.",
  keywords: ["Demo GalvanoTrack", "Live Demo Galvanik Software", "GalvanoTrack Vorführung", "Software Demo Rückverfolgbarkeit"],
  openGraph: {
    title: "Demo | GalvanoTrack - Kostenlose Live-Demo",
    description: "Kostenlose Live-Demo unserer Galvanik Software.",
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEONavigation />
      <main>
        <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Video className="w-4 h-4" />
                  Live Demo
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Kostenlose{" "}
                <span className="text-gradient">Live-Demo</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Erleben Sie GalvanoTrack in einer persönlichen 30-minütigen Live-Demo.
                Wir zeigen Ihnen, wie unsere Software Ihre Galvanik-Prozesse optimiert.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Card className="bg-zinc-900 border-border">
                  <CardHeader>
                    <CardTitle>Demo-Termin vereinbaren</CardTitle>
                    <CardDescription>
                      Wählen Sie einen Termin, der für Sie passt.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Vorname</Label>
                          <Input id="firstName" placeholder="Max" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nachname</Label>
                          <Input id="lastName" placeholder="Mustermann" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail</Label>
                        <Input id="email" type="email" placeholder="max@mustermann.de" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" type="tel" placeholder="+49 123 456789" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Firma</Label>
                        <Input id="company" placeholder="Ihre Galvanik GmbH" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Wünsche für die Demo</Label>
                        <Textarea
                          id="message"
                          placeholder="Was möchten Sie besonders sehen?"
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full size-lg">
                        Termin anfragen
                        <Calendar className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">So läuft die Demo ab</h2>
                  <div className="space-y-4">
                    {[
                      { icon: Clock, title: "30 Minuten", description: "Persönlicher Termin nach Wahl" },
                      { icon: Play, title: "Live-Präsentation", description: "Wir zeigen Ihnen alle Features" },
                      { icon: Zap, title: "Individuell", description: " zugeschnitten auf Ihre Anforderungen" },
                      { icon: CheckCircle2, title: "Unverbindlich", description: "Keine Verpflichtung" }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">Was Sie in der Demo sehen</h3>
                  <ul className="space-y-2">
                    {[
                      "QR-Code Verwaltung",
                      "Scan-Interface",
                      "Dokumentationsfunktionen",
                      "Audit-Exporte",
                      "Preise und Pakete"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Alternativ</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Selbst ausprobieren
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sie können GalvanoTrack auch 14 Tage lang kostenlos und unverbindlich testen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="card-metallic">
                <CardHeader>
                  <Video className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Live-Demo</CardTitle>
                  <CardDescription>30 Minuten persönliche Präsentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Persönlich
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Fragen stellen
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Individuell
                    </li>
                  </ul>
                  <Link href="/kontakt">
                    <Button className="w-full">Termin vereinbaren</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-metallic">
                <CardHeader>
                  <Play className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Kostenlos testen</CardTitle>
                  <CardDescription>14 Tage voller Zugriff</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Alle Features
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Keine Kreditkarte
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Jederzeit kündbar
                    </li>
                  </ul>
                  <Link href="/kontakt">
                    <Button variant="outline" className="w-full">Testzugang anfordern</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Entdecken Sie mehr</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/preise", label: "Preise" },
                { href: "/digitaler-laufzettel", label: "Digitaler Laufzettel" },
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
      </main>
      <SEOFooter />
    </div>
  );
}
