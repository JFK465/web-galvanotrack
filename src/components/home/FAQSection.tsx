"use client";

import { motion, type Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export function FAQSection() {
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
