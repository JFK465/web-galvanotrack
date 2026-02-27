"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Shield, Building2, CheckCircle2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export function WarumWirSection() {
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
                      {[
                        "399€/Monat",
                        "30 Min. Einrichtung",
                        "ISO-konform",
                        "Keine Schulung nötig",
                        "Mobile-first",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="erp" className="mt-4">
                    <ul className="space-y-3">
                      {[
                        "50.000€+ Einstieg",
                        "Monate Implementierung",
                        "Konfiguration nötig",
                        "Wochenschulungen",
                        "Oft nur Desktop",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <X className="w-4 h-4" />
                          <span>{item}</span>
                        </li>
                      ))}
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
