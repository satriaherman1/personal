import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*{js,css,html,ico,png,svg}"],
      },

      devOptions: {
        enabled: true,
      },

      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Satria Herman",
        short_name: "Satria",
        description: "Satria Herman Portfolio",
        theme_color: "#ffffff",
        icons: [
          {
            src: "favicon/android-icon-114x114.png",
            sizes: "114x114",
            type: "image/png",
          },
          {
            src: "favicon/android-icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: "@src", replacement: path.resolve(__dirname, "/src") }],
  },
});
