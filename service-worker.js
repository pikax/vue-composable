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
    "revision": "3713c99f10bd0c531e6d5c08ef8ab309"
  },
  {
    "url": "api/axios.api.html",
    "revision": "9f0e6886a5dcd76419035a1ac3bbeee6"
  },
  {
    "url": "api/core.api.html",
    "revision": "816239ea1df82e8b73f91c8dc6839f24"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "cea2a47abcf6c55bde71e6192cc81e09"
  },
  {
    "url": "api/web.api.html",
    "revision": "ccec014c4af71a9037d3049137b89f65"
  },
  {
    "url": "assets/css/3.styles.189eb24e.css",
    "revision": "cb37dde1fabf7994476dd3b004e28445"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e6bc5685.js",
    "revision": "8f18e7375337debadb3d939c5efea24c"
  },
  {
    "url": "assets/js/1.e45be958.js",
    "revision": "f7a02bf74c7a328dcd8ea2a2168a921c"
  },
  {
    "url": "assets/js/10.209e9543.js",
    "revision": "88904a851a7cf018d6b5b121e8c01756"
  },
  {
    "url": "assets/js/11.1e84fa9c.js",
    "revision": "02bcf46b2da7f634f8de764a50c0229f"
  },
  {
    "url": "assets/js/12.df1e3f77.js",
    "revision": "d033c6629a4b42d1d8f2b518f5be0ed6"
  },
  {
    "url": "assets/js/13.9ecae866.js",
    "revision": "ddc6f1b23e118dc0aab93d8366804e0c"
  },
  {
    "url": "assets/js/14.285cb762.js",
    "revision": "e634163ca64cfc47d7aacd685634623c"
  },
  {
    "url": "assets/js/15.2e4a8d7c.js",
    "revision": "67fe8226b4a390aca89f050163eccda3"
  },
  {
    "url": "assets/js/16.692efc43.js",
    "revision": "543c8f36d2ec202b2a50433ab712cebd"
  },
  {
    "url": "assets/js/17.8d53972d.js",
    "revision": "1b235137c351785f04f94f632cf2b752"
  },
  {
    "url": "assets/js/18.f60a1870.js",
    "revision": "ccb80f9b702b99c6bac94ddb18604b2a"
  },
  {
    "url": "assets/js/19.b54c6a6f.js",
    "revision": "5432fbfc841fa1fe89de1235734f3411"
  },
  {
    "url": "assets/js/2.4dd28d6c.js",
    "revision": "93970f5bace4d47914ae594cc174c932"
  },
  {
    "url": "assets/js/20.e9483699.js",
    "revision": "d4f7b205f2bf05bb7106c63eac34bee8"
  },
  {
    "url": "assets/js/21.50c2f59f.js",
    "revision": "3719863f72c9cdce4d4468c99268fcd2"
  },
  {
    "url": "assets/js/22.43495008.js",
    "revision": "328851c0ff598c5820840efc549b0ab4"
  },
  {
    "url": "assets/js/23.f407a368.js",
    "revision": "4d4b39179b788a1da5348bd628b1ef9b"
  },
  {
    "url": "assets/js/24.0cb26666.js",
    "revision": "b7038b17af99d320c86bbd0fc6cb1f5a"
  },
  {
    "url": "assets/js/25.8aa171ab.js",
    "revision": "d80bcd5dbe7dd14853eb27c09d8845b8"
  },
  {
    "url": "assets/js/26.b72e0a2d.js",
    "revision": "e8fcbd29aef247d1fc4609fe13c5a3b4"
  },
  {
    "url": "assets/js/27.bf87716e.js",
    "revision": "077420ae90ac66457c4fd08afa3b60b7"
  },
  {
    "url": "assets/js/28.4b64a628.js",
    "revision": "67780c827a2b3ab73c73177adc239f8d"
  },
  {
    "url": "assets/js/29.58ec98da.js",
    "revision": "c0f15884605e1c3a16738d91e594ea9f"
  },
  {
    "url": "assets/js/30.319f0b63.js",
    "revision": "1d1c1872f3deee3521808be5690771de"
  },
  {
    "url": "assets/js/31.3a6860ee.js",
    "revision": "f1bf270688fd018c0c3d1957cb54f8cc"
  },
  {
    "url": "assets/js/32.7a4543b4.js",
    "revision": "cdfecf84a99522950e1e5fadbcd62ea3"
  },
  {
    "url": "assets/js/33.3c4c0ecb.js",
    "revision": "246b8b0c13ea2f2ddcb3fcf136babc8a"
  },
  {
    "url": "assets/js/34.42675f47.js",
    "revision": "4b88eb1f58c6de2337ce89bc9afe59b1"
  },
  {
    "url": "assets/js/35.c44213ec.js",
    "revision": "8d347b6e6270a63bf6cbe924e8448ba0"
  },
  {
    "url": "assets/js/36.939cd2eb.js",
    "revision": "38bfd55d95e9a28ce5cfab87cc913e12"
  },
  {
    "url": "assets/js/37.f0cf13b0.js",
    "revision": "87d1bc516917471f7ff91bd8e3202ef8"
  },
  {
    "url": "assets/js/38.0ab9be7c.js",
    "revision": "a2632158c832ebe3f8e6fe1ecece41df"
  },
  {
    "url": "assets/js/39.394e3192.js",
    "revision": "a1170e8856da3a1fd2917f514cce6dc9"
  },
  {
    "url": "assets/js/40.891f0ce1.js",
    "revision": "0873d3b699da7410f7041ce77af80ad4"
  },
  {
    "url": "assets/js/41.c5c67cd5.js",
    "revision": "e2ebbfd64a637f31da2cfb25e233ba4e"
  },
  {
    "url": "assets/js/42.9f3c4eac.js",
    "revision": "b0d4fa589bc5b4e4d89f84fb3375807b"
  },
  {
    "url": "assets/js/43.1d9f4a6a.js",
    "revision": "a9537312150034d7007595ab6b651e41"
  },
  {
    "url": "assets/js/44.fc03ea18.js",
    "revision": "030b59ad122c1fccd82368bbfc069e3a"
  },
  {
    "url": "assets/js/45.6b9122a1.js",
    "revision": "bdca0579e93bd32830bc57b5468d0287"
  },
  {
    "url": "assets/js/46.032a22a0.js",
    "revision": "96bd407badd293996b6633a6f31df635"
  },
  {
    "url": "assets/js/47.a6c62315.js",
    "revision": "371e3185eaafa4bb2e8ac3c0e97ff061"
  },
  {
    "url": "assets/js/48.97ccf5b1.js",
    "revision": "ecf80edb63cfa0ae3c5401fcd8cac963"
  },
  {
    "url": "assets/js/49.79b89d72.js",
    "revision": "7c5fb8b7feb0f2ea4bc5b12b1851f1f7"
  },
  {
    "url": "assets/js/5.2a1ddfdd.js",
    "revision": "0f5e07eeebfb8d48e09826afa97445d8"
  },
  {
    "url": "assets/js/50.de9028e9.js",
    "revision": "c983c598cbb0cd562bd1acaed962eb5d"
  },
  {
    "url": "assets/js/51.334e4569.js",
    "revision": "233c05b356dd111a3c941a969941c323"
  },
  {
    "url": "assets/js/52.0081e0bf.js",
    "revision": "0a540f18706eef78a6eb5b1b1e00f358"
  },
  {
    "url": "assets/js/53.68cbd6ca.js",
    "revision": "28e3a09a5df1496573fb8ddd58e2be82"
  },
  {
    "url": "assets/js/54.a427872d.js",
    "revision": "292bdee9f3fc48c0e3770aed9d01961a"
  },
  {
    "url": "assets/js/55.4c05e809.js",
    "revision": "4191976a8f2c442e37553237f20792f9"
  },
  {
    "url": "assets/js/56.52e71668.js",
    "revision": "8f589a62a3a0438fbfa1071557b9c23c"
  },
  {
    "url": "assets/js/57.777f6c2a.js",
    "revision": "7f42c56690b189d303d4d5a3a48a053b"
  },
  {
    "url": "assets/js/58.458de90b.js",
    "revision": "4d3f98a884ad579bcb08287046081ea1"
  },
  {
    "url": "assets/js/59.676730c6.js",
    "revision": "419291f5466e5a91a0abe3d2f8eb4c3f"
  },
  {
    "url": "assets/js/6.9f6b0e9f.js",
    "revision": "1e4a82b78ac5a93744f69add1ddd3179"
  },
  {
    "url": "assets/js/60.eec50c0e.js",
    "revision": "db9a3b9533b237f071000c948b395cb5"
  },
  {
    "url": "assets/js/61.503174ec.js",
    "revision": "cafc29006ba9aeb557ecfe8aa051c09d"
  },
  {
    "url": "assets/js/62.0d629b40.js",
    "revision": "5bb7a405726329ff59f9e3b04fbd181c"
  },
  {
    "url": "assets/js/63.157dcf23.js",
    "revision": "ed42a0eda322cad3a8962899c495fc8e"
  },
  {
    "url": "assets/js/64.effe4484.js",
    "revision": "1c7919081a6c22d29ad429680320262a"
  },
  {
    "url": "assets/js/65.a4cd71c8.js",
    "revision": "4ff1f05fdad918a7f78428ada618a11e"
  },
  {
    "url": "assets/js/66.ffc020d4.js",
    "revision": "4994d2fee19dceedc28063028bc19ae9"
  },
  {
    "url": "assets/js/67.7257b1d6.js",
    "revision": "cb8e19e7ddec1f71a693cdbb34cacae7"
  },
  {
    "url": "assets/js/68.5c9a67f2.js",
    "revision": "c9f7fe95bd2683e834566c3731413331"
  },
  {
    "url": "assets/js/69.8da7a172.js",
    "revision": "26a048148d2e985e6fc3a19c14e2ca93"
  },
  {
    "url": "assets/js/7.71dd1b3c.js",
    "revision": "edd98212f2f42a4d8730fa6479004d51"
  },
  {
    "url": "assets/js/70.41d4f952.js",
    "revision": "83dbb7695fe0bf1d6efdc0eceea5d311"
  },
  {
    "url": "assets/js/71.119adacf.js",
    "revision": "78a287f296078530bfcd9478f92ad803"
  },
  {
    "url": "assets/js/72.76fd77ce.js",
    "revision": "e59b36fe1f80943f5f608b331d38363c"
  },
  {
    "url": "assets/js/73.7f1f9cde.js",
    "revision": "55882db839184dee2b2fde09bfd7ad7a"
  },
  {
    "url": "assets/js/74.748b89a6.js",
    "revision": "8f36d143afc1d4bcf9fbb39e42ae3504"
  },
  {
    "url": "assets/js/75.57605841.js",
    "revision": "157cdd1515801e1b3aea1b663db9cee1"
  },
  {
    "url": "assets/js/76.f0422293.js",
    "revision": "9bc3ccaf359a0e2445af8b3b1f3f5f14"
  },
  {
    "url": "assets/js/77.6c8a6412.js",
    "revision": "73ab66ded7344a954ee7b165cfc057c3"
  },
  {
    "url": "assets/js/78.ed260177.js",
    "revision": "d72d018ab0dae8bcb00aa17987b1295f"
  },
  {
    "url": "assets/js/79.c676dadc.js",
    "revision": "25bccf367e5fd8ebc9c5635f4332d326"
  },
  {
    "url": "assets/js/8.9a0a67f0.js",
    "revision": "d68d75911b7e60c739f53b5a97ac5642"
  },
  {
    "url": "assets/js/80.370ca57b.js",
    "revision": "5f975cf90d46ab7754553bcc2bb93620"
  },
  {
    "url": "assets/js/81.32f695db.js",
    "revision": "2236d7d4b0ec3c888ec0081401df875b"
  },
  {
    "url": "assets/js/9.6997f976.js",
    "revision": "e65c5db4a79b243e4abe7352cf9577fe"
  },
  {
    "url": "assets/js/app.343a7aae.js",
    "revision": "6bcd5164f2b75bb732e9309a8682d107"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "131160ed503d8530da2d585cb4534ff3"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "2f508b60efa8d2c66a3acdd6faa5fe2d"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "4f8e38657c1998951866040dc2a680ef"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "46a4491a160db964cf192db7912ac76b"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "e54681c91e41e262fc3e99a41ab1aa2b"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "e4b63e912814b2e267ba67ca0aee0304"
  },
  {
    "url": "composable/date/now.html",
    "revision": "72e7ea51ca91ed72147eeb8fbf9dfe10"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "da1dd122989e5158c1ecbd33a832d5a6"
  },
  {
    "url": "composable/event/event.html",
    "revision": "2a20d5087f419dcaa87b6ebb93b40ead"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "bf5b98d2c1739235f1cc436c14ed99b3"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ea13d839261cfd57c5ee4ac31a34f4ca"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "3bcbb877a8cac30055e951a7ccbd0988"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "67336a089822e47b594d12a4e61392e3"
  },
  {
    "url": "composable/format/format.html",
    "revision": "76a1b317ea28caf61da77f003997a8fe"
  },
  {
    "url": "composable/index.html",
    "revision": "54de0372d0ce5a4fe833a24a0099490f"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "83ae1a796508f399224239761ce4265a"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "4800dfbb48af5c7d15640b3e22c1f5d3"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "fd9ee5077e8f005c7787912da99ec6e6"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "df8176ab8d7fee645a49151a50b1274b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "3e65446436c4d95b228aa9a5fedaf4ec"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "cfd51870822cdb4a686ca4d67b2cc1bb"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "280f4e35dc1dec7e350f5c51a307db8d"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "453291f62e3d9d07f4bb237b968b27cf"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "2331946b2739d62f610e28834ae01bd9"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "d464c26228fc8e736e8523482f2857fc"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "19f5a6a66b8fe0b91a90f348d96511ca"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "e4b67ff5125b1304d6eba023127c936a"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "485dbaa1b67e452b4bb296283159b525"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "554a412681798168e9efe03d3fda6211"
  },
  {
    "url": "composable/web/language.html",
    "revision": "55f1c0f8f038fa398d4b93ab1ca8401a"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "3bf512fb5acba35cc5b09a4d40d360c4"
  },
  {
    "url": "composable/web/online.html",
    "revision": "fcc6db8d767301a71f232ee55133eda9"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "a56fc19b4913bac2a6391606574938b8"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "e5ddb917a4c0a7e979137a809b8135c9"
  },
  {
    "url": "Examples/index.html",
    "revision": "3a050ecc3dbc1b43630c5a8a3bcf6c7f"
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
    "revision": "1b04b70444a9d580b45e9ecee4f3ebc2"
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
