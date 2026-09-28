import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts } from '../data/posts.js'

export default function PostDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="mb-4 text-lg text-slate-600 dark:text-slate-400">文章不存在或已被删除。</p>
        <Link to="/posts" className="text-indigo-600 hover:underline dark:text-indigo-400">
          返回文章列表
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
          >
            {t}
          </span>
        ))}
      </div>
      <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {post.title}
      </h1>
      <div className="mb-8 text-sm text-slate-400 dark:text-slate-500">{post.date}</div>
      <div className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
      <div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
        <Link
          to="/posts"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          ← 返回文章列表
        </Link>
      </div>
    </article>
  )
}
