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
    "revision": "d657c68cbb52428000d460ddbdd4e0aa"
  },
  {
    "url": "api/core.api.html",
    "revision": "e3c83f6b4df53da0fbfca992c5e5f50f"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "6474af9eb4d6a29e07e885d6a95bb7b8"
  },
  {
    "url": "api/web.api.html",
    "revision": "dbcd4b0a9740e6e7110c0e20e346bf71"
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
    "url": "assets/js/77.c21f8a25.js",
    "revision": "af33460ed91aca4ddb3c09893f88cf97"
  },
  {
    "url": "assets/js/78.00573f27.js",
    "revision": "930cbcd4050092453187fcad71d57c4a"
  },
  {
    "url": "assets/js/79.0d095a35.js",
    "revision": "5687227527c4cd4f2198e8c949ae0219"
  },
  {
    "url": "assets/js/8.2289a084.js",
    "revision": "d0d5969eb984ab6718ee1400adc385fe"
  },
  {
    "url": "assets/js/80.3713f793.js",
    "revision": "3af973b009bbdcd77e5b02d1196f4d41"
  },
  {
    "url": "assets/js/81.588515a3.js",
    "revision": "4c1d3f6b8580560f2b664873142eed35"
  },
  {
    "url": "assets/js/82.fa973a15.js",
    "revision": "f26191edc0c6532036e017da9c9e30ee"
  },
  {
    "url": "assets/js/83.a1fa6b0b.js",
    "revision": "92e1826f7bc1e308c2d8b431ac4785ab"
  },
  {
    "url": "assets/js/84.9e9814da.js",
    "revision": "19cf6d69dcaeed8d127e55cd320c09e3"
  },
  {
    "url": "assets/js/85.7dd2101d.js",
    "revision": "f4fb1d3e00c7b84b6495439cf7b94fd4"
  },
  {
    "url": "assets/js/86.0ca19709.js",
    "revision": "9e456430b95083d9551d3be3f581b556"
  },
  {
    "url": "assets/js/87.53be7093.js",
    "revision": "28b4eb56f6b8ad8314ff8f02674742ce"
  },
  {
    "url": "assets/js/88.e977cbbf.js",
    "revision": "a96d1101f7f8ebc34b1ffb4642eba402"
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
    "url": "assets/js/app.b1bddb46.js",
    "revision": "71859fcf104ea68e1fc6e64080bb9ee5"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "43e13221eadeb3996b32b831e0d415f0"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "fa9db74067c969fa100aea3e680c4d27"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "4877101ca0626c8aa9723e5cbcfc0384"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "b9acf210b82a1c106773e99c4a558cbc"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "1ee425f911c5d882fe4430cec1eb48be"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "5dbc3c419619a2c7d27c4fcd70bec8cd"
  },
  {
    "url": "composable/date/now.html",
    "revision": "bf61e1c5aad0436b8725a31cbcfc323b"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "d1e5d2e6c7e056b35348a130f34f3f36"
  },
  {
    "url": "composable/event/event.html",
    "revision": "549f1bac4f6930ff9973f788d1c557da"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "6f5b04136505696a6471a911ff95a5e8"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4a9266ec2943754136ab85a2bc157e93"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "cb94e22d3df6a42c19fd3d2e07cbd92c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "705322d23fab6d4ec7838aa30e95e013"
  },
  {
    "url": "composable/format/format.html",
    "revision": "c4afa8186d5d9ac106ba522995cdf157"
  },
  {
    "url": "composable/format/path.html",
    "revision": "a8985f492edc98f5e840c3403d0e6937"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "a92c8b5ac1a0e211880766dcd0b5e1e3"
  },
  {
    "url": "composable/index.html",
    "revision": "e1f571eb831f2536f9a8cc55ce2093a3"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "8edfb489fd71f3c9f2c12d84226aa67b"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "a518385a719552a65a327b5b8f95f0cc"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "7aa96a6fc2b8dbe9d84ad8671112e434"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "98c88ade4c3c998752862a771e56d54c"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "1e6a2ebd6b898a7f3b02f571833f2950"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "636fcf0d58376a72087253c8e2684c3e"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "aa9796c5620f3095626573aac998711a"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "15225ffaf40907b864eb84ba7b51db5d"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "b2751b59e344093fb9c5774d90ca9583"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "3bbfb03ed7b29011b471fd56e9ce4e45"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "d8ecf1f3296dfb521378bbf991754b49"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "f6201feb773aa13832a31f0748e3e8fd"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "e15b59f0b3e3c24a1019dc7cccdc0d1d"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "905c6960bb4118a9fef6cb655a91b25c"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2f90ffaa2a9b7a0a29ed7f36958228ae"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "6ef54ee09d7f36677740b4f8f479c872"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "e6680a5dad1de7997825890ae062195d"
  },
  {
    "url": "composable/web/language.html",
    "revision": "6e2917677c56cfa00ce280529e55bba7"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "d7aefbe1f65ead6d20be5dc41aa4ed92"
  },
  {
    "url": "composable/web/online.html",
    "revision": "05965c0f24908e67c611fc02e0822119"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "02740d0030bc90fb16dcde6776d09cff"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "82b14f3efd1275a1ef73361fd8bbaa9e"
  },
  {
    "url": "Examples/index.html",
    "revision": "36fc3c313bdc4444d35e0357eb17f33d"
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
    "revision": "d8b24a341c9a160d39e5588c49bc7e64"
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
