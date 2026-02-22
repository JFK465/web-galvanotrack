import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ScanLine, FileText, CheckCircle2, ArrowRight, Shield, Clock, Zap, Users, Building2, Award, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEONavigation, SEOFooter } from "@/components/seo-navigation";

export const metadata: Metadata = {
  title: "ISO 9001 Galvanik | Konformes Qualitätsmanagement für Galvanik-Betriebe",
  description: "GalvanoTrack - Die ISO 9001 konforme Lösung für Galvanik-Betriebe. Dokumentation, Rückverfolgbarkeit und Audit-Vorbereitung für ISO-Zertifizierung.",
  keywords: ["ISO 9001 Galvanik", "Qualitätsmanagement Galvanik", "ISO 9001 Dokumentation", "Galvanik Zertifizierung", "Audit Vorbereitung Galvanik"],
  openGraph: {
    title: "ISO 9001 Galvanik | Konformes Qualitätsmanagement",
    description: "Die SaaS-Lösung für ISO 9001 konforme Dokumentation in der Galvanik.",
  },
};

export default function ISO9001GalvanikPage() {
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
                  <Award className="w-4 h-4" />
                  ISO 9001 zertifiziert
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                ISO 9001 für{" "}
                <span className="text-gradient">Galvanik-Betriebe</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Die digitale Lösung für ISO 9001 konformes Qualitätsmanagement in der Galvanik.
                Dokumentieren Sie alle Prozesse, erfüllen Sie die Anforderungen und bestehen Sie Audits
                mit Leichtigkeit.
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
                  <span>ISO 9001 ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Audit-Dokumente</span>
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
              <span className="text-primary font-medium">ISO 9001 Anforderungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Was fordert ISO 9001 in der Galvanik?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Die wichtigsten Anforderungen der ISO 9001 für Galvanik-Betriebe und wie GalvanoTrack hilft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  title: "Dokumentation",
                  description: "Lückenlose Aufzeichnungen aller Prozesse. GalvanoTrack dokumentiert automatisch.",
                  requirement: "ISO 9001 Abschnitt 7.5"
                },
                {
                  icon: QrCode,
                  title: "Rückverfolgbarkeit",
                  description: "Jedes Werkstück muss rückverfolgbar sein. QR-Codes machen es möglich.",
                  requirement: "ISO 9001 Abschnitt 7.5.3"
                },
                {
                  icon: Shield,
                  title: "Prüfungen",
                  description: "Dokumentation aller Qualitätsprüfungen und Messergebnisse.",
                  requirement: "ISO 9001 Abschnitt 8.1"
                },
                {
                  icon: Users,
                  title: "Kompetenznachweis",
                  description: "Nachweis der Qualifikation aller Mitarbeiter.",
                  requirement: "ISO 9001 Abschnitt 7.2"
                },
                {
                  icon: FileText,
                  title: "Änderungsmanagement",
                  description: "Alle Änderungen an Prozessen müssen dokumentiert werden.",
                  requirement: "ISO 9001 Abschnitt 8.1"
                },
                {
                  icon: Award,
                  title: "Korrekturmaßnahmen",
                  description: "Systematische Erfassung und Verfolgung von Abweichungen.",
                  requirement: "ISO 9001 Abschnitt 10.2"
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
                ISO 9001 konform mit GalvanoTrack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "01", title: "Automatische Dokumentation", description: "Alle Prozessschritte werden automatisch erfasst." },
                { number: "02", title: "QR-Code Rückverfolgung", description: "Jedes Werkstück ist jederzeit rückverfolgbar." },
                { number: "03", title: "Audit-Exporte", description: "Mit einem Klick alle Berichte für Audits exportieren." },
                { number: "04", title: "Abweichungsmanagement", description: "Alle Abweichungen werden erfasst und verfolgt." }
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

        {/* Vorteile Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-medium">Vorteile</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Warum GalvanoTrack für ISO 9001?
                </h2>

                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Weniger Aufwand", description: "Keine manuellen Listen mehr. Alle Daten werden automatisch erfasst." },
                    { icon: Shield, title: "Audit-sicher", description: "Alle Dokumente sind revisionssicher gespeichert und abrufbar." },
                    { icon: Clock, title: "Zeitersparnis", description: "Audit-Vorbereitung in Minuten statt Tagen." },
                    { icon: Building2, title: "Branchen-Know-how", description: "Entwickelt speziell für Galvanik-Betriebe." }
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
                    <CardTitle className="text-2xl">ISO 9001 Checkliste</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Qualitätsmanagementsystem dokumentiert?",
                        "Alle Prozesse sind beschrieben?",
                        "Rückverfolgbarkeit ist gewährleistet?",
                        "Mitarbeiter sind qualifiziert?",
                        "Audits werden durchgeführt?",
                        "Korrekturmaßnahmen werden erfasst?"
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
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Entdecken Sie verwandte Themen
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { href: "/iatf-16949", label: "IATF 16949" },
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
        <section className="py-24 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-medium">Kontakt</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                  Bereit für ISO-konformes Qualitätsmanagement?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen, wie GalvanoTrack
                  bei der ISO 9001 Zertifizierung hilft.
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
