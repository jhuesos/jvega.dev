/* globals workbox */
/* eslint-disable no-restricted-globals, no-underscore-dangle */
workbox.setConfig({ debug: false });

workbox.precaching.precacheAndRoute(
  self.__precacheManifest || self.__WB_MANIFEST,
);
workbox.precaching.precacheAndRoute(['/']);

workbox.routing.registerNavigationRoute('/');
