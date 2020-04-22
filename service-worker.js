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
    "revision": "e4a9c367113770cf42f0bcf4988bff5c"
  },
  {
    "url": "api/axios.api.html",
    "revision": "97238d7eed8df7cbbedebd03e64efdcc"
  },
  {
    "url": "api/core.api.html",
    "revision": "9a83737f2de169f924bc31eabd640baa"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "ace40952578d77d14857bb2424691f9a"
  },
  {
    "url": "api/web.api.html",
    "revision": "3ece41d8e7186b0fbed40a0d4ef6fecd"
  },
  {
    "url": "assets/css/2.styles.26ab6149.css",
    "revision": "bd1174a3106569cb1f2554dabc2d5647"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.6d65112c.js",
    "revision": "371d7200d6ba2e1bacb8640d5530151e"
  },
  {
    "url": "assets/js/1.9e06744f.js",
    "revision": "9dc1a4e57c73cad3264d6e7392d2ae13"
  },
  {
    "url": "assets/js/10.64937e56.js",
    "revision": "5389892b994e127506a38f62364a4784"
  },
  {
    "url": "assets/js/100.97632c70.js",
    "revision": "76cd36100e504a2e090126ebe47ac24f"
  },
  {
    "url": "assets/js/101.e8cdc923.js",
    "revision": "cb18a1b375d30f0838e7f0bca457a273"
  },
  {
    "url": "assets/js/11.e8b67b79.js",
    "revision": "991ecfb33e5d8946ce18fd98df1d00e4"
  },
  {
    "url": "assets/js/12.c94ec01a.js",
    "revision": "d6cdad07bfee1e71ed0b1a233420d463"
  },
  {
    "url": "assets/js/13.54f8557f.js",
    "revision": "182b97ebe92e7e1aaa30003641c29a57"
  },
  {
    "url": "assets/js/14.a8813d72.js",
    "revision": "b52ccd30f6d050977feacd6cd40a62fd"
  },
  {
    "url": "assets/js/15.4ec80a8f.js",
    "revision": "79f44d932efe73965e31cbab3ce4997d"
  },
  {
    "url": "assets/js/16.4d7b966d.js",
    "revision": "49bd2624ae3d42fbc2dcee2bf7d87f31"
  },
  {
    "url": "assets/js/17.929c68cd.js",
    "revision": "b8d5064e70ac87cf0c10ec197f6fe15b"
  },
  {
    "url": "assets/js/18.926c89fb.js",
    "revision": "cb751fa5442a3595d9b332f7a26cfbbb"
  },
  {
    "url": "assets/js/19.a2094392.js",
    "revision": "b17747786ac985762a23c04158f8ef71"
  },
  {
    "url": "assets/js/20.89fda068.js",
    "revision": "0d3b0c1603ee04d1c07b3dfb97de875c"
  },
  {
    "url": "assets/js/21.f187a301.js",
    "revision": "f1aa063bcdf446c3b9fda33b5972b798"
  },
  {
    "url": "assets/js/22.113dbef6.js",
    "revision": "d91e7c40884727d993bd68a0206fb66a"
  },
  {
    "url": "assets/js/23.af88de5b.js",
    "revision": "f01cf96c92e39830980cd512a7624980"
  },
  {
    "url": "assets/js/24.17ce1473.js",
    "revision": "a2b7f3c51fc64f0a76d817a08d031452"
  },
  {
    "url": "assets/js/25.699c2ab8.js",
    "revision": "abef33be852b639a3ad8f35c6c8a67cd"
  },
  {
    "url": "assets/js/26.3b47b1e7.js",
    "revision": "6a24ab6765a9e67597d23eff35fd43c4"
  },
  {
    "url": "assets/js/27.66b2e5e5.js",
    "revision": "51e6b369920de945a195508b547ac86f"
  },
  {
    "url": "assets/js/28.92bbaffc.js",
    "revision": "37032adf8eb19d1c6490a79a9e888a1d"
  },
  {
    "url": "assets/js/29.8ebf8c0e.js",
    "revision": "2f3322a127c7e61131b1c538328048b5"
  },
  {
    "url": "assets/js/30.f4b2cdef.js",
    "revision": "e947e6fa82ff81f23be08aa59d6588c8"
  },
  {
    "url": "assets/js/31.d853ce86.js",
    "revision": "3e442d7f006dc699873e062e9a83e9db"
  },
  {
    "url": "assets/js/32.fc48feb4.js",
    "revision": "9ee9ed138df9619d7b1c23692f3b2113"
  },
  {
    "url": "assets/js/33.cc116112.js",
    "revision": "df059668e3aed07a3e818d9670b17af8"
  },
  {
    "url": "assets/js/34.dbbe42bb.js",
    "revision": "248351a6107fb4d15089ee0da2c33ea4"
  },
  {
    "url": "assets/js/35.6f36ba15.js",
    "revision": "0800edfcafc5446dfbd6e813e19ac7b3"
  },
  {
    "url": "assets/js/36.d2d7e278.js",
    "revision": "06ca5e6c9daa9ee3f7ceff1989d7af19"
  },
  {
    "url": "assets/js/37.0465a67d.js",
    "revision": "4588689f52d0b74ddd2e56afdff0a29d"
  },
  {
    "url": "assets/js/38.881ac1a5.js",
    "revision": "afefac4ec5175adcdcdc7657cb200481"
  },
  {
    "url": "assets/js/39.8d5c9c12.js",
    "revision": "5eb538c4e117de099845e1bc28712092"
  },
  {
    "url": "assets/js/4.aa2c465a.js",
    "revision": "3d2ce5a5cad5013d9aea6b5c6600653b"
  },
  {
    "url": "assets/js/40.2645e85e.js",
    "revision": "67e747e730da9926fef58bab3263f0ea"
  },
  {
    "url": "assets/js/41.d5277dec.js",
    "revision": "f9c92bf39988857c934b87157956264b"
  },
  {
    "url": "assets/js/42.9bece999.js",
    "revision": "7b18b0774d43ed3d0ebb7517420d06ad"
  },
  {
    "url": "assets/js/43.8b8d2e1f.js",
    "revision": "be2a7d47467997ab9edcae694d4d267a"
  },
  {
    "url": "assets/js/44.81ee5b96.js",
    "revision": "9a9de21642713c67194e80649c1fd4a3"
  },
  {
    "url": "assets/js/45.b301b5a4.js",
    "revision": "0e6cec90ebb52fe9a6297e017cb6a9de"
  },
  {
    "url": "assets/js/46.29f15597.js",
    "revision": "f6dee69baf34efc62eb2af6577034131"
  },
  {
    "url": "assets/js/47.9ee79a14.js",
    "revision": "36138d0d1659a77170095eeff7d39afb"
  },
  {
    "url": "assets/js/48.93ea7ce8.js",
    "revision": "256d50aa644d9c8e9645980f1b2f3dd4"
  },
  {
    "url": "assets/js/49.b4cec7af.js",
    "revision": "8967359c738adf38b2edf7cb07ddcfca"
  },
  {
    "url": "assets/js/5.b32b39fd.js",
    "revision": "a404efd3b7e2a02b1054edd8cd139d7b"
  },
  {
    "url": "assets/js/50.139a1410.js",
    "revision": "049d31fba1a5a4f213654942f3559416"
  },
  {
    "url": "assets/js/51.7273f024.js",
    "revision": "0826f711ab7d79bfcf7d60bbef856afc"
  },
  {
    "url": "assets/js/52.6f598786.js",
    "revision": "5da462f28849135b38dca3a6a42858b0"
  },
  {
    "url": "assets/js/53.f24fe6a8.js",
    "revision": "b3e52e226b0443f443ea6e3d592bd493"
  },
  {
    "url": "assets/js/54.29a54252.js",
    "revision": "a16c48f801247ac0aee89a4048e12cc5"
  },
  {
    "url": "assets/js/55.25632302.js",
    "revision": "0ecae077575bb6e37c8e9872937322d2"
  },
  {
    "url": "assets/js/56.2734b771.js",
    "revision": "572dc7a6d6b7d9076551f5cf8ec1b2d2"
  },
  {
    "url": "assets/js/57.13ec5541.js",
    "revision": "ab38b536096628254138b831f3d55db3"
  },
  {
    "url": "assets/js/58.2c17a4b9.js",
    "revision": "5f3af0de0a34ee3556e425c6b22dd10f"
  },
  {
    "url": "assets/js/59.0e699493.js",
    "revision": "9c0a1438a16355e4fd14f87e3ab8418e"
  },
  {
    "url": "assets/js/6.8153f61c.js",
    "revision": "10f09301ce478a8ff9d47ca0e299d202"
  },
  {
    "url": "assets/js/60.7c31f20e.js",
    "revision": "2743779d57898614a72ac1bba7958f1e"
  },
  {
    "url": "assets/js/61.9a176e3b.js",
    "revision": "5380e469b270224d4236b4b9a68e4182"
  },
  {
    "url": "assets/js/62.553a9ff3.js",
    "revision": "2b4e78be5cd85c8c4de2585391e1545b"
  },
  {
    "url": "assets/js/63.70347430.js",
    "revision": "2fb502931acc59bf359f35a915f8d279"
  },
  {
    "url": "assets/js/64.220e1ef5.js",
    "revision": "87f18b458762f54925f7cf5e495e5150"
  },
  {
    "url": "assets/js/65.b1804c5a.js",
    "revision": "93e35a5ff57fbc0ebf9be74d639b6186"
  },
  {
    "url": "assets/js/66.6265712f.js",
    "revision": "1245f5b7d37603e7b00efb5cef45b20d"
  },
  {
    "url": "assets/js/67.55e62f93.js",
    "revision": "a9dc9e254f7ffb4a4afb71dcdde8801d"
  },
  {
    "url": "assets/js/68.f7a4888a.js",
    "revision": "41743cc3d712e2fdb3dabf7d3e0a655c"
  },
  {
    "url": "assets/js/69.57814c14.js",
    "revision": "34ebf3526705bbf925d43284abc7b917"
  },
  {
    "url": "assets/js/7.7c0de98d.js",
    "revision": "d0fe0800b76c4efa5c13f667c799c6d9"
  },
  {
    "url": "assets/js/70.36b332cf.js",
    "revision": "2e80fc4147198172835c9da75b8b7959"
  },
  {
    "url": "assets/js/71.277ee8ca.js",
    "revision": "e1d889e9d8686656e8a0b98aade4b183"
  },
  {
    "url": "assets/js/72.b181517d.js",
    "revision": "e75e696a70eebada8cdd1744ba3b39a9"
  },
  {
    "url": "assets/js/73.d5ffbc73.js",
    "revision": "cc40d261bc1c6c4f9d6d023dd210a1e7"
  },
  {
    "url": "assets/js/74.9414b551.js",
    "revision": "b88a4817b65ccb5cd540001d19566089"
  },
  {
    "url": "assets/js/75.608a1fa2.js",
    "revision": "8323b4d24f0e9a8f1cd876342beebab1"
  },
  {
    "url": "assets/js/76.ddf417d6.js",
    "revision": "5ca7213f1e69009ab4cd3e259cdebb8c"
  },
  {
    "url": "assets/js/77.93d0c61c.js",
    "revision": "e9606f3c6141cd1cfd9d14a2fc4b3279"
  },
  {
    "url": "assets/js/78.68a01f71.js",
    "revision": "8cbfcb9dbe7a3d93936de8f3c195c88b"
  },
  {
    "url": "assets/js/79.45674472.js",
    "revision": "1f1842cb4aae26dd03d50c77a3975718"
  },
  {
    "url": "assets/js/8.dea6363a.js",
    "revision": "90d2a4c5d8286bf74e69b140f59475fa"
  },
  {
    "url": "assets/js/80.84a6eb4b.js",
    "revision": "6a05a254a5d96d1241c85064355d13de"
  },
  {
    "url": "assets/js/81.f79b67fd.js",
    "revision": "89c617dc691162103fa7358a2e841b6c"
  },
  {
    "url": "assets/js/82.be60fa38.js",
    "revision": "d013ccab1c53df6b5d46e6f78190d1e6"
  },
  {
    "url": "assets/js/83.efb4ee34.js",
    "revision": "d1b475440344cfd4a8aa8607e8e8d53b"
  },
  {
    "url": "assets/js/84.e4ca9018.js",
    "revision": "facc5b4fc6265216ad3cab74167603f5"
  },
  {
    "url": "assets/js/85.600782c6.js",
    "revision": "8d64713ebda85bce718dd5596988afbd"
  },
  {
    "url": "assets/js/86.144f6085.js",
    "revision": "c8138c684541e7130d3327a6310ca67f"
  },
  {
    "url": "assets/js/87.b555c032.js",
    "revision": "ccc2f5ddfefc2a9e89abdecf1876b5e6"
  },
  {
    "url": "assets/js/88.e53d5301.js",
    "revision": "e70fd238f67e04f6bd49ea1a835a6da0"
  },
  {
    "url": "assets/js/89.3d01950c.js",
    "revision": "3e97c754247ecb4908d4549514e9a32f"
  },
  {
    "url": "assets/js/9.169b1a57.js",
    "revision": "597d215c06aee15155a072e2ee672b40"
  },
  {
    "url": "assets/js/90.a1700b79.js",
    "revision": "fbd0c70cfcbf2566ca5ca07a5ccefb89"
  },
  {
    "url": "assets/js/91.25772702.js",
    "revision": "9af0f1c8c817953af9f455316cd053cb"
  },
  {
    "url": "assets/js/92.4dc0b9f0.js",
    "revision": "c39903179cf290b3f114cd9a898b78b4"
  },
  {
    "url": "assets/js/93.0579c10c.js",
    "revision": "2178fedaa326357f4a5b870df44a3528"
  },
  {
    "url": "assets/js/94.efecaa26.js",
    "revision": "58a22113482a60412f3a66242366fd9c"
  },
  {
    "url": "assets/js/95.3c2ac702.js",
    "revision": "9fad7b73f5104db0e71e12f9aed732a0"
  },
  {
    "url": "assets/js/96.eae11d38.js",
    "revision": "624d8abaf4fd6c812fe25ac638c904ef"
  },
  {
    "url": "assets/js/97.4b06a2c4.js",
    "revision": "7e4d291ff3caef6c7283fd2fcecacbf7"
  },
  {
    "url": "assets/js/98.9c19dd0e.js",
    "revision": "fc35bae1216caced04d3961c7dca573b"
  },
  {
    "url": "assets/js/99.0e74c661.js",
    "revision": "dc603c394af8c4144e6317e7f4ba7f92"
  },
  {
    "url": "assets/js/app.fed087ac.js",
    "revision": "2e88663b90bf542e5e7e9753eb509063"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "4067f222c7ded2ee37a9714f0ec342ec"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "035d2b9605c33469e3319f3f9d4d9ab3"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "eabb5c945295c889b2afcadaf4757dfb"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "d44def749ec060ba400e8cb092684d75"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "51f54fa1bcf67d48333f0002ffdd0854"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "3144df977c95caf7ecef3e6df53c391f"
  },
  {
    "url": "composable/date/now.html",
    "revision": "5eac89a2cfa4f2476eacd34998a2cfcc"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "908a8f0a81722e51fb219baba50a4dbd"
  },
  {
    "url": "composable/event/event.html",
    "revision": "dd0cfb3d7384260da70d3585978772da"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "4e54dc863115b042c9b94c2853d343a5"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "cfc8477c6919322a2dd86c2a78c63d5e"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "837d48255d4ff75c4eb2ae018208ff82"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "aefeef61551b96927bd345578b7d599b"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "40e4a72b630054e16d16941ff7d62440"
  },
  {
    "url": "composable/format/format.html",
    "revision": "d0bd3147be4df55cfdf4b11dc8d5008f"
  },
  {
    "url": "composable/format/path.html",
    "revision": "b597216c5a71052af558404a94463eeb"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "b54c8973454b8365c818b09c5b3ffc2e"
  },
  {
    "url": "composable/index.html",
    "revision": "548264e9e2e9bf47e8cdcaa360637c85"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "7717e588cc23041be39e4c9dcfe300b6"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "562a0586d7bf3d1e07c402f4155c4c58"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "e5ea896af74948ce8617d177b54eaeb5"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "6ae71ae76cce1920f83314fc58e7fac9"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "bda10e2b8347b626b10cc7ebf3224da9"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "2a4d03bc89266dda4154f4b33d004f33"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "5870345d90835375a3c7dae42510084e"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "12c821d0e9f69249d1c02c35c1375f93"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "c471a64a7eb23a501780cf88ad9f62b4"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "86986a2fdf510f6a47e624b62d5f39f2"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "c4e15692e3c093bd6de9a3b661a53ab2"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "0ec474e12e25e1a57d8e98006e7ab19d"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "587a5aaa8c0150b067b56140ccbd32a3"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "805e1117646a9c47b941e548be6ad0e3"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "19ece1c93b8b9582f2f33e5ea3e00038"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "1c0b71461ca9cc8d357c501412c47416"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "0bd62824c05675a7cbbb697841c7c34c"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "bbb8a3307acda65353d3d25d3fcec3c1"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "d14c7172998773ad024216b9b1ae0af2"
  },
  {
    "url": "composable/web/language.html",
    "revision": "8d616ab4460407622a2c252f510fe71f"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "054379af49320499c26bed8239229b3a"
  },
  {
    "url": "composable/web/online.html",
    "revision": "c537acf91872abca16299d98c0126bef"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "f156c581a18a9518cf233bafc7008a8a"
  },
  {
    "url": "composable/web/share.html",
    "revision": "5f3aa6d356e36dc87bd246226ee20df4"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "7011f4b54678d8f090a37f0412c9b4af"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "68c25881503a96f424fd8a8b17e72f4f"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "32330ab26ae240cde3498bb83ec7cde7"
  },
  {
    "url": "Examples/index.html",
    "revision": "41da2a8e43cfc6dc0fe8eb3e4f532cc3"
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
    "revision": "f2b8cd97da0b224bcd2deffad0bcdd7f"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
  },
  {
    "url": "worker.example.js",
    "revision": "f755a971ea3890285ded636071badae5"
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
