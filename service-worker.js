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
    "revision": "46d21aacad5cbf453a58f90ce7dc91f3"
  },
  {
    "url": "api/axios.api.html",
    "revision": "8b71d8c8d47407cc281638ac4ad7ff7f"
  },
  {
    "url": "api/core.api.html",
    "revision": "1e9fae11c886a9e53ddd33fa10244058"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "b997e2367c816b76efffe36bb5697b1d"
  },
  {
    "url": "api/web.api.html",
    "revision": "18662d7178cb7e02ed7708858f5c2cf8"
  },
  {
    "url": "assets/css/2.styles.26ab6149.css",
    "revision": "bd1174a3106569cb1f2554dabc2d5647"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.dd46f9ac.js",
    "revision": "297e038616a6b08f8c845e14c80d0055"
  },
  {
    "url": "assets/js/1.8d582c3a.js",
    "revision": "1bcc928f03b59a9ca339c201acc4728a"
  },
  {
    "url": "assets/js/10.64937e56.js",
    "revision": "5389892b994e127506a38f62364a4784"
  },
  {
    "url": "assets/js/11.19d53dc5.js",
    "revision": "4b9f58b0c95004af72311db71e7bbe0b"
  },
  {
    "url": "assets/js/12.29e27df6.js",
    "revision": "ecc1bc51eff8f03568c2e38ab474886e"
  },
  {
    "url": "assets/js/13.696334cf.js",
    "revision": "182b97ebe92e7e1aaa30003641c29a57"
  },
  {
    "url": "assets/js/14.fd26c52e.js",
    "revision": "b52ccd30f6d050977feacd6cd40a62fd"
  },
  {
    "url": "assets/js/15.bb6ccfbc.js",
    "revision": "79f44d932efe73965e31cbab3ce4997d"
  },
  {
    "url": "assets/js/16.8839e5ff.js",
    "revision": "49bd2624ae3d42fbc2dcee2bf7d87f31"
  },
  {
    "url": "assets/js/17.b4cb0b70.js",
    "revision": "b8d5064e70ac87cf0c10ec197f6fe15b"
  },
  {
    "url": "assets/js/18.cd173f9b.js",
    "revision": "cb751fa5442a3595d9b332f7a26cfbbb"
  },
  {
    "url": "assets/js/19.37cc9bac.js",
    "revision": "b17747786ac985762a23c04158f8ef71"
  },
  {
    "url": "assets/js/20.06c93a83.js",
    "revision": "fb8dd7c5929e54d3a8e157f398abf7f3"
  },
  {
    "url": "assets/js/21.9f4607c8.js",
    "revision": "9f8eb1f82c662caa541fc0e5a117d097"
  },
  {
    "url": "assets/js/22.4a008ebb.js",
    "revision": "d91e7c40884727d993bd68a0206fb66a"
  },
  {
    "url": "assets/js/23.6d713c6c.js",
    "revision": "f01cf96c92e39830980cd512a7624980"
  },
  {
    "url": "assets/js/24.6c9595bc.js",
    "revision": "a2b7f3c51fc64f0a76d817a08d031452"
  },
  {
    "url": "assets/js/25.b1e0827a.js",
    "revision": "abef33be852b639a3ad8f35c6c8a67cd"
  },
  {
    "url": "assets/js/26.c3db034d.js",
    "revision": "6a24ab6765a9e67597d23eff35fd43c4"
  },
  {
    "url": "assets/js/27.15dacd36.js",
    "revision": "51e6b369920de945a195508b547ac86f"
  },
  {
    "url": "assets/js/28.67582c0b.js",
    "revision": "37032adf8eb19d1c6490a79a9e888a1d"
  },
  {
    "url": "assets/js/29.51f3bca4.js",
    "revision": "2f3322a127c7e61131b1c538328048b5"
  },
  {
    "url": "assets/js/30.a84d4ac0.js",
    "revision": "e947e6fa82ff81f23be08aa59d6588c8"
  },
  {
    "url": "assets/js/31.db1c4139.js",
    "revision": "3e442d7f006dc699873e062e9a83e9db"
  },
  {
    "url": "assets/js/32.cde2afc3.js",
    "revision": "a666a1f71234ee5206a82119d4385970"
  },
  {
    "url": "assets/js/33.518252d1.js",
    "revision": "823ec2ee2479e0a0aa58b7a7e5a5c69b"
  },
  {
    "url": "assets/js/34.f6803a1f.js",
    "revision": "248351a6107fb4d15089ee0da2c33ea4"
  },
  {
    "url": "assets/js/35.0d92f240.js",
    "revision": "0800edfcafc5446dfbd6e813e19ac7b3"
  },
  {
    "url": "assets/js/36.81abf396.js",
    "revision": "06ca5e6c9daa9ee3f7ceff1989d7af19"
  },
  {
    "url": "assets/js/37.ef514e89.js",
    "revision": "f841aeac21ea62c3747091ede0c9f8f3"
  },
  {
    "url": "assets/js/38.c8c7c0d4.js",
    "revision": "afefac4ec5175adcdcdc7657cb200481"
  },
  {
    "url": "assets/js/39.c8653d58.js",
    "revision": "f006d65750281b569d11790a2d6c082f"
  },
  {
    "url": "assets/js/4.aa2c465a.js",
    "revision": "3d2ce5a5cad5013d9aea6b5c6600653b"
  },
  {
    "url": "assets/js/40.9fb6dc34.js",
    "revision": "67e747e730da9926fef58bab3263f0ea"
  },
  {
    "url": "assets/js/41.5195db91.js",
    "revision": "aac9be2067a0b47f9865356044ec050d"
  },
  {
    "url": "assets/js/42.296c54b9.js",
    "revision": "35aebffa1714dc4201b0923db4502fe1"
  },
  {
    "url": "assets/js/43.9e8627b6.js",
    "revision": "516da683575e1cf2959c45645a9ca001"
  },
  {
    "url": "assets/js/44.f203f861.js",
    "revision": "a6dd2f5263d14820bb36ad3ccaa047bb"
  },
  {
    "url": "assets/js/45.fcf03301.js",
    "revision": "5f5cfadc3499344edbb5276e20b260e7"
  },
  {
    "url": "assets/js/46.fa745a31.js",
    "revision": "d6d680d7148c7198bc98ca83c25a025d"
  },
  {
    "url": "assets/js/47.9c4c76aa.js",
    "revision": "0ba8954654702e8d2cb6991eabdf7781"
  },
  {
    "url": "assets/js/48.d71ae323.js",
    "revision": "4402bda6783060e94aa8cce4bedd4981"
  },
  {
    "url": "assets/js/49.96354c71.js",
    "revision": "7897c3ccaa622cce88ef2fbf31771909"
  },
  {
    "url": "assets/js/5.edf11f39.js",
    "revision": "2fc75242ddf685fff4f187c0bec4d95a"
  },
  {
    "url": "assets/js/50.93b3ac4b.js",
    "revision": "d4bed613474626a384200522f5a03b22"
  },
  {
    "url": "assets/js/51.bdf0b787.js",
    "revision": "9e077347deb2b2fcc06a66e16f1fd71a"
  },
  {
    "url": "assets/js/52.2acb729b.js",
    "revision": "fd5f16440859d59cc1b7900eee6ecca5"
  },
  {
    "url": "assets/js/53.3def88a7.js",
    "revision": "43dc600af66f0416c00971ad1251fae3"
  },
  {
    "url": "assets/js/54.3318fb83.js",
    "revision": "af598181f55ab896000f2d6f351eff3e"
  },
  {
    "url": "assets/js/55.40bc10ed.js",
    "revision": "b9e25dc28224b239e0c12da227d3246e"
  },
  {
    "url": "assets/js/56.d4fc29ce.js",
    "revision": "a514c8bfa76fc632d1e5ea01a265eba5"
  },
  {
    "url": "assets/js/57.be9db334.js",
    "revision": "012696bd7f4a8b5aa5668ac96997d9dc"
  },
  {
    "url": "assets/js/58.8464c0ee.js",
    "revision": "c7c7a53d88327b9e879968bcf0889811"
  },
  {
    "url": "assets/js/59.b25a1cb1.js",
    "revision": "08a568455f4962653cf1bd9ac3d1e112"
  },
  {
    "url": "assets/js/6.3de2a56e.js",
    "revision": "10f09301ce478a8ff9d47ca0e299d202"
  },
  {
    "url": "assets/js/60.2c410c2e.js",
    "revision": "662b803c0f068bc421cb1785acc8cce4"
  },
  {
    "url": "assets/js/61.a84dc7a3.js",
    "revision": "6aa4f4d9423127548f13abe19f8167ec"
  },
  {
    "url": "assets/js/62.4a6faeb9.js",
    "revision": "c53eaa4a194b2f80d6ba28cd13f0a593"
  },
  {
    "url": "assets/js/63.ca21f0d2.js",
    "revision": "f55fa562ab623d397a2792732d4bfd2c"
  },
  {
    "url": "assets/js/64.680024a5.js",
    "revision": "86dac5099d7e4d37297fcc3b0c411f07"
  },
  {
    "url": "assets/js/65.1b49a065.js",
    "revision": "9633d6512c0704791161e846136865f4"
  },
  {
    "url": "assets/js/66.78eccca5.js",
    "revision": "cbe540b3654c4853d70f4fe3713a73d6"
  },
  {
    "url": "assets/js/67.45fc6f06.js",
    "revision": "9663e94be1f1aa74281da498eea89b19"
  },
  {
    "url": "assets/js/68.6f8a5e01.js",
    "revision": "d9738a028b93e3d497faa69fb1e659fe"
  },
  {
    "url": "assets/js/69.f38929b8.js",
    "revision": "e78c88c442be8e1d584617ffd2928814"
  },
  {
    "url": "assets/js/7.a52610f4.js",
    "revision": "d0fe0800b76c4efa5c13f667c799c6d9"
  },
  {
    "url": "assets/js/70.25160b91.js",
    "revision": "79a3e5f9a34222d7773e40ed680e621c"
  },
  {
    "url": "assets/js/71.e30233c7.js",
    "revision": "9d8d56764bd9b452dbeb41709c717f0c"
  },
  {
    "url": "assets/js/72.302d7d3c.js",
    "revision": "097d20c836516d7a3b8f20b8cffbe9bd"
  },
  {
    "url": "assets/js/73.384babc8.js",
    "revision": "42f0dfeb8bdfcad1914b7947c6893270"
  },
  {
    "url": "assets/js/74.f98919f3.js",
    "revision": "efb4b9a3cc5736fbdff2f615b9983bc6"
  },
  {
    "url": "assets/js/75.9db47fbc.js",
    "revision": "e2283023273a5ea9f4a9313fbba3e3c3"
  },
  {
    "url": "assets/js/76.bec42788.js",
    "revision": "3eea99ae6cd579f1733d9f6914eaeb07"
  },
  {
    "url": "assets/js/77.290da20b.js",
    "revision": "8cca92d4da3d41ad82a52ba9faba7cdf"
  },
  {
    "url": "assets/js/78.742479a7.js",
    "revision": "27b8d1085bed13cadfbffef13e3360eb"
  },
  {
    "url": "assets/js/79.3f9e35c2.js",
    "revision": "999673430c4267d7b631a3940d691075"
  },
  {
    "url": "assets/js/8.398bcb7a.js",
    "revision": "90d2a4c5d8286bf74e69b140f59475fa"
  },
  {
    "url": "assets/js/80.5a7cb423.js",
    "revision": "988f677ea2804579e03d24d242ef044a"
  },
  {
    "url": "assets/js/81.ccf3f2c0.js",
    "revision": "828a820b6954835183251426cad7dcfa"
  },
  {
    "url": "assets/js/82.02cc11fc.js",
    "revision": "2f66764a963796c0ba92077659c517aa"
  },
  {
    "url": "assets/js/83.139cdde4.js",
    "revision": "584363fc29a47d9008c6b958644340a5"
  },
  {
    "url": "assets/js/84.53cd3742.js",
    "revision": "2637487ac2701074fea70087df5f72ca"
  },
  {
    "url": "assets/js/85.eece6e65.js",
    "revision": "715442121905b5bc2867c233f600c1b6"
  },
  {
    "url": "assets/js/86.8500c006.js",
    "revision": "67fe97c35eb5e11de1eb12b6e2f06669"
  },
  {
    "url": "assets/js/87.4fe3fc5d.js",
    "revision": "34a69841848e26ffeaa261854596dc81"
  },
  {
    "url": "assets/js/88.5f537219.js",
    "revision": "e5929e5c17eca20cd19d9ad7dc0f517d"
  },
  {
    "url": "assets/js/89.83cc9811.js",
    "revision": "2a5c82fbef74f84cc501e4201e968766"
  },
  {
    "url": "assets/js/9.1ef676a5.js",
    "revision": "f082a3ac908f0d4d43ccc382ccdb0ca4"
  },
  {
    "url": "assets/js/90.ddaa9438.js",
    "revision": "8c1d22f68f6c8cdce636ad134a4116da"
  },
  {
    "url": "assets/js/91.2425830d.js",
    "revision": "1847ccc618f7a00e889ca4dca5bd01b6"
  },
  {
    "url": "assets/js/92.489e1da4.js",
    "revision": "9a5f678a77498abd9c0bcbf48f8f7f42"
  },
  {
    "url": "assets/js/93.f39e2884.js",
    "revision": "0cd295a334cec7901e733ff39b85f9b6"
  },
  {
    "url": "assets/js/94.5756be5a.js",
    "revision": "f8651686218d20e9c157eae1adcc2982"
  },
  {
    "url": "assets/js/95.2ab38d6f.js",
    "revision": "c51bba752ad8180c4e75312aea3667f1"
  },
  {
    "url": "assets/js/96.0d13923f.js",
    "revision": "bb743316cb8b9e7ff4d8a6478e0c6af0"
  },
  {
    "url": "assets/js/97.f749af04.js",
    "revision": "d870c9e8783aabf9c1b2f8754fd850da"
  },
  {
    "url": "assets/js/98.cf1ede10.js",
    "revision": "f0a14c9bb875224b934a2bc4b4764a98"
  },
  {
    "url": "assets/js/99.d93341b5.js",
    "revision": "448e71d69a1ba2294b2820e6ef48f781"
  },
  {
    "url": "assets/js/app.c1d7df8e.js",
    "revision": "4e145f1329a81834f289807c65443f9f"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "cb35b5f93d8e68cb41ff549735dbefa7"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "4c43910183a5f75e2e6d64b73d7467dd"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "db235f632203154831e5e0419006537f"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "f7913500ce0cf1a9973f6100bb0be57d"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "0aa967269510b03f59a4e14f3347d2ed"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "8713e37b6bc9066f78537e8c906bdccc"
  },
  {
    "url": "composable/date/now.html",
    "revision": "6d319f0d3ae91ef031a933cee491d924"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "0b17d949c8f50aca79ac58fc5bcd8597"
  },
  {
    "url": "composable/event/event.html",
    "revision": "f20548fa851389a7481e20f3a404fed0"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "66788d67ef66a5514098af885f55880a"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "85e4b597b77a575cbcae369d6b4c1469"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "adc7eeff2d040d79032f29de453410e8"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "07a1e5a18407abfc88ee8ae714d33df7"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "ece643e331bd9f063ac816c83724dc31"
  },
  {
    "url": "composable/format/format.html",
    "revision": "bf022504418ce47b35ed256a26fab5c0"
  },
  {
    "url": "composable/format/path.html",
    "revision": "60764cb9e6cc23004ac039c5e972bbd0"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "1910c7aaad0945dc8479dcd88e474a2b"
  },
  {
    "url": "composable/index.html",
    "revision": "c44d01a5c203f4ee1c654baab955d94e"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "b364ba42da2b2126f99404d74f30c89b"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "35da57f01028c296ce11ec25b8ef0175"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "020376e88b05accfda951ecf5c480ca9"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "bb44f755df41df9ea30707724dd3fb0f"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "d56a9719c9d1de7949c676c2faf91896"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "63710fbeccb15415ceef4fbfe4698418"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "80847daccb8a2bd21e8a5d080e131818"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "4eb61f4d04c9d775ac41c214cb9c1a76"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "c847ef9755bb6aa66efa5390e612e8e4"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "8b9b3a0ce311fe626cc44a41cc169d49"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "96d0d061ddc503620ec736ce7d86327b"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "8e434825d8ae724e0e3086a0a9ee677e"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "c58837839552bc29c9a4f0535ca23116"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "6e08eeb35806994cac9e4e16564fa6e7"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "75a4a2730a467ff893338b02e2c46f88"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "84103b3b2c9c0bc41f2729e945d9040a"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "1e76b4d3e8b7c1a2bddcf71a2bdcfbda"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "04fd9517c4a872ac53dc24c94e5791e3"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "e72d015cdcd221ac3ba828bf85d41c7a"
  },
  {
    "url": "composable/web/language.html",
    "revision": "922b3052a5b92c66c1a3247bc29ee1b7"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "e0b4ad923dbbb84ec27a2a7ade68c7b3"
  },
  {
    "url": "composable/web/online.html",
    "revision": "0280d2a757a10a34eaffd23dfc9396b7"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "dd8eab904d14fec6c65f0c59c546c3ae"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "97132caa6318700ddf9b536f6af571b8"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "71a71065b0e9087ef0f5f6656ea3d08c"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "a584b99709ec1d8f09193aecf24926e0"
  },
  {
    "url": "Examples/index.html",
    "revision": "32843b04fbc59c53694aa3139339a8f7"
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
    "revision": "3fedd239ef410523248f3a102f795f60"
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
