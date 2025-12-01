import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // When a request is made to /api, forward it to the backend server
      // e.g., http://localhost:5174/api/products -> http://localhost:54321/api/products
      "/api": "http://localhost:54321",
    },
  },
});
