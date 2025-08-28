import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // если нужно деплоить в поддиректории (на Render можно оставить ./)
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    port: process.env.PORT || 3000,   // Render сам передаёт PORT
    host: '0.0.0.0',                  // слушаем на всех интерфейсах
    allowedHosts: ['.onrender.com']   // разрешаем все поддомены Render
  }
})
