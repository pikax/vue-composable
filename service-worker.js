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
    "revision": "79d263c8c3822255baa255e6e0c1d5d5"
  },
  {
    "url": "api/axios.api.html",
    "revision": "21a53dd58f671d33b430c1d2dcf5e11b"
  },
  {
    "url": "api/core.api.html",
    "revision": "9706269e48b5897d0ae84b471966504f"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "1a92933e2944d355ef5363dd2694dc43"
  },
  {
    "url": "api/web.api.html",
    "revision": "5c430629f12d7fba9c2e96e5fee57ddf"
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
    "url": "assets/js/0.dd46f9ac.js",
    "revision": "297e038616a6b08f8c845e14c80d0055"
  },
  {
    "url": "assets/js/1.8e12ac28.js",
    "revision": "210f2b3d0dccd817520aaf982b1904f9"
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
    "url": "assets/js/12.3fac91a0.js",
    "revision": "ecc1bc51eff8f03568c2e38ab474886e"
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
    "url": "assets/js/20.c74a55ec.js",
    "revision": "fb8dd7c5929e54d3a8e157f398abf7f3"
  },
  {
    "url": "assets/js/21.5d429017.js",
    "revision": "9f8eb1f82c662caa541fc0e5a117d097"
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
    "url": "assets/js/32.f04d5ed0.js",
    "revision": "a666a1f71234ee5206a82119d4385970"
  },
  {
    "url": "assets/js/33.e4f54887.js",
    "revision": "823ec2ee2479e0a0aa58b7a7e5a5c69b"
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
    "url": "assets/js/37.aff67a7b.js",
    "revision": "f841aeac21ea62c3747091ede0c9f8f3"
  },
  {
    "url": "assets/js/38.881ac1a5.js",
    "revision": "afefac4ec5175adcdcdc7657cb200481"
  },
  {
    "url": "assets/js/39.97ad679b.js",
    "revision": "f006d65750281b569d11790a2d6c082f"
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
    "url": "assets/js/5.edf11f39.js",
    "revision": "2fc75242ddf685fff4f187c0bec4d95a"
  },
  {
    "url": "assets/js/50.854e7921.js",
    "revision": "fa5a3d881d62ad236c7c572746c9a11e"
  },
  {
    "url": "assets/js/51.7273f024.js",
    "revision": "0826f711ab7d79bfcf7d60bbef856afc"
  },
  {
    "url": "assets/js/52.8c5506d7.js",
    "revision": "a96675303e1c61f947ca668a256c3893"
  },
  {
    "url": "assets/js/53.c92ffa68.js",
    "revision": "f537a0b1bada004dbb1d7ce5d6d4c6c9"
  },
  {
    "url": "assets/js/54.c6b3dab5.js",
    "revision": "79b16966764679ec6ec8bb8b3349166d"
  },
  {
    "url": "assets/js/55.c6041de5.js",
    "revision": "1283c2bffe4064f72f2cafd0313ff033"
  },
  {
    "url": "assets/js/56.201a4dfc.js",
    "revision": "d88f969f7f59147a501d622e926e563b"
  },
  {
    "url": "assets/js/57.d26e00f3.js",
    "revision": "f2a8062d3281f4ab715ae6288c039016"
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
    "url": "assets/js/72.a8f66152.js",
    "revision": "c98cc114ed7cdc7cd6b47ed26cd849b7"
  },
  {
    "url": "assets/js/73.dd2fdfd9.js",
    "revision": "6c4ead44af68f08831347f55be959af4"
  },
  {
    "url": "assets/js/74.ff13938b.js",
    "revision": "5c36d1caccaefebe4c884d1b720aae52"
  },
  {
    "url": "assets/js/75.19442fd0.js",
    "revision": "76e25e054cbc2d3a3c7901ea19c4bc16"
  },
  {
    "url": "assets/js/76.83e6f7bb.js",
    "revision": "f0385cfa96d19c102cafbd1ab186792e"
  },
  {
    "url": "assets/js/77.4efb7241.js",
    "revision": "cee6fe895f3b00644756831618640821"
  },
  {
    "url": "assets/js/78.b7c013b3.js",
    "revision": "72fe24c8102dbbd8bc634a962b8175c1"
  },
  {
    "url": "assets/js/79.7fae64ef.js",
    "revision": "eb39384b1492f450169d569bc98a0b98"
  },
  {
    "url": "assets/js/8.dea6363a.js",
    "revision": "90d2a4c5d8286bf74e69b140f59475fa"
  },
  {
    "url": "assets/js/80.fdac06e3.js",
    "revision": "333a3e4c3086cc676d8ab8903310b74a"
  },
  {
    "url": "assets/js/81.66819522.js",
    "revision": "b06d1c5ca3ce04746fc3be067286c8eb"
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
    "url": "assets/js/app.5cbc9bfb.js",
    "revision": "62cd96af6cb88252e55066df54649346"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "e8ac3f9baed0b655f07809b8aede0c64"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "4bc428a0a3dd4d84af495741273e3124"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "d58762c805423e7fe3e8b2ce4970e369"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "a3ec7fd07dde677023102e8b508701de"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "729a6849f40f2bad6f61ca3596d7fe00"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "3a9a6cfc748caff256e4695ab207dcaf"
  },
  {
    "url": "composable/date/now.html",
    "revision": "c3edda2b31b12801dbc7a30b249a6210"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "a845f58c8c2d916a92cb03c623905816"
  },
  {
    "url": "composable/event/event.html",
    "revision": "dc2c90c2c1418c86ee69e6a8e62a83f2"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "630f825cde4b29a34995445d7bc214eb"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "3e28f2b7e535e30096fd4ff20a21f541"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "40a435f23c9834eb3c5872308dd9fc8d"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "f32c2aa534d2abf7ffc4ebe63a110fa2"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "490965b2939b1aaec57c854dc33714b5"
  },
  {
    "url": "composable/format/format.html",
    "revision": "8d0458b32d74fed5a5c909b61c4f2994"
  },
  {
    "url": "composable/format/path.html",
    "revision": "f60a89f495e1ef6301ccf3f41913037a"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "000ef13d2aa20327a326593f1d1924e7"
  },
  {
    "url": "composable/index.html",
    "revision": "a3caa8bb5fd2200a91efeff2bfc3445f"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "bb374383f970643075c5bece22bcf71f"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "65bed252c91e3321d05cf0ddba3acd45"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "d5ba9c2ad5542ab70ead775bb6ec6d97"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "7d1a70ddcf2fbc90097013781e3b1351"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "51324de71ee739fd4685df79cbc58749"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "2ebc337879359ad825c3909d3a8db8fa"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "ff613ac74de5b473307a5a0e9acd775b"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "9792bb4c46978190e7e20a81f384782a"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0422b3e5359b36fd6e6438c5caea0a60"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "682c8bbb556762e61a67a4d4d81e1101"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "b494ef78f0249f04b82574947c73dd42"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "6595f98fe3f37d0efc4390c8658cc7db"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "5d28142af96c4900d13888e84bf70fbf"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "c2bf2494db068f24edf6b5867ed2ed49"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "96beb0d08541ffd9200093f79df0855a"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "f5f92ee319909d127a73f37bcb524097"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "0cc7fedfcd2368bdbad59fc3dd5a769e"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "46f52e16c1fa98db5126922107eaee99"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "74199a3f7169b173894a0e5ff5507c5b"
  },
  {
    "url": "composable/web/language.html",
    "revision": "044255435947ddf86f31ff67c7ef749a"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "1741e8b4b8eb8dbb67f4bcaca7462db1"
  },
  {
    "url": "composable/web/online.html",
    "revision": "c6262b70a0e767e84220b639a8f83dd3"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "c38008abfac56a03af70e97ccdc38130"
  },
  {
    "url": "composable/web/share.html",
    "revision": "5182f20d9ab0241fc271b83df4e58273"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "a3ca102f9095c0065a83cd8e53ed2c9b"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "4a1937514a12fba5b191615e6d065fea"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "ed620c25f8aff35735b0e50ae66e481e"
  },
  {
    "url": "Examples/index.html",
    "revision": "adcbc1c461347e2a071b04de872816c5"
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
    "revision": "ea80e17e2783c809466246067309d08b"
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
