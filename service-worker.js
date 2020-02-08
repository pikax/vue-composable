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
    "revision": "d9b31efbb46a7ba3b9e4d97540e07dce"
  },
  {
    "url": "api/axios.api.html",
    "revision": "190ab10373e752014146f02478b706c2"
  },
  {
    "url": "api/core.api.html",
    "revision": "27be612a99c024e3d93c135e52fa91e3"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "d4704b57130bbc618857590aade210a9"
  },
  {
    "url": "api/web.api.html",
    "revision": "07557c8bba4eee70516af3a7b37b31ec"
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
    "url": "assets/js/11.7e9bc08d.js",
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
    "url": "assets/js/14.994643f2.js",
    "revision": "e634163ca64cfc47d7aacd685634623c"
  },
  {
    "url": "assets/js/15.5cd023b2.js",
    "revision": "67fe8226b4a390aca89f050163eccda3"
  },
  {
    "url": "assets/js/16.43dd4936.js",
    "revision": "543c8f36d2ec202b2a50433ab712cebd"
  },
  {
    "url": "assets/js/17.752b3968.js",
    "revision": "7e8e72387885df4ef51f5fa8dce4d56b"
  },
  {
    "url": "assets/js/18.85b57a94.js",
    "revision": "86c2f7dcf448d8bbffb2b96156036d0e"
  },
  {
    "url": "assets/js/19.f032a5ea.js",
    "revision": "0b683ff11a2e3324705a9ef7e4b0d90a"
  },
  {
    "url": "assets/js/2.3429d49a.js",
    "revision": "2620d705a323780b41df204bc20b254b"
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
    "url": "assets/js/25.d68f1bc5.js",
    "revision": "be087e171c96846e7bd6c00d8c6f9260"
  },
  {
    "url": "assets/js/26.1278ac2e.js",
    "revision": "278db901995e026321e51a1d3a6ea1bf"
  },
  {
    "url": "assets/js/27.10142496.js",
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
    "url": "assets/js/30.8db9606b.js",
    "revision": "1de60ff67a36f3307ce91a76c6a01759"
  },
  {
    "url": "assets/js/31.66d4177c.js",
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
    "url": "assets/js/34.277a1664.js",
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
    "url": "assets/js/41.e85e6730.js",
    "revision": "ac5370893cd60693610e322f3181bb45"
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
    "url": "assets/js/45.82f2d1d5.js",
    "revision": "c39e073e472f187d71651d0086d2eb61"
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
    "url": "assets/js/56.ff818bd4.js",
    "revision": "762a5f920a15109f7578e1abfeae7d35"
  },
  {
    "url": "assets/js/57.f4771526.js",
    "revision": "f3e66a05641dd75f6457dae2a9d95b76"
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
    "url": "assets/js/68.407c68c0.js",
    "revision": "b5664269472637c2bc2d769a938607a3"
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
    "url": "assets/js/8.9c1efa35.js",
    "revision": "6685e9d60e20c95799b4a2dfe3fea0ae"
  },
  {
    "url": "assets/js/9.b9271b14.js",
    "revision": "11771f83a9e38019f0eb6f40db4997da"
  },
  {
    "url": "assets/js/app.1401aeb8.js",
    "revision": "64af31e851f98dc443857fd0a98b7dbb"
  },
  {
    "url": "composable/_template.html",
    "revision": "c98650dafa40aaff77a56d91765f2838"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "7c49d1edc4b40428984119b10cf4c78f"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "27dd4b3290a0fffcedadd6c57592d1da"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "e99721455dfecf2727324c569480be44"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "bb41b294fbf974f121d572be8accaf7b"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "59c5a9b774ecf9a87f2f42e0ff7979a7"
  },
  {
    "url": "composable/date/now.html",
    "revision": "1cbbba0381537183194356449cd960e9"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "84cdffd6c6501251c71e43ae46243339"
  },
  {
    "url": "composable/event/event.html",
    "revision": "f3abb0779db6cec1a4dc2324bf423ff3"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "6703b71f1ef90e7f35b412c0109796dc"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "dbb4fdc5673027469877089bebc00bcb"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "ece047f9cf9da6de98150b34da51a44d"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "0c177d3f1b2cde3f68cb3ae47d9c4e82"
  },
  {
    "url": "composable/index.html",
    "revision": "d31c42ef8588139d1c850f2d736c0b17"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "5ad6935b5f59c01218f259adefc8a37e"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "1b980f84c6161801d91ade14fc26b94c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "dfeef6cb104c07a82f788f803603bbbc"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "4ff948d4a29788c3910aff0bf882fd80"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "cc8e3ec2b468e531f51e6d2bc155ac73"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "9570d9cdebfb6e28988ba36644aca829"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "4bf1fe6a485e3fef98e2930eecaa549d"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "bb67b3aa87a4a7df62854bf520b91f53"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "38bd517c99b839b5177e10596469fbab"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "7a3fecb99f4c601cb710fe64f8628862"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "bd349b19bc46f0ff98667a9031de2ef3"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "90fbf30e6fa36624da7440fa47ee70d0"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "b5d192bff506c2c871eaeca6fda83760"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "6fc7e6b356951c67dab3c59e75637311"
  },
  {
    "url": "composable/web/language.html",
    "revision": "44283b9e0c2b41bdb43df2a9b29aaa7a"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "f539526df76ce6527ae05b61c3658514"
  },
  {
    "url": "composable/web/online.html",
    "revision": "f0dec39a64a14afba148eadacd178092"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "9c0d3bc7f449517d2cb5f9ca0696f46d"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "370750f4f0a455c5d9f6b53c9a1c047d"
  },
  {
    "url": "Examples/index.html",
    "revision": "9f79e80084e3a717a74aba5371669522"
  },
  {
    "url": "index.html",
    "revision": "ddb944b6ed883782beb69d217da8433b"
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
