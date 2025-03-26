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
          },
          {
            src: "/images/portadaOficial512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/portada2512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/soul1-192.jpg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/soul1-512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/soul2-192.jpg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/soul2-512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/soulquest1.jpg",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "/images/soulquest2.jpg",
            sizes: "1024x1024",
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
