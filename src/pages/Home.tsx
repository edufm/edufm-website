import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {t("home.hero.eyebrow")}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("home.hero.title")}
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {t("home.hero.subtitle")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t("home.highlights.focus.label")}
          </p>
          <p className="mt-2 font-medium">
            {t("home.highlights.focus.value")}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t("home.highlights.now.label")}
          </p>
          <p className="mt-2 font-medium">
            {t("home.highlights.now.value")}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t("home.highlights.interests.label")}
          </p>
          <p className="mt-2 font-medium">
            {t("home.highlights.interests.value")}
          </p>
        </div>
      </div>

      <section className="rounded-[2rem] border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 sm:p-8 lg:p-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="pb-5 text-sm text-zinc-500 dark:text-zinc-400">
              {t("home.background.eyebrow")}
            </p>

            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              {t("home.background.title")}
            </h2>

            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              {t("home.background.subtitle")}
            </p>
          </div>

          <a
            href={t("home.background.cvUrl")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-[#0d59f2] hover:text-[#0d59f2] dark:border-zinc-800 dark:text-zinc-300"
          >
            {t("home.background.downloadCv")}
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
                <div className="absolute -top-1 text-xs text-zinc-400 dark:text-zinc-500">
                  ▲
                </div>
                <div className="h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t("home.background.entrepreneur.title")}
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t("home.background.entrepreneur.meta")}
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                {t("home.background.entrepreneur.org")}
              </p>

              <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
                {t("home.background.entrepreneur.description")}
              </p>
            </div>
          </div>

          <div className="group relative flex gap-5 pb-8">
            <div className="relative flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <span className="text-lg">📈</span>
              </div>
              <div className="absolute top-12 flex h-full flex-col items-center">
                <div className="absolute -top-1 text-xs text-zinc-400 dark:text-zinc-500">
                  ▲
                </div>
                <div className="h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t("home.background.quant.title")}
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t("home.background.quant.meta")}
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                {t("home.background.quant.org")}
              </p>

              <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
                {t("home.background.quant.description")}
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
                  {t("home.background.education.title")}
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t("home.background.education.meta")}
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                {t("home.background.education.org")}
              </p>

              <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
                {t("home.background.education.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
