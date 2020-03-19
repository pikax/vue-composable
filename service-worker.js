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
    "revision": "282bc964bd2ca7baf0df2aefb75784ab"
  },
  {
    "url": "api/core.api.html",
    "revision": "f353ec9ad5d68ec6933c204623fa8b72"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "694cf48e7f5b0e70fbadef148cb23db6"
  },
  {
    "url": "api/web.api.html",
    "revision": "0c4bcb0d64252c141d3f20bc3996155e"
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
    "url": "assets/js/0.ec2783ee.js",
    "revision": "13e04cae43183ea68a1b51c1508ade4c"
  },
  {
    "url": "assets/js/1.0f5c897d.js",
    "revision": "e22805705809f5b330d18e4c7316cf4b"
  },
  {
    "url": "assets/js/10.27c4105b.js",
    "revision": "82e1f03c60a5a4c64c7e14dfae20d291"
  },
  {
    "url": "assets/js/11.75d5cf2e.js",
    "revision": "e03ff15a1cd85750dff7bfb02c9e3925"
  },
  {
    "url": "assets/js/12.4d90c6b0.js",
    "revision": "9803792309b7b1905ca4eda5f358e8e6"
  },
  {
    "url": "assets/js/13.82eb5799.js",
    "revision": "b300ecaa77e7c34c384ea61416558d7f"
  },
  {
    "url": "assets/js/14.2de7aaf3.js",
    "revision": "2f450a2f5a3b39689d6f6286848a0b3f"
  },
  {
    "url": "assets/js/15.125af693.js",
    "revision": "47a3de691ce080dfa8544c4cf258b6e4"
  },
  {
    "url": "assets/js/16.bbecca59.js",
    "revision": "7afc948be7362c44b0b2e6a4ef043481"
  },
  {
    "url": "assets/js/17.d81a0f93.js",
    "revision": "4bfbe05b2cda4d4ce337377fe2a58280"
  },
  {
    "url": "assets/js/18.a2fced28.js",
    "revision": "69ee6c9c6261216f256cb82213113f6b"
  },
  {
    "url": "assets/js/19.a109514d.js",
    "revision": "ab8c69828168deb9976aba7da7096fea"
  },
  {
    "url": "assets/js/20.271877b7.js",
    "revision": "eab9806da47ed51d49eda109173d58b4"
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
    "url": "assets/js/32.9e92575a.js",
    "revision": "228272ee388bca7572b2355318053153"
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
    "url": "assets/js/37.d22de2f3.js",
    "revision": "d4a35b33bd856b48594e17fcfc98db13"
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
    "url": "assets/js/4.a0c5dff0.js",
    "revision": "d1c185336e36bcb7ff02ef3aef48d0c0"
  },
  {
    "url": "assets/js/40.ab427f3b.js",
    "revision": "7bad600ddf32770ca736b6346db44753"
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
    "url": "assets/js/45.4c0ed5b9.js",
    "revision": "962f492dc1cfe069e25719cf0c745eb5"
  },
  {
    "url": "assets/js/46.d2bb587d.js",
    "revision": "482920bd83df10f0b60038f92dcad171"
  },
  {
    "url": "assets/js/47.5f415e1a.js",
    "revision": "4ad40ae4b14587efd174692a95f63eb0"
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
    "url": "assets/js/5.f401d8e6.js",
    "revision": "3112466ef2993e7801251b5047bb2989"
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
    "url": "assets/js/6.276b1461.js",
    "revision": "a5d061a4379eaa2f473dbcb943c6e3d0"
  },
  {
    "url": "assets/js/60.eb6188c3.js",
    "revision": "bc3258b8913cbded27b61be8804bb778"
  },
  {
    "url": "assets/js/61.75468c21.js",
    "revision": "b7e4e60d7487bceded4d91e3c4e16439"
  },
  {
    "url": "assets/js/62.7dd2aec1.js",
    "revision": "e69baa143464762d9ef227d1be5284f5"
  },
  {
    "url": "assets/js/63.2396007d.js",
    "revision": "4b0c2321fac96be98305882350d869dd"
  },
  {
    "url": "assets/js/64.aac1b739.js",
    "revision": "313e0bb9c3273dec266a77de3ba58c57"
  },
  {
    "url": "assets/js/65.99192d56.js",
    "revision": "5a006a34f93b717cbb20b3cacadc9b0a"
  },
  {
    "url": "assets/js/66.19f4f7d2.js",
    "revision": "0c35ebc276f0e24fda3b219d0474e22f"
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
    "url": "assets/js/7.69da8b46.js",
    "revision": "8db44b8fe2b33c15b4d0a9a98bb1a86c"
  },
  {
    "url": "assets/js/70.f86574bb.js",
    "revision": "d1b9d13bfcb4a40be22c73d515cdcb5f"
  },
  {
    "url": "assets/js/71.72accce7.js",
    "revision": "f6dc7e3620b4a12bfb09ca817a91bea0"
  },
  {
    "url": "assets/js/72.448795e8.js",
    "revision": "bfa21d4705ee53b98b4ed96383774111"
  },
  {
    "url": "assets/js/73.ab034622.js",
    "revision": "04af959e16aacee3b2962fbee7580eaf"
  },
  {
    "url": "assets/js/74.0b832462.js",
    "revision": "8a2e99689d91c7938077ce8ddba7a230"
  },
  {
    "url": "assets/js/75.5adda4c1.js",
    "revision": "ac0e6867b487a10d4a184ee564b4473c"
  },
  {
    "url": "assets/js/76.f18e5903.js",
    "revision": "92f67757cf7b2ae8f0ee816dab5b963e"
  },
  {
    "url": "assets/js/77.960e98a9.js",
    "revision": "5d2ab88d8adc06fe08492d3ff7082769"
  },
  {
    "url": "assets/js/78.8d1ccdd0.js",
    "revision": "003eb4f76ee3b3a9755e3b97a4f89684"
  },
  {
    "url": "assets/js/79.44fa918f.js",
    "revision": "961579e7fff2ccd3ec9ae218f59e18bb"
  },
  {
    "url": "assets/js/8.017e3b11.js",
    "revision": "f7d388e1b7da5c67e959c3a1fc85d7ca"
  },
  {
    "url": "assets/js/80.7c2b504c.js",
    "revision": "96ac5406df88d35ac44a7c319b1892b3"
  },
  {
    "url": "assets/js/81.3bee7a9d.js",
    "revision": "dcaca976e05c977e0b8ffff64e313085"
  },
  {
    "url": "assets/js/82.7578e1f3.js",
    "revision": "05b98eb1492a1e997ad813144c495d36"
  },
  {
    "url": "assets/js/83.ec9fb44b.js",
    "revision": "bbf18ff2d71fb3c2aedad66d098a1947"
  },
  {
    "url": "assets/js/84.57214361.js",
    "revision": "2251d9d0b0b388442ab07acf287b629d"
  },
  {
    "url": "assets/js/85.3b82fc51.js",
    "revision": "3c8c9850410c4a4c08245a4fee36b445"
  },
  {
    "url": "assets/js/86.e5e88fae.js",
    "revision": "04fa4c04534565f69504340dc09a255c"
  },
  {
    "url": "assets/js/87.57b5903f.js",
    "revision": "84761332c904349ac3a2eaec0280c17a"
  },
  {
    "url": "assets/js/88.8235e01c.js",
    "revision": "f888d9b5baf6e06e9ee3129c44d44e5a"
  },
  {
    "url": "assets/js/89.35eb6ca1.js",
    "revision": "71e8678a1e78afb64cb7914394ce96b2"
  },
  {
    "url": "assets/js/9.2ecb6cc0.js",
    "revision": "65959f57af28434cc1ce7440d5b77e59"
  },
  {
    "url": "assets/js/app.df7053fe.js",
    "revision": "5087bb30d772aaa0fa8d494f2f20addb"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "2319f1012dd397257b926b2deeb32610"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "67473e53228bce858b60dafee88bd83c"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "81352ebdab64828eef2324bc033cda84"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "ae798ea165dbbb7ba7af72c6642c1005"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "623b4b5d1b7818cee280e0bf7f95ca5c"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "54500569c09686f0023204b704783b92"
  },
  {
    "url": "composable/date/now.html",
    "revision": "55c2e3cdb6a477f0b43ad144e79dd23f"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "e670f58c5f3e8433ce3528a451573e61"
  },
  {
    "url": "composable/event/event.html",
    "revision": "db6a9afea8d77ce5a3b62554a6cec5c5"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "f36f68e103885e65435284a7191d45c8"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4a5957acafe97e4c453418d005062674"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "8614ee54dbc5e3c9aac44735408a2a47"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "f096c2f22f0fba42518c6975cf73aaed"
  },
  {
    "url": "composable/format/format.html",
    "revision": "ee95a07569b766ffefa836c7789134af"
  },
  {
    "url": "composable/format/path.html",
    "revision": "1bb9b267fab1117ee85d6684f9205db4"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "33e5ed2fbe841879fcc19ec69fa4d599"
  },
  {
    "url": "composable/index.html",
    "revision": "8b9df7a0b66a5da8516fd8104d8bb059"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "fa34a3044b3a0ebd2d475f454a40d8ed"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "00ed86829d484c13c7a97797735df40a"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "1f1b6073cc6e31682b0e31ea64003127"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "4f2745a5f24b3af43a5b03f382d246a0"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fc398f0ec276dbf89cd8ba243d7288cd"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "2ba0637ca473e2033bae49aac7ffd201"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "be80a5085c4cd0e431f7f085da0748e2"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "2b14d10b06d96dfdb32e8fee23bb9ebb"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "8a389f28c5a3c83e8440f4ef6be55926"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "41e88dd34ed6d3564506749f6d50e903"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "63a4050cb36fb440cc3c9c628bc883bf"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "bdd1de88e2b465189653ee6635f3e005"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "ff682e1b78e79d75b6f5ae5c95e0ffac"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "3039567520cd706be289af60ca52dae8"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "a505f270948553e32291199d216bf3ea"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "b4398008e418275964dfa252889b958d"
  },
  {
    "url": "composable/web/language.html",
    "revision": "662d6cbc0f6f05b208bfdaee8821f0bc"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "5400ad54cab78db393b2271145b081b4"
  },
  {
    "url": "composable/web/online.html",
    "revision": "07086863f78a8e35b8d623505613642e"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "2752e0617bfed03f57b57685071b6f0b"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "afd7f158b352614a3e4c57e2deba39b1"
  },
  {
    "url": "Examples/index.html",
    "revision": "be9f519a5b5d82561c15d6ea36154057"
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
    "revision": "27ba7699dba735e9b8165d0d05cdf0f6"
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
