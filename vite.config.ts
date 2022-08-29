/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fancy-auth-form/",
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [ path.resolve(process.cwd(), "public/icons") ],
      symbolId: "icon-[dir]-[name]",
      customDomId: "svg-sprite",
    }),
  ],
  build: {
    target: "esnext",
  },
  css: {
    devSourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
})
