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
    "revision": "86fb5ddca29a2b6a35d84d25930dd32b"
  },
  {
    "url": "api/axios.api.html",
    "revision": "8dabcdc2e5e69c750362b81120e5808a"
  },
  {
    "url": "api/core.api.html",
    "revision": "ac4bd8b4eb613bb6a2caa9a372b6053a"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "0b5ace2394d18c7479149ed447cda8b8"
  },
  {
    "url": "api/web.api.html",
    "revision": "7c680a622ad31b1d9bb5d27a6fe32944"
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
    "url": "assets/js/11.bfa11138.js",
    "revision": "bf77021ba2189a220efb24670b21d2ad"
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
    "url": "assets/js/2.574137b1.js",
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
    "url": "assets/js/45.3567eb6c.js",
    "revision": "d21985da480fdf23d951c2b42b0cc113"
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
    "url": "assets/js/app.dcd36a6c.js",
    "revision": "1a580c99170247c9f418ad6fba513cc0"
  },
  {
    "url": "composable/_template.html",
    "revision": "e2e67281a4914c5a0dae2c010af3a633"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "2e855a084ab0714da4553038d23460fc"
  },
  {
    "url": "composable/date/now.html",
    "revision": "ec17b039913f7de65a0f66d9eece7aa4"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "a71ffebed52472612702b236de9fb55c"
  },
  {
    "url": "composable/event/event.html",
    "revision": "d89e1a71404eacb8e291811ade172e72"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "9acec9703dd9ebc83c732d97639c3fe6"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "dd8f1425cf089349b2c72e4083e2a626"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "0444b29b8d68a8a0de5383d0c686c21f"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "dd0f41aa06dcc558dadc62a33cc842c9"
  },
  {
    "url": "composable/index.html",
    "revision": "14ebab2699a678ef5e6ac61ba2650baf"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "6219765e04c595c9bce09753aebd401b"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "a71b43080eddfa0063f5bc59ff25e563"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "cbd86e01eda320b9b8445183860b9614"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "c9966f0d74b8d227f881b1e58e81257c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "d0f9746555f18e3965be5d1bc507e813"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "56217ed2e79542ef3a5004b44c5b14fd"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "32e18099ab6c7c886aa44c4865d9dbe6"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "b25c261a974628031eb19a8c6021f74d"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "3e42e86cb47ed261a2eb792b61c6b814"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "ccbf83f180a5ac5cda0144bf70e0d2ab"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "0081a3d5da9be09bbb7505cf59b0c596"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "ce577db8b48bbe16912cc85f42a113de"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "b4685dc42a3de8ef93e4deb4ebe6ca59"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "ca68be6fc380228d3b159654a9112ffe"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "f194fa3e24e5143675f1f0f2f4664938"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "572f09c56471ebf91b06f89e94dccde1"
  },
  {
    "url": "composable/web/language.html",
    "revision": "d899ce79da61c886e4e64fe7a3f39585"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "913470ee06439dfcc8c749bee603d803"
  },
  {
    "url": "composable/web/online.html",
    "revision": "d3bba1eefcefd9619b94275a378f0330"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "7aefbb8f0786c12c253bb38957b7c1c1"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "d6741bfe07abd38596c1b2cf35edf64c"
  },
  {
    "url": "Examples/index.html",
    "revision": "c8c1595a0b65938a83355daa52fde949"
  },
  {
    "url": "index.html",
    "revision": "41d28b2429023ca234adf2a0aae8b4c5"
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
