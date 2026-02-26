"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  QrCode,
  ScanLine,
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Truck,
  Users,
  Building2,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Probleme", href: "#probleme" },
    { label: "Lösung", href: "#loesung" },
    { label: "Features", href: "#features" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              GalvanoTrack
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Anmelden
            </Button>
            <Button size="sm">
              Kostenlos testen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" size="sm">
                Anmelden
              </Button>
              <Button size="sm">
                Kostenlos testen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              Jetzt mit ISO-Rückverfolgbarkeit
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Der digitale Laufzettel für{" "}
            <span className="text-gradient">Galvanik & Oberflächentechnik</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Lückenlose Rückverfolgbarkeit Ihrer Werkstücke. QR-Code basierte
            Auftragsverfolgung, ISO-konforme Dokumentation und
            Automotive-Compliance – ohne teures ERP.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Kostenlose Demo starten
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8"
            >
              Live-Präsentation
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>14 Tage kostenlos testen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Keine Kreditkarte</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Jederzeit kündbar</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={fadeInUp} className="mt-16 relative">
            <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur p-2 shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="GalvanoTrack Dashboard – Digitaler Laufzettel mit QR-Code für Galvanik-Betriebe"
                width={1200}
                height={675}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Papier-Laufzettel",
      description:
        "Manuelle Zettelwirtschaft führt zu Fehlern, Unleserlichkeit und verlorenen Aufträgen. Die Suche nach исторических Daten kostet wertvolle Zeit.",
    },
    {
      icon: Shield,
      title: "Fehlende Rückverfolgbarkeit",
      description:
        "Ohne lückenlose Dokumentation sind Sie bei Audits und Kundenreklamationen schutzlos. ISO-Anforderungen lassen sich nicht erfüllen.",
    },
    {
      icon: Clock,
      title: "Zeitintensive Nachverfolgung",
      description:
        "Wo ist welcher Auftrag? Welche Batch-Nummer wurde verwendet? Diese Fragen kosten täglich Stunden an Suchzeit.",
    },
  ];

  return (
    <section id="probleme" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-primary font-medium">Das Problem</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            纸质 Laufzettel gehören der Vergangenheit an
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Die Galvanik-Branche steht vor großen Herausforderungen. Manuelle
            Prozesse kosten Zeit, Geld und nerven.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-metallic h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Lösung Section
function LoesungSection() {
  const steps = [
    {
      number: "01",
      title: "Auftrag anlegen",
      description:
        "Erstellen Sie Aufträge schnell per Handyfon oder Tablet. Alle wichtigen Daten werden digital erfasst.",
    },
    {
      number: "02",
      title: "QR-Code drucken",
      description:
        "Jedem Werkstück wird ein einzigartiger QR-Code zugewiesen. Einfach ausdrucken und befestigen.",
    },
    {
      number: "03",
      title: "Scannen & Dokumentieren",
      description:
        "An jeder Station scannen Sie den QR-Code. Badzusammensetzung, Zeiten, Mitarbeiter – alles automatisch erfasst.",
    },
    {
      number: "04",
      title: "Rückverfolgen",
      description:
        "Mit einem Klick sehen Sie die komplette Historie. Für Audits, Reklamationen oder Optimierungen.",
    },
  ];

  return (
    <section id="loesung" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-primary font-medium">Die Lösung</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Digitaler Workflow in 4 Schritten
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            GalvanoTrack macht aus Ihren Papier-Laufzetteln einen intelligenten,
            digitalen Prozess.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-8 text-primary/30 w-6 h-6" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: QrCode,
      title: "QR-Code Verwaltung",
      description:
        "Einzigartige QR-Codes für jedes Werkstück. Bulk-Druck, individuelle Labels – alles möglich.",
      image: "/images/feature-1.png",
    },
    {
      icon: ScanLine,
      title: "Scan-Interface",
      description:
        "Optimiert für mobile Geräte. Scannen Sie Bad-Nummern,chargen und Stationen in Echtzeit.",
    },
    {
      icon: FileText,
      title: "Dokumentation",
      description:
        "ISO-konforme Aufzeichnungen. Badzusammensetzung, Temperatur, Zeiten – alles automatisch protokolliert.",
      image: "/images/feature-2.png",
    },
    {
      icon: Truck,
      title: "Lieferanten-Verfolgung",
      description:
        "Verfolgen Sie Werkstücke vom Eingang bis zum Versand. Lückenlose Rückverfolgbarkeit.",
    },
    {
      icon: Users,
      title: "Mitarbeiter-Tracking",
      description:
        "Wer hat welche Bearbeitung durchgeführt? Dokumentation für Qualitätssicherung und Audits.",
    },
    {
      icon: Shield,
      title: "Audit-Ready",
      description:
        "Alle Daten für IATF 16949, ISO 9001 und Kunden-Audits ready. Exportieren Sie Berichte mit einem Klick.",
      image: "/images/feature-3.png",
    },
  ];

  return (
    <section id="features" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-primary font-medium">Features</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Alles, was Sie für Rückverfolgbarkeit brauchen
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            GalvanoTrack bietet alle Funktionen für eine vollständige digitale
            Auftragsverfolgung in der Galvanik.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-metallic h-full hover:border-primary/50 transition-colors overflow-hidden">
                {feature.image && (
                  <div className="relative w-full aspect-[4/3] bg-zinc-800/50">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                )}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Warum Wir Section
function WarumWirSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Einfach & Schnell",
      description:
        "Kein kompliziertes ERP. In 30 Minuten eingerichtet. Intuitiv für alle Mitarbeiter.",
    },
    {
      icon: Shield,
      title: "ISO-konform",
      description:
        "Alle Anforderungen für ISO 9001, IATF 16949 und Kundenaudits erfüllt. Dokumentation inklusive.",
    },
    {
      icon: Building2,
      title: "Branchen-Know-how",
      description:
        "Entwickelt von Experten für die Galvanik-Branche. Wir verstehen Ihre Prozesse.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <span className="text-primary font-medium">
                Warum GalvanoTrack
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mt-2 mb-6"
            >
              Warum GalvanoTrack statt teurem ERP?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8"
            >
              ERP-Systeme sind oft überdimensioniert, kompliziert und kosten
              Tausende Euro. GalvanoTrack ist:
            </motion.p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Card className="relative bg-zinc-900 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Im Vergleich</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="galvanotrack" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="galvanotrack">GalvanoTrack</TabsTrigger>
                    <TabsTrigger value="erp">Klassisches ERP</TabsTrigger>
                  </TabsList>
                  <TabsContent value="galvanotrack" className="mt-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>399€/Monat</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>30 Min. Einrichtung</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>ISO-konform</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Keine Schulung nötig</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Mobile-first</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="erp" className="mt-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4" />
                        <span>50.000€+ Einstieg</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4" />
                        <span>Monate Implementierung</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4" />
                        <span>Konfiguration nötig</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4" />
                        <span>Wochenschulungen</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4" />
                        <span>Oft nur Desktop</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Preise Section
function PreiseSection() {
  return (
    <section id="preise" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-primary font-medium">Preise</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Transparente Preise, keine versteckten Kosten
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Starten Sie mit 399€/Monat inklusive aller Features. Keine
            Setup-Gebühren, keine Vertragsbindung.
          </motion.p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="card-metallic border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                Beliebt
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">GalvanoTrack Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold">399€</span>
                  <span className="text-muted-foreground">/Monat</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Alles inklusive, monatlich kündbar
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Unbegrenzte Aufträge",
                    "QR-Code Verwaltung",
                    "Scan-Interface",
                    "ISO-Dokumentation",
                    "Audit-Exporte",
                    "E-Mail Support",
                    "Mobile App inklusive",
                    "API-Zugang",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8 size-lg">
                  Kostenlos testen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground text-sm">
              + Hardware: QR-Code Scanner ab 89€, Etikettendrucker ab 199€
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Wie lange dauert die Einrichtung?",
      answer:
        "In der Regel 30 Minuten. Wir richten Ihr Konto ein, drucken die ersten QR-Codes und schulen einen Mitarbeiter – fertig.",
    },
    {
      question: "Welche Hardware wird benötigt?",
      answer:
        "Sie brauchen lediglich ein Smartphone oder Tablet mit Kamera. Optional: Etikettendrucker für professionelle QR-Code-Labels.",
    },
    {
      question: "Sind die Daten ISO-konform?",
      answer:
        "Ja. GalvanoTrack erfüllt alle Anforderungen für ISO 9001 und IATF 16949. Sie können Audit-Berichte mit einem Klick exportieren.",
    },
    {
      question: "Kann ich bestehende Aufträge importieren?",
      answer:
        "Ja, wir unterstützen CSV-Import. Bei Bedarf helfen wir Ihnen gerne bei der Migration.",
    },
    {
      question: "Was passiert mit meinen Daten?",
      answer:
        "Ihre Daten werden in deutschen Rechenzentren gehostet (DSGVO-konform). Sie gehören Ihnen und können jederzeit exportiert werden.",
    },
    {
      question: "Gibt es eine Mindestvertragslaufzeit?",
      answer:
        "Nein. Sie können monatlich kündigen. Wir empfehlen jedoch eine Nutzung von mindestens 6 Monaten, um alle Vorteile zu nutzen.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-primary font-medium">FAQ</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Häufig gestellte Fragen
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

// Kontakt/CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-primary font-medium">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
              Bereit für digitale Rückverfolgbarkeit?
            </h2>
            <p className="text-muted-foreground mb-8">
              Vereinbaren Sie eine kostenlose Demo. Wir zeigen Ihnen
              GalvanoTrack in einem 30-minütigen Live-Termin – unverbindlich und
              ohne Verpflichtung.
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
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Deutscher Support</p>
                  <p className="text-sm text-muted-foreground">
                    Schnelle Hilfe per E-Mail
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-zinc-900 border-border">
              <CardHeader>
                <CardTitle>Kontaktformular</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Firma</Label>
                      <Input id="company" placeholder="Ihre Firma" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      placeholder="Wie können wir Ihnen helfen?"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Demo anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">GalvanoTrack</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Der digitale Laufzettel für Galvanik & Oberflächentechnik.
              Einfach, schnell, ISO-konform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#preise" className="hover:text-foreground">
                  Preise
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 GalvanoTrack. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground">Made in Germany 🇩🇪</p>
        </div>
      </div>
    </footer>
  );
}

// Main Component
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <LoesungSection />
        <FeaturesSection />
        <WarumWirSection />
        <PreiseSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
