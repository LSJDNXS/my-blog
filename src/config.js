// ============================================
//  站点配置：改这里就能自定义你的博客
// ============================================

export const site = {
  name: '灵川的博客',
  tagline: '记录学习、思考与生活',
  author: '灵川',
  bio: '一名热爱学习与分享的青年，用文字记录成长的点滴。欢迎常来做客。',
  avatar: './avatar.png', // 头像图片（放在 public 目录下）
  nav: [
    { label: '首页', to: '/' },
    { label: '文章', to: '/posts' },
    { label: '关于', to: '/about' },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/你的用户名' },
    { label: '邮箱', url: 'mailto:you@example.com' },
  ],
  footer: '© 2026 灵川的博客 · 由 React + Tailwind 构建',
}
