import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der GalvanoTrack für die Nutzung der Software-as-a-Service Lösung.",
  alternates: {
    canonical: `${siteConfig.url}/agb`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AGBPage() {
  return (
    <div className="bg-zinc-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Seitenheader */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-4 text-base text-zinc-400">Stand: Februar 2026</p>
        </div>

        <div className="space-y-10 text-zinc-300">
          {/* § 1 Geltungsbereich */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 1 Geltungsbereich
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Vertragsverhältnisse zwischen der GalvanoTrack GmbH
                (nachfolgend &quot;Anbieter&quot;) und dem Kunden (nachfolgend
                &quot;Kunde&quot;) ueber die Nutzung der Software-as-a-Service
                Loesung &quot;GalvanoTrack&quot;.
              </p>
              <p>
                Abweichende, entgegenstehende oder ergänzende AGB des Kunden
                werden nicht Vertragsbestandteil, es sei denn, der Anbieter hat
                deren Geltung ausdrücklich schriftlich zugestimmt.
              </p>
            </div>
          </section>

          {/* § 2 Vertragsschluss */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 2 Vertragsschluss
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Die Darstellung der Leistungen auf der Website des Anbieters
                stellt kein rechtlich bindendes Angebot dar, sondern eine
                unverbindliche Aufforderung an den Kunden, ein Angebot
                abzugeben.
              </p>
              <p>
                Der Vertrag kommt durch die Registrierung des Kunden auf der
                Plattform und die anschliessende Betätigung des
                &quot;Kostenpflichtig bestellen&quot;-Buttons zustande.
              </p>
              <p>
                Der Anbieter bestätigt den Vertragsschluss durch eine
                automatisch generierte E-Mail an die vom Kunden angegebene
                E-Mail-Adresse.
              </p>
            </div>
          </section>

          {/* § 3 Leistungsumfang */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 3 Leistungsumfang
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Anbieter stellt dem Kunden die Software
                &quot;GalvanoTrack&quot; als SaaS-Lösung zur Verfügung. Der
                genaue Leistungsumfang ergibt sich aus der jeweiligen
                Leistungsbeschreibung auf der Website und dem gewaehlten Tarif.
              </p>
              <p>
                Der Anbieter ist berechtigt, die SaaS-Lösung weiterzuentwickeln
                und zu verbessern. Wesentliche Änderungen werden dem Kunden
                vorab mitgeteilt.
              </p>
              <p>
                Die Verfügbarkeit der SaaS-Lösung beträgt 99,5% im
                Jahresmittel. Geplante Wartungsarbeiten werden vorab bekannt
                gegeben.
              </p>
            </div>
          </section>

          {/* § 4 Nutzungsrechte */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 4 Nutzungsrechte
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Kunde erhaelt ein einfaches, nicht übertragbares, zeitlich
                auf die Vertragslaufzeit beschränktes Recht zur Nutzung der
                SaaS-Loesung.
              </p>
              <p>
                Die Rechte an der Software verbleiben ausschliesslich beim
                Anbieter. Der Kunde darf die Software nur im Rahmen der
                vertraglich vereinbarten Nutzung verwenden.
              </p>
              <p>
                Eine Vervielfältigung, Veränderung, Verbreitung oder
                öffentliche Zugänglichmachung der Software ist nicht gestattet.
              </p>
            </div>
          </section>

          {/* § 5 Pflichten des Kunden */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 5 Pflichten des Kunden
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Kunde ist verpflichtet, die Zugangsdaten (Benutzername,
                Passwort) vertraulich zu behandeln und nicht an Dritte
                weiterzugeben.
              </p>
              <p>
                Der Kunde verpflichtet sich, die SaaS-Loesung nur im Rahmen der
                rechtmaessigen Geschaeftszwecke zu nutzen und keine
                rechtswidrigen Inhalte einzustellen oder zu verarbeiten.
              </p>
              <p>
                Der Kunde ist für die Sicherung seiner eigenen Daten
                verantwortlich. Eine Datensicherung durch den Anbieter erfolgt
                nur im Rahmen der vereinbarten Leistungen.
              </p>
            </div>
          </section>

          {/* § 6 Vergütung */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 6 Vergütung
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Die Verguetung richtet sich nach dem jeweils gewählten Tarif.
                Alle Preise verstehen sich zuzüglich der gesetzlichen
                Umsatzsteuer.
              </p>
              <p>
                Die Zahlung erfolgt monatlich im Voraus per
                Lastschriftverfahren, Kreditkarte oder Rechnung.
              </p>
              <p>
                Ein Zahlungsverzug berechtigt den Anbieter, den Zugang zur
                SaaS-Lösung zu sperren, nachdem eine angemessene Frist zur
                Zahlung gesetzt wurde.
              </p>
            </div>
          </section>

          {/* § 7 Gewährleistung */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 7 Gewährleistung
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Anbieter gewaehrleistet, dass die SaaS-Lösung
                vertragsgemäß zur Verfügung gestellt wird. Mängel werden nach
                Eingang einer schriftlichen Fehlermeldung innerhalb angemessener
                Frist behoben.
              </p>
              <p>
                Bei erheblichen Mängeln ist der Kunde berechtigt, eine
                angemessene Minderung der Vergütung zu verlangen oder vom
                Vertrag zurückzutreten.
              </p>
              <p>
                Die Gewährleistung ist ausgeschlossen bei Mängeln, die durch
                unsachgemäße Nutzung oder Eingriffe des Kunden verursacht
                wurden.
              </p>
            </div>
          </section>

          {/* § 8 Haftung */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 8 Haftung
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Anbieter haftet für Schäden, die auf einer vorsätzlichen
                oder grob fahrlässigen Pflichtverletzung beruhen, sowie für
                Schäden aus der Verletzung des Lebens, des Koerpers oder der
                Gesundheit.
              </p>
              <p>
                Bei leichter Fahrlässigkeit haftet der Anbieter nur bei der
                Verletzung wesentlicher Vertragspflichten. In diesem Fall ist
                die Haftung auf den vertragstypischen, vorhersehbaren Schäden
                begrenzt.
              </p>
              <p>
                Die Haftung fuer Datenverlust ist auf den
                Wiederherstellungsaufwand begrenzt, der bei ordnungsgemäßer
                Datensicherung durch den Kunden angefallen wäre.
              </p>
            </div>
          </section>

          {/* § 9 Datenschutz */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 9 Datenschutz
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Anbieter verarbeitet personenbezogene Daten des Kunden nur
                im Rahmen der gesetzlichen Bestimmungen, insbesondere der DSGVO.
                Details hierzu sind der Datenschutzerklaerung zu entnehmen.
              </p>
              <p>
                Ein Auftragsverarbeitungsvertrag wird auf Anfrage des Kunden
                geschlossen.
              </p>
            </div>
          </section>

          {/* § 10 Vertragslaufzeit */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 10 Vertragslaufzeit
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Der Vertrag wird auf unbestimmte Zeit geschlossen. Er kann von
                beiden Parteien mit einer Frist von 30 Tagen zum Monatsende
                schriftlich (E-Mail genügt) gekündigt werden.
              </p>
              <p>
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
                bleibt unberührt.
              </p>
            </div>
          </section>

          {/* § 11 Schlussbestimmungen */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              § 11 Schlussbestimmungen
            </h2>
            <div className="text-sm leading-6 space-y-4">
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts (CISG).
              </p>
              <p>
                Gerichtsstand ist München, sofern der Kunde Kaufmann,
                juristische Person des oeffentlichen Rechts oder
                oeffentlich-rechtliches Sondervermögen ist.
              </p>
              <p>
                Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so
                wird die Wirksamkeit der übrigen Bestimmungen dadurch nicht
                beruehrt. Anstelle der unwirksamen Bestimmung soll eine wirksame
                Regelung treten, die dem wirtschaftlichen Zweck der unwirksamen
                Bestimmung möglichst nahekommt.
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
