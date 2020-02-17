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
    "revision": "17b712c36fe962bb3ce34964c98c84e1"
  },
  {
    "url": "api/axios.api.html",
    "revision": "ecbcb98989867a044ad6901a6e60ca90"
  },
  {
    "url": "api/core.api.html",
    "revision": "0e8f696fc61b616aadd707cc22946550"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "10341d6c98892a197f72a75cfd6f4ec6"
  },
  {
    "url": "api/web.api.html",
    "revision": "73b65673d17fbbdb091d5e8ba8157e0a"
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
    "url": "assets/js/42.c593dcd0.js",
    "revision": "de6322a24332ac7292557afd88ecedf5"
  },
  {
    "url": "assets/js/43.d8cfb443.js",
    "revision": "1f7493c69fa1add33e4836817d6b7701"
  },
  {
    "url": "assets/js/44.d1c04bcd.js",
    "revision": "c7a2f14604693f220759602b33aa505b"
  },
  {
    "url": "assets/js/45.aa2ae695.js",
    "revision": "23a27291fc4f0b7244f914afacc3485d"
  },
  {
    "url": "assets/js/46.68f95837.js",
    "revision": "950e6f5000d39fa23241abd313047c29"
  },
  {
    "url": "assets/js/47.2e388cfe.js",
    "revision": "29a332dfa3f124bf74d7c19d3efa37de"
  },
  {
    "url": "assets/js/48.a036c292.js",
    "revision": "17f59a1c16a517b1c95272a90971264d"
  },
  {
    "url": "assets/js/49.2cce32a5.js",
    "revision": "e29f2a0b785c61cdf18f59d53d8b05c6"
  },
  {
    "url": "assets/js/5.2a1ddfdd.js",
    "revision": "0f5e07eeebfb8d48e09826afa97445d8"
  },
  {
    "url": "assets/js/50.2ef33732.js",
    "revision": "dec9608176871eed1133463d6db6913d"
  },
  {
    "url": "assets/js/51.13fdf18a.js",
    "revision": "7279387d9ff36703d42e0606d8be6ded"
  },
  {
    "url": "assets/js/52.0295c1cb.js",
    "revision": "56ed61c47f44e1207e185105c7434034"
  },
  {
    "url": "assets/js/53.6541e44a.js",
    "revision": "3fdbec119cd8d6263efb8e07a76a6efa"
  },
  {
    "url": "assets/js/54.ba5dcc17.js",
    "revision": "18113d639b3709356b2cc3a4588f0029"
  },
  {
    "url": "assets/js/55.cfb7bcdb.js",
    "revision": "15d848d73963be62f8aa41ba853e7e22"
  },
  {
    "url": "assets/js/56.34fc7e38.js",
    "revision": "bf0fdeffdafe44420bbbf5ac0518a2f9"
  },
  {
    "url": "assets/js/57.72e7aab4.js",
    "revision": "320b8b01b87bc05b4702c70b298ae4c1"
  },
  {
    "url": "assets/js/58.ec058be2.js",
    "revision": "90459f78d62f29e52f82444f45672e41"
  },
  {
    "url": "assets/js/59.441f26f0.js",
    "revision": "7e42a41f106e135f04423a5ab1a7acfb"
  },
  {
    "url": "assets/js/6.9f6b0e9f.js",
    "revision": "1e4a82b78ac5a93744f69add1ddd3179"
  },
  {
    "url": "assets/js/60.62b1263e.js",
    "revision": "85f59aad667dfe80e508e45e99d0a33e"
  },
  {
    "url": "assets/js/61.18dd4835.js",
    "revision": "9e1146d767a1ff7a2eae83cef3845a5d"
  },
  {
    "url": "assets/js/62.232c3288.js",
    "revision": "1fa7b22903e06c41d5fa332903372f12"
  },
  {
    "url": "assets/js/63.697cd8a8.js",
    "revision": "23401cf51cfcfb0855a4153e4022c34c"
  },
  {
    "url": "assets/js/64.c8591472.js",
    "revision": "a2017dcaec7f7d2a89ee1640c7898e92"
  },
  {
    "url": "assets/js/65.dcdd3877.js",
    "revision": "b5fafa89b397e72cc5256ee66bf663ab"
  },
  {
    "url": "assets/js/66.37426b77.js",
    "revision": "d3a6ba5d95a2f0d295d79da470c83877"
  },
  {
    "url": "assets/js/67.229b821f.js",
    "revision": "af3f2d492f611c8850c9d181b2216666"
  },
  {
    "url": "assets/js/68.88b9b2e5.js",
    "revision": "e4112441564e5dadbc8fb0dbe00bab82"
  },
  {
    "url": "assets/js/69.ffa35730.js",
    "revision": "6008eb409ec8f59e5cb00100a6606801"
  },
  {
    "url": "assets/js/7.71dd1b3c.js",
    "revision": "edd98212f2f42a4d8730fa6479004d51"
  },
  {
    "url": "assets/js/70.f51b2e16.js",
    "revision": "4215ff32792aafd3f48af090f828c353"
  },
  {
    "url": "assets/js/71.62c7d83b.js",
    "revision": "8798bb599e6ff2c4dc2b6741dd86508f"
  },
  {
    "url": "assets/js/72.c468d0d3.js",
    "revision": "26f3002040cadcef8f6e784afd34c4ad"
  },
  {
    "url": "assets/js/73.bc6e2436.js",
    "revision": "27ac8976fa818facf34e57292887b996"
  },
  {
    "url": "assets/js/74.a4f04a81.js",
    "revision": "e7308f5564800e7fc8e4e11f662cbcf8"
  },
  {
    "url": "assets/js/75.0b77adf4.js",
    "revision": "9950576f28aa8e13451f2f4bda7f6a41"
  },
  {
    "url": "assets/js/76.e7f5d549.js",
    "revision": "c0312a1346685807e1b82b42b1fdedfb"
  },
  {
    "url": "assets/js/77.91996b39.js",
    "revision": "534ed3e6294a5b34e7b6814942b3e2c6"
  },
  {
    "url": "assets/js/78.23f41f01.js",
    "revision": "02a7c16162f07f8d7160ea3fafb12b13"
  },
  {
    "url": "assets/js/79.b06421f0.js",
    "revision": "73b095d2080dd2fa4a71a90b0206f2ae"
  },
  {
    "url": "assets/js/8.9a0a67f0.js",
    "revision": "d68d75911b7e60c739f53b5a97ac5642"
  },
  {
    "url": "assets/js/80.4e75498e.js",
    "revision": "51dea557dcb75d9a775f2706be9ba697"
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
    "url": "assets/js/app.4650e5d0.js",
    "revision": "33059d96eb1cb7b6a0aa69018494dc34"
  },
  {
    "url": "composable/_template.html",
    "revision": "8f40d1814f67f2578ea5dc140d6a7b0b"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "59296d7ef27d6f15e19bfbef2d714cbe"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "9135b71b1be81c6ff672d33cf10c0ce5"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "f7ff5d82d6bac2605b0085b361c270b5"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "66b91f4210c918b09b88c2d9b6b736c9"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "19c1f90dbdceaa2ac5860da81dd0651d"
  },
  {
    "url": "composable/date/now.html",
    "revision": "fefa49375fc83973435202ef80b7f4d2"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "eb6d711a0a060936b03748304b3d8ddd"
  },
  {
    "url": "composable/event/event.html",
    "revision": "7a6eca985e5a7c893af876e44f89e3e0"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "ec4a83c93b368eb208becc80444a7b20"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "4cd48f169033aa218bbeb3231bee6bc4"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "bf47c4324f104a50ececb04fa45eba08"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "060994d678513690d65c611d3163a07f"
  },
  {
    "url": "composable/format/format.html",
    "revision": "7381156f555d1830686a8dae362b9598"
  },
  {
    "url": "composable/index.html",
    "revision": "ca4992d6cc6b76ed798935dc85cad530"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "f30cd32ccfd8a2902ce7d4de3d37133f"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "4c13ff65692af640060d10d93d8acd6a"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "6402d50d30de099cd05678320104c636"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "9ece32a42ed9a71bd4b88a3d9d114e2b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "0d22c956d9ef8a6ceb2a91a24525955c"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "4e60c89ab97cb6319a6707c89c0a8e9b"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "e51754fe98909220e99be9dbb5296029"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "9483c6eea224f89e284282e172fd1810"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "e035405cab132d627dabc5e7404836cb"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "9d1eee7b0b694fb5ec1114fbba45c989"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "9bc5ec8797ec93b29dba82d3484914e6"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "1376f5ded7c9ac9c3cb69a61c704279a"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "d8a36f51d84d8e35962250a7e92a015e"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "14cb56720d287ebe92c480ef3fb19fe5"
  },
  {
    "url": "composable/web/language.html",
    "revision": "e6b6ed637147f1c2c21a05d1d884c859"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "24ef11b10724a9ecf068ee113938ada3"
  },
  {
    "url": "composable/web/online.html",
    "revision": "1f5548bfb90d335b4387e4f3025d3f96"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "c78ed10f49de445d5c95df5925b91f2b"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "47019eac6cab5b26ddbf1fe746f0a95b"
  },
  {
    "url": "Examples/index.html",
    "revision": "fc11b95b8f3b988183bdef3f223b9b33"
  },
  {
    "url": "index.html",
    "revision": "425b223881b294814a2361cb36137232"
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
