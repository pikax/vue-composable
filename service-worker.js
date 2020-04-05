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
    "revision": "9122821960147cdb5911ccd71ae37cf7"
  },
  {
    "url": "api/core.api.html",
    "revision": "54cbf4f24e798290217a81bde914458e"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "44b6e7d1d288479752854d0f8a8ce0e5"
  },
  {
    "url": "api/web.api.html",
    "revision": "3a78e6ec49b448a2e7cbfb767603bc43"
  },
  {
    "url": "assets/css/2.styles.dce03dc8.css",
    "revision": "e4c0716c64420de1f2821532a714074b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.65db320b.js",
    "revision": "a1c95620df45e6f6abc39826b994b572"
  },
  {
    "url": "assets/js/1.8e7dbc2d.js",
    "revision": "11856b72845f60a622fe5d870fe5686c"
  },
  {
    "url": "assets/js/10.10e3da0d.js",
    "revision": "cb38f980c893b9275608942a9845c0e9"
  },
  {
    "url": "assets/js/11.16a1088d.js",
    "revision": "7a0bb9cb1b5155b2b70631ca3463b257"
  },
  {
    "url": "assets/js/12.8cff6ac5.js",
    "revision": "9f8a92fd77059bb549e2557942ceee69"
  },
  {
    "url": "assets/js/13.6597367e.js",
    "revision": "2d88c58cb362f706e38cd68e98310b1b"
  },
  {
    "url": "assets/js/14.cb02b0e3.js",
    "revision": "8a5ed35ab3385783845967f020f6c858"
  },
  {
    "url": "assets/js/15.5a110073.js",
    "revision": "d7f25bcb1b7655b38dcf87a15bf7fa6d"
  },
  {
    "url": "assets/js/16.512306df.js",
    "revision": "e78d3ca239e7c04061cfd06c73ff97e0"
  },
  {
    "url": "assets/js/17.d95d5bf6.js",
    "revision": "27fa909570bff8f4b37a3b0cac38d8a1"
  },
  {
    "url": "assets/js/18.5696f0c9.js",
    "revision": "6e5319a97e67e48ceaf92016f4d4b8a6"
  },
  {
    "url": "assets/js/19.0273cab9.js",
    "revision": "f08d67840998a23d49fc98f108a6a73b"
  },
  {
    "url": "assets/js/20.f8c45467.js",
    "revision": "795a4ad0ecb52f4d13dc4de17465a14c"
  },
  {
    "url": "assets/js/21.e5089062.js",
    "revision": "14be3a0d50b7d1f3695f465b7db6febe"
  },
  {
    "url": "assets/js/22.b8befd5e.js",
    "revision": "599c7ba76228cebccfb541ddda1a913a"
  },
  {
    "url": "assets/js/23.4fd0dbab.js",
    "revision": "72fa231b8d42341a47591862c7163fef"
  },
  {
    "url": "assets/js/24.483a38be.js",
    "revision": "7515c2dd3ab78d2a42c959a53d55f442"
  },
  {
    "url": "assets/js/25.bf2f2f50.js",
    "revision": "0a2baa53544368af1aca17b3ac7a7a61"
  },
  {
    "url": "assets/js/26.f03820d8.js",
    "revision": "8910dfc29f4077ae5d216a8d678a6162"
  },
  {
    "url": "assets/js/27.4c51125a.js",
    "revision": "04700beb6195c77cc637f5a53c7f7929"
  },
  {
    "url": "assets/js/28.3259aee2.js",
    "revision": "154324607ab761e205e14b45b9d0f3a3"
  },
  {
    "url": "assets/js/29.bd581ba6.js",
    "revision": "46605ea5bda43d27db57dd1789f7359e"
  },
  {
    "url": "assets/js/30.755a8c22.js",
    "revision": "8cab0c691f6ec37481f916533e232477"
  },
  {
    "url": "assets/js/31.a90155ac.js",
    "revision": "3ec771058808ca7e5973434dbc726074"
  },
  {
    "url": "assets/js/32.415617af.js",
    "revision": "d26c4eccb2da8f15de5e69b0f81fab56"
  },
  {
    "url": "assets/js/33.7cd8a886.js",
    "revision": "b18a34bb3012ee86db1ade5aaa16748a"
  },
  {
    "url": "assets/js/34.5c08350d.js",
    "revision": "942ab41a06a9d615919f5d21b349d426"
  },
  {
    "url": "assets/js/35.24a4ef7e.js",
    "revision": "ad4d992e0e91154b893fcb3949628b80"
  },
  {
    "url": "assets/js/36.aa62c99a.js",
    "revision": "1eadd9baeb25acda95331da026b1a234"
  },
  {
    "url": "assets/js/37.be3ad307.js",
    "revision": "234fa342c1e91a2f7e7129089cba3db4"
  },
  {
    "url": "assets/js/38.63de58c7.js",
    "revision": "1e08fceaf843849097e53d6976aa4a36"
  },
  {
    "url": "assets/js/39.f319d0b1.js",
    "revision": "47cb7fc12aa4c37cf936a4f742529db6"
  },
  {
    "url": "assets/js/4.d41ad508.js",
    "revision": "61097953f28c8fd357012e7995e67df6"
  },
  {
    "url": "assets/js/40.01dd50a0.js",
    "revision": "fbd7b8d797ffd472f4b8e0591c37c76c"
  },
  {
    "url": "assets/js/41.8fa90a48.js",
    "revision": "400beec6ecff9e2ae9a50ee6937162b2"
  },
  {
    "url": "assets/js/42.9d125464.js",
    "revision": "cc97498fb0a10917d6032f600e438fb2"
  },
  {
    "url": "assets/js/43.06627b11.js",
    "revision": "b3b436ffa604c62b89322c37ffec97b6"
  },
  {
    "url": "assets/js/44.23a080f8.js",
    "revision": "4a1570a5dd846922ebe2b8e8be8cd8f0"
  },
  {
    "url": "assets/js/45.3224d11a.js",
    "revision": "22e9918c01837e1f251f328e1e29c94c"
  },
  {
    "url": "assets/js/46.d2bb587d.js",
    "revision": "482920bd83df10f0b60038f92dcad171"
  },
  {
    "url": "assets/js/47.27eaa65a.js",
    "revision": "305baa82e6dd123450bd916662297490"
  },
  {
    "url": "assets/js/48.59cfb36b.js",
    "revision": "aa9defeb26e6b86327679b31d8155e15"
  },
  {
    "url": "assets/js/49.c9866eb0.js",
    "revision": "a7c0d02844c136eaf2628543c59bc7bd"
  },
  {
    "url": "assets/js/5.49ad6e23.js",
    "revision": "3bfe3a249c1f37be4ed69adb2bedbe96"
  },
  {
    "url": "assets/js/50.c43af26a.js",
    "revision": "74ff5267a20c87df364e52b95ff94984"
  },
  {
    "url": "assets/js/51.01b01e0e.js",
    "revision": "0c0a08321d51f6959d4e9608a866fc4f"
  },
  {
    "url": "assets/js/52.a385df5c.js",
    "revision": "bb9bfb8b5bfed7f60a222f70d5da4d34"
  },
  {
    "url": "assets/js/53.42629cca.js",
    "revision": "2fc289bd850c867bb66172d730f90352"
  },
  {
    "url": "assets/js/54.b0ca3cb1.js",
    "revision": "b64a8ff23480c88088a59e4ac0877520"
  },
  {
    "url": "assets/js/55.271683c6.js",
    "revision": "e8b452590fea78e67dce920390190dde"
  },
  {
    "url": "assets/js/56.052f62d7.js",
    "revision": "5a4049937f3ab8e84b0bfc90b3de23c9"
  },
  {
    "url": "assets/js/57.e9e85313.js",
    "revision": "0d12df5651ec86fe2442493f902f93f7"
  },
  {
    "url": "assets/js/58.a19dca8e.js",
    "revision": "aeef5bdef5b44213a98cfbe5da074631"
  },
  {
    "url": "assets/js/59.3797a9ee.js",
    "revision": "6dcb468f867a15196e8ce6a2c593cc24"
  },
  {
    "url": "assets/js/6.ba04ba8f.js",
    "revision": "7b95d0b349289f2e956c2d4101f83f8a"
  },
  {
    "url": "assets/js/60.731e48de.js",
    "revision": "c31724a9ee324f327e20e7970f03d6a6"
  },
  {
    "url": "assets/js/61.72457926.js",
    "revision": "fc321c545e4e400f8bba8e7ab65fbf79"
  },
  {
    "url": "assets/js/62.fe1bbd0c.js",
    "revision": "e52400701f1ee5b979c5373ae972e24b"
  },
  {
    "url": "assets/js/63.aa86718b.js",
    "revision": "3db0ed846febe313d9252cb34628c28d"
  },
  {
    "url": "assets/js/64.17411afe.js",
    "revision": "d857cd33de559c632278eedc899bca71"
  },
  {
    "url": "assets/js/65.acb21c20.js",
    "revision": "46a49f80c164803632016ec60497ffb4"
  },
  {
    "url": "assets/js/66.64fa9668.js",
    "revision": "ef3f4530357674ba30a01cc39a078ceb"
  },
  {
    "url": "assets/js/67.18b8c2a3.js",
    "revision": "95b1164f94d446b06957dc2711fd535c"
  },
  {
    "url": "assets/js/68.a1657468.js",
    "revision": "68182cb71cedc94fdd55a03e808018bd"
  },
  {
    "url": "assets/js/69.0b3e142d.js",
    "revision": "370b5e1e1ce7b1f11a34d8eb52bcf241"
  },
  {
    "url": "assets/js/7.104259e6.js",
    "revision": "67d96e4c7d6804b76f83713c38ee095b"
  },
  {
    "url": "assets/js/70.f86574bb.js",
    "revision": "d1b9d13bfcb4a40be22c73d515cdcb5f"
  },
  {
    "url": "assets/js/71.9d81fa5e.js",
    "revision": "b1dd38ef45c1b604bfa649b15e439c15"
  },
  {
    "url": "assets/js/72.ee170bba.js",
    "revision": "4e5ea1ad7974b919b406bf60d2b6195d"
  },
  {
    "url": "assets/js/73.98d84be1.js",
    "revision": "a32eee25902e87782dddfcd747b599af"
  },
  {
    "url": "assets/js/74.241246fa.js",
    "revision": "4b2812c86b615127b794d6fdac99d31a"
  },
  {
    "url": "assets/js/75.7a25c91f.js",
    "revision": "43961043b1842a51269f3767b05be405"
  },
  {
    "url": "assets/js/76.67e0cf5c.js",
    "revision": "26717f162c2cfb0eb1a511c239cb752d"
  },
  {
    "url": "assets/js/77.15174a69.js",
    "revision": "10d1ee5267767469d7c1077735737ecd"
  },
  {
    "url": "assets/js/78.6a408cbd.js",
    "revision": "cb473ba31fac1a4cabb59c6163507735"
  },
  {
    "url": "assets/js/79.5f914ece.js",
    "revision": "3f7c3345116fe44df18050f3487dd830"
  },
  {
    "url": "assets/js/8.c19c475d.js",
    "revision": "48d63314c1f13b5e5324407b05ea3ef3"
  },
  {
    "url": "assets/js/80.9c103a30.js",
    "revision": "9af8f627d1d9ac1ad5e66fd3ab0da36f"
  },
  {
    "url": "assets/js/81.2e82901f.js",
    "revision": "63a4f677f3a4a779b72878820762ff30"
  },
  {
    "url": "assets/js/82.1d2cf7bb.js",
    "revision": "cbffd91ee8f33101b20246de096e030b"
  },
  {
    "url": "assets/js/83.31725934.js",
    "revision": "53f42384d0499e7b52dfb1c87e038dc3"
  },
  {
    "url": "assets/js/84.bc06032e.js",
    "revision": "9208f567131d4250c13d117f65f4ee5d"
  },
  {
    "url": "assets/js/85.6fb684c5.js",
    "revision": "028ade86e76e7b918d668a2cde95e26e"
  },
  {
    "url": "assets/js/86.f0b5409e.js",
    "revision": "3afd9310ca0fc2fc225dfc4de9b70263"
  },
  {
    "url": "assets/js/87.58c748ca.js",
    "revision": "2cc119e6727ecda985135f8736998b57"
  },
  {
    "url": "assets/js/88.10cf9b7f.js",
    "revision": "cf8a0ac25c86beb0a45be0f73f766f27"
  },
  {
    "url": "assets/js/89.89693f00.js",
    "revision": "61d55bed5791f4f7003747c032622d1a"
  },
  {
    "url": "assets/js/9.d565b564.js",
    "revision": "27390c54c991418ef91b88d560dd2b13"
  },
  {
    "url": "assets/js/90.ac56d790.js",
    "revision": "4314a7b672d492e85eb3d936e8b3bcbf"
  },
  {
    "url": "assets/js/app.c22cac06.js",
    "revision": "13b55bd9600861b0f40aa5a048473885"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "092bfc2130ea977c7136b849fb34d376"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "fb5a7b5a42d81ff9904611e9495e5d0c"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "2964a30c69ef95435bd4fcb70df60e81"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "8be41026b064b979ff7240218aaff288"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "1587c2d4caabe7de81e88524f83f6fe7"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "252bd5dfb9bd9db155eff84948814cca"
  },
  {
    "url": "composable/date/now.html",
    "revision": "a33d987bf6aa4c6c42818898f0e386d7"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "5de176e14cd8970e10bc66f1ec74f070"
  },
  {
    "url": "composable/event/event.html",
    "revision": "3a761aaf71a88bf9f1cb2c30b98c39d0"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "7273f349b50051989ac6c12cf4a91847"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "cb60c9b5d1aa3c455970de68b8dbf706"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "f4e5d27b13c01869fc6108945be60451"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "5c484fb80e29c6d9ec97b1b91fbf6353"
  },
  {
    "url": "composable/format/format.html",
    "revision": "63e9c502682047bf373165961af33628"
  },
  {
    "url": "composable/format/path.html",
    "revision": "95a32ad656a14b87288d6ef5217dfb2a"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "08a72c2b90b5e3531f2f76067c619f2e"
  },
  {
    "url": "composable/index.html",
    "revision": "21176f35f1079b07a76baf69e90cf3bf"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "0982100a9209faa5ad58dec16eff55c3"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "8fef9e5757cf64fa363b1e1778a0a149"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "3b3b1d0b201bb9ca73fd103116e85c6b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "f7b830020b97498750aa7e9b4a5c452f"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "a3f70176f5d2c52a5f848a34a3b2189d"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "47de447d2f332bdb9bd918cc8abc0221"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "3895d35288ce894a5dcd169cce68fc6a"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "4e221f607c392924fa19a565de918b65"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "48671e0ddc084e33e5ee5cbaab3ca08a"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "a99e44c658f347eb477d441bcca95e66"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "4692be71a8527f8f2db6e86d12aa1378"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "2655278d31103a58c9f9fa15d1585396"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "1b64f0d4420ea5869798a7d046584206"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "6e6b21892a3c4ca45acfca1278f320fe"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "7acb5b195b68b1c07458fa5699f2f1b6"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "25f10234719c537d7b84da4f23c6ebd0"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "bd614beba11c723b33be1b2157b7634c"
  },
  {
    "url": "composable/web/language.html",
    "revision": "46696685f74dbfaea90e4089ec2770c9"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "2be618a22805b94a81ea33b50db5732f"
  },
  {
    "url": "composable/web/online.html",
    "revision": "8baae1b448422bb0018406c7ab884eb1"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "77ce1baf3ad62fce396bbdc797a8dfa1"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "c5fc62ca7e0a5c11f979ef6a84ae8887"
  },
  {
    "url": "Examples/index.html",
    "revision": "573db70c8eb2314f8789b8c9ae2558ba"
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
    "revision": "81cc852b42a7c5e19490f114ea55b00a"
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
