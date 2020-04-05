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
    "url": "api/axios.api.html",
    "revision": "7941112cb8b81cc8053eca3aeae5259d"
  },
  {
    "url": "api/core.api.html",
    "revision": "755833a440c7d0bbf8c0b3f627414e06"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "cc397ea03ec1df47f2e589102a1d2d40"
  },
  {
    "url": "api/web.api.html",
    "revision": "3c9aa310c6a77231c80f7656435627e2"
  },
  {
    "url": "assets/css/2.styles.dce03dc8.css",
    "revision": "e4c0716c64420de1f2821532a714074b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.c274f465.js",
    "revision": "dd326b5f794e852b57ee4098f5cda466"
  },
  {
    "url": "assets/js/1.ca950826.js",
    "revision": "892529e90e855db9592491a5faf5495d"
  },
  {
    "url": "assets/js/10.f399b00f.js",
    "revision": "43a8321f1d6ec7e45aca843c2c4df982"
  },
  {
    "url": "assets/js/11.9d6edd97.js",
    "revision": "36d5e98ab462b291a24e03313451c1fe"
  },
  {
    "url": "assets/js/12.0a3caa3a.js",
    "revision": "bb4ac005d22c0de703e1b559167ce354"
  },
  {
    "url": "assets/js/13.7d27bd82.js",
    "revision": "ec0b52ca7e95049618ab9e6353e83626"
  },
  {
    "url": "assets/js/14.83ef02a6.js",
    "revision": "1683652cc4f3dfee0f037bea18bb5c8d"
  },
  {
    "url": "assets/js/15.ad5463e9.js",
    "revision": "e4990029bbeb3ac7ec5d1c8cc6bf0a32"
  },
  {
    "url": "assets/js/16.0ad12445.js",
    "revision": "122d6b7f98b6d80aa8b73e89582f43c9"
  },
  {
    "url": "assets/js/17.4742232d.js",
    "revision": "ac4fa1f199ae4ba0573a5f7cae59919a"
  },
  {
    "url": "assets/js/18.c44705c3.js",
    "revision": "4fa2b32453d76362bf04f8b561d13aa5"
  },
  {
    "url": "assets/js/19.a857d651.js",
    "revision": "f04452880ba2a22e89ce347e2feac654"
  },
  {
    "url": "assets/js/20.3bb54cf6.js",
    "revision": "a612143f03de03bb9e9a326a780918ae"
  },
  {
    "url": "assets/js/21.2db5de27.js",
    "revision": "d0274bd4b161fcbd61edaa586bbd81c2"
  },
  {
    "url": "assets/js/22.3dee2786.js",
    "revision": "6ccce9cb1e7cc3cf1d3f9fe7d96f5bac"
  },
  {
    "url": "assets/js/23.5c38fc55.js",
    "revision": "5fe1acae6fca54a1d02835f265d065c7"
  },
  {
    "url": "assets/js/24.fe756c9a.js",
    "revision": "fe6b68df11179eba467a0df9c1123434"
  },
  {
    "url": "assets/js/25.ac0436ec.js",
    "revision": "b331df43ced73fe58295b0ddff84a2c0"
  },
  {
    "url": "assets/js/26.3d0af16f.js",
    "revision": "fef048cd3cc985835a949db3f31fb7be"
  },
  {
    "url": "assets/js/27.bd219a40.js",
    "revision": "1cc54d36613cf46157368a15eeb61d8e"
  },
  {
    "url": "assets/js/28.82cd2a0f.js",
    "revision": "47b6d797c57fde4d4dec6458a54c2e59"
  },
  {
    "url": "assets/js/29.7d164dfa.js",
    "revision": "72fe22a4750f8a8f110b719b7f39e645"
  },
  {
    "url": "assets/js/30.3276524c.js",
    "revision": "f5ebce8a7dbf1db0b828d1fcfad0f6a0"
  },
  {
    "url": "assets/js/31.6dba53cb.js",
    "revision": "3dd1bd9a5081f15baef07d03d1a93c4a"
  },
  {
    "url": "assets/js/32.845a1af1.js",
    "revision": "f6cfbbccf4f92db085f74296c551493f"
  },
  {
    "url": "assets/js/33.02d7c898.js",
    "revision": "08f1f2de2a8beeacaccf4775d06a983f"
  },
  {
    "url": "assets/js/34.66477667.js",
    "revision": "52c5928de7748c767ff5acd1660c0b69"
  },
  {
    "url": "assets/js/35.7e77764d.js",
    "revision": "e7990d86fd8aad162a20b7e7c2976405"
  },
  {
    "url": "assets/js/36.37e00347.js",
    "revision": "2fb074cedc7643b8acdb2ea248f843d7"
  },
  {
    "url": "assets/js/37.3a97e335.js",
    "revision": "bc5e0b144a56717278aff63011b000ee"
  },
  {
    "url": "assets/js/38.b835936b.js",
    "revision": "8b7ecfba4aa2eb0ce5b33ff1561d2de6"
  },
  {
    "url": "assets/js/39.1c73f960.js",
    "revision": "974b4db6ed6178d677a6b7698d950a11"
  },
  {
    "url": "assets/js/4.5b54bb6a.js",
    "revision": "51571c612316a811523854f9544e1210"
  },
  {
    "url": "assets/js/40.a0e40542.js",
    "revision": "cecb597cfa6354e48ea8158f241cbf89"
  },
  {
    "url": "assets/js/41.09c2b0d1.js",
    "revision": "abf2d2442f2f4af2c2e3c91cbf2dd9ba"
  },
  {
    "url": "assets/js/42.0855b750.js",
    "revision": "779260cb65f014207e15cac239ebc6ba"
  },
  {
    "url": "assets/js/43.9c2fe7fe.js",
    "revision": "ac88115b3be03d8b4e24a0536e285006"
  },
  {
    "url": "assets/js/44.67e5a84a.js",
    "revision": "6000f84227614457b22d2e5ba03dc810"
  },
  {
    "url": "assets/js/45.3cdd655e.js",
    "revision": "c9183b3b05cb393c2ddfaab9a7090e01"
  },
  {
    "url": "assets/js/46.a05378ba.js",
    "revision": "f7ea6848804b9146b4bb121e8ed5433e"
  },
  {
    "url": "assets/js/47.4821cea8.js",
    "revision": "046084137155b27a28d34d7e72b0f5f8"
  },
  {
    "url": "assets/js/48.f2045beb.js",
    "revision": "b2618a6e51dd1db8908813ef8820e7bd"
  },
  {
    "url": "assets/js/49.f8141f7e.js",
    "revision": "0b06736b20e072fa4b2dad43c7d4b518"
  },
  {
    "url": "assets/js/5.1a4b5fb8.js",
    "revision": "91050acc7120414066b584c0ec8b2535"
  },
  {
    "url": "assets/js/50.2457c31b.js",
    "revision": "9d049fa1b21dabea4fb61616e284033b"
  },
  {
    "url": "assets/js/51.99cb7fd3.js",
    "revision": "0d6df5b4e3efed47959f6a946472e61a"
  },
  {
    "url": "assets/js/52.d7d01814.js",
    "revision": "82614c7b148e7dff2d1f338eaa3e2203"
  },
  {
    "url": "assets/js/53.5cb5d669.js",
    "revision": "2868e82967cd83bad4bbf589aba74056"
  },
  {
    "url": "assets/js/54.1af84684.js",
    "revision": "5339b2c44541bc2645cd4cd44d0ae4fb"
  },
  {
    "url": "assets/js/55.462d97cf.js",
    "revision": "150239b2d6687fd452ec575037194f8b"
  },
  {
    "url": "assets/js/56.652a6710.js",
    "revision": "4b7162913ea2e3a6c4bbfec10da14129"
  },
  {
    "url": "assets/js/57.bae7f50c.js",
    "revision": "1af005a961860e3578ce250713d4fa94"
  },
  {
    "url": "assets/js/58.89871fc7.js",
    "revision": "26b8e3ae30d507083923d6aa8c95915a"
  },
  {
    "url": "assets/js/59.3213c058.js",
    "revision": "51b1f15edf51166f1d00c865ec53824e"
  },
  {
    "url": "assets/js/6.4661271e.js",
    "revision": "a55bae18c49b8898d0034b6088cafd5a"
  },
  {
    "url": "assets/js/60.b3261525.js",
    "revision": "476eb0e4b4c6dc8ca2caeb76d9779377"
  },
  {
    "url": "assets/js/61.a409bd97.js",
    "revision": "e32c24ddd719087b4e9da34926555472"
  },
  {
    "url": "assets/js/62.b0abbdc8.js",
    "revision": "8b6be8a47ca3110189c45db09eae1c52"
  },
  {
    "url": "assets/js/63.47facb21.js",
    "revision": "0553f5044e03d7769487b09483132ca1"
  },
  {
    "url": "assets/js/64.cc28b1b9.js",
    "revision": "7c62fa596833a66a4415e3bda44bb928"
  },
  {
    "url": "assets/js/65.60e1727c.js",
    "revision": "78e4cbfa00c79c8a318094934d774381"
  },
  {
    "url": "assets/js/66.5b61e0c1.js",
    "revision": "05218b510b72b10be3b1726e5ab5dbe7"
  },
  {
    "url": "assets/js/67.f88a4bdf.js",
    "revision": "3ba64699c5303f1c5cf3ea420ba6201a"
  },
  {
    "url": "assets/js/68.5d4ce45d.js",
    "revision": "17c869265fe20ecec221a3614f539ca3"
  },
  {
    "url": "assets/js/69.08292f7d.js",
    "revision": "32ec7679bc605b8a2fcb8bb03651e1c8"
  },
  {
    "url": "assets/js/7.5157d14c.js",
    "revision": "0944a19b3f72f227c638195a8b7ba4e4"
  },
  {
    "url": "assets/js/70.aab3d05e.js",
    "revision": "1b11a8e82ef8faa0724696f47c2042a5"
  },
  {
    "url": "assets/js/71.40b0a0b6.js",
    "revision": "93d19485cd18c02246e963255f132a70"
  },
  {
    "url": "assets/js/72.60fbfce5.js",
    "revision": "11659eecf25e56ecf1728759a177610a"
  },
  {
    "url": "assets/js/73.ca53ae44.js",
    "revision": "a66f07ea86acb165e91ec75c543a0045"
  },
  {
    "url": "assets/js/74.92d54792.js",
    "revision": "3b380c144261b5f3b3f0f0b0af059ba0"
  },
  {
    "url": "assets/js/75.8432613a.js",
    "revision": "532bb6da564383bcf18e17e91f4e584a"
  },
  {
    "url": "assets/js/76.e1437d9e.js",
    "revision": "fd122a1aabfb0ecd21f744272e5f5f90"
  },
  {
    "url": "assets/js/77.d9b5f52d.js",
    "revision": "57d22e815ce8c97cadf3e38a4abfccee"
  },
  {
    "url": "assets/js/78.38915dd4.js",
    "revision": "dd200a2239dff6b30a5f64d55e13ede5"
  },
  {
    "url": "assets/js/79.7f6e0696.js",
    "revision": "8b388a77d1915016f00d6684545714d4"
  },
  {
    "url": "assets/js/8.2289a084.js",
    "revision": "d0d5969eb984ab6718ee1400adc385fe"
  },
  {
    "url": "assets/js/80.2679ecb0.js",
    "revision": "a97b4ba64bb2029ff646003b28ad9bb8"
  },
  {
    "url": "assets/js/81.51b24761.js",
    "revision": "65c094c492b94e9861917a337bc29915"
  },
  {
    "url": "assets/js/82.7dc90419.js",
    "revision": "7ef51095aae54c90b566c707ad786498"
  },
  {
    "url": "assets/js/83.3f8f4175.js",
    "revision": "f9a04f396f8937f9ead023accebf83b3"
  },
  {
    "url": "assets/js/84.9a5593ec.js",
    "revision": "5fb3d84c0ec86314483323a1aa712884"
  },
  {
    "url": "assets/js/85.c6370c85.js",
    "revision": "7a6227fb873b4a535bfb43c391f35aae"
  },
  {
    "url": "assets/js/86.ed8825f8.js",
    "revision": "d63aea5d870fa0cba872bc97756f3397"
  },
  {
    "url": "assets/js/87.c7118397.js",
    "revision": "53fae5f04ebd3093244b4ab35c073c96"
  },
  {
    "url": "assets/js/88.79cbb2de.js",
    "revision": "9dd42d7838a0c79b5807f031cd8cf139"
  },
  {
    "url": "assets/js/89.1d468b59.js",
    "revision": "1f340d128aa33ede8cfcbaa4af7f37b4"
  },
  {
    "url": "assets/js/9.8b0ee52b.js",
    "revision": "f2ead21cdbf1882724792e061afeaab2"
  },
  {
    "url": "assets/js/90.3887cbf3.js",
    "revision": "5341564f719f0256ed12eb8374db0af3"
  },
  {
    "url": "assets/js/app.6a7b54d6.js",
    "revision": "5985ea967892e140c0a9cfa034ac676e"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "ee39d54df40f952c8ed679dddeee077f"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "1b98e095d0edc7ea6f1a0d7e705a2d82"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "1dd51fd11a22ff9741c5ce7f533da730"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "3e91f03dda480d16c5c346130ed8546a"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "8c2aa6e4424f6f251ae9c88d1d92cb69"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "98b1c5f2548a150adeaddd678c265fb3"
  },
  {
    "url": "composable/date/now.html",
    "revision": "0cf0a3650cdfb01551341db17b0e7fae"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "c2e50ba6f0219e161666f4e66feed1ab"
  },
  {
    "url": "composable/event/event.html",
    "revision": "22edda063499dcba9c6caa192d4b8d67"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "6bdd40d057da24b14abfb775695ce2ce"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "419b702e0c576592d7087c82b17b79ba"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "68a1b497f81052f586c9289c8c4a6749"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "9f23960d7ea3f7d137a1f4ad7c8efd9a"
  },
  {
    "url": "composable/format/format.html",
    "revision": "5fe9f863142cfd218efa3a88a9dfaa7b"
  },
  {
    "url": "composable/format/path.html",
    "revision": "69f7be37cc156c508382f88455da656f"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "ad5014e1a0106e8d270008a750dfd9b0"
  },
  {
    "url": "composable/index.html",
    "revision": "85f5934f0d7f19a57f9555780d04228f"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "73c2c7dbf6fb59d19c3fbed3d17fee69"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "5560748e2c62938f02eed6422b33a990"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "a893faf0dd35b843e30706c0b1d2a2a4"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "759d58160d6610962ca7049150faf132"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "0be11de8844c0db33084a5029eb23ba1"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "82c065317a57f4e2ff58f1521291f32f"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "e3f7b122a4fcd5f609a278d7bc17679d"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "55de8db8c7ddfd93e96c459e873b0b31"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "24ef689109aecd14494d5ed3eff0c552"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "d3d074ed6b543319effc3bf4a84f36e2"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "dbb83b4d1487f1f75f274791ac56b2b6"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "c8f4de3b1198a9b2d6a938fe134613b5"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "adbc96854d5f37fe3a18bd9bd7f59a71"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "7d1b82d5271f9cf53e7164eed1c72cae"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "0b66088bd863fa8f633d1f98feaf6728"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "6317ccff0619ea2e98c2164944e4ccea"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "f5f29f381fa67580df48edc555e1931b"
  },
  {
    "url": "composable/web/language.html",
    "revision": "6189774560f8be1a98d3b9ed5a46310f"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "88a89a603b1d3bfdd6689d2898f53d81"
  },
  {
    "url": "composable/web/online.html",
    "revision": "d759f104d8ac39d6cc2136b07f7cdead"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "e08160e0cc07b254b13323986a878b02"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "91fe9af72991e5f683e0fe6dfb52922d"
  },
  {
    "url": "Examples/index.html",
    "revision": "fa2c33cc694660cc2a9b79843c1cd4fd"
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
    "revision": "a6047f3e9fab3968d908a5566f064142"
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
