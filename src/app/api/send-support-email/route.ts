import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const SUPPORT_EMAIL = "contac@abeldutraui.me";

if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error("As variáveis de ambiente não estão configuradas.");
}

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

    // Configurar o transporte do nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use o serviço de e-mail necessário
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Enviar e-mail
    const mailOptions = {
      from: email,
      to: SUPPORT_EMAIL,
      subject: `Suporte: Mensagem de ${name}`,
      text: message,
    };

    const response = await transporter.sendMail(mailOptions);

    console.log("E-mail enviado com sucesso:", response);

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
