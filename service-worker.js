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
    "revision": "ab31ac12d80fdae56513033641080efc"
  },
  {
    "url": "api/axios.api.html",
    "revision": "7426c6091e86f300c372045bdea724e0"
  },
  {
    "url": "api/cookie.api.html",
    "revision": "2579dd02f73929175c822c076cff29d0"
  },
  {
    "url": "api/core.api.html",
    "revision": "ca5666af0d7c5abb5944d0e57ee2d184"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "7788764d78b1269328768f71d1ba1e03"
  },
  {
    "url": "api/web.api.html",
    "revision": "4104e7b15d4040be2ffd9f128338fa8f"
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
    "url": "assets/js/1.5e473ea4.js",
    "revision": "ec0fb62a3c352ef6538f0072d5314cdb"
  },
  {
    "url": "assets/js/10.40a3154b.js",
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
    "url": "assets/js/109.ba4413fb.js",
    "revision": "a39a4db83ad499447cbb7eb8b7b22074"
  },
  {
    "url": "assets/js/11.2d570db7.js",
    "revision": "6772f7dc0ae0197ad28868b40ce8306a"
  },
  {
    "url": "assets/js/110.cfb5d28f.js",
    "revision": "53bc0ecf8557e9eec0ecaa04244c4d35"
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
    "url": "assets/js/15.78e8b956.js",
    "revision": "c2230edcfea87dd06086bc32b075c409"
  },
  {
    "url": "assets/js/16.f12378dc.js",
    "revision": "a82066295d908aa6d6937cc5cb2079bb"
  },
  {
    "url": "assets/js/17.70f5a03a.js",
    "revision": "8874273888771cf925868ec35917e0cc"
  },
  {
    "url": "assets/js/18.b1b63b08.js",
    "revision": "9a2d0cd34e0fe3bf2a9f36253a8a89f8"
  },
  {
    "url": "assets/js/19.84017b44.js",
    "revision": "9475f13269e3f59db90462474eea70c6"
  },
  {
    "url": "assets/js/20.aa4af145.js",
    "revision": "9d66c0d65477d439655852e7de56c878"
  },
  {
    "url": "assets/js/21.0584153a.js",
    "revision": "daca03d50d86f5676f254c1a0a465ace"
  },
  {
    "url": "assets/js/22.c3a67a9e.js",
    "revision": "6869f628f3db5bd8478e249b427174c0"
  },
  {
    "url": "assets/js/23.10832bc3.js",
    "revision": "263b1635bd21a9fc79972d6679dfa528"
  },
  {
    "url": "assets/js/24.0482774b.js",
    "revision": "3e257baa8f50aae3ab9529198f2ec8e5"
  },
  {
    "url": "assets/js/25.c00adff6.js",
    "revision": "86b1d3a4d39ea2ff443af4a188552fb0"
  },
  {
    "url": "assets/js/26.c8eb8170.js",
    "revision": "78d831f2e8ea18b6285c9ea54a4f399c"
  },
  {
    "url": "assets/js/27.29f00674.js",
    "revision": "1e7aeb7d6a379bc9d0c0d629879ef6e6"
  },
  {
    "url": "assets/js/28.196b1772.js",
    "revision": "5e47f61beb05d4e21146ea5a5909a8f3"
  },
  {
    "url": "assets/js/29.65aa1e89.js",
    "revision": "3bd4d20d60d08f3fac9d3d23e239723b"
  },
  {
    "url": "assets/js/30.35f3d318.js",
    "revision": "030703aa591f2905d86b8281032e7454"
  },
  {
    "url": "assets/js/31.502a9e3a.js",
    "revision": "5311c92a851cfa497ad3996162280478"
  },
  {
    "url": "assets/js/32.ac8f1291.js",
    "revision": "206c7dc6a62224a5f8ccaa0d5241404b"
  },
  {
    "url": "assets/js/33.3b00bc25.js",
    "revision": "a213127fd3ffdd2b51df925038219467"
  },
  {
    "url": "assets/js/34.12454933.js",
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
    "url": "assets/js/37.a89ebb73.js",
    "revision": "a65446d1b927e94b67d33d6871c207ef"
  },
  {
    "url": "assets/js/38.b2930f46.js",
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
    "url": "assets/js/40.a27e748e.js",
    "revision": "d2f26cfe7fa2ad15a843a60da14d272a"
  },
  {
    "url": "assets/js/41.7b850c99.js",
    "revision": "46f8c5e22ad371d6f028c0e00d512908"
  },
  {
    "url": "assets/js/42.cad286f5.js",
    "revision": "ab7186abab9cc516e674e5e0a415d03a"
  },
  {
    "url": "assets/js/43.c299f386.js",
    "revision": "beef04a7ad6e2280748063302d49098c"
  },
  {
    "url": "assets/js/44.507054ef.js",
    "revision": "55d9a5a474829a03e3acc9981c51fc27"
  },
  {
    "url": "assets/js/45.61b38c78.js",
    "revision": "3cb61fd26317b02e41e065b22fca8133"
  },
  {
    "url": "assets/js/46.0c938353.js",
    "revision": "0b0aca177b5f175818d9911b081dd53a"
  },
  {
    "url": "assets/js/47.eb117f75.js",
    "revision": "4d18971733bc7d6d6fb840fb280adbb4"
  },
  {
    "url": "assets/js/48.ea8c573a.js",
    "revision": "6cfa4bb4fc3663b8b1b79fccdc2ed953"
  },
  {
    "url": "assets/js/49.b0c64e01.js",
    "revision": "04202ce1b0eeb4bde15bff4faab5bd07"
  },
  {
    "url": "assets/js/5.7393717f.js",
    "revision": "b9bdd65eec7ebbafd60813f5a07df28f"
  },
  {
    "url": "assets/js/50.29a94b5e.js",
    "revision": "9b515f5c582686582cc560df38183bbd"
  },
  {
    "url": "assets/js/51.a2d1f02f.js",
    "revision": "9b3314a1f53b76e84e8fe82f04155d75"
  },
  {
    "url": "assets/js/52.b56635e3.js",
    "revision": "c01083314cdb0aae2852e3ec27e9ec75"
  },
  {
    "url": "assets/js/53.d62e7a34.js",
    "revision": "a9a30e94f8c60c27349946d8203d7d09"
  },
  {
    "url": "assets/js/54.e6023b3c.js",
    "revision": "d44dac5aeb3f5dee6f83f0111b1a066c"
  },
  {
    "url": "assets/js/55.05377f4b.js",
    "revision": "43c62a3517a32f23bf768632dc3c517d"
  },
  {
    "url": "assets/js/56.7429b4d5.js",
    "revision": "1e2d9d62a2ca6cb0bac69cab1157c1b8"
  },
  {
    "url": "assets/js/57.a9fdc986.js",
    "revision": "e6c1eec3f7522ecf43319d6921db2e53"
  },
  {
    "url": "assets/js/58.bd708802.js",
    "revision": "06dc11461accc85ca2b3d099a445656f"
  },
  {
    "url": "assets/js/59.f4d08474.js",
    "revision": "655bd4dd84a5ec6653f7724cc55bead0"
  },
  {
    "url": "assets/js/6.1a32a618.js",
    "revision": "4da5296901a1c71318c70f02f5af3ee9"
  },
  {
    "url": "assets/js/60.3050c28a.js",
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
    "url": "assets/js/67.c67d3e9d.js",
    "revision": "9e308cb11ce6633f4149a72872d1901a"
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
    "url": "assets/js/7.1b458ced.js",
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
    "url": "assets/js/8.5d3adbeb.js",
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
    "url": "assets/js/82.1fce6f4c.js",
    "revision": "48da7eb4f354d94baa0ce16c409cb378"
  },
  {
    "url": "assets/js/83.8069b142.js",
    "revision": "62af89885a84574c493ee47cce2ab950"
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
    "url": "assets/js/9.f75b4b51.js",
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
    "url": "assets/js/app.c42620c5.js",
    "revision": "2b5d19df3105fb5d6c583eb73084975f"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "91f8dbd37404550fb56855a81dbdba5b"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "a2474b66195e7f82d5c2fb29aabd83b3"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "203c6b28a3ebbc7a1ac52657f4582d21"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "8850143980ad7279fc3b0a475cd34765"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "be31f2a17b79909e9d50ea54312c2654"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "f0eb94d694cd2183f74e013362d94ec0"
  },
  {
    "url": "composable/date/now.html",
    "revision": "0bb14b49ee465d8d1b5764fdd347f77c"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "e98baf1ad04823f205139776ea2ff7b0"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "9d6f808602af3828eb0ce8e67918c2a7"
  },
  {
    "url": "composable/event/event.html",
    "revision": "819bcdabfcabee0556bf3cf5dff5abdc"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "61b631089400b03173273164e4ebd384"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "7f40af022af637e1d4caeb327b78c849"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "2b2ba07cd1edf8cc67bb3ec0bc74fd6c"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "f0042ece89f49a0cfe2ec83134c427f9"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "6a05a30b8fa5b7c9413f3d6ce03bc089"
  },
  {
    "url": "composable/external/cookie.html",
    "revision": "7866789154856cc459ae478d988c7797"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "c956f151a3e95c15541ce9765394b33d"
  },
  {
    "url": "composable/format/format.html",
    "revision": "6351d5911176b61c63a96a2cec820beb"
  },
  {
    "url": "composable/format/path.html",
    "revision": "fe696a9e7de73d291bb7f2f3624bc89a"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "6b273c072ff66b126cc4235f1273ef2e"
  },
  {
    "url": "composable/index.html",
    "revision": "641d2a48c280fd3e5ddbe868f63bc291"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "1987a971481b9887c3d331d220646607"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "9bd46a756a2ec9c279b672a53eabd8f9"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "5537902d9f6a5d3f658606f941c3e5a5"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "1c136b92cf2279b94f8610f1916a8c26"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "cc8b2e7353482aacf4c5cc4b55a9f214"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "92cc6ef373e281da0601baa6b3165d1f"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "0c8f5fa2a02ca9ed52ce922c40c472b8"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "9fe2613873ccd0c229dcb249bd977fc3"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "b990dde466b4a54fd66fa2640cac7d0d"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "ea675f1c6e2104c49f18bd318d2f3be9"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "2b71a63c061db4807a1406f348dd7513"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "c82187cc7900033ac6da773a8c08d52f"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "181ace692fd06e94390c82f8f0cc131b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fbe24e6357d0a59d72b367846806215f"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "981e843a06ebadc84d9149012fac4b11"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "652c5f3bb19b1d5c04904021b0cf37f7"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "632c0dc1d9897ee42da9c7133c158733"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "971d5a65f8760d9f0e9b083428babbcd"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "34be52f759afa3c3f740e45f4fcf743b"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "37be9d4e0ba4c5aaa0928b6cebb4fbf0"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "89849e5e0f90cf14b26acf14e10e36a7"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "b612cff049cd2c4fc5300cbf0578b60d"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "6ac1d656557b638d282a82d406d3b007"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "369a2ede89d4a316ce37c2b8cd042b39"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "46552db36203948a5a92d5b50b1a872b"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "0ccdd9277fd14d38492e14f776b7c3b9"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "408786457009db836d4106b78c61a7b9"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "1a626850161d66ed4e28aeafe8571a42"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "4236e186bd011135ee86317b57983c13"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "edec0a8488097f7af2e0fcc14431c6a4"
  },
  {
    "url": "composable/web/language.html",
    "revision": "77b98c5923b8706b980c2a564b61692d"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "c407da67bbb7f48cd37c78c44051726b"
  },
  {
    "url": "composable/web/online.html",
    "revision": "95a7bb15685a4c315d00f4107ff5cacc"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "bd99c590e360a7130a1abb266d601177"
  },
  {
    "url": "composable/web/share.html",
    "revision": "0270706c6db8c376669e163fba10593c"
  },
  {
    "url": "composable/web/timeout.html",
    "revision": "6daaed9b8c76ab732a89b6f1b5d55790"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "fa5b0bc35754628178b633ff084c24cc"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "d4b6783864a2b8e5899aefff7cf77df0"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "0d10c0d9fc0b5112967cfa1747b7ab39"
  },
  {
    "url": "Examples/index.html",
    "revision": "7f5306435c3256cf7d740f870b94ec21"
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
    "revision": "b73234e4e0244adadfc79ce2b9b21029"
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
