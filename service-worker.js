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
    "revision": "1d965136edb9c0fc26088c88d2770268"
  },
  {
    "url": "api/axios.api.html",
    "revision": "b03d01d5b3b54e268d7648b2e5510648"
  },
  {
    "url": "api/core.api.html",
    "revision": "f9d8b0864e39a0428d81ed12916cc2be"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "a9356aa8a8845962f1fe7d487f627578"
  },
  {
    "url": "api/web.api.html",
    "revision": "df5c8034dd19db605490320237e09958"
  },
  {
    "url": "assets/css/2.styles.3e663280.css",
    "revision": "303e7662bcd2641ed2ce6fedcb3f3a1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.28e086f6.js",
    "revision": "adea09bcde41e42bae7fa9dd3d775fce"
  },
  {
    "url": "assets/js/1.658c21e4.js",
    "revision": "5225c8794102f6a7e777c6a5dd1c044b"
  },
  {
    "url": "assets/js/10.ffe5b804.js",
    "revision": "a6dd6c917130360d3f0f4aeb2045450c"
  },
  {
    "url": "assets/js/11.d380da7d.js",
    "revision": "623162a839d531a27060acfe2bed210e"
  },
  {
    "url": "assets/js/12.4828ff5d.js",
    "revision": "6aeb4d1738526587e38397c0304a36ca"
  },
  {
    "url": "assets/js/13.40ded7dc.js",
    "revision": "479bc79a83286efec033a5303ae18fe4"
  },
  {
    "url": "assets/js/14.cd8b537f.js",
    "revision": "42430fd8123b34cb59d56c88a6b10aca"
  },
  {
    "url": "assets/js/15.8f306d55.js",
    "revision": "38b2c27a8bae4cd7f0244f56dc5ea4ca"
  },
  {
    "url": "assets/js/16.899d0435.js",
    "revision": "fb6b2e229be4ded67d1bf1a9c6b2a718"
  },
  {
    "url": "assets/js/17.73495fa1.js",
    "revision": "373f59a09c812525193df56208c04f1f"
  },
  {
    "url": "assets/js/18.5af566b1.js",
    "revision": "51469581cd93bd6ca28f007af94391b4"
  },
  {
    "url": "assets/js/19.03bcd5c5.js",
    "revision": "d149793fc4e8c258a7cbb1aeced82d8a"
  },
  {
    "url": "assets/js/20.52e3f0c7.js",
    "revision": "a2c4b011916b746bfac62dcd0fd4b5a6"
  },
  {
    "url": "assets/js/21.2e008120.js",
    "revision": "b48a824a2b18c743ca9eee361db36fef"
  },
  {
    "url": "assets/js/22.95e227f4.js",
    "revision": "b4f3c93316bff60d819cc4c22b2329c6"
  },
  {
    "url": "assets/js/23.2cbb8e25.js",
    "revision": "a659961bd3ceb2891c9404f0254ff151"
  },
  {
    "url": "assets/js/24.ad687192.js",
    "revision": "e13fe80aaa39ddf0fe32219fb99cde16"
  },
  {
    "url": "assets/js/25.392f8f3d.js",
    "revision": "48c410667a1c7743b39f9f453f4613d3"
  },
  {
    "url": "assets/js/26.774e57cf.js",
    "revision": "249e6b738fb47d0684c2a61555a22590"
  },
  {
    "url": "assets/js/27.90c7ffea.js",
    "revision": "9b2c0538d807c569d7747511b12c26d1"
  },
  {
    "url": "assets/js/28.f5cff0a4.js",
    "revision": "b44da057cd148bbde6e718e21d4812d9"
  },
  {
    "url": "assets/js/29.7bd56e8e.js",
    "revision": "4ac9230756032ac2bf2cd6a258e12b9a"
  },
  {
    "url": "assets/js/30.4731d3d6.js",
    "revision": "43ca89cc6198fcdfde0f0953e01a61f5"
  },
  {
    "url": "assets/js/31.ea1a18d1.js",
    "revision": "12532e27eb461e4aa4032d514993575c"
  },
  {
    "url": "assets/js/32.45eee03f.js",
    "revision": "ba53ab55f98c8f7392882a6917b4cd51"
  },
  {
    "url": "assets/js/33.140c6a33.js",
    "revision": "6b4a11911f61375410037ea429a6c0ef"
  },
  {
    "url": "assets/js/34.e5566cb0.js",
    "revision": "90d8ee1b84bdf68a8fe1cd4bfc06c8a8"
  },
  {
    "url": "assets/js/35.5674cbf5.js",
    "revision": "c5123d5ac497e75de74c8b6209650eaa"
  },
  {
    "url": "assets/js/36.431512a8.js",
    "revision": "f3f119b3768a32d40ff2d7aaff1c58d0"
  },
  {
    "url": "assets/js/37.0bdac048.js",
    "revision": "df45c05250409641c9ca46352dd5b77d"
  },
  {
    "url": "assets/js/38.fbbdf764.js",
    "revision": "4cf3b05ba5e0bec9a82c24e05ceb727c"
  },
  {
    "url": "assets/js/39.4f4046ef.js",
    "revision": "14aeba47f87a7dbaf72f6a086ae85c87"
  },
  {
    "url": "assets/js/4.2ec7f213.js",
    "revision": "bf86a9ef6631b1d14b2ba295ae64f160"
  },
  {
    "url": "assets/js/40.e5023fe0.js",
    "revision": "309d97312a9eaf70cdc6abd74d5d44c5"
  },
  {
    "url": "assets/js/41.7057df61.js",
    "revision": "6181df48a5cffb165c3052dd1302052a"
  },
  {
    "url": "assets/js/42.4e236b0f.js",
    "revision": "2457553fd92103a0d34a3df981a9bd28"
  },
  {
    "url": "assets/js/43.1524ce64.js",
    "revision": "5d9c9ad4efa7f04892b90bb7dae7d47d"
  },
  {
    "url": "assets/js/44.4b19f41f.js",
    "revision": "d90ef40c8e828eb757348be49e787145"
  },
  {
    "url": "assets/js/45.d7857ec1.js",
    "revision": "7afb92fe7a9639348bd7b602fa102532"
  },
  {
    "url": "assets/js/46.2a44b7cd.js",
    "revision": "b7fdf01944fbdca62d85a29d08aba2d3"
  },
  {
    "url": "assets/js/47.0474ff47.js",
    "revision": "0fda1bc51a95e7665d4cd85a1c86ac03"
  },
  {
    "url": "assets/js/48.72b04f60.js",
    "revision": "1466435b70834a036332e188a6370886"
  },
  {
    "url": "assets/js/49.8f232142.js",
    "revision": "25ae2ae3a9b59851d71324f74aff7905"
  },
  {
    "url": "assets/js/5.4a783373.js",
    "revision": "1950e3d2a30bc09bbc3b3b12dc94ced9"
  },
  {
    "url": "assets/js/50.3b5dff23.js",
    "revision": "0f97290606d3f4209ba630af1e2c019a"
  },
  {
    "url": "assets/js/51.c782c471.js",
    "revision": "dc5a35e50ec8f7913a5b33fe52bdd176"
  },
  {
    "url": "assets/js/52.9277d249.js",
    "revision": "21af323263ff02854ac389f4e9ac9b07"
  },
  {
    "url": "assets/js/53.fe96042a.js",
    "revision": "de8260d26999cb3442e8d7ea9b0b8600"
  },
  {
    "url": "assets/js/54.0be27fea.js",
    "revision": "dba0715a251e317d2e5147dc81808640"
  },
  {
    "url": "assets/js/55.34b8ef75.js",
    "revision": "c7ad2f09e5097479715bc6a27741f9e8"
  },
  {
    "url": "assets/js/56.89175658.js",
    "revision": "e7c6ebef47290da58638b35e70735246"
  },
  {
    "url": "assets/js/57.ae2e98f9.js",
    "revision": "fc7ec9ade29c71df04146ebce9e4f72c"
  },
  {
    "url": "assets/js/58.67d1e2e4.js",
    "revision": "e0eaea9083ffea56530b5469b9251573"
  },
  {
    "url": "assets/js/59.f276865d.js",
    "revision": "7b1ac007fad7f1f605d17eb8c19c59db"
  },
  {
    "url": "assets/js/6.7369e7db.js",
    "revision": "7eba252b145378043edfebb5b3fc6f50"
  },
  {
    "url": "assets/js/60.209860bc.js",
    "revision": "3f5969bfdbcda10dbba5484ef6a2f4de"
  },
  {
    "url": "assets/js/61.6c156e93.js",
    "revision": "db0d26e18c483e9fdd21f5f1b5794fa3"
  },
  {
    "url": "assets/js/62.ba4bd26a.js",
    "revision": "1e6669f8ac73710a033175803db0bf6c"
  },
  {
    "url": "assets/js/63.7e15f86e.js",
    "revision": "d0e4cfa5c3c908f1ba36fa990621f942"
  },
  {
    "url": "assets/js/64.bf3ce455.js",
    "revision": "8f6c51e892c6aa9248b31d34878afecd"
  },
  {
    "url": "assets/js/65.88bc328b.js",
    "revision": "9dc08afc89a88d0ba3cf592897d7b364"
  },
  {
    "url": "assets/js/66.a6f2eeca.js",
    "revision": "a09ecd25b21054bc12f8978c75ddaaeb"
  },
  {
    "url": "assets/js/67.2cfb6838.js",
    "revision": "0656fe790babcc498499283a6e84fa94"
  },
  {
    "url": "assets/js/68.55cde231.js",
    "revision": "49a0f286782959dd142ce6236e14839d"
  },
  {
    "url": "assets/js/69.23b0a08f.js",
    "revision": "1b15bbb8b0f9a1852be408c51ec78d31"
  },
  {
    "url": "assets/js/7.15a5f296.js",
    "revision": "1dff47eb1f041e8f70ac0e9ece8da99e"
  },
  {
    "url": "assets/js/70.a582eee4.js",
    "revision": "9aee353a01ce76cbb1b99de73e50ccb0"
  },
  {
    "url": "assets/js/71.fb830c65.js",
    "revision": "ec9817b532f2018960c6a47dc7e357ba"
  },
  {
    "url": "assets/js/72.993484a2.js",
    "revision": "97149ce099860660bf097bb9fc21ea2f"
  },
  {
    "url": "assets/js/73.25f5e8aa.js",
    "revision": "db66ed7a5ea6184dbce38fcd529003aa"
  },
  {
    "url": "assets/js/74.c59243e3.js",
    "revision": "a1a34c49fa2b92a19b07aa2d6b0df63a"
  },
  {
    "url": "assets/js/75.66702d0d.js",
    "revision": "151e8f63aea6384ad78d54c94b2065d0"
  },
  {
    "url": "assets/js/76.6cb4609d.js",
    "revision": "dbd41194caa26de392efd7205ceac9b1"
  },
  {
    "url": "assets/js/77.195c3850.js",
    "revision": "6b38394a86b0c94e00fea4ef3b565567"
  },
  {
    "url": "assets/js/78.16e96023.js",
    "revision": "45e5d6322e37f63928ce958e0bd6c664"
  },
  {
    "url": "assets/js/79.849e7c06.js",
    "revision": "11983f1dd3a8101c3ce41bb491fed0c3"
  },
  {
    "url": "assets/js/8.81065d17.js",
    "revision": "bbe66df85e2342ad5a5bc5dd9c34def1"
  },
  {
    "url": "assets/js/80.1137ae58.js",
    "revision": "32132f5dcaf92f3f2355eaaa11f2b7ff"
  },
  {
    "url": "assets/js/81.0843d32e.js",
    "revision": "c0ab32a677dedd5170a10b8c1dceb70a"
  },
  {
    "url": "assets/js/82.ebc3594b.js",
    "revision": "938d5c38720a2b496b4df08a30f70f96"
  },
  {
    "url": "assets/js/83.088c705c.js",
    "revision": "2c7e8cf7da83e112bbb884ef85591b1b"
  },
  {
    "url": "assets/js/84.fcca30e8.js",
    "revision": "fa7fe193e86c277045965ac985e9dbaf"
  },
  {
    "url": "assets/js/85.5f5f2d4c.js",
    "revision": "a5f3067619aa5b3cb937505d31f1fd48"
  },
  {
    "url": "assets/js/86.e50d8b91.js",
    "revision": "d7a9560273e57d5484871a84dec143d2"
  },
  {
    "url": "assets/js/87.ea19dd0c.js",
    "revision": "3f05189805fcad15371a3af823dd9a2d"
  },
  {
    "url": "assets/js/88.8235e01c.js",
    "revision": "f888d9b5baf6e06e9ee3129c44d44e5a"
  },
  {
    "url": "assets/js/9.2f2c961c.js",
    "revision": "39cb07a49388cd9ffdc2d3f2897d2434"
  },
  {
    "url": "assets/js/app.1137e82c.js",
    "revision": "82c7a8e5db6107b0fe5361ef6e08e22c"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "e8c8b57fb453d6956e7ec857d33cb73e"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "56568ac019649048913b484e0090741a"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "8823ab9dcab0c79d6e660a57aa70726d"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "350f374033048affe7dc6304d340e321"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "c439d1b6b46767e0afc1bceaa0aaead0"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "0570cb5dcb536a1c3e0a19b4635357df"
  },
  {
    "url": "composable/date/now.html",
    "revision": "424995dcf9473850f2be9e20235526d4"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "de8fca60f2e38dc62284f6808eb59058"
  },
  {
    "url": "composable/event/event.html",
    "revision": "95dc17787332612e83e69ce4ba933f9e"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "528e7fd67a7663ba7b7abd78f7ff3101"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "19ac44b3a1b9bb1de869c522ae9a0f8c"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "62f5a41b6182826b13b18e0f7a02d505"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "a55010d79fa87b4e451fe5bf6ffb00db"
  },
  {
    "url": "composable/format/format.html",
    "revision": "c8334dedacc2f87faaff49770d85b5b3"
  },
  {
    "url": "composable/format/path.html",
    "revision": "aa3b2f990a9b45fd865ef55b446004a9"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "93e13c2ac095cc3e8d0091d8201efcbc"
  },
  {
    "url": "composable/index.html",
    "revision": "9acdebeb8c442819b95b15f36db15ce0"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "89f85c83ab219e04d840da59126c7465"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "16f2b99332a43911b330f73b841be1b9"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "097e54381a7968ef1c701a4db1c34f5f"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "32bbaa03fdb5ec046240676a6293b4eb"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "7ede45c0e6b7fff3b5578202f372bf95"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "9190f68f48af5c284ee4aaa1e0705593"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "744f27c591e56666e5c9838e3ce38845"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "b6e0a19eef1ecfb9e87920fbb481659f"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "f9801edb1b590cd909f99f2222ae270c"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "be0b6710df07d1dd0b68c00933002397"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "5d5e12126678e2bfc27ec6fe4fe40168"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "5bf68bd7afa25d523266be055e264b29"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "fd2f272491fc6a8772e89ac1a6370d5b"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "43b4e155c5adfb7e7789508b6cd5777a"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "2b3dbd12a420e4afd0e8be7f6840565e"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "10c810ff0241714db408b9be24945a85"
  },
  {
    "url": "composable/web/language.html",
    "revision": "737bf20f3f093755b8b5bc0db83d151f"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "ea4730aa1727c0c598f9bd55b09ff152"
  },
  {
    "url": "composable/web/online.html",
    "revision": "a8a953a19d439e1f37d2ee4cf24ee4ff"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "4bd563fcd7b2bf510ea6ff0ce2faf573"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "13af4e1b4b681108f4ee5742f64d8d2c"
  },
  {
    "url": "Examples/index.html",
    "revision": "7541e8c52b9b07995b910af155485b5a"
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
    "revision": "f71b71b154f9b297df46c748176bac43"
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
