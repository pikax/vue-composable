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
    "revision": "25fdf244cef34f254de3a0af72763046"
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
    "url": "assets/js/31.c6fe6dac.js",
    "revision": "54cafc2abb85f1652abfbc90434c2a27"
  },
  {
    "url": "assets/js/32.54438e01.js",
    "revision": "0c44b0fb91fd9335766af55cd73445be"
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
    "url": "assets/js/47.414febae.js",
    "revision": "42ad07bb2d1e254a402f13d52d741533"
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
    "url": "assets/js/app.f8dd3e91.js",
    "revision": "41832e60f3a38f325db425fcf81a9637"
  },
  {
    "url": "composable/_template.html",
    "revision": "7637741074dc856303232e0a2ce0b9ef"
  },
  {
    "url": "composable/event/event.html",
    "revision": "530c0e7e4c39337404f69b7a2a6cff87"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "f8634b2f12f8e9c65ecedafa30dbf0b5"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "6f29e7b1c3c72faa28838f57aa4cde11"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "e3d74692d7077ff45e991501d5d2a11f"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "1e78587716e2c9e1e8f22c6040d0a5ee"
  },
  {
    "url": "composable/index.html",
    "revision": "70d40dcd88461d1e9a8f3fc14cc516c5"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "24267602eb265b7fae5b076546ab2882"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "f792b24267e2569d1d5e43517b08b294"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "a464ea716170225d33793d987633be74"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "e2c9f1037ada363b909524994a5d3275"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "84216b48b13144f6f079e05c6dfe941b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "17d3eb412aa72350ba3ee0a299f674f5"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "79d4de750dc6ad50cd6a4468966962d6"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "8b54b916fb50de5e596db4a20922fa2b"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "5e0a668ae449926f48b65d4f9d378598"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "78f5b27af22ea7742e05cb6050d3cf1d"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "ec08c66e30fa05228ed4bb1daa3a1170"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "cefc335675ee6264c1ba39e305960fb3"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "d16c9bd587933b701733635495edcb1f"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "c7c18781aef213a8277bb99f446316e0"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "c38140fc3c9f95671833f1f4f08e6cdc"
  },
  {
    "url": "composable/web/language.html",
    "revision": "4874ca0db855d6dae3b34a7a1bd1ccf5"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "a3294ba90470020ec89a723430e78222"
  },
  {
    "url": "composable/web/online.html",
    "revision": "77b2e1fbc6c1d048f599a64d79646ac1"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "09348a76ab49f93dce9958b72063bfec"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "6108a69ca338d0d06b6e5edfa83e60ea"
  },
  {
    "url": "Examples/index.html",
    "revision": "2121d6b9d1cb3e02d30ae0a22e1befee"
  },
  {
    "url": "index.html",
    "revision": "9fa6fd50baca604aff1afe93ef6584d0"
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
