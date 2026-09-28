# 我的博客

一个用 **React + Tailwind CSS** 构建的个人博客，支持暗色模式、Markdown 写作、文章标签，可一键部署到 GitHub Pages。

## 本地运行

需要 [Bun](https://bun.sh)（或 Node.js 18+）。

```bash
bun install      # 安装依赖
bun run dev      # 启动开发服务器（浏览器打开 http://localhost:5173）
bun run build    # 构建到 dist/ 目录
bun run preview  # 本地预览构建产物
```

## 自定义你的博客

- **站点信息**：编辑 `src/config.js`，改名字、简介、社交链接、导航。
- **文章**：编辑 `src/data/posts.js`，按模板增删文章（正文用 Markdown 格式）。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，把本项目推上去：

   ```bash
   git init
   git add .
   git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

2. 打开仓库 **Settings → Pages**，把 Source 设为 **GitHub Actions**。

3. 推送后，`.github/workflows/deploy.yml` 会自动构建并发布，稍等片刻即可通过
   `https://你的用户名.github.io/仓库名/` 访问。
