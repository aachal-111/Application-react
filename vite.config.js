import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

exportdefaultdefineConfig({
  base: "./",
  plugins: [react()],
})