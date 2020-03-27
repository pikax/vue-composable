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
    "url": "api/axios.api.html",
    "revision": "90830f5a1541034e8b4df8420c8919ba"
  },
  {
    "url": "api/core.api.html",
    "revision": "90ec64c39c923715e02bcf5429c3f569"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "7c2ad3849847d7e63f93f6230f0e16be"
  },
  {
    "url": "api/web.api.html",
    "revision": "8dfdd7274c60d969029e98ccd95f74f3"
  },
  {
    "url": "assets/css/2.styles.dce03dc8.css",
    "revision": "e4c0716c64420de1f2821532a714074b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.87bc3861.js",
    "revision": "1a43606047996eef56dd319a16ef1419"
  },
  {
    "url": "assets/js/1.f8bfec42.js",
    "revision": "1bdb893d1c2e165560a29e5a7b6b285b"
  },
  {
    "url": "assets/js/10.27c4105b.js",
    "revision": "82e1f03c60a5a4c64c7e14dfae20d291"
  },
  {
    "url": "assets/js/11.75d5cf2e.js",
    "revision": "e03ff15a1cd85750dff7bfb02c9e3925"
  },
  {
    "url": "assets/js/12.4d90c6b0.js",
    "revision": "9803792309b7b1905ca4eda5f358e8e6"
  },
  {
    "url": "assets/js/13.82eb5799.js",
    "revision": "b300ecaa77e7c34c384ea61416558d7f"
  },
  {
    "url": "assets/js/14.2de7aaf3.js",
    "revision": "2f450a2f5a3b39689d6f6286848a0b3f"
  },
  {
    "url": "assets/js/15.125af693.js",
    "revision": "47a3de691ce080dfa8544c4cf258b6e4"
  },
  {
    "url": "assets/js/16.bbecca59.js",
    "revision": "7afc948be7362c44b0b2e6a4ef043481"
  },
  {
    "url": "assets/js/17.d81a0f93.js",
    "revision": "4bfbe05b2cda4d4ce337377fe2a58280"
  },
  {
    "url": "assets/js/18.a2fced28.js",
    "revision": "69ee6c9c6261216f256cb82213113f6b"
  },
  {
    "url": "assets/js/19.f91e64fa.js",
    "revision": "c4d49ec4869aa58d9409f67e67c893a3"
  },
  {
    "url": "assets/js/20.45437487.js",
    "revision": "a1d4fd0a550c3e37b1fcc02a7b4b728a"
  },
  {
    "url": "assets/js/21.e5089062.js",
    "revision": "14be3a0d50b7d1f3695f465b7db6febe"
  },
  {
    "url": "assets/js/22.b8befd5e.js",
    "revision": "599c7ba76228cebccfb541ddda1a913a"
  },
  {
    "url": "assets/js/23.4fd0dbab.js",
    "revision": "72fa231b8d42341a47591862c7163fef"
  },
  {
    "url": "assets/js/24.483a38be.js",
    "revision": "7515c2dd3ab78d2a42c959a53d55f442"
  },
  {
    "url": "assets/js/25.bf2f2f50.js",
    "revision": "0a2baa53544368af1aca17b3ac7a7a61"
  },
  {
    "url": "assets/js/26.f03820d8.js",
    "revision": "8910dfc29f4077ae5d216a8d678a6162"
  },
  {
    "url": "assets/js/27.4c51125a.js",
    "revision": "04700beb6195c77cc637f5a53c7f7929"
  },
  {
    "url": "assets/js/28.3259aee2.js",
    "revision": "154324607ab761e205e14b45b9d0f3a3"
  },
  {
    "url": "assets/js/29.bd581ba6.js",
    "revision": "46605ea5bda43d27db57dd1789f7359e"
  },
  {
    "url": "assets/js/30.755a8c22.js",
    "revision": "8cab0c691f6ec37481f916533e232477"
  },
  {
    "url": "assets/js/31.a90155ac.js",
    "revision": "3ec771058808ca7e5973434dbc726074"
  },
  {
    "url": "assets/js/32.9e92575a.js",
    "revision": "228272ee388bca7572b2355318053153"
  },
  {
    "url": "assets/js/33.7cd8a886.js",
    "revision": "b18a34bb3012ee86db1ade5aaa16748a"
  },
  {
    "url": "assets/js/34.5c08350d.js",
    "revision": "942ab41a06a9d615919f5d21b349d426"
  },
  {
    "url": "assets/js/35.24a4ef7e.js",
    "revision": "ad4d992e0e91154b893fcb3949628b80"
  },
  {
    "url": "assets/js/36.aa62c99a.js",
    "revision": "1eadd9baeb25acda95331da026b1a234"
  },
  {
    "url": "assets/js/37.d22de2f3.js",
    "revision": "d4a35b33bd856b48594e17fcfc98db13"
  },
  {
    "url": "assets/js/38.63de58c7.js",
    "revision": "1e08fceaf843849097e53d6976aa4a36"
  },
  {
    "url": "assets/js/39.f319d0b1.js",
    "revision": "47cb7fc12aa4c37cf936a4f742529db6"
  },
  {
    "url": "assets/js/4.a0c5dff0.js",
    "revision": "d1c185336e36bcb7ff02ef3aef48d0c0"
  },
  {
    "url": "assets/js/40.01dd50a0.js",
    "revision": "fbd7b8d797ffd472f4b8e0591c37c76c"
  },
  {
    "url": "assets/js/41.8fa90a48.js",
    "revision": "400beec6ecff9e2ae9a50ee6937162b2"
  },
  {
    "url": "assets/js/42.9d125464.js",
    "revision": "cc97498fb0a10917d6032f600e438fb2"
  },
  {
    "url": "assets/js/43.06627b11.js",
    "revision": "b3b436ffa604c62b89322c37ffec97b6"
  },
  {
    "url": "assets/js/44.23a080f8.js",
    "revision": "4a1570a5dd846922ebe2b8e8be8cd8f0"
  },
  {
    "url": "assets/js/45.3224d11a.js",
    "revision": "22e9918c01837e1f251f328e1e29c94c"
  },
  {
    "url": "assets/js/46.d2bb587d.js",
    "revision": "482920bd83df10f0b60038f92dcad171"
  },
  {
    "url": "assets/js/47.9c5d8e13.js",
    "revision": "69f10d103ad0b0a6d84249dc1e540dd3"
  },
  {
    "url": "assets/js/48.59cfb36b.js",
    "revision": "aa9defeb26e6b86327679b31d8155e15"
  },
  {
    "url": "assets/js/49.c9866eb0.js",
    "revision": "a7c0d02844c136eaf2628543c59bc7bd"
  },
  {
    "url": "assets/js/5.f401d8e6.js",
    "revision": "3112466ef2993e7801251b5047bb2989"
  },
  {
    "url": "assets/js/50.c43af26a.js",
    "revision": "74ff5267a20c87df364e52b95ff94984"
  },
  {
    "url": "assets/js/51.01b01e0e.js",
    "revision": "0c0a08321d51f6959d4e9608a866fc4f"
  },
  {
    "url": "assets/js/52.a385df5c.js",
    "revision": "bb9bfb8b5bfed7f60a222f70d5da4d34"
  },
  {
    "url": "assets/js/53.42629cca.js",
    "revision": "2fc289bd850c867bb66172d730f90352"
  },
  {
    "url": "assets/js/54.b0ca3cb1.js",
    "revision": "b64a8ff23480c88088a59e4ac0877520"
  },
  {
    "url": "assets/js/55.271683c6.js",
    "revision": "e8b452590fea78e67dce920390190dde"
  },
  {
    "url": "assets/js/56.052f62d7.js",
    "revision": "5a4049937f3ab8e84b0bfc90b3de23c9"
  },
  {
    "url": "assets/js/57.e9e85313.js",
    "revision": "0d12df5651ec86fe2442493f902f93f7"
  },
  {
    "url": "assets/js/58.a19dca8e.js",
    "revision": "aeef5bdef5b44213a98cfbe5da074631"
  },
  {
    "url": "assets/js/59.3797a9ee.js",
    "revision": "6dcb468f867a15196e8ce6a2c593cc24"
  },
  {
    "url": "assets/js/6.276b1461.js",
    "revision": "a5d061a4379eaa2f473dbcb943c6e3d0"
  },
  {
    "url": "assets/js/60.731e48de.js",
    "revision": "c31724a9ee324f327e20e7970f03d6a6"
  },
  {
    "url": "assets/js/61.72457926.js",
    "revision": "fc321c545e4e400f8bba8e7ab65fbf79"
  },
  {
    "url": "assets/js/62.fe1bbd0c.js",
    "revision": "e52400701f1ee5b979c5373ae972e24b"
  },
  {
    "url": "assets/js/63.aa86718b.js",
    "revision": "3db0ed846febe313d9252cb34628c28d"
  },
  {
    "url": "assets/js/64.17411afe.js",
    "revision": "d857cd33de559c632278eedc899bca71"
  },
  {
    "url": "assets/js/65.acb21c20.js",
    "revision": "46a49f80c164803632016ec60497ffb4"
  },
  {
    "url": "assets/js/66.19f4f7d2.js",
    "revision": "0c35ebc276f0e24fda3b219d0474e22f"
  },
  {
    "url": "assets/js/67.18b8c2a3.js",
    "revision": "95b1164f94d446b06957dc2711fd535c"
  },
  {
    "url": "assets/js/68.a1657468.js",
    "revision": "68182cb71cedc94fdd55a03e808018bd"
  },
  {
    "url": "assets/js/69.0b3e142d.js",
    "revision": "370b5e1e1ce7b1f11a34d8eb52bcf241"
  },
  {
    "url": "assets/js/7.69da8b46.js",
    "revision": "8db44b8fe2b33c15b4d0a9a98bb1a86c"
  },
  {
    "url": "assets/js/70.f86574bb.js",
    "revision": "d1b9d13bfcb4a40be22c73d515cdcb5f"
  },
  {
    "url": "assets/js/71.9d81fa5e.js",
    "revision": "b1dd38ef45c1b604bfa649b15e439c15"
  },
  {
    "url": "assets/js/72.ee170bba.js",
    "revision": "4e5ea1ad7974b919b406bf60d2b6195d"
  },
  {
    "url": "assets/js/73.98d84be1.js",
    "revision": "a32eee25902e87782dddfcd747b599af"
  },
  {
    "url": "assets/js/74.241246fa.js",
    "revision": "4b2812c86b615127b794d6fdac99d31a"
  },
  {
    "url": "assets/js/75.7a25c91f.js",
    "revision": "43961043b1842a51269f3767b05be405"
  },
  {
    "url": "assets/js/76.67e0cf5c.js",
    "revision": "26717f162c2cfb0eb1a511c239cb752d"
  },
  {
    "url": "assets/js/77.15174a69.js",
    "revision": "10d1ee5267767469d7c1077735737ecd"
  },
  {
    "url": "assets/js/78.6a408cbd.js",
    "revision": "cb473ba31fac1a4cabb59c6163507735"
  },
  {
    "url": "assets/js/79.5f914ece.js",
    "revision": "3f7c3345116fe44df18050f3487dd830"
  },
  {
    "url": "assets/js/8.017e3b11.js",
    "revision": "f7d388e1b7da5c67e959c3a1fc85d7ca"
  },
  {
    "url": "assets/js/80.9c103a30.js",
    "revision": "9af8f627d1d9ac1ad5e66fd3ab0da36f"
  },
  {
    "url": "assets/js/81.2e82901f.js",
    "revision": "63a4f677f3a4a779b72878820762ff30"
  },
  {
    "url": "assets/js/82.1d2cf7bb.js",
    "revision": "cbffd91ee8f33101b20246de096e030b"
  },
  {
    "url": "assets/js/83.31725934.js",
    "revision": "53f42384d0499e7b52dfb1c87e038dc3"
  },
  {
    "url": "assets/js/84.bc06032e.js",
    "revision": "9208f567131d4250c13d117f65f4ee5d"
  },
  {
    "url": "assets/js/85.6fb684c5.js",
    "revision": "028ade86e76e7b918d668a2cde95e26e"
  },
  {
    "url": "assets/js/86.f0b5409e.js",
    "revision": "3afd9310ca0fc2fc225dfc4de9b70263"
  },
  {
    "url": "assets/js/87.58c748ca.js",
    "revision": "2cc119e6727ecda985135f8736998b57"
  },
  {
    "url": "assets/js/88.10cf9b7f.js",
    "revision": "cf8a0ac25c86beb0a45be0f73f766f27"
  },
  {
    "url": "assets/js/89.89693f00.js",
    "revision": "61d55bed5791f4f7003747c032622d1a"
  },
  {
    "url": "assets/js/9.2ecb6cc0.js",
    "revision": "65959f57af28434cc1ce7440d5b77e59"
  },
  {
    "url": "assets/js/90.ac56d790.js",
    "revision": "4314a7b672d492e85eb3d936e8b3bcbf"
  },
  {
    "url": "assets/js/app.978d6870.js",
    "revision": "c02cc5651474150f1ba95d6381bc66ec"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "c3fd954d7a8be07764b0f5ce0aa3aa59"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "28d50a1d13eac97a1d0859c504cf545f"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "b2f4034cf9f4e9a63bc64b716df0f264"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "23e6f8d20d82e77308b4ee4a52499ac2"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "558a0b31fb2b9216d47d5b3d95cb4f59"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "4d0a1cd853316f5c6288d038010b4640"
  },
  {
    "url": "composable/date/now.html",
    "revision": "ee0c04a7e577d9f0d2b89c5ed2a1a5f7"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "86c6a3ab2d99b6fd0604f07f3d96cfc1"
  },
  {
    "url": "composable/event/event.html",
    "revision": "5ed5a7563df7db59316b9c4dabde4d4a"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "d703bbe400a1c89045924f3c7a2475a3"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "83b27bbe8030dff83ee5e83a0626cb17"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "1bed7b871d6636e6dfed7718e410c343"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "b1b77a45efa74e696c0120abd5920060"
  },
  {
    "url": "composable/format/format.html",
    "revision": "4a781186c616e8402d4d99213aa22038"
  },
  {
    "url": "composable/format/path.html",
    "revision": "77673b447f81cf7b05d23e08c45fc75f"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "6ea0d01fca3a903e52f4a332cfb8faf1"
  },
  {
    "url": "composable/index.html",
    "revision": "3bda76403ceed06640f31b2ef4506fc9"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "a6d871f3df22b2980036d50748fdc167"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "4bfd602495797071702b193cb406c867"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "19405f3f56865ec39d8f5ef51501f8ef"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "4bdf6ac174de4c40ef828d33bcacb503"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "3fb65b6e089a2dbd1681dbb6c91d8fbc"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "fb0159d99a41d821c34e4e3da48f3a13"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "661558262e0c79b57339686729d1450d"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "f7b9757157596511610feafe450960fc"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "66466b0f75f1d811e9b008a6be2021da"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "c437f130c344cfb09348e82a5cf69357"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "e8594f94cfb20ae4660fcc7ac60049b6"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "d893e00803917d4e19f345f726c3cc0b"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "975bab52926b4c9068fb28081239bed8"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "a40a16da34b76860c77766f62302503e"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "324991c98cbd2867b1e8bfcf8a177bcc"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "b654f30df3403937c227e75a01cc1f2e"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "a2560f43cb4617380c215253dd3dc678"
  },
  {
    "url": "composable/web/language.html",
    "revision": "9a19ae991e88eede6a120909708d49cf"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "7d98b4f6c0a0dabeee9e2de1fe829b07"
  },
  {
    "url": "composable/web/online.html",
    "revision": "25136c1d8bda6d7222eac5417d3f290f"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "77ab9178761eaebaa6bfffcecf2226f6"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "ae4bd207a42ef7b2e1d14be254aaa6c5"
  },
  {
    "url": "Examples/index.html",
    "revision": "3d43f5df1eae5efe976df90186aea1e8"
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
    "revision": "2eeb4fa81442569be533f53b5363809f"
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
