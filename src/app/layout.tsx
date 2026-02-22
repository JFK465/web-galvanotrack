import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GalvanoTrack | Digitaler Laufzettel für Galvanik & Oberflächentechnik",
  description: "Die SaaS-Lösung für lückenlose Rückverfolgbarkeit in der Galvanik. QR-Code basierte Auftragsverfolgung, ISO-konforme Dokumentation und Automotive-Compliance.",
  keywords: ["Galvanik Software", "digitaler Laufzettel", "Rückverfolgbarkeit", "Oberflächentechnik", "Lohnbeschichter", "ISO Rückverfolgbarkeit", "Automotive", "IATF 16949"],
  authors: [{ name: "GalvanoTrack" }],
  openGraph: {
    title: "GalvanoTrack | Digitaler Laufzettel für Galvanik & Oberflächentechnik",
    description: "Die SaaS-Lösung für lückenlose Rückverfolgbarkeit in der Galvanik. QR-Code basierte Auftragsverfolgung, ISO-konforme Dokumentation.",
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GalvanoTrack | Digitaler Laufzettel für Galvanik",
    description: "Die SaaS-Lösung für lückenlose Rückverfolgbarkeit in der Galvanik.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      "de-DE": "/",
      "en-US": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
