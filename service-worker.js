const CACHE_NAME = 'naz-egitim-kralligi-v3.0';
const STATIC_CACHE_NAME = 'naz-static-v3.0';
const DYNAMIC_CACHE_NAME = 'naz-dynamic-v3.0';

// Essential files to cache for offline functionality
const STATIC_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-set/icon-192x192.png',
  '/icon-set/icon-512x512.png',
  '/icon-set/maskable_icon.png',
  '/icon-set/apple-touch-icon.png',
  '/icon-set/favicon-16x16.png',
  '/icon-set/favicon-32x32.png'
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache essential static files
self.addEventListener('install', event => {
  console.log('NAZ Eğitim Krallığı Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('NAZ Service Worker: Caching static files');
        return cache.addAll(STATIC_URLS);
      })
      .then(() => {
        console.log('NAZ Service Worker: Static files cached successfully');
        self.skipWaiting(); // Take control immediately
      })
      .catch(error => {
        console.error('NAZ Service Worker: Failed to cache static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('NAZ Eğitim Krallığı Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete old versions of caches
          if (cacheName !== STATIC_CACHE_NAME && 
              cacheName !== DYNAMIC_CACHE_NAME && 
              cacheName !== CACHE_NAME) {
            console.log('NAZ Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('NAZ Service Worker: Old caches cleaned up');
      return self.clients.claim(); // Take control of all clients
    })
  );
});

// Fetch event - serve cached content with different strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Only handle requests from our domain
  if (url.origin !== location.origin) {
    return;
  }

  // Apply different caching strategies based on request type
  if (request.destination === 'image') {
    // Images: Cache first strategy
    event.respondWith(handleImageRequests(request));
  } else if (request.destination === 'document') {
    // HTML pages: Network first with cache fallback
    event.respondWith(handleDocumentRequests(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    // JS/CSS: Stale while revalidate
    event.respondWith(handleStaticAssets(request));
  } else {
    // Other requests: Network first
    event.respondWith(handleOtherRequests(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequests(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('NAZ Service Worker: Image request failed:', error);
    // Return a fallback image if available
    return caches.match('/icon-set/icon-192x192.png');
  }
}

// Handle document requests with network-first strategy
async function handleDocumentRequests(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('NAZ Service Worker: Network request failed, serving from cache');
    const cachedResponse = await caches.match(request);
    return cachedResponse || caches.match('/');
  }
}

// Handle static assets with stale-while-revalidate strategy
async function handleStaticAssets(request) {
  const cache = await caches.open(STATIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

// Handle other requests with network-first strategy
async function handleOtherRequests(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse;
  }
}

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'naz-background-sync') {
    console.log('NAZ Service Worker: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any offline actions when back online
  console.log('NAZ Service Worker: Performing background sync');
}

// Push notifications (for future game achievements)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    console.log('NAZ Service Worker: Push notification received:', data);
    
    const options = {
      body: data.body || 'Yeni bir başarı kazandın! 🌟',
      icon: '/icon-set/icon-192x192.png',
      badge: '/icon-set/maskable_icon.png',
      tag: 'naz-achievement',
      vibrate: [200, 100, 200],
      actions: [
        {
          action: 'open',
          title: 'Oyunu Aç',
          icon: '/icon-set/icon-192x192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(
        data.title || 'NAZ Eğitim Krallığı', 
        options
      )
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('NAZ Service Worker: Notification clicked');
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle app installation
self.addEventListener('beforeinstallprompt', event => {
  console.log('NAZ Service Worker: App installation prompt available');
  event.preventDefault();
  // Store the event for later use
  self.deferredPrompt = event;
});

// Message handling for communication with main app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log('NAZ Eğitim Krallığı Service Worker: Ready! 👑✨');