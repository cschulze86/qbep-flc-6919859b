var C="qbep-formative-0686e941eb";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"])}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==C}).map(function(k){return caches.delete(k)}))}))});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request)}))});
