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
    "revision": "9bf7fdf397722d6e9f5f37d01de7c50a"
  },
  {
    "url": "api/core.api.html",
    "revision": "730e34c1026288d7836b9780e1ea5b99"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "710152563e3e03816a5922b2a045f6ed"
  },
  {
    "url": "api/web.api.html",
    "revision": "1c453fbc639bd47802936f1878d09493"
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
    "url": "assets/js/48.6b20c49f.js",
    "revision": "acb06f9befdd111c7d00589a1c757663"
  },
  {
    "url": "assets/js/49.2ce7f558.js",
    "revision": "85800d14ea569325ec8b119873c062c2"
  },
  {
    "url": "assets/js/5.f401d8e6.js",
    "revision": "3112466ef2993e7801251b5047bb2989"
  },
  {
    "url": "assets/js/50.0f6fd826.js",
    "revision": "9dae0050113885723582312be3222ef4"
  },
  {
    "url": "assets/js/51.2556e5b2.js",
    "revision": "91191172a2f463983b1c80769d7bcfcf"
  },
  {
    "url": "assets/js/52.10f315f1.js",
    "revision": "3f7de4f0853a2acdeecf416357011508"
  },
  {
    "url": "assets/js/53.40da227a.js",
    "revision": "b375dfb776489fd6b6f15e7f6b8f9655"
  },
  {
    "url": "assets/js/54.c6983f2a.js",
    "revision": "a6d3a446139df9f387276cf8edf6471e"
  },
  {
    "url": "assets/js/55.a4272215.js",
    "revision": "1352a4ca52673b482f3b53ca0dd254df"
  },
  {
    "url": "assets/js/56.7c7d4bc8.js",
    "revision": "7666961244443047948c41c3e8820940"
  },
  {
    "url": "assets/js/57.6ee1ef18.js",
    "revision": "4645066583d876f702ee5e7e7dc04077"
  },
  {
    "url": "assets/js/58.a28b40e7.js",
    "revision": "fcaa88f34cae9aa4b4870527fb46c6bf"
  },
  {
    "url": "assets/js/59.01b01265.js",
    "revision": "2771bb281daaf7e6d03754a065fc49a0"
  },
  {
    "url": "assets/js/6.276b1461.js",
    "revision": "a5d061a4379eaa2f473dbcb943c6e3d0"
  },
  {
    "url": "assets/js/60.92899935.js",
    "revision": "cea56c1cbde52ac383d633c768fa9972"
  },
  {
    "url": "assets/js/61.75468c21.js",
    "revision": "b7e4e60d7487bceded4d91e3c4e16439"
  },
  {
    "url": "assets/js/62.7dd2aec1.js",
    "revision": "e69baa143464762d9ef227d1be5284f5"
  },
  {
    "url": "assets/js/63.862b6f40.js",
    "revision": "75fbeacf845eb87f55c036bd7cb8952f"
  },
  {
    "url": "assets/js/64.aac1b739.js",
    "revision": "313e0bb9c3273dec266a77de3ba58c57"
  },
  {
    "url": "assets/js/65.99192d56.js",
    "revision": "5a006a34f93b717cbb20b3cacadc9b0a"
  },
  {
    "url": "assets/js/66.125f6482.js",
    "revision": "1a0418da17f39a2b985cc30b9d4e00cd"
  },
  {
    "url": "assets/js/67.1d6a60ab.js",
    "revision": "e7bdea44e7db84f72266fe4045f7a955"
  },
  {
    "url": "assets/js/68.18b16f86.js",
    "revision": "2f9c42f9cdd2202d5bb15be3081cf173"
  },
  {
    "url": "assets/js/69.d013e21f.js",
    "revision": "0a546f24c3d26c33527a3303ffeda03b"
  },
  {
    "url": "assets/js/7.69da8b46.js",
    "revision": "8db44b8fe2b33c15b4d0a9a98bb1a86c"
  },
  {
    "url": "assets/js/70.2371df19.js",
    "revision": "6883b71250ebed01fa413a4c4c9d5daf"
  },
  {
    "url": "assets/js/71.7dba4e0d.js",
    "revision": "95ff89f46df07e9275f306a9e95d4ec6"
  },
  {
    "url": "assets/js/72.78e82bb7.js",
    "revision": "b3eef474618a6475b8ad66426d10b5a5"
  },
  {
    "url": "assets/js/73.c130d87e.js",
    "revision": "e9a056110b96a51e70e186843757068a"
  },
  {
    "url": "assets/js/74.d3ee4fec.js",
    "revision": "e85e41fc40b6b9a88540f0dc2f7abca2"
  },
  {
    "url": "assets/js/75.6756b0d5.js",
    "revision": "d36fbc05b587680447e0ccded6caca91"
  },
  {
    "url": "assets/js/76.59913671.js",
    "revision": "e6c37e8aee5c05140591170132dffdb0"
  },
  {
    "url": "assets/js/77.e44e8528.js",
    "revision": "1466696724c7332b796b980498051383"
  },
  {
    "url": "assets/js/78.8af3b0a6.js",
    "revision": "f8cc3c8b70f16441694c70069a74684d"
  },
  {
    "url": "assets/js/79.18d12a86.js",
    "revision": "e31a0e61e9dc3545538a8100193fd3dd"
  },
  {
    "url": "assets/js/8.017e3b11.js",
    "revision": "f7d388e1b7da5c67e959c3a1fc85d7ca"
  },
  {
    "url": "assets/js/80.556bb1bf.js",
    "revision": "9181244557bf142efda7c0dfd5109788"
  },
  {
    "url": "assets/js/81.eaceaf91.js",
    "revision": "d5af0cd98371680c04bab2bc6ada4dea"
  },
  {
    "url": "assets/js/82.3f06cb7c.js",
    "revision": "39a48923e76b4e9d8ff54eed992423c6"
  },
  {
    "url": "assets/js/83.7c389783.js",
    "revision": "9703422b4a320360d67090765783ad5c"
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
    "url": "assets/js/app.2c550d84.js",
    "revision": "e4b6d5011eba62f22930505235eeddba"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "8d417235c2295dd701cb0cdf19f37143"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "afd0a3b226ecc3b43b1663079275b0cb"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "99a4103a343acb91ca18b9758296adde"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "6f06a7afcb46502534b490276c85826f"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "167c3495051b07ac4fd7642e3ee73d3f"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "7d7a1692c7aced5a0152010290eb6062"
  },
  {
    "url": "composable/date/now.html",
    "revision": "18dafd72eeddcf9bdc8884d012ebe611"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "fca43a2ac25b7b4d00c3e6f9be4076de"
  },
  {
    "url": "composable/event/event.html",
    "revision": "c93edc2a614a96d34fca93d3853fda73"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "611e9dcfb47b34ff48673a31ce073c1d"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "7bbb717870bd217dba11454bf2f64d05"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "f997fbce4b9b6591b696034fec4df7c0"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "bc97057507d2430a963ee72bc46db546"
  },
  {
    "url": "composable/format/format.html",
    "revision": "f80ad19329924f5134b1b86e0bacd8dd"
  },
  {
    "url": "composable/format/path.html",
    "revision": "28c7524008862fdcb8fab38870ab1ced"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "ebe5d505bb3303a95392486bada3f988"
  },
  {
    "url": "composable/index.html",
    "revision": "492f1939e463102c043718de513f0709"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "42b68a77509a63138920e8c9a586365d"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "7318ba8cd7d83e5d841bbc738f84f05e"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "9e1eb5d6d0c0e2cbba733eeea8c58f61"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "1cded5a8196557e2281311e94a393e49"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "9ea00a7fedb72a091915b204b94d1142"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "4d312ceac0278213d6cdf7b7f5b33a21"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "955f3e595efcff4376e322cce6d6faf9"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "ec9716077e8118e15201f47c53d053f9"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "d6d8841f73bf564e5a902fe83fa5c8b0"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "a677b69ef6e77f4e1ab54ae7ef9ad2b4"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "ca0c4e475a9b41e97fa5eb7468034957"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "a5ddc5a2213e47917cbf81980fa8fac4"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "6ae1a4bacbfe473fcf12950d4e23907e"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "db000168bbb5ac90aa5b43967732c1aa"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "d42394a9ff8dc38a31b1a64163ae8e80"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "bd7916a30b525517db19bd45996569bc"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "5a02008040c3e584acda1ee1e4ffcf65"
  },
  {
    "url": "composable/web/language.html",
    "revision": "d92d38ee5fa902ea90c654bc86d57f42"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "0d857677ba6c1c74047d596cdad80ee9"
  },
  {
    "url": "composable/web/online.html",
    "revision": "262b68d75bc7193d38c8d32cdceb536b"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "666297c70c68135d823271e805ff6dff"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "8f2c15eb1ce2c778a3a5d2776de685f3"
  },
  {
    "url": "Examples/index.html",
    "revision": "be82f89b8fe344071c150945160be3ad"
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
    "revision": "11860a0e30585a4f013e6470acb1a1a5"
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
