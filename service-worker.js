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
    "revision": "a0656f023f6eb75f8e5175be48727163"
  },
  {
    "url": "api/axios.api.html",
    "revision": "b38ad3ba6a8da7cc162a78b0086f5b85"
  },
  {
    "url": "api/core.api.html",
    "revision": "68f9ca7bccc8432af6d79c783dd4e48f"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "0696b19dd48566c9a9ad681ed8909993"
  },
  {
    "url": "api/web.api.html",
    "revision": "688d2103ec6acd73902d30cff442871a"
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
    "url": "assets/js/1.c3f439b3.js",
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
    "url": "assets/js/78.7132f257.js",
    "revision": "06817bae05ea5d353b1f7ca68e15231c"
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
    "url": "assets/js/app.d48f5c63.js",
    "revision": "9811ccfedcc89248eefc6eb8b32c62cb"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "6cb8aa8b1c174186348ec28bf3370605"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "70a6f8cd4a0c035ca5aada4d0d987331"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "cc6b74c2059e081bfa182a03f0f1f0a1"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "d14f81aa3e6a77acf6989f72b0c5a2f9"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "5c8782f85b23a566fe24ee1dbc40cebc"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "c3e1647b39757e3671affb4c5388f1a3"
  },
  {
    "url": "composable/date/now.html",
    "revision": "938cb9d9fb2c99166117721b2a1b7572"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "68b07578e0a2ee96aad10c6f809b16af"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "37fc36be7b7b93366b953e7430277bb1"
  },
  {
    "url": "composable/event/event.html",
    "revision": "7c06b61d6901525ed88c017ce958e830"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "8b7c20ea85711051e8aea5484e4101c3"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "cce012c7e7716779ec25f4b6db2f2b5d"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "e2b370c0cfdb32126c6aaf2a7c67434f"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "69babe2acbd424dc1c909ca2c8f91d2f"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "9d17f860417e19108cb0bdd9b97a108d"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "4e665423513c875d627533683f14a960"
  },
  {
    "url": "composable/format/format.html",
    "revision": "818e9048d391bc06bb6cc57c235d4325"
  },
  {
    "url": "composable/format/path.html",
    "revision": "abe8886257eccfecd29aac788b63dea1"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "8f7588e7bb44095414618aa3baff6070"
  },
  {
    "url": "composable/index.html",
    "revision": "64a9e95cb91f68b38904f8c27213bbd7"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "2c3cf584e8ec8178bbcdb5fc10051945"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "e04cd937dd4f56feced7798cf0c08f55"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "40dd2320cd24f935b0d33c4e4d680b12"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "cca768694f7be9c8d03f40197496b3e4"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "90d147ce0f80b4cf43a5c3c6e4ae6cc3"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "253e080629db98efc5ed480efa10a11b"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "62d7aad63dc3dac4010a2d02f18624af"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "b6fced5b01903641e3c65c1434fb9f92"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "ce59eecf924a26eff8cc726da386f1a6"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "ac0044e0f34ec3d3fcfd6e083ec31c7c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "8ebb6259a9bc908f4304f1ccf43a1501"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "765b78096002282cf1a38bcd8786067f"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "b8523fead572b42a270cbeceae036e89"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "ab31b819c71d4f2cf3328be0d4c56daf"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "1a63bc721b00502960803e0ce33b6fbc"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "e520456d01c3c97b47fb7564ec5d5cf6"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "930223b3b1a5abb20f4dd4cfab5af83d"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "3e4cfa9c79d8df10d47efc3de8c05f7c"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "a9f8fb9c189ceb6834ed356d6a713de8"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "a48046f96611221789204c42775eaa0f"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "3406fe41cd9d2874cfaabece6846b1b2"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "95228544a433056fae17042c61458d8b"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "52983435330f48f22939ad19f93afe8d"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "8459e726fbb130f0d1fe15bf5eb796d4"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "05e8b6a384f6c456fb1c2aff618cf739"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "8cedd3589ce06fe39bdf7483b4620591"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "6012107d1a678a600e3da5cbbadb1c72"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "dfd9fdaafc960870607ba39d69e8d111"
  },
  {
    "url": "composable/web/language.html",
    "revision": "b8bc74bf72be6158605cb2734d0bf988"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "4b45d2fb8f700de680647917b3c38aa8"
  },
  {
    "url": "composable/web/online.html",
    "revision": "28365dce99085652c4183b4d22f844bc"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "49ea10e2524fde9e1112f877e7114259"
  },
  {
    "url": "composable/web/share.html",
    "revision": "ae47437959373d3c1a7f777afdbb543e"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "abd5677d68fec9961589e92885ca275c"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "a0b65a99815475dc54f9742f3c05850f"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "e8d42ab8087a8a215a2ff907c3cfedd1"
  },
  {
    "url": "Examples/index.html",
    "revision": "799c561f83587812c21f266072822cc0"
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
    "revision": "b4650729e9ef13c9ab24927e257b9820"
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
