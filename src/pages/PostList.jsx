import { posts } from '../data/posts.js'
import PostCard from '../components/PostCard.jsx'

export default function PostList() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">全部文章</h1>
      <p className="mb-8 text-slate-500 dark:text-slate-400">共 {posts.length} 篇文章</p>
      {posts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-slate-400 dark:border-slate-700 dark:text-slate-500">
          暂无文章，敬请期待
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
