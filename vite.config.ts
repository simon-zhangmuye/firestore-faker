import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";

export default defineConfig({
  plugins: [react(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});