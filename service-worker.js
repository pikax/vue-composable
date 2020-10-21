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
    "revision": "6c2246527c4b81ee7f64cf9cfa3bd512"
  },
  {
    "url": "api/axios.api.html",
    "revision": "b48982d6b9fbf65e4f45acf4ad0b3319"
  },
  {
    "url": "api/core.api.html",
    "revision": "49693894bc647e88f83cc2652025136b"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "575a17a59a0633e90acfd68faec7815c"
  },
  {
    "url": "api/web.api.html",
    "revision": "a720867267df59bb90e3b26f47b1a281"
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
    "url": "assets/js/0.b3a72508.js",
    "revision": "7a1de4e53c7aae123e8363ecef3aba01"
  },
  {
    "url": "assets/js/1.696f9f43.js",
    "revision": "67bc5fe8499fca8070d64837196a44f9"
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
    "url": "assets/js/4.e727dca5.js",
    "revision": "a19398d7c93fed0072f2052e609c8e85"
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
    "url": "assets/js/5.d3f6f1fa.js",
    "revision": "8216cd10bce284261efa4e1bf72b2f17"
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
    "url": "assets/js/63.1c5049ab.js",
    "revision": "66685604910b45fd2aa5a28ef16bca1c"
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
    "url": "assets/js/75.73050db9.js",
    "revision": "5f81e8ea001375bfc58fc95ffed2062e"
  },
  {
    "url": "assets/js/76.73b8b372.js",
    "revision": "ac150907c4746d3b9eedfccaeaa80f7e"
  },
  {
    "url": "assets/js/77.cd2e7037.js",
    "revision": "479893ee0b709f9298751f0d9fdc60a3"
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
    "url": "assets/js/82.14c282fa.js",
    "revision": "889e103fb5f84b409159f92e1027c79e"
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
    "url": "assets/js/app.5115c05d.js",
    "revision": "5632606874ab66205f1d6588a0b2cfa8"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "351eb562ccd340b02bf172f6bbcf477a"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "8b426d9a6f9575cc5d3e1a9ed24b07de"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "4f013243bd386af6c10c843c3e466b37"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "e711388733d959826a4bbcf6ed6acddd"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "eba77197b0b9ca106a72356f1f48024f"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "c7f7e64b6bbf3b17925b4eb3847e9433"
  },
  {
    "url": "composable/date/now.html",
    "revision": "6bdd36f3fddc803e53cf140c27766dea"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "6b5feebe28cfedf61e5459fb72acdba7"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "d74a704ab55bb6b67fb3bf003cccbf11"
  },
  {
    "url": "composable/event/event.html",
    "revision": "c39fc1a205c1d11cdc783d0830c50c90"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "5be477bc2613fe920762892705e647b3"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "4c529422c5acac21b774f47b56a1764b"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "2e7952ec6488050dba600f3a0f1bb655"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "9662ea269101636088688bbbea8728be"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "deef7251cfb379ff4060a5a84406961b"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "85db6081e15039c0082263c90c2caaaa"
  },
  {
    "url": "composable/format/format.html",
    "revision": "8c30c8c0b58d15b238f5e65c5102b98a"
  },
  {
    "url": "composable/format/path.html",
    "revision": "30192c0e372e99b4542b94eaceb380f8"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "c1b32b961319a79f6a2cdc4de9691593"
  },
  {
    "url": "composable/index.html",
    "revision": "114038fa71415e3c197316891d1ce5a3"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "87abf54713de1aa5d6be49f29e38ed61"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "3dd4ec588130ac2eb27c608626242267"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "c2dd25196b538065c7d2ce4095944a16"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "f60924c8fd0fc2e453c7a8ba4bd7e49b"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "4ee391841a072b64a6dc51cbceaf3727"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "69fa7247904b0363c645bd5ab3765ae4"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "b0a0edee7a5b8d5b9dabccb98cd38b66"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "2dacb08ddbb96a467f849cfac223c7ac"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "6c877a39af37b55ba8a1cdb9bdcb9397"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "ac93052dc382405fea834b6c48f8088f"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "38dc61dfe387769523a7e5e8ade5d34a"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "c164e9577390b6bcfa9181aeebe66a0d"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "7468394d9a1fdc8dbd7fe4ccf594200c"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b5127388b15f5a2c132c3cecd83a4195"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "47d943f61ac9bde200d4d57214020d92"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "f25c5e808d11432e168bcceacfee5dd4"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "49dc394617ac3c255e76943ecb252258"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "9fccd4f5a11bf2ccb5909cd273a6d0a0"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "866a2bde066120fa4230c7e18e0a8cd1"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "1b5c27093fa69dc78acb3b4b6d4c6d8f"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "d01ab56342bd50f423e80c8343fe646e"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "0c47070bcfcec2d39edee1df04fbce69"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "9eee86988def9451be8597f91897476f"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "7c474b6347b18389e99995976eb86067"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "c73afb876de818402b68bf52f96c6890"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "a1e06cdb6eed1d2ce722a028cd0d4bdb"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "875526cebc401f5cd509bed5397d9f13"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "339564d4e641812b8e9d0225ec9d92ba"
  },
  {
    "url": "composable/web/language.html",
    "revision": "83f6c81b20a75a4f9d045534feff62b7"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "98fb14d1a17a1c658c5427eff3903a0a"
  },
  {
    "url": "composable/web/online.html",
    "revision": "6b020bf45a5cfb83f9f01658c3755de8"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "d5fcc2b5db333792d715ea83183eb90f"
  },
  {
    "url": "composable/web/share.html",
    "revision": "318308ebb3308c1e123a2a3063f2a14c"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "7cbdbe0f1c8ee9519d467a5fb3b33e43"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "f395d67c9fd72b5daa505382306e2b2b"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "d5a4d39ec7e12156e343390a6424e970"
  },
  {
    "url": "Examples/index.html",
    "revision": "1141d2a19491854e0e1def8df2ad9acb"
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
    "revision": "b46924a906c36e413a239aea8e3e9304"
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
