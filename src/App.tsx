import { useState } from "react"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Articles from "./pages/Articles"
import Principles from "./pages/Principles"

type Page = "home" | "projects" | "articles" | "principles"

function renderPage(page: Page) {
  switch (page) {
    case "projects":
      return <Projects />
    case "articles":
      return <Articles />
    case "principles":
      return <Principles />
    case "home":
    default:
      return <Home />
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage(currentPage)}
    </Layout>
  )
}
