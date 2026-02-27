import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der GalvanoTrack GmbH - Rechtliche Informationen und Kontaktdaten.",
  alternates: {
    canonical: `${siteConfig.url}/impressum`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="bg-zinc-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Seitenheader */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Impressum
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Rechtliche Informationen gemäß § 5 TMG
          </p>
        </div>

        <div className="space-y-10 text-zinc-300">

          {/* Angaben gemäss § 5 TMG */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Angaben gemäss § 5 TMG
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 space-y-3 border border-zinc-800">
              <p className="font-semibold text-white">GalvanoTrack GmbH</p>
              <p>Musterstrasse 1</p>
              <p>80331 München</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Vertretung */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Vertretung
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 space-y-2 border border-zinc-800">
              <p>
                <span className="font-medium text-white">Geschäftsführer:</span> Max Mustermann
              </p>
              <p>
                <span className="font-medium text-white">Handelsregister:</span> Amtsgericht München
              </p>
              <p>
                <span className="font-medium text-white">Registernummer:</span> HRB 123456
              </p>
              <p>
                <span className="font-medium text-white">USt-IdNr.:</span> DE123456789
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Kontakt
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 space-y-2 border border-zinc-800">
              <p>
                <span className="font-medium text-white">E-Mail:</span>{" "}
                <a href="mailto:info@galvanotrack.de" className="text-blue-400 hover:text-blue-300">
                  info@galvanotrack.de
                </a>
              </p>
              <p>
                <span className="font-medium text-white">Telefon:</span> +49 (0) 800 123 4567
              </p>
              <p className="text-sm text-zinc-500 pt-2">
                (Erreichbar Mo-Fr 9:00-17:00 Uhr)
              </p>
            </div>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Haftung für Inhalte
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Taetigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuehrt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Haftung für Links
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen.
              </p>
              <p>
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                Seiten wurden zum Zeitpunkt der Verlinkung auf moegliche
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
                der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
                ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Urheberrecht
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                sind nur fuer den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Streitbeilegung */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Streitbeilegung
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Stand */}
          <p className="text-xs text-zinc-500 pt-4 border-t border-zinc-800">
            Stand: Februar 2026 | GalvanoTrack GmbH, München
          </p>
        </div>
      </div>
    </div>
  );
}
