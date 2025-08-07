const CACHE_NAME = "v1";

const resources = ["index.html", "offline.html"];

const addResoucesToCache = async (resources) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request, event) => {
  const respondFromCache = await caches.match(request);
  if (respondFromCache) {
    return respondFromCache;
  }
  console.log("Not from cache");
  try {
    const respondFromNetwork = await fetch(request);
    event.waitUntil(putInCache(request, respondFromNetwork.clone()));
    return respondFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match("offline.html");
    if (fallbackResponse) return fallbackResponse;
    return new Response("Network error", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("install", (event) => {
  event.waitUntil(addResoucesToCache(resources));
});
self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request, event));
});
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  event.waitUntil(self.registration?.navigationPreload.enable());
});
