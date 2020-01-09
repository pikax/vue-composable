/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2cafbb11a33b67c7344b47e5fb13273d"
  },
  {
    "url": "assets/css/3.styles.affacf07.css",
    "revision": "437f228b8127876a67f1dfc272104dc0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5ece97ad.js",
    "revision": "c1d81f860a41bdb1d5537c453e56fbfe"
  },
  {
    "url": "assets/js/1.2a54d7c7.js",
    "revision": "6e40c05f047e1e6c4e4f495df64de666"
  },
  {
    "url": "assets/js/10.1ed88d83.js",
    "revision": "b26cb70d055c77459ae6be3156bffe38"
  },
  {
    "url": "assets/js/11.be031bba.js",
    "revision": "4a07faf8a64a046e8d2b94c7de398116"
  },
  {
    "url": "assets/js/12.29f220b8.js",
    "revision": "1f0daea8e384439b0639efb9f85cddaa"
  },
  {
    "url": "assets/js/13.ef2013a2.js",
    "revision": "4477d92cea075706aca1e754d13a94d5"
  },
  {
    "url": "assets/js/14.2a20c319.js",
    "revision": "2f7b9a5cd5e09b9a252889e0dee162aa"
  },
  {
    "url": "assets/js/15.aba838e0.js",
    "revision": "89ce9a7c1bd9d18a41fced25edeaa754"
  },
  {
    "url": "assets/js/16.b15803ea.js",
    "revision": "ae4c616ae27a595abb337718f926b11b"
  },
  {
    "url": "assets/js/17.8e1e695a.js",
    "revision": "77817cff48ba6fa325faa0aa50569ea3"
  },
  {
    "url": "assets/js/18.39b52da4.js",
    "revision": "256e82128820db4997489872e87cb899"
  },
  {
    "url": "assets/js/19.a0757329.js",
    "revision": "27025a541cb55ec39a626d1832033d42"
  },
  {
    "url": "assets/js/2.b3c994a3.js",
    "revision": "1aa2aef27f0c1f49cb860a1fa55ed954"
  },
  {
    "url": "assets/js/20.defdfdca.js",
    "revision": "2ce668b37ae0e5a7b6160912e3bfca03"
  },
  {
    "url": "assets/js/21.5dabfbc4.js",
    "revision": "9e949d50f6ce2e8d1bbc1466c62181a5"
  },
  {
    "url": "assets/js/22.389f8379.js",
    "revision": "676ae8cac229eccdb7f5efdfd6b7123d"
  },
  {
    "url": "assets/js/23.a7325c9d.js",
    "revision": "3ec1a4e4248f0d8644168cd23884c3e1"
  },
  {
    "url": "assets/js/24.0bb2b636.js",
    "revision": "d14801aa25e11cdb2963502dc369ae63"
  },
  {
    "url": "assets/js/25.88189db8.js",
    "revision": "dd71f6f793c0925cd1371a4ede6a70a0"
  },
  {
    "url": "assets/js/26.4af407c5.js",
    "revision": "b872f55a2568f524a8c26bb9ac932a3d"
  },
  {
    "url": "assets/js/27.1b48ab88.js",
    "revision": "ba3ce1a365f348af6bd63eec9253c244"
  },
  {
    "url": "assets/js/28.8eda4589.js",
    "revision": "5b67d3f3837ae6682260b718cf6625a0"
  },
  {
    "url": "assets/js/29.6790e45f.js",
    "revision": "0a780db4ad95e83bc5b79dc4c3fc34ad"
  },
  {
    "url": "assets/js/30.e1440417.js",
    "revision": "78021556ad17fca6fce00c297a7aaa49"
  },
  {
    "url": "assets/js/31.cf77f589.js",
    "revision": "1622dda328ee70b946adf1397d33b98b"
  },
  {
    "url": "assets/js/32.8c2ea963.js",
    "revision": "5802a316255c51ba64f94d3e76c866d1"
  },
  {
    "url": "assets/js/33.d9a5caae.js",
    "revision": "dcecdc2d59b24daabe53560e072eca1c"
  },
  {
    "url": "assets/js/34.17a3c2fc.js",
    "revision": "3ff85bc60273b7c390b935808fbaad16"
  },
  {
    "url": "assets/js/35.a6f53d6a.js",
    "revision": "2e9e5ea2901d16dde982298a4f4799db"
  },
  {
    "url": "assets/js/36.f49be088.js",
    "revision": "9c82d6f34636694215e58b2c1604c5ae"
  },
  {
    "url": "assets/js/37.292475bc.js",
    "revision": "7f4244bbe600d1be2e0c1974b2a6a8ba"
  },
  {
    "url": "assets/js/38.12891fea.js",
    "revision": "04a8212306d3b6a24d3c8d0413d9dc76"
  },
  {
    "url": "assets/js/39.8c749869.js",
    "revision": "38119079d7ad5d2b52e72b2f9e2ba8c8"
  },
  {
    "url": "assets/js/40.9800e301.js",
    "revision": "b7bff16fd0427dbd052ba17fbd97e8b4"
  },
  {
    "url": "assets/js/41.54a630b0.js",
    "revision": "d400d24cadafcca37bcb0262209a738f"
  },
  {
    "url": "assets/js/42.d64d0f2b.js",
    "revision": "6a1e65cdb5fac93c3e7765590fecc303"
  },
  {
    "url": "assets/js/43.4d4f8073.js",
    "revision": "0024de8a9b014f718c9ee2080e4eb17d"
  },
  {
    "url": "assets/js/44.5895bc15.js",
    "revision": "b6a1ae0a81f6a2b4d57f8138966293da"
  },
  {
    "url": "assets/js/45.3ed66a60.js",
    "revision": "49d48673a909abbb26272a666812f616"
  },
  {
    "url": "assets/js/46.bc58eb40.js",
    "revision": "e9c108040dec4f02bf1d96c165b4ca05"
  },
  {
    "url": "assets/js/5.9da69723.js",
    "revision": "72bb2495c9443b06c2e882bddf3a9a56"
  },
  {
    "url": "assets/js/6.87739f90.js",
    "revision": "a065c21456b04ff58edfdb8ae83eb0e2"
  },
  {
    "url": "assets/js/7.176d347b.js",
    "revision": "817922fc917a7ffd4ae6c0825f98c344"
  },
  {
    "url": "assets/js/8.0a349b6f.js",
    "revision": "1d204ff8e15bb7434e2f580d638ddaca"
  },
  {
    "url": "assets/js/9.ab3b4acc.js",
    "revision": "d6a21c8086bb11828ab7c7d6e9457a68"
  },
  {
    "url": "assets/js/app.cd069b8b.js",
    "revision": "6afcdad6ed8cd1bdbc3ff983ff6731a4"
  },
  {
    "url": "composable/_template.html",
    "revision": "8af8f63a3265829a97d32de6a9f79f38"
  },
  {
    "url": "composable/event/event.html",
    "revision": "ff59c712aee3bbc8cac8a8df2fbc94e5"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "c8abf2bbfb594e4dd711ac15015dabd6"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "715d1fc80dd92368321e23cb9e805730"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "62fb7953d99cd70a3edb44836718b6df"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "b77f058631c2aa5c4790fb0cf4cd8b3d"
  },
  {
    "url": "composable/index.html",
    "revision": "36e4a6acda301f4c7e240529bebf9489"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "886815885ff597f0669120858d004e3b"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "c1fd4157e5861a6dce1734b5c4e92744"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "97aadfe2a49459a12919fc61631897c6"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "146087b34a020147ada72bd90d2f7ac8"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "5541224925dcbe140ff71397e0698dcc"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "a90b405c72e8c3c31009f861716e36fd"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "78574de7123c24e7a08f52672a92ed4b"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "72d17e15d1906b2d0f6e1dd10e0f6eda"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "0e8124b4a7bd0069d7c0cf2e6805efba"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "b0c3541325bfba934b84378f7daf6a3b"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "9cadb789d9db558743058bd859e16082"
  },
  {
    "url": "Examples/index.html",
    "revision": "ae5bc4cbf9b08445aa310eaf6dbdd310"
  },
  {
    "url": "index.html",
    "revision": "e71f13b97887cdd4af5c9e782d145022"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
