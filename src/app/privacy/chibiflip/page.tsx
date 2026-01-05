export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] px-6 py-12 text-[#6B4B7A]">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-[#6B4B7A]">
          Política de Privacidade
        </h1>

        <p className="mb-4 text-sm text-[#6B4B7A]/80">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section className="space-y-4 text-base leading-relaxed">
          <p>
            O <strong>Chibi Flip</strong> respeita a sua privacidade e está
            comprometido em proteger os dados dos seus usuários. Esta Política
            de Privacidade descreve como as informações são tratadas ao utilizar
            nosso jogo.
          </p>

          <h2 className="text-xl font-semibold">1. Coleta de Informações</h2>
          <p>
            O Chibi Flip <strong>não coleta informações pessoais</strong> como
            nome, e-mail, número de telefone ou localização precisa.
          </p>
          <p>
            Podemos coletar apenas dados anônimos e agregados, como informações
            de desempenho do jogo (ex: níveis concluídos, tempo de jogo), com o
            objetivo de melhorar a experiência do usuário.
          </p>

          <h2 className="text-xl font-semibold">2. Uso das Informações</h2>
          <p>As informações coletadas são utilizadas exclusivamente para:</p>
          <ul className="list-disc pl-6">
            <li>Melhorar o desempenho e estabilidade do jogo</li>
            <li>Corrigir erros e bugs</li>
            <li>Aprimorar a experiência do usuário</li>
          </ul>

          <h2 className="text-xl font-semibold">
            3. Compartilhamento de Dados
          </h2>
          <p>
            O Chibi Flip <strong>não compartilha</strong> dados pessoais com
            terceiros.
          </p>
          <p>
            Caso o jogo utilize serviços de terceiros (como anúncios ou
            analytics), estes podem coletar dados de forma anônima, de acordo
            com suas próprias políticas de privacidade.
          </p>

          <h2 className="text-xl font-semibold">4. Publicidade</h2>
          <p>
            O jogo pode exibir anúncios fornecidos por plataformas terceiras.
            Esses serviços podem usar identificadores anônimos para exibir
            anúncios relevantes.
          </p>

          <h2 className="text-xl font-semibold">5. Privacidade de Crianças</h2>
          <p>
            O Chibi Flip é um jogo adequado para todas as idades. Não coletamos
            intencionalmente dados pessoais de crianças. Caso algum responsável
            identifique qualquer coleta indevida, entre em contato para que
            possamos remover as informações.
          </p>

          <h2 className="text-xl font-semibold">
            6. Alterações nesta Política
          </h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente.
            Recomendamos que o usuário revise esta página regularmente para se
            manter informado sobre quaisquer alterações.
          </p>

          <h2 className="text-xl font-semibold">7. Contato</h2>
          <p>
            Caso tenha dúvidas sobre esta Política de Privacidade, entre em
            contato através do e-mail:
          </p>
          <p className="font-medium">📧 contact@abeldutraui.me</p>
        </section>
      </div>
    </main>
  );
}
