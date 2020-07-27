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
    "revision": "327b6829340e04100c39f2084b620e79"
  },
  {
    "url": "api/axios.api.html",
    "revision": "eae074d8bd4743c4d8aba42ed9d25cdb"
  },
  {
    "url": "api/core.api.html",
    "revision": "ec174a567c8cfb7341d19acc51ffab95"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "de23c8b2095b82f44a03e9ba362b0ec6"
  },
  {
    "url": "api/web.api.html",
    "revision": "97e62bdae86f94bca5820f2f7ec90896"
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
    "url": "assets/js/1.97691677.js",
    "revision": "22e1ea0350f0543d659eb09c7f810e19"
  },
  {
    "url": "assets/js/10.044f38b2.js",
    "revision": "8071d9bc428c4a8f686fab3c56d6b60d"
  },
  {
    "url": "assets/js/100.5c04ba02.js",
    "revision": "76688175ae016f547876cfc0e7d885f3"
  },
  {
    "url": "assets/js/101.2590dd5a.js",
    "revision": "ae10fd58214a8e6f1b8421519ceecd48"
  },
  {
    "url": "assets/js/102.efaa26ec.js",
    "revision": "ca86443b1b71526164364fcd79d9e80f"
  },
  {
    "url": "assets/js/103.2f901ee9.js",
    "revision": "4aada3735d11b50afb18b158db6cde28"
  },
  {
    "url": "assets/js/104.c06f35a6.js",
    "revision": "8b675124bcc63ad9e41fa58ce73aa9e2"
  },
  {
    "url": "assets/js/105.fb1bcf0a.js",
    "revision": "36580c1c2cfef944a24eff7c80461497"
  },
  {
    "url": "assets/js/106.e30a2e71.js",
    "revision": "7dba160f390f79dd9bbe880e3e478eaf"
  },
  {
    "url": "assets/js/107.cfffa8eb.js",
    "revision": "a9f06ebe3f259cbb1684fc58523d48d8"
  },
  {
    "url": "assets/js/108.bf55df29.js",
    "revision": "166653738dfacf509d7eebb9573f96ad"
  },
  {
    "url": "assets/js/109.a4087ca7.js",
    "revision": "0cd92c8fb506a0592500447a8c9b5e16"
  },
  {
    "url": "assets/js/11.c8bd5a4c.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.eb255ef6.js",
    "revision": "7f9abe82700ca471f84decbbfe82691e"
  },
  {
    "url": "assets/js/111.529b0f3f.js",
    "revision": "677216244dd8679bdb12f6ab894579df"
  },
  {
    "url": "assets/js/112.2c2c84a2.js",
    "revision": "bd00568b6bc87fa29a545e208df687fa"
  },
  {
    "url": "assets/js/113.2f4a418d.js",
    "revision": "a70b7126eef4a7ba799e92e97950560a"
  },
  {
    "url": "assets/js/12.cf8317e7.js",
    "revision": "b3b51a7a40f4065696234940cb04be33"
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
    "url": "assets/js/45.b9f2d6cf.js",
    "revision": "b23473cc6e21dc723e5ce278b21561df"
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
    "url": "assets/js/55.872f08c0.js",
    "revision": "87a7259abd9c4b2cc18c1e47915ede4e"
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
    "url": "assets/js/58.41019e08.js",
    "revision": "d7ff83e915273c2512c554f86e20d40a"
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
    "url": "assets/js/83.fc1a6725.js",
    "revision": "6945e705eebe228a8a10bcb032774502"
  },
  {
    "url": "assets/js/84.b3b70d61.js",
    "revision": "1b832858b64491944959841d519b0ba9"
  },
  {
    "url": "assets/js/85.d9275316.js",
    "revision": "96fcd5a428ae7d990f19c1d7161ba1a5"
  },
  {
    "url": "assets/js/86.119119bb.js",
    "revision": "4a38f46981d9554d010f757646bdb806"
  },
  {
    "url": "assets/js/87.11731fe4.js",
    "revision": "0a933312dfbf3c10e6c882f6dac03701"
  },
  {
    "url": "assets/js/88.9d6f52c6.js",
    "revision": "bc071852a4ff9cf05d814d60a463be5e"
  },
  {
    "url": "assets/js/89.1caeea3b.js",
    "revision": "3dfaf85232740393ea9a355a851f62b9"
  },
  {
    "url": "assets/js/9.4ff87ac0.js",
    "revision": "ac26593ef2858e24751dde109a69a740"
  },
  {
    "url": "assets/js/90.f92f42af.js",
    "revision": "0ee9faae4721aa9962890d8bf387e544"
  },
  {
    "url": "assets/js/91.f373ac07.js",
    "revision": "1b11647c3e8d77fcdeed0c9538e016ef"
  },
  {
    "url": "assets/js/92.463484ec.js",
    "revision": "a42fdd00a205915610d92b4e7a93e1ba"
  },
  {
    "url": "assets/js/93.6519aff7.js",
    "revision": "a2a58aa568b12353c5b61b97ec3dd5c7"
  },
  {
    "url": "assets/js/94.438543e9.js",
    "revision": "0656744a9c966f81a660390155eefb01"
  },
  {
    "url": "assets/js/95.958bbca4.js",
    "revision": "78bcf4e51dcfd6a51466484d8b553f6a"
  },
  {
    "url": "assets/js/96.22fe3cd4.js",
    "revision": "b26d3b045137a5f942538331803954aa"
  },
  {
    "url": "assets/js/97.164502e6.js",
    "revision": "dbb70d6d7009bdc9665dbd8532a1f16d"
  },
  {
    "url": "assets/js/98.6b055ab8.js",
    "revision": "2c924a498475ca115525a05c698c57c1"
  },
  {
    "url": "assets/js/99.446b2d3f.js",
    "revision": "31eaa80d74f653363c25116688d7b5fd"
  },
  {
    "url": "assets/js/app.00458805.js",
    "revision": "99b7a759e307123b5b0452a1563ec765"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "ffb284a0b6093bc431118fe4c904402d"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "ebbb4154b136ad7d51e772e1d86c8001"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "c30574cc3ebc3cf277996cce7175a630"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "68714b5c484b381e21b6d4030208a162"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "83c47280655c5267da42813668de22b3"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "405eb19ea096545b56a99eba874eea3d"
  },
  {
    "url": "composable/date/now.html",
    "revision": "4704fc1d61c24281faa2a71e5984797b"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "b4e864a6efd444c34d0416a8e2aa760d"
  },
  {
    "url": "composable/event/event.html",
    "revision": "8112563c0d372245b15bf1c777d74273"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "b4c9a4e1a8a401b86f8570d446d4a3cb"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "b1b5cd1d227dfc9e5f6195807ebe7a89"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "29427aa19807dd86b327fc68d9339fe5"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "bbbbde32a08b36b6d34bb411cb2075d3"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "ee0c6aad4266018fdd09f3f382b14a60"
  },
  {
    "url": "composable/format/format.html",
    "revision": "307e87b56a5a5e529439bb7560a236d4"
  },
  {
    "url": "composable/format/path.html",
    "revision": "ce9132c7cb5803af4cd68f5a4c32c63e"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "d5acb2d653bf49c191ae0f31e2f1b237"
  },
  {
    "url": "composable/index.html",
    "revision": "37a344e15741f2cf1c8d45f8bc8648a2"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "015e219478fd7030dd49999ea5bec08c"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "815c2ad49e5f4bb9eb0f3a63d3aa66ed"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "4b382e4a2aa0ce4851c25700a96df47c"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "fba1bb4134e02973a1174fcf259bdcf7"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "dfd2acef4ffb8ea08fcf5ef08135f3a1"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "9cfc1ab7ffd3cb3c230d0888a4d38e88"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "7c32adc6bf42998527c52a9260ad167c"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "3387507349995422054c782a4f7b873c"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "5bd386f6afec0ff7d7f5dff0a7257072"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "de4ea46ac89d5b94aa7905b2f9b42e7f"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "48a72c6f88b2dd44844c79eeb99c49f7"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "d92809b799d1cc160906391dcbb4b6aa"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "554a012ddeb7b2ca3bad370dc1b2935f"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "177d8200944984b75d013f4a1c2a7352"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "aa0f2df067e3e91be97046dc9df198e3"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "c695742c56f3b8e5a72e704e68fe971a"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "4f1aac77531bffae4b28486ef9be7285"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "ecee8dd855a75a6c59e0c2984c924330"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "54bc5851dc49ce3ae777863840906887"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "1ef74fc338dcc6ffae5ce248deaa8575"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "213852a7473abe41877c1519a9286f40"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "9a25d31aab9dd7df64398046e7c6bfda"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "fc23c0f9b0393566d84ba4e8a10ae505"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "040277bce2c7650b8f85d5dabbf1be62"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "33f4416f091e863ca7ea11d98a50d062"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "aec4bc96f92469874e78b271516b7e38"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "4a4cafd0a5f4825f69e7a4c18b424634"
  },
  {
    "url": "composable/web/language.html",
    "revision": "a99b9914461c37ed1c0904140df0a26e"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "3719c7a5f88699b0d05acf5fe5856d94"
  },
  {
    "url": "composable/web/online.html",
    "revision": "29b9c9c403b31d861c53710cad92be9c"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "f88f52b7c4127f5f78dcc864e1b4e9f4"
  },
  {
    "url": "composable/web/share.html",
    "revision": "d7ac452520d63d07b1035f2608e20aca"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "e456a7eccc8adc4e549bf6180917a4e9"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "b221502b0a69e0f4fc54ee6d57214c7c"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "3865a806e1e9b3c8b1799331c73859ff"
  },
  {
    "url": "Examples/index.html",
    "revision": "9c358510eb7be62dad4353ce3b4aa52f"
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
    "revision": "0584f1b42ddabee2ffc582fd0e8f20d3"
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
