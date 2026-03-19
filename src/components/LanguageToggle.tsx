import { useEffect, useState } from "react"
import i18n, { supportedLanguages, type SiteLanguage } from "../i18n"

export default function LanguageToggle() {
  const [language, setLanguage] = useState<SiteLanguage>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("language") as SiteLanguage | null
    if (saved && supportedLanguages.includes(saved)) {
      setLanguage(saved)
      i18n.changeLanguage(saved)
    }
  }, [])

  function toggleLanguage() {
    const next: SiteLanguage = language === "pt" ? "en" : "pt"
    setLanguage(next)
    i18n.changeLanguage(next)
    localStorage.setItem("language", next)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-zinc-300 px-3 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  )
}
