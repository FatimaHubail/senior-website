import path from "path"
import { existsSync, readFileSync } from "fs"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Automatically detect if using custom domain by checking CNAME file
// For custom domain: base = '/'
// For GitHub Pages: base = '/senior-website/'
const cnamePath = path.resolve(__dirname, "public/CNAME")
const hasCustomDomain = existsSync(cnamePath) && readFileSync(cnamePath, "utf-8").trim() !== ""
const base = hasCustomDomain ? '/' : '/senior-website/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
