const staticDevBicycle = "dev-bicycle-site-v1"
const assets = [
  "/",
  "/index.html",
  "/imgs",
  "/bicycle-128.png",
  "/bicycle-512.png",
  "/manifest.json",
  "/serviceWorker.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
