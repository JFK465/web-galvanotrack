import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der GalvanoTrack GmbH – Informationen gemäß DSGVO zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten.",
  alternates: {
    canonical: `${siteConfig.url}/datenschutz`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="bg-zinc-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Seitenheader */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Informationen gemäß Art. 13 und 14 DSGVO - Stand: Februar 2026
          </p>
        </div>

        <div className="space-y-10 text-zinc-300">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Verantwortlicher
            </h2>
            <div className="space-y-2 text-sm leading-6">
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze sowie
                sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 space-y-1 border border-zinc-800">
                <p className="font-semibold text-white">GalvanoTrack GmbH</p>
                <p>Musterstraße 1</p>
                <p>80331 München</p>
                <p>Deutschland</p>
                <p className="pt-1">
                  <span className="font-medium text-white">E-Mail:</span>{" "}
                  <a
                    href="mailto:info@galvanotrack.de"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    info@galvanotrack.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 2. Datenschutzbeauftragter */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Datenschutzbeauftragter
            </h2>
            <div className="space-y-2 text-sm leading-6">
              <p>
                Bei Fragen zum Datenschutz können Sie sich jederzeit an unseren
                Datenschutzbeauftragten wenden:
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 space-y-1 border border-zinc-800">
                <p className="font-semibold text-white">
                  Datenschutzbeauftragter GalvanoTrack GmbH
                </p>
                <p>Musterstraße 1, 80331 München</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:datenschutz@galvanotrack.de"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    datenschutz@galvanotrack.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 3. Erhobene Daten */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Erhobene Daten und Zwecke der Verarbeitung
            </h2>
            <div className="space-y-6 text-sm leading-6">
              <div>
                <h3 className="font-semibold text-white mb-2">
                  3.1 Beim Besuch unserer Website (Server-Logfiles)
                </h3>
                <p>
                  Beim Abrufen unserer Website werden durch den Webserver
                  automatisch folgende Daten in sogenannten Server-Logfiles
                  gespeichert:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-zinc-400">
                  <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Browsertyp und Betriebssystem</li>
                  <li>Referrer-URL (zuvorge besuchte Seite)</li>
                </ul>
                <p className="mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an der Sicherheit und Funktionsfähigkeit des
                  Angebots). Die Logfiles werden nach 30 Tagen automatisch
                  gelöscht.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  3.2 Bei der Registrierung und Nutzung unserer Software
                </h3>
                <p>
                  Zur Nutzung der GalvanoTrack-Software ist eine Registrierung
                  erforderlich. Dabei erheben wir folgende Daten:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-zinc-400">
                  <li>Vor- und Nachname</li>
                  <li>E-Mail-Adresse (Pflichtfeld)</li>
                  <li>Firmenname und Branche (optional)</li>
                  <li>Passwort (verschlüsselt gespeichert, kein Klartext)</li>
                  <li>Rechnungsadresse (bei kostenpflichtigen Tarifen)</li>
                </ul>
                <p className="mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung
                  bzw. vorvertragliche Massnahmen).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  3.3 Bei der Kontaktaufnahme
                </h3>
                <p>
                  Wenn Sie uns per E-Mail oder über das Kontaktformular
                  kontaktieren, werden die von Ihnen gemachten Angaben (Name,
                  E-Mail-Adresse, Betreff, Nachricht) zum Zweck der Bearbeitung
                  der Anfrage gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f
                  DSGVO.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Cookies
            </h2>
            <div className="space-y-4 text-sm leading-6">
              <p>
                Unsere Website und Anwendung verwenden Cookies. Cookies sind
                kleine Textdateien, die auf Ihrem Endgeräten gespeichert werden.
                Wir unterscheiden folgende Kategorien:
              </p>

              <div className="overflow-hidden rounded-lg border border-zinc-800">
                <table className="min-w-full divide-y divide-zinc-700 text-xs">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Kategorie
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Zweck
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Laufzeit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 bg-zinc-950">
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">
                        Essentiell
                      </td>
                      <td className="px-4 py-3 text-zinc-400">
                        Session-Verwaltung, Authentifizierung, CSRF-Schutz
                      </td>
                      <td className="px-4 py-3 text-zinc-400">
                        Session / 30 Tage
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">
                        Analyse
                      </td>
                      <td className="px-4 py-3 text-zinc-400">
                        Anonymisierte Nutzungsstatistiken zur
                        Produktverbesserung
                      </td>
                      <td className="px-4 py-3 text-zinc-400">13 Monate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Essenzielle Cookies sind für den Betrieb der Anwendung zwingend
                erforderlich und können nicht deaktiviert werden
                (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO). Analyse-Cookies
                werden nur nach Ihrer Einwilligung gesetzt (Rechtsgrundlage:
                Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung
                jederzeit widerrufen.
              </p>
            </div>
          </section>

          {/* 5. Hosting */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Hosting - Vercel
            </h2>
            <div className="space-y-3 text-sm leading-6">
              <p>
                Diese Website wird gehostet von Vercel Inc., 440 N Barranca Ave
                #4133, Covina, CA 91723, USA. Vercel ist Empfänger Ihrer
                personenbezogenen Daten und fungiert als Auftragsverarbeiter
                gemäß Art. 28 DSGVO. Wir haben mit Vercel einen
                Auftragsverarbeitungsvertrag (Data Processing Agreement)
                abgeschlossen.
              </p>
              <p>
                Die Infrastruktur von Vercel nutzt das EU-Rechenzentrum
                (Frankfurt). Für Datenübertragungen in die USA greift Vercel auf
                Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c
                DSGVO zurück.
              </p>
            </div>
          </section>

          {/* 6. SSL */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. SSL-/TLS-Verschlüsselung
            </h2>
            <div className="text-sm leading-6">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung (TLS 1.3). Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
                Schloss-Symbol in Ihrem Browser. Wenn die
                SSL-/TLS-Verschlüsselung aktiviert ist, können die Daten, die
                Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </section>

          {/* 7. Rechte der Betroffenen */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Ihre Rechte als betroffene Person
            </h2>
            <div className="space-y-4 text-sm leading-6">
              <p>
                Gemäß DSGVO stehen Ihnen folgende Rechte zu. Zur Ausübung dieser
                Rechte wenden Sie sich bitte an{" "}
                <a
                  href="mailto:datenschutz@galvanotrack.de"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  datenschutz@galvanotrack.de
                </a>
                :
              </p>

              <ul className="space-y-3 list-disc list-inside text-zinc-400">
                <li>
                  <strong className="text-white">
                    Auskunftsrecht (Art. 15 DSGVO)
                  </strong>{" "}
                  - Sie haben das Recht, eine Bestätigung darüber zu erhalten,
                  ob und welche personenbezogenen Daten wir von Ihnen
                  verarbeiten.
                </li>
                <li>
                  <strong className="text-white">
                    Berichtigungsrecht (Art. 16 DSGVO)
                  </strong>{" "}
                  - Sie haben das Recht, die Berichtigung unrichtiger oder die
                  Vervollständigung unvollständiger Daten zu verlangen.
                </li>
                <li>
                  <strong className="text-white">
                    Löschungsrecht (Art. 17 DSGVO)
                  </strong>{" "}
                  - Sie haben das Recht, die Löschung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>
                <li>
                  <strong className="text-white">
                    Widerspruchsrecht (Art. 21 DSGVO)
                  </strong>{" "}
                  - Sie haben das Recht, gegen die Verarbeitung Ihrer
                  personenbezogenen Daten Widerspruch einzulegen.
                </li>
                <li>
                  <strong className="text-white">
                    Datenübertragbarkeit (Art. 20 DSGVO)
                  </strong>{" "}
                  - Sie haben das Recht, Ihre Daten in einem strukturierten,
                  gängigen und maschinenlesbaren Format zu erhalten.
                </li>
              </ul>

              <div className="rounded-lg bg-blue-900/20 border border-blue-800 p-4">
                <p className="font-semibold text-white mb-1">
                  Beschwerderecht bei der Aufsichtsbehörde
                </p>
                <p>
                  Sie haben das Recht, sich bei einer
                  Datenschutzaufsichtsbehörde zu beschweren. Die zuständige
                  Behörde ist das Bayerische Landesamt für Datenschutzaufsicht
                  (BayLDA), Promenade 18, 91522 Ansbach.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Speicherdauer */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. Speicherdauer
            </h2>
            <div className="space-y-2 text-sm leading-6">
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie es für
                den jeweiligen Verarbeitungszweck erforderlich ist oder
                gesetzliche Aufbewahrungsfristen bestehen:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400">
                <li>Server-Logfiles: 30 Tage</li>
                <li>Kontaktanfragen: 6 Monate nach Erledigung</li>
                <li>Kontodaten aktiver Nutzer: für die Dauer der Nutzung</li>
                <li>
                  Rechnungen und Buchungsdaten: 10 Jahre (gesetzliche
                  Aufbewahrungspflicht gemäß HGB/AO)
                </li>
              </ul>
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
