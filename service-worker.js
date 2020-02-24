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
    "revision": "1beb1a6f704a39e581f9648e2a4be17b"
  },
  {
    "url": "api/axios.api.html",
    "revision": "bd7b20d4776a879278c576fdf60ffea1"
  },
  {
    "url": "api/core.api.html",
    "revision": "97761135a9e6ae28d534b3aaea19aa84"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "ef4934e55cfd228ab643a6249b242801"
  },
  {
    "url": "api/web.api.html",
    "revision": "d9fc50885d61b8baa7558e45f98d8df9"
  },
  {
    "url": "assets/css/2.styles.a14cc025.css",
    "revision": "419ace0f1b611952663e4b0922b7a646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.b28f25b3.js",
    "revision": "fb6dc357d741f001bfc501507273cd04"
  },
  {
    "url": "assets/js/1.bfd26b5d.js",
    "revision": "447bdbe50fd83fb98d22732e58a7f628"
  },
  {
    "url": "assets/js/10.2495caed.js",
    "revision": "b7e3aea49fbd84a0c1df0724cee14d18"
  },
  {
    "url": "assets/js/11.87a4e46f.js",
    "revision": "99f59c9206382cea908e283ae7a35095"
  },
  {
    "url": "assets/js/12.c9b17fab.js",
    "revision": "b61cad88d61db81557c52757bbf37271"
  },
  {
    "url": "assets/js/13.de8f6be5.js",
    "revision": "a9f928d09d386b38b4b209352cddf049"
  },
  {
    "url": "assets/js/14.a1f9b698.js",
    "revision": "a422c25c8c94db8f5b2b2c215efe33b8"
  },
  {
    "url": "assets/js/15.23d400d7.js",
    "revision": "9094eb4da3b9dc84b551316895a3be83"
  },
  {
    "url": "assets/js/16.fbef8231.js",
    "revision": "0982db85d84d099e852089ae7e90a5f2"
  },
  {
    "url": "assets/js/17.4a4a0942.js",
    "revision": "4261a09674538521dda27f7a06bf3287"
  },
  {
    "url": "assets/js/18.56024897.js",
    "revision": "42f585ca618bd401ca68374833b89f6d"
  },
  {
    "url": "assets/js/19.e5138cdd.js",
    "revision": "c9a72e2a2b6edc9c20d5fe0d339883fb"
  },
  {
    "url": "assets/js/20.b7a3f815.js",
    "revision": "7c45e07dc3f3e316d8793a0b8f40a036"
  },
  {
    "url": "assets/js/21.d5828d6f.js",
    "revision": "bb6bd55b1f3a56d67e1a58cb39232bf2"
  },
  {
    "url": "assets/js/22.5f691991.js",
    "revision": "07ff0bbf22c17646e85994bdc9c4f80c"
  },
  {
    "url": "assets/js/23.5e40b31f.js",
    "revision": "5431877f0cb6c7f28ca11963122fdd58"
  },
  {
    "url": "assets/js/24.85be109a.js",
    "revision": "4edcdfb7192d0a585995958812425a72"
  },
  {
    "url": "assets/js/25.8e9f433d.js",
    "revision": "7a132f49c5256ca48f1c512625e7d995"
  },
  {
    "url": "assets/js/26.6b646946.js",
    "revision": "0e3ba956a951e521fbc7ce1b07448e4c"
  },
  {
    "url": "assets/js/27.1aad1b7d.js",
    "revision": "f24c526de63ba3d6689b1c743d62fc23"
  },
  {
    "url": "assets/js/28.82907e95.js",
    "revision": "2602f57a590bccd9f6d459b033df40ae"
  },
  {
    "url": "assets/js/29.11a84c9b.js",
    "revision": "37f4696e7339f4ffe34704047cdbb4bb"
  },
  {
    "url": "assets/js/30.eb048650.js",
    "revision": "5062081f05042a4cbaa93501297adc77"
  },
  {
    "url": "assets/js/31.53110668.js",
    "revision": "43f0ea62493be0b43bb95020baaa414a"
  },
  {
    "url": "assets/js/32.22272595.js",
    "revision": "a347f73cddc31a922c0986862c386584"
  },
  {
    "url": "assets/js/33.795f42dd.js",
    "revision": "ccb94be567e22af1ac9d99b86b9206a4"
  },
  {
    "url": "assets/js/34.b551686d.js",
    "revision": "e5250fdb3568b6eaae2976eaf2618004"
  },
  {
    "url": "assets/js/35.e384561a.js",
    "revision": "dd721c1609edfd0b3ce91c44aa0dfa7b"
  },
  {
    "url": "assets/js/36.a42f7192.js",
    "revision": "16c149110d1f1b5043c543fb5a0f07fb"
  },
  {
    "url": "assets/js/37.1f291e76.js",
    "revision": "b16a3605d79eb76a6473de9fb2baea79"
  },
  {
    "url": "assets/js/38.bcac007c.js",
    "revision": "6fdd3542e986eaf64254b895c874b568"
  },
  {
    "url": "assets/js/39.3eaa013e.js",
    "revision": "ad11ff2b3f09efb1fda607a36f69c872"
  },
  {
    "url": "assets/js/4.bf7b6b1a.js",
    "revision": "737d730aa97bc1cdbb2e5bcc7d03b9f6"
  },
  {
    "url": "assets/js/40.042c59f8.js",
    "revision": "ed22b1769af8f53798e1beca6a575b7d"
  },
  {
    "url": "assets/js/41.3754243c.js",
    "revision": "e9c148c0cc606e44634826f21e24dbfe"
  },
  {
    "url": "assets/js/42.bb6b2468.js",
    "revision": "9132f7108929b8b471483d15aec544ee"
  },
  {
    "url": "assets/js/43.da801f24.js",
    "revision": "4d49e5bc870591ad7853b4bf2ee11c08"
  },
  {
    "url": "assets/js/44.d7e27cc2.js",
    "revision": "897752bf3ee272fb1c1529e66e577714"
  },
  {
    "url": "assets/js/45.6c093e8a.js",
    "revision": "65324bdc37f9d708509182555db5f035"
  },
  {
    "url": "assets/js/46.8ceeaf7e.js",
    "revision": "600694583afa4b6af4acb71f65613934"
  },
  {
    "url": "assets/js/47.d0e5632f.js",
    "revision": "412e960ab1820c8441e06027063f6fb9"
  },
  {
    "url": "assets/js/48.326aa84d.js",
    "revision": "ab3f8d784d379bbe970db8b078559701"
  },
  {
    "url": "assets/js/49.749045ff.js",
    "revision": "90723f26143f5074740b0290ac23027c"
  },
  {
    "url": "assets/js/5.1ab848f3.js",
    "revision": "ca59ff1aa0a91e75fe41871f7c57b689"
  },
  {
    "url": "assets/js/50.5f8d71d6.js",
    "revision": "b54224bbe72c4ce2b2446fd85e7a22f7"
  },
  {
    "url": "assets/js/51.05bd922f.js",
    "revision": "2ff4f2256c2bff588213e9a7d0405762"
  },
  {
    "url": "assets/js/52.072a347a.js",
    "revision": "e1d9ab327c787fafd148e5cf4041ad78"
  },
  {
    "url": "assets/js/53.434619a1.js",
    "revision": "2dad7792e66f4fdced145bfe7e4803ab"
  },
  {
    "url": "assets/js/54.86f3b50b.js",
    "revision": "217f2fc638c6566077f68f74508c6f56"
  },
  {
    "url": "assets/js/55.9bba2414.js",
    "revision": "95208c6d8444311247442bba1c322e24"
  },
  {
    "url": "assets/js/56.17b580f6.js",
    "revision": "5ca727312f58d1215bcdee7395ad2c78"
  },
  {
    "url": "assets/js/57.ca1cb7e3.js",
    "revision": "02d99efb3d45233fec305e8c1915444e"
  },
  {
    "url": "assets/js/58.b8da80b3.js",
    "revision": "6ea91376b3080b83e1c44157993f8daa"
  },
  {
    "url": "assets/js/59.3df1b21d.js",
    "revision": "7142c364d7e68fdf9ff01b52ce1ddac4"
  },
  {
    "url": "assets/js/6.9d6eb6ee.js",
    "revision": "87edad728f7bc71b79f4818b9486271c"
  },
  {
    "url": "assets/js/60.c564f6e9.js",
    "revision": "a56f3d49bfea0c1c6fce05315c09515f"
  },
  {
    "url": "assets/js/61.91615abf.js",
    "revision": "ca0fe004bf13be3c0e891b665be6ce6f"
  },
  {
    "url": "assets/js/62.238a4685.js",
    "revision": "0e3101cc1d7c1c958270df3511870f44"
  },
  {
    "url": "assets/js/63.3ff6857e.js",
    "revision": "021dae008d408c324bb0d5892d9fb165"
  },
  {
    "url": "assets/js/64.8b27d5eb.js",
    "revision": "12a6695e49a7eb35227b0b3b61a41fb9"
  },
  {
    "url": "assets/js/65.f8e5dbcd.js",
    "revision": "53f01c722c5c1576e1081959ebf6e6c7"
  },
  {
    "url": "assets/js/66.ccf44cd0.js",
    "revision": "9d0736881169a9f2c8f8c0c26c068221"
  },
  {
    "url": "assets/js/67.07ea68e6.js",
    "revision": "eafc53d84c5db29acc2eb2ffafa614ff"
  },
  {
    "url": "assets/js/68.475b9984.js",
    "revision": "fe31652b1b4335b926e30806de82943e"
  },
  {
    "url": "assets/js/69.e7139980.js",
    "revision": "96a4a9f00c16601183b96a0971d18bbe"
  },
  {
    "url": "assets/js/7.71d7c510.js",
    "revision": "e01dc74fccd2a1c6dcf6d3d7413d1eec"
  },
  {
    "url": "assets/js/70.9cef808c.js",
    "revision": "ca3805d181f2a4b5e87e48e64ed7345e"
  },
  {
    "url": "assets/js/71.db1b424d.js",
    "revision": "aa04b2eaf25eac209f70f7ace935277c"
  },
  {
    "url": "assets/js/72.8f9ad7b8.js",
    "revision": "c97f4a79e08403b2133831c0ebf75b4e"
  },
  {
    "url": "assets/js/73.05d86148.js",
    "revision": "a8d4be17291a2dff72e19bdbab96ab81"
  },
  {
    "url": "assets/js/74.d6e850d3.js",
    "revision": "b9981a84c5ae40c811ea5f33d2944086"
  },
  {
    "url": "assets/js/75.db12fd73.js",
    "revision": "5ce39641279e71bf8dc3051496df48a5"
  },
  {
    "url": "assets/js/76.a547f7f6.js",
    "revision": "bc5fcf0841add29c7b8c71a498ec0985"
  },
  {
    "url": "assets/js/77.f8785024.js",
    "revision": "4ef1004e582d7dfaea188bd81ea2c086"
  },
  {
    "url": "assets/js/78.219de756.js",
    "revision": "697a2feaf0fd9b71e88ed245b22f01c8"
  },
  {
    "url": "assets/js/79.b881da99.js",
    "revision": "71973736a374d9886df89e743e001481"
  },
  {
    "url": "assets/js/8.369d722e.js",
    "revision": "cfea2985e6cb1677437f9068b072e52d"
  },
  {
    "url": "assets/js/80.811119df.js",
    "revision": "806fbd0e8816a51a703594f1c6c0accc"
  },
  {
    "url": "assets/js/81.1e9f2e16.js",
    "revision": "043f51cb42f8eb46bacfc18f4aa70b32"
  },
  {
    "url": "assets/js/82.4211a85f.js",
    "revision": "473d4f09713674e62195fbbcf363daeb"
  },
  {
    "url": "assets/js/83.6a5266d1.js",
    "revision": "cc71f8cad624d44c4e2c482c076e2fd7"
  },
  {
    "url": "assets/js/84.4ebce275.js",
    "revision": "c20065c0766914aa4a26532fa48a559d"
  },
  {
    "url": "assets/js/9.7421f77c.js",
    "revision": "5e91ea7dfda7831859af50f54b426cf8"
  },
  {
    "url": "assets/js/app.f7408ad8.js",
    "revision": "04055f70dcfeb0dc8ad16cd1dbd64aa6"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "6a4f5f26b7d137e0e73d478661e4f1b6"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "b9d490fe4f7f937f4aeb8ef95b16e1b1"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "faf990d6a4ef005f3ebe956612206b3e"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "c323e278f7d2eef4306fbac4de65476c"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "6abdc1a19b33e17abfe7b862e8504489"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "3b67a568ab69e65cce65af5b9a6235fe"
  },
  {
    "url": "composable/date/now.html",
    "revision": "3477b9230bebd5a8c8988b00fda42db6"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "eab0f786d23ad42e22fd1eaaa166fcab"
  },
  {
    "url": "composable/event/event.html",
    "revision": "8b6ce4dc7075cb7b7aef1c9a04e23cb2"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "a082b507dd4f3e44ac4778cd75a79d93"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "789ffb90b3553801423eed2876e146cd"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "c4a93ebf73adc41f973c924e7b16dedc"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "7ec55823e4c40205737f0f73a03aa62e"
  },
  {
    "url": "composable/format/format.html",
    "revision": "425f4f627008ff370e5fb313e73aad1e"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "709ad258d2e8309ae16ea5f9d3703c4e"
  },
  {
    "url": "composable/index.html",
    "revision": "0c25312365222afac8e537d071102214"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "2a18ca1083b497ee0c638a9bafce2fbd"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "c9fba67ba36831076a6ed466bd98ed57"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "d88b44b6295a413c389bb39ef4ec44f9"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "531229418d164e2acf5953eb87102028"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "422e3e806cbb01afa9d213b67e232aa5"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "6350aa4680b9e4b3e72a3b692493820c"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "b6f403c642fc6cc35b4dd238cfca3270"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "45830d958fef66304fcc2ebb8bd3f3bd"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "6277ce9137aa7326d6c60cf0a4ac6009"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "5fdd2f328334739c39e8de1b3d9e4ec8"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "7afd196efe23e211e61c461c2c6f888a"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "40ec953b2f6320ffa89837e0180d7aab"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2649c0b47d367001f4ab089cce934707"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "a92c8efea85548ebd60fb3d48e9b7550"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "1667f5d3afac21ea598290c4ab2f11ab"
  },
  {
    "url": "composable/web/language.html",
    "revision": "943aed827c9f23970f6078afe856cca1"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "c787413e3aa33e42919a9ce07d72a9f4"
  },
  {
    "url": "composable/web/online.html",
    "revision": "63d209cb43efdb1c9ef3acc3189c9559"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "1af899d5019e724a691aa64623746532"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "b14c41776e1566a79ee83b66da97f14b"
  },
  {
    "url": "Examples/index.html",
    "revision": "549001b0d566c8b1e16f5b5045f0a473"
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
    "revision": "6878b2a5ad4690092e0147fecb8fc508"
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
