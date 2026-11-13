import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Forward API calls to the Express server during development.
    proxy: {
      "/api": process.env.API_PROXY_TARGET ?? "http://localhost:5000",
    },
  },
  build: {
    // server.js serves the production build from client/build.
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
