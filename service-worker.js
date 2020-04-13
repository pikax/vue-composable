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
    "revision": "815d8f727662c32e93f15a6bd7653a64"
  },
  {
    "url": "api/core.api.html",
    "revision": "5efbfb90e65049aa6b5689b66b81baa9"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "9ad83c2bf0d0f6218ef93929f173f8ab"
  },
  {
    "url": "api/web.api.html",
    "revision": "3b487ef82ffd46d930d53f63f256df79"
  },
  {
    "url": "assets/css/3.styles.ec4d1c03.css",
    "revision": "8a092adde866e7f24e2945880b817eda"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.431f1166.js",
    "revision": "9c8dd84798999cc9b06f1f6bcbef5b36"
  },
  {
    "url": "assets/js/1.6dea1c5c.js",
    "revision": "22062205a4db16f7cd8ba52607dd8d8f"
  },
  {
    "url": "assets/js/10.4dc30a33.js",
    "revision": "0e57634f1f3ef8e9f7eb4349a2561753"
  },
  {
    "url": "assets/js/11.fe7a7772.js",
    "revision": "993d082587ba7a71bb871a074c7b214e"
  },
  {
    "url": "assets/js/12.8c6b3f18.js",
    "revision": "983e73653f565a1ca0a7de6596a43292"
  },
  {
    "url": "assets/js/13.97edf4d6.js",
    "revision": "ac9cba129c68d8fcab8fefc0565233cc"
  },
  {
    "url": "assets/js/14.54e5f940.js",
    "revision": "2e5f14c17b7d6c1a7895beda60e70e3e"
  },
  {
    "url": "assets/js/15.6c6509ec.js",
    "revision": "2cb71a365aeadb462c2676284b92dc28"
  },
  {
    "url": "assets/js/16.f4a6b48d.js",
    "revision": "4669cc42cfbce5520c8e733693b91904"
  },
  {
    "url": "assets/js/17.51d95812.js",
    "revision": "26cb72de76501ec99b61a920d14ceab8"
  },
  {
    "url": "assets/js/18.83e1c66e.js",
    "revision": "8163839e1425cdae7a16becffb45120e"
  },
  {
    "url": "assets/js/19.39c55e31.js",
    "revision": "6077035137d3c79e4b896523f510717e"
  },
  {
    "url": "assets/js/2.9dbc69e7.js",
    "revision": "7077dab556107c36ca8b535e7233dde8"
  },
  {
    "url": "assets/js/20.eb9f7129.js",
    "revision": "5e10b53f2708e5c53e75927ab3743dd2"
  },
  {
    "url": "assets/js/21.11bc0d9a.js",
    "revision": "00dabb851d80153f48acbbe4a2ef2cc7"
  },
  {
    "url": "assets/js/22.15dd65b7.js",
    "revision": "47790e95ae604b337ac3064db5330b42"
  },
  {
    "url": "assets/js/23.9a770abc.js",
    "revision": "7d51ba915030ed278fde1452841e38d4"
  },
  {
    "url": "assets/js/24.1c91a5c4.js",
    "revision": "fb4e922e5f5ad1f9b626b9e4a2709b9a"
  },
  {
    "url": "assets/js/25.3da42e6a.js",
    "revision": "e98ad0cb726c710dd8ebcf87b3f10ee7"
  },
  {
    "url": "assets/js/26.cfa6ebf8.js",
    "revision": "dda6874e0980ae049a0465a402b7fb35"
  },
  {
    "url": "assets/js/27.83ec95c6.js",
    "revision": "bcc66c39fd365a3947442f464f097d75"
  },
  {
    "url": "assets/js/28.0e94512c.js",
    "revision": "40f69d64aa211aea82ff3c55c2045027"
  },
  {
    "url": "assets/js/29.75a00299.js",
    "revision": "754725b39bebf1baa01339d6ae426206"
  },
  {
    "url": "assets/js/30.70170a87.js",
    "revision": "cea4f74ad5d3cd68483f77af500e5e17"
  },
  {
    "url": "assets/js/31.fb030966.js",
    "revision": "4f417c4e5c001cbc35e17e2c01667a10"
  },
  {
    "url": "assets/js/32.471f5eef.js",
    "revision": "786cce4900af272f13adbbca54513d61"
  },
  {
    "url": "assets/js/33.88815e7c.js",
    "revision": "864574427abb0208d26ccac265ba7240"
  },
  {
    "url": "assets/js/34.e8859694.js",
    "revision": "c4e1cb9809d5eb97a8901fcd2f5137a7"
  },
  {
    "url": "assets/js/35.f096ee29.js",
    "revision": "7d074596ec03f981ba93326ea526f7ab"
  },
  {
    "url": "assets/js/36.c6319814.js",
    "revision": "1b4a1f3d5b753b4cb3f73ef4307ece73"
  },
  {
    "url": "assets/js/37.954fb5f7.js",
    "revision": "a2582de75750c38d5411c3e1932bbba5"
  },
  {
    "url": "assets/js/38.2fb164d8.js",
    "revision": "19018309b0ffd52dea1ceb2a36fbf92c"
  },
  {
    "url": "assets/js/39.e346ec36.js",
    "revision": "0dd474f1a8c3a59489e43946db3ce3a8"
  },
  {
    "url": "assets/js/40.6afacd16.js",
    "revision": "6dc07dd8ea38cba34e5d34f140f08db9"
  },
  {
    "url": "assets/js/41.9eb5feb4.js",
    "revision": "bdff22aaa6a5c8cf44bbce6913c95382"
  },
  {
    "url": "assets/js/42.d2d7c56f.js",
    "revision": "de5e1eed11599ee477a7cf6930cc5cf1"
  },
  {
    "url": "assets/js/43.0c0e8a5f.js",
    "revision": "bd788fc67fa01f12e9a3b9591a355488"
  },
  {
    "url": "assets/js/44.b64c3023.js",
    "revision": "027a4e636e25b7cb9f5416ae1fa07891"
  },
  {
    "url": "assets/js/45.af43130e.js",
    "revision": "e7c28065d78d04012ee14ff98b6dda32"
  },
  {
    "url": "assets/js/46.cebaafa1.js",
    "revision": "af9dfa69f5f397624f9c5977c4cc9671"
  },
  {
    "url": "assets/js/47.39700823.js",
    "revision": "dd5bd33cba8b4da6194a65c5e20eae3b"
  },
  {
    "url": "assets/js/48.f65220a2.js",
    "revision": "14895274256009ae9c63083259dc1de4"
  },
  {
    "url": "assets/js/49.aa8ad3cc.js",
    "revision": "19faedc66db6793cf2649785d99f76f6"
  },
  {
    "url": "assets/js/5.cda46c24.js",
    "revision": "94d0ea2de72c7d31c4524d7c1724ea8f"
  },
  {
    "url": "assets/js/50.29e7accf.js",
    "revision": "d45e5d87fd65fe99b92d708ae350e999"
  },
  {
    "url": "assets/js/51.e2ead732.js",
    "revision": "57531895b61bf78972e894c2bf80d361"
  },
  {
    "url": "assets/js/52.6b20001b.js",
    "revision": "ff67c1497132071fdaa70e26e7266e0b"
  },
  {
    "url": "assets/js/53.dc95b8b2.js",
    "revision": "59d3dca5f36bb719aa162e5869ccc08e"
  },
  {
    "url": "assets/js/54.0f8a91f8.js",
    "revision": "5724cda1a0478494070a57cb56e0a8bb"
  },
  {
    "url": "assets/js/55.e0452ae3.js",
    "revision": "0b80a845d9ac17d33a1cc49d009f008c"
  },
  {
    "url": "assets/js/56.62eba55f.js",
    "revision": "dffdc9ad931f6d14c45b18681ce36f2b"
  },
  {
    "url": "assets/js/57.bbc87919.js",
    "revision": "95e33815ebaee8ebaa5a4ea08f886778"
  },
  {
    "url": "assets/js/58.8dfbba31.js",
    "revision": "d0eda1534e7cc6a1b1673feb898f2eb7"
  },
  {
    "url": "assets/js/59.88daac9f.js",
    "revision": "ac8234420eaa515edd7c2e24fce536a5"
  },
  {
    "url": "assets/js/6.b55cb954.js",
    "revision": "68efc52117bb479e2c61e90442cce72e"
  },
  {
    "url": "assets/js/60.f6dc16d0.js",
    "revision": "bfea75926464c6f7d653387903f99d0f"
  },
  {
    "url": "assets/js/61.010022f6.js",
    "revision": "1d1c6cbe93b59ddf300edfaba06fd9d1"
  },
  {
    "url": "assets/js/62.fa005ab1.js",
    "revision": "b4de04422b116a84893f2c75b408b619"
  },
  {
    "url": "assets/js/63.f6ebec04.js",
    "revision": "ad11a9ca5e74f0c6960dd66b6bdbbf1f"
  },
  {
    "url": "assets/js/64.5b12b16d.js",
    "revision": "d3dc062781fbbad08a8c3cc188e071e5"
  },
  {
    "url": "assets/js/65.158bb2eb.js",
    "revision": "87f79ff7748ac9de2474f5b536cc350c"
  },
  {
    "url": "assets/js/66.29c25aa8.js",
    "revision": "f52eb2a018c592e79cd01e5663e1c413"
  },
  {
    "url": "assets/js/67.545c93d4.js",
    "revision": "7619a99bbe6862372fdfc9c1d7ac9cf8"
  },
  {
    "url": "assets/js/68.ae5825ed.js",
    "revision": "2f1cb0e94c8cc56ba2882cac206c509b"
  },
  {
    "url": "assets/js/69.ed211bd2.js",
    "revision": "bb952019a9e8ceb00b7d3204765b73f8"
  },
  {
    "url": "assets/js/7.6d9422a7.js",
    "revision": "ecd3f6828d35c551fc9675f10db95ea1"
  },
  {
    "url": "assets/js/70.ca340cd4.js",
    "revision": "22251d110bb1befbd5f18f7d619668c6"
  },
  {
    "url": "assets/js/71.d820db7e.js",
    "revision": "86f040d385d5a516e81ada5fa2d29fd1"
  },
  {
    "url": "assets/js/72.379e2d19.js",
    "revision": "bd4a5b9e891e2a16dbfb2cecc7faaea0"
  },
  {
    "url": "assets/js/73.343e555f.js",
    "revision": "5e54c66f8dd151cd9363418c1e84cf7c"
  },
  {
    "url": "assets/js/74.ae8b6da6.js",
    "revision": "f18ddb8ac000c6a3c6aa538014104ab1"
  },
  {
    "url": "assets/js/75.952000aa.js",
    "revision": "defc38872c8d335019c4d2c3a6b0af71"
  },
  {
    "url": "assets/js/76.4e3be7d5.js",
    "revision": "a9a7c244e8ef2534910b29823263a43d"
  },
  {
    "url": "assets/js/77.91dfe005.js",
    "revision": "e60c9a75450768d2410db3cc5b4f7e05"
  },
  {
    "url": "assets/js/78.a0c10b98.js",
    "revision": "fb376eee372bc69424c608697f181c07"
  },
  {
    "url": "assets/js/79.d0ec55a3.js",
    "revision": "ffd2f6a3e5d600c3acfcf7d1eeb2e31d"
  },
  {
    "url": "assets/js/8.d3755b19.js",
    "revision": "d6de88d3764c2c1b44c40c486fa17fc0"
  },
  {
    "url": "assets/js/80.39f5752a.js",
    "revision": "8e80fde59410452483763371f0f7dbeb"
  },
  {
    "url": "assets/js/81.d2399699.js",
    "revision": "570a9e5e8d9d815699b13384fd77d01a"
  },
  {
    "url": "assets/js/82.78d16570.js",
    "revision": "1c70425cdf720c8974fef4a2e0883831"
  },
  {
    "url": "assets/js/83.679f4283.js",
    "revision": "524b67a19838ab92121be702f632eff4"
  },
  {
    "url": "assets/js/84.98991f7e.js",
    "revision": "11a7c82c4b6baa3f43ff79b12abe81aa"
  },
  {
    "url": "assets/js/85.1cc9145c.js",
    "revision": "03784c2cebed87b71fc8be96eea3c6f1"
  },
  {
    "url": "assets/js/86.6e0a2264.js",
    "revision": "c2d1880887c14efa42ed7a2587c4d110"
  },
  {
    "url": "assets/js/87.667a185b.js",
    "revision": "faa900fe3204b082f38c3568b7fd8499"
  },
  {
    "url": "assets/js/88.4fe24788.js",
    "revision": "d7eba5ba4945d0a611d48a0608f90936"
  },
  {
    "url": "assets/js/89.04b6961e.js",
    "revision": "9b25cb894e42971c492dc999a42336e6"
  },
  {
    "url": "assets/js/9.e562e005.js",
    "revision": "d1a65aabe9c6910daedd413b5b6bac8f"
  },
  {
    "url": "assets/js/90.654cb2c9.js",
    "revision": "3a683c41f439a2266acf4f5470ced478"
  },
  {
    "url": "assets/js/91.d8c7c1ef.js",
    "revision": "a071e44929b2d835d021e880de3e266a"
  },
  {
    "url": "assets/js/92.db947e1e.js",
    "revision": "5518dd4dd8ff2c47e1892838f735a44b"
  },
  {
    "url": "assets/js/93.a76a1038.js",
    "revision": "f3e37468e2ccaf22b1e1b9397eea104b"
  },
  {
    "url": "assets/js/94.ff321b69.js",
    "revision": "1342e8dae02737d55ce924cd6b24e14c"
  },
  {
    "url": "assets/js/95.a72556f8.js",
    "revision": "6e3e15dc38567d339a238f49c70b4be3"
  },
  {
    "url": "assets/js/app.0cd3ce69.js",
    "revision": "0465799998045c4913f72b9b69dca85b"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "4bc60131835d4ae1e477df867765edc8"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "e7056b5ee6ee368860628a10f08643fd"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "b36066b85dcaaefc575cadb92043dda9"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "59d9296f05f764ee504d7c39517063e8"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "a66f71c39b1c506bdc7509a2e59d03c3"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "a3a37af87ba523dc343a2fffad06beed"
  },
  {
    "url": "composable/date/now.html",
    "revision": "a718f0fb265b26488a8a8f0671f4c4bb"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "53abf3385e0ccfd4b324e1ce50750050"
  },
  {
    "url": "composable/event/event.html",
    "revision": "bc6a6a16900cb00f8f2b74637afc2bcb"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "b67ec4870f616fd61320efe294c0f712"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ee7d85935bfc50025081c6aa2b5e7123"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "c54c2fc424aaf32be04ffd149c17c4b2"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "aa0e7bd5c5c6c80bed028b95963b897d"
  },
  {
    "url": "composable/format/format.html",
    "revision": "26f7bd2cfbff6b1d943f5ed6b518a86e"
  },
  {
    "url": "composable/format/path.html",
    "revision": "9909624438a1f4194b7fa89205c492cd"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "0cfd69d63d3d30a6e01adf1359513c35"
  },
  {
    "url": "composable/index.html",
    "revision": "601e3e3cb94c808e7a9884be33acf6bb"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "fb0e898ef7c2c5fef9230ad6cecea577"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "327b5818d94fda733114e158f2d75ed0"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "95e14a12a81efb20c43e3ed2e3fe154f"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "b1bcec80165128ae9e7ff47cedfbf1d4"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "77218a61bca538f8f5de5eb2d05a28bc"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "8fbdf33c1c7833525f0cae5a3eca8359"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "8c26d26184f102c5ccb7caecd70a99f5"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "135a335341011f2483f73654d0d6367d"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "bfbafdba07cd277639aff5b1b7fbea8a"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "8869cb1d7da0cf15f298ddc3f947a1c8"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "0802c1dab281a4d795f59cdfa1e4cee8"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "d48e24bc4c61482e0fc092b37cb27c08"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "e01d3f58d4a17a47c92388efb54ce05a"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "6a569b0e83a3ed94c48eb4f246fe6d7f"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "8c0b7ad34321bcafff4ec5870e5d2950"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "6c74035e0ec3e66518a003643ca69600"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "d4bb7e5c9d06cc9ce3d1e6e906bc6a41"
  },
  {
    "url": "composable/web/language.html",
    "revision": "0e3fca3dd6878c58cc8104a8917981ce"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "85363bd7ef5e08c9a3c82963576a085c"
  },
  {
    "url": "composable/web/online.html",
    "revision": "76a7d6cfe44f56a5d8fb4cf6bdb08341"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "4cf805f0770c99ba7b2e2ebc1316010e"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "2768b9569dde491e2eaef1b344ab78a1"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "43198b3427add606f4d952a734060d66"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "c369752c1a5fe96117a0d665902aa387"
  },
  {
    "url": "Examples/index.html",
    "revision": "10abb38e58610ebf8b7ae18e326a8841"
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
    "revision": "8b72f1104f72714d55f982336da6ff46"
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
