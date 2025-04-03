import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@context": "/src/context",
      "@features": "/src/features",
      "@services": "/src/services",
      "@middleware": "/src/middleware",
    },
  },
});
