import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // URL server backend
        changeOrigin: true,
        secure: false, // Jika menggunakan https, set ini ke true
        rewrite: (path) => path.replace(/^\/api/, ''), // Opsi ini menghapus prefix "/api" dari request
      }
    }
  }
})
