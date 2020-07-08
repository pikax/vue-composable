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
    "revision": "1a65d7d9ee71747bcb013c5f790d6ba0"
  },
  {
    "url": "api/axios.api.html",
    "revision": "357a342290c5f1131b40093553c432eb"
  },
  {
    "url": "api/core.api.html",
    "revision": "9e030ba8b68d530e188030070f70099f"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "ec69596279d0d3ba7dfa8ef0a71f1b78"
  },
  {
    "url": "api/web.api.html",
    "revision": "48b8bc2dde465724f87eb95796cb3121"
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
    "url": "assets/js/0.7a29c5f8.js",
    "revision": "fcf3c2d16ad6aa914237174c06cdd671"
  },
  {
    "url": "assets/js/1.2f6c1d44.js",
    "revision": "073f86eb3031b4a4aaaf0c7a7a539053"
  },
  {
    "url": "assets/js/10.f851c34e.js",
    "revision": "8cebad95edd5a2888cc6af0a83050f84"
  },
  {
    "url": "assets/js/100.0a955f18.js",
    "revision": "e628d3c8d4637af9faa3e2b52a8760e6"
  },
  {
    "url": "assets/js/101.b99a55d2.js",
    "revision": "d3ca9ffe2dccac6ecf5397ee6be0ee12"
  },
  {
    "url": "assets/js/102.9597a2f2.js",
    "revision": "95872ff365734d31d66036e98472f5f5"
  },
  {
    "url": "assets/js/103.172e77a0.js",
    "revision": "bd28bbcf7c9d383c353971fdcd716951"
  },
  {
    "url": "assets/js/104.abb0d1eb.js",
    "revision": "5920429ea73c58f6461e5be2b0688a42"
  },
  {
    "url": "assets/js/105.f459fa15.js",
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
    "url": "assets/js/12.41fa382b.js",
    "revision": "0cd417a203eb58110e8881a4f5db8853"
  },
  {
    "url": "assets/js/13.d3a72438.js",
    "revision": "8de5effc94571b56aabc8800d9164e01"
  },
  {
    "url": "assets/js/14.ccfef3e6.js",
    "revision": "3578020bc43a7000f460682f0e3f7f93"
  },
  {
    "url": "assets/js/15.9c3f99fd.js",
    "revision": "39d0e0dbf8ff57c3041953b304e34912"
  },
  {
    "url": "assets/js/16.42c7fa29.js",
    "revision": "971d79e90fec4f8aed10e7636de90fba"
  },
  {
    "url": "assets/js/17.766b38f9.js",
    "revision": "28875b3c70a3578449a7ee30467e2ceb"
  },
  {
    "url": "assets/js/18.f80fc196.js",
    "revision": "952f4ca9c6e02195dd4714bb72701252"
  },
  {
    "url": "assets/js/19.4fd06657.js",
    "revision": "e8551779d58b1573d42f1f721856e2b6"
  },
  {
    "url": "assets/js/20.68640032.js",
    "revision": "b9ff812f21d410a7c0b24e9dbbc8954d"
  },
  {
    "url": "assets/js/21.28bf2036.js",
    "revision": "6aadb4bb1951d4906343db6c4d657090"
  },
  {
    "url": "assets/js/22.c5e1e76f.js",
    "revision": "ec85cec3ca693b06fb086efca92adaf2"
  },
  {
    "url": "assets/js/23.59c8f18b.js",
    "revision": "f69ad164f77c0d0a1399d14f6b2b3c7c"
  },
  {
    "url": "assets/js/24.16d72817.js",
    "revision": "f626d2297c3b88bdef899e7852605b17"
  },
  {
    "url": "assets/js/25.de0a25cd.js",
    "revision": "88e96e5f12138edea977fae464776c91"
  },
  {
    "url": "assets/js/26.d7444617.js",
    "revision": "b5915829ad2af901521389915a1c8ea2"
  },
  {
    "url": "assets/js/27.62352a68.js",
    "revision": "7e17bb09eb908ed29261d11c0a69f59c"
  },
  {
    "url": "assets/js/28.97857a07.js",
    "revision": "e122d7d759e7391f5ed0e5e1646ae9d8"
  },
  {
    "url": "assets/js/29.e2d8b78e.js",
    "revision": "ce696be8b903b2f3172b98af096bb09e"
  },
  {
    "url": "assets/js/30.de2e82f5.js",
    "revision": "95f6040ec7259acb68cd42717dbf98b2"
  },
  {
    "url": "assets/js/31.fc960902.js",
    "revision": "99792eb39536d7ea3dc0e136a8bde007"
  },
  {
    "url": "assets/js/32.fda0ad62.js",
    "revision": "650ee06a09b20349030efc1eb1adea8b"
  },
  {
    "url": "assets/js/33.f445eeec.js",
    "revision": "73555f0fadf78a104e9410b10503a4db"
  },
  {
    "url": "assets/js/34.008e9907.js",
    "revision": "fb6774cb1aaf7b5e92ae6dbd72b70d45"
  },
  {
    "url": "assets/js/35.4ccb9811.js",
    "revision": "e8469cac18bed402ef5380bbcad64bd5"
  },
  {
    "url": "assets/js/36.584e4ee7.js",
    "revision": "3ffca0d965e651badba8ab673e2af40f"
  },
  {
    "url": "assets/js/37.67c7839e.js",
    "revision": "49b2dc8eb2009355b5b60b68b3860647"
  },
  {
    "url": "assets/js/38.54821fe5.js",
    "revision": "9486344cd80153b5a713ceaa6f4a5b96"
  },
  {
    "url": "assets/js/39.c11261de.js",
    "revision": "7d686142ba61ee88a71d5945541883ba"
  },
  {
    "url": "assets/js/4.5819c062.js",
    "revision": "87a06a494f74b43ca27b6f48189c15c6"
  },
  {
    "url": "assets/js/40.b1b22ad4.js",
    "revision": "f78628997097ae66f939fe8b157cd22a"
  },
  {
    "url": "assets/js/41.19bcc342.js",
    "revision": "3de37b0371535133ccce69d7593bd3fb"
  },
  {
    "url": "assets/js/42.09d9d4f2.js",
    "revision": "3a845bcd254c8879e22342e01a779425"
  },
  {
    "url": "assets/js/43.1251cc43.js",
    "revision": "85613a59f63b4dd4cf902fee04336630"
  },
  {
    "url": "assets/js/44.ac5155cf.js",
    "revision": "6410e253a96ec2173ab15c9b854c21ec"
  },
  {
    "url": "assets/js/45.60b775e0.js",
    "revision": "97bb3ef4c72288db7a0570872048f59a"
  },
  {
    "url": "assets/js/46.2f3fa4fa.js",
    "revision": "cf62b9b968227420f9c217a103a06653"
  },
  {
    "url": "assets/js/47.167dedce.js",
    "revision": "1236972c6b8b30028199f51046323b9f"
  },
  {
    "url": "assets/js/48.86b3b029.js",
    "revision": "69739f2c9e4e85cb5653d1d681e35fc6"
  },
  {
    "url": "assets/js/49.a18254cf.js",
    "revision": "17fddbba30cac4d6877f1092500938f3"
  },
  {
    "url": "assets/js/5.42407805.js",
    "revision": "7b81dd540fbbf106d85ff37ab4cd49ec"
  },
  {
    "url": "assets/js/50.68a09ec5.js",
    "revision": "c19f35e1f0a1414aea0c0ad8e73cdf13"
  },
  {
    "url": "assets/js/51.d4cd010e.js",
    "revision": "48eb48bd248ce9409f80f26af53d82b4"
  },
  {
    "url": "assets/js/52.8fc79197.js",
    "revision": "6e2d6e03f573cbf3efb3b32b26a19cf9"
  },
  {
    "url": "assets/js/53.c9c5ffba.js",
    "revision": "0fe2c160514502479d5cf41a45b1c088"
  },
  {
    "url": "assets/js/54.207bcdce.js",
    "revision": "339620c6a5299f4e188859355daf56e8"
  },
  {
    "url": "assets/js/55.b64c49ed.js",
    "revision": "266c92a14c852daa8c409936ecdaff77"
  },
  {
    "url": "assets/js/56.5aee9bcc.js",
    "revision": "c7f5fbecb22ea2dc48de2273c7944c77"
  },
  {
    "url": "assets/js/57.95401a74.js",
    "revision": "147da77c9b0ad92a1eb04bb6ee03604f"
  },
  {
    "url": "assets/js/58.e6fb1c8e.js",
    "revision": "91e62a1bbd7c779ddd0dc84665087562"
  },
  {
    "url": "assets/js/59.4937c4cf.js",
    "revision": "d4948a18f2de0dfa68cf98ef3eb0e2f3"
  },
  {
    "url": "assets/js/6.e09fec05.js",
    "revision": "cc8f68398e55eaf63a43b3a9898da506"
  },
  {
    "url": "assets/js/60.8cf2072c.js",
    "revision": "846ac820780dce569ae4a524a23f1d03"
  },
  {
    "url": "assets/js/61.0d0779fa.js",
    "revision": "6f077f157e817782565f7852806d5940"
  },
  {
    "url": "assets/js/62.b34feeeb.js",
    "revision": "994fde8a57204f9402211cc8cef41c03"
  },
  {
    "url": "assets/js/63.25a108a8.js",
    "revision": "f6f5ec5dbb1d99ec78ba0dd468ce4f61"
  },
  {
    "url": "assets/js/64.3812ca8b.js",
    "revision": "2f4aa8c87fa74fdb2cf285de250228d8"
  },
  {
    "url": "assets/js/65.d0102e5e.js",
    "revision": "117e1795075eedbde82e4150ecbb17b3"
  },
  {
    "url": "assets/js/66.17b7ed15.js",
    "revision": "31dbc5a373703799068c66dd64d05eb3"
  },
  {
    "url": "assets/js/67.a947834d.js",
    "revision": "16894f51b46684cd123bfd24f5752513"
  },
  {
    "url": "assets/js/68.7beed934.js",
    "revision": "30619b4fc9ebf34bdfe6b5c9710ce929"
  },
  {
    "url": "assets/js/69.58ec4f0c.js",
    "revision": "bc71b21d44a01815e37253ff5126a2ab"
  },
  {
    "url": "assets/js/7.5adce509.js",
    "revision": "f6136a9b8c209ab404139985c9903f7e"
  },
  {
    "url": "assets/js/70.96d8f209.js",
    "revision": "7f970e47b5ba9018584bf1e02d4a39b6"
  },
  {
    "url": "assets/js/71.779e7863.js",
    "revision": "f89a49c40c1cc193758932d1e8ca41e2"
  },
  {
    "url": "assets/js/72.dbff08a3.js",
    "revision": "ab3a1d61cb980dc7081ca36490652791"
  },
  {
    "url": "assets/js/73.e5410214.js",
    "revision": "1f1333b9f87f52d894558ec4673851cf"
  },
  {
    "url": "assets/js/74.0c882f39.js",
    "revision": "f48db03891c5e74d3ef8ffb3346ec891"
  },
  {
    "url": "assets/js/75.1b4bf2bf.js",
    "revision": "cd71b0c383c04dd7ffa53c86f48a3403"
  },
  {
    "url": "assets/js/76.c53957bc.js",
    "revision": "10606aea7135d289a23192d872ed3347"
  },
  {
    "url": "assets/js/77.a55f9e66.js",
    "revision": "992a6933612bb471c15a6b0a0808d2f4"
  },
  {
    "url": "assets/js/78.343cce2a.js",
    "revision": "5b7ba3d19768f67a24984bb929446f70"
  },
  {
    "url": "assets/js/79.88a7ab96.js",
    "revision": "0f3f01ef9e578f3ee2d0f1727c1680af"
  },
  {
    "url": "assets/js/8.e0ba5830.js",
    "revision": "7a90535caf9a822de33ae71f7d4b7b85"
  },
  {
    "url": "assets/js/80.889c8cad.js",
    "revision": "f5e4a3c40c90ad059cdb90f76468d0f1"
  },
  {
    "url": "assets/js/81.660fdb40.js",
    "revision": "47a6714f1f9e854904d36c8f6c4096b7"
  },
  {
    "url": "assets/js/82.1b5a6121.js",
    "revision": "bf1daca942bc752fd05c2b1c159d0cee"
  },
  {
    "url": "assets/js/83.6427bb31.js",
    "revision": "a30749967029c2cf21866d2c5a0d2334"
  },
  {
    "url": "assets/js/84.9fcb0da9.js",
    "revision": "c9f0cc38e5ee98a636c4229159c6a062"
  },
  {
    "url": "assets/js/85.229f4a06.js",
    "revision": "59db588ff2193dde59c6527f88b93c19"
  },
  {
    "url": "assets/js/86.e9df42e8.js",
    "revision": "317f1d90653b507e5f0de43593d36a67"
  },
  {
    "url": "assets/js/87.5af663bd.js",
    "revision": "d70a0df0903e40094410ef2c091e76ef"
  },
  {
    "url": "assets/js/88.9e29eae1.js",
    "revision": "9e71beb4b1d03903a4da72e2ce20ea6b"
  },
  {
    "url": "assets/js/89.8c1a33f0.js",
    "revision": "98e70c7903149e033f71a8233174e8fd"
  },
  {
    "url": "assets/js/9.8d5409ad.js",
    "revision": "b38d6fd8068b4c1459a59c98dc7e3d34"
  },
  {
    "url": "assets/js/90.2efb75c2.js",
    "revision": "f3b7e3af6b707433b489909e630d698b"
  },
  {
    "url": "assets/js/91.5fd6f6d9.js",
    "revision": "f1074c6dc739d822474b5384d97ab4ae"
  },
  {
    "url": "assets/js/92.04c42e58.js",
    "revision": "1e48b8960d05d1db1a9e41ed3b10d446"
  },
  {
    "url": "assets/js/93.f4a8dda6.js",
    "revision": "0ce268497d0b2acd3d2cc18050427dc0"
  },
  {
    "url": "assets/js/94.64b75838.js",
    "revision": "783912344eb27d0ba104d9e76347989a"
  },
  {
    "url": "assets/js/95.2cb34b00.js",
    "revision": "27c30d889790545c6850575652d4678a"
  },
  {
    "url": "assets/js/96.8ed9d0c9.js",
    "revision": "a4a4e4d133a9bbb5f32528a586085d2b"
  },
  {
    "url": "assets/js/97.de3884a7.js",
    "revision": "ae5ba15226b6803b738bcb022c167f47"
  },
  {
    "url": "assets/js/98.742c4d00.js",
    "revision": "6e847ee1f62e93c898737b427f379511"
  },
  {
    "url": "assets/js/99.80e5cbaf.js",
    "revision": "383d1e0f75bf7bacfd9510b5de90f4a9"
  },
  {
    "url": "assets/js/app.96f7e529.js",
    "revision": "5d7b4641c253fb84850f1f649e0cd526"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "b6f0981050c1a200aa24f5a4e3f719a8"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "45faea29d21537b962dd17a8ceb671d9"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "b8792a9aa6c2cdf4c751e757fa1b9722"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "6e2f40f3c99c11cf14a83b04f75e0b59"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "8bb7d5337966077c09aff9ae61516c2e"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "4693214134d1cc86d2397eed0fe4dd1a"
  },
  {
    "url": "composable/date/now.html",
    "revision": "08a578630f4354e83e6fb3509e486c32"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "1c176f6c98ae2993502b3ef09a5543f4"
  },
  {
    "url": "composable/event/event.html",
    "revision": "c1f3ea5013d18795b6b6ecb5e1cf815a"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "7e58c0d4dc1a223283849628732deb24"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "68b070cde0f06b41572fb96edda3511f"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "bb529d9913d1a87b979bcfb8ea71ce9c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "9b23c340898382037132c8f88d44ca25"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "a6f91d76ad5de7fe8705eba0b03c8258"
  },
  {
    "url": "composable/format/format.html",
    "revision": "553d2ec6e1616c034987209d6f7c5a73"
  },
  {
    "url": "composable/format/path.html",
    "revision": "f54a0417e1f1b009e392cffd4d874f32"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "655812325a00b1035e13562b63e54863"
  },
  {
    "url": "composable/index.html",
    "revision": "15d735ce0c92963ca607c71835e10a9b"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "e0584856e7940b29e98217a888edb693"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "33c5e9f565ce8a4c528bfed5af5c09c2"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "c51932714ee25c53e69c15f8e62fc7bb"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "f452c2834aacd7bb4fc8a6b0a6eb7730"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "830ee071e8c5da12a77c6ac43a5109b7"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "902e3b3295316e743dee742798283264"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "70ef7f43d0fcbcad14d6092bbd5e261a"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "c6286af5f2dde2a6f6cb02f09186d0cd"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "1c18371588bb9db447e74f3adba1c6e4"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "07d7cb5740bf7b03cb3706a8c35c3b1a"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "1ac691d5799ab2a36fc81562ab979757"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "caf905562e6958692bc1bc28c8da6a2d"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "31d79ad1c263268e9546678ae8e134c0"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "2a3d329aaf3e90bd5439dbffd11f9a39"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "e8bcb5463e6edfdf0d86e1917da38b34"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "e17f967548e3b78618156d13b00709d8"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "59d0e25df42a9511af67558082cb22c4"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "6e785f45168c125b56188cbc9501ae85"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "2902c0f0d7849782286b8bb97e8af27b"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "33e82716bc88b1f32460aa0842dc1406"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "f62ace26a594e90a13a0cda77a74205b"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "3bfa596eaa8a99fb5c0f1527c01d4c71"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "3c789a3a2db8fc1669e950350c2bba71"
  },
  {
    "url": "composable/web/language.html",
    "revision": "fdff1268a2cd15d32e7ece7a270d03e2"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "3bf991281023e1b78ae963f29344a652"
  },
  {
    "url": "composable/web/online.html",
    "revision": "6dedf7c868f46ee522328c0eda1bd0c9"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "ee5576fbc2949ac5caa9f4977717ed47"
  },
  {
    "url": "composable/web/share.html",
    "revision": "893998f4aafdc335dc2c1514b5a429bc"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "64c9d232f4dcbb3eec7ba85c0d0447b2"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "dbd562ff79e38d554e4e4e775ba1e7bc"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "3f7df8064aa2aa8601e715d058c09684"
  },
  {
    "url": "Examples/index.html",
    "revision": "11b9b3db012198b21667b36c54770b81"
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
    "revision": "f732dafebb678798218d0f057e0873e0"
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
