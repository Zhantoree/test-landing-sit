import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-landing-sit/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
