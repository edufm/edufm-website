import type { ReactNode } from "react"
import ThemeToggle from "./ThemeToggle"

type LayoutProps = {
  currentPage: string
  children: ReactNode
  setCurrentPage: (page: string) => void
}

const navItems = [
  { key: "home", label: "Home" },
  { key: "projects", label: "Projetos" },
  { key: "articles", label: "Artigos" },
  { key: "principles", label: "Princípios" },
]

export default function Layout({
  currentPage,
  children,
  setCurrentPage,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <header className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              onClick={() => setCurrentPage("home")}
              className="text-left text-xl font-semibold tracking-tight"
            >
              Eduardo Ferrari
            </button>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Tecnologia, negócios e sistemas complexos.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => {
                const active = currentPage === item.key

                return (
                  <button
                    key={item.key}
                    onClick={() => setCurrentPage(item.key)}
                    className={`rounded-full px-3 py-2 text-sm transition ${
                      active
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </nav>

            <ThemeToggle />
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
