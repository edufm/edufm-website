export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Founder · CTO · Quant
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Construo negócios e sistemas na interseção entre tecnologia, dados, finanças e direito.
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Sou Eduardo Ferrari. Trabalho com produto, operações, software e estratégia.
          Escrevo sobre tecnologia, inovação e construção de negócios.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Foco</p>
          <p className="mt-2 font-medium">Tecnologia aplicada a problemas reais</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Hoje</p>
          <p className="mt-2 font-medium">Artemis, crédito, dados e operações</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Interesses</p>
          <p className="mt-2 font-medium">Inovação, estratégia e execução</p>
        </div>
      </div>

      <section className="rounded-[2rem] border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 sm:p-8 lg:p-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 pb-5">
              Background
            </p>

            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Uma trajetória construída em três frentes
            </h2>

            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              De formação técnica e pesquisa aplicada, passando pelo mercado
              financeiro quantitativo, até a construção de negócios baseados em
              tecnologia e dados.
            </p>
          </div>

          <a
            href="/files/CV_Eduardo_Ferrari.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-zinc-800 dark:text-zinc-300"
          >
            Baixar CV
            <span>↗</span>
          </a>
        </div>

        <div className="space-y-8">

          <div className="group relative flex gap-5 pb-8">
            <div className="relative flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <span className="text-lg">⚖️</span>
              </div>
              <div className="absolute top-12 flex h-full flex-col items-center">
                <div className="absolute -top-1 text-zinc-400 dark:text-zinc-500 text-xs">▲</div>
                <div className="h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Empreendedor
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Produto, operação e tecnologia
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                Artemis Technologies
              </p>

              <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
                Hoje atuo na construção da Artemis, unindo software, dados,
                operações e estruturação de negócio para transformar ativos
                judiciais em liquidez. Meu trabalho fica na interface entre
                produto, execução, arquitetura de sistemas e desenvolvimento de
                modelos aplicados a problemas reais do mercado jurídico.
              </p>
            </div>
          </div>

          <div className="group relative flex gap-5 pb-8">
            <div className="relative flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <span className="text-lg">📈</span>
              </div>
              <div className="absolute top-12 flex h-full flex-col items-center">
                <div className="absolute -top-1 text-zinc-400 dark:text-zinc-500 text-xs">▲</div>
                <div className="h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Quant &amp; Mercado Financeiro
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Modelagem, simulação e dados
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                Pandhora · Vector · Itaú Asset
              </p>

              <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
                Atuação em mercado financeiro quantitativo com foco em
                modelagem de ativos, simulação de mercado, estratégias
                sistemáticas e desenvolvimento de infraestrutura de dados para
                análise. Essa etapa consolidou uma forma de pensar orientada por
                hipótese, mensuração, risco e tomada de decisão baseada em
                evidência.
              </p>
            </div>
          </div>

          <div className="group relative flex gap-5">
            <div className="relative flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <span className="text-lg">🎓</span>
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Educação
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Formação técnica e pesquisa aplicada
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                Insper · ICMC/USP · FGV
              </p>

              <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
                Formação em Engenharia Mecânica pelo Insper com foco em
                simulação computacional, ciência de dados e machine learning.
                Depois, especialização em ciência de dados no ICMC/USP, com
                forte base em modelagem, pesquisa quantitativa e construção de
                sistemas analíticos. Hoje, essa base técnica se complementa com
                uma formação executiva em gestão empresarial na FGV.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
