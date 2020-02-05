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
    "revision": "24c3d4cd510f48c7acdaedb8ac00a1cd"
  },
  {
    "url": "api/axios.api.html",
    "revision": "87ee9d6f6800e73ac849d2cd5fbce761"
  },
  {
    "url": "api/core.api.html",
    "revision": "bd3985af4e0f0eb63200a7e6d070c178"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "a509cabb25c1141a28eb5f6d616dfa15"
  },
  {
    "url": "api/web.api.html",
    "revision": "fa81700a5d739374f7d7d4676d63a64f"
  },
  {
    "url": "assets/css/3.styles.a8e28f76.css",
    "revision": "aa796e51e1da6680f0f8c5aea579f473"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0d906fca.js",
    "revision": "890ac4f867d18707ef0c918bda795004"
  },
  {
    "url": "assets/js/1.2e8714c1.js",
    "revision": "ba96eaea0996fbcbabab17fffc5e657e"
  },
  {
    "url": "assets/js/10.19fc476b.js",
    "revision": "b3156e78a361dc3afc4a3c20e0187894"
  },
  {
    "url": "assets/js/11.6726a52e.js",
    "revision": "8d1182a044e1373b9d740abee9916768"
  },
  {
    "url": "assets/js/12.1cd661ae.js",
    "revision": "d033c6629a4b42d1d8f2b518f5be0ed6"
  },
  {
    "url": "assets/js/13.f51ba3fd.js",
    "revision": "28fd8f6ef68062fe819c26a0ee43a63b"
  },
  {
    "url": "assets/js/14.1cbedc67.js",
    "revision": "06faa4cadcd161e46ff44fe8b6862f79"
  },
  {
    "url": "assets/js/15.5cd023b2.js",
    "revision": "67fe8226b4a390aca89f050163eccda3"
  },
  {
    "url": "assets/js/16.32676b12.js",
    "revision": "e26eb2c7b097af14a029d26226c2cf62"
  },
  {
    "url": "assets/js/17.ab072674.js",
    "revision": "0f27ca01c93d275b55a408c3892b665c"
  },
  {
    "url": "assets/js/18.85b57a94.js",
    "revision": "86c2f7dcf448d8bbffb2b96156036d0e"
  },
  {
    "url": "assets/js/19.d2849560.js",
    "revision": "a39dec83fa119483ca4cf71a7f9d38b0"
  },
  {
    "url": "assets/js/2.e5370216.js",
    "revision": "0c12778d07370424cd02b2e5df1f5f29"
  },
  {
    "url": "assets/js/20.bac54027.js",
    "revision": "8d3f2aa2b92a2ce69d9a4f0bbb4fb6cf"
  },
  {
    "url": "assets/js/21.df728454.js",
    "revision": "b4807314140b803faf6e1c34d35b45e1"
  },
  {
    "url": "assets/js/22.e74ee151.js",
    "revision": "edb614de233464255e69c5a10f902906"
  },
  {
    "url": "assets/js/23.b1b5c981.js",
    "revision": "3270db9cf4c9ed738bbe396ee6fd2327"
  },
  {
    "url": "assets/js/24.6d2c963c.js",
    "revision": "ec8d6e08840514d0f9e4530e58785434"
  },
  {
    "url": "assets/js/25.54216ec2.js",
    "revision": "060eb1a8fb3288848906d116572c47d5"
  },
  {
    "url": "assets/js/26.1278ac2e.js",
    "revision": "278db901995e026321e51a1d3a6ea1bf"
  },
  {
    "url": "assets/js/27.fd3ee9a0.js",
    "revision": "e978b7f63ab87e50347f2d12467a0f92"
  },
  {
    "url": "assets/js/28.c6fc42bc.js",
    "revision": "78e985e57b312b3990dd2d87cf90edad"
  },
  {
    "url": "assets/js/29.640d4818.js",
    "revision": "a834139b4d8320059369cb629224fdbe"
  },
  {
    "url": "assets/js/30.8db9606b.js",
    "revision": "1de60ff67a36f3307ce91a76c6a01759"
  },
  {
    "url": "assets/js/31.4f61f2b0.js",
    "revision": "d8f398dbf6540a399bf1413e3eb812c9"
  },
  {
    "url": "assets/js/32.878c9425.js",
    "revision": "ef09c9061f0bf0ca0741575d834bda56"
  },
  {
    "url": "assets/js/33.3bcdfbc3.js",
    "revision": "74dca5985979d2991c5f479067c75612"
  },
  {
    "url": "assets/js/34.2ac3b339.js",
    "revision": "c3d915e6f45ca72b3cc0f29de8bf598d"
  },
  {
    "url": "assets/js/35.fdd072b1.js",
    "revision": "56b52ae4e79e74bb6b1294c17b1c47ea"
  },
  {
    "url": "assets/js/36.ba1a2e1c.js",
    "revision": "3a1971d2f50203ca3b6ccefb53ead2d1"
  },
  {
    "url": "assets/js/37.7e5e1b27.js",
    "revision": "76a0e41f56aa454e6f2af9049da9983f"
  },
  {
    "url": "assets/js/38.9d9e2239.js",
    "revision": "bd1c0a30824d88b78753808c2d04bf97"
  },
  {
    "url": "assets/js/39.d72cef7e.js",
    "revision": "28b9a6f78190bf82173fb043d549f7db"
  },
  {
    "url": "assets/js/40.eb0422e2.js",
    "revision": "df5f13d7c923b4c493c8c3cc99ba6704"
  },
  {
    "url": "assets/js/41.3e32c334.js",
    "revision": "823658564aa441fdf9887f7f70cd435f"
  },
  {
    "url": "assets/js/42.329f3bab.js",
    "revision": "089150829289684a2297f08c45b49a9a"
  },
  {
    "url": "assets/js/43.f68b49b6.js",
    "revision": "b122a924fe226702c46265d3d5887272"
  },
  {
    "url": "assets/js/44.78b36f23.js",
    "revision": "7cbc59b075db6e0fc5905b276661517a"
  },
  {
    "url": "assets/js/45.107b9789.js",
    "revision": "319d24d3eb6711ea93e280af7f0d44cb"
  },
  {
    "url": "assets/js/46.4bf8d6b1.js",
    "revision": "5d5080a76be8960a0680d8afad163249"
  },
  {
    "url": "assets/js/47.70fde537.js",
    "revision": "a085b8778768cf576c15f7d4be30ef87"
  },
  {
    "url": "assets/js/48.c39d6617.js",
    "revision": "592c1f5502af4fb27f5f1dbe18c0cf2c"
  },
  {
    "url": "assets/js/49.3794f7fd.js",
    "revision": "8b91e17a6f0b54203c78a00e230e85c6"
  },
  {
    "url": "assets/js/5.673948a9.js",
    "revision": "a22a541e3b6b35664a62c49d0ebfdfce"
  },
  {
    "url": "assets/js/50.2aecb518.js",
    "revision": "c42148fc5f1f1b8d7fe82f86aa20b9d9"
  },
  {
    "url": "assets/js/51.95b22a0d.js",
    "revision": "2cc0c98814d6c547c9c0721af4d87422"
  },
  {
    "url": "assets/js/52.5ebc508b.js",
    "revision": "3f192e8faaab18fb6f689e986e0e49b0"
  },
  {
    "url": "assets/js/53.bb97825c.js",
    "revision": "56aa5c7e6ec1903ced435393d57fce29"
  },
  {
    "url": "assets/js/54.cca1e995.js",
    "revision": "ea583040317fb17f818ec9d34daee77b"
  },
  {
    "url": "assets/js/55.42dbc1db.js",
    "revision": "daec0f1c6b5c1ea5e5d90d004251e07f"
  },
  {
    "url": "assets/js/56.d8bee06f.js",
    "revision": "4a468b54096dad1fef8a44d4b71364ec"
  },
  {
    "url": "assets/js/57.0012073b.js",
    "revision": "828ba79a4b4aa67b2274ea020d548ff3"
  },
  {
    "url": "assets/js/58.a60d68f4.js",
    "revision": "679bbcab025f577da2889842e8c01300"
  },
  {
    "url": "assets/js/59.c3150209.js",
    "revision": "04330e478399bc8b18b5f31cc0d01469"
  },
  {
    "url": "assets/js/6.67663b39.js",
    "revision": "8148d982f0c347ae56ade0e49b34758d"
  },
  {
    "url": "assets/js/60.c3ad1827.js",
    "revision": "196cc0b958c11b19414d90760624634b"
  },
  {
    "url": "assets/js/61.4068b332.js",
    "revision": "992c3d14d13758752b68abe94734f40f"
  },
  {
    "url": "assets/js/62.66435384.js",
    "revision": "58c2ef2ac1f91cb40608fcd5218e7a5e"
  },
  {
    "url": "assets/js/63.c5fc5d92.js",
    "revision": "f27bdbc2b8cd2848fd6eca71ba90ed53"
  },
  {
    "url": "assets/js/64.934b0958.js",
    "revision": "453e20618728e123a97ecc2cfeba4b1d"
  },
  {
    "url": "assets/js/65.0d238e20.js",
    "revision": "117e8aaf7e2fcabeb267fa6c04be8ce9"
  },
  {
    "url": "assets/js/66.8ae5a084.js",
    "revision": "0ee655def2cea1e05e20f022fa00bf9f"
  },
  {
    "url": "assets/js/67.9e060b5c.js",
    "revision": "0c14259a979a237126ae96ee030eba8c"
  },
  {
    "url": "assets/js/68.e383fd3d.js",
    "revision": "9198f11312f7da038d59f0bedd8232a7"
  },
  {
    "url": "assets/js/69.d023dcf6.js",
    "revision": "b079a8b3fff19700fd24c0922b79a878"
  },
  {
    "url": "assets/js/7.9787fccb.js",
    "revision": "1af239e09d57fdd0c47bfebc7612c0f2"
  },
  {
    "url": "assets/js/70.4e9adbdb.js",
    "revision": "6683af7809355e0ad769a1c10ef94adf"
  },
  {
    "url": "assets/js/71.45994aba.js",
    "revision": "fcd7b778077d212e25645345a65502ef"
  },
  {
    "url": "assets/js/72.a91170e4.js",
    "revision": "790d4111f5596a266524f8c5f1b0bfa8"
  },
  {
    "url": "assets/js/73.f2f75449.js",
    "revision": "2c5484590cc5af1952ec49e4ee315714"
  },
  {
    "url": "assets/js/74.0c348252.js",
    "revision": "7438652e041a72b30f93ff59faef4cb4"
  },
  {
    "url": "assets/js/75.79e0cca9.js",
    "revision": "58d3834c70232eac44d188a7e4c6fa52"
  },
  {
    "url": "assets/js/76.a8029cc7.js",
    "revision": "819a086845a01c99cf1d7de8123380a8"
  },
  {
    "url": "assets/js/77.41bb298a.js",
    "revision": "8068271be09e6a85bb99a07510d56f2f"
  },
  {
    "url": "assets/js/8.d67277e1.js",
    "revision": "86826375681a534f7764be732656e523"
  },
  {
    "url": "assets/js/9.d0e54101.js",
    "revision": "f33c9abc87e34eaec3e29cfd06d450f5"
  },
  {
    "url": "assets/js/app.0b9dd7b6.js",
    "revision": "8fd91499f857f10eb68cf80e4e149575"
  },
  {
    "url": "composable/_template.html",
    "revision": "ba380fd42b37b1459b920b428d4f068e"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "799cb3df222748c77ec0598f28e26689"
  },
  {
    "url": "composable/date/now.html",
    "revision": "8b39cee449a31f174dd74f9f8150d6df"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "667bebec1a8d066eaba6edb85e3bff0e"
  },
  {
    "url": "composable/event/event.html",
    "revision": "237368dbcf6e8eababaf7a696b179290"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "02e6fa0049cc91009b4ae8b3dc5fe9bb"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ca4b2ac1deefab9549980dbd26686186"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "37bfe46a224d078fe6955bd8f69aedc3"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "52088475292061429ac2e234ee0784a3"
  },
  {
    "url": "composable/index.html",
    "revision": "57d1c6b5e5c920b12c793c832758360f"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "f7ec7f8f9a85ea46c646865d2d7260fe"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "fb33c48c94fa3960a856b8f359f7e469"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "4fbb71353d6fb66a2abc9e3c81540217"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "2d08016d35f54dbc12c3b86054799a63"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "130680ea11242eb6601c6ade6ee3ccdc"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "b2bb0b338e35e18abf99e32ac248fef7"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "24695b24841289edca7192feb9755421"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "af1edbaf9bee6898ff1376b455c1bb5a"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "4a2b9212af5283068a7e9a758b83138c"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "b43393cd58ed5e210caf5ff0da9e3a67"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "b9dccc33773f05729ba6df4859309aa3"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "0886a4748649dfc2fce0d04ef2c26d13"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "fd81e77a7c083f14a3d52de4195feab0"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "e9e09c2a66fa6a472cba362739b1282a"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "1da49d520ac01ccc37f5324bcb326bfe"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "6053f9066345ab82913911daf4f86bcf"
  },
  {
    "url": "composable/web/language.html",
    "revision": "f5a928a43327a8121a2dc1603c1bf103"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "c47909919de883b96ed6566820f9df36"
  },
  {
    "url": "composable/web/online.html",
    "revision": "07c8e40032e85c2bfa0c21e6ddd1703a"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "d2e1457ee9fe95bdcc8e4b09381cd451"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "e022a567db601da2ff1dc6b6bbc5de28"
  },
  {
    "url": "Examples/index.html",
    "revision": "e96830a0ce43775834ba1d846d2b1469"
  },
  {
    "url": "index.html",
    "revision": "42b67bc8932ed7b277a8be0892fc28ab"
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
