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
    "revision": "9c10d4a84252360f8cc70b6ce3c6afba"
  },
  {
    "url": "assets/css/3.styles.c04b7cd6.css",
    "revision": "4d4bea4e957bda799831a82e5faefd4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ce4bb94b.js",
    "revision": "08fdef683d433b9c55086e0dc58278c9"
  },
  {
    "url": "assets/js/1.e82e366e.js",
    "revision": "291d87f0b73e8633e98e5647faaafc66"
  },
  {
    "url": "assets/js/10.bcf6587f.js",
    "revision": "9cb1fd349d1320bf233408d6837484ad"
  },
  {
    "url": "assets/js/11.cd661af6.js",
    "revision": "5b4949cec0a5d33b2c5beae94271edda"
  },
  {
    "url": "assets/js/12.9e7ed909.js",
    "revision": "a2ee1c10dda781f73449f03caa635788"
  },
  {
    "url": "assets/js/13.a66d4e00.js",
    "revision": "52da85aa95eee5372fbea113361f479e"
  },
  {
    "url": "assets/js/14.712c53c5.js",
    "revision": "74723740d1bb8dd6aea74f21744be73e"
  },
  {
    "url": "assets/js/15.f1cdd2dd.js",
    "revision": "49dcfba13c41af1d72570d5e37a2e990"
  },
  {
    "url": "assets/js/16.e89f56df.js",
    "revision": "83c463cd91f05393063a61e4d4d59c15"
  },
  {
    "url": "assets/js/17.25eb0668.js",
    "revision": "0dc1b194e20147a4243af48decec539e"
  },
  {
    "url": "assets/js/18.e63d7f4d.js",
    "revision": "be6a3f2a34840d078fcdf6db69070671"
  },
  {
    "url": "assets/js/19.93c1e27e.js",
    "revision": "c8000fa6a872ad7f85919ccef0188f61"
  },
  {
    "url": "assets/js/2.5d535edf.js",
    "revision": "c760c997fd882434b53fa26f0a85ae18"
  },
  {
    "url": "assets/js/20.e9c2c536.js",
    "revision": "e973096a3c8d9f47ed154a96116d412e"
  },
  {
    "url": "assets/js/21.5966a59a.js",
    "revision": "bd92d270edd2cdc9b4f20bcac7540581"
  },
  {
    "url": "assets/js/22.4aa3d934.js",
    "revision": "56b8affce16f2404d2bbbc81c6d963a1"
  },
  {
    "url": "assets/js/23.dc02e5fa.js",
    "revision": "0d3fc9e0b496e66c00c3ccd717112a6a"
  },
  {
    "url": "assets/js/24.b023b409.js",
    "revision": "fedc4c62a3daba745d006ffbdc8238bb"
  },
  {
    "url": "assets/js/25.d9456cf6.js",
    "revision": "24aa33cf2d1f94a03606de1f158f6146"
  },
  {
    "url": "assets/js/26.9e5439a6.js",
    "revision": "c4b8a5580a9f2c37f66acc5918b9a16e"
  },
  {
    "url": "assets/js/27.d287acc1.js",
    "revision": "d1acacf0315ff86b16db723cf29444e4"
  },
  {
    "url": "assets/js/28.d46602a5.js",
    "revision": "e33432846639eafa058a445de65d4f0f"
  },
  {
    "url": "assets/js/29.c60d28a8.js",
    "revision": "57fb217ed6975360c1200109202b69a9"
  },
  {
    "url": "assets/js/30.7d7739ab.js",
    "revision": "91c422c2f594f8393827992954178546"
  },
  {
    "url": "assets/js/31.0a3cf62a.js",
    "revision": "f6fabd1af73ab767e2a7195e2eb55665"
  },
  {
    "url": "assets/js/32.bcf6b0ac.js",
    "revision": "7d27a8c5181359c7d0c3d92f52e05900"
  },
  {
    "url": "assets/js/33.095fae2f.js",
    "revision": "4da8b70e8c1f4b34628404a95b620780"
  },
  {
    "url": "assets/js/34.fd45c5cc.js",
    "revision": "c1e3f10bf42dd34abc9335f8495251f3"
  },
  {
    "url": "assets/js/35.7751afec.js",
    "revision": "02fc2b737334699f6cd7a3c3e2a08aba"
  },
  {
    "url": "assets/js/36.1fcf5c64.js",
    "revision": "527ad57520201e8188592deb167801d9"
  },
  {
    "url": "assets/js/37.dccd0158.js",
    "revision": "e2e68f7a1a051f523646c80acada1fa8"
  },
  {
    "url": "assets/js/38.b90aea50.js",
    "revision": "795b5b6b13c85127739c00f88092d28a"
  },
  {
    "url": "assets/js/39.968ebc5e.js",
    "revision": "08816f83e9db0743163ac0273fc3fd67"
  },
  {
    "url": "assets/js/40.3c75412c.js",
    "revision": "ec2f8a7f08c16c014c15e99387b5e00d"
  },
  {
    "url": "assets/js/41.41a4c02c.js",
    "revision": "b854c46a11177b845a4834974af9ccd5"
  },
  {
    "url": "assets/js/42.167a119e.js",
    "revision": "bda7107b66af2586b1936dbda6a48d33"
  },
  {
    "url": "assets/js/43.3a5ca548.js",
    "revision": "c09e63c1258b97ace27ab8b8873cc24c"
  },
  {
    "url": "assets/js/44.3553f73a.js",
    "revision": "af6ef5785ba395d2a539b7156d2cab00"
  },
  {
    "url": "assets/js/45.72a72577.js",
    "revision": "64d0c86fa91c681561fd60c2760fb15e"
  },
  {
    "url": "assets/js/46.65672dd3.js",
    "revision": "ba93791acc81b0b36a2bc9c6aacfbcad"
  },
  {
    "url": "assets/js/47.f2768237.js",
    "revision": "ca847eae18cc92a3d5adfc01d098caa4"
  },
  {
    "url": "assets/js/48.c8f5f26d.js",
    "revision": "e5a1e64f08bfa023f5302e69a46192de"
  },
  {
    "url": "assets/js/49.ea9775bb.js",
    "revision": "78d2213d379957b9611783d1ef735842"
  },
  {
    "url": "assets/js/5.9fb3b766.js",
    "revision": "c81dc8cd96dc8f616234b5dff1b31009"
  },
  {
    "url": "assets/js/50.2deda6f5.js",
    "revision": "839dc166113128f75daf31f9f581c3cc"
  },
  {
    "url": "assets/js/51.ed2d3bd7.js",
    "revision": "fac4a3ddbc0b0bc0923a543696e422d0"
  },
  {
    "url": "assets/js/52.0a49173f.js",
    "revision": "8506a7914afc3faff73576d5931b6014"
  },
  {
    "url": "assets/js/53.7331b9c8.js",
    "revision": "47da2d8567c54416519ed8ff5fad9071"
  },
  {
    "url": "assets/js/54.9d0043c9.js",
    "revision": "fe2e4a07a7ca8e7330a7ea9921855ab5"
  },
  {
    "url": "assets/js/55.ded103a3.js",
    "revision": "18ca4273300dde17f60b9a59eb8738dc"
  },
  {
    "url": "assets/js/56.fb7f8234.js",
    "revision": "b12cdb1a1a697f321f11a70debfa4c41"
  },
  {
    "url": "assets/js/57.c65e801f.js",
    "revision": "4688e26de536ca4f927e79e1070107a7"
  },
  {
    "url": "assets/js/58.937f6c5c.js",
    "revision": "fde9aefe97a5f20ad1218cc17dec6195"
  },
  {
    "url": "assets/js/59.b0f8a4d2.js",
    "revision": "be2ccd26228d1c760c1e9f1b92b95866"
  },
  {
    "url": "assets/js/6.1bdf9344.js",
    "revision": "c73e8577ae8350d91ed41a25edf8e208"
  },
  {
    "url": "assets/js/60.def4de00.js",
    "revision": "2a6cf454dfb012d798faf4a8c78f2a84"
  },
  {
    "url": "assets/js/61.19b52996.js",
    "revision": "f97938f9f18c250a385aebe2778ac0f1"
  },
  {
    "url": "assets/js/62.9a5a42ae.js",
    "revision": "62bec83b60cab3ae4590a14e03660b4e"
  },
  {
    "url": "assets/js/63.6c5f806c.js",
    "revision": "694fa4618d63ef64f3f7e90bc43ba6a3"
  },
  {
    "url": "assets/js/64.191f6925.js",
    "revision": "e8ffacbb136dcceaaee9f047df02b4be"
  },
  {
    "url": "assets/js/65.80ee173e.js",
    "revision": "13fc167bd34e1318f601ba3f84df275b"
  },
  {
    "url": "assets/js/66.2c944f03.js",
    "revision": "8c3696ee3f97e7ed7f77934c7c78f62a"
  },
  {
    "url": "assets/js/67.44f4c904.js",
    "revision": "f558ff80cdec69970a24f8466a831a93"
  },
  {
    "url": "assets/js/7.f11f8893.js",
    "revision": "82ebe38b5971b6af774bd3cd65efc975"
  },
  {
    "url": "assets/js/8.bb1c0cef.js",
    "revision": "55fe2ae1c9fd3e511f3a05107e0c454a"
  },
  {
    "url": "assets/js/9.8fe582ff.js",
    "revision": "3453b57f156ae2a0d5a4fc248c0790da"
  },
  {
    "url": "assets/js/app.db067cb9.js",
    "revision": "c73386744a0308f927a5e8f14cd37448"
  },
  {
    "url": "composable/_template.html",
    "revision": "2ad6ce8fc359aa59f8c11eb44e6e566e"
  },
  {
    "url": "composable/event/event.html",
    "revision": "2fd5979a3ab06899508b0fda06bb85b6"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "3bdcc3533c05a50db60cd57310f8aad6"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "9c6843b7fff3815ffb0284c7477de940"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "e4d9925190f379362e2806d620169bec"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "141f97cf71a7594f80da8af610e2488f"
  },
  {
    "url": "composable/index.html",
    "revision": "5a6f5a1784acbcab76488204eeec466f"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "05a7c2085ca72be1004f7ec749061a78"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "6b831a6946f86619c67120944328ad2c"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "0db743697ff1a710cc475146125afc56"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "8c05041a6560736936834dbbd77ca8e1"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "2be5b03a474248b162f36ec8dd186deb"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "91f51c63e65d67c34b732125e26c7e70"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "d6fda7edade00cda26facce44c5cb901"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "be5e82beb2c0c4dce24134ab9af15179"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "b6f65d2cb80d0e93d263d15498b28287"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "7bf5f44b73853a686f15e332afc777b9"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "8f1209c72213ea493ce805995c52b2c3"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "a9f1118e2ee6a2245186d0c9d21839db"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "0b44b01ea361ffe4d90ec4f24963fe2e"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "3f7fbd78b86e079d50041e9819fd4041"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "bdb344ceef8b0f87a137ddc9c74c57ed"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "3c30180f86aab68fd4c004ab318f7cd8"
  },
  {
    "url": "composable/web/language.html",
    "revision": "901ffe5121449f5d8d9a15daa6089f48"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "933c0d2ce95c557bdc79d501d206d460"
  },
  {
    "url": "composable/web/online.html",
    "revision": "82290672ff725e3e98062e855492b7b6"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "296bb671884d7529e9612f75c89d8c54"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "c0152ce3b0563f3fd753724ec1b6fbb4"
  },
  {
    "url": "Examples/index.html",
    "revision": "9e461bb954c70badc29ebf332133b5cd"
  },
  {
    "url": "index.html",
    "revision": "68da1c7a33a15f450ce99ac66197236b"
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
