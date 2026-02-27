"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

interface CheckItem {
  id: string;
  question: string;
  weight: number; // 1-3 (3 = critical)
}

interface CheckGroup {
  title: string;
  items: CheckItem[];
}

const checkGroups: CheckGroup[] = [
  {
    title: "Chargenverfolgung & Rückverfolgbarkeit",
    items: [
      {
        id: "c1",
        question:
          "Wird für jede Charge eine eindeutige Chargennummer vergeben?",
        weight: 3,
      },
      {
        id: "c2",
        question:
          "Werden Badzusammensetzung und Prozessparameter (Temperatur, pH, Strom) bei jedem Durchgang dokumentiert?",
        weight: 3,
      },
      {
        id: "c3",
        question:
          "Ist die Rückverfolgung von der Materiallieferung bis zum Versand lückenlos möglich?",
        weight: 3,
      },
      {
        id: "c4",
        question:
          "Können Sie innerhalb von 2 Stunden alle betroffenen Kunden bei einem Qualitätsproblem identifizieren?",
        weight: 2,
      },
      {
        id: "c5",
        question: "Werden Mitarbeiter-IDs bei der Chargenbearbeitung erfasst?",
        weight: 2,
      },
    ],
  },
  {
    title: "Prüfprotokolle & Qualitätsdokumentation",
    items: [
      {
        id: "p1",
        question:
          "Werden Schichtdicken an definierten Messpunkten gemessen und dokumentiert?",
        weight: 3,
      },
      {
        id: "p2",
        question:
          "Sind alle eingesetzten Messgeräte kalibriert und sind Kalibrierprotokolle vorhanden?",
        weight: 3,
      },
      {
        id: "p3",
        question:
          "Werden Nichtkonformitäten (n.i.O.-Teile) systematisch erfasst und Korrekturmaßnahmen dokumentiert?",
        weight: 2,
      },
      {
        id: "p4",
        question:
          "Können Prüfprotokolle einem bestimmten Auftrag und einer Charge zugeordnet werden?",
        weight: 3,
      },
      {
        id: "p5",
        question:
          "Ist ein Stichprobenplan für die Serienfertigung definiert und dokumentiert?",
        weight: 2,
      },
    ],
  },
  {
    title: "Dokumentation & Aufbewahrung",
    items: [
      {
        id: "d1",
        question:
          "Werden alle Prozessdokumente mit Versions- und Freigabedatum verwaltet?",
        weight: 2,
      },
      {
        id: "d2",
        question:
          "Ist bekannt, wie lange welche Dokumente aufbewahrt werden müssen?",
        weight: 2,
      },
      {
        id: "d3",
        question:
          "Werden Chargenaufzeichnungen mindestens 5 Jahre aufbewahrt (bei IATF: 15 Jahre)?",
        weight: 3,
      },
      {
        id: "d4",
        question:
          "Sind Arbeitsanweisungen an den Arbeitsplätzen verfügbar und aktuell?",
        weight: 2,
      },
      {
        id: "d5",
        question:
          "Können Audit-Unterlagen (Chargenprotokolle, Prüfberichte) innerhalb von 24 Stunden zusammengestellt werden?",
        weight: 2,
      },
    ],
  },
  {
    title: "Prozessbeherrschung",
    items: [
      {
        id: "pb1",
        question:
          "Werden Badparameter (pH, Konzentration, Temperatur) regelmäßig analysiert und dokumentiert?",
        weight: 3,
      },
      {
        id: "pb2",
        question:
          "Gibt es dokumentierte Reaktionspläne für den Fall, dass Parameter außerhalb der Spezifikation liegen?",
        weight: 2,
      },
      {
        id: "pb3",
        question:
          "Sind Spülwasser-Qualitätsanforderungen definiert und werden sie überwacht?",
        weight: 2,
      },
      {
        id: "pb4",
        question:
          "Werden Änderungen an Badzusammensetzung oder Prozessparametern dokumentiert und freigegeben?",
        weight: 3,
      },
    ],
  },
  {
    title: "Mitarbeiter & Schulung",
    items: [
      {
        id: "m1",
        question:
          "Gibt es Nachweise über Mitarbeiterschulungen für Gefahrstoffhandling?",
        weight: 3,
      },
      {
        id: "m2",
        question:
          "Sind Betriebsanweisungen für alle relevanten Tätigkeiten vorhanden?",
        weight: 2,
      },
      {
        id: "m3",
        question:
          "Können Mitarbeiter selbständig Qualitätsprobleme erkennen und eskalieren?",
        weight: 2,
      },
    ],
  },
];

type AnswerValue = "yes" | "partial" | "no" | undefined;
type Answers = Record<string, AnswerValue>;

interface ScoreResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: "high" | "medium" | "low";
  criticalMissing: string[];
}

function calculateScore(answers: Answers): ScoreResult {
  let score = 0;
  let maxScore = 0;
  const criticalMissing: string[] = [];

  for (const group of checkGroups) {
    for (const item of group.items) {
      const answer = answers[item.id];
      const itemMax = item.weight * 2;
      maxScore += itemMax;

      if (answer === "yes") {
        score += itemMax;
      } else if (answer === "partial") {
        score += item.weight;
      } else if (answer === "no" || answer === undefined) {
        if (item.weight === 3) {
          criticalMissing.push(item.question);
        }
      }
    }
  }

  const percentage = Math.round((score / maxScore) * 100);
  const level = percentage >= 80 ? "high" : percentage >= 50 ? "medium" : "low";

  return { score, maxScore, percentage, level, criticalMissing };
}

export function AuditCheckTool() {
  const [answers, setAnswers] = useState<Answers>({});
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({
    0: true,
  });
  const [showResult, setShowResult] = useState(false);

  const { handleSubmit } = useForm();

  const totalItems = checkGroups.reduce((sum, g) => sum + g.items.length, 0);
  const answeredItems = Object.keys(answers).length;
  const progress = Math.round((answeredItems / totalItems) * 100);

  const setAnswer = (id: string, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const toggleGroup = (index: number) => {
    setOpenGroups((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const onSubmit = () => {
    setShowResult(true);
    setTimeout(() => {
      document
        .getElementById("audit-result")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const result = calculateScore(answers);

  const levelConfig = {
    high: {
      label: "Gut aufgestellt",
      color: "text-green-400",
      bg: "bg-green-900/20 border-green-800/40",
      desc: "Ihr Betrieb erfüllt die wesentlichen Audit-Anforderungen. Optimieren Sie die verbleibenden Lücken für ein optimales Ergebnis.",
    },
    medium: {
      label: "Verbesserungsbedarf",
      color: "text-yellow-400",
      bg: "bg-yellow-900/20 border-yellow-800/40",
      desc: "Es gibt erkennbare Lücken, die vor einem Audit geschlossen werden sollten. Besonders bei kritischen Punkten.",
    },
    low: {
      label: "Dringender Handlungsbedarf",
      color: "text-red-400",
      bg: "bg-red-900/20 border-red-800/40",
      desc: "Mehrere kritische Anforderungen sind nicht erfüllt. Ein ISO- oder IATF-Audit wäre in diesem Zustand riskant.",
    },
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Fortschritt */}
      <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-zinc-400">
            {answeredItems} von {totalItems} Fragen beantwortet
          </span>
          <span className="text-sm font-medium text-white">{progress}%</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {checkGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleGroup(groupIndex)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-white">{group.title}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">
                  {
                    group.items.filter((i) => answers[i.id] !== undefined)
                      .length
                  }
                  /{group.items.length}
                </span>
                {openGroups[groupIndex] ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </div>
            </button>

            {openGroups[groupIndex] && (
              <div className="border-t border-zinc-800 divide-y divide-zinc-800">
                {group.items.map((item) => (
                  <div key={item.id} className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      {item.weight === 3 && (
                        <span className="flex-shrink-0 text-xs bg-red-900/30 text-red-400 border border-red-800/30 rounded px-1.5 py-0.5 mt-0.5">
                          Kritisch
                        </span>
                      )}
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.question}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      {(
                        [
                          {
                            value: "yes" as AnswerValue,
                            label: "Ja",
                            activeClass:
                              "border-green-500 bg-green-900/20 text-green-300",
                          },
                          {
                            value: "partial" as AnswerValue,
                            label: "Teilweise",
                            activeClass:
                              "border-yellow-500 bg-yellow-900/20 text-yellow-300",
                          },
                          {
                            value: "no" as AnswerValue,
                            label: "Nein",
                            activeClass:
                              "border-red-500 bg-red-900/20 text-red-300",
                          },
                        ] as const
                      ).map(({ value, label, activeClass }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setAnswer(item.id, value)}
                          className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                            answers[item.id] === value
                              ? activeClass
                              : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={answeredItems < totalItems}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-xl transition-colors"
        >
          Auswertung anzeigen
          <ArrowRight className="w-4 h-4" />
        </button>
        {answeredItems < totalItems && (
          <p className="text-center text-xs text-zinc-500">
            Bitte beantworten Sie alle {totalItems} Fragen.
          </p>
        )}
      </form>

      {showResult && (
        <div id="audit-result" className="mt-10 space-y-6">
          {/* Score Card */}
          <div
            className={`rounded-2xl border p-8 text-center ${levelConfig[result.level].bg}`}
          >
            <div className="text-5xl font-bold mb-2">
              <span className={levelConfig[result.level].color}>
                {result.percentage}%
              </span>
            </div>
            <div
              className={`text-lg font-semibold mb-3 ${levelConfig[result.level].color}`}
            >
              {levelConfig[result.level].label}
            </div>
            <p className="text-zinc-400 max-w-md mx-auto text-sm">
              {levelConfig[result.level].desc}
            </p>
          </div>

          {/* Kritische Lücken */}
          {result.criticalMissing.length > 0 && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                Kritische Lücken ({result.criticalMissing.length})
              </h3>
              <ul className="space-y-3">
                {result.criticalMissing.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Empfehlungen */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              Empfehlungen für Ihren Betrieb
            </h3>
            <ul className="space-y-3">
              {result.percentage < 80 && (
                <li className="flex items-start gap-3 text-sm text-zinc-400">
                  <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Digitalisieren Sie Ihre Chargenerfassung – Papier-Laufzettel
                  können kritische Dokumentationslücken verursachen.
                </li>
              )}
              {result.criticalMissing.some((q) => q.includes("Messg")) && (
                <li className="flex items-start gap-3 text-sm text-zinc-400">
                  <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Implementieren Sie ein Messmittel-Kalibrierungssystem mit
                  digitalen Protokollen.
                </li>
              )}
              {result.criticalMissing.some((q) => q.includes("Rückver")) && (
                <li className="flex items-start gap-3 text-sm text-zinc-400">
                  <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Einführung eines QR-Code-basierten Tracking-Systems für
                  lückenlose Rückverfolgbarkeit.
                </li>
              )}
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                GalvanoTrack deckt alle kritischen Dokumentationsanforderungen
                ab – von der Chargenverfolgung bis zum Audit-Export.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-8 text-center border border-blue-800/30">
            <h3 className="text-xl font-bold text-white mb-3">
              Lücken schließen mit GalvanoTrack
            </h3>
            <p className="text-zinc-400 mb-6 text-sm">
              GalvanoTrack löst die häufigsten Audit-Schwachstellen automatisch.
              Sprechen Sie mit uns über Ihren spezifischen Bedarf.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                Kostenlose Demo starten
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/galvanik-software"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-lg font-medium hover:border-zinc-500 transition-colors text-sm"
              >
                Zur Beta-Anmeldung
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
