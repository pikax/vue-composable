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
    "revision": "bd0801388d961254a0806db8a0047508"
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
    "url": "assets/js/10.81b001f0.js",
    "revision": "5196d4d8c4d05177da12f249a2f338de"
  },
  {
    "url": "assets/js/11.128b333c.js",
    "revision": "6a565eec8b9f336a7d8d518e3244ed80"
  },
  {
    "url": "assets/js/12.61a411f7.js",
    "revision": "85864cf34b949df6a9a377b7d3c6d3ef"
  },
  {
    "url": "assets/js/13.cdfad095.js",
    "revision": "ac58dcef422d21e6b1fa1934c2f4e88a"
  },
  {
    "url": "assets/js/14.a0908a5f.js",
    "revision": "c636bf3da044f2a9a967044e8e0c3f92"
  },
  {
    "url": "assets/js/15.c44f737c.js",
    "revision": "37564807db44d336cd5ded89e3735bd5"
  },
  {
    "url": "assets/js/16.cfd14390.js",
    "revision": "47ece3f270914a6a708ebba9cda7da7a"
  },
  {
    "url": "assets/js/17.533cc2c5.js",
    "revision": "67d680eec81c1760a6d695a8aa0e620b"
  },
  {
    "url": "assets/js/18.146777e8.js",
    "revision": "e0d05eb4452d6ea3cf18bf6677140538"
  },
  {
    "url": "assets/js/19.778841fa.js",
    "revision": "afd4707348959524172eddbaecc4b354"
  },
  {
    "url": "assets/js/20.5b3c4797.js",
    "revision": "d2ea79a4f3b1cd985a503550765827fe"
  },
  {
    "url": "assets/js/21.4d4e39da.js",
    "revision": "839ec9b2f4eb5eb347d3746ffb096322"
  },
  {
    "url": "assets/js/22.61a0a40b.js",
    "revision": "033574c07b32f2a265ce70c25ef27813"
  },
  {
    "url": "assets/js/23.d7825a1c.js",
    "revision": "6e52a2999966eb56f871176044b4143d"
  },
  {
    "url": "assets/js/24.64d9ca36.js",
    "revision": "39cfefaf49c9190e6a807fa8fc36a1fe"
  },
  {
    "url": "assets/js/25.67d6dde7.js",
    "revision": "431a12bf809962c732f0953e3f91e6f3"
  },
  {
    "url": "assets/js/26.23e9feb4.js",
    "revision": "e6fb01de32c8be37245c0440ee565781"
  },
  {
    "url": "assets/js/27.dac92a7b.js",
    "revision": "bbbcd3a02b9af794eb9f60964a987e51"
  },
  {
    "url": "assets/js/28.5796e28a.js",
    "revision": "43cff4fac3b42a9165c6d5839fe7b5c8"
  },
  {
    "url": "assets/js/29.d749ed08.js",
    "revision": "c96124cc7731a1bc95df45db8319f630"
  },
  {
    "url": "assets/js/30.6b671780.js",
    "revision": "eccfb165bf6bdf664fa98cd8ac29afb7"
  },
  {
    "url": "assets/js/31.35ea1df1.js",
    "revision": "7dab3d18431c99aab7df908bb2a7f5c0"
  },
  {
    "url": "assets/js/32.f1f07d4f.js",
    "revision": "7b230e05fce934f6bfda5840bf24a843"
  },
  {
    "url": "assets/js/33.43fab74b.js",
    "revision": "df52e2037b9812f8df8e637fed8e4141"
  },
  {
    "url": "assets/js/34.7a706be8.js",
    "revision": "dee7dd4878698a1f0280cbd80af418b2"
  },
  {
    "url": "assets/js/35.3ebea17d.js",
    "revision": "ea4964728a33ff35042df7bca86e6116"
  },
  {
    "url": "assets/js/36.edbacbeb.js",
    "revision": "a89bbf148e5095b6cd66bee6ecb9a4f9"
  },
  {
    "url": "assets/js/37.9fa8751f.js",
    "revision": "4dc22be9f77abe752194a3d22a71034e"
  },
  {
    "url": "assets/js/4.d16c48fc.js",
    "revision": "cde4f699d79cfc4d8a09fe55b3b25b7c"
  },
  {
    "url": "assets/js/5.bb7a242b.js",
    "revision": "d46851924222b614067bd834216ea078"
  },
  {
    "url": "assets/js/6.1f6891e2.js",
    "revision": "1229e48f71f8e3125ee4190c08578b93"
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
    "url": "assets/js/9.8c47bcc4.js",
    "revision": "bf1ae70a0a678b2aa31754f94762074f"
  },
  {
    "url": "assets/js/app.d9dfe5a5.js",
    "revision": "fc3783ab5c4b78e89ba7a1c18a7189ea"
  },
  {
    "url": "composable/_template.html",
    "revision": "c12dbebe841f42d95f8c358805574668"
  },
  {
    "url": "composable/event/event.html",
    "revision": "421c5ce47305b737aeb1dd92f427e08f"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "c8060d664c8b7ccc8a442df55d52e219"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "a3a9309c33e8a9abdcc9e65f7ee5b6ac"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "1c2532693c66d12bb90de0495c1df15a"
  },
  {
    "url": "composable/index.html",
    "revision": "acdf2c35f58b657b8ea00b7fb7889f5a"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "ec8f05631e7ddde715acfe152fe9005e"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "649a607a6603c532dc78500e244dc09b"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "566b4e63567ea7fcc395b34ef11a75e6"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "d529b7850c707c0349bf8e61cb8ba127"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "394e2530172f9365c34ee935c23c438b"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "6ce9f2a0d868b7aefe694bc7ba3da7f7"
  },
  {
    "url": "composable/web/axios.html",
    "revision": "024144a40b334809dddb767f9cbfca1b"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "fa6c37c03e2f788bf307131518ae5227"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "ad16b07d9d8c3cfa8e5226c3949731ae"
  },
  {
    "url": "index.html",
    "revision": "907d6fa94afd0a8fbcee7bbded4db083"
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
