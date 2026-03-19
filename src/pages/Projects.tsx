import { projects } from "../content/pt/projects"

export default function Projects() {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight">Projetos</h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
              {project.description}
            </p>
            <a
              href={project.link}
              className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
            >
              Ver mais
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
