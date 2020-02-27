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
    "revision": "ad204a1aba86cde6bdcad41c899b19f8"
  },
  {
    "url": "api/axios.api.html",
    "revision": "b33a4a3280abd5ab649a17342d498ab1"
  },
  {
    "url": "api/core.api.html",
    "revision": "6a61a8b8352326e8acbfd6fe583adfdb"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "583eacd64dc24f80da91d8ba4161fb36"
  },
  {
    "url": "api/web.api.html",
    "revision": "d9d176f0dcabe8b716fa0490c32a3928"
  },
  {
    "url": "assets/css/2.styles.a14cc025.css",
    "revision": "419ace0f1b611952663e4b0922b7a646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.b28f25b3.js",
    "revision": "fb6dc357d741f001bfc501507273cd04"
  },
  {
    "url": "assets/js/1.1ae662b4.js",
    "revision": "e9c167a0618f39b77a355287cd250c48"
  },
  {
    "url": "assets/js/10.2495caed.js",
    "revision": "b7e3aea49fbd84a0c1df0724cee14d18"
  },
  {
    "url": "assets/js/11.87a4e46f.js",
    "revision": "99f59c9206382cea908e283ae7a35095"
  },
  {
    "url": "assets/js/12.c9b17fab.js",
    "revision": "b61cad88d61db81557c52757bbf37271"
  },
  {
    "url": "assets/js/13.de8f6be5.js",
    "revision": "a9f928d09d386b38b4b209352cddf049"
  },
  {
    "url": "assets/js/14.a1f9b698.js",
    "revision": "a422c25c8c94db8f5b2b2c215efe33b8"
  },
  {
    "url": "assets/js/15.23d400d7.js",
    "revision": "9094eb4da3b9dc84b551316895a3be83"
  },
  {
    "url": "assets/js/16.fbef8231.js",
    "revision": "0982db85d84d099e852089ae7e90a5f2"
  },
  {
    "url": "assets/js/17.4a4a0942.js",
    "revision": "4261a09674538521dda27f7a06bf3287"
  },
  {
    "url": "assets/js/18.56024897.js",
    "revision": "42f585ca618bd401ca68374833b89f6d"
  },
  {
    "url": "assets/js/19.e5138cdd.js",
    "revision": "c9a72e2a2b6edc9c20d5fe0d339883fb"
  },
  {
    "url": "assets/js/20.b7a3f815.js",
    "revision": "7c45e07dc3f3e316d8793a0b8f40a036"
  },
  {
    "url": "assets/js/21.d5828d6f.js",
    "revision": "bb6bd55b1f3a56d67e1a58cb39232bf2"
  },
  {
    "url": "assets/js/22.5f691991.js",
    "revision": "07ff0bbf22c17646e85994bdc9c4f80c"
  },
  {
    "url": "assets/js/23.5e40b31f.js",
    "revision": "5431877f0cb6c7f28ca11963122fdd58"
  },
  {
    "url": "assets/js/24.85be109a.js",
    "revision": "4edcdfb7192d0a585995958812425a72"
  },
  {
    "url": "assets/js/25.8e9f433d.js",
    "revision": "7a132f49c5256ca48f1c512625e7d995"
  },
  {
    "url": "assets/js/26.6b646946.js",
    "revision": "0e3ba956a951e521fbc7ce1b07448e4c"
  },
  {
    "url": "assets/js/27.1aad1b7d.js",
    "revision": "f24c526de63ba3d6689b1c743d62fc23"
  },
  {
    "url": "assets/js/28.82907e95.js",
    "revision": "2602f57a590bccd9f6d459b033df40ae"
  },
  {
    "url": "assets/js/29.11a84c9b.js",
    "revision": "37f4696e7339f4ffe34704047cdbb4bb"
  },
  {
    "url": "assets/js/30.eb048650.js",
    "revision": "5062081f05042a4cbaa93501297adc77"
  },
  {
    "url": "assets/js/31.53110668.js",
    "revision": "43f0ea62493be0b43bb95020baaa414a"
  },
  {
    "url": "assets/js/32.22272595.js",
    "revision": "a347f73cddc31a922c0986862c386584"
  },
  {
    "url": "assets/js/33.795f42dd.js",
    "revision": "ccb94be567e22af1ac9d99b86b9206a4"
  },
  {
    "url": "assets/js/34.b551686d.js",
    "revision": "e5250fdb3568b6eaae2976eaf2618004"
  },
  {
    "url": "assets/js/35.e384561a.js",
    "revision": "dd721c1609edfd0b3ce91c44aa0dfa7b"
  },
  {
    "url": "assets/js/36.a42f7192.js",
    "revision": "16c149110d1f1b5043c543fb5a0f07fb"
  },
  {
    "url": "assets/js/37.1f291e76.js",
    "revision": "b16a3605d79eb76a6473de9fb2baea79"
  },
  {
    "url": "assets/js/38.bcac007c.js",
    "revision": "6fdd3542e986eaf64254b895c874b568"
  },
  {
    "url": "assets/js/39.3eaa013e.js",
    "revision": "ad11ff2b3f09efb1fda607a36f69c872"
  },
  {
    "url": "assets/js/4.bf7b6b1a.js",
    "revision": "737d730aa97bc1cdbb2e5bcc7d03b9f6"
  },
  {
    "url": "assets/js/40.042c59f8.js",
    "revision": "ed22b1769af8f53798e1beca6a575b7d"
  },
  {
    "url": "assets/js/41.3754243c.js",
    "revision": "e9c148c0cc606e44634826f21e24dbfe"
  },
  {
    "url": "assets/js/42.bb6b2468.js",
    "revision": "9132f7108929b8b471483d15aec544ee"
  },
  {
    "url": "assets/js/43.da801f24.js",
    "revision": "4d49e5bc870591ad7853b4bf2ee11c08"
  },
  {
    "url": "assets/js/44.d7e27cc2.js",
    "revision": "897752bf3ee272fb1c1529e66e577714"
  },
  {
    "url": "assets/js/45.cdcf972e.js",
    "revision": "c5a6e25f877d4059e1a028585efb3576"
  },
  {
    "url": "assets/js/46.6115ad52.js",
    "revision": "6fa53b832cbef101f22f7b17e23daa70"
  },
  {
    "url": "assets/js/47.3951999f.js",
    "revision": "cf78ff436e51fa34a2faeb39c05d3995"
  },
  {
    "url": "assets/js/48.326aa84d.js",
    "revision": "ab3f8d784d379bbe970db8b078559701"
  },
  {
    "url": "assets/js/49.749045ff.js",
    "revision": "90723f26143f5074740b0290ac23027c"
  },
  {
    "url": "assets/js/5.1ab848f3.js",
    "revision": "ca59ff1aa0a91e75fe41871f7c57b689"
  },
  {
    "url": "assets/js/50.5f8d71d6.js",
    "revision": "b54224bbe72c4ce2b2446fd85e7a22f7"
  },
  {
    "url": "assets/js/51.05bd922f.js",
    "revision": "2ff4f2256c2bff588213e9a7d0405762"
  },
  {
    "url": "assets/js/52.072a347a.js",
    "revision": "e1d9ab327c787fafd148e5cf4041ad78"
  },
  {
    "url": "assets/js/53.434619a1.js",
    "revision": "2dad7792e66f4fdced145bfe7e4803ab"
  },
  {
    "url": "assets/js/54.86f3b50b.js",
    "revision": "217f2fc638c6566077f68f74508c6f56"
  },
  {
    "url": "assets/js/55.9bba2414.js",
    "revision": "95208c6d8444311247442bba1c322e24"
  },
  {
    "url": "assets/js/56.17b580f6.js",
    "revision": "5ca727312f58d1215bcdee7395ad2c78"
  },
  {
    "url": "assets/js/57.ca1cb7e3.js",
    "revision": "02d99efb3d45233fec305e8c1915444e"
  },
  {
    "url": "assets/js/58.b8da80b3.js",
    "revision": "6ea91376b3080b83e1c44157993f8daa"
  },
  {
    "url": "assets/js/59.3df1b21d.js",
    "revision": "7142c364d7e68fdf9ff01b52ce1ddac4"
  },
  {
    "url": "assets/js/6.9d6eb6ee.js",
    "revision": "87edad728f7bc71b79f4818b9486271c"
  },
  {
    "url": "assets/js/60.922e45c7.js",
    "revision": "018b25f875122149dcbaf49ec3bf8dbc"
  },
  {
    "url": "assets/js/61.91615abf.js",
    "revision": "ca0fe004bf13be3c0e891b665be6ce6f"
  },
  {
    "url": "assets/js/62.238a4685.js",
    "revision": "0e3101cc1d7c1c958270df3511870f44"
  },
  {
    "url": "assets/js/63.57908f7e.js",
    "revision": "dfd5a134d0dbf88525bd73a8b865282c"
  },
  {
    "url": "assets/js/64.82b938df.js",
    "revision": "888bd924797823ab53d0ab6905b51038"
  },
  {
    "url": "assets/js/65.64c324b9.js",
    "revision": "dfbd3656180e91f27ea76a71976f44cc"
  },
  {
    "url": "assets/js/66.89df75ed.js",
    "revision": "1ed2987400db4b9c789c1d8e06a5830c"
  },
  {
    "url": "assets/js/67.8b7c03cb.js",
    "revision": "026efdf814a02400c31f22a160e0e4ba"
  },
  {
    "url": "assets/js/68.14808c7d.js",
    "revision": "5b7fafb8460708b5b871ea11a176a5f9"
  },
  {
    "url": "assets/js/69.41e59412.js",
    "revision": "19052f8fe845cae00cb520b13677334a"
  },
  {
    "url": "assets/js/7.71d7c510.js",
    "revision": "e01dc74fccd2a1c6dcf6d3d7413d1eec"
  },
  {
    "url": "assets/js/70.9bba2b45.js",
    "revision": "a74752208076ff676383f8653c9c7237"
  },
  {
    "url": "assets/js/71.28952406.js",
    "revision": "b0aef675d1fb60e1655b73f44798b299"
  },
  {
    "url": "assets/js/72.71c290ae.js",
    "revision": "e127fcda4165f1fa44e3e8e84b2e4bc8"
  },
  {
    "url": "assets/js/73.416c7979.js",
    "revision": "d2535021d856770aca3b401fb41c0721"
  },
  {
    "url": "assets/js/74.307c9f23.js",
    "revision": "dc3fc3ffc0accf528b34f1b60fe9eff5"
  },
  {
    "url": "assets/js/75.c5e7a1c9.js",
    "revision": "327aa6764b993cecc66b068e523181c8"
  },
  {
    "url": "assets/js/76.813249a4.js",
    "revision": "e8dc6ca06bc02a16d2fbaa5131cd5ca3"
  },
  {
    "url": "assets/js/77.bbcad5bb.js",
    "revision": "9df2649619fb041c277cfc82eb41af13"
  },
  {
    "url": "assets/js/78.4c881183.js",
    "revision": "783efd674bfbe00a7f226b61ac63a5a1"
  },
  {
    "url": "assets/js/79.eec065b0.js",
    "revision": "612ce66aa158d5db831ded70b2616130"
  },
  {
    "url": "assets/js/8.369d722e.js",
    "revision": "cfea2985e6cb1677437f9068b072e52d"
  },
  {
    "url": "assets/js/80.68c17f4f.js",
    "revision": "c6bab9b78becd01c41ceb7583b352c59"
  },
  {
    "url": "assets/js/81.aa1a97bb.js",
    "revision": "e72a68996822176cf61f8ed6c6bcc2fa"
  },
  {
    "url": "assets/js/82.622f6628.js",
    "revision": "9eb1aa0bdd4524358cf24a86ddc95b98"
  },
  {
    "url": "assets/js/83.080223fd.js",
    "revision": "2ec627747787c6aa0ff05cf50d9da87c"
  },
  {
    "url": "assets/js/84.4ebce275.js",
    "revision": "c20065c0766914aa4a26532fa48a559d"
  },
  {
    "url": "assets/js/9.7421f77c.js",
    "revision": "5e91ea7dfda7831859af50f54b426cf8"
  },
  {
    "url": "assets/js/app.7687c5b3.js",
    "revision": "c223b7f9bdb62a9d024317b16a2d8771"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "0e7bb3badb7f80e8b397b214b94c8898"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "307e1ac224eb403e0ef6dddfe6373815"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "4d5d14c11680f456bda31ae4891b2b64"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "deff564c970308cb04ab1d1bafef51cd"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "43f01c17e94e6f358da9ed83547d210f"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "120f5ed6b1d7b6be3327657d46aaf777"
  },
  {
    "url": "composable/date/now.html",
    "revision": "86a55dc31cff2edca430b8e94db83789"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "532872f1f593ae508e34e2a9c2c39884"
  },
  {
    "url": "composable/event/event.html",
    "revision": "802b7d1de14846b15ba1943df143b76f"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "a5798c2d00e27e242bcaa74baf0c8ae7"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "1b32d268dd1da579afe2fbad9d225165"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "f4959c53ecd58999894fae7dd8ae848c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "00dc3e373a4b28db14ce39f7764e07e1"
  },
  {
    "url": "composable/format/format.html",
    "revision": "8645c9a0f9892040a9bae5c5bfdfb6f8"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "b13eb05b2020a01cd3e12612dd6433f2"
  },
  {
    "url": "composable/index.html",
    "revision": "5c9c2d3a465f52e923e66b68d8b1dbd4"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "7fde496494522fb008867bda1699d3c9"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "405c286d610c0dcd37857b06408ecdd9"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "22fda30b8a9cacaee1ccbc0ed4cec73b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "959e1e5109bce7405ea6b9e984f1176d"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "b8deccfdcc14d6706305f37fb58a5742"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "3318a1d3e414b86e046e076acfa011fe"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "3fcc59f9673a46baac0958feadbaa011"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "aeef1e5b960085dd277aea2e41642edc"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "5b66ebdf6d6b248112527afd87a1ba8d"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "96997d94814a4d2f3d04eaf8b526b885"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "1b82fb13d2d57e79df416504550255c1"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "7e57cac9357ee7f833cd054e6e716907"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "04dcd73f3b165317fbec1cef2591abce"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "1757cf9cff81b62fa712c9b5d6e698a9"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "ee5eb4df891bcf762f2e9d8648cf2623"
  },
  {
    "url": "composable/web/language.html",
    "revision": "ad619d0dca830bbddea0e0f2df2ca56a"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "97b6329846deb30bbf1ac49067fc9b7d"
  },
  {
    "url": "composable/web/online.html",
    "revision": "aceb97b55056afb6fcff0d1414e47ab3"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "f9a5db72ffa3c7d9bdfda9cfb2c5c07a"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "f0aea449330127cfac92b625b381337f"
  },
  {
    "url": "Examples/index.html",
    "revision": "bda7b7ee735cf8199520a269523b0af9"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "46feb08a707d6e70139970088cfbf15e"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "3171a88ec7603f31ac1e598076de056d"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "84d9b37071bc9e5977feec6df62063ec"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "77285ac53516fb6b404d7c5610bd2b5a"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "19a6d4a66917dcda25caae8d34c0c8cf"
  },
  {
    "url": "img/mstile-144x144.png",
    "revision": "cc6105c0fccdf70fd6935fb66c78eb7f"
  },
  {
    "url": "img/mstile-150x150.png",
    "revision": "820538a3b382930b9d93872aac7e4620"
  },
  {
    "url": "img/mstile-310x150.png",
    "revision": "08d0342c2269809d855f41185958a902"
  },
  {
    "url": "img/mstile-310x310.png",
    "revision": "c25adad82f954fff78bee2ff56f7ad24"
  },
  {
    "url": "img/mstile-70x70.png",
    "revision": "9f09d77175ccda1f0adef3ddab039b25"
  },
  {
    "url": "index.html",
    "revision": "2482f64791202d68f5b822ca0393d76d"
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
