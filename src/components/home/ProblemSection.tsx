"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, Shield, Clock } from "lucide-react";
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

const problems = [
  {
    icon: FileText,
    title: "Papier-Laufzettel",
    description:
      "Manuelle Zettelwirtschaft führt zu Fehlern, Unleserlichkeit und verlorenen Aufträgen. Die Suche nach historischen Daten kostet wertvolle Zeit.",
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

export function ProblemSection() {
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
            Papier-Laufzettel gehören der Vergangenheit an
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
