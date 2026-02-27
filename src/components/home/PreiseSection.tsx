"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export function PreiseSection() {
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
                <Link href="/demo">
                  <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">
                    Kostenlos testen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
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
