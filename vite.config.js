import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SoulQuest: Academy of Knowledge",
        short_name: "SoulQuest",
        description: "Un blog interactivo sobre el videojuego SoulQuest.",
        theme_color: "#1e293b",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/images/portadaOficial192.jpg",
            sizes: "192x192",
            type: "image/png",
          }
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,ico,svg,json}"],
      },
      devOptions: {
        enabled: true, // Permite probar el PWA en modo desarrollo
      },
    }),
  ],
});
