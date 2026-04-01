import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/TurtleMod-Website/",
  publicDir: "public",
  plugins: [react()]
});
