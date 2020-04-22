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
    "revision": "911ab2615fb98c5b429b3729d0590add"
  },
  {
    "url": "api/axios.api.html",
    "revision": "8a45c30717d31ca74057aa19c7483ca5"
  },
  {
    "url": "api/core.api.html",
    "revision": "ef3df6f97706f3eca143218b3f94e407"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "a9f6801155c4edfe969a472e13607d3e"
  },
  {
    "url": "api/web.api.html",
    "revision": "8eec6980c7317f40207286f5e8afadb9"
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
    "url": "assets/js/1.4f7f9cad.js",
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
    "url": "assets/js/50.9350ff8a.js",
    "revision": "db441721e18a53b9e1c0a6c0c384a055"
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
    "url": "assets/js/53.d76ca5ae.js",
    "revision": "fd6d74e843c5e8567d97b20ea78aaafa"
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
    "url": "assets/js/app.21eab1dc.js",
    "revision": "2cc38722bea8a695460754cd671599cf"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "afc55eb491a788245b31b37915debd24"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "a38b04d73769773d08b857728b826c03"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "0d7cb9dcb64f62681d0fd2883d4f311f"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "d620bc2f7ff908eb3be09079d7889567"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "f213a5acaa98a330cee3193f18e67f7c"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "85ed65c752b62bd9613390ed18074516"
  },
  {
    "url": "composable/date/now.html",
    "revision": "e1c09e0aa3d9a6376eed809f9033b1a2"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "959ac2aefc3322a0dbad43ab41f2f24f"
  },
  {
    "url": "composable/event/event.html",
    "revision": "dca4ab10e342d751916ddaa700e46f5d"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "1ac29dabf9ee0e71615efadf3a029947"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "12da54300e68929beb74424a6f0b846e"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "1e50f937fb48c42245d138efb3ce48a8"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "d6910d3f83f1a0841a2c0983e27d4b0a"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "377436dca5b3648a844b5058317a1864"
  },
  {
    "url": "composable/format/format.html",
    "revision": "48e28eb2a569225f1b892234c606ff1d"
  },
  {
    "url": "composable/format/path.html",
    "revision": "8d55cb322369f48e1b1be4317aef3b3b"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "47b38c2b4433fa4ef10c68c462835aad"
  },
  {
    "url": "composable/index.html",
    "revision": "2ee96b1cbd0db557b3b7877a1fb61551"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "332ff3615476a56fa3216c9ae9d54cd1"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "6c8aba11b06dccccdac089f15e003c8d"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "e5d56f20ecb6945cc77d4d3abd06287b"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "89165c6a36389a7629ccf44ff3fd7eda"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "7db56e552f08f961be63cc945ff17932"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "3d244918619c5c5a2505793753531361"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "9c6c6ed360d3c04bf7aca2fa95ed3a16"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b5901fa6c135711174fe5c320af05873"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "6961d9a2c397b55dca77257178e20ceb"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "e24c6543b25a351e148e16f81f62f6c3"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "2104a2b8168c6ce2e762e321e585d8e9"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "9b18b29e38b25c60e428980a663fb180"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "cefe5c5c682253e63e795993b4cfb0dc"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "d8cc2b5a20ba464ecf602886e6cdc7d1"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "37af7c31783e0a29a6c72765d6c3ba7b"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "8ac52689a1073cc388698fbc3faf796c"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "ac24bf36403ea9d3938d4be602d45687"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "ed4abafced6da6c3e7f35b95e1f6bd40"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "1a23abe9e48cd58e9122a5502ce69a12"
  },
  {
    "url": "composable/web/language.html",
    "revision": "e66111f4fe1115dd64356a14cba38e6f"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "890239245c229423f2037d7ef03421fc"
  },
  {
    "url": "composable/web/online.html",
    "revision": "1368cfb7c636cc5a8248cab7a6e91ce1"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "0e22dd5f910a396f2cdcd1a2ab5562f9"
  },
  {
    "url": "composable/web/share.html",
    "revision": "45574e7d42728b6abc7257acde8e32df"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "9690eb3360d4d5af72b950ac03cf0f05"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "47a727f0dec726c4c756268a59b3ee5b"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "ed9eacde3c72d94d027519ab61dc1ef6"
  },
  {
    "url": "Examples/index.html",
    "revision": "8f62a8044f9f9ea93e673ded5c446117"
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
    "revision": "2c98ca2a275d4a221dd862fdb8910692"
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
