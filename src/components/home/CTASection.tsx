"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

export function CTASection() {
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
              {[
                {
                  title: "Kostenlose Demo",
                  desc: "30 Minuten Live-Präsentation",
                },
                {
                  title: "14 Tage kostenlos testen",
                  desc: "Voller Funktionsumfang",
                },
                {
                  title: "Deutscher Support",
                  desc: "Schnelle Hilfe per E-Mail",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
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
