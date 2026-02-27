"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const steps = [
  {
    number: "01",
    title: "Auftrag anlegen",
    description:
      "Erstellen Sie Aufträge schnell per Handy oder Tablet. Alle wichtigen Daten werden digital erfasst.",
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

export function LoesungSection() {
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
