"use client";

import React, { useState } from "react";

const APPLICATION_ID = process.env.NEXT_PUBLIC_4DINHA_APP_ID ?? "";

type DeleteResponse = {
  success: boolean;
  message?: string;
};

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConfirmChecked, setIsConfirmChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setErrorMessage("Preencha e-mail e senha para continuar.");
      return;
    }

    if (!isConfirmChecked) {
      setErrorMessage(
        "Você precisa confirmar que entende que essa ação é permanente."
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          appId: APPLICATION_ID,
        }),
      });

      const data = (await response.json()) as DeleteResponse;

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.message ||
            "Não foi possível excluir a conta. Verifique os dados e tente novamente."
        );
      } else {
        setSuccessMessage(
          data.message || "Sua conta foi excluída com sucesso."
        );
        setEmail("");
        setPassword("");
        setIsConfirmChecked(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Ocorreu um erro inesperado ao tentar excluir sua conta. Tente novamente em alguns instantes."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-400">
            4dinha
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Exclusão de Conta
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Nesta página você pode solicitar a exclusão permanente da sua conta
            vinculada ao 4dinha.
          </p>
        </header>

        {/* Aviso de risco */}
        <section className="mb-6 rounded-lg border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-sm text-rose-100">
          <h2 className="mb-1 text-base font-semibold text-rose-100">
            Atenção: ação permanente
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-rose-50/90">
            <li>A exclusão é irreversível.</li>
            <li>
              Seus dados de jogo, ranking e histórico poderão ser removidos ou
              anonimizados, conforme nossa Política de Privacidade.
            </li>
            <li>Você perderá o acesso à sua conta e progressão no 4dinha.</li>
          </ul>
        </section>

        {/* Mensagens de feedback */}
        {errorMessage && (
          <div className="mb-4 rounded-md border border-rose-600/70 bg-rose-950/60 px-4 py-3 text-sm text-rose-100">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 rounded-md border border-emerald-600/70 bg-emerald-950/60 px-4 py-3 text-sm text-emerald-100">
            {successMessage}
          </div>
        )}

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-5 shadow-lg shadow-slate-950/40"
        >
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-100"
            >
              E-mail da conta
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/60"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-100"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/60"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          {/* appId somente leitura / debug opcional */}
          <div className="space-y-1 text-xs text-slate-400">
            <p className="font-medium text-slate-300">
              ID da Aplicação (interno)
            </p>
            <p className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 font-mono text-[11px]">
              {APPLICATION_ID}
            </p>
            <p className="text-[11px] text-slate-500">
              Este identificador é enviado automaticamente para o servidor para
              localizar o Supabase vinculado ao 4dinha.
            </p>
          </div>

          <div className="flex items-start gap-2 rounded-md bg-slate-900/60 p-3">
            <input
              id="confirm"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-rose-500 focus:ring-rose-500"
              checked={isConfirmChecked}
              onChange={(e) => setIsConfirmChecked(e.target.checked)}
              disabled={isLoading}
            />
            <label
              htmlFor="confirm"
              className="text-xs text-slate-200 sm:text-sm"
            >
              Eu entendo que esta ação é{" "}
              <span className="font-semibold text-rose-300">
                permanente e irreversível
              </span>{" "}
              e desejo prosseguir com a exclusão da minha conta.
            </label>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              Caso tenha dúvidas, entre em contato pelo suporte antes de
              confirmar a exclusão.
            </p>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-md border border-rose-500/70 bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-rose-900/40 transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800"
            >
              {isLoading
                ? "Excluindo conta..."
                : "Excluir conta permanentemente"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
