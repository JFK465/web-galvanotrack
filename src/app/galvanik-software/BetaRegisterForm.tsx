"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().min(2, "Firmenname muss mindestens 2 Zeichen haben"),
  employees: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function BetaRegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const res = await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        setError(json.error || "Ein Fehler ist aufgetreten.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Netzwerkfehler. Bitte versuchen Sie es später erneut.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-400" />
        <h3 className="text-xl font-bold text-white">
          Vielen Dank für Ihre Anmeldung!
        </h3>
        <p className="text-zinc-400 max-w-md">
          Ihre Beta-Registrierung ist eingegangen. Wir melden uns in Kürze per
          E-Mail bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Ihr Name *
          </label>
          <input
            {...register("name")}
            placeholder="Max Mustermann"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            E-Mail-Adresse *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="m.mustermann@firma.de"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Firma *
          </label>
          <input
            {...register("company")}
            placeholder="Galvanik Muster GmbH"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {errors.company && (
            <p className="text-red-400 text-xs mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Mitarbeiterzahl
          </label>
          <select
            {...register("employees")}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Bitte wählen</option>
            <option value="1-10">1–10 Mitarbeiter</option>
            <option value="11-50">11–50 Mitarbeiter</option>
            <option value="51-200">51–200 Mitarbeiter</option>
            <option value="200+">Mehr als 200</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Ihre aktuelle Herausforderung (optional)
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Was beschäftigt Sie in der Dokumentation und Rückverfolgbarkeit?"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            Jetzt für Beta anmelden
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-xs text-zinc-500 text-center">
        Keine Kreditkarte erforderlich. Kostenlos in der Beta-Phase.
      </p>
    </form>
  );
}
