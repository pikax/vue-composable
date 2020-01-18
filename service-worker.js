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
    "revision": "cb886dea9290bbd6fda5c8f4fe57309c"
  },
  {
    "url": "assets/css/3.styles.b1490a78.css",
    "revision": "4d4bea4e957bda799831a82e5faefd4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.46a3b465.js",
    "revision": "99a63818cc0a2b1e2b2e5995fa67fc7e"
  },
  {
    "url": "assets/js/1.5c861d99.js",
    "revision": "a6a82f170e13461b0066268516305753"
  },
  {
    "url": "assets/js/10.8fdc9df2.js",
    "revision": "50aba4a43c63056fe1420fb5cbc05028"
  },
  {
    "url": "assets/js/11.5b5139c3.js",
    "revision": "f1e5289771fbdf7c83b7c346be39eab3"
  },
  {
    "url": "assets/js/12.67d513a8.js",
    "revision": "3443e4fc4dbbbc16feb9f9c83829f450"
  },
  {
    "url": "assets/js/13.a245707b.js",
    "revision": "09420eb46eda131af2f60f3d00410dc3"
  },
  {
    "url": "assets/js/14.2d760d87.js",
    "revision": "393d8112bd1bf312f890243a4c43a887"
  },
  {
    "url": "assets/js/15.caf2e0e2.js",
    "revision": "56df2e1f8295385078760fde46853126"
  },
  {
    "url": "assets/js/16.fac80ac4.js",
    "revision": "37d89d2fb2bb04bd057b000d7f166665"
  },
  {
    "url": "assets/js/17.e5b28339.js",
    "revision": "27c0309aa5a382f0eff472004880fce3"
  },
  {
    "url": "assets/js/18.1433ddd2.js",
    "revision": "be3448c2ff5f500d5f085edf9d63b282"
  },
  {
    "url": "assets/js/19.22c413f1.js",
    "revision": "6d2ced0cf8d523a18392083d7b1b446b"
  },
  {
    "url": "assets/js/2.ad31f083.js",
    "revision": "51fa1faeba4c1f9d7a398c0cdbde14fc"
  },
  {
    "url": "assets/js/20.277ed158.js",
    "revision": "3d077be1795c91875521f23789323103"
  },
  {
    "url": "assets/js/21.75bfbe34.js",
    "revision": "cd578eab6e7ffd69fa615b1cb64ffcf1"
  },
  {
    "url": "assets/js/22.73522a6d.js",
    "revision": "140f809037376be32ced3a94f5ae2428"
  },
  {
    "url": "assets/js/23.3b024cfd.js",
    "revision": "56c19eb9f76de2b53a5b31294f68c70c"
  },
  {
    "url": "assets/js/24.14b9f050.js",
    "revision": "b3f1d9860db79b97c781b13d97c3f36e"
  },
  {
    "url": "assets/js/25.2483b9f4.js",
    "revision": "18847d48ff5be384982a4ee6c93cbd56"
  },
  {
    "url": "assets/js/26.d1851e69.js",
    "revision": "451f5eaf793c9d83d1205758ad220a22"
  },
  {
    "url": "assets/js/27.82f69481.js",
    "revision": "78a35113c70cce46735961708361bad8"
  },
  {
    "url": "assets/js/28.4c5b7ebf.js",
    "revision": "6f7b32f5e85b33fa00de3f0c5c28dce4"
  },
  {
    "url": "assets/js/29.faf1127c.js",
    "revision": "6151383e36db81e0937935f6789fd046"
  },
  {
    "url": "assets/js/30.c242122a.js",
    "revision": "aaecb19ec87b02f0a662176be6d34659"
  },
  {
    "url": "assets/js/31.ce74e3cf.js",
    "revision": "7d4f1e321d8d4bb6dcae4c5c5ac706fe"
  },
  {
    "url": "assets/js/32.5d648303.js",
    "revision": "5d1a7f6e6adaf80a0afa2beb80e96ef7"
  },
  {
    "url": "assets/js/33.35590bdd.js",
    "revision": "9f68fc67ab62a0b08a5fc3ea06607df9"
  },
  {
    "url": "assets/js/34.e00e2505.js",
    "revision": "6f6ca862782e99e590b02d4b85f864de"
  },
  {
    "url": "assets/js/35.c82bc03b.js",
    "revision": "8e6262f86e8ce81b5c31594662e07668"
  },
  {
    "url": "assets/js/36.e228f6ec.js",
    "revision": "d1538c9a99743fa97d514fd05a90c3d0"
  },
  {
    "url": "assets/js/37.1b82b605.js",
    "revision": "369943c13a60226bd2d70d518d9b1a21"
  },
  {
    "url": "assets/js/38.9056051f.js",
    "revision": "69c1ba23f05cfaf7c741320350472140"
  },
  {
    "url": "assets/js/39.413b3623.js",
    "revision": "0dce1a09ef840e92af2a5a50c8f32671"
  },
  {
    "url": "assets/js/40.239cc91d.js",
    "revision": "b584d68e03ff124faa7d51c4369714aa"
  },
  {
    "url": "assets/js/41.b72431dd.js",
    "revision": "853fdff20dca837bc02113a7858c33a7"
  },
  {
    "url": "assets/js/42.76477a95.js",
    "revision": "d63ab3b94128590ac76d5691cf3204d7"
  },
  {
    "url": "assets/js/43.1e99c13e.js",
    "revision": "c9900ce79b5d248875165985a4b27d4c"
  },
  {
    "url": "assets/js/44.8713cabe.js",
    "revision": "615867f4b422a116c6b9b15e71edb302"
  },
  {
    "url": "assets/js/45.779cf836.js",
    "revision": "1fbd03a9af840ae27be7e2d765bb9f70"
  },
  {
    "url": "assets/js/46.37a33db4.js",
    "revision": "cc13903710b9769c790707668aa766c1"
  },
  {
    "url": "assets/js/47.e86af8fc.js",
    "revision": "50c59113a2b96f0bb4d575d8d378bbe4"
  },
  {
    "url": "assets/js/48.9540f2e2.js",
    "revision": "1c32cdb7442616b9fde82d990e3bb64b"
  },
  {
    "url": "assets/js/49.a4882b84.js",
    "revision": "76d33562c3344b3c91b8546f02d75d59"
  },
  {
    "url": "assets/js/5.24a3a39e.js",
    "revision": "6429596033f16e366b00fd5a608f577f"
  },
  {
    "url": "assets/js/50.24bdfc8e.js",
    "revision": "558a1d801278499a3aa40a0f5d8e63ed"
  },
  {
    "url": "assets/js/51.89216279.js",
    "revision": "f754802b206919566fb2085e974cf031"
  },
  {
    "url": "assets/js/52.3dab9edb.js",
    "revision": "0bea90a07132bbd69d843f0aace3003f"
  },
  {
    "url": "assets/js/53.e7f3ae06.js",
    "revision": "9e0a06cd0e92a1aad1ef7a47fe5f2c22"
  },
  {
    "url": "assets/js/54.283fa021.js",
    "revision": "099c3c280d6cf36be8482bc8c8ead3ad"
  },
  {
    "url": "assets/js/6.7973372d.js",
    "revision": "1b3d208cd2a009d19f18f81e4c2868cb"
  },
  {
    "url": "assets/js/7.59b93968.js",
    "revision": "4c7d19a78da1eea3a61435ed7d2e0d4d"
  },
  {
    "url": "assets/js/8.74e978a5.js",
    "revision": "6e7fb35a8be643578152780f9ebf9439"
  },
  {
    "url": "assets/js/9.139e4a87.js",
    "revision": "3e1c042eaca50b630826ef1cbb2e4d22"
  },
  {
    "url": "assets/js/app.f86efd6c.js",
    "revision": "0693b8135be675514f8ca3f6c92742df"
  },
  {
    "url": "composable/_template.html",
    "revision": "2a2bbc5e70fd2177af8e1841a817b838"
  },
  {
    "url": "composable/event/event.html",
    "revision": "e44eba49bfa8f105d03a88b234697e1b"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "c2b3f536fd7a2bea437e52cde7cfd9fd"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "dd34f52b9a2228b63d0d94697f94466b"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "113ddc98dd05b809ec87234c3ef43938"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "e7a8d57aa970d53d6f27fe423d2eba5e"
  },
  {
    "url": "composable/index.html",
    "revision": "97835803498281d97724d309f02ed860"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "8a5c5950b40765aee09019ae280ad413"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "8c0cca5f519a1e70ad5d7c3e2f8f1102"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "fe69dde232518c4caff03203309ca887"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "181ec39a19ad743011daa277907f4eb4"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "bb9dc0fb5cb304b7365ccca2e3ee8f3c"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "a43bbff8f7af8f59add9b3d454cc8523"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "dc661f810b78f484194d374eb772dc6c"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0311032be98045a77379d38cdf60f313"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "b2278a894754f765a62a18a81ce5abfc"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "22dcc161efaee90dede82a95cec15416"
  },
  {
    "url": "composable/web/language.html",
    "revision": "f60a96b94daee52cd77d2487939ab989"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "e4a508706e6d58b09ede9be731f790b6"
  },
  {
    "url": "composable/web/online.html",
    "revision": "e91c7d0e592378453f6b8a89fbeb1abb"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "90a81ca87e64d848a9c0641a92b6fb27"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "ee9314a372b903b82f7f402d5ca0965e"
  },
  {
    "url": "Examples/index.html",
    "revision": "f9c1c90a2eb81341cbe899a44063ac3d"
  },
  {
    "url": "index.html",
    "revision": "eae032acc714a521fd3a24fd481785c0"
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
