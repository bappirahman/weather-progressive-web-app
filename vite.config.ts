import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  server: {
    hmr: {
      port: 5173,
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        sw: "public/sw.ts",
      },
    },
  },
});
