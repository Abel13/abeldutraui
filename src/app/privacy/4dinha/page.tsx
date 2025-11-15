import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade – 4dinha",
  description:
    "Saiba como o aplicativo 4dinha coleta, utiliza e protege seus dados pessoais.",
};

// =====================
// CONFIGURÁVEIS
// =====================
const COMPANY_NAME = "ABEL DUTRA UI CONSULTORIA LTDA";
const COMPANY_DOCUMENT = "CNPJ 51.580.166/0001-65";
const COMPANY_EMAIL = "suporte@4dinha.com";
const COMPANY_ADDRESS = "Londrina / PR / Brasil";
const LAST_UPDATE = "15 de novembro de 2025";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-slate-800 pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            4dinha
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Última atualização em{" "}
            <span className="font-medium text-slate-100">{LAST_UPDATE}</span>
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-slate-200">
          {/* 1. Controlador */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              1. Controlador dos Dados
            </h2>
            <p className="mt-2">
              O responsável pelo tratamento dos dados pessoais relacionados ao
              aplicativo <span className="font-semibold">4dinha</span> é:
            </p>
            <ul className="mt-2 space-y-1 text-slate-200">
              <li>
                <span className="font-semibold">Nome/Razão Social:</span>{" "}
                {COMPANY_NAME}
              </li>
              <li>
                <span className="font-semibold">CNPJ/CPF:</span>{" "}
                {COMPANY_DOCUMENT}
              </li>
              <li>
                <span className="font-semibold">E-mail de contato:</span>{" "}
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-emerald-400 underline-offset-2 hover:underline"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <span className="font-semibold">Endereço:</span>{" "}
                {COMPANY_ADDRESS}
              </li>
            </ul>
          </section>

          {/* 2. Dados que Coletamos */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              2. Dados que Coletamos
            </h2>
            <p className="mt-2">
              Podemos coletar diferentes tipos de dados, dependendo de como você
              utiliza o aplicativo 4dinha.
            </p>

            <h3 className="mt-4 text-base font-semibold text-slate-50">
              2.1. Dados de Cadastro e Conta
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nome ou apelido (username)</li>
              <li>E-mail</li>
              <li>
                Senha (quando aplicável) ou dados de autenticação via terceiros
                / provedores (ex.: login via Supabase, magic link)
              </li>
              <li>Avatar ou imagem de perfil (incluindo avatares gerados)</li>
              <li>
                Dados básicos de perfil, como idioma e país, se informados
              </li>
            </ul>

            <h3 className="mt-4 text-base font-semibold text-slate-50">
              2.2. Dados de Jogo e Ranqueamento
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Partidas jogadas, vitórias, derrotas e empates</li>
              <li>Pontuação, tier/elo, liga e posição no ranking</li>
              <li>Histórico de resultados e estatísticas da conta</li>
              <li>Conquistas, badges e progressão no jogo</li>
              <li>
                Preferências de jogo (som, idioma, configurações de partida)
              </li>
            </ul>
            <p className="mt-2 text-slate-300">
              <span className="font-semibold">Observação:</span> username,
              avatar e parte das estatísticas de ranking podem ser exibidos
              publicamente dentro do app (por exemplo, na tela de ranking).
            </p>

            <h3 className="mt-4 text-base font-semibold text-slate-50">
              2.3. Dados Técnicos e de Uso
            </h3>
            <p className="mt-2">
              Coletamos automaticamente alguns dados para manter o aplicativo
              funcionando e melhorar a experiência:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Informações do dispositivo (modelo, sistema operacional)</li>
              <li>
                Identificadores de app e usuário (IDs internos, ID de sessão)
              </li>
              <li>Logs de erro e informações de desempenho</li>
              <li>Data e hora de acesso</li>
              <li>Versão do aplicativo instalada</li>
            </ul>

            <h3 className="mt-4 text-base font-semibold text-slate-50">
              2.4. Dados de Suporte e Contato
            </h3>
            <p className="mt-2">
              Ao entrar em contato conosco, podemos coletar:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nome</li>
              <li>E-mail</li>
              <li>Conteúdo da mensagem e anexos eventualmente enviados</li>
              <li>
                Informações sobre o dispositivo ou conta para fins de suporte
              </li>
            </ul>
          </section>

          {/* 3. Bases Legais */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              3. Bases Legais para o Tratamento (LGPD)
            </h2>
            <p className="mt-2">
              Tratamos seus dados pessoais com base nas seguintes bases legais:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Execução de contrato:</span>{" "}
                para disponibilizar o jogo, gerenciar sua conta e ranking.
              </li>
              <li>
                <span className="font-semibold">Legítimo interesse:</span> para
                melhorar o app, garantir segurança, prevenir fraudes e monitorar
                o funcionamento do serviço.
              </li>
              <li>
                <span className="font-semibold">Consentimento:</span> quando
                necessário, por exemplo, para envio de comunicações
                promocionais, se aplicável.
              </li>
              <li>
                <span className="font-semibold">
                  Cumprimento de obrigação legal:
                </span>{" "}
                quando formos obrigados a manter ou fornecer dados para
                autoridades.
              </li>
            </ul>
          </section>

          {/* 4. Como Utilizamos */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              4. Como Utilizamos seus Dados
            </h2>
            <p className="mt-2">Utilizamos seus dados pessoais para:</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5">
              <li>
                <span className="font-semibold">
                  Fornecer e operar o aplicativo:
                </span>{" "}
                criar e gerenciar sua conta, permitir que você jogue, calcular
                pontos e ranking.
              </li>
              <li>
                <span className="font-semibold">
                  Melhorar a experiência de jogo:
                </span>{" "}
                analisar estatísticas, ajustar balanceamento e corrigir bugs.
              </li>
              <li>
                <span className="font-semibold">
                  Segurança e prevenção de abuso:
                </span>{" "}
                detectar trapaças, uso indevido e violação de termos.
              </li>
              <li>
                <span className="font-semibold">Comunicação:</span> responder
                solicitações de suporte e enviar avisos importantes sobre o
                serviço.
              </li>
            </ol>
          </section>

          {/* 5. Compartilhamento */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              5. Compartilhamento de Dados
            </h2>
            <p className="mt-2">
              Não vendemos seus dados pessoais. Podemos compartilhá-los nas
              seguintes situações:
            </p>
            <h3 className="mt-3 text-base font-semibold text-slate-50">
              5.1. Fornecedores e Processadores
            </h3>
            <p className="mt-2">
              Utilizamos serviços de terceiros para infraestrutura, banco de
              dados e análises, como, por exemplo, plataformas de backend e
              monitoramento. Esses terceiros atuam como{" "}
              <span className="font-semibold">operadores de dados</span>,
              seguindo nossas instruções e com medidas de segurança adequadas.
            </p>

            <h3 className="mt-3 text-base font-semibold text-slate-50">
              5.2. Autoridades e Obrigações Legais
            </h3>
            <p className="mt-2">
              Podemos compartilhar dados quando necessário para cumprir leis,
              regulamentos, ordens judiciais ou solicitações de autoridades
              competentes, ou ainda para proteger nossos direitos, os de outros
              usuários e de terceiros.
            </p>

            <h3 className="mt-3 text-base font-semibold text-slate-50">
              5.3. Reorganização Societária
            </h3>
            <p className="mt-2">
              Em eventuais operações de fusão, aquisição ou venda de ativos, os
              dados poderão ser transferidos, respeitando a legislação aplicável
              e mantendo o nível de proteção desta Política.
            </p>
          </section>

          {/* 6. Informações Públicas */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              6. Informações Públicas no App
            </h2>
            <p className="mt-2">
              Algumas informações podem ser exibidas publicamente dentro do
              4dinha, como:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Username</li>
              <li>Avatar</li>
              <li>Posição no ranking, tier/elo e estatísticas resumidas</li>
            </ul>
            <p className="mt-2 text-slate-300">
              Se você não quiser expor seu nome real, recomendamos utilizar um{" "}
              <span className="font-semibold">apelido</span>.
            </p>
          </section>

          {/* 7. Armazenamento e Segurança */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              7. Armazenamento, Segurança e Retenção
            </h2>

            <h3 className="mt-3 text-base font-semibold text-slate-50">
              7.1. Segurança
            </h3>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acessos não autorizados, perda, destruição ou
              alteração. No entanto, nenhum sistema é totalmente seguro, e
              buscamos continuamente reduzir riscos.
            </p>

            <h3 className="mt-3 text-base font-semibold text-slate-50">
              7.2. Local de Armazenamento e Transferência Internacional
            </h3>
            <p className="mt-2">
              Seus dados podem ser armazenados em servidores localizados fora do
              Brasil, por meio de provedores de infraestrutura. Nesses casos,
              buscamos garantir nível de proteção adequado em conformidade com a
              LGPD.
            </p>

            <h3 className="mt-3 text-base font-semibold text-slate-50">
              7.3. Prazo de Retenção
            </h3>
            <p className="mt-2">
              Manteremos seus dados pelo tempo necessário para cumprir as
              finalidades desta Política, enquanto sua conta estiver ativa ou
              pelo período exigido por obrigações legais e para defesa em
              processos. Após esse período, os dados podem ser excluídos ou
              anonimizados.
            </p>
          </section>

          {/* 8. Direitos do Titular */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              8. Seus Direitos como Titular de Dados
            </h2>
            <p className="mt-2">
              Nos termos da LGPD, você possui, entre outros, os seguintes
              direitos:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Confirmar a existência de tratamento de dados pessoais</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>
                Solicitar anonimização, bloqueio ou eliminação de dados
                desnecessários, excessivos ou tratados em desconformidade
              </li>
              <li>
                Solicitar portabilidade dos dados a outro fornecedor, quando
                aplicável
              </li>
              <li>
                Solicitar eliminação de dados tratados com base no consentimento
              </li>
              <li>
                Obter informações sobre o compartilhamento de dados com
                entidades públicas e privadas
              </li>
              <li>Revogar consentimento, quando for a base legal aplicável</li>
            </ul>
            <p className="mt-2">
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="font-medium text-emerald-400 underline-offset-2 hover:underline"
              >
                {COMPANY_EMAIL}
              </a>
              .
            </p>
          </section>

          {/* 9. Crianças e Adolescentes */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              9. Crianças e Adolescentes
            </h2>
            <p className="mt-2">
              O 4dinha não é direcionado especificamente a crianças menores de
              13 anos. Se você for menor de 18 anos, utilize o aplicativo apenas
              com autorização e supervisão de seus pais ou responsáveis legais.
            </p>
            <p className="mt-2">
              Caso identifiquemos dados de crianças coletados de forma
              inadequada, poderemos removê-los e tomar as medidas cabíveis,
              incluindo bloqueio da conta relacionada, se necessário.
            </p>
            <p className="mt-2">
              Pais ou responsáveis que suspeitem que seus filhos forneceram
              dados pessoais sem consentimento podem nos contatar em{" "}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="font-medium text-emerald-400 underline-offset-2 hover:underline"
              >
                {COMPANY_EMAIL}
              </a>
              .
            </p>
          </section>

          {/* 10. Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              10. Cookies e Tecnologias Semelhantes
            </h2>
            <p className="mt-2">
              Caso o 4dinha possua versão web ou PWA, podemos utilizar cookies,
              local storage e tecnologias semelhantes para:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Manter sua sessão autenticada</li>
              <li>Guardar preferências de usuário</li>
              <li>Gerar estatísticas agregadas de uso</li>
            </ul>
            <p className="mt-2">
              Você pode gerenciar cookies nas configurações do seu navegador ou
              dispositivo. No entanto, algumas funcionalidades podem ser
              impactadas se você desativá-los completamente.
            </p>
          </section>

          {/* 11. Alterações */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              11. Alterações nesta Política
            </h2>
            <p className="mt-2">
              Podemos atualizar esta Política de Privacidade periodicamente para
              refletir mudanças no aplicativo, em requisitos legais ou em nossos
              processos internos. Sempre que isso ocorrer, publicaremos a nova
              versão com a data de atualização revisada.
            </p>
            <p className="mt-2">
              O uso contínuo do 4dinha após a publicação das alterações será
              considerado como aceitação da nova Política.
            </p>
          </section>

          {/* 12. Contato */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">12. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas, solicitações ou para exercer seus direitos
              como titular de dados, entre em contato:
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <span className="font-semibold">Nome/Razão Social:</span>{" "}
                {COMPANY_NAME}
              </li>
              <li>
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-emerald-400 underline-offset-2 hover:underline"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <span className="font-semibold">Endereço:</span>{" "}
                {COMPANY_ADDRESS}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
