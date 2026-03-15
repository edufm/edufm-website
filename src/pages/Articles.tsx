import { useMemo, useState } from "react"
import { articles } from "../data/articles"

export default function Articles() {
  const [query, setQuery] = useState("")

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) return articles

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(normalized) ||
        article.category.toLowerCase().includes(normalized) ||
        article.excerpt.toLowerCase().includes(normalized)
      )
    })
  }, [query])

  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0d59f2]">
            Escrita
          </p>

          <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Artigos e reflexões
          </h1>

          <p className="text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Ideias sobre tecnologia, inovação, sistemas complexos, construção de
            produtos e negócios.
          </p>
        </div>

        <div className="w-full max-w-md">
          <label className="flex h-12 w-full items-center overflow-hidden rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm transition focus-within:border-[#0d59f2] dark:border-slate-800 dark:bg-slate-900/80">
            <span className="px-4 text-slate-400">⌕</span>
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-full w-full border-none bg-transparent pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700 dark:hover:shadow-black/20 sm:p-6"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              <div className="w-full shrink-0 md:w-[320px]">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#0d59f2]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0d59f2]">
                    {article.category}
                  </span>

                  <time className="text-sm font-medium text-slate-500 dark:text-slate-500">
                    {article.date}
                  </time>
                </div>

                <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-[#0d59f2] dark:text-slate-100 sm:text-3xl">
                  {article.title}
                </h2>

                <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  {article.excerpt}
                </p>

                <div className="mt-auto">
                  <a
                    href={article.href}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#0d59f2]"
                  >
                    Ler artigo
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-14 text-center dark:border-slate-700">
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Nenhum artigo encontrado
          </p>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Tente buscar por outro termo.
          </p>
        </div>
      )}

      <div className="mt-12 flex items-center justify-center gap-2">
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          ←
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d59f2] font-bold text-white">
          1
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-slate-600 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          2
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-slate-600 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          3
        </button>

        <span className="px-1 text-slate-400">...</span>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-slate-600 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          12
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          →
        </button>
      </div>
    </section>
  )
}
