const CACHE_NAME = "soulquest-cache-v2"; // Actualiza la versión del caché
const urlsToCache = [
  "/",
  "/index.html",
  "/images/soul1-192.jpg",
  "/images/soul1-512.jpg",
  "/images/soul2-192.jpg",
  "/images/soul2-512.jpg",
  "/images/portada/Oficial512.jpg",
  "/images/portada/2512.jpg",
  "/favicon.ico",
];

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activación del Service Worker y eliminación de cachés viejos
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]; // Mantener solo la versión actual del caché
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Eliminar cachés antiguos
          }
        })
      );
    })
  );
});

// Estrategias de caché para solicitudes de red
self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // Para archivos estáticos como imágenes, usa Cache First
  if (url.includes("/images/")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, fetchResponse.clone()); // Cachea la nueva respuesta
              return fetchResponse;
            });
          })
        );
      })
    );
  } else {
    // Para otros archivos (API, etc.), usa Network First
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request); // Si la red falla, usa el caché
      })
    );
  }
});

// Fallback en caso de error de red (opcional)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          return caches.match("/offline.html"); // Página de fallback si no hay conexión
        })
      );
    })
  );
});
