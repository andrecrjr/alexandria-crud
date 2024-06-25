import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const monorepoAliasPathReplacement = [
  { find: "@", replacement: path.resolve(__dirname, "./src") },
  { find: "ui", replacement: path.resolve(__dirname, "../../packages/ui/src") },
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: monorepoAliasPathReplacement,
  },
  define: {
    global: {},
  },
});
