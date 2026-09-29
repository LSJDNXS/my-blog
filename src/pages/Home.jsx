import { Link } from 'react-router-dom'
import { site } from '../config.js'
import { posts } from '../data/posts.js'
import PostCard from '../components/PostCard.jsx'

export default function Home() {
  const recent = posts.slice(0, 6)
  return (
    <div>
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-indigo-50/70 to-transparent dark:border-slate-800 dark:from-indigo-950/20">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {site.name}
          </h1>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">{site.tagline}</p>
          <div className="flex justify-center gap-3">
            <Link
              to="/posts"
              className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500"
            >
              阅读文章
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              关于我
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">最新文章</h2>
        {recent.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-slate-400 dark:border-slate-700 dark:text-slate-500">
            暂无文章，敬请期待
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
