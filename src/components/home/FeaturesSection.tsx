"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { QrCode, ScanLine, FileText, Truck, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      "Optimiert für mobile Geräte. Scannen Sie Bad-Nummern, Chargen und Stationen in Echtzeit.",
  },
  {
    icon: FileText,
    title: "ISO-Dokumentation",
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
      "Alle Daten für IATF 16949, ISO 9001 und Kunden-Audits bereit. Exportieren Sie Berichte mit einem Klick.",
    image: "/images/feature-3.png",
  },
];

export function FeaturesSection() {
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
                  <div className="relative w-full aspect-[4/3] bg-zinc-800/50 overflow-hidden rounded-t-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain p-6 hover:scale-105 transition-transform duration-300"
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
