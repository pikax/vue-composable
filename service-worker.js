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
    "revision": "3096b168582a183b4e8a252d6362e9c1"
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
    "url": "assets/js/10.bcf6587f.js",
    "revision": "9cb1fd349d1320bf233408d6837484ad"
  },
  {
    "url": "assets/js/11.b1e9f10f.js",
    "revision": "6e29a6968f55d90938531f03367c747e"
  },
  {
    "url": "assets/js/12.94329419.js",
    "revision": "55dc42939e317cf02e1d028d9ba3afd6"
  },
  {
    "url": "assets/js/13.136ab9da.js",
    "revision": "e3067bec748c709f1d32616e8c50aadf"
  },
  {
    "url": "assets/js/14.4937e918.js",
    "revision": "45353e382e0075b45de39e52e5bf74bb"
  },
  {
    "url": "assets/js/15.bc8ad593.js",
    "revision": "cf1064bc537fe3c7aa612793ce15a54d"
  },
  {
    "url": "assets/js/16.b947a400.js",
    "revision": "279cc60229aa8677a3540edce25c8cd1"
  },
  {
    "url": "assets/js/17.6f13d48e.js",
    "revision": "1056b5ef8165c81c1254b3336de7eab7"
  },
  {
    "url": "assets/js/18.50c387ac.js",
    "revision": "02566962aa975727871dae60205839b5"
  },
  {
    "url": "assets/js/19.83c04d27.js",
    "revision": "07cb10d72e99609bad10e73900859b84"
  },
  {
    "url": "assets/js/2.fe39aae1.js",
    "revision": "27e52076b1803143300082a700fa4abe"
  },
  {
    "url": "assets/js/20.f5a4b036.js",
    "revision": "4b5c658c6d93f9823956102e59fdf6f6"
  },
  {
    "url": "assets/js/21.370d9c0c.js",
    "revision": "24d92ce880d79e04022e3d54f2fcb1c7"
  },
  {
    "url": "assets/js/22.b08ad727.js",
    "revision": "758ffeeccff4b5fe0e7c65de5a83b8f6"
  },
  {
    "url": "assets/js/23.502d6e48.js",
    "revision": "08d851757fff44e83cc18b6b40231254"
  },
  {
    "url": "assets/js/24.e7c245c5.js",
    "revision": "ba555883f50fd8eed12f94233502fe2a"
  },
  {
    "url": "assets/js/25.ce67aa37.js",
    "revision": "05efc886bb8019f796175093add96826"
  },
  {
    "url": "assets/js/26.2fef6ec4.js",
    "revision": "c9db79e9b7a8e8bf056abacecfa78aaa"
  },
  {
    "url": "assets/js/27.77faf283.js",
    "revision": "a82b375ff990b0d2d3ccb12b18357e3e"
  },
  {
    "url": "assets/js/28.341051da.js",
    "revision": "c450395ea081100b97c1fca4f68b6ac2"
  },
  {
    "url": "assets/js/29.feb38c33.js",
    "revision": "dc8e5ced8025c270056cfd34ef1bf17b"
  },
  {
    "url": "assets/js/30.fc8edc89.js",
    "revision": "0c223e4c18085b215204f4d44162392f"
  },
  {
    "url": "assets/js/31.b7ccffae.js",
    "revision": "1bca2adaa2adf6385730665757398eeb"
  },
  {
    "url": "assets/js/32.6d9098eb.js",
    "revision": "f2f9140b8ded480e35e6a053a804e374"
  },
  {
    "url": "assets/js/33.095fae2f.js",
    "revision": "4da8b70e8c1f4b34628404a95b620780"
  },
  {
    "url": "assets/js/34.25b23ca4.js",
    "revision": "4e221712ddac0c62cce5f624785b8145"
  },
  {
    "url": "assets/js/35.6825cdba.js",
    "revision": "d48ce5326f14a3b2d319c24f3c6f3894"
  },
  {
    "url": "assets/js/36.1fcf5c64.js",
    "revision": "527ad57520201e8188592deb167801d9"
  },
  {
    "url": "assets/js/37.dccd0158.js",
    "revision": "e2e68f7a1a051f523646c80acada1fa8"
  },
  {
    "url": "assets/js/38.30c6b1e7.js",
    "revision": "ef4479e61fd09cdeb80148d6fb3bce79"
  },
  {
    "url": "assets/js/39.968ebc5e.js",
    "revision": "08816f83e9db0743163ac0273fc3fd67"
  },
  {
    "url": "assets/js/40.9c5aac90.js",
    "revision": "2cb72201f9fa5e806d9be5ddd607ed41"
  },
  {
    "url": "assets/js/41.53735c77.js",
    "revision": "13982d3db8eb38d8817764e0c1c55ee6"
  },
  {
    "url": "assets/js/42.dbc9358d.js",
    "revision": "e6e91848d6c16307c339e89f4d289255"
  },
  {
    "url": "assets/js/43.e2af5eae.js",
    "revision": "2064e53bb38b15ef11c568a1efa126cf"
  },
  {
    "url": "assets/js/44.05eb1dc3.js",
    "revision": "e4dace8172c715cccd9c9425d1a47158"
  },
  {
    "url": "assets/js/45.6e658541.js",
    "revision": "dd905c2fbc0c7cbf1e6a86193ff436c5"
  },
  {
    "url": "assets/js/46.740ccac3.js",
    "revision": "ac16e2609b32db003d9f1773d02f008f"
  },
  {
    "url": "assets/js/47.efaf4c82.js",
    "revision": "2f279024c4a91e2a10b6552ab32ce1c8"
  },
  {
    "url": "assets/js/48.06efb36e.js",
    "revision": "722e7500b86ea4aee5bdcddc66a262da"
  },
  {
    "url": "assets/js/49.3c3ba739.js",
    "revision": "b9d40a075f35d2233a25d46228910c9d"
  },
  {
    "url": "assets/js/5.9fb3b766.js",
    "revision": "c81dc8cd96dc8f616234b5dff1b31009"
  },
  {
    "url": "assets/js/50.b59b8ea2.js",
    "revision": "c63be64576d32c9afba414f34ffd3e8b"
  },
  {
    "url": "assets/js/51.ecdadffe.js",
    "revision": "9d7dcaf0aae21eff1371e0c41d7a25e7"
  },
  {
    "url": "assets/js/52.e0333b94.js",
    "revision": "ab3a777bb9abab39795d6d694825ad70"
  },
  {
    "url": "assets/js/53.d392cf99.js",
    "revision": "6df72f7e3120fb19843f41c91bc868a4"
  },
  {
    "url": "assets/js/54.dceb03b7.js",
    "revision": "61128d9cecb4962f9b8de9db2479fad4"
  },
  {
    "url": "assets/js/55.f4e35c68.js",
    "revision": "5106714a328acb2555634efef8496d32"
  },
  {
    "url": "assets/js/56.5fe0af9b.js",
    "revision": "1fa9f12083c0bfb8611cb8573756558d"
  },
  {
    "url": "assets/js/57.c65e801f.js",
    "revision": "4688e26de536ca4f927e79e1070107a7"
  },
  {
    "url": "assets/js/58.f4ac0ebf.js",
    "revision": "e2bbef1ac82b120c6deecd0336f5892c"
  },
  {
    "url": "assets/js/59.668dc056.js",
    "revision": "75d9cada9d2e76d999aa616e9f48b6ab"
  },
  {
    "url": "assets/js/6.1bdf9344.js",
    "revision": "c73e8577ae8350d91ed41a25edf8e208"
  },
  {
    "url": "assets/js/60.e5416209.js",
    "revision": "dc32f89c3e9c00463e81fcec65a451b1"
  },
  {
    "url": "assets/js/61.f8478083.js",
    "revision": "35608e144429cabb9abe94290a3a3bc4"
  },
  {
    "url": "assets/js/62.5759df6c.js",
    "revision": "5138ee7c68e6d859c41d92651b44a680"
  },
  {
    "url": "assets/js/63.e66acc40.js",
    "revision": "9c0fa114f57e498b9a320daf54dee1c4"
  },
  {
    "url": "assets/js/64.0ba46e23.js",
    "revision": "471cbf6f848a0c2b902dc13fc6688de9"
  },
  {
    "url": "assets/js/65.556ec11b.js",
    "revision": "cc5c81bcdb0531d2b7b83d6e9f706285"
  },
  {
    "url": "assets/js/66.3b9f09cc.js",
    "revision": "70a453e6ce3c490b1beab1cac0193d97"
  },
  {
    "url": "assets/js/67.44f4c904.js",
    "revision": "f558ff80cdec69970a24f8466a831a93"
  },
  {
    "url": "assets/js/7.8ef210f9.js",
    "revision": "d7992430120e44fd6269f827ad3190bf"
  },
  {
    "url": "assets/js/8.27c78cb1.js",
    "revision": "2d05e7ee936d786a126f24c4e84d6933"
  },
  {
    "url": "assets/js/9.8fe582ff.js",
    "revision": "3453b57f156ae2a0d5a4fc248c0790da"
  },
  {
    "url": "assets/js/app.d7e7171d.js",
    "revision": "debb0465c02330e3fbb3043b40d219bf"
  },
  {
    "url": "composable/_template.html",
    "revision": "584c3ce9e4d680451ba060617ea26ef2"
  },
  {
    "url": "composable/event/event.html",
    "revision": "572c88d1edc76d844ef8070b29242162"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "97d6f4cd2f805fe492bf991ca4232924"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4af2a92eade2103fbf1e0a394edfd6d2"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "28b7661a83e8db020e1334394773c638"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "b068a3105225403686645d2b734fa4d3"
  },
  {
    "url": "composable/index.html",
    "revision": "c6e2bb471aa5c4eb00dc278751695c22"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "c25904e64b35e53204d9c07abcd4dc58"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "f7aa7a1cb8eb19cc9f1e37caec9c4f27"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "c2095fb4fbca9d325d78dbcf0b87b007"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "5ad0e06904afebfe6bbe1445a9df4a5a"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "2b1555f9dd2ea3999d4e53bc3b8f990d"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "8645432dd3b0bb97e6689d76c4b0120b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "a11abad0c674f78a58c89bcdcc9625b1"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "d86bc9039380b2f1e4bdedb651548a71"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "aa8304d1a97eea055584cfbe95f8e11c"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "3d678bdf5f5328c0e51621228f4aad63"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "2afd6b7290524691556a25f6ae98e297"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "fcf560f6f01eaa6dd7af2b045b15ce30"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "cbac0798502ca4e27f711a89a06092b8"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "312ed4c4801a01da3a9ed99020e9d18e"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "2b326f4066f571a89892ecfd5d78736d"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "828109058c46e079c79a9068a64f474f"
  },
  {
    "url": "composable/web/language.html",
    "revision": "325e7c84532eff53a7bd405bc5d08195"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "e8edbd38d415ee24a2c2a9e866233950"
  },
  {
    "url": "composable/web/online.html",
    "revision": "01313c3483def27ab5f1d6a2e4d3ba1f"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "8d655e5d4328c49808478f33c8155781"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "471c2d0c2151e21d0fdb8fc80276de5b"
  },
  {
    "url": "Examples/index.html",
    "revision": "1617d051f26f57439b4602c3eee5791f"
  },
  {
    "url": "index.html",
    "revision": "ef17842b837efdb4d6d64b50f21b2046"
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
