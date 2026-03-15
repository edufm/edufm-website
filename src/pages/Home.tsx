export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Founder · COO · Builder
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Construo negócios e sistemas na interseção entre tecnologia, dados e direito.
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
          <p className="mt-2 font-medium">Sistemas complexos, estratégia e execution</p>
        </div>
      </div>
    </section>
  )
}
