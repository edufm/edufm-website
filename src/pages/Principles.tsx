import { principles } from "../data/principles"

export default function Principles() {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight">Princípios</h2>

      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <ul className="space-y-4">
          {principles.map((principle) => (
            <li
              key={principle}
              className="border-b border-zinc-200 pb-4 last:border-b-0 last:pb-0 dark:border-zinc-800"
            >
              <p className="leading-7">{principle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
