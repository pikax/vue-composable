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
    "revision": "2fc84adbbd10fe83917046a68d6087dd"
  },
  {
    "url": "api/axios.api.html",
    "revision": "1a02848746ba701e71f8a4f1d4fdf021"
  },
  {
    "url": "api/core.api.html",
    "revision": "c69f5d5183ad7e18985e686636ae15a2"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "f01f348ba2a4eed4b5511be192eea463"
  },
  {
    "url": "api/web.api.html",
    "revision": "3f24b94ce641b108b248b843476b8de7"
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
    "url": "assets/js/0.8e63dc09.js",
    "revision": "d79b399f9fa6eb8b47cf4c6de069a82d"
  },
  {
    "url": "assets/js/1.23a7e93e.js",
    "revision": "cdd829794f395471510ee9e8a78c01b9"
  },
  {
    "url": "assets/js/10.b7986e3c.js",
    "revision": "5a4511c87936c2ed2a6ecb44fc445e50"
  },
  {
    "url": "assets/js/11.155b7789.js",
    "revision": "2f5d59a02fca546a3ff65f78f5dc1228"
  },
  {
    "url": "assets/js/12.21c31a3b.js",
    "revision": "d14b45cc56f9e7201de52f7c612b3e86"
  },
  {
    "url": "assets/js/13.51421ab8.js",
    "revision": "5e30a7200db78d12be810c75ddaba1b8"
  },
  {
    "url": "assets/js/14.aed9c371.js",
    "revision": "2fe669aea03af66257e685fa4e9e718f"
  },
  {
    "url": "assets/js/15.54380c41.js",
    "revision": "b776e615b5e28e8cf6656184be8bf499"
  },
  {
    "url": "assets/js/16.08623632.js",
    "revision": "c7760c71ad08f0bda6e17b0a30c0f6a2"
  },
  {
    "url": "assets/js/17.b41d6a2b.js",
    "revision": "91109161b1383030df4edb8d3c126060"
  },
  {
    "url": "assets/js/18.09222abc.js",
    "revision": "e6f864aeab0c38c5c069311221cf2abb"
  },
  {
    "url": "assets/js/19.6a1ab4c6.js",
    "revision": "ab7cf394b22dbd5571139c37507b68a0"
  },
  {
    "url": "assets/js/20.06aaf8cc.js",
    "revision": "109b86456e157782d325a7f7322c86af"
  },
  {
    "url": "assets/js/21.765b5c7f.js",
    "revision": "a6249e966b08902bce1a525b821695af"
  },
  {
    "url": "assets/js/22.ff89e8fa.js",
    "revision": "22914f201b27d1606bd0fa8437e7cd14"
  },
  {
    "url": "assets/js/23.1c77b719.js",
    "revision": "e1d453c180388c124ad4547efd5ac5c5"
  },
  {
    "url": "assets/js/24.dd54051c.js",
    "revision": "36ae64a37fd2dd2bebdd032ba07c6425"
  },
  {
    "url": "assets/js/25.de6c48bc.js",
    "revision": "90cce9efd20442a2690ab1468930ff56"
  },
  {
    "url": "assets/js/26.6a23e52a.js",
    "revision": "2315b0ab241f8a6a83a7da353c3e8542"
  },
  {
    "url": "assets/js/27.8e04c4d0.js",
    "revision": "9730bc6073299b87225a248196931392"
  },
  {
    "url": "assets/js/28.62fbc7cd.js",
    "revision": "52037e3e8a90af857c5e96789f1340a8"
  },
  {
    "url": "assets/js/29.55135304.js",
    "revision": "7aacec8a7af7d57d257183305f6cba91"
  },
  {
    "url": "assets/js/30.ecd99ed5.js",
    "revision": "9d7b21e40ddce172e1ea1ff83ffdde58"
  },
  {
    "url": "assets/js/31.1354ce0f.js",
    "revision": "f19376b52baba858bb45b35cbfe4db14"
  },
  {
    "url": "assets/js/32.0a79c63d.js",
    "revision": "ea90addb405850db97add1092a6a8eb2"
  },
  {
    "url": "assets/js/33.cc14ad47.js",
    "revision": "db003c1d94bea5b0c5a52a7d390631c9"
  },
  {
    "url": "assets/js/34.0e71b6c3.js",
    "revision": "ccce9de11eae3d2fbd115945ddb38ce3"
  },
  {
    "url": "assets/js/35.5c442198.js",
    "revision": "2fc6005919aa53ae135e935a512925dc"
  },
  {
    "url": "assets/js/36.1223f33f.js",
    "revision": "2dae4278248b94a415448b6a6bd9d511"
  },
  {
    "url": "assets/js/37.218bec07.js",
    "revision": "647957b95351574f5d0068d6dc76b31c"
  },
  {
    "url": "assets/js/38.0c35ae21.js",
    "revision": "6a322997c141720fcbf6b790a51409cb"
  },
  {
    "url": "assets/js/39.5b3c63a2.js",
    "revision": "ec5464e99da64ddb0b4ae303f8e1581e"
  },
  {
    "url": "assets/js/4.2ec7f213.js",
    "revision": "bf86a9ef6631b1d14b2ba295ae64f160"
  },
  {
    "url": "assets/js/40.95ce8c19.js",
    "revision": "de44d4ebb2938a00a91522eae033e0a2"
  },
  {
    "url": "assets/js/41.45611853.js",
    "revision": "e097edd8b2c4985c6379bd7f9c8e77ca"
  },
  {
    "url": "assets/js/42.8e08f494.js",
    "revision": "dee5280d1a0077279064fe09b7e398af"
  },
  {
    "url": "assets/js/43.b25a4803.js",
    "revision": "81a6776a01a76dbdd6c612d3be22e20a"
  },
  {
    "url": "assets/js/44.5dd8d54f.js",
    "revision": "cd48d478b5006c3a236ede73f54605f2"
  },
  {
    "url": "assets/js/45.a72f85c3.js",
    "revision": "d53d424969069ab431b87014c8a5d285"
  },
  {
    "url": "assets/js/46.572a28bd.js",
    "revision": "2f91aceb1344defd6372a910f3c6862f"
  },
  {
    "url": "assets/js/47.48f784d5.js",
    "revision": "959b68099d6181a36f9a1ea4a8174e50"
  },
  {
    "url": "assets/js/48.0211af37.js",
    "revision": "6a74272cbead0bcc8be073c0d10a23b6"
  },
  {
    "url": "assets/js/49.b29ef98f.js",
    "revision": "b003620400a53e9a6c9f77f48f828c9a"
  },
  {
    "url": "assets/js/5.5ee5c6d3.js",
    "revision": "4dcc93219dc1e3e1133eb72d4190add7"
  },
  {
    "url": "assets/js/50.0c6d18bf.js",
    "revision": "bf432fd865a96d707fd6101e3832cfed"
  },
  {
    "url": "assets/js/51.ef2d58d4.js",
    "revision": "8e07edbbcb64d8160aaa4add3d7bf023"
  },
  {
    "url": "assets/js/52.1fb1dbd0.js",
    "revision": "c62cde42052df32378acefa9e1b139a6"
  },
  {
    "url": "assets/js/53.b22b7288.js",
    "revision": "f683674e24c4070fc7013fbaf7a0d6cd"
  },
  {
    "url": "assets/js/54.4361ff36.js",
    "revision": "d21da9e7b841acf91cba447b763ce54f"
  },
  {
    "url": "assets/js/55.f3b2e0a1.js",
    "revision": "b77f73650f4a513e81b2e0ee918b085f"
  },
  {
    "url": "assets/js/56.661bebf8.js",
    "revision": "9c91366aa6f3aae1e48e39754c6848f2"
  },
  {
    "url": "assets/js/57.9d718ba5.js",
    "revision": "0c8e01b9223f4de9fed13618a30de114"
  },
  {
    "url": "assets/js/58.31d4e957.js",
    "revision": "9a1b570fa06fe1f8b967d98e0ee059a3"
  },
  {
    "url": "assets/js/59.47173364.js",
    "revision": "6852a9aa7dd0d280fa9db4624bf2b457"
  },
  {
    "url": "assets/js/6.51761d29.js",
    "revision": "e019cf1ef2b39bd2589993316a2fd46c"
  },
  {
    "url": "assets/js/60.d8c028de.js",
    "revision": "b91a2ee0ca2a4e50478ebd1036ea257c"
  },
  {
    "url": "assets/js/61.c14dc3a5.js",
    "revision": "173e8d731a0b1edadde8b0826d40f298"
  },
  {
    "url": "assets/js/62.6869f697.js",
    "revision": "9eb51823b60558abe939dc5a00c8d043"
  },
  {
    "url": "assets/js/63.fc28079c.js",
    "revision": "def514aaf39aa3ef3df1c317b911979a"
  },
  {
    "url": "assets/js/64.3cf32666.js",
    "revision": "75354c47d9faf153604280518a2a5430"
  },
  {
    "url": "assets/js/65.2e70996c.js",
    "revision": "17003b204b54599c0eaa3a875a70484e"
  },
  {
    "url": "assets/js/66.49ec31d9.js",
    "revision": "f1b6ed9c6763b8058a5f31c132721010"
  },
  {
    "url": "assets/js/67.b37e62c9.js",
    "revision": "a84dbff9f0f569c51d23e48252a48da5"
  },
  {
    "url": "assets/js/68.0651cbba.js",
    "revision": "e89130f439774c16c46828103d16f53d"
  },
  {
    "url": "assets/js/69.e0fa2288.js",
    "revision": "83fd8e1e090dd6b037a35ac4857dcd15"
  },
  {
    "url": "assets/js/7.e197d338.js",
    "revision": "38b3ba193e9986af42452e9821a7b585"
  },
  {
    "url": "assets/js/70.e908f697.js",
    "revision": "b691ed7e2235be66c83295be21165481"
  },
  {
    "url": "assets/js/71.4b03f283.js",
    "revision": "4d95980b574f9197ddbaf897faa9c47a"
  },
  {
    "url": "assets/js/72.aa240058.js",
    "revision": "37f0e1689213982c2e3d313444066edf"
  },
  {
    "url": "assets/js/73.0caf5d57.js",
    "revision": "514ef6c59c36802b266cc38a9d89712d"
  },
  {
    "url": "assets/js/74.243e930c.js",
    "revision": "bd6df03bebc1fe8e5251db386edc0010"
  },
  {
    "url": "assets/js/75.d8af95b3.js",
    "revision": "90df3558225a4de67d018e6a5a71a7ff"
  },
  {
    "url": "assets/js/76.43a94274.js",
    "revision": "690b320677bd33a792b79fe71bf687a7"
  },
  {
    "url": "assets/js/77.f7c3a052.js",
    "revision": "28277f74870416d1466f0ccdc294a4dc"
  },
  {
    "url": "assets/js/78.3eee1e45.js",
    "revision": "05fc241326c809a25dbb1e9a7b5e7eeb"
  },
  {
    "url": "assets/js/79.4928edc7.js",
    "revision": "967e3f6da3d06b4542ff7fd62192c0a5"
  },
  {
    "url": "assets/js/8.002d0d22.js",
    "revision": "6405bdc3741b42e601e2025802cb35ad"
  },
  {
    "url": "assets/js/80.13f4b454.js",
    "revision": "81f2d50b5bbf0c189bf64cfa03ec6ad9"
  },
  {
    "url": "assets/js/81.22565992.js",
    "revision": "9b68ed52ea7c00111a65fa0df8b2c8b1"
  },
  {
    "url": "assets/js/82.2b46ea29.js",
    "revision": "dcc4b91b8af05652506699a9a5b508f3"
  },
  {
    "url": "assets/js/83.ce32872f.js",
    "revision": "f501e1355c00a9386fe36c0c27f48b0e"
  },
  {
    "url": "assets/js/84.c3380349.js",
    "revision": "d1df3fb640977cbb2d1de89aab276a35"
  },
  {
    "url": "assets/js/85.ade94805.js",
    "revision": "7fbf5d35d63255683e5614eb67e2ff93"
  },
  {
    "url": "assets/js/86.f8f1bbe0.js",
    "revision": "1352cabe2586449b56bc0e427f413d3d"
  },
  {
    "url": "assets/js/9.3f673e1b.js",
    "revision": "f5553f90118ad41ce92546418fafc36f"
  },
  {
    "url": "assets/js/app.73c014e0.js",
    "revision": "909a28ed0a6d0b5d785451ef4e8c90e2"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "3848f890d9c480971c542461ebd25b0d"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "5e2aa29f3c277c266d6c73580b6863d4"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "430c1f6f5621b5330d6fb1232034b0c4"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "4cf3778ef19b6501ff677531867e9ebb"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "f8ab42cec501a2229a76e06e96914e53"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "5b94f3010b39ce0ad8e6e1a58de92d93"
  },
  {
    "url": "composable/date/now.html",
    "revision": "ee1efaf6f032e4fa7c8137b63d1cab18"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "9f34c0145d0a7ece3f2c8d94c144e702"
  },
  {
    "url": "composable/event/event.html",
    "revision": "31272a18736b0dc5206c5e4c8cf79a14"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "61958934b78e763a09c39265e46e9521"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "2be6f8cd52a96e0989a1af3fc6efe810"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "15819013cbcba949d12d84d56b939040"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "c92c9ffd0957910d01529ce2cccdff7c"
  },
  {
    "url": "composable/format/format.html",
    "revision": "f0d1670e9d8cd6f763e4d4cfadc9c223"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "3803fb5fa9614068082e19777f44ce4d"
  },
  {
    "url": "composable/index.html",
    "revision": "3cd5036322bdf2fc75df0b39a61bd21d"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "71f8dcd76c00d4a80a4d1ec692ab3b86"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "3f616f1ad656c6958e94af326f03173f"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "48576457635011424f9de9e1892ff40d"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "b9844d93783f87370b11d13be8072c1b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "da4f0c569eeab04ad1fdeb51accc0ec1"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "287b882d43292e1076b2605934a4fbe0"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "5f2a1bd514d6f3cb9675cebf1cd9730f"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "150c16f4a23ba62c72714496d0e31be0"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "b018d5fc7c014eaf46017114d9b7587f"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "0f9334aae45e8d5dfb5b9e3d32044050"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "3858fc0f8aaf72dc9360a5bfd7d5d25f"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "64434555cfd220a59879b33ffde27d1f"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "0e5d7a95ff4d5e04a29ccfb065a1955d"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "42adbf62014af12bd3378045edcb113f"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "0bb727a01c242a440675e8196e018674"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "7241deb3a1e15bd6c07b0af3abeb26ba"
  },
  {
    "url": "composable/web/language.html",
    "revision": "a345659db52a098afdff6d079e0e1d0b"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "69136fc8d411758ce8bad147ff1e494a"
  },
  {
    "url": "composable/web/online.html",
    "revision": "c360ecd01193d55280272703ddaea13b"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "4ae0b05fde27f9af82903e2b9f37db38"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "e7e98ad37340a1022acce2f69f3e39de"
  },
  {
    "url": "Examples/index.html",
    "revision": "c3a1bdd4b136d59fcd08b2d01a8ed3b0"
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
    "revision": "e9afa417646636e6383bc61e2530bfc5"
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
