import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base 用相对路径，方便部署到 GitHub Pages 的二级路径（username.github.io/仓库名/）
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
