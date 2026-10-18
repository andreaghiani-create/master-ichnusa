// Funzionamento offline: rete prima, copia locale se non c'è connessione.
// Cambiare il numero di versione a ogni aggiornamento dell'app (non serve per programma.json).
const CACHE = "master-ichnusa-v12";
const FILES = ["./", "index.html", "programma.json", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "logo.png", "icon-maskable-512.png"];
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const cacheable = url.origin === location.origin || FONT_HOSTS.includes(url.hostname);
  if (!cacheable) return;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok || r.type === "opaque") { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || (url.origin === location.origin ? caches.match("index.html") : undefined))));
});
