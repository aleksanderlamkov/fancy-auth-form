import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [ path.resolve(process.cwd(), "public/icons") ],
      symbolId: "icon-[dir]-[name]",
      customDomId: "svg-sprite",
    }),
  ],
  css: {
    devSourcemap: true,
  },
})
