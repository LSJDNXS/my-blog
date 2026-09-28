import { site } from '../config.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <p>{site.footer}</p>
    </footer>
  )
}
