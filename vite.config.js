import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Root deploy (Vercel, etc.). Not using a subpath like GitHub Pages /repo/.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
