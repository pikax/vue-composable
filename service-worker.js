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
    "revision": "ed7b6898312b6055ba07ff1c4138a0a4"
  },
  {
    "url": "api/axios.api.html",
    "revision": "9642dc529ad626dddae19246ed9dd08b"
  },
  {
    "url": "api/cookie.api.html",
    "revision": "b40339270f5b93ad822d49d2ebc14c1e"
  },
  {
    "url": "api/core.api.html",
    "revision": "ed5d02bc04ec6bafb946461c51d150a6"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "993f1c8e1c144688b6757a2ec29ee904"
  },
  {
    "url": "api/web.api.html",
    "revision": "d326d9eb967e6ab7e143f97bd2c949e9"
  },
  {
    "url": "assets/css/2.styles.765e96c8.css",
    "revision": "fe26c52047b7c4dc84f826c57595b59a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.09661221.js",
    "revision": "a015e2d07df08cb0de216253c3b2f173"
  },
  {
    "url": "assets/js/1.d77acbd0.js",
    "revision": "ed7bb7ea9e4a75874ad0508a0a725ccd"
  },
  {
    "url": "assets/js/10.07e73c1d.js",
    "revision": "1c30818a39c4b1a380bdba44cd232c46"
  },
  {
    "url": "assets/js/100.8254daef.js",
    "revision": "0a261035078c731b9c06dbcc71c69d45"
  },
  {
    "url": "assets/js/101.b0d4ec9d.js",
    "revision": "c8f3bb48770e9fbeb418ca13cc3a522b"
  },
  {
    "url": "assets/js/102.fbd74ab6.js",
    "revision": "da49f41bf72938efee17e883cef5004e"
  },
  {
    "url": "assets/js/103.30461485.js",
    "revision": "35f7120ab8a223660ad808773cba133a"
  },
  {
    "url": "assets/js/104.16f86404.js",
    "revision": "403e52214a201954396f0c443747f28b"
  },
  {
    "url": "assets/js/105.2cd03fef.js",
    "revision": "60b8132aad62d217ae7cf93fcd3786ca"
  },
  {
    "url": "assets/js/106.fc87b4c4.js",
    "revision": "c06800436786104853293804aa35ca6f"
  },
  {
    "url": "assets/js/107.c7c88577.js",
    "revision": "276618e14349406f6253609cd71cc2d4"
  },
  {
    "url": "assets/js/108.39059472.js",
    "revision": "a20dbdfb54dcbcc4eef65f68f84eeecd"
  },
  {
    "url": "assets/js/109.ebb6f16b.js",
    "revision": "5b16863e03c0ddecf9648768252bd69e"
  },
  {
    "url": "assets/js/11.2d570db7.js",
    "revision": "6772f7dc0ae0197ad28868b40ce8306a"
  },
  {
    "url": "assets/js/110.afe23d3b.js",
    "revision": "a382a68c6e30964061e5e0cc1246a5ae"
  },
  {
    "url": "assets/js/111.7811c704.js",
    "revision": "6e8add0a2dd6488da2cce3b74e7f5e7e"
  },
  {
    "url": "assets/js/112.66e066f2.js",
    "revision": "daaf484fb0005de8fde6d4886d5a4878"
  },
  {
    "url": "assets/js/113.c4121f82.js",
    "revision": "544009b4779ba2b544c84da37c8e0fde"
  },
  {
    "url": "assets/js/114.97625662.js",
    "revision": "07b1eb08c96849b3a97c4c714f3aa3d7"
  },
  {
    "url": "assets/js/115.1e02ad5d.js",
    "revision": "d28dea0968c1386b1269ad946768db79"
  },
  {
    "url": "assets/js/116.8626db29.js",
    "revision": "b82325a220cdbc26eb43381417f849de"
  },
  {
    "url": "assets/js/117.0e81d564.js",
    "revision": "7ae85e1503ccac40ac1101f6f7af5970"
  },
  {
    "url": "assets/js/118.c5c67093.js",
    "revision": "c1006ca8215d6e5c60e25aca36965a10"
  },
  {
    "url": "assets/js/119.3e7d36fa.js",
    "revision": "b64670e303e1d3d09c93e0f785bd20c7"
  },
  {
    "url": "assets/js/12.57d9a8d5.js",
    "revision": "58d4e78ac3b61fb35a0b64b68f343fe8"
  },
  {
    "url": "assets/js/120.0879407e.js",
    "revision": "a78b6abd1b5c23fe778befa17dcd1ecf"
  },
  {
    "url": "assets/js/121.8b903b23.js",
    "revision": "8d0cd311a2d8d69a37b29bc8d98a3c63"
  },
  {
    "url": "assets/js/122.178dd479.js",
    "revision": "9b39ab7a34da604710dd55fc1c755a64"
  },
  {
    "url": "assets/js/123.dcdba0e3.js",
    "revision": "4549b75afdea5112d76319e55fbeae3d"
  },
  {
    "url": "assets/js/124.4787d571.js",
    "revision": "f7ea26a9646eb318f3c1a42b3e258310"
  },
  {
    "url": "assets/js/125.334d747e.js",
    "revision": "def6d7839c6e3cb070646b5e518e55f4"
  },
  {
    "url": "assets/js/126.612bcd5c.js",
    "revision": "eca291b2ead0994ed83585a71ea5e2ee"
  },
  {
    "url": "assets/js/127.4365a582.js",
    "revision": "ddfb3c12860c50bfb2c2eb8f11be1d05"
  },
  {
    "url": "assets/js/128.fcb947aa.js",
    "revision": "c65ec8789174850db595680b6c2a0e0a"
  },
  {
    "url": "assets/js/129.9ebd9a7d.js",
    "revision": "926afbb9d992f4aad7b3a25baba76c0b"
  },
  {
    "url": "assets/js/13.60945812.js",
    "revision": "22369069bb9f55d086b85fc21ddad700"
  },
  {
    "url": "assets/js/14.16b94331.js",
    "revision": "3e4d596ee4518228005dfd909fdc06c3"
  },
  {
    "url": "assets/js/15.f53f53ef.js",
    "revision": "c2230edcfea87dd06086bc32b075c409"
  },
  {
    "url": "assets/js/16.b9a46386.js",
    "revision": "a82066295d908aa6d6937cc5cb2079bb"
  },
  {
    "url": "assets/js/17.70f5a03a.js",
    "revision": "8874273888771cf925868ec35917e0cc"
  },
  {
    "url": "assets/js/18.5258c88e.js",
    "revision": "9a2d0cd34e0fe3bf2a9f36253a8a89f8"
  },
  {
    "url": "assets/js/19.0933de17.js",
    "revision": "9475f13269e3f59db90462474eea70c6"
  },
  {
    "url": "assets/js/20.aa4af145.js",
    "revision": "9d66c0d65477d439655852e7de56c878"
  },
  {
    "url": "assets/js/21.a581cccc.js",
    "revision": "daca03d50d86f5676f254c1a0a465ace"
  },
  {
    "url": "assets/js/22.c3a67a9e.js",
    "revision": "6869f628f3db5bd8478e249b427174c0"
  },
  {
    "url": "assets/js/23.dc9da29c.js",
    "revision": "263b1635bd21a9fc79972d6679dfa528"
  },
  {
    "url": "assets/js/24.676e99d9.js",
    "revision": "3e257baa8f50aae3ab9529198f2ec8e5"
  },
  {
    "url": "assets/js/25.b6ce7e10.js",
    "revision": "86b1d3a4d39ea2ff443af4a188552fb0"
  },
  {
    "url": "assets/js/26.c8eb8170.js",
    "revision": "78d831f2e8ea18b6285c9ea54a4f399c"
  },
  {
    "url": "assets/js/27.9bdb5627.js",
    "revision": "1e7aeb7d6a379bc9d0c0d629879ef6e6"
  },
  {
    "url": "assets/js/28.b12a6628.js",
    "revision": "5e47f61beb05d4e21146ea5a5909a8f3"
  },
  {
    "url": "assets/js/29.147e45d0.js",
    "revision": "3bd4d20d60d08f3fac9d3d23e239723b"
  },
  {
    "url": "assets/js/30.f584819a.js",
    "revision": "030703aa591f2905d86b8281032e7454"
  },
  {
    "url": "assets/js/31.502a9e3a.js",
    "revision": "5311c92a851cfa497ad3996162280478"
  },
  {
    "url": "assets/js/32.638294db.js",
    "revision": "206c7dc6a62224a5f8ccaa0d5241404b"
  },
  {
    "url": "assets/js/33.3b00bc25.js",
    "revision": "a213127fd3ffdd2b51df925038219467"
  },
  {
    "url": "assets/js/34.ab0ab4a2.js",
    "revision": "48be91cddd7f0dee0d1d96b35a4d5a9c"
  },
  {
    "url": "assets/js/35.2a5b83da.js",
    "revision": "7c840d6f07e099793af850a4d7a11a2a"
  },
  {
    "url": "assets/js/36.d5922914.js",
    "revision": "34629b82f721550bff5ee888b9cfff46"
  },
  {
    "url": "assets/js/37.c7b46357.js",
    "revision": "a65446d1b927e94b67d33d6871c207ef"
  },
  {
    "url": "assets/js/38.bf03d17c.js",
    "revision": "421385cf8f200812d844bb430c96563d"
  },
  {
    "url": "assets/js/39.0497c321.js",
    "revision": "78876e990a4aa9da9c263cdfa79dcf10"
  },
  {
    "url": "assets/js/4.96dee109.js",
    "revision": "fe87ee05b92e47f3d5364d7e0047bffe"
  },
  {
    "url": "assets/js/40.9673468f.js",
    "revision": "d2f26cfe7fa2ad15a843a60da14d272a"
  },
  {
    "url": "assets/js/41.7b850c99.js",
    "revision": "46f8c5e22ad371d6f028c0e00d512908"
  },
  {
    "url": "assets/js/42.c95c57cf.js",
    "revision": "ab7186abab9cc516e674e5e0a415d03a"
  },
  {
    "url": "assets/js/43.9af48d2d.js",
    "revision": "beef04a7ad6e2280748063302d49098c"
  },
  {
    "url": "assets/js/44.507054ef.js",
    "revision": "55d9a5a474829a03e3acc9981c51fc27"
  },
  {
    "url": "assets/js/45.0b093329.js",
    "revision": "3cb61fd26317b02e41e065b22fca8133"
  },
  {
    "url": "assets/js/46.0c938353.js",
    "revision": "0b0aca177b5f175818d9911b081dd53a"
  },
  {
    "url": "assets/js/47.8f4bdbcd.js",
    "revision": "4d18971733bc7d6d6fb840fb280adbb4"
  },
  {
    "url": "assets/js/48.bc338ed5.js",
    "revision": "6cfa4bb4fc3663b8b1b79fccdc2ed953"
  },
  {
    "url": "assets/js/49.365a91e9.js",
    "revision": "04202ce1b0eeb4bde15bff4faab5bd07"
  },
  {
    "url": "assets/js/5.7393717f.js",
    "revision": "b9bdd65eec7ebbafd60813f5a07df28f"
  },
  {
    "url": "assets/js/50.57e7e2dc.js",
    "revision": "9b515f5c582686582cc560df38183bbd"
  },
  {
    "url": "assets/js/51.a2d1f02f.js",
    "revision": "9b3314a1f53b76e84e8fe82f04155d75"
  },
  {
    "url": "assets/js/52.a8706b8a.js",
    "revision": "c01083314cdb0aae2852e3ec27e9ec75"
  },
  {
    "url": "assets/js/53.b342f8e6.js",
    "revision": "a9a30e94f8c60c27349946d8203d7d09"
  },
  {
    "url": "assets/js/54.a3dc1a62.js",
    "revision": "d44dac5aeb3f5dee6f83f0111b1a066c"
  },
  {
    "url": "assets/js/55.05377f4b.js",
    "revision": "43c62a3517a32f23bf768632dc3c517d"
  },
  {
    "url": "assets/js/56.8a3b75fc.js",
    "revision": "1e2d9d62a2ca6cb0bac69cab1157c1b8"
  },
  {
    "url": "assets/js/57.a9fdc986.js",
    "revision": "e6c1eec3f7522ecf43319d6921db2e53"
  },
  {
    "url": "assets/js/58.efd6c8fc.js",
    "revision": "06dc11461accc85ca2b3d099a445656f"
  },
  {
    "url": "assets/js/59.d270c5a1.js",
    "revision": "655bd4dd84a5ec6653f7724cc55bead0"
  },
  {
    "url": "assets/js/6.1a32a618.js",
    "revision": "4da5296901a1c71318c70f02f5af3ee9"
  },
  {
    "url": "assets/js/60.84f99eef.js",
    "revision": "6d08b0691642bad0fdd3d083491a22b8"
  },
  {
    "url": "assets/js/61.986dfa59.js",
    "revision": "26eeb9c72abad6096a4f8904fca72fca"
  },
  {
    "url": "assets/js/62.c51b1cad.js",
    "revision": "00b4130049ffc525246dd053ba199ffb"
  },
  {
    "url": "assets/js/63.683ef85e.js",
    "revision": "effe8ec83616a32a006e23daf4e5f9ef"
  },
  {
    "url": "assets/js/64.d6162f0c.js",
    "revision": "09a9914c52c52e085b48b30b5f4cf3ba"
  },
  {
    "url": "assets/js/65.0226cd1f.js",
    "revision": "70623da324b5a33fb3e14167699e1c1b"
  },
  {
    "url": "assets/js/66.6eb98785.js",
    "revision": "c5838661e78331a40b98543d871e3f05"
  },
  {
    "url": "assets/js/67.db8057ca.js",
    "revision": "4b1e1387bd4670c0ef55f19b445a4fdb"
  },
  {
    "url": "assets/js/68.e243e297.js",
    "revision": "2b1c836c5bb4accbea72bc321132a997"
  },
  {
    "url": "assets/js/69.36332381.js",
    "revision": "b08591a88ef8a54f8594cb49be6c1c93"
  },
  {
    "url": "assets/js/7.528b3846.js",
    "revision": "2efee491a1c17445d08adaf59072f4eb"
  },
  {
    "url": "assets/js/70.6fb201b3.js",
    "revision": "d1d50c4bea9c2cab7ad7d084d0a6d15c"
  },
  {
    "url": "assets/js/71.02b97835.js",
    "revision": "921cb1530ba3d3a6aad99f881b8d0162"
  },
  {
    "url": "assets/js/72.b4650081.js",
    "revision": "9b439e0281d914e8bbabe89fbf43e3ac"
  },
  {
    "url": "assets/js/73.72d20726.js",
    "revision": "4e599e4b01be3b2031aa0ecfc36f7076"
  },
  {
    "url": "assets/js/74.ebe45b21.js",
    "revision": "c513e25b6afedb1b1660653410c5d4a6"
  },
  {
    "url": "assets/js/75.0e4396f9.js",
    "revision": "c417a03d93dfa34a6aeb84eb1d8c92f1"
  },
  {
    "url": "assets/js/76.294f1e51.js",
    "revision": "41eb61ee9ad781762230a0ac56489312"
  },
  {
    "url": "assets/js/77.c7209455.js",
    "revision": "523800e657994ce171e5007104554836"
  },
  {
    "url": "assets/js/78.716c6af7.js",
    "revision": "f944f767fd42f3eced15ec8d93b337a9"
  },
  {
    "url": "assets/js/79.6b369b3a.js",
    "revision": "8e3b62787f5e92717c8932bc5d117dfe"
  },
  {
    "url": "assets/js/8.f156336b.js",
    "revision": "f4f613472f8f98f3e72aa6bec71a90ed"
  },
  {
    "url": "assets/js/80.c47dabf9.js",
    "revision": "197ff1a1342302e970c9025fbba69a67"
  },
  {
    "url": "assets/js/81.158f7fb0.js",
    "revision": "bd9298c4c0df78d545ab05b55a828723"
  },
  {
    "url": "assets/js/82.e7321c33.js",
    "revision": "80e56134670c462961112877a67c0cfc"
  },
  {
    "url": "assets/js/83.d26f7ced.js",
    "revision": "f0acb61ce0e9c57ab242d7a171fb8cce"
  },
  {
    "url": "assets/js/84.bd009151.js",
    "revision": "d972b7e5c5f76622daeb31749ad6a65d"
  },
  {
    "url": "assets/js/85.b2b7cfd0.js",
    "revision": "b6560ea93a93b2139cc5ebabfeb7bf3d"
  },
  {
    "url": "assets/js/86.56aa217f.js",
    "revision": "76e3d9f076ded55948dd9caebc6831bc"
  },
  {
    "url": "assets/js/87.02751c36.js",
    "revision": "7c1720940c743ae8cc893b736c91fbdc"
  },
  {
    "url": "assets/js/88.53ba774f.js",
    "revision": "a4ebc12caca5ca2f278a559250893e6a"
  },
  {
    "url": "assets/js/89.7702ffca.js",
    "revision": "a32dfe87406d34373455d32c8f393e82"
  },
  {
    "url": "assets/js/9.e59ff465.js",
    "revision": "ae096dba42e17281a17b24c5a3f747b7"
  },
  {
    "url": "assets/js/90.eb6bb41c.js",
    "revision": "4aab2460367bc56a90a3300ad2b8840d"
  },
  {
    "url": "assets/js/91.67f8cab3.js",
    "revision": "0cead54de724b34477af6cb5fab43e47"
  },
  {
    "url": "assets/js/92.3f198cb0.js",
    "revision": "c9cb8a35eddfb59b8aa655bc79f486fe"
  },
  {
    "url": "assets/js/93.e333bb4d.js",
    "revision": "4b8dc708e73115608571da44d531b3fd"
  },
  {
    "url": "assets/js/94.475fa22e.js",
    "revision": "3e3ebd34729a29cc8cedbb55e135db4c"
  },
  {
    "url": "assets/js/95.59966c20.js",
    "revision": "bffc89049487831a6941737d515faca5"
  },
  {
    "url": "assets/js/96.04763766.js",
    "revision": "67c614e4c21108b2bc00eddf1af6b8cb"
  },
  {
    "url": "assets/js/97.322c2914.js",
    "revision": "23d85827e668cd2cfa85a2ee2c66f29a"
  },
  {
    "url": "assets/js/98.22a7e7b0.js",
    "revision": "d3fae83ade9bb54b3933342a5854f9b4"
  },
  {
    "url": "assets/js/99.41eaef64.js",
    "revision": "7d92eed7cbbd0b1d0e54013175895937"
  },
  {
    "url": "assets/js/app.87565d56.js",
    "revision": "0599832e0e2bf3b60f4f9411e646d449"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "9451db8098ac44fe83a96952f1632dac"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "14c45c6848181938d5b41348f9fa2665"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "c53e28235b58aa313cdca61065e9ac29"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "c4a301a1bb13af2c8d1a6a84651ec370"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "bbb8dc8f366fe8d663317194903639b6"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "d10609d0369cca5a59969194cc7c95d2"
  },
  {
    "url": "composable/date/now.html",
    "revision": "05245979891a1be072e86d9c3655239c"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "1b246660a1f5203d95e8f188e1c54a7d"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "58e1267ea2e3b2913443b89c0426ddec"
  },
  {
    "url": "composable/event/event.html",
    "revision": "f2f2f13def1fdebcce9f8e9079f3b189"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "a2403a7c388b822a8ce82a074ad03b11"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "8c15b7d22a1fa26c7bd9c917c0f39e31"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "fa07bf516751b06ac1e541e8d062b896"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "252336d6e63354dac2d299e02e941dd6"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "e6e8af2395d1bc761e5d4f3f2b528415"
  },
  {
    "url": "composable/external/cookie.html",
    "revision": "76913707196de335906631d2b39f7a5f"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "3722d9c112b60eb1ca10351488a126d2"
  },
  {
    "url": "composable/format/format.html",
    "revision": "5937f7c8fc860fedb9e36cf439d7fbb2"
  },
  {
    "url": "composable/format/path.html",
    "revision": "87078049432ae7fa31f3b6b21698d1d5"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "5ef3655c7530eae27010e6084e8becf7"
  },
  {
    "url": "composable/index.html",
    "revision": "fddbb3a7f1bd6d0434795de9c36fb69b"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "2049e998141952139af941fa71264151"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "aed37e88f3fdda186d17bed6bc82f95b"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "ebcac1eeef9e73fc06df4e6eff65a942"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "707e0cb25c783fe6ccbaa0fa13fbdbdd"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "b5cf3a614a00327bef2777cabfe9ea10"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "550850aded926a202fc081bc95dcad0d"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "40dd9cce8c756dbd36245090bd97fe90"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "d13ef27a83ee17217365f5aaa232c08d"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "41d7985896a9e934072d9183c31faeeb"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "98e9307ee1c353a82048b87abde54fff"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "39cf2abd5d3ec96bc6da45f3a72bef01"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "30b1f2cae43005016e508788c27da01c"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "67ede0542348e20bda49884256293efa"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "5d69472b789bc01b5ff90a4bdb1264a0"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "1d9fb977f9cf71ba5fa78f51b3d5895f"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "62805b9f5995f2a0310910e686e69d1b"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "a3ef3e53a3e4bbef6708037830af903d"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "1bec9c9b59877d6853066084230dfd59"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "4445775d510c5d94ea8cab95ef761a71"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "732126d2148b9a5242e75bed0c7b2a80"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "989a7d46b77f7ac312f86884a36d921b"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "827ff55712ddf27f6c288925ce5aa52b"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "1f2bb5cc701f6e0bd79f803fcdda88e3"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "5fad6e5207a88848a0972ec86ad383f9"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "7a2a7b8a92ed77a5d1eb65495c9567b7"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "d90e012aede890dd3df316a6bd9ab977"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "1f53c48db3167aa660283e0bc5d4faa7"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "3ee0669a3d49c4348f6acb3c7dce50fa"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "8ac202a44fb1f89d85399a44d4bfe7fd"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "c6cfe516d51b9d372072ab37539dafd1"
  },
  {
    "url": "composable/web/language.html",
    "revision": "ac74ab632e8422457ff574cc720eb8a2"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "9210d6245e4110bcf6736448f9b3e0e3"
  },
  {
    "url": "composable/web/online.html",
    "revision": "f4adaad0c9552977e574dd59f3aa97b3"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "50ed7034c2152f92848d076a9a71baec"
  },
  {
    "url": "composable/web/share.html",
    "revision": "1c61e3f6c23bba718ac3e4ba1fb5af92"
  },
  {
    "url": "composable/web/timeout.html",
    "revision": "29785acd90b8c2368c4bd6f3dc81cebe"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "69f8ef651e82bef147cb2f7c4c0d1e1b"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "17fa204d78eca7b11e35ed169f2ba4c7"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "d4c67e4a005906281c396699536b94b8"
  },
  {
    "url": "Examples/index.html",
    "revision": "9ee8835688f25dba79006f479c1f4478"
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
    "revision": "c5a8506c58bc4f1ca1637ea368bee018"
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
