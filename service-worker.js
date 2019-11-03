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
    "revision": "f78a629cac656d1807538e472486a410"
  },
  {
    "url": "assets/css/2.styles.13d47056.css",
    "revision": "437f228b8127876a67f1dfc272104dc0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.103803c4.js",
    "revision": "bcd1c3387c6f6c4ba0f702982729832d"
  },
  {
    "url": "assets/js/1.5c9c370f.js",
    "revision": "8e5e2d8ee15f91caba482cd2eb95fca1"
  },
  {
    "url": "assets/js/10.d674643d.js",
    "revision": "eac7f940127c890f88a2efe387d53d58"
  },
  {
    "url": "assets/js/11.9f88cb73.js",
    "revision": "7b8e214a92c5ba62fd0c7162bb4389f3"
  },
  {
    "url": "assets/js/12.088c7b03.js",
    "revision": "85864cf34b949df6a9a377b7d3c6d3ef"
  },
  {
    "url": "assets/js/13.354dbaca.js",
    "revision": "a619b8e82c83d59f184c6c8f772b3e04"
  },
  {
    "url": "assets/js/14.9b1dcaee.js",
    "revision": "921a5ed6128cb15b92116e788b00be60"
  },
  {
    "url": "assets/js/15.8088d6b0.js",
    "revision": "37564807db44d336cd5ded89e3735bd5"
  },
  {
    "url": "assets/js/16.8b301de3.js",
    "revision": "489fbc72ac0de5e133ef2dca4b8b1295"
  },
  {
    "url": "assets/js/17.dafe6a3f.js",
    "revision": "67d680eec81c1760a6d695a8aa0e620b"
  },
  {
    "url": "assets/js/18.b658cf55.js",
    "revision": "e0d05eb4452d6ea3cf18bf6677140538"
  },
  {
    "url": "assets/js/19.ddf8a895.js",
    "revision": "afd4707348959524172eddbaecc4b354"
  },
  {
    "url": "assets/js/20.5b3c4797.js",
    "revision": "d2ea79a4f3b1cd985a503550765827fe"
  },
  {
    "url": "assets/js/21.6254214f.js",
    "revision": "d47152878966cebd184d3b14a0f8524f"
  },
  {
    "url": "assets/js/22.1514367e.js",
    "revision": "1ce638a58517a7431578d1e7565dd373"
  },
  {
    "url": "assets/js/23.4a2e9cf2.js",
    "revision": "81405060efabb6a865fe7b12210da30e"
  },
  {
    "url": "assets/js/24.1804db4a.js",
    "revision": "dbf1740c5af0e1113501a200a473a84a"
  },
  {
    "url": "assets/js/25.ad0857d5.js",
    "revision": "8d31b8823482ae4f5bf7e46fb076f126"
  },
  {
    "url": "assets/js/26.f276f478.js",
    "revision": "a22d598d977ae09efbdb9d56559173ca"
  },
  {
    "url": "assets/js/27.4f4fd273.js",
    "revision": "eca4daba107e499ae084f2bcc28af2bd"
  },
  {
    "url": "assets/js/28.8b9b2471.js",
    "revision": "392a95138c98ba4b4582a2fc5d8bbde0"
  },
  {
    "url": "assets/js/29.46b7a91f.js",
    "revision": "029c3ab724e01d813d515f1e3eb58603"
  },
  {
    "url": "assets/js/30.f9349814.js",
    "revision": "fe01857995fb9ecf53835ca5d0865be0"
  },
  {
    "url": "assets/js/31.d0c4882c.js",
    "revision": "b043f88b455964b354f27a81b9fc0b2a"
  },
  {
    "url": "assets/js/32.2fd1abd1.js",
    "revision": "5c322e80c6adac6b43b5e716ba99d60f"
  },
  {
    "url": "assets/js/33.3084e632.js",
    "revision": "495a994a87c1307c80ce54caddbdd035"
  },
  {
    "url": "assets/js/34.b1b9d392.js",
    "revision": "6db6612288e425508c92df9e6fd77399"
  },
  {
    "url": "assets/js/35.754d4c90.js",
    "revision": "c9c1cd15da3a88811dbe4c00e7ecb347"
  },
  {
    "url": "assets/js/36.2f4307d4.js",
    "revision": "7f179fd1fe0d9ae5161371f6f1d5c6ca"
  },
  {
    "url": "assets/js/37.9fa8751f.js",
    "revision": "4dc22be9f77abe752194a3d22a71034e"
  },
  {
    "url": "assets/js/4.6a03ecf5.js",
    "revision": "cde4f699d79cfc4d8a09fe55b3b25b7c"
  },
  {
    "url": "assets/js/5.507ba376.js",
    "revision": "d46851924222b614067bd834216ea078"
  },
  {
    "url": "assets/js/6.093b3d0a.js",
    "revision": "500e60f92460f9035605eaf3bc50f114"
  },
  {
    "url": "assets/js/7.3bb5648b.js",
    "revision": "45098839a1dc80946d153d5327da7863"
  },
  {
    "url": "assets/js/8.586ef5ae.js",
    "revision": "5c3104fccd16e0241384ced3b4bbb759"
  },
  {
    "url": "assets/js/9.9071d367.js",
    "revision": "bf1ae70a0a678b2aa31754f94762074f"
  },
  {
    "url": "assets/js/app.053de1ff.js",
    "revision": "a06ca1bafbb678fe55a0c20ec2e28a4b"
  },
  {
    "url": "composable/_template.html",
    "revision": "ae3311d2747998e5accaf723b9d188f6"
  },
  {
    "url": "composable/event/event.html",
    "revision": "7a4016b17e5bd71c7eca9aeba4b675b5"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "513b9ac58fe92a7983453b63ae1ec79c"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4c1e708639e5a03ce77da09e288a30fd"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "51c751def28c593cd7cb81ccfaf3180b"
  },
  {
    "url": "composable/index.html",
    "revision": "3689219bf46def7f71228d4c22e1896a"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "bd3e9db9d0118d3575e5294c586af503"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "001473a5206fa9336557d3c3de9bc3e7"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "3f2e0fd0f21d4fe95c6af5f21c63f34b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "c3060589eb712a1d3829e9c4a08c53c0"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "67bb063031f4c8125202c9ff1a647c92"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "7f4c5a4199dda1084bd8390039708b80"
  },
  {
    "url": "composable/web/axios.html",
    "revision": "0e1d40ec052b714e5a6ee81a4f668387"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2eabda2f4ce3c7ab1a56747ee2b1eb6c"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "563c306ed784a962a115e1adc417bb53"
  },
  {
    "url": "index.html",
    "revision": "767b2a37c6e87c041fb2a9c69ccc8e23"
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
