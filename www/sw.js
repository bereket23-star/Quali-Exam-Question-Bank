const C='quali-v1',F=['./','index.html','manifest.json','banks/surgery.html','banks/im.html','banks/obgyn.html','banks/pediatrics.html','banks/publichealth.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
