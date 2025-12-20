import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPPORT_EMAIL = "contact@abeldutraui.me";
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

if (!RESEND_API_KEY) {
  throw new Error(
    "A variável de ambiente RESEND_API_KEY não está configurada."
  );
}

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios: name, email, message" },
        { status: 400 }
      );
    }

    // Enviar e-mail usando Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: SUPPORT_EMAIL,
      replyTo: email,
      subject: `Suporte: Mensagem de ${name}`,
      text: message,
      html: `<p>${message.replace(
        /\n/g,
        "<br>"
      )}</p><p><strong>De:</strong> ${name} (${email})</p>`,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return NextResponse.json(
        {
          error: `Erro ao enviar e-mail, tente novamente mais tarde. ${JSON.stringify(
            error
          )}`,
        },
        { status: 500 }
      );
    }

    console.log("E-mail enviado com sucesso:", data);

    return NextResponse.json({ success: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      {
        error: `Erro ao enviar e-mail, tente novamente mais tarde. ${JSON.stringify(
          error
        )}`,
      },
      { status: 500 }
    );
  }
}
