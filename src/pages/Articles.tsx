import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { getAllArticles } from "../lib/articles"
import { useTranslation } from "react-i18next"

export default function Articles() {
  const { t, i18n } = useTranslation()
  const [query, setQuery] = useState("")
  
  const articles = useMemo(() => {
    return getAllArticles(i18n.resolvedLanguage ?? i18n.language)
  }, [i18n.resolvedLanguage, i18n.language])

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
  }, [articles, query])

  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          {t("articles.top.title")}
        </h1>

        <div className="w-full max-w-md">
          <label className="flex h-12 w-full items-center overflow-hidden rounded-xl border border-slate-200 backdrop-blur-sm transition focus-within:border-[#0d59f2] dark:border-slate-800">
            <span className="px-4 text-slate-400">⌕</span>
            <input
              type="text"
              placeholder={t("articles.search.placeholder")}
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
            key={article.slug}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:shadow-black/20 sm:p-6"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              <div className="w-full shrink-0 md:w-[320px]">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#0d59f2]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0d59f2]">
                    {article.category}
                  </span>

                  <time className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {article.date}
                  </time>

                  <span className="text-slate-400">•</span>

                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {article.readingTime} {t("articles.info.readTime")}
                  </span>

                  {article.externalPublicationName ? (
                    <>
                      <span className="text-slate-400">•</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {t("articles.info.publishedAt")}{" "}
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {article.externalPublicationName}
                        </span>
                      </span>
                    </>
                  ) : null}
                </div>

                <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-[#0d59f2] dark:text-slate-100 sm:text-3xl">
                  {article.title}
                </h2>

                <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  {article.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#0d59f2]"
                  >
                    {t("articles.info.read")}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
