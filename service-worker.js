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
    "revision": "dafbb00d66d12000799cf54f0251ba3c"
  },
  {
    "url": "api/axios.api.html",
    "revision": "c25f901042394663f3861a37ca262695"
  },
  {
    "url": "api/core.api.html",
    "revision": "37f3cbc0a30ed7ae9edf325f39362a2e"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "85c349b61c578ddb5d985eb0e03ee5d0"
  },
  {
    "url": "api/web.api.html",
    "revision": "4d9b558bc7bb4f92bc90742a9732c15e"
  },
  {
    "url": "assets/css/2.styles.e4095f46.css",
    "revision": "1773dfc42efcd85274f5520562a468dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.c5dfdf9f.js",
    "revision": "ef9ce5ef46df59b7e2e9d4b8cae94a82"
  },
  {
    "url": "assets/js/1.a8f11754.js",
    "revision": "0fddc1647cc28b95d46e94d770e3d4bf"
  },
  {
    "url": "assets/js/10.0d011db8.js",
    "revision": "8071d9bc428c4a8f686fab3c56d6b60d"
  },
  {
    "url": "assets/js/100.6d09094a.js",
    "revision": "83e9cfec88b22fbd4875f3b97ecd2bcc"
  },
  {
    "url": "assets/js/101.2fe79c5c.js",
    "revision": "1ade8b1cef8f73d687b73f427ceefd2b"
  },
  {
    "url": "assets/js/102.0473003e.js",
    "revision": "1462f41faf30f101ab3b6fda96f7062c"
  },
  {
    "url": "assets/js/103.32fd7b75.js",
    "revision": "26986672d5d95e2e8ba4c029263f3bb4"
  },
  {
    "url": "assets/js/104.a76c7f41.js",
    "revision": "fa647f0c4ae643686c4b5387a23aa97b"
  },
  {
    "url": "assets/js/105.75cc02d0.js",
    "revision": "ffd3107a9f3a5257d0d2a7ce5dbeb9a2"
  },
  {
    "url": "assets/js/106.ed5626e3.js",
    "revision": "0baf48264405d53e8c0da4fe485961db"
  },
  {
    "url": "assets/js/107.84afb6ae.js",
    "revision": "92940a4de14022937503165544a005c9"
  },
  {
    "url": "assets/js/108.0d1c0b54.js",
    "revision": "0b570e5fbfc634a86a663630973e11a0"
  },
  {
    "url": "assets/js/109.5cb4243d.js",
    "revision": "972c153188f6e6324fa40de68ab9faae"
  },
  {
    "url": "assets/js/11.c8bd5a4c.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.3eedf0c5.js",
    "revision": "48f45614e832b54e3d41cd425d429b9f"
  },
  {
    "url": "assets/js/111.da4ac6a0.js",
    "revision": "e4286c91bfdd8ba2189b33437982f06d"
  },
  {
    "url": "assets/js/112.448873a4.js",
    "revision": "c238339331eee3e897787f410c38508b"
  },
  {
    "url": "assets/js/113.c3696317.js",
    "revision": "f7d7d629d68f139009031fafa0837d9d"
  },
  {
    "url": "assets/js/114.2dfaf3f7.js",
    "revision": "24582164caa71839b2beb276163a2300"
  },
  {
    "url": "assets/js/115.eb95751c.js",
    "revision": "d7119e9fdfee1c7806f14cbfe1338f85"
  },
  {
    "url": "assets/js/12.bfcc8af5.js",
    "revision": "4d73e25ca8548ddf6fa30feffb480a9f"
  },
  {
    "url": "assets/js/13.4508db5a.js",
    "revision": "a710d8d978bbec4a7b82cc1627baba35"
  },
  {
    "url": "assets/js/14.a3c4cbe0.js",
    "revision": "48d5ba01af5fdd1ed1a76c881bb852b7"
  },
  {
    "url": "assets/js/15.5c5e0554.js",
    "revision": "9e45dcfcc2dc47a79e42b5eadf24d9c8"
  },
  {
    "url": "assets/js/16.af6e8947.js",
    "revision": "fd9d8031d3d7dfd450ee226e0b61b4f4"
  },
  {
    "url": "assets/js/17.99c34888.js",
    "revision": "776f568a9c26f1cadd059b33bc69cfee"
  },
  {
    "url": "assets/js/18.1cc591c9.js",
    "revision": "34d47884c8a98cbcbfad864cde93adc0"
  },
  {
    "url": "assets/js/19.b8e61f25.js",
    "revision": "c47e6828b96e733b0f1314a7312dc92b"
  },
  {
    "url": "assets/js/20.7c08f011.js",
    "revision": "afe9525f572d6c4ac5d0f45d7476bfd7"
  },
  {
    "url": "assets/js/21.1a05cf06.js",
    "revision": "1417550e4fd6638da05754c741efdb44"
  },
  {
    "url": "assets/js/22.c01aa805.js",
    "revision": "5fc21e4834df8399f587bc51156cb396"
  },
  {
    "url": "assets/js/23.f950da90.js",
    "revision": "e4b7e053c633eec9c4c241b10b9cd794"
  },
  {
    "url": "assets/js/24.24b3b43f.js",
    "revision": "b0d827b1a8cfbe28c1d659a0dba4ea15"
  },
  {
    "url": "assets/js/25.b9fcfa63.js",
    "revision": "65f5eba314394386e31c151ce3c2c0b1"
  },
  {
    "url": "assets/js/26.532ab26c.js",
    "revision": "8cd4dd034e6c178d9b5e69ad18916157"
  },
  {
    "url": "assets/js/27.7e2bc124.js",
    "revision": "050cfeaccfcf4a45ad58031aa27c4a9e"
  },
  {
    "url": "assets/js/28.f4e5e10b.js",
    "revision": "710d877ef1a1e3608950079780d881c7"
  },
  {
    "url": "assets/js/29.c885bc52.js",
    "revision": "8be34dcd3e62a8677c7b7834c5b87934"
  },
  {
    "url": "assets/js/30.f746ce52.js",
    "revision": "70a01abcdd73ab4532fca0a7aca3950b"
  },
  {
    "url": "assets/js/31.b6a4b765.js",
    "revision": "5c27e14b2c77743b6a357448368e76e1"
  },
  {
    "url": "assets/js/32.a29da9a4.js",
    "revision": "b1d36316938f01b15cac29ea6b855866"
  },
  {
    "url": "assets/js/33.801da1bb.js",
    "revision": "d25ca6d0770cc67ce39dd4ab016c724a"
  },
  {
    "url": "assets/js/34.8c0cef4f.js",
    "revision": "79b83abf5912f8c632da0b42d1f92b27"
  },
  {
    "url": "assets/js/35.1de5b024.js",
    "revision": "9ce3895f4024b264565e850ce4c98d37"
  },
  {
    "url": "assets/js/36.5c9d6438.js",
    "revision": "c3210b9b3a692b69986370306cbee9a8"
  },
  {
    "url": "assets/js/37.0eb1098b.js",
    "revision": "b3f7747bd87e879f02d1e4a594b8f5c2"
  },
  {
    "url": "assets/js/38.ca9d2a0c.js",
    "revision": "663a20acf27f20425fecd88c03233945"
  },
  {
    "url": "assets/js/39.1cce4705.js",
    "revision": "9030a67c7f3bebfe362cc152442e4f9b"
  },
  {
    "url": "assets/js/4.aed6686f.js",
    "revision": "6bef0dc8c8f79a4867da493bd5110c3b"
  },
  {
    "url": "assets/js/40.b8c652b8.js",
    "revision": "658c1f382fb7b3140bdfcd40ab5ea313"
  },
  {
    "url": "assets/js/41.e1198317.js",
    "revision": "84308467d0d13ad457bcd1187df004f5"
  },
  {
    "url": "assets/js/42.7593d6e4.js",
    "revision": "825f41dd71db1c13781341a94da3cc38"
  },
  {
    "url": "assets/js/43.c9bd77bd.js",
    "revision": "2f868756be89dfbfc458a3e43128f904"
  },
  {
    "url": "assets/js/44.a900000f.js",
    "revision": "defb9bebfbf90a3cd9b69965bb99a168"
  },
  {
    "url": "assets/js/45.ac10539c.js",
    "revision": "32c4645f8ad9c1f7d81775eac46f88f7"
  },
  {
    "url": "assets/js/46.9d027209.js",
    "revision": "5f9c048740a2a1fc979db2ed56015813"
  },
  {
    "url": "assets/js/47.c64346e8.js",
    "revision": "e5f0946ab7d64cbaedfabafebecddb41"
  },
  {
    "url": "assets/js/48.eb22e447.js",
    "revision": "0563caecb57b0468a27a8ad915b2e883"
  },
  {
    "url": "assets/js/49.a92116ff.js",
    "revision": "1aa70e8c3608b61fd903cc6afc73ff81"
  },
  {
    "url": "assets/js/5.3a64806d.js",
    "revision": "06bfdae6c332f46974267eeaf83889c4"
  },
  {
    "url": "assets/js/50.a5e13903.js",
    "revision": "5dbba5fcb5f102e7262a5e39e2b52ddc"
  },
  {
    "url": "assets/js/51.7c8ce57c.js",
    "revision": "421825cce93244b2a6271a07e92fead2"
  },
  {
    "url": "assets/js/52.c9b69bb3.js",
    "revision": "0a2be3537451a5ee758fef0c1f983da0"
  },
  {
    "url": "assets/js/53.c20cbb4f.js",
    "revision": "a79eec1da1beeb12f595428ad8f40eb0"
  },
  {
    "url": "assets/js/54.db536eb4.js",
    "revision": "49dbc02f7a2b9a3d0992b1c00f8d55e2"
  },
  {
    "url": "assets/js/55.bb19d23f.js",
    "revision": "4809609421e9297598fbcfd1e59f783a"
  },
  {
    "url": "assets/js/56.f106aa07.js",
    "revision": "47211d311139407ab720755e369a6526"
  },
  {
    "url": "assets/js/57.b34f40cd.js",
    "revision": "3d769c6da534c39c5a4e88e32fd90a47"
  },
  {
    "url": "assets/js/58.a9e950e9.js",
    "revision": "91bac69c8fd37c027126f168ca57a1b9"
  },
  {
    "url": "assets/js/59.b4095055.js",
    "revision": "0393727a59ca808c6462f3b61bb68098"
  },
  {
    "url": "assets/js/6.1876d824.js",
    "revision": "bc1738da9458d0bcfb0687fff2cf2359"
  },
  {
    "url": "assets/js/60.90052f46.js",
    "revision": "de1e7d7ff1ae63bb3e57a5b6b202bf37"
  },
  {
    "url": "assets/js/61.8850d490.js",
    "revision": "a059d2bfb3cbf21fa35d853897792a23"
  },
  {
    "url": "assets/js/62.86ecd267.js",
    "revision": "4ebd83640dc38fc1975c7ec874d4ef76"
  },
  {
    "url": "assets/js/63.42e3bf9f.js",
    "revision": "9f66ba1b3c4e6992541bebfb0a1a36cf"
  },
  {
    "url": "assets/js/64.d1ccd36a.js",
    "revision": "a734b3e4e561f580712fd9b2a974c9b7"
  },
  {
    "url": "assets/js/65.8f2b3fd1.js",
    "revision": "11d103f00de04daa6c57937294a066fa"
  },
  {
    "url": "assets/js/66.0d6fc5b5.js",
    "revision": "ee9c6aed5aecf4d7920b299a5bfa8b34"
  },
  {
    "url": "assets/js/67.f17687d6.js",
    "revision": "f28a9f69197d6f85ed321634d53f0f44"
  },
  {
    "url": "assets/js/68.f44f84b2.js",
    "revision": "f8fbcafaa9fe6a1ea2f1752a961306a7"
  },
  {
    "url": "assets/js/69.03ceff85.js",
    "revision": "79aaeadc30d74d5f2ccd9392fe47eb35"
  },
  {
    "url": "assets/js/7.6abb7cd4.js",
    "revision": "eeda74ba86e067e73c1aa2685255ca68"
  },
  {
    "url": "assets/js/70.cf2a91da.js",
    "revision": "9b6ae96e1cadb0c462296c963f81e279"
  },
  {
    "url": "assets/js/71.bd950909.js",
    "revision": "b57b9353ad2710d80f2079fed7aeb11c"
  },
  {
    "url": "assets/js/72.96a0698c.js",
    "revision": "380b6ad2209db2493fc6bca1d795448d"
  },
  {
    "url": "assets/js/73.6331d36c.js",
    "revision": "09aa1fc52001255687d4791bcb279c56"
  },
  {
    "url": "assets/js/74.9d8d5248.js",
    "revision": "9d9324503c94e9e7381e5efb4f896d84"
  },
  {
    "url": "assets/js/75.47bd3819.js",
    "revision": "1090fb7cf1ffd7ca645c2920b82c55d6"
  },
  {
    "url": "assets/js/76.9b3d6546.js",
    "revision": "caa011adef57103a76ffdec7271d9e0f"
  },
  {
    "url": "assets/js/77.c7293e18.js",
    "revision": "e7f38b8ba5562e07eb23ccbc58f203b8"
  },
  {
    "url": "assets/js/78.2613171d.js",
    "revision": "c76a1cd16c0e7830c392d5d29afaf84d"
  },
  {
    "url": "assets/js/79.36bc483f.js",
    "revision": "64da22e491654a23a9d136d26c9d3067"
  },
  {
    "url": "assets/js/8.6e43898e.js",
    "revision": "c51e5daee960861eebb8d9072cf64d2a"
  },
  {
    "url": "assets/js/80.5331d7c8.js",
    "revision": "accbfa006d2fd3993e3d13d24d7963e4"
  },
  {
    "url": "assets/js/81.af34598d.js",
    "revision": "52c2ec73db950eb8227d8834ce465bb1"
  },
  {
    "url": "assets/js/82.b95eea1f.js",
    "revision": "b6021abeddc3616718c37373d8095646"
  },
  {
    "url": "assets/js/83.f0474bce.js",
    "revision": "214f667ef544d349ab8a8cd191702fb0"
  },
  {
    "url": "assets/js/84.ebed055e.js",
    "revision": "b1914f49f62972111d9c8d4780cd2189"
  },
  {
    "url": "assets/js/85.3a4a6cd8.js",
    "revision": "53953f2d0bfa04576649f4fe1b0098df"
  },
  {
    "url": "assets/js/86.1fccdd30.js",
    "revision": "0143d7458f179e059a5db4be33de7646"
  },
  {
    "url": "assets/js/87.613dfa86.js",
    "revision": "21b33f1fd2bdbfcb0ee52277fd820c79"
  },
  {
    "url": "assets/js/88.6ade05b3.js",
    "revision": "48ce1103d95e0faca8c6db929e4550d2"
  },
  {
    "url": "assets/js/89.b3df681d.js",
    "revision": "34e134ac2ef9a3b26790db9cd0b4a725"
  },
  {
    "url": "assets/js/9.74a2dd44.js",
    "revision": "ac26593ef2858e24751dde109a69a740"
  },
  {
    "url": "assets/js/90.974378e4.js",
    "revision": "53bb44fd8fea404f0420f9f9a4819d6c"
  },
  {
    "url": "assets/js/91.5f679740.js",
    "revision": "1250aa641b3c048285996c706ecf70f7"
  },
  {
    "url": "assets/js/92.3b830419.js",
    "revision": "c968f6c3efc9ac8ad29f8afaf89431ed"
  },
  {
    "url": "assets/js/93.00569fea.js",
    "revision": "ee97ec4c8ae60a80b5318556cfaff082"
  },
  {
    "url": "assets/js/94.491ef867.js",
    "revision": "608c6b1209d94a689e24103c698b85dc"
  },
  {
    "url": "assets/js/95.efe3403e.js",
    "revision": "945e6a0e9ea0a73f0f2044a66ccebe99"
  },
  {
    "url": "assets/js/96.c2fdb699.js",
    "revision": "b4f952a79ca71a9b41166e489ee1c6f4"
  },
  {
    "url": "assets/js/97.59f99bc6.js",
    "revision": "2aa2728c2656e86fa7ef86e4455e6a2f"
  },
  {
    "url": "assets/js/98.be5015e3.js",
    "revision": "e0a79357e937b9e22ca6865be5447a1c"
  },
  {
    "url": "assets/js/99.e780478f.js",
    "revision": "b03270874f4ecd70935d81ed468a9b60"
  },
  {
    "url": "assets/js/app.fcb91520.js",
    "revision": "b8736f006acd869e0287b03e203e65ca"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "b6f1b64ee410ef957da6f1a64a1be213"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "ce7fb3031a744b1bf90a603b17c23bee"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "69c790e3ea5c87d936b65977695a0734"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "55bb98cfcfed83973234e94c4b3e33c0"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "8b19b97effefe38a9c73105df1860a5d"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "2e5653abd841650bb954a7e32f3201f8"
  },
  {
    "url": "composable/date/now.html",
    "revision": "2749f139343136eb005833cc639c7134"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "da35d4a23ea13db7d4bfe488bf943e37"
  },
  {
    "url": "composable/event/event.html",
    "revision": "3344c5b12fc9e5960815f5343a845c8a"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "29b81fd05681345b07d5d477e73deecf"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "37cb85969ed493b23d50ecca1717b1bb"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "272dc856c3403602788d2d7a9fb0db4a"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "1b463845e0026d776a63b04e370830b8"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "320ac90a90d74be2cf8aab6628120467"
  },
  {
    "url": "composable/format/format.html",
    "revision": "d8fe02b11f1213c8e64f1f055be4b24f"
  },
  {
    "url": "composable/format/path.html",
    "revision": "47146ba11f19aa5a75d858c93a8e7468"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "1c1551e0ed0858dfa8f000f512194201"
  },
  {
    "url": "composable/index.html",
    "revision": "9d79ee400e62b8847b507c10eab38754"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "895fcbd98a0e0f4e13a63d4948704f89"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "8f6c973a8bcfb1ba14b09a58c42f01f9"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "a2da6eef2a039211f7411e7a5c4e5247"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "ae7475b43245d0e666d48a85f1b59b09"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "204838ebda817dd80ee3f63b32017e53"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "f273770c221d6ba2b9d5dc19f9b37d7e"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "01c12442088cb0da5be85b29c9bddb0a"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "3b20dd241f9180492af86278648f2b1d"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "66ef0f23d4aca86a452ae66a398d48f9"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "d04ad6f61b278b411a2234a6fd2f0c84"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "62655e99089a3c189dd07d022a77b909"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "5e37f7507daaea43bfc6cfbe541f5b4a"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "caa6cde2d879d61ef3406ddc33310d55"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "3eaf9b6a43a1d03529e3b324c8795fa9"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "61de96c84a79834b43aad5833fd02820"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "c5c94bba31ed6fe6275b41ff43a048c1"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "03fc878e453988a648eaca5d8a5fd185"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "a464d9b9a102dcec938dc89786593faf"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "98882ced6ad6f0f38bad08be1797da55"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "93003dbfa33be3ed216b74c98d52f7d8"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "42f5e9f80486a89999ba3a4baa8622e9"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "4a0c1aa6ea30fdf486ce7ba049833bf6"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "2a57757407a13024486b7646abdb38ee"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "42f36f90f59fdb862c81ac501d3a5e86"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "4dbae09ce3def287cf388a7e5013a275"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "e44e2b004d793334b8c0c09701cf1f50"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "d5bfb0827e6b3661e58eb5ec985b8e03"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "839ddec37ca5406f05bffe4dc7c15553"
  },
  {
    "url": "composable/web/language.html",
    "revision": "19a43d579efee6bd32649648a96698d3"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "bf06b618000d475a1c811b1940597965"
  },
  {
    "url": "composable/web/online.html",
    "revision": "4e82f4615e390d2b9f5428ec862b22a5"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "8abea3ef4cf0c71176739ec879d92c0b"
  },
  {
    "url": "composable/web/share.html",
    "revision": "d5066564e55f7828813ad9e4a6efa775"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "2fef996e516587537ed10eef98df556a"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "38b4fe678922b88a9e9344d8e79eb21f"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "ef1ccb7feb71e957819e59c482345e23"
  },
  {
    "url": "Examples/index.html",
    "revision": "3d65c689ed78c48ffeae666a3975c007"
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
    "revision": "0b46b73a8cff8c00d1cb39cdd21aafbd"
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
