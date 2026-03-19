import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { getPrinciples } from "../lib/principles"

export default function Principles() {
  const { t, i18n } = useTranslation()

  const principles = useMemo(() => {
    const language = i18n.resolvedLanguage ?? i18n.language
    return getPrinciples(language)
  }, [i18n.resolvedLanguage, i18n.language])

  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          {t("principles.top.title")}
        </h1>
      </div>

      <div className="grid gap-5">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-3xl border border-zinc-200 p-6 shadow-sm transition hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 sm:p-8"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {principle.title}
              </h2>

              <p className="mt-3 text-base font-medium leading-7 text-[#0d59f2]">
                {principle.summary}
              </p>
            </div>

            <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}