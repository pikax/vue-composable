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
    "revision": "cacec8fbc711b0d6eb8ccbb899d8fe12"
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
    "url": "assets/js/38.e4eeb254.js",
    "revision": "3497340a705da7eba7854467ea193d22"
  },
  {
    "url": "assets/js/39.968ebc5e.js",
    "revision": "08816f83e9db0743163ac0273fc3fd67"
  },
  {
    "url": "assets/js/40.1af0e49e.js",
    "revision": "b5e8db74c7d1999a4ec8b5b3057377f4"
  },
  {
    "url": "assets/js/41.fd200adc.js",
    "revision": "f8073df0a628cde1facddb2806f64173"
  },
  {
    "url": "assets/js/42.6a7cd150.js",
    "revision": "132c9dcb11ac2fca1b638ace511cce67"
  },
  {
    "url": "assets/js/43.07ad81ee.js",
    "revision": "f97924576b5ba14cc84b973987fb0355"
  },
  {
    "url": "assets/js/44.baa0b7b2.js",
    "revision": "1c0e5ce3612d022ce4269bb82a735868"
  },
  {
    "url": "assets/js/45.b9355656.js",
    "revision": "d2fa5b5c4ed21a8802751299409eefc1"
  },
  {
    "url": "assets/js/46.93d11d08.js",
    "revision": "e57c772c383df5d37a9ae67b017a148a"
  },
  {
    "url": "assets/js/47.c4a6f4c2.js",
    "revision": "2e31e1d1ffe22d6cca58a7b29abada04"
  },
  {
    "url": "assets/js/48.b4d84f72.js",
    "revision": "234ca273c0dbb802e09315d5affabe30"
  },
  {
    "url": "assets/js/49.f1c1d0e5.js",
    "revision": "6e99e48d65c2f0f1f5ff602502472d94"
  },
  {
    "url": "assets/js/5.9fb3b766.js",
    "revision": "c81dc8cd96dc8f616234b5dff1b31009"
  },
  {
    "url": "assets/js/50.23239580.js",
    "revision": "041d4a42340a10080e15aa20d53d44b3"
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
    "url": "assets/js/app.04cdd76d.js",
    "revision": "3e9aeb68b6b68420d836c90bb40da9e4"
  },
  {
    "url": "composable/_template.html",
    "revision": "88edb8230a14ef54bda4293e97b02563"
  },
  {
    "url": "composable/event/event.html",
    "revision": "69f53dbf447dc78f450f3aebf730f14e"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "3a8f7a2e9bff9b5798a65b11da002103"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "17f36ab7f34c7668add7653e250d8519"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "b178811c75337b1dbfc8241def6d154c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "ac572516656730c8793124fcc01cb985"
  },
  {
    "url": "composable/index.html",
    "revision": "26e89381c9c8851125240c25a837ad64"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "2c93cab1c23f12cb566d2e25f4f52b61"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "a09c602acd0fa7373b5a2188e7cce50c"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "f6ab515e09b43351a8854a978dd22e15"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "0fdf766024ccaf09ae80111b29a3c36e"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "08dbe69d76ff467733df353dd4fd5e8e"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "b79131c99759afd4a5fe4d85f071c62c"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "a5a7ac20c4f0492c1ba8e961d1c346ca"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "80a49b7d55ea808c37c9931cf601e058"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "0a1ccd8f6e7ef762d62a62211dcf85d4"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "a6a2abc484a3f74c1149f44b236ebd1a"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "08e55b60f48070b52215ab0bc399ec38"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "f6d0ba40e6c43fcf4cc8f4c17b8f5748"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "5be5743b7e1cb903512e189c184d494e"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "ae5d34bb434c0e3e9ae4600d3b22a154"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "c1dc02c8ddb835877510d8cf2b5312ec"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "c2a9145bf8459841e22e9565afccc86b"
  },
  {
    "url": "composable/web/language.html",
    "revision": "964db87e7eabc0026877f151ca4d8399"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "3ed4d35f2c06c1f4bb05e52b96f916b7"
  },
  {
    "url": "composable/web/online.html",
    "revision": "c44c81c32e71fb3264639e7eb0a97029"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "a504113792ca60481c5de9017a076388"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "59a0cd5c9083b20787646fd54ea54728"
  },
  {
    "url": "Examples/index.html",
    "revision": "bc8d59c686601dc90d23a212486d22c1"
  },
  {
    "url": "index.html",
    "revision": "0aad6e3379f04713a7a19b1a3bb344e9"
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
