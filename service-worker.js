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
    "revision": "8919eb7ce504f1eb53367efa1824df47"
  },
  {
    "url": "api/axios.api.html",
    "revision": "bc38565e927f9cb1ac5047eeb004e3a6"
  },
  {
    "url": "api/core.api.html",
    "revision": "61a47b1ff088d41f6ae850f44ab1f98d"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "64ef2da9bcf7342ab832907bee8651eb"
  },
  {
    "url": "api/web.api.html",
    "revision": "fc73d8e08fce6a8d4aefe086687cf5c0"
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
    "url": "assets/js/42.003419dc.js",
    "revision": "1f6bb471c1d1963ec738e60f8bf7bc02"
  },
  {
    "url": "assets/js/43.1d9f4a6a.js",
    "revision": "a9537312150034d7007595ab6b651e41"
  },
  {
    "url": "assets/js/44.51973b1a.js",
    "revision": "44bcb06be73061a8c3894fb3ecabe5ab"
  },
  {
    "url": "assets/js/45.aa2ae695.js",
    "revision": "23a27291fc4f0b7244f914afacc3485d"
  },
  {
    "url": "assets/js/46.dd1d847c.js",
    "revision": "faa24ad3cd9323690d0cb4681eced546"
  },
  {
    "url": "assets/js/47.57d8485d.js",
    "revision": "cbc59a288f8a1939d8f138b51d1e2ab8"
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
    "url": "assets/js/app.899f83e5.js",
    "revision": "69764bb305ac27715c94152a61744b8e"
  },
  {
    "url": "composable/_template.html",
    "revision": "8f7030d4875f87cf24b496342bf0e48e"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "21184fd531494e9d8710791e5d65a0e9"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "e6bbdc2c5bd7f89d52647c44973be740"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "0b56f50d6769096044666dc090f1696e"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "db83fb77addcde504b57e347183b47cf"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "b22a6cf6a8903508755872e76db3156a"
  },
  {
    "url": "composable/date/now.html",
    "revision": "5e8918c86827e79a83017e83f93b0310"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "9b9de2f6debf1b53fcf7c65ba35965b1"
  },
  {
    "url": "composable/event/event.html",
    "revision": "44fbf23ce2a8ddede488cfc678c79059"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "d440db5ef3741d3a4f096d90d9966221"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4f23f876b7fa22e1cbb769889940b092"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "362fc93b99a331f3da5753cb60fc0c13"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "d1a44c4966d1ebff080260ec554a0c39"
  },
  {
    "url": "composable/format/format.html",
    "revision": "263c2a44a43f09f614d84d00e2a8a84a"
  },
  {
    "url": "composable/index.html",
    "revision": "6dcb5b903a306a72313f5b5359eb1b90"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "1c3a24688034b97e48de38d147a974cd"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "93fee27297e95352f93c11350ccc1a7c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "287356ff8cebc5846d89fbd66951f5c0"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "dc272ba8d7fdb10d892970753779cf69"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "5258bca96298164e1109a9a408347723"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "aa33ad510d7ff1e78b0ed706c9d2d209"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "cb58fee2af59f2a1f000210ae9848eb3"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "3bf9e3a382c1944b233c2a60cce0ab6a"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "158fbeccae13c646d81f28ebb92e0d9d"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "97562ef95693bb39a9209565a5c8ade9"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "c308846b729638f5b617854f64a84db6"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "b90995c9ec7e00fda0b4a22b3ccbf3e3"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "48cc6caf22991ef1d28b23cf6ba4e9a4"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "88d50ce5d26db256cbe5ab6e5abec37d"
  },
  {
    "url": "composable/web/language.html",
    "revision": "47020521bba2da6a0db2fff3423b9142"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "5cbece48ab731cba2b066164503b9247"
  },
  {
    "url": "composable/web/online.html",
    "revision": "fe0e4414b4b14592dab4ab4a9a2b24bf"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "e2f33f705872d27d617e8e8e13586d52"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "d14aff311036bc46987844975c863fae"
  },
  {
    "url": "Examples/index.html",
    "revision": "5f6864a1aad1564376571ff39144d077"
  },
  {
    "url": "index.html",
    "revision": "3f7ebd1bea0b4588b99a6400b4303806"
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
