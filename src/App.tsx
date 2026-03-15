import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Articles from "./pages/Articles"
import Principles from "./pages/Principles"
import ArticlePage from "./pages/ArticlePage"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/principles" element={<Principles />} />
      </Routes>
    </Layout>
  )
}