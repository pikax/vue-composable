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
    "revision": "5e513c12a5807729dde05c338f3d0611"
  },
  {
    "url": "api/axios.api.html",
    "revision": "586d048344281cae9580575421b08368"
  },
  {
    "url": "api/core.api.html",
    "revision": "832b4c42d362ae17b469fa92dca7d780"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "322638ee872bd490d7ec33f8664ff5b2"
  },
  {
    "url": "api/web.api.html",
    "revision": "66fdbd375e4793e1de62585c6eafdbf8"
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
    "url": "assets/js/1.8d582c3a.js",
    "revision": "1bcc928f03b59a9ca339c201acc4728a"
  },
  {
    "url": "assets/js/10.64937e56.js",
    "revision": "5389892b994e127506a38f62364a4784"
  },
  {
    "url": "assets/js/11.7db08ab7.js",
    "revision": "c80924176660d7ab0fa9743cc1763e47"
  },
  {
    "url": "assets/js/12.10513ac9.js",
    "revision": "cef25e4e77ae508500a694c764469988"
  },
  {
    "url": "assets/js/13.696334cf.js",
    "revision": "182b97ebe92e7e1aaa30003641c29a57"
  },
  {
    "url": "assets/js/14.fd26c52e.js",
    "revision": "b52ccd30f6d050977feacd6cd40a62fd"
  },
  {
    "url": "assets/js/15.bb6ccfbc.js",
    "revision": "79f44d932efe73965e31cbab3ce4997d"
  },
  {
    "url": "assets/js/16.8839e5ff.js",
    "revision": "49bd2624ae3d42fbc2dcee2bf7d87f31"
  },
  {
    "url": "assets/js/17.b4cb0b70.js",
    "revision": "b8d5064e70ac87cf0c10ec197f6fe15b"
  },
  {
    "url": "assets/js/18.cd173f9b.js",
    "revision": "cb751fa5442a3595d9b332f7a26cfbbb"
  },
  {
    "url": "assets/js/19.37cc9bac.js",
    "revision": "b17747786ac985762a23c04158f8ef71"
  },
  {
    "url": "assets/js/20.06c93a83.js",
    "revision": "fb8dd7c5929e54d3a8e157f398abf7f3"
  },
  {
    "url": "assets/js/21.9f4607c8.js",
    "revision": "9f8eb1f82c662caa541fc0e5a117d097"
  },
  {
    "url": "assets/js/22.4a008ebb.js",
    "revision": "d91e7c40884727d993bd68a0206fb66a"
  },
  {
    "url": "assets/js/23.6d713c6c.js",
    "revision": "f01cf96c92e39830980cd512a7624980"
  },
  {
    "url": "assets/js/24.6c9595bc.js",
    "revision": "a2b7f3c51fc64f0a76d817a08d031452"
  },
  {
    "url": "assets/js/25.b1e0827a.js",
    "revision": "abef33be852b639a3ad8f35c6c8a67cd"
  },
  {
    "url": "assets/js/26.c3db034d.js",
    "revision": "6a24ab6765a9e67597d23eff35fd43c4"
  },
  {
    "url": "assets/js/27.15dacd36.js",
    "revision": "51e6b369920de945a195508b547ac86f"
  },
  {
    "url": "assets/js/28.67582c0b.js",
    "revision": "37032adf8eb19d1c6490a79a9e888a1d"
  },
  {
    "url": "assets/js/29.51f3bca4.js",
    "revision": "2f3322a127c7e61131b1c538328048b5"
  },
  {
    "url": "assets/js/30.a84d4ac0.js",
    "revision": "e947e6fa82ff81f23be08aa59d6588c8"
  },
  {
    "url": "assets/js/31.db1c4139.js",
    "revision": "3e442d7f006dc699873e062e9a83e9db"
  },
  {
    "url": "assets/js/32.cde2afc3.js",
    "revision": "a666a1f71234ee5206a82119d4385970"
  },
  {
    "url": "assets/js/33.518252d1.js",
    "revision": "823ec2ee2479e0a0aa58b7a7e5a5c69b"
  },
  {
    "url": "assets/js/34.f6803a1f.js",
    "revision": "248351a6107fb4d15089ee0da2c33ea4"
  },
  {
    "url": "assets/js/35.0d92f240.js",
    "revision": "0800edfcafc5446dfbd6e813e19ac7b3"
  },
  {
    "url": "assets/js/36.81abf396.js",
    "revision": "06ca5e6c9daa9ee3f7ceff1989d7af19"
  },
  {
    "url": "assets/js/37.ef514e89.js",
    "revision": "f841aeac21ea62c3747091ede0c9f8f3"
  },
  {
    "url": "assets/js/38.c8c7c0d4.js",
    "revision": "afefac4ec5175adcdcdc7657cb200481"
  },
  {
    "url": "assets/js/39.c8653d58.js",
    "revision": "f006d65750281b569d11790a2d6c082f"
  },
  {
    "url": "assets/js/4.aa2c465a.js",
    "revision": "3d2ce5a5cad5013d9aea6b5c6600653b"
  },
  {
    "url": "assets/js/40.9fb6dc34.js",
    "revision": "67e747e730da9926fef58bab3263f0ea"
  },
  {
    "url": "assets/js/41.5195db91.js",
    "revision": "aac9be2067a0b47f9865356044ec050d"
  },
  {
    "url": "assets/js/42.c30a35a3.js",
    "revision": "d06b53f664f987dac11d03db0bf546f6"
  },
  {
    "url": "assets/js/43.9e8627b6.js",
    "revision": "516da683575e1cf2959c45645a9ca001"
  },
  {
    "url": "assets/js/44.f203f861.js",
    "revision": "a6dd2f5263d14820bb36ad3ccaa047bb"
  },
  {
    "url": "assets/js/45.fcf03301.js",
    "revision": "5f5cfadc3499344edbb5276e20b260e7"
  },
  {
    "url": "assets/js/46.fa745a31.js",
    "revision": "d6d680d7148c7198bc98ca83c25a025d"
  },
  {
    "url": "assets/js/47.9c4c76aa.js",
    "revision": "0ba8954654702e8d2cb6991eabdf7781"
  },
  {
    "url": "assets/js/48.d71ae323.js",
    "revision": "4402bda6783060e94aa8cce4bedd4981"
  },
  {
    "url": "assets/js/49.96354c71.js",
    "revision": "7897c3ccaa622cce88ef2fbf31771909"
  },
  {
    "url": "assets/js/5.edf11f39.js",
    "revision": "2fc75242ddf685fff4f187c0bec4d95a"
  },
  {
    "url": "assets/js/50.a4de951f.js",
    "revision": "7d283c10c9ab977c055b7878ddd18d92"
  },
  {
    "url": "assets/js/51.c055371a.js",
    "revision": "16d848e1347421f884bcd74c1464e910"
  },
  {
    "url": "assets/js/52.da746526.js",
    "revision": "936da053ebf86f7b0c07c1fb0f47c07b"
  },
  {
    "url": "assets/js/53.01dab6b5.js",
    "revision": "33600bfc9cda25ae144042b6aef4dbc3"
  },
  {
    "url": "assets/js/54.882675f9.js",
    "revision": "dd691c9955936b85e88cf4c2487a7afb"
  },
  {
    "url": "assets/js/55.893feb19.js",
    "revision": "f8f15257c3c3a77b08629275af00cfcc"
  },
  {
    "url": "assets/js/56.348a035e.js",
    "revision": "f674beac0e664bd5bf688fa503ab65eb"
  },
  {
    "url": "assets/js/57.47bc6d8d.js",
    "revision": "4914b912945f45b117f9cce05a9e6fe6"
  },
  {
    "url": "assets/js/58.aa43a4c9.js",
    "revision": "5fbec163cff016deaa816e6b9d9dae89"
  },
  {
    "url": "assets/js/59.b25a1cb1.js",
    "revision": "08a568455f4962653cf1bd9ac3d1e112"
  },
  {
    "url": "assets/js/6.3de2a56e.js",
    "revision": "10f09301ce478a8ff9d47ca0e299d202"
  },
  {
    "url": "assets/js/60.2c410c2e.js",
    "revision": "662b803c0f068bc421cb1785acc8cce4"
  },
  {
    "url": "assets/js/61.a84dc7a3.js",
    "revision": "6aa4f4d9423127548f13abe19f8167ec"
  },
  {
    "url": "assets/js/62.4a6faeb9.js",
    "revision": "c53eaa4a194b2f80d6ba28cd13f0a593"
  },
  {
    "url": "assets/js/63.ca21f0d2.js",
    "revision": "f55fa562ab623d397a2792732d4bfd2c"
  },
  {
    "url": "assets/js/64.680024a5.js",
    "revision": "86dac5099d7e4d37297fcc3b0c411f07"
  },
  {
    "url": "assets/js/65.1b49a065.js",
    "revision": "9633d6512c0704791161e846136865f4"
  },
  {
    "url": "assets/js/66.78eccca5.js",
    "revision": "cbe540b3654c4853d70f4fe3713a73d6"
  },
  {
    "url": "assets/js/67.45fc6f06.js",
    "revision": "9663e94be1f1aa74281da498eea89b19"
  },
  {
    "url": "assets/js/68.6f8a5e01.js",
    "revision": "d9738a028b93e3d497faa69fb1e659fe"
  },
  {
    "url": "assets/js/69.f38929b8.js",
    "revision": "e78c88c442be8e1d584617ffd2928814"
  },
  {
    "url": "assets/js/7.a52610f4.js",
    "revision": "d0fe0800b76c4efa5c13f667c799c6d9"
  },
  {
    "url": "assets/js/70.53980e80.js",
    "revision": "34dcc95f51cd948525b15224990e8325"
  },
  {
    "url": "assets/js/71.37ace1d3.js",
    "revision": "901e3ba05844923d4f57b3cb41e48578"
  },
  {
    "url": "assets/js/72.0542feaf.js",
    "revision": "179a7aefcc33e1184d8ac5a8ed2fe58f"
  },
  {
    "url": "assets/js/73.0314a011.js",
    "revision": "6b7a491cdb54e28e5c79f12f27fa9e60"
  },
  {
    "url": "assets/js/74.1200f99d.js",
    "revision": "0e3d80af966dc8116781c21f18e59e20"
  },
  {
    "url": "assets/js/75.16870a5f.js",
    "revision": "446f0438d1ba98a119732926951bb612"
  },
  {
    "url": "assets/js/76.bc9586f1.js",
    "revision": "381a01911d0b6529d2311a6c95a356c0"
  },
  {
    "url": "assets/js/77.d907f5f0.js",
    "revision": "67928ce9dd57611d349fbb82ab6be480"
  },
  {
    "url": "assets/js/78.e56ad8e9.js",
    "revision": "66d259dca15c951a435434e209dd9dc7"
  },
  {
    "url": "assets/js/79.894fc983.js",
    "revision": "27b48a089d91def0313dda23065e65f7"
  },
  {
    "url": "assets/js/8.398bcb7a.js",
    "revision": "90d2a4c5d8286bf74e69b140f59475fa"
  },
  {
    "url": "assets/js/80.14400a05.js",
    "revision": "0752d3c25db48c2b1441df9c7541392e"
  },
  {
    "url": "assets/js/81.a5957109.js",
    "revision": "6d8a1a616adb908aec2c4c22aaad7489"
  },
  {
    "url": "assets/js/82.cc9b3413.js",
    "revision": "82619ba6fafc061544b63e1e7cd3c3b9"
  },
  {
    "url": "assets/js/83.36bbcd6f.js",
    "revision": "8e1ab75853bdd21622c7d756d7404f8f"
  },
  {
    "url": "assets/js/84.ccefcc5d.js",
    "revision": "0346a385cc4c71ddeb5bf87d689bc86e"
  },
  {
    "url": "assets/js/85.bb635ca8.js",
    "revision": "a96ea10fc1a7d0cdd376f7341d11cbc8"
  },
  {
    "url": "assets/js/86.ada460db.js",
    "revision": "d54b134952007f0834293aab2cc37ecd"
  },
  {
    "url": "assets/js/87.06431d35.js",
    "revision": "c43ed5f742c65ce403d72e9dfb611713"
  },
  {
    "url": "assets/js/88.bef16e5c.js",
    "revision": "98d3848776b2701853dee5928ad6b86e"
  },
  {
    "url": "assets/js/89.9bf8b070.js",
    "revision": "bc33b0da9850dbda04e75313a9fad6f7"
  },
  {
    "url": "assets/js/9.1ef676a5.js",
    "revision": "f082a3ac908f0d4d43ccc382ccdb0ca4"
  },
  {
    "url": "assets/js/90.b84fb146.js",
    "revision": "9743066aff31c112c7aeb9956736a37c"
  },
  {
    "url": "assets/js/91.be9c12c2.js",
    "revision": "7427cdac2c535ddf538d14e24a22fd14"
  },
  {
    "url": "assets/js/92.c305818a.js",
    "revision": "c904253100fcd5dc8ac4f6e34f48e57a"
  },
  {
    "url": "assets/js/93.949dbe06.js",
    "revision": "b91cd8bac566a67b2aad89a6d44bba5a"
  },
  {
    "url": "assets/js/94.185dea81.js",
    "revision": "a46c8b7ea1bcd37a361319bdf23e781e"
  },
  {
    "url": "assets/js/95.38104e68.js",
    "revision": "eb22280f6fec1a4227937fe2a4e3c817"
  },
  {
    "url": "assets/js/96.59b51272.js",
    "revision": "142ac0f1105c22ee03e326db6b3596f7"
  },
  {
    "url": "assets/js/97.1bd6744c.js",
    "revision": "a758f9cadc599a81aa4ad1f421791d90"
  },
  {
    "url": "assets/js/98.44d5ae69.js",
    "revision": "884d68361537757784b1eac124b8b3ea"
  },
  {
    "url": "assets/js/app.c9a2f2b6.js",
    "revision": "08f1982598bc6bbad99f3ddecab6a147"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "1d53a48b6b1728e8a9826ded4955f060"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "9d07f01e399a2083dd576ad477fc014d"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "e759cf3e54c476fcd45084512c6eff9c"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "f50042a8b99cf52f118ffa4c8b6520c8"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "a875a8d5ce5c084829a0e0306d7bea62"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "a8e9972127dfcc5eda7a8bb4bd57599c"
  },
  {
    "url": "composable/date/now.html",
    "revision": "91b9df47b3aa905aeaa2ded0330da39a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "4d495fd69e0ddefde53473a1b19bf61b"
  },
  {
    "url": "composable/event/event.html",
    "revision": "ee45b924d47c96d81c112a31fb19754d"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "009697e68533fcdadc6f9b6df025c154"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "c4d1967977279e4024849e91ca2939c1"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "008f5e59a453be9c627cd65c1bb9e1a4"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "2f21ae82f9f019954830fbc3c0280c0d"
  },
  {
    "url": "composable/format/format.html",
    "revision": "803be4fd0f6358ff44445bed6feb39ff"
  },
  {
    "url": "composable/format/path.html",
    "revision": "76e20ea580082236c3e9caa0e8f31e74"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "31f56af70420b63103bab2ddb8a6fe5e"
  },
  {
    "url": "composable/index.html",
    "revision": "cf81b55580b65691b482d94b308f9979"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "4f69e1ac6ecc7eb7d56b8504f030a787"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "a4aca913dc6ce7026aeef6118a05a17b"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "f3476d65f6c285fec6808cfd2d0a6c71"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "93c4c78526f1939cbac2d5a94772d7bb"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "767332594427997bd22bd20e5854d420"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "d01844af69f2c7c80683a4ddd58b5320"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "cc40d170fe8f85f1fcaf5d1c8cbe8412"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "d5464510fe00964ddb105de341c6e9b1"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0be7c57c905e81e34483c495da42cd39"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "81c380e2f27103c36a6dc03b42777ce1"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "a34124c8a525b1546f9e0309a7a00643"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "5b32a9c550529e47734da33c1e611868"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "407602037d526186488fc7c66b2d4949"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "483a0d42e4c227952248aa613add3c6d"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "b263b7a2a9710b231318aab280022090"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "0a26996041a26ddf03a4070ed6d67f65"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "7f9d1f6689ba4a2c60d5199675a8847c"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "307084740fcbeef772478e0aec299ac9"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "be53e7ce5cff8cbc8c8065b67bc4e3bc"
  },
  {
    "url": "composable/web/language.html",
    "revision": "af995d99d382441cc47c717655ed271a"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "8dc0ab57aca31dc97e3b77df99212595"
  },
  {
    "url": "composable/web/online.html",
    "revision": "cb65914dc54b6d97bd50239b5d309fb4"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "811514b56c719159a85b3e4926e413a8"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "2ca71b23b1d85b36aaed00a269a62838"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "dd0de1855bd6b848ae128206eda9624d"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "e54586ec1ad591905386e721804cd418"
  },
  {
    "url": "Examples/index.html",
    "revision": "3d19de803ad3bfa8184be60727baba04"
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
    "revision": "51a5e5af8d98a2d8892c2eb849368a1f"
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
