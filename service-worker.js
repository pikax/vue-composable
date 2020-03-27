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
    "revision": "68572d7e5a9af0dc4cf03d31db7b11c0"
  },
  {
    "url": "api/core.api.html",
    "revision": "8b6431a3f61a229df2e0a26bb9abd328"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "28608134742154823bfd9534d5601a2d"
  },
  {
    "url": "api/web.api.html",
    "revision": "812b2cad6369f79f08760f2aea6aeda2"
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
    "url": "assets/js/app.f8bd93b0.js",
    "revision": "622af03c528278d57fb2278f450c03b4"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "c93fe0479f6c17ecccb5c201feb4e1af"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "bf768020c7c3bd4f09d4804af2081165"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "fb57464ed6a2d8435018499b40546d39"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "ca4bd3eb77a41ce5cd2f62021db35f26"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "88c720d6ccedfbf57fed8c26d60b1ad3"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "8c055261494cb65df404c912063a624e"
  },
  {
    "url": "composable/date/now.html",
    "revision": "bbc7ff99ecd4e47ad9d7c563955e24cf"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "7975b699be24e0c710dd5b5d2361f243"
  },
  {
    "url": "composable/event/event.html",
    "revision": "b6f2404d935f108ca14af9c5efdf6a7e"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "e3323f959a052f95637a0a697e0a6ffb"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "a7f8826a4baa8c2337013bb59d2c08f3"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "ebc5e9c5d386a24283a926b4a87ceab7"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "f4132bae2a0201a066f0e3ecd902959e"
  },
  {
    "url": "composable/format/format.html",
    "revision": "31ee2fe5c5ce630b15a7b7071b14c640"
  },
  {
    "url": "composable/format/path.html",
    "revision": "b47a4e21710534c73262e6e188c2d165"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "b55b78d6f7a3b2e0980bc5f4caacbba1"
  },
  {
    "url": "composable/index.html",
    "revision": "2fbfcba3074720d43c5c1edecac7a95b"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "32c027770e6a12ad50f131b1aeda327e"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "f32b768402f8ca8c88a5d6578697ca07"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "9700286e2edaee07501e26ff7695135f"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "6ec697a766b38955b64a86246e53a3cd"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "7c1ec734e17e4e3b70549725b04114a8"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "26b565b930de60be33f01860652936c4"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "d0d4ac003d49f2ed578e7aea2b294204"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "90d8ee454a87f0733e8fadd5a0c3addf"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "195ec5625485c7c44e71bf6039b77466"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "0507117d917ebc556e51012bfc61da5d"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "e0b23419780b172f208559bbe8ab989b"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "548bd80fbeb223d5ad5abd489c922af7"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "0083918307881da6e3e89cd44be07994"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "c2da5f3c31304bb73bdbdfe34b66bde3"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "025ee7ca41b320dff6eb17c93f3e3135"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "b5d775ed99038107773fd43c6b569c67"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "9555e56264e043fcebc912e20c5e66be"
  },
  {
    "url": "composable/web/language.html",
    "revision": "9940f8d9211b44daf8ed5d65cc23babe"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "14c13116abbb7bc7cfd64b498653cd91"
  },
  {
    "url": "composable/web/online.html",
    "revision": "a23afd1120f2aa8cb02226bb8d3d74a2"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "cd2a349d6780bd2121bd65e01b67e6f5"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "18fe6f633331118dbe396f4418c42fe0"
  },
  {
    "url": "Examples/index.html",
    "revision": "9d50a77fe855418f9f33155e273abc81"
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
    "revision": "62dc41ea8c2dbce2a079a5464bfd29f0"
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
