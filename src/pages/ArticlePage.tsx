import { Link, useParams } from "react-router-dom"
import { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import { getArticleBySlug } from "../lib/articles"
import { useTranslation } from "react-i18next"


export default function ArticlePage() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams()
  
  const article = useMemo(() => {
    const language = i18n.resolvedLanguage ?? i18n.language
    return slug ? getArticleBySlug(language, slug) : undefined
  }, [i18n.resolvedLanguage, i18n.language, slug])

  if (!article) {
    return (
      <section className="mx-auto max-w-3xl py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d59f2]">
          {t("article.error.label")}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100">
          {t("article.error.title")}
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {t("article.error.description")}
        </p>

        <Link
          to="/articles"
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-slate-800 dark:text-slate-300"
        >
          ← {t("article.back")}
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/articles"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#0d59f2] dark:text-slate-400"
      >
        ← {t("article.back")}
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-8 dark:border-slate-800">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#0d59f2]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0d59f2]">
            {article.category}
          </span>

          <time className="text-sm font-medium text-slate-500 dark:text-slate-500">
            {article.date}
          </time>
        </div>

        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          {article.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
          {article.excerpt}
        </p>

        {article.externalPublicationName && article.externalPublicationUrl ? (
          <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <span>
              {t("article.external.prefix")}{" "}
              <span className="font-semibold">{article.externalPublicationName}</span>
            </span>

            <a
              href={article.externalPublicationUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#0d59f2] transition hover:opacity-80"
            >
              {t("article.external.link")} ↗
            </a>
          </div>
        ) : null}

        {article.image ? (
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </header>

  <div className="prose prose-lg prose-slate mt-10 max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-8 prose-a:text-[#0d59f2]">
    <ReactMarkdown>{article.content}</ReactMarkdown>
  </div>
    </article>
  )
}
