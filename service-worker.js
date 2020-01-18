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
    "revision": "9898ad869049567690923d3f38393239"
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
    "url": "assets/js/11.ff48f02c.js",
    "revision": "12b31cceb8b836c703b11d0e9091086b"
  },
  {
    "url": "assets/js/12.67d513a8.js",
    "revision": "3443e4fc4dbbbc16feb9f9c83829f450"
  },
  {
    "url": "assets/js/13.5b2667ce.js",
    "revision": "09420eb46eda131af2f60f3d00410dc3"
  },
  {
    "url": "assets/js/14.66732e98.js",
    "revision": "393d8112bd1bf312f890243a4c43a887"
  },
  {
    "url": "assets/js/15.67b2de15.js",
    "revision": "56df2e1f8295385078760fde46853126"
  },
  {
    "url": "assets/js/16.a232f05a.js",
    "revision": "37d89d2fb2bb04bd057b000d7f166665"
  },
  {
    "url": "assets/js/17.82437df8.js",
    "revision": "27c0309aa5a382f0eff472004880fce3"
  },
  {
    "url": "assets/js/18.f2aeea53.js",
    "revision": "e2973d014a9d047a1ca2e85f80260e9c"
  },
  {
    "url": "assets/js/19.79bca371.js",
    "revision": "65b9fb7afadefde892bb39c18f073fc1"
  },
  {
    "url": "assets/js/2.971ce9e1.js",
    "revision": "2f9c3e8a50ab282d1185b39d98aedfd7"
  },
  {
    "url": "assets/js/20.b5a5a386.js",
    "revision": "262874ea1365bbac9ef1093723ea93ab"
  },
  {
    "url": "assets/js/21.018c86fd.js",
    "revision": "612466f609d57581920deff0672edba9"
  },
  {
    "url": "assets/js/22.6c442bec.js",
    "revision": "aa9b06589fdf9dcdf64f8d160590f07c"
  },
  {
    "url": "assets/js/23.1b80b737.js",
    "revision": "2882580e40d33ec58a62e7ecdaf9e2fc"
  },
  {
    "url": "assets/js/24.83720d23.js",
    "revision": "876a0b2807ac49060bd623ffc7026253"
  },
  {
    "url": "assets/js/25.1e9a8a46.js",
    "revision": "e68be1f98fa1762136b98dc052d58fc6"
  },
  {
    "url": "assets/js/26.0143ae9c.js",
    "revision": "8445c93a1f273b48012e30a8de1395a3"
  },
  {
    "url": "assets/js/27.a8f8f5e9.js",
    "revision": "184a291f86abdc6e09c494401711d0dc"
  },
  {
    "url": "assets/js/28.54f7a018.js",
    "revision": "712a971b764dfd6c0bc7e1688c7ec106"
  },
  {
    "url": "assets/js/29.27b814e2.js",
    "revision": "3923e08557539634f6e161f86623e982"
  },
  {
    "url": "assets/js/30.7646112e.js",
    "revision": "b7d4c829e98473eccd49ca313b4b2e78"
  },
  {
    "url": "assets/js/31.4911e9b4.js",
    "revision": "c4b68431fa14bcee796a628aa08a4f7a"
  },
  {
    "url": "assets/js/32.8cc4ea49.js",
    "revision": "0058ee2868d38ca5adbe12f3cd00fde2"
  },
  {
    "url": "assets/js/33.b527fa32.js",
    "revision": "e8a8d30dbdc65de445d10fe35a3eb295"
  },
  {
    "url": "assets/js/34.39b1e8fb.js",
    "revision": "ba2352437bbb9f9569b5631ca60be194"
  },
  {
    "url": "assets/js/35.338b19e6.js",
    "revision": "519d1497e2f996dd14e0938ea7ee4f27"
  },
  {
    "url": "assets/js/36.fbd28278.js",
    "revision": "31c535036d6f08b63247b06b52cf1862"
  },
  {
    "url": "assets/js/37.7e79d6c4.js",
    "revision": "31c5be450253acc5dba5bafc574eb143"
  },
  {
    "url": "assets/js/38.da6d282a.js",
    "revision": "e14da640e557387503e54f5e5967b9ed"
  },
  {
    "url": "assets/js/39.5af3830d.js",
    "revision": "2e6139629691485451d7861b1da220fc"
  },
  {
    "url": "assets/js/40.fac0b9fc.js",
    "revision": "214fae45594bfb4918e3edd006aece89"
  },
  {
    "url": "assets/js/41.e6398707.js",
    "revision": "f498b21121956095779264c0e3d7a0b0"
  },
  {
    "url": "assets/js/42.287ffb86.js",
    "revision": "80c1c27c5dcd2880b6c46ac4ede95ce0"
  },
  {
    "url": "assets/js/43.7d0223f5.js",
    "revision": "54a12db36d21c2062c51a83384c419b5"
  },
  {
    "url": "assets/js/44.abfebc6a.js",
    "revision": "080afc5ea658832432fa06b658d3dbcb"
  },
  {
    "url": "assets/js/45.1d927e3e.js",
    "revision": "921a0316291a40636e4153eb7aa91a78"
  },
  {
    "url": "assets/js/46.9857a8b3.js",
    "revision": "c8ba1d8f3f03373b0265c732022008df"
  },
  {
    "url": "assets/js/47.716b7e19.js",
    "revision": "5b666bf834304160bf1904615a6b5cee"
  },
  {
    "url": "assets/js/48.d8da0861.js",
    "revision": "ef92e51e5ced9bbee4d9b3ce9fb535c9"
  },
  {
    "url": "assets/js/49.73fab5da.js",
    "revision": "b2f2cb46afbb546660ed93381fade05c"
  },
  {
    "url": "assets/js/5.24a3a39e.js",
    "revision": "6429596033f16e366b00fd5a608f577f"
  },
  {
    "url": "assets/js/50.3244e92b.js",
    "revision": "c389d9dbc603921e326abe64d4d90f97"
  },
  {
    "url": "assets/js/6.7973372d.js",
    "revision": "1b3d208cd2a009d19f18f81e4c2868cb"
  },
  {
    "url": "assets/js/7.c4457d7f.js",
    "revision": "4c7d19a78da1eea3a61435ed7d2e0d4d"
  },
  {
    "url": "assets/js/8.296f092c.js",
    "revision": "fc931932e64f8a17a630e2910f5b79ea"
  },
  {
    "url": "assets/js/9.e729d67f.js",
    "revision": "7dbd2719779a9b47eea8d38dafb5aa11"
  },
  {
    "url": "assets/js/app.bbad1380.js",
    "revision": "5eed9eabb44e403fa1fff9f804027bd5"
  },
  {
    "url": "composable/_template.html",
    "revision": "f09ca0f7010fa7a62cc855b851a41aa7"
  },
  {
    "url": "composable/event/event.html",
    "revision": "699e014673b7ec311ca2d0e3a6f68bda"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "714bd59d7ca2a9191ce8401bbc58c8a4"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "d2777c83106ada2cb5a544db211ec991"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "6c3b95fee55d8c07d7bfbf6687da5f1b"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "01202dd5ef2a043644e4c2301f753ae0"
  },
  {
    "url": "composable/index.html",
    "revision": "c1b62fa529653f6f06b5c87409612360"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "9af102103cf51f1f58fe6bd7a9e04a19"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "039ed8afa0678a53d8627d1ca2e21e95"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "b2e0c7bb00781d2b0ff8351336a644e8"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "922d53b2da41bb2c808ac76d5ce812bd"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "ef4cf9a352cece83a9667392456e282c"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "e316635a83ae51032bce88834d368049"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "ff1f8304f397f5c23d621d8c3ebb9a28"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "6797235f45ed7ca234f7661e565ea834"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2905d99cb93044659a5a5c4982af4d76"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "a916e1c76a78b6d305e1ee60d7fb321c"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "e16c59497233eda525717cb33d33cdc8"
  },
  {
    "url": "composable/web/online.html",
    "revision": "cd8b6dba49cc8630f3b54ec2cf43e1a2"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "7391b76d1a3a84e6db4078faddb81279"
  },
  {
    "url": "Examples/index.html",
    "revision": "993d381723cea9009f7826b2178b9587"
  },
  {
    "url": "index.html",
    "revision": "626d14b70fbc562e3b361ea1bdd32b1d"
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
