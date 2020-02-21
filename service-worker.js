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
    "revision": "210527464a40bc5b175fe7accdd43673"
  },
  {
    "url": "api/axios.api.html",
    "revision": "28072d8e00abed60f9637a57c0a52a03"
  },
  {
    "url": "api/core.api.html",
    "revision": "4ef93f80718cf9517b7a5dec581722fb"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "2a72d11a16f849f1baf7b952d2d82122"
  },
  {
    "url": "api/web.api.html",
    "revision": "e4fea86e98b4bcfc45f5e3ff8ba67f3f"
  },
  {
    "url": "assets/css/1.styles.8a44ef96.css",
    "revision": "419ace0f1b611952663e4b0922b7a646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.3cff1452.js",
    "revision": "3a015f05464b873256d0cfaa8cbb36c0"
  },
  {
    "url": "assets/js/10.6544fcbb.js",
    "revision": "f0463b37cb479b2e55716ef90defc644"
  },
  {
    "url": "assets/js/11.33c91696.js",
    "revision": "476e968b8a2c1048532ed26f5870d3b3"
  },
  {
    "url": "assets/js/12.d41e811b.js",
    "revision": "53aa8da86e4125876a4e23a5fb359979"
  },
  {
    "url": "assets/js/13.1441d29d.js",
    "revision": "f4bdfcd8272648a8b10c43d4980a4906"
  },
  {
    "url": "assets/js/14.74b764f5.js",
    "revision": "03adc5832f399ff9ec4e93eb9cd0d1a7"
  },
  {
    "url": "assets/js/15.7d722c29.js",
    "revision": "4cd6755337050280e5356a60f7e27347"
  },
  {
    "url": "assets/js/16.0e3b2671.js",
    "revision": "35174b6eff3a6b3ec2d55b26b6ad75d7"
  },
  {
    "url": "assets/js/17.ebf0c639.js",
    "revision": "7f7bb71603ac78a414b7df91a17abc61"
  },
  {
    "url": "assets/js/18.6fc10b05.js",
    "revision": "701bc8b428ec49f8f500f095ee785327"
  },
  {
    "url": "assets/js/19.a676c50e.js",
    "revision": "a065f296917330348070950d69bd8813"
  },
  {
    "url": "assets/js/20.d800a2c2.js",
    "revision": "3deccc4eb814986bb73c088b4b4d247d"
  },
  {
    "url": "assets/js/21.3c1e7a94.js",
    "revision": "af0ec028e6e73882fcd5396897fcf9e5"
  },
  {
    "url": "assets/js/22.6c4f87c6.js",
    "revision": "3807dc5fb4dde2a262d287e3aac1ff82"
  },
  {
    "url": "assets/js/23.fec0e90c.js",
    "revision": "382a93d0843134939b5858c17e68c3df"
  },
  {
    "url": "assets/js/24.0064bebf.js",
    "revision": "f8a966057c491a8ee169c9d5d390a89a"
  },
  {
    "url": "assets/js/25.91ebd154.js",
    "revision": "a9b87e306a92ec7e838198584580d8f6"
  },
  {
    "url": "assets/js/26.fa5165e9.js",
    "revision": "412efac769839b6a73763e81b42d167e"
  },
  {
    "url": "assets/js/27.041074dd.js",
    "revision": "bbe07a2e08df3d4d84766c3be65e7477"
  },
  {
    "url": "assets/js/28.db335fd4.js",
    "revision": "7cd0a9880ab466797468f5ee9e178ff0"
  },
  {
    "url": "assets/js/29.6333bb08.js",
    "revision": "d5476420c6c82db0326477975c56602f"
  },
  {
    "url": "assets/js/3.77841f5a.js",
    "revision": "b9ee5339462599d93b792484361b6f86"
  },
  {
    "url": "assets/js/30.d8b32805.js",
    "revision": "70734138c6839b43e7f5539017e20422"
  },
  {
    "url": "assets/js/31.fd9ef7f9.js",
    "revision": "188809dfee23bbc3aa5295c0c87973d2"
  },
  {
    "url": "assets/js/32.a53499f9.js",
    "revision": "7cb9cf6632df21315a4b68786232a2d2"
  },
  {
    "url": "assets/js/33.bc5eb4bf.js",
    "revision": "dfcfd34ea116e248d30be03600132032"
  },
  {
    "url": "assets/js/34.34b2649a.js",
    "revision": "4e4ca76e5673eccc6b9a609eec831332"
  },
  {
    "url": "assets/js/35.b4317c4e.js",
    "revision": "20e6f5e7ecf0c13817caa2c674b57338"
  },
  {
    "url": "assets/js/36.7fca8848.js",
    "revision": "ad1d2f15adc8d184b14892e984a659dd"
  },
  {
    "url": "assets/js/37.01d2e78b.js",
    "revision": "d24b94abb1ab65183495310b3435e4ea"
  },
  {
    "url": "assets/js/38.e280aa2f.js",
    "revision": "3253f577588ac573c166595075066b9e"
  },
  {
    "url": "assets/js/39.46a1a758.js",
    "revision": "c0509dc1ca7b019861708880baafa9da"
  },
  {
    "url": "assets/js/4.c9f1c01e.js",
    "revision": "0955111984541a6e426d5a305739a7b0"
  },
  {
    "url": "assets/js/40.0d01f0ee.js",
    "revision": "15035d3d055f80f44d8f54ded313d74b"
  },
  {
    "url": "assets/js/41.0283936e.js",
    "revision": "92e88a481956143d160d2873838466b3"
  },
  {
    "url": "assets/js/42.e8e1e159.js",
    "revision": "2335b30c07e6700bedc13abd00916f48"
  },
  {
    "url": "assets/js/43.53ce49cf.js",
    "revision": "76067812b3d68372dbff4e9414c2006d"
  },
  {
    "url": "assets/js/44.1aa112eb.js",
    "revision": "e3e5d2b482acadb044e29428b48e76bb"
  },
  {
    "url": "assets/js/45.6663ad36.js",
    "revision": "0c4f2091d607f8d0dcf0798c3ec1b663"
  },
  {
    "url": "assets/js/46.f05399af.js",
    "revision": "77c704483a9125d1e19a1d6043797a74"
  },
  {
    "url": "assets/js/47.49beb7c2.js",
    "revision": "2a986d29b51fb5a6adb7bf35756cf730"
  },
  {
    "url": "assets/js/48.ec6338f0.js",
    "revision": "e745559739cba6ebe25b11728aeec839"
  },
  {
    "url": "assets/js/49.b5c8f1b5.js",
    "revision": "3293290730094126fa60dda88ef76103"
  },
  {
    "url": "assets/js/5.7c67735e.js",
    "revision": "73141661e87bdf5306ffa3bd11b67f25"
  },
  {
    "url": "assets/js/50.525f0370.js",
    "revision": "7de6b6865877fd1d17e87a0cb8eafa7f"
  },
  {
    "url": "assets/js/51.bea1f6bd.js",
    "revision": "962615e040f6fff4688d439a65c25e0f"
  },
  {
    "url": "assets/js/52.8aa990b2.js",
    "revision": "0be53dea79fbe54570714066c7345d9c"
  },
  {
    "url": "assets/js/53.4f4a7858.js",
    "revision": "62d86099ae350414371264433ccd36bc"
  },
  {
    "url": "assets/js/54.d51f252d.js",
    "revision": "ae4e8b86b199d1db2dfc1f4c7ba4444c"
  },
  {
    "url": "assets/js/55.2daf3141.js",
    "revision": "d369c7109ce3e01fb8758bd9ff993e62"
  },
  {
    "url": "assets/js/56.608f8aa7.js",
    "revision": "6342c3f4e48838c7e210f0421af476c7"
  },
  {
    "url": "assets/js/57.1f1aa6cc.js",
    "revision": "2e37e9200eb1edc2612a002f9a99dc9f"
  },
  {
    "url": "assets/js/58.cb828a2d.js",
    "revision": "517b0a7ee49d60e93bd7ff518eaf7f1d"
  },
  {
    "url": "assets/js/59.54917088.js",
    "revision": "f92ee17c8b28effbacf0a2838aa12017"
  },
  {
    "url": "assets/js/6.35a24916.js",
    "revision": "ca93f81c6b40377c52e3a55ab8e1e56f"
  },
  {
    "url": "assets/js/60.1e39a8b3.js",
    "revision": "309ae662caf255e794758c245fe1ed78"
  },
  {
    "url": "assets/js/61.902dc37f.js",
    "revision": "115ed5d67f4e6fb3282fe999b5932815"
  },
  {
    "url": "assets/js/62.88286168.js",
    "revision": "33762a4eb64b4c586413b68a3a4a55eb"
  },
  {
    "url": "assets/js/63.be62451e.js",
    "revision": "d42260e4fb3d20249de501ef4a24871e"
  },
  {
    "url": "assets/js/64.350f2aed.js",
    "revision": "26aa8aadbc08c35c23527df5a6974db6"
  },
  {
    "url": "assets/js/65.a13b9a9b.js",
    "revision": "99d1ec829d9c754c7398a9058f18ea2a"
  },
  {
    "url": "assets/js/66.c8f03a50.js",
    "revision": "a1594d6c01510a36805aaa0a7bee1dce"
  },
  {
    "url": "assets/js/67.e6bc93ec.js",
    "revision": "de4a1f0dcb8cc8a3a19b2a3dbbbcc117"
  },
  {
    "url": "assets/js/68.88bab70b.js",
    "revision": "55a9a9e216b584a7152ae9c8a227200d"
  },
  {
    "url": "assets/js/69.03de1ff7.js",
    "revision": "aceafce1c7ea34d96a18e0f131ba917b"
  },
  {
    "url": "assets/js/7.ea93c553.js",
    "revision": "0fbe4f1120e7f040a03403b0e5559c2d"
  },
  {
    "url": "assets/js/70.2d43b3f6.js",
    "revision": "7aaa22168f66bf3080ff62b03deb0e6c"
  },
  {
    "url": "assets/js/71.0538c513.js",
    "revision": "d5c0d876949ac15c1bf2727acf0b84ef"
  },
  {
    "url": "assets/js/72.fe357e8f.js",
    "revision": "9d396f9d9d4a9b3952c7ec507055829c"
  },
  {
    "url": "assets/js/73.ed583c48.js",
    "revision": "fbaeb9e5192ec5f6a3b0ade781046bf4"
  },
  {
    "url": "assets/js/74.217bd66c.js",
    "revision": "038e270815002ac981682891d7a5a3b3"
  },
  {
    "url": "assets/js/75.ba2132d1.js",
    "revision": "0de25ff5133cdb0c0dfc40278e44dc4a"
  },
  {
    "url": "assets/js/76.9b820adb.js",
    "revision": "5e6920ce203319ef5d12ba4e1c928da9"
  },
  {
    "url": "assets/js/77.a9cb250d.js",
    "revision": "93d288638a3c4a7fb3f167f67746d37e"
  },
  {
    "url": "assets/js/78.958a68d7.js",
    "revision": "0076a45092e8b18782684de8767d3841"
  },
  {
    "url": "assets/js/79.b036eb5b.js",
    "revision": "a6cff33e0ab87d0cc95a5b9c3525a06a"
  },
  {
    "url": "assets/js/8.282e8e1e.js",
    "revision": "a725728becbcd1eaa2091af65d497c5f"
  },
  {
    "url": "assets/js/80.7ad6795d.js",
    "revision": "ef2bc2d9f1137efa09b6d237587c05ea"
  },
  {
    "url": "assets/js/81.4090a02e.js",
    "revision": "359be4a0d8d72262d0216d31eb586526"
  },
  {
    "url": "assets/js/9.6194b98d.js",
    "revision": "a81080e74c005b71d2d8073922f954db"
  },
  {
    "url": "assets/js/app.ac73ed74.js",
    "revision": "574ae8f6609ced57e7938b94cdefbdeb"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "a19dbaad9c6685d5e2870cbf2aef1f98"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "9b65369a5aaa292dc7959d7ce668ad41"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "b2ba6b1d08ee116b11ee3f4452cbfd36"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "8b68afda659ec79bf59ef0e28b5593ac"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "fc27a3ad91c8fa675f13672b4f5abd62"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "be76b805c8634c08e4e5de5f12b3c87f"
  },
  {
    "url": "composable/date/now.html",
    "revision": "5298ef440c5208baded5e60585a0f481"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "d9cc358133fbbb7dd78abb9a28f27626"
  },
  {
    "url": "composable/event/event.html",
    "revision": "1f945e7b578cd677b8406771f94cb943"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "07bb8f8212f1a8aae3f5011dac0ea6cf"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "8998abaaf6aa27e54e0bfe2f7f5831b1"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "b6bd33362418a229f9e9aa591fd5f71f"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "25a87fcd1ccaba04aa1a5a8e99731488"
  },
  {
    "url": "composable/format/format.html",
    "revision": "3758c2542efa90399a922784537f4f12"
  },
  {
    "url": "composable/index.html",
    "revision": "089ed68e75fc8124b35fcf92ff122a4b"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "36a148f7aa2f569d4c79cf88f22f9ebe"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "fd5a7a67d7be47bf9513eda306fea0f6"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "bee777ccdd5ac53e128533788d517305"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "b7e9576b3e4147c3de147225e46b30f9"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fb18f79df7a2a824f9b647b1e5dff7d7"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "90915c1e765aaa41bb5317a95f8f4357"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "e2ffcb102639f3dd95a9441ab1c711ae"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "03d34d7864e0d6abdaeb69e82d862fe9"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "e20023585c455851d0959235ab0c425b"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "2b0c805dd752f86ac9ea1d8657e7d55f"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "0b367ad5b53921ead24cd4a628ad3aa0"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "aa469f0ae39b2204eb718b2b83877f39"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "64bbba2398ddabd09bc62276bb75c4df"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "ef2683b7d76298ed86a6e7db15889c41"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "5d8c75c862d8f907807ce38798cd3677"
  },
  {
    "url": "composable/web/language.html",
    "revision": "0daea6046a811b69d6e31dda3386a7bc"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "ab07362067ff03a94e000308ef7f0d97"
  },
  {
    "url": "composable/web/online.html",
    "revision": "4ed2c310c77755c06c3758f67820a5fd"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "638868627d33548f288692559ac7ff87"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "8a74596a5c11dc3bcbfe82514b73a557"
  },
  {
    "url": "Examples/index.html",
    "revision": "bc7695cfbae607c7f02d0c2ddb474bd8"
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
    "revision": "85246d5cb5a3e45309693c467eb9abeb"
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
