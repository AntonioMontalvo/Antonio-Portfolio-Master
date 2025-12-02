import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import tailwindConfig from "./tailwind.config.js"; // Import the Tailwind config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(tailwindConfig)], // Pass the config to the plugin
    },
  },
  server: {
    proxy: {
      // When a request is made to /api, forward it to the backend server
      // e.g., http://localhost:5174/api/products -> http://localhost:54321/api/products
      "/api": "http://localhost:54321",
    },
    watch: {
      usePolling: true,
    },
  },
});
