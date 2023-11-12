/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// set up test config to read from .env.local
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.local" });

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  test: {
    // this test config is added to the defineConfig function so env vars inside .env.local are available
    setupFiles: ["dotenv/config"],
    // reset mocks between tests
    mockReset: true,
  },
});
