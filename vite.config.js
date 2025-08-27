import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 важный параметр для деплоя на под-директории (GitHub Pages и т.п.)
  base: './',
  server: {
    port: 5173,   // можно поменять порт (по умолчанию 5173)
    open: true    // автоматически открывать браузер при запуске dev-сервера
  },
  build: {
    outDir: 'dist', // стандарт, но можно поменять
    sourcemap: true // удобно при отладке продакшн-сборки
  }
})
