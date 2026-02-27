import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  WebSiteSchema,
  OrganizationSchema,
  SoftwareApplicationSchema,
} from "@/components/seo/StructuredData";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { LoesungSection } from "@/components/home/LoesungSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { WarumWirSection } from "@/components/home/WarumWirSection";
import { PreiseSection } from "@/components/home/PreiseSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Digitaler Laufzettel für Galvanik & Oberflächentechnik`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} – Digitaler Laufzettel für Galvanik`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Digitaler Laufzettel für Galvanik`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <WebSiteSchema />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <Navbar />
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
