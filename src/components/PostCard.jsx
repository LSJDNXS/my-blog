import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/40"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {post.excerpt}
      </p>
      <div className="mt-auto text-xs text-slate-400 dark:text-slate-500">{post.date}</div>
    </Link>
  )
}
