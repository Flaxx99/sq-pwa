self.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
    event.waitUntil(
      caches.open("soulquest-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/images/soul1-192.jpg",
          "/images/soul1-512.jpg",
          "/images/soul2-192.jpg",
          "/images/soul2-512.jpg",
          "portadaOficial512.jpg",
          "portada2512.jpg",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  