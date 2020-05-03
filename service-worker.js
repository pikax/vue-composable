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
    "revision": "77502931514c4d10f19a1215052c65f8"
  },
  {
    "url": "api/axios.api.html",
    "revision": "625a95002ffed117476efb99c81dd119"
  },
  {
    "url": "api/core.api.html",
    "revision": "210894200ae54af60fe962007871e3e8"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "3bcc9f13f4270fede713faafdb32866c"
  },
  {
    "url": "api/web.api.html",
    "revision": "d3067fd91c3f95c4eb135a7c1b39e507"
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
    "url": "assets/js/1.f04936cc.js",
    "revision": "9d36ce5b73ec1af4eb83145b6fdfae1b"
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
    "url": "assets/js/53.1f3a64e0.js",
    "revision": "956f1311397a05fe92b703a707ed0843"
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
    "url": "assets/js/app.d3c3c61a.js",
    "revision": "76048974d1ed2f24426a1df9904a08e1"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "75212d6aec8143725109bee1c0adacc0"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "e98cdf0d387fc26e284e2ca9ce1f09f9"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "49ff261d4e1fc506a6700839ebc58e2d"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "abe6219e6db5cae9f9e36db55093815f"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "fe85105f188a2a34a3a572b180ad7aba"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "662e2d4a7eeb045acd2d319d4eafd652"
  },
  {
    "url": "composable/date/now.html",
    "revision": "d6bd321ccb4d78723b0063c026be5efc"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "cdd41867712f175668d51228cfb5b1c0"
  },
  {
    "url": "composable/event/event.html",
    "revision": "c3110b545ded033c5911a7e29a9a6c75"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "79119963da3d26d05d497cd6d80eaeb2"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "f46d08fe1594b38ec902f0b7f3faf15f"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "ecf9a34f164b26c71ff9c43268a8a1c6"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "49322094525118e2d2a6f157e45143c7"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "858ed6da43793c556141bbf3bb43b8ce"
  },
  {
    "url": "composable/format/format.html",
    "revision": "d049c4c2f3d287f8c53929303574d79d"
  },
  {
    "url": "composable/format/path.html",
    "revision": "ee08e3a6c1b02ee34ea4f15a3c2f278d"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "bd316af45de9b53110a06bf63ffd6c41"
  },
  {
    "url": "composable/index.html",
    "revision": "333cbccdf0165b88139ecb8cc6ea43fc"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "170f960ccece436e304d1f87b547beef"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "ef85593619b87582c1d78197a99b84aa"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "63ed8d57dcc247a46d6d621f15cbbab7"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "0c19f81bbde1135997986863c5ff9865"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "3dfe29ad21f0a98d97ab0f6cc2c71295"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "8b8630b0e8426ce4fbcae98707f03b0f"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "3d54ea348b1ddf68991369ae5d96f125"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "8459ea18b61e14ccb1e8ff0b1b475c4d"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "026dad158eca19ad9cfe02365651fb47"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "8f508f401a7c71b993c57c2f43556a1a"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "13d7a2bf141c299dca0a985db009f219"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "84dfa055e6c67113cd176c950128dad1"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "b061a355a7497c666f798b9de0eb8919"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "2883e805e75bea08e20c416b2ab1bbac"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "233a1d4a28f45a88bc8b914f3fbf7c19"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "730edffbef9c9b91ad877941e3cf7662"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "aeaf43ddba132b9401d44299a8396912"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "6956254f3b8c0320f0e96e237f8a5650"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "320e4ca0ee3d43aa84df3d24bf6fa474"
  },
  {
    "url": "composable/web/language.html",
    "revision": "f8e731fb84259c3a3a7787ae7541215b"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "c01b486d869efa13a67654b7489babac"
  },
  {
    "url": "composable/web/online.html",
    "revision": "8cdc15bd4f18901133e14f5914214d0e"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "2e13f7d9017284d1dad0a65b5916be8b"
  },
  {
    "url": "composable/web/share.html",
    "revision": "21adc094922f9e33cc049e0988409ea0"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "c13b323213a42ca9384eea7e5fb69f38"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "73afc214255db6fbbd1c3adbfa253968"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "826c3f815f0d625f4afa57039da9581a"
  },
  {
    "url": "Examples/index.html",
    "revision": "03b520202b39aee1733de24d05ddd89d"
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
    "revision": "c9e63e1ec6af06be33485f8882d132f7"
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
