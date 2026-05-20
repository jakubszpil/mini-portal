import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["./src/**/*.test.{js,jsx}"],
    setupFiles: ["./setup-tests.js"],
    globals: false,
    watch: false,
    css: false,
    environment: "happy-dom",
    passWithNoTests: true,
    pool: "threads",
    reporters: [["default", { summary: false }]],
    isolate: false,
    deps: {
      web: {
        transformAssets: false,
        transformCss: false,
      },
    }, 
  },
});
