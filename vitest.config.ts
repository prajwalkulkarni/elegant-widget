// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "./setupTests.ts", // Ensure the path is correct
    globals: true, // Ensure globals are enabled
    environment: "jsdom", // Ensure jsdom environment is used for DOM testing
  },
});
