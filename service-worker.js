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
    "revision": "751094f1e218f1c007d67ad697bfce1e"
  },
  {
    "url": "api/axios.api.html",
    "revision": "118856f92c0f7b372d1de03be0343d10"
  },
  {
    "url": "api/core.api.html",
    "revision": "90aac0a95fd5f596929850f4a375ca0c"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "73e87222585a73829b22cb0fbc346581"
  },
  {
    "url": "api/web.api.html",
    "revision": "27d55820271597059f4535e7a16533e1"
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
    "url": "assets/js/0.504e0fd3.js",
    "revision": "63a800c49a72fdd2bbb608c1e86f2bae"
  },
  {
    "url": "assets/js/1.2d0a41b2.js",
    "revision": "6dd83ad9db3af30ccd2307b543af33e4"
  },
  {
    "url": "assets/js/10.924e41f7.js",
    "revision": "cc415f2ebc783722b516ff28e03b6791"
  },
  {
    "url": "assets/js/11.44d93158.js",
    "revision": "46c7f88962732626357638a5450cf583"
  },
  {
    "url": "assets/js/12.1cd661ae.js",
    "revision": "d033c6629a4b42d1d8f2b518f5be0ed6"
  },
  {
    "url": "assets/js/13.11e42b9b.js",
    "revision": "ddc6f1b23e118dc0aab93d8366804e0c"
  },
  {
    "url": "assets/js/14.87c5afe6.js",
    "revision": "e634163ca64cfc47d7aacd685634623c"
  },
  {
    "url": "assets/js/15.5cd023b2.js",
    "revision": "67fe8226b4a390aca89f050163eccda3"
  },
  {
    "url": "assets/js/16.c6b1930c.js",
    "revision": "543c8f36d2ec202b2a50433ab712cebd"
  },
  {
    "url": "assets/js/17.aa5d904a.js",
    "revision": "1b235137c351785f04f94f632cf2b752"
  },
  {
    "url": "assets/js/18.85b57a94.js",
    "revision": "86c2f7dcf448d8bbffb2b96156036d0e"
  },
  {
    "url": "assets/js/19.36a5d15b.js",
    "revision": "0b683ff11a2e3324705a9ef7e4b0d90a"
  },
  {
    "url": "assets/js/2.879da79d.js",
    "revision": "82dfe686f68c5b2c68898ba664702ad5"
  },
  {
    "url": "assets/js/20.bac54027.js",
    "revision": "8d3f2aa2b92a2ce69d9a4f0bbb4fb6cf"
  },
  {
    "url": "assets/js/21.d82afc29.js",
    "revision": "95f8ac8fc7d889f9eae86157bc026ff6"
  },
  {
    "url": "assets/js/22.4fd18168.js",
    "revision": "3794437c6db74cf21559d6853536f977"
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
    "url": "assets/js/25.d68f1bc5.js",
    "revision": "be087e171c96846e7bd6c00d8c6f9260"
  },
  {
    "url": "assets/js/26.1278ac2e.js",
    "revision": "278db901995e026321e51a1d3a6ea1bf"
  },
  {
    "url": "assets/js/27.4237b87f.js",
    "revision": "f373991e3c336e346df2f26837f3fea2"
  },
  {
    "url": "assets/js/28.c6fc42bc.js",
    "revision": "78e985e57b312b3990dd2d87cf90edad"
  },
  {
    "url": "assets/js/29.d823beaa.js",
    "revision": "13a128ca7003e99e03a41575bf97720e"
  },
  {
    "url": "assets/js/30.70441bba.js",
    "revision": "2e8420c33e0c36632922bc1de9757db4"
  },
  {
    "url": "assets/js/31.9fdcc56c.js",
    "revision": "5db10301df6a08a2d751354473601509"
  },
  {
    "url": "assets/js/32.878c9425.js",
    "revision": "ef09c9061f0bf0ca0741575d834bda56"
  },
  {
    "url": "assets/js/33.a7fea1ee.js",
    "revision": "5f140ab4785ab2d01e2792c80e5a54d7"
  },
  {
    "url": "assets/js/34.90542f64.js",
    "revision": "69956178da61687625e566d5dab82198"
  },
  {
    "url": "assets/js/35.45039378.js",
    "revision": "56b52ae4e79e74bb6b1294c17b1c47ea"
  },
  {
    "url": "assets/js/36.51f35d1c.js",
    "revision": "14e119ac9f51fead0cd887a14b4a5df7"
  },
  {
    "url": "assets/js/37.983401ae.js",
    "revision": "9d0d50bc9fe37797b75268dc701e841d"
  },
  {
    "url": "assets/js/38.9ae75981.js",
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
    "url": "assets/js/41.e85e6730.js",
    "revision": "ac5370893cd60693610e322f3181bb45"
  },
  {
    "url": "assets/js/42.3ecc9265.js",
    "revision": "e39faf62babf75d73bd6975a189c90d8"
  },
  {
    "url": "assets/js/43.f6214fbf.js",
    "revision": "5fab952f60e8b014ac13db665da700e6"
  },
  {
    "url": "assets/js/44.9249df8f.js",
    "revision": "f09a20135da0d8105539d59ac1085e00"
  },
  {
    "url": "assets/js/45.82f2d1d5.js",
    "revision": "c39e073e472f187d71651d0086d2eb61"
  },
  {
    "url": "assets/js/46.d560ec10.js",
    "revision": "532582e84a009579edfbd2ab10592c51"
  },
  {
    "url": "assets/js/47.70fde537.js",
    "revision": "a085b8778768cf576c15f7d4be30ef87"
  },
  {
    "url": "assets/js/48.bce9307d.js",
    "revision": "bb7eb3acd729cb0de33f0102222cd358"
  },
  {
    "url": "assets/js/49.f01f423b.js",
    "revision": "9ce174210a9dd744659ee4eabe28fdd8"
  },
  {
    "url": "assets/js/5.dc3d7e9b.js",
    "revision": "c87c51e979ab4b89a892b32a0467c1d7"
  },
  {
    "url": "assets/js/50.6fc381fd.js",
    "revision": "b7fa8ac7c96c2190627a23afef5f2db3"
  },
  {
    "url": "assets/js/51.83886de5.js",
    "revision": "d5c7867f4900d1b416f2ac17f26276b2"
  },
  {
    "url": "assets/js/52.d9404706.js",
    "revision": "6e385c2cb1d4c5c357f8c258e1819031"
  },
  {
    "url": "assets/js/53.dee811cd.js",
    "revision": "5f11b5690bd67501b585c7cc6f4597f7"
  },
  {
    "url": "assets/js/54.404eccfb.js",
    "revision": "8529c4420ce352a40b8190b9998fbec6"
  },
  {
    "url": "assets/js/55.4a2f3fc3.js",
    "revision": "7363612cb8770e220a8e03635a561be5"
  },
  {
    "url": "assets/js/56.22879beb.js",
    "revision": "b7cb6a5f0be772d11ef587a5e1c40a1c"
  },
  {
    "url": "assets/js/57.55e6349d.js",
    "revision": "eb4ccefc98c50edbe3317c4ef8f1045c"
  },
  {
    "url": "assets/js/58.888e1809.js",
    "revision": "577eedd4d4fb750b30c78aede02d8314"
  },
  {
    "url": "assets/js/59.4e27c3f0.js",
    "revision": "fe1a72ab51e8c566dcb9afca6966b92c"
  },
  {
    "url": "assets/js/6.9f6b0e9f.js",
    "revision": "1e4a82b78ac5a93744f69add1ddd3179"
  },
  {
    "url": "assets/js/60.d17c0298.js",
    "revision": "847e27e22ea870bdb8c66b0cb6aa140d"
  },
  {
    "url": "assets/js/61.599d7cf2.js",
    "revision": "f5fe808d64d14f777e3805cf703d8c9c"
  },
  {
    "url": "assets/js/62.989892cb.js",
    "revision": "e34a6bb05d25090e708417500a60ab6b"
  },
  {
    "url": "assets/js/63.55839bc8.js",
    "revision": "07c255e50dc806ef7957ae2ae7ea318d"
  },
  {
    "url": "assets/js/64.c6ab2d28.js",
    "revision": "49692d5a7ac6604cb4737298285d4ab5"
  },
  {
    "url": "assets/js/65.500267e0.js",
    "revision": "736d04aa05cfdbfaaea808ab3665c3b2"
  },
  {
    "url": "assets/js/66.44f139f8.js",
    "revision": "fa7ff84e5db0408a95e551093be70310"
  },
  {
    "url": "assets/js/67.b2479790.js",
    "revision": "b251e4e26898a489e97b77e747ad91b4"
  },
  {
    "url": "assets/js/68.a552e445.js",
    "revision": "33d227739d9049b2457c72ac0ce720b4"
  },
  {
    "url": "assets/js/69.9fdd0ab9.js",
    "revision": "05e54a3b4c2627895ec03158ecc2048e"
  },
  {
    "url": "assets/js/7.9146aa38.js",
    "revision": "876145b4537a50c840c9d93fdd06371c"
  },
  {
    "url": "assets/js/70.a949e00c.js",
    "revision": "5275e1e174e99a7000d325cf4b807380"
  },
  {
    "url": "assets/js/71.afa196f6.js",
    "revision": "d2a54443fa704642b3f5cbc6cfcf6e59"
  },
  {
    "url": "assets/js/72.008da393.js",
    "revision": "6f066ee3902077d74ba4533b770cde2b"
  },
  {
    "url": "assets/js/73.31a430c4.js",
    "revision": "67ec6292dece8e9708fc26f7200e3959"
  },
  {
    "url": "assets/js/74.64562318.js",
    "revision": "5f34e405c951c4560f4eba013a7065e3"
  },
  {
    "url": "assets/js/75.52b9e0d9.js",
    "revision": "5fd1a41375c5d0daf50b073aa2365161"
  },
  {
    "url": "assets/js/76.f286377c.js",
    "revision": "a72a31762ad054032d4400aad65cb9aa"
  },
  {
    "url": "assets/js/77.48d3f936.js",
    "revision": "95507870fa4911240b1225ccee96dde2"
  },
  {
    "url": "assets/js/78.6ebd6f65.js",
    "revision": "54dd963281afa349345b8423922d7222"
  },
  {
    "url": "assets/js/79.06e5e31c.js",
    "revision": "4c58d8de7ccba2cd39e2a2dcbab5e309"
  },
  {
    "url": "assets/js/8.d0e727f1.js",
    "revision": "6685e9d60e20c95799b4a2dfe3fea0ae"
  },
  {
    "url": "assets/js/9.b9271b14.js",
    "revision": "11771f83a9e38019f0eb6f40db4997da"
  },
  {
    "url": "assets/js/app.e9196549.js",
    "revision": "d6e510f7165a221b459abca87c695778"
  },
  {
    "url": "composable/_template.html",
    "revision": "9eb3ce5e7736534f85c6b371662fc997"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "661c767f2f9e3409889fa46f8dacfe22"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "a0b5085a7e865f5ea98370100512b572"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "d844c92e3ef198ee074dee01926ee2e7"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "7a3d93445a11cc786a19ec4a12f905dd"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "411aff9803e2f860174aaf318859c359"
  },
  {
    "url": "composable/date/now.html",
    "revision": "65403b4c5429f3cf168c5401561be34f"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "61b2bf1a5209ab4ae2b4e262a84f670a"
  },
  {
    "url": "composable/event/event.html",
    "revision": "59a039a1d3889135dad77869a7ed40d0"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "54f20a7697d74451ad811b69c64a90bf"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ffb1ed762f2748aee726d7f17f8b91ff"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "9276f1d12a1109cc291535754362d069"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "494d98b1bc5e120c49e1086d623e0d98"
  },
  {
    "url": "composable/index.html",
    "revision": "60480f0fd616ef1e9c315e6085f4db06"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "9f237c274153e91d4af8379849044abf"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "124f1b8ded0409fa4195a3ab88a8b9f8"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "ca6e528d63326cab764cc19e002ef64c"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "9efafe0ebdfd79658cedbb435bcf028f"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "769c2d6323ef260551b43eec8a84b8d1"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "9efc5143038f2200fbfad6537450016f"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "b149c5625998db79a24056458d1affc8"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "166cdf8c14888896f75c3ffb99b43fa1"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "08728b1266aee6c771bb45fabc7530a6"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "a5a5998b0279a3dd1373919da0c7a967"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "5df6e76db2125524352b68e141c16f6d"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "5b3ede098f074744478e501a0dce31d0"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "40e9f78f746e1ce580482d517788a47c"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "2b02fc6d78fc1b52548697ac30bf0309"
  },
  {
    "url": "composable/web/language.html",
    "revision": "5efc99cc5e7e37775a2c10353d2c0674"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "09347ff77a030c26488168f2a82bf916"
  },
  {
    "url": "composable/web/online.html",
    "revision": "faa57b8b9daff66df9bcdbaa4b9181a7"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "7bd39397deb4e6f5102da957baec5ed1"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "0b968bfac144d3d648cd8ce9fce6b711"
  },
  {
    "url": "Examples/index.html",
    "revision": "2a301f1dc608445e3f79f144676c09da"
  },
  {
    "url": "index.html",
    "revision": "a04c9250ec552df207c64cca7d04a3c3"
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
