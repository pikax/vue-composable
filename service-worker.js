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
    "revision": "f83143eea76bce9f100bfa9d99d44755"
  },
  {
    "url": "api/core.api.html",
    "revision": "c5c571eb471da1af6992761a64dfe1ca"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "4c62eab0dde26c6b99b3385698c1aa2a"
  },
  {
    "url": "api/web.api.html",
    "revision": "73b583a500a95e8dd1b432c4e8da4841"
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
    "url": "assets/js/0.ad2be1af.js",
    "revision": "337cd34a6077392eab728a52c2bbcf75"
  },
  {
    "url": "assets/js/1.2c6b0897.js",
    "revision": "47388663673dcd5dae6be4856e7d8117"
  },
  {
    "url": "assets/js/10.9be44852.js",
    "revision": "8f0bf1934e7757a18d2f19d479d33654"
  },
  {
    "url": "assets/js/11.ee8fe565.js",
    "revision": "5b8c8f4b9ea8e615d35227ae065489b6"
  },
  {
    "url": "assets/js/12.e9d8d0c1.js",
    "revision": "c4cb537c321e56493f59702470fa6ad8"
  },
  {
    "url": "assets/js/13.b330f062.js",
    "revision": "3c4a234b5c2f70e18127e8e9dc622f17"
  },
  {
    "url": "assets/js/14.ca7ffce0.js",
    "revision": "ccf8ca71ec3f4279eda9436d27461778"
  },
  {
    "url": "assets/js/15.6d9c6f6a.js",
    "revision": "87a1d971a6edcc4a6b68d263d874fc5d"
  },
  {
    "url": "assets/js/16.fac49e4a.js",
    "revision": "1578e5c7e938c8981c146f594496e3a0"
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
    "url": "assets/js/20.a228c308.js",
    "revision": "0161188aa97f396abcf2163b51c04df2"
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
    "url": "assets/js/26.657fbd79.js",
    "revision": "9a80c19d9c4bcce8dc39b626d5de3066"
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
    "url": "assets/js/37.9abf148d.js",
    "revision": "29b401ee4eb27fa98f9d3602645c5d19"
  },
  {
    "url": "assets/js/38.63de58c7.js",
    "revision": "1e08fceaf843849097e53d6976aa4a36"
  },
  {
    "url": "assets/js/39.edf7387e.js",
    "revision": "572185036ae20c5b83f4fb24c2f036af"
  },
  {
    "url": "assets/js/4.56be170c.js",
    "revision": "34ebc076aebdb8950b78c4cb07725a93"
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
    "url": "assets/js/49.97586900.js",
    "revision": "c17213ec29142a27b114f5c0d72f326f"
  },
  {
    "url": "assets/js/5.e4698e8a.js",
    "revision": "c1a90cb4fc5d2a6bbaee34a9ea7bfe5f"
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
    "url": "assets/js/6.bc204b2d.js",
    "revision": "51886f26158a2f5333217f3882f40947"
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
    "url": "assets/js/65.71560fc1.js",
    "revision": "5a31f40fe118a33f7007a498f41722a7"
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
    "url": "assets/js/7.87296b9b.js",
    "revision": "13d6eeecec5f6c1d62d5e726d435e190"
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
    "url": "assets/js/8.7de85cbe.js",
    "revision": "303e0ab7e37f1ad7c3f7bd18667edac2"
  },
  {
    "url": "assets/js/80.9c103a30.js",
    "revision": "9af8f627d1d9ac1ad5e66fd3ab0da36f"
  },
  {
    "url": "assets/js/81.83854537.js",
    "revision": "1f289f2e0bdb7e5539d4f7944da0caeb"
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
    "url": "assets/js/9.bd71d7b9.js",
    "revision": "ff747261f2d5bfcd81a29b473b8eb414"
  },
  {
    "url": "assets/js/90.ac56d790.js",
    "revision": "4314a7b672d492e85eb3d936e8b3bcbf"
  },
  {
    "url": "assets/js/app.a61f34f4.js",
    "revision": "f5cbd19cb5363eb31e07f7fd11277d96"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "7ffc0324b9f08f63107d91cb2e383830"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "10d04493b28d46f9cf319aee875dccf1"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "cdd3c56eb2b9b81e293ddcd126ce1220"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "e49a65d14495517a538ae08d59aa9fa8"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "4fda91f32dd3588bad8daf13ed236002"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "c8bef745d2f404afc09b773c03c9019e"
  },
  {
    "url": "composable/date/now.html",
    "revision": "9981f30a8edfb93f331c83a987aae93a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "620010e4af81491f2acb22ad595ccc85"
  },
  {
    "url": "composable/event/event.html",
    "revision": "9cd19cda976a6ca8c34a02932425ede2"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "1d64b87108697cf8f534e5faa6fec715"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "99147b9fdd1e655936931ea2d25a89da"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "8601aea13d63191a5adbb8d89658fdd3"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "2f96866a7945468a15e658ab9c4927b0"
  },
  {
    "url": "composable/format/format.html",
    "revision": "cb04dc02c5b3558cdad594ce4430679c"
  },
  {
    "url": "composable/format/path.html",
    "revision": "9ca4f5b084f04019d31719a1f0fbf462"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "61b0ff96d51536b9877b48047d82af05"
  },
  {
    "url": "composable/index.html",
    "revision": "3382ea6a45463ffcf4caa46b1b429c78"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "df1c6fb257976fd3ebc99eacb6e19363"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "96b48545ecfa1ebe46aa498e212acbb3"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "aa5be6baa51548a82e9509cab82783f3"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "2af81edd81ea8781c70ea9e60ec32ea8"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "ee951b2478720a1bb6a49ec466c0486b"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b1701700902d9208d9f696a7600549c8"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "5f109c1e19c6e018303bbf9a43dcff71"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "6af1abafe2be6865dbc976db30507f1b"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "06dec0e64bbb15ec9d2f5b67e9cb62fc"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "5fde273a16fe9b6c01924198f4240a6c"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "cf588be16eb03d0178d3b19c5a26cadc"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "2b3239fcadd347561eb30a89d4ab6a79"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "e588b6d97e5e232b4ab957d2a3fd27dc"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "ad71c572c50918d2b00d9cba75086661"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "7fbf33a08605ce430f3ef8e105bb777f"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "74040834a9a6c8d04113fbdc86409c3e"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "bfb43d13ec0390c1b9ad406fd372e8b4"
  },
  {
    "url": "composable/web/language.html",
    "revision": "bfa7e8943e97c4e9a0ec52c602f5ed25"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "d22eadfcd5fa546d2ee547e9ceb168ed"
  },
  {
    "url": "composable/web/online.html",
    "revision": "4a575890c4d2406af9a25388442d923f"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "b42c90dad66655254a54c986078c386d"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "37b690c849cd0bfbf12d39d8ed3cf100"
  },
  {
    "url": "Examples/index.html",
    "revision": "3bcd4145c5cbe3e92943e695b40db944"
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
    "revision": "2fe4fcfd416dff1a60404f91516e6a49"
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
