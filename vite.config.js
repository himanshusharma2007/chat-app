// vite.config.js
import { defineConfig } from "vite";
import react from "@vite/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Changed to 5173
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Changed to point to Express server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
