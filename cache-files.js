importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@7.3.0/build/workbox-sw.min.js');
importScripts('https://cdn.jsdelivr.net/npm/workbox-core@7.3.0/build/workbox-core.prod.js');
importScripts('https://cdn.jsdelivr.net/npm/workbox-routing@7.3.0/build/workbox-routing.prod.js');
importScripts('https://cdn.jsdelivr.net/npm/workbox-strategies@7.3.0/build/workbox-strategies.prod.js');
importScripts('https://cdn.jsdelivr.net/npm/workbox-precaching@7.3.0/build/workbox-precaching.prod.js');
importScripts('https://cdn.jsdelivr.net/npm/workbox-expiration@7.3.0/build/workbox-expiration.prod.js');
importScripts('https://cdn.jsdelivr.net/npm/workbox-cacheable-response@7.3.0/build/workbox-cacheable-response.prod.js');

workbox.setConfig({ debug: true });

const CACHE_VERSION = 'v6';

const CACHE_NAMES = {
  main: `my-cache-${CACHE_VERSION}`,
  comics: `comic-images-${CACHE_VERSION}`,
  fonts: `fonts-${CACHE_VERSION}`,
  images: `image-resources-${CACHE_VERSION}`,
  cdn: `cdn-js-resources-${CACHE_VERSION}`,
  workbox: `workbox-libraries-${CACHE_VERSION}`
};

const ASSETS_TO_CACHE = [
  { url: 'https://targetboskval.webcomic.ws/files/criminalprofile/deyu_%281%29.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/criminalprofile/nyathera_%281%29.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/criminalprofile/rikki_%281%29.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/criminalprofile/janberk_%281%29.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/criminalprofile/tapio_%281%29.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/font/adler-font.woff2', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/font/special-elite-font.woff2', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/webfonts/fa-brands-400.woff2', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/webfonts/fa-regular-400.woff2', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/webfonts/fa-solid-900.woff2', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/font/regular.min.css', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/font/solid.min.css', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/font/brands.min.css', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/font/fontawesome.min.css', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/avatar/karin-kho1.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/initial.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/resume.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/latest.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/arrow_to_first.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/arrow_to_latest.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/next.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicnavigation/previous.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/tribute/mini-maxmidoriya.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/tribute/maximus_midoriya.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/comicfury-icons/gator-icon-white.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/bannerimages/white_target_boskval_banner.webp', revision: '1.0' },
  { url: 'https://targetboskval.webcomic.ws/files/background/old-paper.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/white_target_boskval_banner%20(2).webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/deyu-photo%20233x270.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/janberk-photo%20233x270.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/nyathera-photo%20233x270.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/rikki-photo%20233x270.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/tapio-photo%20233x270.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/herosection_920x.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/herosection_1400x.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/herosection_1750x.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/herosection_2048.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/websitebg1-330x587.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/websitebg1-693x1232.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/websitebg1-910x1618.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/images/websitebg1-1080x1920.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/IMG_20250120_203001_621.webp', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-sw@7.3.0/build/workbox-sw.min.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-core@7.3.0/build/workbox-core.prod.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-routing@7.3.0/build/workbox-routing.prod.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-strategies@7.3.0/build/workbox-strategies.prod.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-precaching@7.3.0/build/workbox-precaching.prod.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-expiration@7.3.0/build/workbox-expiration.prod.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/npm/workbox-cacheable-response@7.3.0/build/workbox-cacheable-response.prod.js', revision: '1.0' },
  { url: 'https://cdn.jsdelivr.net/gh/K758-hoho/TB@tbjs/all.js', revision: '1.1' },
  { url: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js', revision: '1.0' },
  { url: 'https://storage.ko-fi.com/cdn/scripts/floating-chat-wrapper.css', revision: '1.0' },
  { url: 'https://storage.ko-fi.com/cdn/cup-border.png', revision: '1.0' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js', revision: '1.0' },
  { url: 'https://www.comicad.net/r/DMp0jCnYVt/', revision: '1.0' },
  { url: 'https://www.comicad.net/r/hR77WQ2RWo/', revision: '1.0' },
];

// Precache the assets
try {
  workbox.precaching.precacheAndRoute(ASSETS_TO_CACHE.map(asset => ({
    url: asset.url,
    revision: asset.revision
  })), {
    cacheName: CACHE_NAMES.main // Use the proper cache name
  });
} catch (error) { 
  console.error('Error precaching assets:', error);
}

// Cache Workbox libraries
const workboxLibraries = [
  'https://cdn.jsdelivr.net/npm/workbox-sw@7.3.0/build/workbox-sw.min.js',
  'https://cdn.jsdelivr.net/npm/workbox-core@7.3.0/build/workbox-core.prod.js',
  'https://cdn.jsdelivr.net/npm/workbox-routing@7.3.0/build/workbox-routing.prod.js',
  'https://cdn.jsdelivr.net/npm/workbox-strategies@7.3.0/build/workbox-strategies.prod.js',
  'https://cdn.jsdelivr.net/npm/workbox-precaching@7.3.0/build/workbox-precaching.prod.js',
  'https://cdn.jsdelivr.net/npm/workbox-expiration@7.3.0/build/workbox-expiration.prod.js',
  'https://cdn.jsdelivr.net/npm/workbox-cacheable-response@7.3.0/build/workbox-cacheable-response.prod.js'
];

workbox.routing.registerRoute(
  ({url}) => workboxLibraries.includes(url.href),
  new workbox.strategies.CacheFirst({
    cacheName: `workbox-libraries-${CACHE_VERSION}`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 365 * 24 * 60 * 60
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

// Cache strategies
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://img.comicfury.com' && url.pathname.includes('/comics/'), 
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `comic-images-${CACHE_VERSION}`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      {
        cacheDidUpdate: async ({ cacheName, request, oldResponse, newResponse }) => {
          console.log(`Cached comic image: ${request.url}`);
        }
      }
    ]
  })
);

// Cache font files
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: `fonts-${CACHE_VERSION}`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
      }),
    ],
  })
);

// Cache all images
workbox.routing.registerRoute(
  ({ url }) => 
    (url.origin === 'https://cdn.jsdelivr.net' || url.origin === 'https://targetboskval.webcomic.ws') && 
    (url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.png') || url.pathname.endsWith('.webp') || url.pathname.endsWith('.svg')),
  new workbox.strategies.CacheFirst({
    cacheName: `image-resources-${CACHE_VERSION}`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 40,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Cache CDN-hosted Javascript files
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://cdn.jsdelivr.net' && url.pathname.endsWith('.js'), 
  new workbox.strategies.StaleWhileRevalidate({ 
    cacheName: `cdn-js-resources-${CACHE_VERSION}`, 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxAgeSeconds: 24 * 60 * 60, // 1 day 
      }), 
      {
        cacheDidUpdate: async ({ cacheName, request, oldResponse, newResponse }) => { 
          console.log(`Cached JS resource: ${request.url}`); 
        } 
      } 
    ], 
  }) 
);

// Cleanup old caches during the activate event 
self.addEventListener('activate', event => {
  const currentCacheNames = Object.values(CACHE_NAMES);
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Only delete caches that start with our cache prefixes but aren't in the current version
          const isOurCache = cacheName.startsWith('my-cache-') ||
                             cacheName.startsWith('comic-images-') ||
                             cacheName.startsWith('fonts-') ||
                             cacheName.startsWith('image-resources-') ||
                             cacheName.startsWith('cdn-js-resources-') ||
                             cacheName.startsWith('workbox-libraries-');
                             
          const isOldVersion = !currentCacheNames.includes(cacheName);
          
          if (isOurCache && isOldVersion) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
