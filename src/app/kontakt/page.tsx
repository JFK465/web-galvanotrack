import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, CheckCircle2, ArrowRight, Mail, Phone, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "Kontakt | GalvanoTrack - Demo anfragen",
  description: "Kontaktieren Sie uns für eine kostenlose Demo von GalvanoTrack. Wir beraten Sie gerne zu unserer Galvanik Software.",
  keywords: ["Kontakt GalvanoTrack", "Demo Galvanik Software", "Beratung Rückverfolgbarkeit", "Galvanik Software Test"],
  openGraph: {
    title: "Kontakt | GalvanoTrack",
    description: "Kontaktieren Sie uns für eine kostenlose Demo.",
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEONavigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Kontakt
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Kostenlose{" "}
                <span className="text-gradient">Demo</span> anfordern
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vereinbaren Sie einen Termin für eine 30-minütige Live-Präsentation.
                Wir zeigen Ihnen, wie GalvanoTrack Ihre Galvanik-Prozesse optimiert.
              </p>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Kontaktformular */}
              <div>
                <Card className="bg-zinc-900 border-border">
                  <CardHeader>
                    <CardTitle>Demo anfragen</CardTitle>
                    <CardDescription>
                      Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
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
                        <Label htmlFor="company">Firma</Label>
                        <Input id="company" placeholder="Ihre Galvanik GmbH" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail</Label>
                        <Input id="email" type="email" placeholder="max@mustermann.de" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon (optional)</Label>
                        <Input id="phone" type="tel" placeholder="+49 123 456789" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employees">Anzahl Mitarbeiter</Label>
                        <Input id="employees" type="number" placeholder="z.B. 25" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Nachricht</Label>
                        <Textarea
                          id="message"
                          placeholder="Wie können wir Ihnen helfen? Welche Themen interessieren Sie besonders?"
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full size-lg">
                        Demo anfordern
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Kontaktinformationen */}
              <div>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">So erreichen Sie uns</h2>
                    <p className="text-muted-foreground">
                      Haben Sie Fragen? Wir helfen Ihnen gerne weiter.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-Mail</h3>
                        <p className="text-muted-foreground">info@galvanotrack.de</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefon</h3>
                        <p className="text-muted-foreground">+49 (0) 123 456789</p>
                        <p className="text-sm text-muted-foreground">Mo-Fr: 9:00 - 17:00 Uhr</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Musterstraße 123<br />
                          12345 Musterstadt<br />
                          Deutschland
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                        <p className="text-muted-foreground">
                          Mo-Do: 9:00 - 17:00 Uhr<br />
                          Fr: 9:00 - 15:00 Uhr
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Was passiert nach der Demo-Anfrage?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Wir melden uns innerhalb von 24 Stunden</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">30-minütiger Live-Termin nach Wahl</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">14 Tage kostenloser Testzugang</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Keine Verpflichtung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Vorteile</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Warum eine Demo?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Persönlich",
                  description: "Individuelle Präsentation zugeschnitten auf Ihre Anforderungen."
                },
                {
                  title: "Unverbindlich",
                  description: "Keine Verpflichtung. Sie entscheiden, ob GalvanoTrack passt."
                },
                {
                  title: "Kostenlos",
                  description: "Die Demo ist kostenlos. Keine versteckten Kosten."
                }
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full">
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

        {/* Interne Verlinkung Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Entdecken Sie mehr
              </h2>
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
