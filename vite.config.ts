/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    includeSource: ["src/**/*.{js,ts}"],
  },
});
