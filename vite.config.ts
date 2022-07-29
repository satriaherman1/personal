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
        start_url: "https://satriaherman.com",
        description: "Satria Herman Portfolio",
        display: "standalone",
        theme_color: "#ffffff",
        icons: [
          {
            src: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1659078426/portfolio/favicon/apple-icon-144x144_gryqwr.png",
            sizes: "114x114",
            type: "image/png",
          },
          {
            src: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1659078426/portfolio/favicon/apple-icon-180x180_krriu1.png",
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
