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
    "revision": "251c73602798ee15dba9ce0470ab63b2"
  },
  {
    "url": "api/axios.api.html",
    "revision": "59496cc7c2497f30aa192004a9176d74"
  },
  {
    "url": "api/core.api.html",
    "revision": "c4219a19b7faf33d22aa4923af7f406d"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "d102e690b487461f4d99acc0c6dc3fb8"
  },
  {
    "url": "api/web.api.html",
    "revision": "301b49fc6ea8c95d6915be2bd8d62d37"
  },
  {
    "url": "assets/css/3.styles.fb3cb8a7.css",
    "revision": "ee68b3dc5dd304a2425d6de90dab0077"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a90c2e24.js",
    "revision": "a3e7d15c8c88ed4ba0db5a76af8b5256"
  },
  {
    "url": "assets/js/1.e5f52aee.js",
    "revision": "c8e8e9e16f1bac0ee07fe0c35dc5c41b"
  },
  {
    "url": "assets/js/10.2e4d9c59.js",
    "revision": "da301591525912b97a59b286c0612683"
  },
  {
    "url": "assets/js/11.e82a5feb.js",
    "revision": "1f45c05b8d28037fd2254e714c238eb1"
  },
  {
    "url": "assets/js/12.648e14ab.js",
    "revision": "7dce463e41a5b4b2a06200723fcb2b85"
  },
  {
    "url": "assets/js/13.cafb62db.js",
    "revision": "f85ef3b5477030242176d09880e55959"
  },
  {
    "url": "assets/js/14.45daa232.js",
    "revision": "38d16848e485bd3e135591fb42b3d59c"
  },
  {
    "url": "assets/js/15.3ff34d00.js",
    "revision": "ac90654c8e5f64ffe1bb6b9d2fa1e1b1"
  },
  {
    "url": "assets/js/16.e0fc83f5.js",
    "revision": "a5c13042edd9464362d0e509be03b9f0"
  },
  {
    "url": "assets/js/17.3365d0a5.js",
    "revision": "2ef731972b94d6d27f55fc99d092ee69"
  },
  {
    "url": "assets/js/18.6dd2dbd0.js",
    "revision": "a1f1ef30d9ab6c57c5ce807b41a7efe7"
  },
  {
    "url": "assets/js/19.fb1d1a8d.js",
    "revision": "1c91c51b83045ec19993ade7bc629103"
  },
  {
    "url": "assets/js/2.3272ce3d.js",
    "revision": "7b9ac250cfda3800f103f33be97eb4dd"
  },
  {
    "url": "assets/js/20.78e086b8.js",
    "revision": "431ca1673678a22b7efce5f3bea4c813"
  },
  {
    "url": "assets/js/21.9c09611b.js",
    "revision": "3f6c8f6b5f1b12236824f9a7ce4e05ea"
  },
  {
    "url": "assets/js/22.b88941c8.js",
    "revision": "b76cdab21199ea8b106361a5030b2e1e"
  },
  {
    "url": "assets/js/23.dae74321.js",
    "revision": "0973a2f87db71e6b45474767a94c4e22"
  },
  {
    "url": "assets/js/24.25a2b104.js",
    "revision": "e599b4aef72b38219dc0bbaecdd5ec68"
  },
  {
    "url": "assets/js/25.99883c91.js",
    "revision": "00920ded6dad0ee43bf89ae196962001"
  },
  {
    "url": "assets/js/26.4f7cdc10.js",
    "revision": "50b51065822ec697b5411cd029d66be5"
  },
  {
    "url": "assets/js/27.e79cdd06.js",
    "revision": "831ba57a87d80dc22371becfaf1c055c"
  },
  {
    "url": "assets/js/28.7a5ab312.js",
    "revision": "a8a8e00630ce28e9a1b5495fa26d28a1"
  },
  {
    "url": "assets/js/29.e10de9aa.js",
    "revision": "32dd7c58466554dbdf73d36d0c0352f3"
  },
  {
    "url": "assets/js/30.5292ba82.js",
    "revision": "182b5d7710eda7c4d525c82844dbf912"
  },
  {
    "url": "assets/js/31.201b5579.js",
    "revision": "67d14f870144556cb6f51286f49389f7"
  },
  {
    "url": "assets/js/32.38b1a390.js",
    "revision": "9f7e1365214f600f0d211e3f95a51c69"
  },
  {
    "url": "assets/js/33.d70d7c2e.js",
    "revision": "a6b93e059410b21ba59aaf2c56b07750"
  },
  {
    "url": "assets/js/34.5f95cd76.js",
    "revision": "27d25aa94668e1c0f1ae7f0abc96c557"
  },
  {
    "url": "assets/js/35.ec95ecdb.js",
    "revision": "eed5c40f01ef0896f8888717aa649c3e"
  },
  {
    "url": "assets/js/36.0117a34f.js",
    "revision": "3223822b35d73b631ec9f6dd40a057d3"
  },
  {
    "url": "assets/js/37.66fff7d1.js",
    "revision": "d2654fd0d75e8f2d39cff74e11303c77"
  },
  {
    "url": "assets/js/38.dcb7e829.js",
    "revision": "8ad8bfcaafd2c9f659cb3140fffaca1a"
  },
  {
    "url": "assets/js/39.da0e2b85.js",
    "revision": "8f3b9d5ecfbe3d48cafc4c8761e07120"
  },
  {
    "url": "assets/js/40.39c5b7a2.js",
    "revision": "4dc0643fcc2e7a216ec6ee946be223c5"
  },
  {
    "url": "assets/js/41.3d53efea.js",
    "revision": "b5fe25d7e44f4b549bcdf4240828c66d"
  },
  {
    "url": "assets/js/42.b19e4ab4.js",
    "revision": "d362ba53ccdb3060b7baeef655eba0b2"
  },
  {
    "url": "assets/js/43.a357c01f.js",
    "revision": "4d595e462462e41cfa1817fdbff09178"
  },
  {
    "url": "assets/js/44.e129b730.js",
    "revision": "e391aa6d32974f3a9943e2a594060a29"
  },
  {
    "url": "assets/js/45.1fe6d8e9.js",
    "revision": "f671cf8554076f52c4309375cbe6f80f"
  },
  {
    "url": "assets/js/46.c9a659ba.js",
    "revision": "9ee30755c0c0849921856a5575110a07"
  },
  {
    "url": "assets/js/47.073d11c9.js",
    "revision": "c44a75b4e1f6e6a6c486ce124d5abcbe"
  },
  {
    "url": "assets/js/48.c54f01e2.js",
    "revision": "ed57351ebefd90f1d2926d2b1b00ae26"
  },
  {
    "url": "assets/js/49.08b9afd9.js",
    "revision": "e65b3a3e3aa84a5c2315ae73786ed0b4"
  },
  {
    "url": "assets/js/5.62180b22.js",
    "revision": "1f637a1a3d9aa0c692a7f38b35167363"
  },
  {
    "url": "assets/js/50.4255777b.js",
    "revision": "35a108c9134b61972b1e032e3a0f44a3"
  },
  {
    "url": "assets/js/51.80fb8706.js",
    "revision": "b0bdc58d49019bc360876db509192cf5"
  },
  {
    "url": "assets/js/52.5188f408.js",
    "revision": "9e5357d84be3539f1847b579a6c8a635"
  },
  {
    "url": "assets/js/53.9da5b149.js",
    "revision": "9595944764db458346770f8ba65dd7bb"
  },
  {
    "url": "assets/js/54.273b106a.js",
    "revision": "709a5a943625d8d0d760c7f2de3c464a"
  },
  {
    "url": "assets/js/55.8b5053e7.js",
    "revision": "e06f61fdc631cdf3e57a1e02ae04a266"
  },
  {
    "url": "assets/js/56.2670a836.js",
    "revision": "f7465dce0d7a8b93a354b01f7fafcc50"
  },
  {
    "url": "assets/js/57.9dc36147.js",
    "revision": "39447883d984fd09ebfd0e13728980d8"
  },
  {
    "url": "assets/js/58.fc25f003.js",
    "revision": "33b441b1a0728f5d6ec2b648f82ff106"
  },
  {
    "url": "assets/js/59.5ffb9cad.js",
    "revision": "ec635677c4b851aebf0339d423f16247"
  },
  {
    "url": "assets/js/6.c98acf41.js",
    "revision": "4d20e450ece746f9efe2bce8d5d8c62f"
  },
  {
    "url": "assets/js/60.31ede795.js",
    "revision": "9238a97a281902870e3d8bbeed98cf7d"
  },
  {
    "url": "assets/js/61.6137b9d7.js",
    "revision": "be534540a5a5ba8413e1334d8e5898aa"
  },
  {
    "url": "assets/js/62.e9fbde5b.js",
    "revision": "37ddeefab0464507366891c0d586c94a"
  },
  {
    "url": "assets/js/63.c200fcb0.js",
    "revision": "cd1274857ddad55188ad7516b84ff9f9"
  },
  {
    "url": "assets/js/64.eb0e3b25.js",
    "revision": "7ef3252d1f69bff2ed17823adcdbadd0"
  },
  {
    "url": "assets/js/65.1e629201.js",
    "revision": "1eb84707b318e4769b4f9062e831fd19"
  },
  {
    "url": "assets/js/66.fd482da9.js",
    "revision": "3302ee6244897d2eaaaf71e8563ed3e4"
  },
  {
    "url": "assets/js/67.912475a2.js",
    "revision": "742c39e7127263fd225ff8a966a84945"
  },
  {
    "url": "assets/js/68.e0230d7e.js",
    "revision": "1aae6111f8961b0fc15a1aea1bbee7ce"
  },
  {
    "url": "assets/js/69.94da32d9.js",
    "revision": "0077f256ed6006dcc89a538b4468b81a"
  },
  {
    "url": "assets/js/7.51af9203.js",
    "revision": "9f091b1b787a49c2a5e9996c7d74b674"
  },
  {
    "url": "assets/js/70.1261e407.js",
    "revision": "a3833c5e9db52d3920556d34dabfe14e"
  },
  {
    "url": "assets/js/71.bff585db.js",
    "revision": "776195f6437178085c404d589ee20a80"
  },
  {
    "url": "assets/js/72.aebc3e16.js",
    "revision": "a0321e6b3824890192f6640220fad1a9"
  },
  {
    "url": "assets/js/73.b52db512.js",
    "revision": "9ec8b8d9cc9a27efeb6f14340a804789"
  },
  {
    "url": "assets/js/74.24e3dde1.js",
    "revision": "86c59f8d68a17f276956b5335c2fa753"
  },
  {
    "url": "assets/js/75.2b4b6c9c.js",
    "revision": "73e2ea9fecffaffa5fd283b64b5e6c02"
  },
  {
    "url": "assets/js/76.b14bfca3.js",
    "revision": "c9affd6cf571bd7fd0bf8945cac89b91"
  },
  {
    "url": "assets/js/77.e9314626.js",
    "revision": "77cbb007180e384076206527029dedc7"
  },
  {
    "url": "assets/js/78.566bb924.js",
    "revision": "ec3b94510b3258eb00d91183713feff6"
  },
  {
    "url": "assets/js/79.b641f76f.js",
    "revision": "6c2f227ff2839f685f7319f4955981fa"
  },
  {
    "url": "assets/js/8.740e4051.js",
    "revision": "36ff376a79af18a3d3996a366fa0f74b"
  },
  {
    "url": "assets/js/80.ee63756b.js",
    "revision": "af40e924727b9c54f9f1438836c57461"
  },
  {
    "url": "assets/js/81.5ec3fa69.js",
    "revision": "3f3037a9645313a4119ab826cad908ef"
  },
  {
    "url": "assets/js/82.70d68ff1.js",
    "revision": "1f90d8c45fee010452c23c6976a21b15"
  },
  {
    "url": "assets/js/83.f862d22a.js",
    "revision": "518e57520f833bd45dfc291a3d6f01a8"
  },
  {
    "url": "assets/js/84.cba9d3fb.js",
    "revision": "2a7feba56fcb56db65e5b5cb99b2f5e3"
  },
  {
    "url": "assets/js/85.baf99f53.js",
    "revision": "c39be13be5a78d0ab875ded61198059a"
  },
  {
    "url": "assets/js/86.55ee411d.js",
    "revision": "7df41e5b07f309168b378b68375b2d4f"
  },
  {
    "url": "assets/js/87.0cf4837d.js",
    "revision": "8a1b613e5530a919cd3e09f53333fe63"
  },
  {
    "url": "assets/js/88.0edb7ecb.js",
    "revision": "2b03b552aee2a17b83461733cc8e594c"
  },
  {
    "url": "assets/js/89.f1345eb0.js",
    "revision": "17f31af3f205f828318c753dcc2e725c"
  },
  {
    "url": "assets/js/9.ae922fba.js",
    "revision": "b7de2f418b2161ede3e068e66c51cb29"
  },
  {
    "url": "assets/js/90.c4d0d093.js",
    "revision": "edf60d3b17b9f315e92cdb3b6b8c7a5a"
  },
  {
    "url": "assets/js/91.9b357c80.js",
    "revision": "c463e5e4ad7b3d37abb5504075e9f27b"
  },
  {
    "url": "assets/js/92.daf2e6fc.js",
    "revision": "36db114cc80186cb0a2a313e67899a9f"
  },
  {
    "url": "assets/js/93.6f5b8423.js",
    "revision": "f652efa8c83470cea66aaa55799f1832"
  },
  {
    "url": "assets/js/94.c13291de.js",
    "revision": "1040b6e039f2916a3d4571e1f753fc5c"
  },
  {
    "url": "assets/js/95.3524f95b.js",
    "revision": "b7f26ec6f012c0658859d24b24ede35e"
  },
  {
    "url": "assets/js/96.882b44ba.js",
    "revision": "563a00aad87d5781306368d5b90f5947"
  },
  {
    "url": "assets/js/97.da0aa771.js",
    "revision": "5e39c87c279ccdf74f26f4d74959fe9b"
  },
  {
    "url": "assets/js/98.cf1ede10.js",
    "revision": "f0a14c9bb875224b934a2bc4b4764a98"
  },
  {
    "url": "assets/js/99.318ea724.js",
    "revision": "685d0e2f67311ff58055f862769962aa"
  },
  {
    "url": "assets/js/app.29260da4.js",
    "revision": "59b3762119056cb6b97373069d788105"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "aa48cb5741e3b5e3a459b522feb7459b"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "f24419381e996c0c88518bef6d1a0f51"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "27f1dd64769a2e02dc0b8b87f1986520"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "42c329def2954a393759ba2abc899353"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "18eee89cfab8b88f02ae0820fd433362"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "23f5da92d64d90f97ba228d042709601"
  },
  {
    "url": "composable/date/now.html",
    "revision": "e9b931ccb1b93d54ba0d9146a9f09b05"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "b933b24f464aa32629946db020409833"
  },
  {
    "url": "composable/event/event.html",
    "revision": "a5083be5024f4e722dad8f7d5235a792"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "d61fb6e889d5cc7d613156912b0c19f8"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "98470a4d45dbc437c2b3a82dda194c4e"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "d6e2c18797b31ef42a5cded8ae67556c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "187c6e7666963dcb23b4ae430e6c5019"
  },
  {
    "url": "composable/format/format.html",
    "revision": "870b9ad7a48ecc6217041aed10d22e32"
  },
  {
    "url": "composable/format/path.html",
    "revision": "06e5eee96125e5431fb777d66505c770"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "5ca78dec8759fae4d0710cc990069cad"
  },
  {
    "url": "composable/index.html",
    "revision": "1cbd57629a4edc5b54d66f3b509244cf"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "42e94592d7e1f22fa5bc0bc63b0a12bf"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "a96eb4cc45ae5de34b8698e88a48ca25"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "3b7b50f37dbeba2f0730ff9dade89e69"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "6988919d2d6489d9801ddf07ad275726"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "720703fa91786f50ea0634bf6d82a82c"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "43ba5a806e19a5e99cecfa0079d8de05"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "c80437e9adbfba5fa3e13768fb6807fb"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "e54f52036cd782daf2e6595c06c19d8d"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "3e9fa047189ae578789a0c7836d45910"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "32c4de209c6480cbccc3cb2cd0268421"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "f6a02fdce1b039a390f502c08c1aa441"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "a02ccc83a655b57140c1e78a7150585b"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "4e0f80b2bb475f53ad6f46687d5d0d40"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "eceaa5790394e10d5cfbe5c4eceebb4a"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "6a9eba84f2e6fc62d7053964060457c7"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "3fc310604b590298b3a2abdf781ca80d"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2e72c3b64fc4449671885e41dbf915a0"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "eb653031e394563f48b45061888ba335"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "4862ddc4a21e426865ea907c46b8d71f"
  },
  {
    "url": "composable/web/language.html",
    "revision": "a3f0713cc8f6408a189026b45d4f32f4"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "09ee5be7e83211163ea2f3dfce5f31cd"
  },
  {
    "url": "composable/web/online.html",
    "revision": "d07313f1a36d22899ef79c28619b2b4d"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "787fc1df96030bae14f48dea353fa9e0"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "394a556fadc58ccde44e6aa98270d20f"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "5a2810516b7c221db472cc1bc7f008b1"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "90240d16ca8c9070ed4227e9e0816ec6"
  },
  {
    "url": "Examples/index.html",
    "revision": "01400fbe3c9567e91a317d8eb9af88d8"
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
    "revision": "9e8e34c339673a752c255a63127aaa4f"
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
