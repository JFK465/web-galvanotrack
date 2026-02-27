import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const betaRegisterSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().min(2, "Firmenname muss mindestens 2 Zeichen haben"),
  employees: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = betaRegisterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Ungültige Eingabe", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, company, employees, message } = parsed.data;

    // In der Beta-Phase: Anfragen loggen
    // In der Produktion: E-Mail-Versand via Resend/Postmark etc.
    console.log("Beta-Registrierung:", {
      name,
      email,
      company,
      employees,
      message,
    });

    // Hier würde in der Produktion die E-Mail-Benachrichtigung stehen:
    // await sendEmail({ to: "info@galvanotrack.de", subject: "Neue Beta-Registrierung", ... })

    return NextResponse.json(
      {
        success: true,
        message:
          "Ihre Beta-Registrierung wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Interner Serverfehler. Bitte versuchen Sie es später erneut." },
      { status: 500 },
    );
  }
}
