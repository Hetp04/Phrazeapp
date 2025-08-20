import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/Phrazeapp/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mov|mp4|webm/i.test(ext)) {
            return `assets/[name]-[hash].[ext]`
          }
          return `assets/[name]-[hash].[ext]`
        },
      },
    },
    copyPublicDir: true,
  },
  server: {
    port: 5500,
    open: true
  },
  publicDir: 'public'
})) 