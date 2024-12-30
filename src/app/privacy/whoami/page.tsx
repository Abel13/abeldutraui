import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>

      <p className="mb-4">
        Esta política de privacidade descreve como coletamos, usamos e
        protegemos suas informações pessoais ao usar o nosso jogo. Respeitamos
        sua privacidade e estamos comprometidos em proteger seus dados.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          1. Informações que Coletamos
        </h2>
        <p>Podemos coletar as seguintes informações ao usar o jogo:</p>
        <ul className="list-disc ml-6">
          <li>
            Informações fornecidas diretamente, como nome de usuário ou email
            (caso sejam necessários).
          </li>
          <li>Dados de uso, como estatísticas de jogo e pontuações.</li>
          <li>
            Informações técnicas, como tipo de dispositivo, sistema operacional
            e idioma.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Como Usamos Suas Informações
        </h2>
        <p>As informações coletadas são utilizadas para:</p>
        <ul className="list-disc ml-6">
          <li>
            Melhorar a experiência do jogo e personalizar funcionalidades.
          </li>
          <li>Fornecer suporte ao usuário.</li>
          <li>
            Realizar análises estatísticas para entender o comportamento dos
            jogadores.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          3. Compartilhamento de Informações
        </h2>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto:
        </p>
        <ul className="list-disc ml-6">
          <li>Quando exigido por lei ou regulamentação.</li>
          <li>
            Com provedores de serviços confiáveis que nos ajudam a operar o
            jogo, sob acordo de confidencialidade.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Cookies e Tecnologias Semelhantes
        </h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes para coletar informações
          sobre sua interação com o jogo, como estatísticas de uso e
          preferências.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Segurança dos Dados</h2>
        <p>
          Implementamos medidas de segurança para proteger suas informações
          contra acessos não autorizados, alterações, divulgações ou
          destruições.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Direitos do Usuário</h2>
        <p>Você tem os seguintes direitos:</p>
        <ul className="list-disc ml-6">
          <li>
            Solicitar acesso, correção ou exclusão de suas informações pessoais.
          </li>
          <li>
            Recusar o uso de cookies por meio das configurações do navegador.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          7. Alterações nesta Política
        </h2>
        <p>
          Podemos atualizar esta política de privacidade periodicamente.
          Notificaremos os usuários sobre mudanças significativas por meio do
          jogo ou de outros canais apropriados.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Contato</h2>
        <p>
          Caso tenha dúvidas ou preocupações sobre esta política, entre em
          contato conosco:
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:suporte@seujogo.com"
            className="text-blue-500 underline"
          >
            suporte@seujogo.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
