const CACHE_NAME = 'libreplay-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icono-192.png',
  './icono-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  // Las peticiones al audio y a la API de Icecast no deben guardarse en caché
  if (e.request.url.includes('/libreplay') || e.request.url.includes('status-json.xsl')) {
    return fetch(e.request);
  }
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
