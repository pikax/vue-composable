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
    "revision": "3e3d11387920931c471c6ac4a69468d3"
  },
  {
    "url": "api/axios.api.html",
    "revision": "446d0657e1509d254832897fa1d11689"
  },
  {
    "url": "api/core.api.html",
    "revision": "22d0d44fe02c3d340a1f34ac3e264a83"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "86ffdf4be8ef7c822d2da3b9cabcbc32"
  },
  {
    "url": "api/web.api.html",
    "revision": "9753b1e17c76765eefd50722edcfcd0d"
  },
  {
    "url": "assets/css/2.styles.2dbe08e5.css",
    "revision": "8b8cdd2c45f55f08e17d61b29466cdd9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5cdd69cd.js",
    "revision": "c42d7a2756a069fbf7594ef5eed20322"
  },
  {
    "url": "assets/js/1.9833c6f3.js",
    "revision": "5743c66885989a3763aeedb77c75506a"
  },
  {
    "url": "assets/js/10.cbb8714a.js",
    "revision": "8cebad95edd5a2888cc6af0a83050f84"
  },
  {
    "url": "assets/js/100.7df50021.js",
    "revision": "e628d3c8d4637af9faa3e2b52a8760e6"
  },
  {
    "url": "assets/js/101.478f037b.js",
    "revision": "d3ca9ffe2dccac6ecf5397ee6be0ee12"
  },
  {
    "url": "assets/js/102.ecf371ac.js",
    "revision": "95872ff365734d31d66036e98472f5f5"
  },
  {
    "url": "assets/js/103.49e8825a.js",
    "revision": "bd28bbcf7c9d383c353971fdcd716951"
  },
  {
    "url": "assets/js/104.21e8c4cc.js",
    "revision": "5920429ea73c58f6461e5be2b0688a42"
  },
  {
    "url": "assets/js/105.320a25aa.js",
    "revision": "8251be9c6a403bb48e87d4fb74bcb5fa"
  },
  {
    "url": "assets/js/106.d12f1188.js",
    "revision": "21275049dfb57f78d6834415600db63a"
  },
  {
    "url": "assets/js/11.67290584.js",
    "revision": "e14c2286a4e2c621bc3e9c9ffffb4d3f"
  },
  {
    "url": "assets/js/12.09e1a0cb.js",
    "revision": "1039e169741c6849174726a5ad2b1ce6"
  },
  {
    "url": "assets/js/13.22dfaca9.js",
    "revision": "8de5effc94571b56aabc8800d9164e01"
  },
  {
    "url": "assets/js/14.3559b919.js",
    "revision": "977bf0593049e112b5b03e2c0adab8e1"
  },
  {
    "url": "assets/js/15.8403c52c.js",
    "revision": "373420bcef8afdcbf9672b6ed21fc2de"
  },
  {
    "url": "assets/js/16.343d25ec.js",
    "revision": "cdf9a2d378e250236656e5ee20dfb6d6"
  },
  {
    "url": "assets/js/17.ba5fee11.js",
    "revision": "28875b3c70a3578449a7ee30467e2ceb"
  },
  {
    "url": "assets/js/18.7e29b699.js",
    "revision": "2e0827408b4dd13008b3b4273fc16c67"
  },
  {
    "url": "assets/js/19.94ff6af1.js",
    "revision": "d035103b28f8103a12171e06dcd47397"
  },
  {
    "url": "assets/js/20.7c1e6758.js",
    "revision": "81e71af574f8e1fafeb20cba8c4af641"
  },
  {
    "url": "assets/js/21.9df24d7b.js",
    "revision": "6aadb4bb1951d4906343db6c4d657090"
  },
  {
    "url": "assets/js/22.316d8fe8.js",
    "revision": "3e20d8e6bd6bb6a0b43dc8bccc93d341"
  },
  {
    "url": "assets/js/23.c7279923.js",
    "revision": "bc64d505bc163ae521c7b49f21ef5524"
  },
  {
    "url": "assets/js/24.c7fbb70b.js",
    "revision": "80d07895869fc72aa9b251814d40745c"
  },
  {
    "url": "assets/js/25.62e57326.js",
    "revision": "88e96e5f12138edea977fae464776c91"
  },
  {
    "url": "assets/js/26.2a298cec.js",
    "revision": "1b5a2c8f5ab1250c1a84c6fe4ff045b1"
  },
  {
    "url": "assets/js/27.65a810c2.js",
    "revision": "7e17bb09eb908ed29261d11c0a69f59c"
  },
  {
    "url": "assets/js/28.1affae2b.js",
    "revision": "e122d7d759e7391f5ed0e5e1646ae9d8"
  },
  {
    "url": "assets/js/29.aee634b2.js",
    "revision": "ce696be8b903b2f3172b98af096bb09e"
  },
  {
    "url": "assets/js/30.585c9d03.js",
    "revision": "3bc7a3292b8d437b6fb647d5c7ee2016"
  },
  {
    "url": "assets/js/31.1ae3d4b3.js",
    "revision": "99792eb39536d7ea3dc0e136a8bde007"
  },
  {
    "url": "assets/js/32.2abd589f.js",
    "revision": "8b96e34d6acd5fb43a0a2885305d095d"
  },
  {
    "url": "assets/js/33.0a8427f0.js",
    "revision": "73555f0fadf78a104e9410b10503a4db"
  },
  {
    "url": "assets/js/34.1421c92f.js",
    "revision": "15144a204a80f22295a97f6766159fe1"
  },
  {
    "url": "assets/js/35.e42b53ca.js",
    "revision": "690704562e8ff5038cdd23e8d8d6b721"
  },
  {
    "url": "assets/js/36.1f11c39c.js",
    "revision": "3ffca0d965e651badba8ab673e2af40f"
  },
  {
    "url": "assets/js/37.fc7665f6.js",
    "revision": "3f58aa70ff905ed2c7de7eaddd9417ec"
  },
  {
    "url": "assets/js/38.e3a6f7ae.js",
    "revision": "9486344cd80153b5a713ceaa6f4a5b96"
  },
  {
    "url": "assets/js/39.f0095871.js",
    "revision": "e4412ef70adcd41afa3c929ca95c7d3e"
  },
  {
    "url": "assets/js/4.2a779efd.js",
    "revision": "8c766ce1c08775c8f3913c0657ad0f02"
  },
  {
    "url": "assets/js/40.7b060a0a.js",
    "revision": "13edb4aec6364d2686f915157d8d4890"
  },
  {
    "url": "assets/js/41.c9b0b5af.js",
    "revision": "b249dc7a4e32eda97ece7aab92535807"
  },
  {
    "url": "assets/js/42.dc2ca38d.js",
    "revision": "b3e77f6027a3bfb94e62b038c4777fbc"
  },
  {
    "url": "assets/js/43.bf6efb1b.js",
    "revision": "85613a59f63b4dd4cf902fee04336630"
  },
  {
    "url": "assets/js/44.d000b3af.js",
    "revision": "06a7565b5657382bea10deff0fc73a5c"
  },
  {
    "url": "assets/js/45.ddd82304.js",
    "revision": "dcf215c268e61e2c5e89fef0d04b30ca"
  },
  {
    "url": "assets/js/46.75f26cd2.js",
    "revision": "cf62b9b968227420f9c217a103a06653"
  },
  {
    "url": "assets/js/47.54508866.js",
    "revision": "1236972c6b8b30028199f51046323b9f"
  },
  {
    "url": "assets/js/48.f98ed703.js",
    "revision": "bbeb4beb2f5b4f0f20f32d51573e4bd9"
  },
  {
    "url": "assets/js/49.034a8e2a.js",
    "revision": "ff4099a617b4f57bad7513e019198910"
  },
  {
    "url": "assets/js/5.42407805.js",
    "revision": "7b81dd540fbbf106d85ff37ab4cd49ec"
  },
  {
    "url": "assets/js/50.ce9a12cb.js",
    "revision": "c19f35e1f0a1414aea0c0ad8e73cdf13"
  },
  {
    "url": "assets/js/51.6220d76e.js",
    "revision": "48eb48bd248ce9409f80f26af53d82b4"
  },
  {
    "url": "assets/js/52.b7f7cb0e.js",
    "revision": "6e2d6e03f573cbf3efb3b32b26a19cf9"
  },
  {
    "url": "assets/js/53.b49df7fb.js",
    "revision": "0fe2c160514502479d5cf41a45b1c088"
  },
  {
    "url": "assets/js/54.3d085a82.js",
    "revision": "339620c6a5299f4e188859355daf56e8"
  },
  {
    "url": "assets/js/55.10a33657.js",
    "revision": "266c92a14c852daa8c409936ecdaff77"
  },
  {
    "url": "assets/js/56.df9ae6cf.js",
    "revision": "c7f5fbecb22ea2dc48de2273c7944c77"
  },
  {
    "url": "assets/js/57.f851d785.js",
    "revision": "147da77c9b0ad92a1eb04bb6ee03604f"
  },
  {
    "url": "assets/js/58.bd3b57cc.js",
    "revision": "91e62a1bbd7c779ddd0dc84665087562"
  },
  {
    "url": "assets/js/59.518f30a5.js",
    "revision": "d4948a18f2de0dfa68cf98ef3eb0e2f3"
  },
  {
    "url": "assets/js/6.d50157ca.js",
    "revision": "049c49989073a818780360c13a3dbe10"
  },
  {
    "url": "assets/js/60.cd95a4c5.js",
    "revision": "846ac820780dce569ae4a524a23f1d03"
  },
  {
    "url": "assets/js/61.943f9514.js",
    "revision": "6f077f157e817782565f7852806d5940"
  },
  {
    "url": "assets/js/62.29f531c0.js",
    "revision": "994fde8a57204f9402211cc8cef41c03"
  },
  {
    "url": "assets/js/63.bf4e9fc1.js",
    "revision": "f6f5ec5dbb1d99ec78ba0dd468ce4f61"
  },
  {
    "url": "assets/js/64.29eb4c3a.js",
    "revision": "2f4aa8c87fa74fdb2cf285de250228d8"
  },
  {
    "url": "assets/js/65.3a82d74c.js",
    "revision": "117e1795075eedbde82e4150ecbb17b3"
  },
  {
    "url": "assets/js/66.2ae52556.js",
    "revision": "31dbc5a373703799068c66dd64d05eb3"
  },
  {
    "url": "assets/js/67.2fc54ac0.js",
    "revision": "16894f51b46684cd123bfd24f5752513"
  },
  {
    "url": "assets/js/68.02147547.js",
    "revision": "30619b4fc9ebf34bdfe6b5c9710ce929"
  },
  {
    "url": "assets/js/69.e215609a.js",
    "revision": "bc71b21d44a01815e37253ff5126a2ab"
  },
  {
    "url": "assets/js/7.0b1ed3d3.js",
    "revision": "0cf9a06737743024cb6fc18ddf9f27f6"
  },
  {
    "url": "assets/js/70.bda1ad34.js",
    "revision": "7f970e47b5ba9018584bf1e02d4a39b6"
  },
  {
    "url": "assets/js/71.73096aa0.js",
    "revision": "f89a49c40c1cc193758932d1e8ca41e2"
  },
  {
    "url": "assets/js/72.4290f96e.js",
    "revision": "ab3a1d61cb980dc7081ca36490652791"
  },
  {
    "url": "assets/js/73.acdb083f.js",
    "revision": "1f1333b9f87f52d894558ec4673851cf"
  },
  {
    "url": "assets/js/74.190502f8.js",
    "revision": "f48db03891c5e74d3ef8ffb3346ec891"
  },
  {
    "url": "assets/js/75.990950cb.js",
    "revision": "cd71b0c383c04dd7ffa53c86f48a3403"
  },
  {
    "url": "assets/js/76.9dee5880.js",
    "revision": "10606aea7135d289a23192d872ed3347"
  },
  {
    "url": "assets/js/77.1349c666.js",
    "revision": "992a6933612bb471c15a6b0a0808d2f4"
  },
  {
    "url": "assets/js/78.6fb52aed.js",
    "revision": "5b7ba3d19768f67a24984bb929446f70"
  },
  {
    "url": "assets/js/79.6893898a.js",
    "revision": "0f3f01ef9e578f3ee2d0f1727c1680af"
  },
  {
    "url": "assets/js/8.08a30b6d.js",
    "revision": "a8c2673d0497c3b026f66c546de5e878"
  },
  {
    "url": "assets/js/80.14c65d23.js",
    "revision": "f5e4a3c40c90ad059cdb90f76468d0f1"
  },
  {
    "url": "assets/js/81.8c107d10.js",
    "revision": "47a6714f1f9e854904d36c8f6c4096b7"
  },
  {
    "url": "assets/js/82.9172b3db.js",
    "revision": "bf1daca942bc752fd05c2b1c159d0cee"
  },
  {
    "url": "assets/js/83.29391c3c.js",
    "revision": "a30749967029c2cf21866d2c5a0d2334"
  },
  {
    "url": "assets/js/84.55e4b3f1.js",
    "revision": "c9f0cc38e5ee98a636c4229159c6a062"
  },
  {
    "url": "assets/js/85.a553a8b4.js",
    "revision": "59db588ff2193dde59c6527f88b93c19"
  },
  {
    "url": "assets/js/86.35c6c3c7.js",
    "revision": "317f1d90653b507e5f0de43593d36a67"
  },
  {
    "url": "assets/js/87.68f423a1.js",
    "revision": "d70a0df0903e40094410ef2c091e76ef"
  },
  {
    "url": "assets/js/88.ef2ca205.js",
    "revision": "9e71beb4b1d03903a4da72e2ce20ea6b"
  },
  {
    "url": "assets/js/89.01903295.js",
    "revision": "98e70c7903149e033f71a8233174e8fd"
  },
  {
    "url": "assets/js/9.413514c3.js",
    "revision": "0ead6cfe8d1f24782306921584983087"
  },
  {
    "url": "assets/js/90.e4c57328.js",
    "revision": "f3b7e3af6b707433b489909e630d698b"
  },
  {
    "url": "assets/js/91.394d5020.js",
    "revision": "f1074c6dc739d822474b5384d97ab4ae"
  },
  {
    "url": "assets/js/92.630fed90.js",
    "revision": "1e48b8960d05d1db1a9e41ed3b10d446"
  },
  {
    "url": "assets/js/93.5c212467.js",
    "revision": "0ce268497d0b2acd3d2cc18050427dc0"
  },
  {
    "url": "assets/js/94.b6d27b58.js",
    "revision": "783912344eb27d0ba104d9e76347989a"
  },
  {
    "url": "assets/js/95.3a68491c.js",
    "revision": "27c30d889790545c6850575652d4678a"
  },
  {
    "url": "assets/js/96.5c297caf.js",
    "revision": "a4a4e4d133a9bbb5f32528a586085d2b"
  },
  {
    "url": "assets/js/97.d5aea505.js",
    "revision": "ae5ba15226b6803b738bcb022c167f47"
  },
  {
    "url": "assets/js/98.977683c6.js",
    "revision": "6e847ee1f62e93c898737b427f379511"
  },
  {
    "url": "assets/js/99.817caf44.js",
    "revision": "383d1e0f75bf7bacfd9510b5de90f4a9"
  },
  {
    "url": "assets/js/app.28b9ba53.js",
    "revision": "f0beddeb06def31cb8423b3b8c0ead28"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "f7950213d490d4bda06976b8a2f98158"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "606b0f45d08a5ed511e37ccb4d22cd22"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "81f429429fcf4bc4b65231ee5d66132c"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "4c8f80391ea5fbc94ea2dd0106ab1068"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "3d9fce9c4609216feb2117ff914f00b2"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "18005c2e0b0e6d66ea014a819a70e27e"
  },
  {
    "url": "composable/date/now.html",
    "revision": "44479f30e771c08b8a42e7d5ca96f0fe"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "ef732c17761ebe3755d7a0965ff3fc29"
  },
  {
    "url": "composable/event/event.html",
    "revision": "d790684dd72e04a4c4d65c4b86c68574"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "51051f7fd2aae3bae28e95d5f9baa81f"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "b720b51d3cd9b0c328c288b310bb4c1c"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "cc56c67943dbceb28b355533992a9f2d"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "f439d39627d1ce54f33da5c5ca652682"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "b057ec5bbd4d21e77829f5753f1fba6c"
  },
  {
    "url": "composable/format/format.html",
    "revision": "9c467bae5143dec5ca6bce2ad7fea3b4"
  },
  {
    "url": "composable/format/path.html",
    "revision": "e63d78cfdaa36d70da08296622bcf730"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "2b6dc17e643616f07131772ed73bb804"
  },
  {
    "url": "composable/index.html",
    "revision": "a4cb0c7373ef1487a24f2c7ef423c09d"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "9418b376268dd2bfec305dca564cc681"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "81705c0ef940cfcb7623a9a52a47a0f1"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "71f5e96facb4f03119d16e4f4b6064e3"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "4143a0d85d818225490cdd9bead335ad"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "7e03ba8c580c199ad71e91f5350ed37f"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "93229d0718564fd918e33e828ca8d171"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "c58f929b25a7676646165df520c078ee"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "a30af8ef48885f260d5190ed0d0b96cd"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "c901ff631180daec81794d26579962a1"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "d35aae3e77f023ce4f6ddb06c6be5afc"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "7c05249322df41b9b337f182f4660b52"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "4ef443ef5aa79123673c73659e25a946"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "226789842af74cb41d4e88b99a2e0e7d"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "c61852fe521cf982e69d17cff9c78c99"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "2c90420d03d918d5b08c250dbab65958"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "12624711028ac5060839ba9232cdf657"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "5e3324b9b227fadd73d914c28d742e2b"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "c4161c9748bcec9aa0934518b26a1f59"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "bab129ca8effd447af1bbf2a7996a833"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "958fda224e2507ff13d4703fd51701ef"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "8022400b2a8e34263aa8657409293c8e"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "9abebad20c6021d9d437e6f96e9c8e32"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "677f7dd659d4546767fada672e14c496"
  },
  {
    "url": "composable/web/language.html",
    "revision": "de36f6632fd297740de8f11290a7b218"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "d0b0ebeab447062f388a56bcd16a86a7"
  },
  {
    "url": "composable/web/online.html",
    "revision": "0d7b33669840625120ff2f98b274e20c"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "d4d7c9e171abc5424cf92b61e3a7c3a6"
  },
  {
    "url": "composable/web/share.html",
    "revision": "6b5c400983c0d7d48cfde3e18463cfa0"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "7711933bcc68dc781d7708d52dd7ffac"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "f830c1bc7eb5926e62b5a30c23dcd765"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "13e7f0e9c49b124ae25be619512137e0"
  },
  {
    "url": "Examples/index.html",
    "revision": "befc9f365610ad6ef4f8910451e5e50d"
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
    "revision": "3bf972d57f74d033461869e0bba16870"
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
