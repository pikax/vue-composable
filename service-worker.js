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
    "revision": "6a877324d383b2f4c30e002be8bacc66"
  },
  {
    "url": "api/axios.api.html",
    "revision": "b19f89fcd4d00887078234a7d90ac202"
  },
  {
    "url": "api/core.api.html",
    "revision": "5b14bbdca91c2cac283cbb7bae2d989a"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "327ac999c17bafe23166721b5517f496"
  },
  {
    "url": "api/web.api.html",
    "revision": "49da4e554d24b41ce42ae1fa10351665"
  },
  {
    "url": "assets/css/2.styles.7af71a64.css",
    "revision": "d9d481a99be701969b01dea359f7a7ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.41f788fc.js",
    "revision": "37139d7757a95b7b7ce017038a4ae706"
  },
  {
    "url": "assets/js/1.c176b284.js",
    "revision": "6c98882b7be0d0f4c2b8bcc8fbc7f655"
  },
  {
    "url": "assets/js/10.0514d568.js",
    "revision": "36aa830ac9d6f76bf4ad3b32a279b8d4"
  },
  {
    "url": "assets/js/100.e460ee82.js",
    "revision": "c08c478de8b0a9ef07121152833eac07"
  },
  {
    "url": "assets/js/101.cbba7a0d.js",
    "revision": "1350d5ce64d821d37aab45751b14c009"
  },
  {
    "url": "assets/js/102.e1856e14.js",
    "revision": "130ad585fc09d388ebc78fbfe45f01aa"
  },
  {
    "url": "assets/js/103.60a23ca6.js",
    "revision": "54aebc8573525d6733d1a217b766768d"
  },
  {
    "url": "assets/js/104.0b324b5a.js",
    "revision": "ce3f542dd3a860fa53b2951f439fac93"
  },
  {
    "url": "assets/js/105.ac5abe6b.js",
    "revision": "f88bd6eadf2e18d726a9b1d08f236b58"
  },
  {
    "url": "assets/js/106.87c1f156.js",
    "revision": "3beca8152703d0bfd11fc767e901ab09"
  },
  {
    "url": "assets/js/107.77bde886.js",
    "revision": "022e920f4f29e9046e24552c01252168"
  },
  {
    "url": "assets/js/108.86b92cb1.js",
    "revision": "9c34bf807de6ba048486653fe17365ba"
  },
  {
    "url": "assets/js/109.bffe96af.js",
    "revision": "3b5fe511ac544b0f7ace02b85d648ee7"
  },
  {
    "url": "assets/js/11.5297426c.js",
    "revision": "ca5605739422fdb34f893394091f2524"
  },
  {
    "url": "assets/js/110.9f1f453e.js",
    "revision": "aaf46be422ba6c1d3800a1406f9c8b07"
  },
  {
    "url": "assets/js/111.ff2c8551.js",
    "revision": "aacd514b3a9f832c41dcf383eecf2128"
  },
  {
    "url": "assets/js/112.46fc84d7.js",
    "revision": "271628b6d350b6980481066c90a60fc8"
  },
  {
    "url": "assets/js/113.442765bf.js",
    "revision": "254e9f0da0e22dfaa532f4e8bd10396d"
  },
  {
    "url": "assets/js/114.bc88992c.js",
    "revision": "f43df5afd6beedc09dc57d5701810006"
  },
  {
    "url": "assets/js/115.148b346e.js",
    "revision": "7bdaa3a39e095330cc00894e7ed3700b"
  },
  {
    "url": "assets/js/116.75a29dca.js",
    "revision": "8e19daacb53286afd3c430f61a9a5240"
  },
  {
    "url": "assets/js/117.4a6405d9.js",
    "revision": "ee7f64edf610cb8b32513304f0a44ea4"
  },
  {
    "url": "assets/js/118.74beee4b.js",
    "revision": "c18e978e005fab3ae7ef0d7949ba004d"
  },
  {
    "url": "assets/js/119.87c675be.js",
    "revision": "8df1e9369bd071537b358fdfc7c04500"
  },
  {
    "url": "assets/js/12.917dbdcd.js",
    "revision": "5323f2800cd8b0b368ee03d97d4f1e85"
  },
  {
    "url": "assets/js/120.a65f1813.js",
    "revision": "3715b0388a0b050b506bbbe5658775af"
  },
  {
    "url": "assets/js/121.06ac4b72.js",
    "revision": "4a9df9fa1337965c3598815a322828fd"
  },
  {
    "url": "assets/js/13.f610bc78.js",
    "revision": "8af536c47db45eeedb5712261d5f5fe0"
  },
  {
    "url": "assets/js/14.3ffe29b5.js",
    "revision": "cb0d328afbbbf9bdda7539e107e7dd24"
  },
  {
    "url": "assets/js/15.b5a0b751.js",
    "revision": "a364f267a043fad22bd86c32cdf90d45"
  },
  {
    "url": "assets/js/16.1e89d37f.js",
    "revision": "bbe329fa1fde20977ef481e8216636cd"
  },
  {
    "url": "assets/js/17.166136e8.js",
    "revision": "03bba99baa64aca31018b7d6efbc8916"
  },
  {
    "url": "assets/js/18.42089636.js",
    "revision": "113648a8e3c577fc6b88b36b5c195c60"
  },
  {
    "url": "assets/js/19.672750f5.js",
    "revision": "0239a9c4ba5ad90441dec28c6941d904"
  },
  {
    "url": "assets/js/20.f1c9ab18.js",
    "revision": "76598717270ed601a24ecf496dff2d60"
  },
  {
    "url": "assets/js/21.23a5e094.js",
    "revision": "619b90f8aa3d2623d424f56e34659c0e"
  },
  {
    "url": "assets/js/22.e8adbb1f.js",
    "revision": "6536f2d12b597831a4425c9cd5650bb9"
  },
  {
    "url": "assets/js/23.d02f5712.js",
    "revision": "5dd1f27391a6ac90242bd118ef1248e9"
  },
  {
    "url": "assets/js/24.86d8e602.js",
    "revision": "a41d269c544be2b7cf5b729242e4d516"
  },
  {
    "url": "assets/js/25.679e0e61.js",
    "revision": "d5535697541867cef6ba0192fa5bd210"
  },
  {
    "url": "assets/js/26.f1f42441.js",
    "revision": "128cae55ade0db5127aaae07e22263ae"
  },
  {
    "url": "assets/js/27.6708c465.js",
    "revision": "415032c2b1a3ee04de6eaa6b4bf576d8"
  },
  {
    "url": "assets/js/28.7e35d717.js",
    "revision": "5e150a3d2af10bef43eb2a44528b8867"
  },
  {
    "url": "assets/js/29.4e70db25.js",
    "revision": "7822bb668cee33d0b9ff086bb01d66b7"
  },
  {
    "url": "assets/js/30.71bfa9ed.js",
    "revision": "24273e127668cf68bf882efda5265d7a"
  },
  {
    "url": "assets/js/31.24e2bf28.js",
    "revision": "60a2c5bebefff934a5dff986c4164e50"
  },
  {
    "url": "assets/js/32.7e98ec6f.js",
    "revision": "d25d9c773980c2b983d1c27921ad7980"
  },
  {
    "url": "assets/js/33.6d7205d5.js",
    "revision": "6ba566c89350333afb1e1ecddcd084cf"
  },
  {
    "url": "assets/js/34.7ce8608c.js",
    "revision": "6fca08e91f1022ddcbd1e2ac6024fb6a"
  },
  {
    "url": "assets/js/35.ae2aa89c.js",
    "revision": "f3daf2c6977740015a280f4ea2259430"
  },
  {
    "url": "assets/js/36.0164d9c8.js",
    "revision": "dbefb307288b8c2934f8271c3b6ab1fd"
  },
  {
    "url": "assets/js/37.fc91eb86.js",
    "revision": "4fe0695a1d95e600b58b4cc80b29b8ee"
  },
  {
    "url": "assets/js/38.5863225e.js",
    "revision": "23c0d44eac4b0c02a6661849b568ff12"
  },
  {
    "url": "assets/js/39.32525d6b.js",
    "revision": "35fb8160ebb903e02bcda771692e2693"
  },
  {
    "url": "assets/js/4.c98027c0.js",
    "revision": "f6825b25ee267ea2c9f5466df784f9f6"
  },
  {
    "url": "assets/js/40.edb4e929.js",
    "revision": "c2c7bdbf9248d2fa7f384ccf9385640e"
  },
  {
    "url": "assets/js/41.106de2b0.js",
    "revision": "0c3ee3ec7947aa454d815640edb7191b"
  },
  {
    "url": "assets/js/42.43436cfd.js",
    "revision": "99bb3f87157bbb692fb4c053a77684fd"
  },
  {
    "url": "assets/js/43.bde1b2fc.js",
    "revision": "88c93ea5784c81b479a66b3c4bd8b407"
  },
  {
    "url": "assets/js/44.9c1a47a8.js",
    "revision": "b974cd025ea0db7b89c6124ef7c609a6"
  },
  {
    "url": "assets/js/45.b2ca1d67.js",
    "revision": "9dc69f4d378483453a1f3755d91a3e11"
  },
  {
    "url": "assets/js/46.d33b684d.js",
    "revision": "fa53722fabb31b98ea3c9046ebbfa63c"
  },
  {
    "url": "assets/js/47.16df621e.js",
    "revision": "41cccfcf56a3f37c61c8ac52ec341f78"
  },
  {
    "url": "assets/js/48.6f4e7363.js",
    "revision": "fc069e6b487605cc073cd3c109d5cb05"
  },
  {
    "url": "assets/js/49.a2298f48.js",
    "revision": "93e60ceba77063d863c276db41069e01"
  },
  {
    "url": "assets/js/5.7cb078de.js",
    "revision": "3322b73572b5f9291b5867ccb6db3f9f"
  },
  {
    "url": "assets/js/50.c32137b4.js",
    "revision": "c442e87e6780c7b22feb41bdfc9a0a9c"
  },
  {
    "url": "assets/js/51.70adc6c0.js",
    "revision": "eff3d904202f581e93a36ab6d2e3a8ea"
  },
  {
    "url": "assets/js/52.a2613148.js",
    "revision": "7627497ce51d5390d877f3652548b4c4"
  },
  {
    "url": "assets/js/53.447fb11a.js",
    "revision": "2225e6e5ad136c79b17d476eda057bfa"
  },
  {
    "url": "assets/js/54.e02bc6f4.js",
    "revision": "ea44336d987744fc8ce24574b0f81480"
  },
  {
    "url": "assets/js/55.3f61a9af.js",
    "revision": "3d9fd4bba51de87d6ebcbbcff6fa8db3"
  },
  {
    "url": "assets/js/56.f7f631b8.js",
    "revision": "d0e62d2c5a7d3ea0898f3c32f2ddfc12"
  },
  {
    "url": "assets/js/57.54e826e4.js",
    "revision": "b6f60fb9c9a7587b24aed31bbf62bd60"
  },
  {
    "url": "assets/js/58.70762e00.js",
    "revision": "d0406aff9836730832c27f46dc289c5f"
  },
  {
    "url": "assets/js/59.b78a363e.js",
    "revision": "fcb251121ae9385d5ac85a9da3b3c24d"
  },
  {
    "url": "assets/js/6.3c1b86c5.js",
    "revision": "a875540132ac123a112d4a4db791d5e1"
  },
  {
    "url": "assets/js/60.4da252b1.js",
    "revision": "efb50db4675023925bc72b4b098fb299"
  },
  {
    "url": "assets/js/61.9782dca1.js",
    "revision": "33e5edd0eb1e8df33d7e63ce393ec4c6"
  },
  {
    "url": "assets/js/62.4ed18f59.js",
    "revision": "6e12f19d24c72f4ef752fb34a498aa99"
  },
  {
    "url": "assets/js/63.6b98637f.js",
    "revision": "c5aff06818384a876a74a925aa7973ed"
  },
  {
    "url": "assets/js/64.0efe657b.js",
    "revision": "495d41fa9ec43817a49423a6e08e862d"
  },
  {
    "url": "assets/js/65.6adb961a.js",
    "revision": "138c5749949a1e018c420ef2334ead45"
  },
  {
    "url": "assets/js/66.c98a37a1.js",
    "revision": "d61ed22ed036299b39b34eba97e27d18"
  },
  {
    "url": "assets/js/67.5e9ba640.js",
    "revision": "69525f42ddd48cab96cb1dab5521cc6e"
  },
  {
    "url": "assets/js/68.a05c8541.js",
    "revision": "998d1bcd193a51c0915e7810025c919b"
  },
  {
    "url": "assets/js/69.c8dacb47.js",
    "revision": "9a9fa063f7558dc3294525cfde4fb1fd"
  },
  {
    "url": "assets/js/7.2ba1cedc.js",
    "revision": "5e2ffd53f391d296e091af5069c0b081"
  },
  {
    "url": "assets/js/70.a360aaae.js",
    "revision": "dea2a58f2200a6f9f4e1d9eb1af82370"
  },
  {
    "url": "assets/js/71.e416a518.js",
    "revision": "34bba6a8eea927d6305655288f9c3ce1"
  },
  {
    "url": "assets/js/72.f4972d58.js",
    "revision": "220603ad36958ff807f0c83c6a396e86"
  },
  {
    "url": "assets/js/73.3f1a9a65.js",
    "revision": "a7628ea003a13b5f4f73870ea034a7ef"
  },
  {
    "url": "assets/js/74.ec965de2.js",
    "revision": "51e45967cf946b1db6936516042de942"
  },
  {
    "url": "assets/js/75.bda1a4ef.js",
    "revision": "d8040cc1393c41ffb7866e44b14daf7d"
  },
  {
    "url": "assets/js/76.eecea35e.js",
    "revision": "2801182c209d54c25ec44a15a166757d"
  },
  {
    "url": "assets/js/77.147b31b4.js",
    "revision": "b4a1129277d95f2407b33c81f1d5ea16"
  },
  {
    "url": "assets/js/78.8a852415.js",
    "revision": "b152b75a2942919636a38b13154c1a20"
  },
  {
    "url": "assets/js/79.354b8d62.js",
    "revision": "28b8180103a69b50cb5fa1b78c3bed20"
  },
  {
    "url": "assets/js/8.a00b7e88.js",
    "revision": "b8fd360f7d22dbf973f392637952fd3c"
  },
  {
    "url": "assets/js/80.f222e22a.js",
    "revision": "0bcf0a6efbaef1cc4b6d7e0936c5666d"
  },
  {
    "url": "assets/js/81.31de343c.js",
    "revision": "75b099c9fa0c4c62bcd9c1079101303f"
  },
  {
    "url": "assets/js/82.1812e37a.js",
    "revision": "c0bb33bae084a7feb9a0bf224bc87cb2"
  },
  {
    "url": "assets/js/83.f8b8dcc0.js",
    "revision": "891f571d211dbb66bc1d3d405bf932f7"
  },
  {
    "url": "assets/js/84.433620af.js",
    "revision": "84647c9cc4837fda6c95ef487a3b1b80"
  },
  {
    "url": "assets/js/85.8f60ffb5.js",
    "revision": "2098fb38554d882cec0921cddaec87f1"
  },
  {
    "url": "assets/js/86.63c86198.js",
    "revision": "2f26fb11357e03f583c0a1178404a690"
  },
  {
    "url": "assets/js/87.29fb6760.js",
    "revision": "6d1b688f5383f5f53c91fae49b7f977a"
  },
  {
    "url": "assets/js/88.c132a82b.js",
    "revision": "87400c03a9a6fc38a3ac475eb99f0262"
  },
  {
    "url": "assets/js/89.c93db0c7.js",
    "revision": "83d175176e68ed3751c6e8fbabb86528"
  },
  {
    "url": "assets/js/9.bfd7b159.js",
    "revision": "3e0704743e561f6dd42ec2fad7ea93fb"
  },
  {
    "url": "assets/js/90.4403087f.js",
    "revision": "ee3d5f5dd51d5dd8f9375ba6f9e27738"
  },
  {
    "url": "assets/js/91.10fa599b.js",
    "revision": "3c569e016646cde48b7b67fd3621868f"
  },
  {
    "url": "assets/js/92.dda6be67.js",
    "revision": "334bfa137882f3d66110fe14f8e10946"
  },
  {
    "url": "assets/js/93.fd4820fe.js",
    "revision": "aa2730b3bf07fc3d71309393a744e729"
  },
  {
    "url": "assets/js/94.d9e73318.js",
    "revision": "3d0e4799798275f7416af35b8941a983"
  },
  {
    "url": "assets/js/95.735e298b.js",
    "revision": "6e6480cf06e38a8f6bf9f5e1c78349dc"
  },
  {
    "url": "assets/js/96.982dfd53.js",
    "revision": "66924f185023cc6483dfd61fe67c94dc"
  },
  {
    "url": "assets/js/97.4e97077e.js",
    "revision": "f574fbe651752c56aad3debb257a0760"
  },
  {
    "url": "assets/js/98.e0c76edf.js",
    "revision": "c9ea2189952bf8d5999b86d28177bf21"
  },
  {
    "url": "assets/js/99.a54a0ead.js",
    "revision": "de7334adbffe83b0793fdb6c62aa76a1"
  },
  {
    "url": "assets/js/app.85a01879.js",
    "revision": "6ca847897c8db346133c4b830dd8e1b6"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "2152b2b077b303ca2021e6472d4aaa0d"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "45549f5a0953cd58a5b5c5dc7f2d888c"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "43b3cc5ae44abd816c82a6fe81b1e0d2"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "36af353609b6f47c6f48cfb111d3f172"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "959a524db56826e1dbb58abaf4a8dd4c"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "cc58798b68d4aa0484cce3229c4f69f7"
  },
  {
    "url": "composable/date/now.html",
    "revision": "7a30e3379320b628807ced304f26c988"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "ba8e94c20d2f1044262af6046283dea6"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "e486b53813ea0b8dd3dc12fb506ad197"
  },
  {
    "url": "composable/event/event.html",
    "revision": "796a2554f180445326ba98f5d543e67c"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "8bd0e6640466ac426fedb2c1294731fb"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "4ea173c4ce129f1df6476a2339858a57"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "3fce1d11951179462b85edfe8e82c264"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "b987f88836619b3faa6d3a5bc4d7ad76"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "820cc4a41c8fe9713690594158a22228"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "90463d9c693ff26b633dc34ded5431f7"
  },
  {
    "url": "composable/format/format.html",
    "revision": "c7afc997f9cf239d00e90371f3ae9a3a"
  },
  {
    "url": "composable/format/path.html",
    "revision": "bed1b99d86c8fd0f2765d07fec8317dc"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "b1b5fe166e96670f4baf560427bb45ab"
  },
  {
    "url": "composable/index.html",
    "revision": "41357fd7b697b3741634c55fa845ea76"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "48ebf153bb0ba85519f23dcb8a8c3786"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "cea70636945667725273a0d21155e9d0"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "d6bfb30cfdacd8d46d8c0a99de3a9982"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "fdb15f8ce8fbceed98252de5ad25dc03"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "9e6755fb733a8a0faf4e83c96c88b4f6"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "e2a849f8c6ff87a8149ebf1224727bb0"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "6dbbe294a2d475f80a2165d0ba3c3f90"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "aa8364c6851766d3ed23d08c2cc7ea65"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "d32a5d33e3e0b2bfd7f4f80ce2365559"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "2c3eedab6ecbab197e3dfce5ead26511"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "cad06f93d69c9161573230f215dcb927"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "1c4ea385fb757968b6761c5859259681"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "78805ac52aef2b542825aebf6c6df822"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "05e134dabc66be74ac2af0cffe9e9106"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "2fc1eaea4982e094d20f56e028df388d"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "afc6d70be97b31062b7c28653a67ef08"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "2d1bb7853234ba2670e729944b115397"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "b3de273b82a1ff617e2537994dc4cd34"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "896029d8fd2a647d33ae41d984567ccf"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "cf1c2f89dfe08fb32878ab253cfc423a"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "6f8cc2658940aeff99c73bed52c6ad55"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "c1bbf5d65ad5e1e17a93c81348cb69dc"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "bc49500818230fdfcc5eb97e1d2f08e6"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "c3c416b153c6a3e5394c6a74c0f03a38"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "c9096d64395206e6ef8650c63d9379ab"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "896d7486d1a977e1c66ff9de4aa960d7"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "9743d6e65287ca6e108c2705c73fbd68"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "6362f430d99828b5900badfbd584e268"
  },
  {
    "url": "composable/web/language.html",
    "revision": "23811a0d839c7c13f01a1a2eba2bf3cd"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "2cc76c6f53167498525737e28ffc5cf3"
  },
  {
    "url": "composable/web/online.html",
    "revision": "5373c1ed643fb6fd2621f5053364d24e"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "6840b7cd8f860fce7f985d829eadfe7f"
  },
  {
    "url": "composable/web/share.html",
    "revision": "79c630b7058cacc1982b89e53a36c361"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "6bc12c6459772238e7d1b1294e33089e"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "3c4eca0839404eb9496bc483055445ce"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "5ca73d237bdff4fc17c544e9df40f02e"
  },
  {
    "url": "Examples/index.html",
    "revision": "1e2c7c07ac384b90aee0d17deec25136"
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
    "revision": "8c251970d8a45fc335d850f27ae0b445"
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
