import { site } from '../config.js'

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">关于我</h1>
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 sm:flex-row sm:items-start dark:border-slate-800 dark:bg-slate-900">
        {site.avatar ? (
          <img
            src={site.avatar}
            alt={site.author}
            className="h-24 w-24 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white">
            {site.author.slice(0, 1)}
          </div>
        )}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">{site.author}</h2>
          <p className="mb-5 leading-relaxed text-slate-600 dark:text-slate-400">{site.bio}</p>
          <div className="flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
