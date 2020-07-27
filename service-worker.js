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
    "revision": "3447a76b987cc37bd73368605430ea6e"
  },
  {
    "url": "api/axios.api.html",
    "revision": "774470d444014957507fb760b4846e20"
  },
  {
    "url": "api/core.api.html",
    "revision": "9fe707fcdefb265a7b9e504bdc9d6031"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "2499a3f4cf556173912cb168bbf0324f"
  },
  {
    "url": "api/web.api.html",
    "revision": "8766824f482c98cd5ae78ba1da47c8da"
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
    "url": "assets/js/1.dd3213ea.js",
    "revision": "22e1ea0350f0543d659eb09c7f810e19"
  },
  {
    "url": "assets/js/10.044f38b2.js",
    "revision": "8071d9bc428c4a8f686fab3c56d6b60d"
  },
  {
    "url": "assets/js/100.9390e18c.js",
    "revision": "1446bbf1599be8d079002bb28bd25deb"
  },
  {
    "url": "assets/js/101.d09035cf.js",
    "revision": "7c55fa8472dc64d59b07531f62cb39d2"
  },
  {
    "url": "assets/js/102.e12f5957.js",
    "revision": "1423eba5f0fe242f7eb39cafee17e6b4"
  },
  {
    "url": "assets/js/103.6700168d.js",
    "revision": "225506185d6bea6f47b3c2cf60f0081f"
  },
  {
    "url": "assets/js/104.f4871d84.js",
    "revision": "8b4f97dcdf28546684a2252f8645b6ef"
  },
  {
    "url": "assets/js/105.544573a1.js",
    "revision": "42f6f678ebf9f94ac689d6cbca65a27a"
  },
  {
    "url": "assets/js/106.d76c05f0.js",
    "revision": "a2943da21fc8a2cd3b86e73737c94702"
  },
  {
    "url": "assets/js/107.8ca5b5f4.js",
    "revision": "78a2d3c1fa285ac62758dcf5e74f18df"
  },
  {
    "url": "assets/js/108.c2d87534.js",
    "revision": "4382af15a489b3e2e0fee7ba4b5ba0ff"
  },
  {
    "url": "assets/js/109.db2e0908.js",
    "revision": "cb9ff8ed3f3924849395835880c9b9a6"
  },
  {
    "url": "assets/js/11.c8bd5a4c.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.d83de0e7.js",
    "revision": "d71ead78d29ae3d0cf8cbdf81eecc893"
  },
  {
    "url": "assets/js/111.1c3d93e0.js",
    "revision": "fa4cb428c43d2c24b1cbeac8d0f92f90"
  },
  {
    "url": "assets/js/112.393e90a7.js",
    "revision": "9b25b0554cb3a496f2571603eeddd167"
  },
  {
    "url": "assets/js/12.38e85206.js",
    "revision": "7714c823c69be6f47ca01b1f1db39db1"
  },
  {
    "url": "assets/js/13.104e0ffe.js",
    "revision": "a710d8d978bbec4a7b82cc1627baba35"
  },
  {
    "url": "assets/js/14.7d2b0882.js",
    "revision": "48d5ba01af5fdd1ed1a76c881bb852b7"
  },
  {
    "url": "assets/js/15.133e11d7.js",
    "revision": "9e45dcfcc2dc47a79e42b5eadf24d9c8"
  },
  {
    "url": "assets/js/16.7f1a39e0.js",
    "revision": "fd9d8031d3d7dfd450ee226e0b61b4f4"
  },
  {
    "url": "assets/js/17.a52ad030.js",
    "revision": "776f568a9c26f1cadd059b33bc69cfee"
  },
  {
    "url": "assets/js/18.7348f900.js",
    "revision": "34d47884c8a98cbcbfad864cde93adc0"
  },
  {
    "url": "assets/js/19.8c4763e6.js",
    "revision": "c47e6828b96e733b0f1314a7312dc92b"
  },
  {
    "url": "assets/js/20.d5238715.js",
    "revision": "afe9525f572d6c4ac5d0f45d7476bfd7"
  },
  {
    "url": "assets/js/21.a70f830f.js",
    "revision": "1417550e4fd6638da05754c741efdb44"
  },
  {
    "url": "assets/js/22.816149fc.js",
    "revision": "5fc21e4834df8399f587bc51156cb396"
  },
  {
    "url": "assets/js/23.73c5a41c.js",
    "revision": "e4b7e053c633eec9c4c241b10b9cd794"
  },
  {
    "url": "assets/js/24.446f2920.js",
    "revision": "b0d827b1a8cfbe28c1d659a0dba4ea15"
  },
  {
    "url": "assets/js/25.34473d0f.js",
    "revision": "65f5eba314394386e31c151ce3c2c0b1"
  },
  {
    "url": "assets/js/26.790c5a90.js",
    "revision": "8cd4dd034e6c178d9b5e69ad18916157"
  },
  {
    "url": "assets/js/27.c7ae4175.js",
    "revision": "050cfeaccfcf4a45ad58031aa27c4a9e"
  },
  {
    "url": "assets/js/28.c617cb58.js",
    "revision": "710d877ef1a1e3608950079780d881c7"
  },
  {
    "url": "assets/js/29.e3a85804.js",
    "revision": "8be34dcd3e62a8677c7b7834c5b87934"
  },
  {
    "url": "assets/js/30.e26bf119.js",
    "revision": "70a01abcdd73ab4532fca0a7aca3950b"
  },
  {
    "url": "assets/js/31.c22794d8.js",
    "revision": "5c27e14b2c77743b6a357448368e76e1"
  },
  {
    "url": "assets/js/32.8b1b639c.js",
    "revision": "b1d36316938f01b15cac29ea6b855866"
  },
  {
    "url": "assets/js/33.71b8967b.js",
    "revision": "d25ca6d0770cc67ce39dd4ab016c724a"
  },
  {
    "url": "assets/js/34.69ddecd4.js",
    "revision": "79b83abf5912f8c632da0b42d1f92b27"
  },
  {
    "url": "assets/js/35.3d760a3e.js",
    "revision": "9ce3895f4024b264565e850ce4c98d37"
  },
  {
    "url": "assets/js/36.659b310c.js",
    "revision": "c3210b9b3a692b69986370306cbee9a8"
  },
  {
    "url": "assets/js/37.f8c75a94.js",
    "revision": "b3f7747bd87e879f02d1e4a594b8f5c2"
  },
  {
    "url": "assets/js/38.6870eca9.js",
    "revision": "663a20acf27f20425fecd88c03233945"
  },
  {
    "url": "assets/js/39.87968145.js",
    "revision": "9030a67c7f3bebfe362cc152442e4f9b"
  },
  {
    "url": "assets/js/4.aed6686f.js",
    "revision": "6bef0dc8c8f79a4867da493bd5110c3b"
  },
  {
    "url": "assets/js/40.64283c7a.js",
    "revision": "658c1f382fb7b3140bdfcd40ab5ea313"
  },
  {
    "url": "assets/js/41.095cb44f.js",
    "revision": "84308467d0d13ad457bcd1187df004f5"
  },
  {
    "url": "assets/js/42.9954ef53.js",
    "revision": "825f41dd71db1c13781341a94da3cc38"
  },
  {
    "url": "assets/js/43.2b945054.js",
    "revision": "2f868756be89dfbfc458a3e43128f904"
  },
  {
    "url": "assets/js/44.9243bc32.js",
    "revision": "defb9bebfbf90a3cd9b69965bb99a168"
  },
  {
    "url": "assets/js/45.3b5d93cf.js",
    "revision": "192da1133db0d0ac369d1d61b5c2f1e4"
  },
  {
    "url": "assets/js/46.78b78113.js",
    "revision": "5f9c048740a2a1fc979db2ed56015813"
  },
  {
    "url": "assets/js/47.6529e10f.js",
    "revision": "e5f0946ab7d64cbaedfabafebecddb41"
  },
  {
    "url": "assets/js/48.cef37ea9.js",
    "revision": "0563caecb57b0468a27a8ad915b2e883"
  },
  {
    "url": "assets/js/49.0d1e41ca.js",
    "revision": "1aa70e8c3608b61fd903cc6afc73ff81"
  },
  {
    "url": "assets/js/5.3a64806d.js",
    "revision": "06bfdae6c332f46974267eeaf83889c4"
  },
  {
    "url": "assets/js/50.83fb4505.js",
    "revision": "c0a617cbabe9e105115592d1ef32bcaf"
  },
  {
    "url": "assets/js/51.eb2ac7db.js",
    "revision": "41ab3752dbe71681c962cd63c9cb23e0"
  },
  {
    "url": "assets/js/52.1f14c547.js",
    "revision": "c38cf1090f4773574598f76509105000"
  },
  {
    "url": "assets/js/53.768b9ac8.js",
    "revision": "e8f1b93661498638a46ebd90f7f97c71"
  },
  {
    "url": "assets/js/54.3b387e02.js",
    "revision": "a9c795519948317b4e5ab838a92407fc"
  },
  {
    "url": "assets/js/55.e4710a88.js",
    "revision": "d2f1443eed87c6766ea385ba4e7f891c"
  },
  {
    "url": "assets/js/56.24acad88.js",
    "revision": "93357158bd697a983c27f6d456ef98be"
  },
  {
    "url": "assets/js/57.1e8af78a.js",
    "revision": "3054ece0a965ee0e19a6cea34b4bdfc7"
  },
  {
    "url": "assets/js/58.dc68b44d.js",
    "revision": "e8a66aa071f60f945d8375e8c98500dd"
  },
  {
    "url": "assets/js/59.fced0423.js",
    "revision": "a717a69a5f868674dfd76eb7c2a3f8b9"
  },
  {
    "url": "assets/js/6.c63da727.js",
    "revision": "bc1738da9458d0bcfb0687fff2cf2359"
  },
  {
    "url": "assets/js/60.d366d856.js",
    "revision": "d42664a151f11df303ef1626908033b4"
  },
  {
    "url": "assets/js/61.efa406b4.js",
    "revision": "c0babf0ab6ffcc9d325d7d3227488832"
  },
  {
    "url": "assets/js/62.f7f7fbde.js",
    "revision": "20dd26602fd62087e09f24e7ca944fc4"
  },
  {
    "url": "assets/js/63.cf8ae1df.js",
    "revision": "3268bae6b898d3d6df3596098b257782"
  },
  {
    "url": "assets/js/64.f4cb50a5.js",
    "revision": "d5abfd645efcc8d3f1be3b13c4502a11"
  },
  {
    "url": "assets/js/65.ac7c5f03.js",
    "revision": "219da721127de8ccba5e8e536ca1ee68"
  },
  {
    "url": "assets/js/66.28a40e2f.js",
    "revision": "77272597ce6608adf7940b56fe9807b7"
  },
  {
    "url": "assets/js/67.01f43a8c.js",
    "revision": "cc7d7372b9ce61d9d07d9391b4bfd8b9"
  },
  {
    "url": "assets/js/68.baa605c2.js",
    "revision": "a8ba999ccde5c7c6e83c41b539828cf7"
  },
  {
    "url": "assets/js/69.9d02d61f.js",
    "revision": "ecd93d14addbfbcaaea20550823fb313"
  },
  {
    "url": "assets/js/7.5fa84989.js",
    "revision": "eeda74ba86e067e73c1aa2685255ca68"
  },
  {
    "url": "assets/js/70.a8b35aa1.js",
    "revision": "ee3ea2e1acbe206184795a903f44b764"
  },
  {
    "url": "assets/js/71.32b64c82.js",
    "revision": "7b4233d511178fb928b212bdce0f59be"
  },
  {
    "url": "assets/js/72.b93a7a1e.js",
    "revision": "4934a9b99469e2d3b7b87dfd9c0f477a"
  },
  {
    "url": "assets/js/73.87669c5a.js",
    "revision": "9098c74b365cb0a11446842196f9d7cd"
  },
  {
    "url": "assets/js/74.5fc1d805.js",
    "revision": "4e8299c9e5a2de64f6a8f94ef8fc4869"
  },
  {
    "url": "assets/js/75.72ba6d69.js",
    "revision": "54deb0cfbc6c34b547ee7a6a6c76281e"
  },
  {
    "url": "assets/js/76.3aa82e1b.js",
    "revision": "ef08311db8ce83d6ff1952d81280a404"
  },
  {
    "url": "assets/js/77.c78697e0.js",
    "revision": "837a89b0ac8621c8d7b02720224450bc"
  },
  {
    "url": "assets/js/78.f8951c5f.js",
    "revision": "efef4c6a0659d7fcf71c40cc9f74c769"
  },
  {
    "url": "assets/js/79.0464f112.js",
    "revision": "b3e15ebe22bef5f9ebf9cdce25f86ca4"
  },
  {
    "url": "assets/js/8.8241b734.js",
    "revision": "c51e5daee960861eebb8d9072cf64d2a"
  },
  {
    "url": "assets/js/80.f238919f.js",
    "revision": "adb2dd04a9c673d2007e34f13efbf1d9"
  },
  {
    "url": "assets/js/81.8ab1fa13.js",
    "revision": "d2f03e1b7dae2a46fe76465e6448e400"
  },
  {
    "url": "assets/js/82.41a5e8ef.js",
    "revision": "0329126d6c6a676940e6d8bebe47a42a"
  },
  {
    "url": "assets/js/83.4413982d.js",
    "revision": "4b3ddac3da670327bd1ad518a50772c3"
  },
  {
    "url": "assets/js/84.eebe3bbf.js",
    "revision": "761c64793672bc19e99abf7bb7aa362c"
  },
  {
    "url": "assets/js/85.a696dc50.js",
    "revision": "88fd6cb9b85334c026be73960c819d79"
  },
  {
    "url": "assets/js/86.df149abc.js",
    "revision": "634c07368c7dda1c4cd4a82399c1c432"
  },
  {
    "url": "assets/js/87.8183e36a.js",
    "revision": "2f2edd0ab7c879473c8cccae855d3f07"
  },
  {
    "url": "assets/js/88.35da58b1.js",
    "revision": "ededf6253c0d573f92e1eaf434b7c9a6"
  },
  {
    "url": "assets/js/89.ff6bb838.js",
    "revision": "9e9421dd6759df35eec5114609e44c02"
  },
  {
    "url": "assets/js/9.4ff87ac0.js",
    "revision": "ac26593ef2858e24751dde109a69a740"
  },
  {
    "url": "assets/js/90.a9246ff8.js",
    "revision": "d3b6b4b790789ab38f12c61a67c2f376"
  },
  {
    "url": "assets/js/91.eddd4775.js",
    "revision": "10a53ffd5ea6a68e6a5e72c750b82e01"
  },
  {
    "url": "assets/js/92.73d0b9d6.js",
    "revision": "ab48c9ecb9f0dfa52dc19ac26bbd8b72"
  },
  {
    "url": "assets/js/93.00e02328.js",
    "revision": "6a8f95b38cf41e15bbe9dcd50eb003b4"
  },
  {
    "url": "assets/js/94.8250773a.js",
    "revision": "efca964f2a700d34c80c8c7dde80c8e0"
  },
  {
    "url": "assets/js/95.24042369.js",
    "revision": "dd9bb8a3890f9fde66cb02b58b6c6eea"
  },
  {
    "url": "assets/js/96.494d0864.js",
    "revision": "192b34b5ae5608b16cd351e97587b85b"
  },
  {
    "url": "assets/js/97.18eb4a21.js",
    "revision": "e2964989edd715aaf1ab17644d548d87"
  },
  {
    "url": "assets/js/98.1576f7b9.js",
    "revision": "00d5891c0b200ab5fefbcb22c5841872"
  },
  {
    "url": "assets/js/99.ddfde981.js",
    "revision": "faf1f1db71854848b3b512efe73504cf"
  },
  {
    "url": "assets/js/app.f203ac39.js",
    "revision": "8d9fb435760362052b8277018b79ed27"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "8bdef6806e37eadee34cc622897747cb"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "3a6f7053c0062ffa8ffa127de0286a71"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "2be9409f46652474826bb18b2a44685c"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "37421ece74eee50074304d1eb9e57405"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "a7bc223d0ebb4b7f0db115f895da236d"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "5f6d341e2670f4666379bb4b07b4ea41"
  },
  {
    "url": "composable/date/now.html",
    "revision": "eeedb93926a27077878e1af7f3b6b5bc"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "122c4a9650afd2c2e9f1e7e2e82faadb"
  },
  {
    "url": "composable/event/event.html",
    "revision": "4d26d45865cd8b7806c6bc218d65fdd5"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "115ba165ca939998a8df9c4d20d2c37d"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "e2388b8f13c6576f929299ec2d79a347"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "24247cf9963fe159ba8257118395a7ca"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "2eec17608102587dad65e4a2012c37a7"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "b75ec192b91b88dcfb7cacef6151b221"
  },
  {
    "url": "composable/format/format.html",
    "revision": "90749b5b668a2670914c113c76acab2f"
  },
  {
    "url": "composable/format/path.html",
    "revision": "23aaa6ae2b8446bcac06afe3a773d546"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "56f45e0eddfbafe2ce6cd4d9f58095c6"
  },
  {
    "url": "composable/index.html",
    "revision": "36df6f83540632bd0233583f9dd1f263"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "1762f5869596c162c0964ef3b8474e9e"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "987559c0d250abcac328873078a08aed"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "439ba1a96f8d4fe234b4a4157e89e698"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "c5976b62bf6ab5072564d998488ba3a3"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "a8971f122c9bfc736731d4f1fbc774e4"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "05d336e9a454d29b31f40e1dfae8ee60"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "1d534563a25cc887a566b2bf27212ad3"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "52c9d0938400d0c52f4e21261391bf23"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "f065fdc3ae1af82d85659a93fb74c8ff"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "7b418fd5e744ad93cb8dd66ea0151256"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "ef073d207918dee921205a879fa8d402"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "d32f54d485934c4d7a69c1f6f14e9553"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "186630438530776dea1a2979d190afb0"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "c68b5597ffc974ae98d4fe4efb861cba"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "1602e2935aaa8b475f1c87ed504929a9"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "48e3a42d689b4c250cf92185ab811127"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "b54b1e8b26ef660977e18c942f94b948"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "662b13841df1e91840e127ffaa07a9fd"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "e6a0a9d5236a1c0399c0f51b77ba1ebd"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "40fa52c4163d12a3c0d0661efd3ad7b1"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "b58f7894688a094501fc356c07aa3d6a"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "93a37e574b5f4e97ad4a75d681d880a1"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "0dceb9cd37afba272de783879d0a2de1"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "e0db329080403493e471e1edbca38c40"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "ad71627d46935e3bc86ec8fb08a6fe1c"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "bbdda34f543810aca17f362288dfe50d"
  },
  {
    "url": "composable/web/language.html",
    "revision": "fe45f3f17c74742a7f433c88b30f4e38"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "ab2ea05ef6e7826377beebc4220c3028"
  },
  {
    "url": "composable/web/online.html",
    "revision": "1c0d24f01783f523d34cde869dfb91b8"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "05f213bc8df38054410e6d04d0b7f38e"
  },
  {
    "url": "composable/web/share.html",
    "revision": "d8d676d27b6550f136b475c0aaec1588"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "65f90512f7639f7daa2be7faa1bd329c"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "8ac8c7c3f9e88fb215cc1c99258a974e"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "60398490ae75ef412c1be3be567a5875"
  },
  {
    "url": "Examples/index.html",
    "revision": "a157f2abf889624dafffcfe245274c5b"
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
    "revision": "8e76abaa90e20ac352b2da4f35358c3f"
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
