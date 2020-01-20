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
    "revision": "5135d086aca9ea16de89b1dc68c90b41"
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
    "url": "assets/js/11.406176f4.js",
    "revision": "d83e7b09b3ec1a6a0a4779f9d5b9903d"
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
    "url": "assets/js/2.aea50c15.js",
    "revision": "d2c00fd06d027eb35faeca69a6e69465"
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
    "url": "assets/js/33.9d45669b.js",
    "revision": "0e87131cd1e123aedc47785a24503a9e"
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
    "url": "assets/js/51.3a22ce50.js",
    "revision": "60cf3a56246f53538164fbd535f9b38e"
  },
  {
    "url": "assets/js/52.1074b383.js",
    "revision": "9e0458a39544897bc70aec552bc481c6"
  },
  {
    "url": "assets/js/53.a186397c.js",
    "revision": "258a4d749cd790e8f96cfab17854ddd5"
  },
  {
    "url": "assets/js/54.2b6611c6.js",
    "revision": "c6bab6a4dbf343860d77acb9837893b7"
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
    "url": "assets/js/app.9bfa1a88.js",
    "revision": "bab21f6f9f85b1ae88e286af369c52b4"
  },
  {
    "url": "composable/_template.html",
    "revision": "e69f935b292b16ab1894f61bd1d26291"
  },
  {
    "url": "composable/event/event.html",
    "revision": "a347bd2645eb23fe4fb689f1a8bd04da"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "cc5344c6879806a0c820cddf83ac6e79"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "847cba03b5fd623567428d62b003c3da"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "254ada584b5ac3c7209082c10ee1f143"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "16b2c5e1d93da95583719ca3c3cf5d24"
  },
  {
    "url": "composable/index.html",
    "revision": "a34ce4c99272fa02a2d6dddf5cb1e266"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "a3233a9bfb4c9cdd62e19c7ba643419b"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "5ca0097c1fa28645aa388d322fdf6e1a"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "e9ffe113319efd8c481ab58138787d85"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "e97c8ac02af27afff5f2427a5c18f369"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "313cd094358fc846d96e453cc705509d"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "86558871efb62c5f656b64dd3a46bb2b"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "217a4b69f3b959b47eea269c16759ccf"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "7621a2c6d4b325072c4838235adfc31b"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "83b32e9eb8a20ab194ec1519c425ed83"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "f5923617581a4c5a684275a650350fc8"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "1e0a3501067fa8610233359528211cc9"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "d96d31cbf65da457d5cb5573e2f95d68"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "ff60979306b01eb072b4c9832f4ac916"
  },
  {
    "url": "composable/web/language.html",
    "revision": "e240cd937e587ac7d906962d1dcc2904"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "480063eb3315a2a5a3e547c17b7e6725"
  },
  {
    "url": "composable/web/online.html",
    "revision": "165ca443e17daf5cea33c9b5e2ebe949"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "7299f32fa35fadaaa8e8d7f1e77ee0c4"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "7346bf7f805741ed31112247732d1452"
  },
  {
    "url": "Examples/index.html",
    "revision": "b1a59d37d54d4cf0a0fca9d69f5e2ffc"
  },
  {
    "url": "index.html",
    "revision": "258c38c7d91906ca344c46ef44de2779"
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
