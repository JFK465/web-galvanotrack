import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Clock, Zap, Users, Building2, ClipboardList, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "Digitaler Laufzettel | Papierlose Lösung für Galvanik",
  description: "GalvanoTrack - Der digitale Laufzettel für Galvanik und Oberflächentechnik. QR-Code basierte Auftragsverfolgung ohne Papier. 14 Tage kostenlos testen.",
  keywords: ["Digitaler Laufzettel", "Papierlos Galvanik", "Digitaler Auftragszettel", "Galvanik App", "Mobiler Laufzettel"],
  openGraph: {
    title: "Digitaler Laufzettel | Papierlose Lösung für Galvanik",
    description: "Der digitale Laufzettel für Galvanik. QR-Code basierte Auftragsverfolgung ohne Papier.",
  },
};

export default function DigitalerLaufzettelPage() {
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
                  <Smartphone className="w-4 h-4" />
                  Endlich digital
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Der digitale{" "}
                <span className="text-gradient">Laufzettel</span> für Galvanik
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Ersetzen Sie Ihre Papier-Laufzettel durch eine moderne, digitale Lösung.
                QR-Code basierte Auftragsverfolgung, die auf jedem Gerät funktioniert.
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
                  <span>Kein Papier mehr</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>ISO-konform</span>
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
              <span className="text-primary font-medium">Das Problem</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Papier-Laufzettel gehören der Vergangenheit an
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Unleserlich",
                  description: "Handschriftliche Einträge sind oft unleserlich. Das führt zu Fehlern und Nachfragen."
                },
                {
                  icon: ClipboardList,
                  title: "Umständlich",
                  description: "Das Suchen nach historischen Daten kostet wertvolle Zeit. Wo ist welcher Auftrag?"
                },
                {
                  icon: Shield,
                  title: "Nicht auditfähig",
                  description: "Papierdokumente erfüllen nicht die Anforderungen für ISO-Audits."
                }
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
                Digitaler Workflow in 4 Schritten
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "01", title: "Auftrag anlegen", description: "Erstellen Sie Aufträge schnell per Handy oder Tablet." },
                { number: "02", title: "QR-Code drucken", description: "Jedem Werkstück wird ein einzigartiger QR-Code zugewiesen." },
                { number: "03", title: "Scannen & Dokumentieren", description: "Badzusammensetzung, Zeiten, Mitarbeiter – alles automatisch." },
                { number: "04", title: "Rückverfolgen", description: "Mit einem Klick die komplette Historie für Audits und Reklamationen." }
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

        {/* Features Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-medium">Features</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Was der digitale Laufzettel bietet
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: QrCode, title: "QR-Code Verwaltung", description: "Einzigartige QR-Codes für jedes Werkstück." },
                { icon: ScanLine, title: "Scan-Interface", description: "Scannen Sie Bad-Nummern, Chargen und Stationen." },
                { icon: FileText, title: "ISO-Dokumentation", description: "ISO-konforme Aufzeichnungen aller Prozesse." },
                { icon: Clock, title: "Zeiterfassung", description: "Automatische Erfassung aller Bearbeitungszeiten." },
                { icon: Users, title: "Mitarbeiter-Tracking", description: "Wer hat welche Bearbeitung durchgeführt?" },
                { icon: Shield, title: "Audit-Ready", description: "Alle Daten für Audits ready." }
              ].map((feature, index) => (
                <Card key={index} className="card-metallic h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
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
                  Warum digitaler Laufzettel?
                </h2>

                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Schnell", description: "In 30 Minuten eingerichtet. Intuitiv für alle Mitarbeiter." },
                    { icon: Shield, title: "ISO-konform", description: "Alle Anforderungen für ISO 9001 und IATF 16949 erfüllt." },
                    { icon: Clock, title: "Zeitersparnis", description: "Keine manuelle Datenerfassung mehr. Alles automatisch." },
                    { icon: Building2, title: "Überall nutzbar", description: "Funktioniert auf Smartphone, Tablet und PC." }
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
                    <CardTitle className="text-2xl">Im Vergleich</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <h4 className="font-semibold text-green-500 mb-2">Digitaler Laufzettel</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Immer leserlich</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Sofort durchsuchbar</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Audit-ready</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 399€/Monat</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-muted border border-border">
                        <h4 className="font-semibold text-muted-foreground mb-2">Papier-Laufzettel</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2"><span className="text-destructive">×</span> Oft unleserlich</li>
                          <li className="flex items-center gap-2"><span className="text-destructive">×</span> Zeitaufwändige Suche</li>
                          <li className="flex items-center gap-2"><span className="text-destructive">×</span> Nicht auditfähig</li>
                          <li className="flex items-center gap-2"><span className="text-destructive">×</span> Kosten für Papier</li>
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
                { href: "/qr-code-galvanik", label: "QR-Code Lösung" },
                { href: "/galvanik", label: "Galvanik Software" },
                { href: "/iso-9001-galvanik", label: "ISO 9001 Galvanik" },
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

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-medium">Kontakt</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Bereit für den digitalen Laufzettel?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen, wie einfach
                  der Umstieg auf digital ist.
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
