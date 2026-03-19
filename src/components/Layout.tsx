import type { ReactNode } from "react"
import { NavLink, Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import { useTranslation } from "react-i18next"

type LayoutProps = {
  children: ReactNode
}



export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation()
  
  const navItems = [
    { to: "/", label: t("menu.nav.home"), end: true },
    { to: "/articles", label: t("menu.nav.articles") },
    { to: "/principles", label: t("menu.nav.principles") },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/" className="text-left text-xl font-semibold tracking-tight">
              Eduardo Ferrari
            </Link>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t("menu.nav.eyebrow")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <ThemeToggle />

            <LanguageToggle/>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>© 2026 Eduardo Ferrari</p>
        </footer>
      </div>
    </div>
  )
}
