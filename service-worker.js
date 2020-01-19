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
    "revision": "5f29fc58aa6548aa77ff847f96d7a97e"
  },
  {
    "url": "assets/css/3.styles.c04b7cd6.css",
    "revision": "4d4bea4e957bda799831a82e5faefd4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5ab626ee.js",
    "revision": "8b236e1b45f6b5a442bbe33d70d4b6ac"
  },
  {
    "url": "assets/js/1.9923c500.js",
    "revision": "1476b7e5068745b0d044e2898badcadf"
  },
  {
    "url": "assets/js/10.ed18a22e.js",
    "revision": "e84728b3987fa479fbc2910e2b10c3b0"
  },
  {
    "url": "assets/js/11.65d2f01a.js",
    "revision": "b4432150c35d8b0cc74b476154a7426d"
  },
  {
    "url": "assets/js/12.ffb9ce0d.js",
    "revision": "f6a4d822c2356b1fe919a85712fb33b5"
  },
  {
    "url": "assets/js/13.366818b7.js",
    "revision": "c0f275aa5347eab6401ba97410c576c5"
  },
  {
    "url": "assets/js/14.d91f3b63.js",
    "revision": "b9e26614eaca31ba2f744a1cee9f63ba"
  },
  {
    "url": "assets/js/15.a24d01ec.js",
    "revision": "e000754f04e01b53dec77ed1debbe4af"
  },
  {
    "url": "assets/js/16.88ada355.js",
    "revision": "5921c68d78989fe268a38eed2f75ce49"
  },
  {
    "url": "assets/js/17.f60ebf03.js",
    "revision": "373a73b10dd76b45702324f8b9557676"
  },
  {
    "url": "assets/js/18.12e4e281.js",
    "revision": "5b8ffac16bcd3b496f1662ad7960dce9"
  },
  {
    "url": "assets/js/19.a108ae77.js",
    "revision": "7dcabfab1348a5c30fa1248b2eaa8199"
  },
  {
    "url": "assets/js/2.77c31a67.js",
    "revision": "2df78d21469de1d8a19ae24db7be01b0"
  },
  {
    "url": "assets/js/20.c822436a.js",
    "revision": "5a692d81cdef9f4afb0aa03e6c73e993"
  },
  {
    "url": "assets/js/21.448ee942.js",
    "revision": "f83f7959076074724764096e853ac937"
  },
  {
    "url": "assets/js/22.3e9b9677.js",
    "revision": "bbe4ff826b8b6ceff23b925e1da93d48"
  },
  {
    "url": "assets/js/23.bc28989d.js",
    "revision": "0d05786548faccb577a2738413da9705"
  },
  {
    "url": "assets/js/24.e49ebbb9.js",
    "revision": "764be0dc0b7aff6c1c4970a80ae83693"
  },
  {
    "url": "assets/js/25.9a6a4367.js",
    "revision": "ed482517ca1bf48dd44e87c195f170c9"
  },
  {
    "url": "assets/js/26.dec2e9e7.js",
    "revision": "dcbae83ce94fc0260626fdf0809238d9"
  },
  {
    "url": "assets/js/27.1b1c5ec1.js",
    "revision": "27dec170cec1d5c00b3b262ef78f01f8"
  },
  {
    "url": "assets/js/28.56379f72.js",
    "revision": "2124f43fd3e6d49614288adddb37d340"
  },
  {
    "url": "assets/js/29.543c8de9.js",
    "revision": "3607d6b41e8b3bd573f9b32897a8cf54"
  },
  {
    "url": "assets/js/30.3fca9f92.js",
    "revision": "1dd911c8a7fef519a8c15e63471f65ad"
  },
  {
    "url": "assets/js/31.6e7270ae.js",
    "revision": "8a5843a981221fc99e4eba59311c2149"
  },
  {
    "url": "assets/js/32.937f5bb3.js",
    "revision": "698090e6fcd4829938715509c6ff8ab1"
  },
  {
    "url": "assets/js/33.9ae8baba.js",
    "revision": "be0e05b06a699460e4994e01c19028ed"
  },
  {
    "url": "assets/js/34.eeee7a50.js",
    "revision": "c7e1f7bb747c490b9d75f905a5544964"
  },
  {
    "url": "assets/js/35.45c66ced.js",
    "revision": "abf891c4525da8aecde8e40f2a0b4b8a"
  },
  {
    "url": "assets/js/36.2c864769.js",
    "revision": "6072d1d698dcbbca0b4f402fb03d4959"
  },
  {
    "url": "assets/js/37.2ae8e3d0.js",
    "revision": "615117c668f5909a7ad946e55ce728c4"
  },
  {
    "url": "assets/js/38.90c119b8.js",
    "revision": "3507354909d2f2abef678c09f29afb04"
  },
  {
    "url": "assets/js/39.0f5e60e2.js",
    "revision": "d7a50c8ac9d093eb81bf76b60a1a2bc8"
  },
  {
    "url": "assets/js/40.cf55a5e5.js",
    "revision": "c424d55eeecd3e874e0a790778b73d44"
  },
  {
    "url": "assets/js/41.0a37ac7b.js",
    "revision": "a8e931e3879c222c897d0927bea1a8d3"
  },
  {
    "url": "assets/js/42.a696addd.js",
    "revision": "e28312e248d501aeccecfeeb5afddb15"
  },
  {
    "url": "assets/js/43.8961c1df.js",
    "revision": "0cb800c735f459f03fcfff9cf84ecb6f"
  },
  {
    "url": "assets/js/44.ea32fd34.js",
    "revision": "2289a4525881f264b44e8abc2bb72131"
  },
  {
    "url": "assets/js/45.a28f875a.js",
    "revision": "dd04573b25ee70c2ba8a6066a222fa08"
  },
  {
    "url": "assets/js/46.286eaf9c.js",
    "revision": "ace870d0c8215bf9a02d2cfebed0e3ce"
  },
  {
    "url": "assets/js/47.8491fdbd.js",
    "revision": "daa7b0d1939f36ab82308f6cb0f818f0"
  },
  {
    "url": "assets/js/48.13f6cab1.js",
    "revision": "b38c6c1c0945d6b99b19c17d9e793c09"
  },
  {
    "url": "assets/js/49.b14e5e69.js",
    "revision": "8dcd8a00a9dd5934ead534fcc008e43f"
  },
  {
    "url": "assets/js/5.8b6beb14.js",
    "revision": "3d20024f5ec87200fedb04862ae58d2d"
  },
  {
    "url": "assets/js/50.4e1884b3.js",
    "revision": "5ca6394cc3524ef13792c25c6426305e"
  },
  {
    "url": "assets/js/51.4f07cce8.js",
    "revision": "d53242862b4272ba1348531a7a65125a"
  },
  {
    "url": "assets/js/52.03736da2.js",
    "revision": "0c5db1d1ecdb0836cf527d0d5e3e23b9"
  },
  {
    "url": "assets/js/53.d3d8f753.js",
    "revision": "621e97abb7637b91711e51f67afa6458"
  },
  {
    "url": "assets/js/54.f8a579b1.js",
    "revision": "4ef57bb0581abef54762d6f31445eb58"
  },
  {
    "url": "assets/js/55.6f00dea5.js",
    "revision": "e033856328cd2a44f6414d6bbf18c0cb"
  },
  {
    "url": "assets/js/56.24909298.js",
    "revision": "20ccce9f1606499173852d170a1d0b9d"
  },
  {
    "url": "assets/js/57.715d1627.js",
    "revision": "1fd96a3d4bf63014cd120843bd34bcc8"
  },
  {
    "url": "assets/js/58.917b9a47.js",
    "revision": "63bd801011ed2c8102f16d7866fb1687"
  },
  {
    "url": "assets/js/59.514099c3.js",
    "revision": "d3956d381aac75c5a916451696b039f6"
  },
  {
    "url": "assets/js/6.f612219f.js",
    "revision": "dbc8d5a2f81e91df6668f7666e2ff22a"
  },
  {
    "url": "assets/js/7.453232ca.js",
    "revision": "23a1c00ec96a8000020f1bc10bba7567"
  },
  {
    "url": "assets/js/8.afb9ba28.js",
    "revision": "b39d7c3529047f725052d83239b8f14f"
  },
  {
    "url": "assets/js/9.8618c74d.js",
    "revision": "aad61224ff1b3f827787c4e8a1a9e08d"
  },
  {
    "url": "assets/js/app.14b74053.js",
    "revision": "f3436d86bb1b9bafd7b1d0393e5733ee"
  },
  {
    "url": "composable/_template.html",
    "revision": "d3029d935ef051eb731ad79c3dbc63c6"
  },
  {
    "url": "composable/event/event.html",
    "revision": "9094f364473f7d5e93eb0cac4cc76100"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "0bc977963910fcf1f40bcd31285d149e"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4ba8c66e3cd2c039809ab774af7d4a15"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "c50f55fe2d356ad60bd77f812746bd4d"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "4f7885eb1555daa3b799fc5331d9e834"
  },
  {
    "url": "composable/index.html",
    "revision": "950f5940493e00542205b97ac293f09d"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "9541040e474078fb38a284b5abc13ff2"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "f8a5ed2ae70cc3cc765d75ff4c0c49e3"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "7fb9d3e203a2505ee06f4397922b5c10"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "82f0bec60b351c6cc22278cdcc9eed46"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "4ad1f50921bdfef989785c6d628ebf22"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "51d6d6b4c0cbeb6ddaf8c129911dde67"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "2df175a3663f88468409c03cb06b478b"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "30f35c798037aaf3940b04d31caaecc3"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "50e33a0fb6b8787da96168ef2a92626d"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "cb1795087df1305532e49a0947151c17"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "10097c26b681acd979167bba028742b3"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2ce430454197c0505d801ed067b5d7c0"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "b9ce02be94f01637c9fb5d63b3215f2c"
  },
  {
    "url": "composable/web/language.html",
    "revision": "403c2e9bef8dadcd9e0f73b69cc7145e"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "5f811c9ec3894d9d162b9f2691cfc7dd"
  },
  {
    "url": "composable/web/online.html",
    "revision": "6f1c5acdc06455da62be4d1e3f8bc467"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "a992c86e0b8d49acdeae9fa455fd77f3"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "178a98b175c44efd4c86940ee4305e60"
  },
  {
    "url": "Examples/index.html",
    "revision": "d3215b4c73b90f5950e21fcdef044433"
  },
  {
    "url": "index.html",
    "revision": "87218086743f8ffa5e87a291c8f12701"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
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
