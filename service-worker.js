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
    "revision": "664674a966fe9425a144cf90b961425d"
  },
  {
    "url": "api/core.api.html",
    "revision": "a877875462154d002165ab9895a1b907"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "572cce4da1037fdee1bdf024a5d3fc7c"
  },
  {
    "url": "api/web.api.html",
    "revision": "2f992fcd774e27e3365594728d207472"
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
    "url": "assets/js/52.8ec848ae.js",
    "revision": "d305b7fee7fe0cd63ad276e93e41f850"
  },
  {
    "url": "assets/js/53.0f0833c6.js",
    "revision": "7e4e536369e02fd15877157974bc154e"
  },
  {
    "url": "assets/js/54.0707a139.js",
    "revision": "bde1055212193caff2162f09e501c9e0"
  },
  {
    "url": "assets/js/55.855a61f2.js",
    "revision": "5be565d36c644e8fdd5242cdec5352c1"
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
    "url": "assets/js/65.11d7794f.js",
    "revision": "1b5b3f8cafc6480f3ab55fd3784596fb"
  },
  {
    "url": "assets/js/66.3c5e719d.js",
    "revision": "a816ee8bae9a79dde84f45bc9b820bbc"
  },
  {
    "url": "assets/js/67.e3a041d1.js",
    "revision": "2342adf08fef5f3a054bf19da31d6d9c"
  },
  {
    "url": "assets/js/68.88f08cdc.js",
    "revision": "4f86b76488c175520837e2a4f1347ee9"
  },
  {
    "url": "assets/js/69.64eb0f99.js",
    "revision": "2b5a6466c6a09579ad90371230bcb7a6"
  },
  {
    "url": "assets/js/7.96af8448.js",
    "revision": "0ea60051f3c2d563c9d5dc8d73381287"
  },
  {
    "url": "assets/js/70.c51b7af3.js",
    "revision": "ceb420e236934b4244334bf904798fea"
  },
  {
    "url": "assets/js/71.29bde734.js",
    "revision": "7afb8baf1df2f7eafa6a951b8a8cc2c8"
  },
  {
    "url": "assets/js/72.728386d0.js",
    "revision": "e49744253c23ae0484d211025de8b65c"
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
    "url": "assets/js/82.0c9207b6.js",
    "revision": "b8dbdc6a14b1d73f0bc86d4a735f6a42"
  },
  {
    "url": "assets/js/83.ccd0903d.js",
    "revision": "22b9f06be96dd51a7efb2e2b34efc2e7"
  },
  {
    "url": "assets/js/84.f5ad4249.js",
    "revision": "c28b14f43e829bf1a4fd05dda85f49cc"
  },
  {
    "url": "assets/js/85.7a164140.js",
    "revision": "78b2df6b6b5ea5d75c6269a493efc352"
  },
  {
    "url": "assets/js/86.9865aba0.js",
    "revision": "cfa3e06c859396d2e4c7b79caea1b37d"
  },
  {
    "url": "assets/js/87.f011ea0b.js",
    "revision": "98a8c66e42d8dae6a8fb289d10fb0fdf"
  },
  {
    "url": "assets/js/88.68669d13.js",
    "revision": "b09ba5c4516e5444d51642f1aced895c"
  },
  {
    "url": "assets/js/89.552426b9.js",
    "revision": "9e70a2385b7481b1d3e0f9646226efa6"
  },
  {
    "url": "assets/js/9.7b83fab3.js",
    "revision": "652db02083b4cbcafbfe84b16fcf13cd"
  },
  {
    "url": "assets/js/90.418cdb72.js",
    "revision": "939659ce5b449b0a97dc13e2ad6dac19"
  },
  {
    "url": "assets/js/91.d43f1c91.js",
    "revision": "c126b63aec36cb3faa2a68b6df67c7bb"
  },
  {
    "url": "assets/js/92.af63c621.js",
    "revision": "8bbe3fc538fe72ea302c600d52aa184c"
  },
  {
    "url": "assets/js/93.fe7f2480.js",
    "revision": "47fb92cbb5616a478375c7fde4272179"
  },
  {
    "url": "assets/js/94.c197d4a4.js",
    "revision": "0d94c7ebfee5e76f94ce8c968128287e"
  },
  {
    "url": "assets/js/95.894e5f87.js",
    "revision": "d3b05000531cb8ecfe373b641bfc3ea7"
  },
  {
    "url": "assets/js/96.4726ae09.js",
    "revision": "d8b9de1b37929f7d0ca253a996ce47f4"
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
    "url": "assets/js/app.c9e5684b.js",
    "revision": "dc4bff6378d8fe84a9135f3cf180b9c5"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "0f25e26644d74f31066183392d5e447c"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "2e4c1d1fa8ccc263c922653248432f32"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "1dc97500b3c9c78479b2c2ecd3a3da52"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "4e56dec232cac51d4403af0bce7f6f8f"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "2bd21399e234eb28cdc29e9166342528"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "f5cafc2942526943e7f65f8bbe563a2a"
  },
  {
    "url": "composable/date/now.html",
    "revision": "bf5f7ef0d41b64ca4b6feaf89547e03f"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "b1b4354c299d78f7177325aeecb695dc"
  },
  {
    "url": "composable/event/event.html",
    "revision": "feae339411947a21928c86641996eebf"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "dfb80cf2a44cf3b57900afef8798361a"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "c3e9c9f6da16e8a137d2ca4ba0f56821"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "41dd5f7d76d7a789326bd7290fa2f5fd"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "a63c55cc7b0d4528544504abe2c312f3"
  },
  {
    "url": "composable/format/format.html",
    "revision": "285575a3c25e57eecceb41d82669d982"
  },
  {
    "url": "composable/format/path.html",
    "revision": "86634a7df1f410ac017f083816dd567a"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "b8c0ff433a1a70106e1face01bf924a4"
  },
  {
    "url": "composable/index.html",
    "revision": "74377eb5087286de5d4786eea330c02e"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "07cf7972e10c9cccee5d9da65edd6dc3"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "a245e0e40babc1b289eacd9b8ed5e8ed"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "c8f71e685dd41f50cfa326fe76e58d80"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "e69804b49687e93c09f343bc0a9f3a91"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "38767eb584a1d173d7a15eb22107e7b2"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "9cf309b2eaa762d42e8d5d9dc70c2c58"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "49f543882b97a1c5d134d7e58a8928d2"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b9ff8ef8f7d4a9d7dea4127ca4ddf1b2"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "05fa499a24abfec8cff2cc8fd5ac0a84"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "548f5828157cb36baf13374662d9885b"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "1809eaf76376b791144ff8bdec67efcc"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "b8ee1f3da3feea0954bb74f0f7e3978c"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "7be4e4254dce5618aae5615e299d578d"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "bfdaaa2e389d95b15d55e15bf73eb62c"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "70f47f0875199582e460a70e180c97ad"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "fef4f8f7de2f043f2829a71a47e780df"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "3a151ad50f085a46cfa0518d86585fbd"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "50e69ba39e5380370f9b9e1926d9f9f1"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "7f39ddb8b402a60867201ae600dcf9ba"
  },
  {
    "url": "composable/web/language.html",
    "revision": "2695d25c7480454303f1e5b2e2e05da1"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "21453cb973d4e3216600f24df9f5dad3"
  },
  {
    "url": "composable/web/online.html",
    "revision": "8e2d1a5146ee318987a816f76faab7d8"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "f22f9a4eec3185fe92868352598a95f1"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "98436521573e16f28745604d039d8b58"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "a44a95f881b4c58b876985846cb7f851"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "9fbcd22c4337af013fdd86f9dd68803e"
  },
  {
    "url": "Examples/index.html",
    "revision": "e667e30f50b53446498287e9da70378a"
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
    "revision": "75ea48a9833eb5a73d2140392d1a4ac6"
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
