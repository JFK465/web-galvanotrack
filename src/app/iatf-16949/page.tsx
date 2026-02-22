import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Clock, Zap, Users, Building2, Award, ClipboardList, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "IATF 16949 Galvanik | Automotive-Konformität für Galvanik-Betriebe",
  description: "GalvanoTrack - Die IATF 16949 konforme Lösung für Galvanik-Betriebe in der Automobilindustrie. Rückverfolgbarkeit und Dokumentation für Automotive-Lieferanten.",
  keywords: ["IATF 16949 Galvanik", "Automotive Galvanik", "IATF 16949 Dokumentation", "Automotive Lieferant Galvanik", "ISO/TS 16949"],
  openGraph: {
    title: "IATF 16949 Galvanik | Automotive-Konformität",
    description: "Die SaaS-Lösung für IATF 16949 konforme Dokumentation in der Galvanik.",
  },
};

export default function IATF16949Page() {
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
                  <Car className="w-4 h-4" />
                  Automotive-Standard
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                IATF 16949 für{" "}
                <span className="text-gradient">Galvanik-Betriebe</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für IATF 16949 konformes Qualitätsmanagement in der Galvanik.
                Erfüllen Sie die strengen Anforderungen der Automobilindustrie und
                beliefern Sie OEMs mit Vertrauen.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg px-8">
                    Kostenlose Demo starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Mehr erfahren
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>IATF 16949 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>OEM-Lieferant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>14 Tage kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anforderungen Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">IATF 16949 Anforderungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Was fordert IATF 16949 in der Galvanik?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Die wichtigsten Anforderungen der IATF 16949 für Galvanik-Lieferanten in der Automobilindustrie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: QrCode,
                  title: "Lückenlose Rückverfolgbarkeit",
                  description: "Jedes Werkstück muss vom Rohmaterial bis zum Endprodukt rückverfolgbar sein.",
                  requirement: "IATF 16949 §8.5.2"
                },
                {
                  icon: ClipboardList,
                  title: "PPAP Dokumentation",
                  description: "Production Part Approval Process mit allen erforderlichen Dokumenten.",
                  requirement: "IATF 16949 §8.3.6"
                },
                {
                  icon: Shield,
                  title: "FMEA & Kontrollpläne",
                  description: "Dokumentation von Risikoanalysen und Kontrollplänen.",
                  requirement: "IATF 16949 §8.3.3"
                },
                {
                  icon: FileText,
                  title: "Bad-Dokumentation",
                  description: "Lückenlose Aufzeichnung aller Badparameter und Chemikalien.",
                  requirement: "IATF 16949 §8.5.1"
                },
                {
                  icon: Users,
                  title: "Mitarbeiterqualifikation",
                  description: "Nachweis der Qualifikation für alle kritischen Prozesse.",
                  requirement: "IATF 16949 §7.2"
                },
                {
                  icon: Award,
                  title: "Audit-Trail",
                  description: "Revisionssichere Dokumentation aller Änderungen und Abweichungen.",
                  requirement: "IATF 16949 §10.2"
                }
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <span className="text-xs text-primary font-mono">{item.requirement}</span>
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
                IATF 16949 konform mit GalvanoTrack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "01", title: "Vollständige Rückverfolgung", description: "Jedes Werkstück ist vom Rohstoff bis zum Versand rückverfolgbar." },
                { number: "02", title: "PPAP-Unterstützung", description: "Alle erforderlichen Dokumente werden automatisch erstellt." },
                { number: "03", title: "Bad-Dokumentation", description: "Alle Parameter werden automatisch erfasst und protokolliert." },
                { number: "04", title: "Audit-Exporte", description: "Mit einem Klick alle Berichte für Kunden-Audits exportieren." }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
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

        {/* Branchen Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Automotive-Lieferanten</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Für alle OEM-Lieferanten
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                GalvanoTrack erfüllt die Anforderungen aller großen Automobilhersteller.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Volkswagen", requirement: "VW TL 528" },
                { name: "BMW", requirement: "Q0005" },
                { name: "Mercedes-Benz", requirement: "Daimler N0007" },
                { name: "Audi", requirement: "VDA 6.3" },
                { name: "Bosch", requirement: "FMEA" },
                { name: "Continental", requirement: "PPAP" },
                { name: "ZF", requirement: "IATF 16949" },
                { name: "Schaeffler", requirement: "CQI-11" }
              ].map((item, index) => (
                <Card key={index} className="card-metallic h-full">
                  <CardHeader>
                    <Car className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.requirement}</p>
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
                <span className="text-primary font-medium">Vorteile</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Warum GalvanoTrack für Automotive?
                </h2>

                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "OEM-zertifiziert", description: "Erfüllt die Anforderungen aller großen Automobilhersteller." },
                    { icon: Shield, title: "Audit-sicher", description: "Alle Dokumente sind revisionssicher und abrufbar." },
                    { icon: Clock, title: "Zeitersparnis", description: "Audit-Vorbereitung in Minuten statt Tagen." },
                    { icon: Building2, title: "Branchen-Know-how", description: "Entwickelt für Galvanik in der Automobilindustrie." }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                <Card className="relative bg-zinc-900 border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">IATF 16949 Checkliste</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Qualitätsmanagementsystem nach IATF?",
                        "Rückverfolgbarkeit aller Werkstücke?",
                        "PPAP-Dokumente vorhanden?",
                        "FMEA & Kontrollpläne dokumentiert?",
                        "Bad-Parameter werden aufgezeichnet?",
                        "Audit-Trail vorhanden?"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      GalvanoTrack hilft bei allen Punkten!
                    </p>
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
                { href: "/iso-9001-galvanik", label: "ISO 9001 Galvanik" },
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/digitaler-laufzettel", label: "Digitaler Laufzettel" },
                { href: "/qr-code-galvanik", label: "QR-Code Lösung" }
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
                  Bereit für Automotive-Compliance?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen, wie GalvanoTrack
                  bei der IATF 16949 Zertifizierung hilft.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Kostenlose Demo</p>
                      <p className="text-sm text-muted-foreground">30 Minuten Live-Präsentation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">14 Tage kostenlos testen</p>
                      <p className="text-sm text-muted-foreground">Voller Funktionsumfang</p>
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
