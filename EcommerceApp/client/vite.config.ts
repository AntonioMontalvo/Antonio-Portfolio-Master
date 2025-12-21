import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()], // Tailwind will auto-detect config file
    },
  },
  server: {
    proxy: {
      // When a request is made to /api, forward it to the backend server
      // e.g., http://localhost:5174/api/products -> https://ecommerce-backend-cap6.onrender.com/api/products
      "/api": "https://ecommerce-backend-cap6.onrender.com",
    },
    watch: {
      usePolling: true,
    },
  },
});
