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
    "revision": "85a20922a07ad7fc4d1c91e8e3fde097"
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
    "url": "assets/js/0.ce4bb94b.js",
    "revision": "08fdef683d433b9c55086e0dc58278c9"
  },
  {
    "url": "assets/js/1.e82e366e.js",
    "revision": "291d87f0b73e8633e98e5647faaafc66"
  },
  {
    "url": "assets/js/10.b3d1cb0d.js",
    "revision": "4ed69af7453791b2a40b54cc37868ef3"
  },
  {
    "url": "assets/js/11.b1e9f10f.js",
    "revision": "6e29a6968f55d90938531f03367c747e"
  },
  {
    "url": "assets/js/12.0ec27436.js",
    "revision": "55dc42939e317cf02e1d028d9ba3afd6"
  },
  {
    "url": "assets/js/13.defc1e89.js",
    "revision": "e3067bec748c709f1d32616e8c50aadf"
  },
  {
    "url": "assets/js/14.b8a991fe.js",
    "revision": "45353e382e0075b45de39e52e5bf74bb"
  },
  {
    "url": "assets/js/15.d77a6b1a.js",
    "revision": "cf1064bc537fe3c7aa612793ce15a54d"
  },
  {
    "url": "assets/js/16.59daaaa6.js",
    "revision": "279cc60229aa8677a3540edce25c8cd1"
  },
  {
    "url": "assets/js/17.ee515985.js",
    "revision": "f2232fb28ccddfbbef49ddeb46628690"
  },
  {
    "url": "assets/js/18.81c9fab5.js",
    "revision": "1b39de8edc7d7d502af21803d6b65bd5"
  },
  {
    "url": "assets/js/19.00e64ffe.js",
    "revision": "35cb80fa42dad71517950dd3d98a3a92"
  },
  {
    "url": "assets/js/2.163895f1.js",
    "revision": "65eeb593e4f8fb271644b91ccceb1394"
  },
  {
    "url": "assets/js/20.35ce1724.js",
    "revision": "a5b8770ab684c1dc7ca1fd6e3b7f3cf5"
  },
  {
    "url": "assets/js/21.4170020b.js",
    "revision": "8088d71136d72225003c9e20958e727b"
  },
  {
    "url": "assets/js/22.804b5add.js",
    "revision": "24d826e4aaba133d8b9168db52a2d009"
  },
  {
    "url": "assets/js/23.1b8d4f5d.js",
    "revision": "58159b10cef0a9e91eedffd9237036a0"
  },
  {
    "url": "assets/js/24.7ff5d218.js",
    "revision": "40bce3584eb94eb23a2619f4116ea9a4"
  },
  {
    "url": "assets/js/25.63469247.js",
    "revision": "d0a41ba269ed8112c54fdc9dc0d764f9"
  },
  {
    "url": "assets/js/26.1c5260d5.js",
    "revision": "edca73504d6d2adab3637e8d078dbf8f"
  },
  {
    "url": "assets/js/27.46dd94db.js",
    "revision": "914ebbc44ba1c0372f7f64459dbd6837"
  },
  {
    "url": "assets/js/28.a42bad03.js",
    "revision": "660293ff99058f97a205e70237b79e80"
  },
  {
    "url": "assets/js/29.ebf71374.js",
    "revision": "e024b83da9e3031ba556123ad04afd8c"
  },
  {
    "url": "assets/js/30.a1c5b116.js",
    "revision": "b07e24e163c9043dd8cc8d63c9fd32c3"
  },
  {
    "url": "assets/js/31.4458b181.js",
    "revision": "439d66bb88062d26cdbcd7ed55f05352"
  },
  {
    "url": "assets/js/32.7524232d.js",
    "revision": "0bef1e8c38422dba7afc74169f459fc9"
  },
  {
    "url": "assets/js/33.5dcaed3d.js",
    "revision": "db60e09d7fa259156bb40891a62472fb"
  },
  {
    "url": "assets/js/34.f44b848d.js",
    "revision": "85b7fab6513f518d6fadc3573151c95f"
  },
  {
    "url": "assets/js/35.36c1193c.js",
    "revision": "82d4ac40b4ae22dcb115930610223c60"
  },
  {
    "url": "assets/js/36.8b55ee18.js",
    "revision": "da9c6b4baf01da46ff7bedc362cb31ba"
  },
  {
    "url": "assets/js/37.515f5987.js",
    "revision": "1886e10634acec4e7bfde4834d9f2f98"
  },
  {
    "url": "assets/js/38.e1e9b884.js",
    "revision": "ab77db66c515cf21f6ebfc9c595d8afb"
  },
  {
    "url": "assets/js/39.8e764cdf.js",
    "revision": "28d749f3c6d42dbdd0ac1bcb98f2dd61"
  },
  {
    "url": "assets/js/40.08634c6a.js",
    "revision": "1ca878c720434622cfc16cb9d5a6d322"
  },
  {
    "url": "assets/js/41.29f36022.js",
    "revision": "68cc43f2fdc27de40ce5c42fd9b96f09"
  },
  {
    "url": "assets/js/42.421346e1.js",
    "revision": "8516f7793ba635cf0bfe55c92a888892"
  },
  {
    "url": "assets/js/43.1914f3c1.js",
    "revision": "56f0266f4e4c934715f912f4d6103a50"
  },
  {
    "url": "assets/js/44.4fe2223e.js",
    "revision": "4cfb94f09afc0c9b4be30f455a527b77"
  },
  {
    "url": "assets/js/45.add28e02.js",
    "revision": "c42ee4f993623d04b3975cf346c94d97"
  },
  {
    "url": "assets/js/46.d04f3875.js",
    "revision": "897a6cb2ff41ccc27f0d624a50ea494b"
  },
  {
    "url": "assets/js/47.40840932.js",
    "revision": "c1c80ff7d67d33e12d0956d37596d2ff"
  },
  {
    "url": "assets/js/48.27cff1f4.js",
    "revision": "27abc5c58fe5a439bda03c37c1534ef6"
  },
  {
    "url": "assets/js/49.8d409bbb.js",
    "revision": "b8ee773bfb51a176745a5fc23aba9552"
  },
  {
    "url": "assets/js/5.9fb3b766.js",
    "revision": "c81dc8cd96dc8f616234b5dff1b31009"
  },
  {
    "url": "assets/js/50.659c5f1a.js",
    "revision": "2d94f1a9a03b2dd2d4b59d59ec494b32"
  },
  {
    "url": "assets/js/51.6346e463.js",
    "revision": "490a059071527b973944b733613dd5f3"
  },
  {
    "url": "assets/js/52.9252e205.js",
    "revision": "bfc4dfb28c54a6ff619dfa9a90fceeec"
  },
  {
    "url": "assets/js/53.04fcaace.js",
    "revision": "d0eda25b79d925779ac2a054052c59be"
  },
  {
    "url": "assets/js/54.333207d9.js",
    "revision": "3c6e4ccd8c2c5159fd50aa1494bd9feb"
  },
  {
    "url": "assets/js/55.235794d9.js",
    "revision": "307fe53d5df5a8c93f1fbd9bb2c11c10"
  },
  {
    "url": "assets/js/56.7b476f4c.js",
    "revision": "9dd51fd04e6e31320dbd32ae3d5df7c3"
  },
  {
    "url": "assets/js/57.86c40d8b.js",
    "revision": "69423b41454687390ce886d2482fbd61"
  },
  {
    "url": "assets/js/58.ea4f5541.js",
    "revision": "e302fa6e60ea047ae1f1f8db39b0e180"
  },
  {
    "url": "assets/js/59.9405875e.js",
    "revision": "22d7cae7d7b28d0488f971caa6c6d065"
  },
  {
    "url": "assets/js/6.1bdf9344.js",
    "revision": "c73e8577ae8350d91ed41a25edf8e208"
  },
  {
    "url": "assets/js/60.6737b139.js",
    "revision": "6226bf899f7e77b467e437e934bed964"
  },
  {
    "url": "assets/js/61.e8484c01.js",
    "revision": "5b3e656d4c0c2c1afcc7c8bf9a054588"
  },
  {
    "url": "assets/js/62.b74a1253.js",
    "revision": "64ef54b34605927559909121b3a463e3"
  },
  {
    "url": "assets/js/63.e5b579f2.js",
    "revision": "e352849827aa360dfe235d537c91b035"
  },
  {
    "url": "assets/js/64.7bfef821.js",
    "revision": "b5b462d13f0f88c44f2da9dce1dcba3e"
  },
  {
    "url": "assets/js/65.05f5b7d9.js",
    "revision": "10a14d9f57f7838506b5e71442a169c9"
  },
  {
    "url": "assets/js/7.41fbb934.js",
    "revision": "d7992430120e44fd6269f827ad3190bf"
  },
  {
    "url": "assets/js/8.f948a534.js",
    "revision": "a5a70651dfb24d397464577e065cedf6"
  },
  {
    "url": "assets/js/9.8fe582ff.js",
    "revision": "3453b57f156ae2a0d5a4fc248c0790da"
  },
  {
    "url": "assets/js/app.526d2343.js",
    "revision": "216cf1040b2766cd2c76ef3dbf96cbdf"
  },
  {
    "url": "composable/_template.html",
    "revision": "96f7d5f7fd8bf9ffab5e927807c5e097"
  },
  {
    "url": "composable/event/event.html",
    "revision": "a24a30e15e386fb2dce63a1970efb025"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "9ad2a9ad860d2b14fa037d696c8ee533"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "8ecdf1f0cf693a1bd7e3ce4152247fd5"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "b22d3d94ed4528fe9f7d1a57ac7cd5d7"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "c758de0fc4d814102d2e41e52b7b8204"
  },
  {
    "url": "composable/index.html",
    "revision": "cc4c191207838fd81deb59584b20561e"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "e5c52385b22c487d60e16ce3ded10e0e"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "7e006f0397d5cbc390fca722d79c21fb"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "57cdb35c1d20b5c1a0a91cf2b307c875"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "01a8a914e1ac3a0fda1cf22f38cc5494"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "a0b7e95856a4320364260ace167a1efc"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "81937a1cc8c608e39daff500a525bbb2"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "56e8d7dfd6e11577706dc33d839f8f5a"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "59e52072c5682761eb68928fb0002824"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "13d530084e079821e7bc5cac3cbc49e3"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "aaef0b9e47b415dd2062c7148335cc2d"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "e300fa9daa50d638be6ae75843bb5f8f"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "b5e4fad451078f20130c95fe7653dabd"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "0298081b0d630c85db192a91e3418018"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "af523b192380c8fe2d1cd78a317f205e"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "4b2cea62e2cb911b81f7961aa06d28d7"
  },
  {
    "url": "composable/web/language.html",
    "revision": "d98607e974efb5d9767402c238fce053"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "c84093cac8c511e38af6b6a038cf2848"
  },
  {
    "url": "composable/web/online.html",
    "revision": "f58d0f15f2dd366ae4d99c8ccd832464"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "5c37df963674420c3afc012fda329675"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "502d5fde3d1171f509d236c8b1bd00cd"
  },
  {
    "url": "Examples/index.html",
    "revision": "b7a57ebc69b2af0b0b6a4c53db66cdb0"
  },
  {
    "url": "index.html",
    "revision": "fc88cd2a284a91b6e9c016cd2366dfe9"
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
