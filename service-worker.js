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
    "revision": "f5a5d1a467781d0540e8f6e9231b5308"
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
    "url": "assets/js/11.e80c10cc.js",
    "revision": "c7ed35cc99f21e08949d94a9ee72dfbe"
  },
  {
    "url": "assets/js/12.67d513a8.js",
    "revision": "3443e4fc4dbbbc16feb9f9c83829f450"
  },
  {
    "url": "assets/js/13.2874b79b.js",
    "revision": "09420eb46eda131af2f60f3d00410dc3"
  },
  {
    "url": "assets/js/14.5c96adb8.js",
    "revision": "393d8112bd1bf312f890243a4c43a887"
  },
  {
    "url": "assets/js/15.6ec48de0.js",
    "revision": "56df2e1f8295385078760fde46853126"
  },
  {
    "url": "assets/js/16.bd25d452.js",
    "revision": "37d89d2fb2bb04bd057b000d7f166665"
  },
  {
    "url": "assets/js/17.fcbc14b7.js",
    "revision": "27c0309aa5a382f0eff472004880fce3"
  },
  {
    "url": "assets/js/18.e52b0e2b.js",
    "revision": "e2973d014a9d047a1ca2e85f80260e9c"
  },
  {
    "url": "assets/js/19.3067f7cf.js",
    "revision": "65b9fb7afadefde892bb39c18f073fc1"
  },
  {
    "url": "assets/js/2.9cd47a65.js",
    "revision": "d21add11a62ab59934cc09d7724550ef"
  },
  {
    "url": "assets/js/20.64df5a5f.js",
    "revision": "262874ea1365bbac9ef1093723ea93ab"
  },
  {
    "url": "assets/js/21.15b69b6b.js",
    "revision": "612466f609d57581920deff0672edba9"
  },
  {
    "url": "assets/js/22.962f81a1.js",
    "revision": "aa9b06589fdf9dcdf64f8d160590f07c"
  },
  {
    "url": "assets/js/23.3f463310.js",
    "revision": "2882580e40d33ec58a62e7ecdaf9e2fc"
  },
  {
    "url": "assets/js/24.12bf8afd.js",
    "revision": "cb5e480bf5de56b990d0142ebb75ec19"
  },
  {
    "url": "assets/js/25.7fecd95e.js",
    "revision": "42e0262425a149418012138072306f3f"
  },
  {
    "url": "assets/js/26.6d905229.js",
    "revision": "c2ad01fdc2995d0dfd17a551abe60143"
  },
  {
    "url": "assets/js/27.cfd30575.js",
    "revision": "9ccaf275a37d443611608c645f307e32"
  },
  {
    "url": "assets/js/28.8b0ae278.js",
    "revision": "a590f696d8d157b1a5f78b811fdff7f2"
  },
  {
    "url": "assets/js/29.1cb5cd7b.js",
    "revision": "4c0c228ec6a93fd68b9868ba6e52f76f"
  },
  {
    "url": "assets/js/30.6d31938d.js",
    "revision": "a23abddfcd50132fda6cead54353a05d"
  },
  {
    "url": "assets/js/31.0113f6a3.js",
    "revision": "aeb7b6311e8a2e4d87bb7c6c46986ac7"
  },
  {
    "url": "assets/js/32.e365fa57.js",
    "revision": "433be1626eda4b7acd8ef949e562bc7a"
  },
  {
    "url": "assets/js/33.44639b20.js",
    "revision": "a978f71a0804353079342bec439b2931"
  },
  {
    "url": "assets/js/34.611f1f73.js",
    "revision": "5fe51039734c8951be82eef745fd62fb"
  },
  {
    "url": "assets/js/35.18406544.js",
    "revision": "0b19081c877219af6eb4299e00b8d908"
  },
  {
    "url": "assets/js/36.65310cba.js",
    "revision": "0166506223a848ad7862cc36c841c3f0"
  },
  {
    "url": "assets/js/37.daa95ed5.js",
    "revision": "24cd6ea4b9234a3217a0d411c6bc78c0"
  },
  {
    "url": "assets/js/38.43bf47e8.js",
    "revision": "7e1669f0c20bad017416e80d9e9751c1"
  },
  {
    "url": "assets/js/39.45ed8e66.js",
    "revision": "db15eafb4e9fe4cbe8aadc57d80b54d2"
  },
  {
    "url": "assets/js/40.c6d5013b.js",
    "revision": "cfc1d96ad36776fb954bb8ecc998c34c"
  },
  {
    "url": "assets/js/41.2a804e66.js",
    "revision": "0c283bd7b7f73abc4e73c02a822ab592"
  },
  {
    "url": "assets/js/42.b16da56d.js",
    "revision": "a18e2faaa0d704cae4a08f5067c68f87"
  },
  {
    "url": "assets/js/43.43018a99.js",
    "revision": "f746a769ffa87f2706e915ccafea904a"
  },
  {
    "url": "assets/js/44.62838f55.js",
    "revision": "17bfe0d3493716a9e1b5a50f48785e3d"
  },
  {
    "url": "assets/js/45.7c7093cb.js",
    "revision": "c5442447d3a086b123ed7f65b869c50f"
  },
  {
    "url": "assets/js/46.1a9c77f0.js",
    "revision": "ca3b59c28e1b03c7442655dd9d58c235"
  },
  {
    "url": "assets/js/47.473d94be.js",
    "revision": "9b3d6ae6c6c3e5b34743c9bfcf1d4c38"
  },
  {
    "url": "assets/js/48.975cb688.js",
    "revision": "1a415a714fe479df56757eac8834bb28"
  },
  {
    "url": "assets/js/49.10f39a1f.js",
    "revision": "c29e41d689698140108efa9bfa3133ce"
  },
  {
    "url": "assets/js/5.24a3a39e.js",
    "revision": "6429596033f16e366b00fd5a608f577f"
  },
  {
    "url": "assets/js/50.c3c1c6a1.js",
    "revision": "d86a5faacb9d3bfe99340556aa5f3239"
  },
  {
    "url": "assets/js/51.9c2f8597.js",
    "revision": "e791c1e1f7bc269e446efc8d40935339"
  },
  {
    "url": "assets/js/52.d6b532da.js",
    "revision": "00c38c136de9dd45e044240475bb6160"
  },
  {
    "url": "assets/js/6.7973372d.js",
    "revision": "1b3d208cd2a009d19f18f81e4c2868cb"
  },
  {
    "url": "assets/js/7.8b95f1e4.js",
    "revision": "4c7d19a78da1eea3a61435ed7d2e0d4d"
  },
  {
    "url": "assets/js/8.5cad0d6d.js",
    "revision": "fc931932e64f8a17a630e2910f5b79ea"
  },
  {
    "url": "assets/js/9.1d9720a3.js",
    "revision": "689f14850aef117ac3beebaeb36aa68c"
  },
  {
    "url": "assets/js/app.d231b5a3.js",
    "revision": "debdd779e1a19bc50115bffcf3c5d442"
  },
  {
    "url": "composable/_template.html",
    "revision": "e3fe74236f58dc0844c8725194a622b2"
  },
  {
    "url": "composable/event/event.html",
    "revision": "5d9c128aff1f463c2437eb77171f826a"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "545baa576f0ec6cbfd5278280d2b46ce"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "1335f5e88e5cbf3a15a6f9e6eb836e6e"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "3715b65cc4c8ad8f69d5e1853750e3c1"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "0673fdb43821dc3dc99cf35297fb9dd7"
  },
  {
    "url": "composable/index.html",
    "revision": "d0a3c6c0af10c27e355cd6798f145911"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "f988debadc380135f9e36bf880c70644"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "8c0756dd30df2c252275dc478f381b35"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "62aee7aeebdfba5b520ee9a6bbf90234"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "4998c2e0fc920bb55fada41f1796524c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "f01282a84feac68a08e4199c64d1033e"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "173b633951b2efe6055fbb9146f4567b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "e641aa265854e70caff2b9024e9c2a6f"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0772d8a4266cdd4640166e5cc4445ec8"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "16acd00728bee0f64d8702a3b4a8ecf0"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "febcdf39220c171eda340a3f69c1d235"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "2d0b56d36fc07846256f366f57a13c95"
  },
  {
    "url": "composable/web/online.html",
    "revision": "993cc687d01a91d0ffd3969dcd052bc1"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "b33e455479d821c9eda1bc23a7088adb"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "2949a322dd71fb7f9a6c349aa291a5ad"
  },
  {
    "url": "Examples/index.html",
    "revision": "41a879e7266c1f849807e0b2489f8b2c"
  },
  {
    "url": "index.html",
    "revision": "d7d67d15a94f893cb73de8bd9f737d73"
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
