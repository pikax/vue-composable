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
    "revision": "607607cc46cbb7f84311384f93b961a3"
  },
  {
    "url": "api/core.api.html",
    "revision": "3b8d05020f51da6264071122c4ec2715"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "6ab7553fd0efb04ef3e63074f27ca13f"
  },
  {
    "url": "api/web.api.html",
    "revision": "070540d2e7898c5843259d11887ca5ec"
  },
  {
    "url": "assets/css/3.styles.345ee591.css",
    "revision": "79d2e93e4320a03f34e85f105475a1d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f804dd8a.js",
    "revision": "e418e5999c5db08bc062535067031256"
  },
  {
    "url": "assets/js/1.0e696007.js",
    "revision": "7838a2c9fac8293d92716bcbdc74db41"
  },
  {
    "url": "assets/js/10.3c6c78ba.js",
    "revision": "6b0d6c7d3a9d8a94dd7b6f5a8021e4d9"
  },
  {
    "url": "assets/js/11.0b085360.js",
    "revision": "5ca3a5905be585f6a9175666954c0cf5"
  },
  {
    "url": "assets/js/12.aea1923a.js",
    "revision": "a8724c21d26cb1a5d0969fac88f418de"
  },
  {
    "url": "assets/js/13.fc1dbe3e.js",
    "revision": "87073f174ffb13bf770c705a211b427f"
  },
  {
    "url": "assets/js/14.0cd8e4e0.js",
    "revision": "2d01deefc24533903b1c1f0d0d06d165"
  },
  {
    "url": "assets/js/15.b1b4b1af.js",
    "revision": "d6f4fb8a60ae5113edacd6d05a688a03"
  },
  {
    "url": "assets/js/16.196b00b2.js",
    "revision": "2be47bb3b92e6e6986b051fe8b9cfda2"
  },
  {
    "url": "assets/js/17.e8bc00c5.js",
    "revision": "1c628d8af7789baa4e564efb5a6b8d0e"
  },
  {
    "url": "assets/js/18.aaec9ecc.js",
    "revision": "8163839e1425cdae7a16becffb45120e"
  },
  {
    "url": "assets/js/19.39c55e31.js",
    "revision": "6077035137d3c79e4b896523f510717e"
  },
  {
    "url": "assets/js/2.ef8f7dc5.js",
    "revision": "a9fdb9e2940ae279f562254f8e549922"
  },
  {
    "url": "assets/js/20.34339f76.js",
    "revision": "90d3b5274f2ab30f4f9356c6374dd732"
  },
  {
    "url": "assets/js/21.8b6225db.js",
    "revision": "c4819754e20098c7e5fa4e901d8ee500"
  },
  {
    "url": "assets/js/22.4f1a6bb2.js",
    "revision": "47790e95ae604b337ac3064db5330b42"
  },
  {
    "url": "assets/js/23.a135765c.js",
    "revision": "7d51ba915030ed278fde1452841e38d4"
  },
  {
    "url": "assets/js/24.512c3dc4.js",
    "revision": "c958e36fac727c2400b509171ca4a54c"
  },
  {
    "url": "assets/js/25.a6cdb24c.js",
    "revision": "b0f1cd74edfbd38ce631560b815b2993"
  },
  {
    "url": "assets/js/26.79784fb2.js",
    "revision": "14deb424ff55c492b62d8a181076f0c3"
  },
  {
    "url": "assets/js/27.2d9fd1fd.js",
    "revision": "9bca1e6468aa9719d1b455cc76445ed4"
  },
  {
    "url": "assets/js/28.ca4dd207.js",
    "revision": "3fb2a1dc95789261707663fc68fd44f8"
  },
  {
    "url": "assets/js/29.bdad0b77.js",
    "revision": "2672180386ba9749cfa9d26a102e48ce"
  },
  {
    "url": "assets/js/30.2c3d411c.js",
    "revision": "4bb8420180172e2b8de5ee15eca8dd3e"
  },
  {
    "url": "assets/js/31.20107ed1.js",
    "revision": "f4b488384db30d1372c10e746aa8185f"
  },
  {
    "url": "assets/js/32.b1f72451.js",
    "revision": "8c3296b6e21f57c445fe0d15d3a09377"
  },
  {
    "url": "assets/js/33.9d7db303.js",
    "revision": "65a030f6c4bc296e323c0714404f807d"
  },
  {
    "url": "assets/js/34.78b0f142.js",
    "revision": "ffbaba75ea696b2fb7321a1b4d870b88"
  },
  {
    "url": "assets/js/35.2800d1ba.js",
    "revision": "6b1226e41b6c0c213fa1f186b1c1563f"
  },
  {
    "url": "assets/js/36.bdfb09b8.js",
    "revision": "86d7e67b2ea98342b5c5d4c43b78a145"
  },
  {
    "url": "assets/js/37.097e04e0.js",
    "revision": "de20eff81e8d4390bc56ba4a788972b1"
  },
  {
    "url": "assets/js/38.152fcaaf.js",
    "revision": "e724123410fbcd0a4fdc31192b0b2e00"
  },
  {
    "url": "assets/js/39.7931dadb.js",
    "revision": "60e4bfbe8694380e30acc070a2a454d6"
  },
  {
    "url": "assets/js/40.01fb0d8a.js",
    "revision": "6df32d5ba3e8bf7441966ef0e2505918"
  },
  {
    "url": "assets/js/41.f7073b65.js",
    "revision": "71f13877a584ff9042b717edaf16e43d"
  },
  {
    "url": "assets/js/42.75855cb1.js",
    "revision": "e2720f5232de19a6a8920606e407d85f"
  },
  {
    "url": "assets/js/43.ef5954ae.js",
    "revision": "c788c946dc84930d1f59976e15d5dfc1"
  },
  {
    "url": "assets/js/44.c2e9965c.js",
    "revision": "d8087228923680b24a4bb8f3fba29d60"
  },
  {
    "url": "assets/js/45.d83caa59.js",
    "revision": "c0c4c81db714ba4c944150971dcefacc"
  },
  {
    "url": "assets/js/46.d99ddf51.js",
    "revision": "8db4ede89c41e3bbb1b38ddc37da81b4"
  },
  {
    "url": "assets/js/47.0a2f3e9c.js",
    "revision": "a2c734a7374372002a9e5447b6a3b203"
  },
  {
    "url": "assets/js/48.e00f2c92.js",
    "revision": "18bb5c130baaa5f17f589acd647235af"
  },
  {
    "url": "assets/js/49.0d4e7006.js",
    "revision": "0bb920ebf2a15e52a3cf6f2649eb4c40"
  },
  {
    "url": "assets/js/5.590145f7.js",
    "revision": "c443f32a2a4c79ed66c1119de2d54d60"
  },
  {
    "url": "assets/js/50.8219bc83.js",
    "revision": "8dd01d7dd68ee10e2376d5985c1415a3"
  },
  {
    "url": "assets/js/51.19ffc4cc.js",
    "revision": "630e39f5cca97a389582ef19c0afb0e7"
  },
  {
    "url": "assets/js/52.d88a4747.js",
    "revision": "82f37c174a813b83bf0680a7bff153f5"
  },
  {
    "url": "assets/js/53.85811c93.js",
    "revision": "441a0a9305ed6e286eb118bca1c29206"
  },
  {
    "url": "assets/js/54.9b506526.js",
    "revision": "15a49b0c753c9d7517c2674d6aae3303"
  },
  {
    "url": "assets/js/55.685b5d65.js",
    "revision": "face591d354d00af4931c80c8fd3a86e"
  },
  {
    "url": "assets/js/56.6272a153.js",
    "revision": "63d69d3ae78a585365f10009dca251b2"
  },
  {
    "url": "assets/js/57.7c9e897f.js",
    "revision": "64313d51d6c9cd60d7c721157695d5d1"
  },
  {
    "url": "assets/js/58.0e4bd3e2.js",
    "revision": "58ab86fe8ffbe70c54378b303cf8d1aa"
  },
  {
    "url": "assets/js/59.5170bda8.js",
    "revision": "846a9f7cec36dd9c4d5f7d6238a5bfe7"
  },
  {
    "url": "assets/js/6.c15517cd.js",
    "revision": "ccb5ccab15218e21d054e75d37e7c41d"
  },
  {
    "url": "assets/js/60.74fe31ee.js",
    "revision": "5b204d61085e8266d2c0cf68cb7a933d"
  },
  {
    "url": "assets/js/61.b100d8ee.js",
    "revision": "613942d4d96a346a641338f67eb9359c"
  },
  {
    "url": "assets/js/62.16b98480.js",
    "revision": "f5a75f77d2fe88e6a458dec4d24ceeaf"
  },
  {
    "url": "assets/js/63.0c9e735e.js",
    "revision": "500426e000742190851528a8eb9647c5"
  },
  {
    "url": "assets/js/64.d7924182.js",
    "revision": "47678d5701680c42c77bc0c750594322"
  },
  {
    "url": "assets/js/65.9d03de06.js",
    "revision": "5878e4c8e0f8aeefbfd59a650deb82de"
  },
  {
    "url": "assets/js/66.325e2dd0.js",
    "revision": "edae2a32d4b11950c114739065f49a1b"
  },
  {
    "url": "assets/js/67.5cb13f18.js",
    "revision": "1c8be56c9b9e13de0a5e7912316883cb"
  },
  {
    "url": "assets/js/68.a896d726.js",
    "revision": "d3043afcfb340d6bcf2414d67269b21a"
  },
  {
    "url": "assets/js/69.7ff37eac.js",
    "revision": "3b08255abc93891fe145a030dfe8a9ac"
  },
  {
    "url": "assets/js/7.96af8448.js",
    "revision": "0ea60051f3c2d563c9d5dc8d73381287"
  },
  {
    "url": "assets/js/70.6ddf9a97.js",
    "revision": "557b34b89d92ec36d5f12d2ca1cb1555"
  },
  {
    "url": "assets/js/71.13d0e6f0.js",
    "revision": "72ffdb098a8b6d457e868548e5fa7287"
  },
  {
    "url": "assets/js/72.804c0d80.js",
    "revision": "0bda30f979f5705f2473592baaa9148c"
  },
  {
    "url": "assets/js/73.cc6f9ec9.js",
    "revision": "785f7b4777159fd89aaaf398a7ec229b"
  },
  {
    "url": "assets/js/74.f192e6c5.js",
    "revision": "4eca5b86dbe3bc86879207b6dbb5ba5b"
  },
  {
    "url": "assets/js/75.c10de34d.js",
    "revision": "ee868f32533d58812d856fd532a072a8"
  },
  {
    "url": "assets/js/76.eb8662b2.js",
    "revision": "66a7dc71b59bf3d5671d7b99dbedc48c"
  },
  {
    "url": "assets/js/77.278eb354.js",
    "revision": "f96b9dec282082e8da81466536b2be39"
  },
  {
    "url": "assets/js/78.3655518c.js",
    "revision": "4015f0f56075f48910e4ba985dca77a2"
  },
  {
    "url": "assets/js/79.304e6cb2.js",
    "revision": "d6d46b5c4cdcea7f34fd2f6fb26caea6"
  },
  {
    "url": "assets/js/8.5887ab8c.js",
    "revision": "1e076ded8492a48cee8bbac5868f91ca"
  },
  {
    "url": "assets/js/80.eec46d39.js",
    "revision": "5dfb59eef52a48ec27c95e38d6a77eaf"
  },
  {
    "url": "assets/js/81.31760091.js",
    "revision": "ec7f6fec82007038404cc0a45114788e"
  },
  {
    "url": "assets/js/82.4c603742.js",
    "revision": "f1be4c5646fafa7ae50b0200451987f7"
  },
  {
    "url": "assets/js/83.0a4d1e12.js",
    "revision": "424f89ec507d94c43ba7add1627929c7"
  },
  {
    "url": "assets/js/84.718dd18f.js",
    "revision": "385577f8b90e9b370dac783879fb14de"
  },
  {
    "url": "assets/js/85.7a164140.js",
    "revision": "78b2df6b6b5ea5d75c6269a493efc352"
  },
  {
    "url": "assets/js/86.8aca2231.js",
    "revision": "0d42e1d5e5ee2710786f65690c5483b4"
  },
  {
    "url": "assets/js/87.108036e6.js",
    "revision": "392c3122df6e4dc2049223e533cd5573"
  },
  {
    "url": "assets/js/88.b919a303.js",
    "revision": "0ca7a3b3c13e5d2add694a48400ccde9"
  },
  {
    "url": "assets/js/89.a7f47a77.js",
    "revision": "240cddd58bde3e8b1c7ed0c8932885cf"
  },
  {
    "url": "assets/js/9.7b83fab3.js",
    "revision": "652db02083b4cbcafbfe84b16fcf13cd"
  },
  {
    "url": "assets/js/90.aef2fa1c.js",
    "revision": "bcc5e13e4d53106c748ea95a01000954"
  },
  {
    "url": "assets/js/91.57ba4ad0.js",
    "revision": "ae2932f688f3c0fe0031b031b44d5d86"
  },
  {
    "url": "assets/js/92.e92bde5c.js",
    "revision": "28504621b017875aff1d98577c89d86d"
  },
  {
    "url": "assets/js/93.7bcb46ce.js",
    "revision": "23503570d7808071f548e3bcbfdadaf5"
  },
  {
    "url": "assets/js/94.c1bfc449.js",
    "revision": "30d9ef536c39974a4e59fc8903551d0b"
  },
  {
    "url": "assets/js/95.41311d80.js",
    "revision": "71aae21a21c4304cebacdd2cff810420"
  },
  {
    "url": "assets/js/96.c286a3b9.js",
    "revision": "38cbbaa1c64ccaa76e096f491c03e048"
  },
  {
    "url": "assets/js/97.710608ff.js",
    "revision": "d0abbf33122ee27066bbb8e7237d4ed5"
  },
  {
    "url": "assets/js/98.99778f36.js",
    "revision": "643b511b2324e7b9d6c558f37fee8b47"
  },
  {
    "url": "assets/js/99.427afd4b.js",
    "revision": "167f487e4aa6a817902deade91356df5"
  },
  {
    "url": "assets/js/app.4701528d.js",
    "revision": "3ee9b805fd698fc127d351dc12dcd4c5"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "1a20a45593b394f1b2c0245d1ffa0dc7"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "663e1f852950c4bb0ef6532aa422ea8b"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "45dee8b2a2c9230e70212967861b9f0a"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "8278d10bd1dd3e7f133a5701db7500f7"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "27184e1ce62a6f0e01702f5015286efc"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "06ca75e0fdc09835321fced7f25bafd3"
  },
  {
    "url": "composable/date/now.html",
    "revision": "385d9bd9f1bd4746c75ea3ea65e33d42"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "67bf5defaaa3c7697b4080d795fe2334"
  },
  {
    "url": "composable/event/event.html",
    "revision": "b9cdbee61e0fb273092a45a1cd06049d"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "b892be422ac66d71c2a6c6a1f05cfdcb"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4abff94f2e9217d0817b10d3a39365e8"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "34e39cbc1f1f602de78d998c5cf00843"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "7ab9b032a28d0b47e8c26e05e246908e"
  },
  {
    "url": "composable/format/format.html",
    "revision": "c5808c962f97a8fc6a5971bd6696a915"
  },
  {
    "url": "composable/format/path.html",
    "revision": "52bcfc8fc66bd982f148b67cbde2e769"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "0944514bd96b86330afada8ec3c1019f"
  },
  {
    "url": "composable/index.html",
    "revision": "3cdecdd4f64d4a51b4cf1e883bed9597"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "2df4a5bd9828bdcef1ad76b659d8dc97"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "faa38986adb592694d577bfd0000e31d"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "a1a33ebc2fdda599d48f89428e418e38"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "5729b9968b50b42f621bd54c95576c0d"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "ebe8f9512c23907a09cb77a95a34fca2"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "cb527e0553cc74f50bbc83090b45ebcc"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "b94ce23738db7abdc509b09c00ede673"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "1cbf062d7ec9c91a501a59685bb12c6a"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "57013ea4666cf62d29bc93f15f5e3540"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "ae3f30d13da594f74f7539277fbef96d"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "e9d46745caac0de50efc83b0ef1fc40a"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "12e8ec150faa4cef8004f6f7834adaa8"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "dd895ec9fa56cbf18281d853e5fe2f23"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "67b8782549a0f1f75e82f65502a8d659"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "9a99c6a9552f1997c1d239109c3dd77e"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "bbc9638f3f666c6a0aa4b30d2b725a4d"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "36a8ea9828ed7a977ad36c967bd93346"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "8e05d259013e0fe9536507ae5fd39d1c"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "f5ce3ee5cb91e4fca0f124179b9cfdda"
  },
  {
    "url": "composable/web/language.html",
    "revision": "4f400178a951bb50001d26a4ba4fa322"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "8d86b5507fd8f787be3a5b08bc1281a8"
  },
  {
    "url": "composable/web/online.html",
    "revision": "cc5b59200efc9bd216f402652f904652"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "a5ac67863e6a52d89584c9d452043460"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "6af9de9f17b035ec373e2486e8da44aa"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "8db9a1007709b4bfd96afd42d25cc2e9"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "51619b0818448d2aec4312b4225442de"
  },
  {
    "url": "Examples/index.html",
    "revision": "d585433e99668d9faeffe0764997b8bf"
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
    "revision": "5abb4d42083443dd4d13a4421803772d"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
  },
  {
    "url": "worker.example.js",
    "revision": "f755a971ea3890285ded636071badae5"
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
