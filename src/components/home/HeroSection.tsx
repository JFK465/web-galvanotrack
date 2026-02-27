"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { QrCode, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
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
            <Link href="/demo">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 bg-blue-600 hover:bg-blue-700"
              >
                Kostenlose Demo starten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/galvanik-software">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg px-8"
              >
                Software entdecken
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
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

          <motion.div variants={fadeInUp} className="mt-16 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl scale-95 -z-10" />
            <div className="relative rounded-2xl border border-white/10 bg-card/50 backdrop-blur p-2 shadow-2xl ring-1 ring-inset ring-white/10">
              <Image
                src="/images/hero.png"
                alt="GalvanoTrack Dashboard – Digitaler Laufzettel mit QR-Code für Galvanik-Betriebe"
                width={1200}
                height={675}
                className="rounded-xl w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
