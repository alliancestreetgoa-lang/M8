import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Project page served from https://<user>.github.io/M8/
  base: '/M8/',
  plugins: [react()],
})
