// Service Worker Minimalista para LibrePlay PWA
self.addEventListener('fetch', function(event) {
  // Pasa todas las peticiones directamente a internet sin bloquear el streaming
  event.respondWith(fetch(event.request));
});
