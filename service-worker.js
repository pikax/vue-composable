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
    "revision": "b43b2fd9a7c940222bc412636e3dc317"
  },
  {
    "url": "api/axios.api.html",
    "revision": "a092e95114ded964749fcfc2887dd830"
  },
  {
    "url": "api/cookie.api.html",
    "revision": "e354949a4bb430ff3dbf5d7b5918aa1f"
  },
  {
    "url": "api/core.api.html",
    "revision": "80739f6bf35b7a526d62f4cbe654677d"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "6f697c5da713746fc53db275f69fc00e"
  },
  {
    "url": "api/web.api.html",
    "revision": "1b79e7d3184b634765a27c3d43fdde9e"
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
    "url": "assets/js/1.19fc9567.js",
    "revision": "321116a75d201fe03d2603ac55ab3381"
  },
  {
    "url": "assets/js/10.07e73c1d.js",
    "revision": "1c30818a39c4b1a380bdba44cd232c46"
  },
  {
    "url": "assets/js/100.5ca3c98e.js",
    "revision": "224ec43b0f70c5593193be0ec4968552"
  },
  {
    "url": "assets/js/101.49fcc888.js",
    "revision": "cd745616e6d9fd6d7450c298a2cfd582"
  },
  {
    "url": "assets/js/102.eb6caa21.js",
    "revision": "a968007ff8989c8b0834b6c0074c794c"
  },
  {
    "url": "assets/js/103.d9eb7aa1.js",
    "revision": "b4e277c1d75c85c019eb13eff91fca9e"
  },
  {
    "url": "assets/js/104.1d4305d6.js",
    "revision": "e8a7f7f6d6dfae026a6fa363af5bc9b3"
  },
  {
    "url": "assets/js/105.d4569033.js",
    "revision": "3973141f61e1a68a136b25654384f418"
  },
  {
    "url": "assets/js/106.ff9b9f1d.js",
    "revision": "91362d40ccfb95a8c5e85435993daf7d"
  },
  {
    "url": "assets/js/107.64c52d0b.js",
    "revision": "ae90431c61f8cd8000c96c2604476410"
  },
  {
    "url": "assets/js/108.3e54ae87.js",
    "revision": "2fed72b51f5baecb7bdc27f617266f48"
  },
  {
    "url": "assets/js/109.c2f6372a.js",
    "revision": "739072ac63ec7c9df044c9c478327e33"
  },
  {
    "url": "assets/js/11.2d570db7.js",
    "revision": "6772f7dc0ae0197ad28868b40ce8306a"
  },
  {
    "url": "assets/js/110.4e6dccf5.js",
    "revision": "b9c7096c68d506050e8766bdff270cdf"
  },
  {
    "url": "assets/js/111.6a8c3422.js",
    "revision": "856fe20d07e89d1f55d0a0adab2a20a0"
  },
  {
    "url": "assets/js/112.7f0cc2dd.js",
    "revision": "e2f4596ab01d2df75fb411a2811aed2e"
  },
  {
    "url": "assets/js/113.96cad246.js",
    "revision": "8f26748fc01deab1925956b38661e687"
  },
  {
    "url": "assets/js/114.ae9eadd7.js",
    "revision": "7ce31b7fdba41fe5f5b5fb5ee85d2068"
  },
  {
    "url": "assets/js/115.5fcf1d4e.js",
    "revision": "a5e45ebb9d445e37be1831b7862858ed"
  },
  {
    "url": "assets/js/116.a90232b1.js",
    "revision": "fdb0b3978b80d1e4103744046e233486"
  },
  {
    "url": "assets/js/117.4d52ba00.js",
    "revision": "dd24b90c112d443077f7d45f471d38ae"
  },
  {
    "url": "assets/js/118.24dad38f.js",
    "revision": "1f0bffe55efe310b901bd2f4ac661bd5"
  },
  {
    "url": "assets/js/119.c30b7cf8.js",
    "revision": "35953c5d4c5b8ae1153cb438cbd6f8a1"
  },
  {
    "url": "assets/js/12.57d9a8d5.js",
    "revision": "58d4e78ac3b61fb35a0b64b68f343fe8"
  },
  {
    "url": "assets/js/120.92f693ef.js",
    "revision": "08efe430cb229302305dd5173800ff4a"
  },
  {
    "url": "assets/js/121.b44d16b3.js",
    "revision": "19b6325e0023b665310d59738db0dfe1"
  },
  {
    "url": "assets/js/122.1abaed19.js",
    "revision": "27702a1199157f98d5d32ae8202fcadd"
  },
  {
    "url": "assets/js/123.3750f8c6.js",
    "revision": "d905a3bfbfbe39c87c365f404406a5ec"
  },
  {
    "url": "assets/js/124.4787d571.js",
    "revision": "f7ea26a9646eb318f3c1a42b3e258310"
  },
  {
    "url": "assets/js/125.0bf6bf49.js",
    "revision": "b8d2f35c42ce98ab7b6d25f413660971"
  },
  {
    "url": "assets/js/126.a7556232.js",
    "revision": "6e4ac6e9a096858bad07a1cba83e6587"
  },
  {
    "url": "assets/js/127.7f7074f7.js",
    "revision": "be88c27915e1e3b5ccacb77be194a2a0"
  },
  {
    "url": "assets/js/128.4b10478d.js",
    "revision": "79e4d041fb9d0a64e67ec8933b99ddf8"
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
    "url": "assets/js/67.4f22d1fb.js",
    "revision": "fbf173cf78dcd15bfaf9445a7a0df671"
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
    "url": "assets/js/77.d8705461.js",
    "revision": "f3838338fe6d2993bd6fb2b352e252ae"
  },
  {
    "url": "assets/js/78.215ebab5.js",
    "revision": "18564b54d066e5afa329f78b671ed7a1"
  },
  {
    "url": "assets/js/79.f03bcfdd.js",
    "revision": "2cb8333465bd0700e7fe7c1f558566d6"
  },
  {
    "url": "assets/js/8.f156336b.js",
    "revision": "f4f613472f8f98f3e72aa6bec71a90ed"
  },
  {
    "url": "assets/js/80.7758ef26.js",
    "revision": "4dcca38a50912200715536c37228a7c0"
  },
  {
    "url": "assets/js/81.9790b78a.js",
    "revision": "6dee7a6b3671077c445ddabe81c190a9"
  },
  {
    "url": "assets/js/82.952a120e.js",
    "revision": "a6a45e33e25db477a32368e970b4dcf6"
  },
  {
    "url": "assets/js/83.d0b3ee7f.js",
    "revision": "668d6b5315cdb8872eb31a8111670a0f"
  },
  {
    "url": "assets/js/84.287fce14.js",
    "revision": "ead92a2ed3e83177164c56e787d200ec"
  },
  {
    "url": "assets/js/85.f89cbc7c.js",
    "revision": "000fb17db29dc8898f995ae17c8c96ac"
  },
  {
    "url": "assets/js/86.38de4cd4.js",
    "revision": "269f7a38fe9a46e9372fd8316f26dce8"
  },
  {
    "url": "assets/js/87.02308cd6.js",
    "revision": "80ac801629403c177068ea6881179a52"
  },
  {
    "url": "assets/js/88.390a9a66.js",
    "revision": "595642b35fd831967e3e0ffc77239d5e"
  },
  {
    "url": "assets/js/89.0e8826ca.js",
    "revision": "2e2e23fed870efac33027340cfc969c2"
  },
  {
    "url": "assets/js/9.e59ff465.js",
    "revision": "ae096dba42e17281a17b24c5a3f747b7"
  },
  {
    "url": "assets/js/90.cffb98cd.js",
    "revision": "5a7c72e40c17786eaa1974f6eedbc21b"
  },
  {
    "url": "assets/js/91.6953c986.js",
    "revision": "2624ec0af28ddf9eafa0000608dff0f9"
  },
  {
    "url": "assets/js/92.90327165.js",
    "revision": "4b85b212c4fff4dbdb5d601e8601957b"
  },
  {
    "url": "assets/js/93.5884cf2a.js",
    "revision": "e9f9acbee7ec3a53749c8758d876f928"
  },
  {
    "url": "assets/js/94.da6c511c.js",
    "revision": "0b60cc7ff532e1cab7e1c533661e5a6e"
  },
  {
    "url": "assets/js/95.103b9fef.js",
    "revision": "1cc8ff374376cbb4d133fb0c81e5c5e2"
  },
  {
    "url": "assets/js/96.4e414aae.js",
    "revision": "51b4944fc2bfdf257a1b9cdb6de89a07"
  },
  {
    "url": "assets/js/97.012e9f98.js",
    "revision": "1bf1271a39c4554d4a316756a450aa5d"
  },
  {
    "url": "assets/js/98.b416280c.js",
    "revision": "3ca2b8853b047c2aa5977ebd20040b9c"
  },
  {
    "url": "assets/js/99.43c2c6b2.js",
    "revision": "5f19e3188a4f7636e909ce16146c7617"
  },
  {
    "url": "assets/js/app.6d6875b6.js",
    "revision": "a7165c1e6d2b3a640307eb4b772f6b3c"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "daf7f669b8d7c3c1ae85209241310860"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "4acbac3da22c56fc435f23addb8e184f"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "59770ed9207651aa661691880ddc2190"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "ed6d0ebd966cb1f9e4632fab1023c0f8"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "efb7b2f1c427008e8dd82809502cda97"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "f04fbaab7a930892cf61a9374c5482e0"
  },
  {
    "url": "composable/date/now.html",
    "revision": "9fb2d58fef546df39463b85c4cea035a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "7d783adc165f89f5befe8e3308d0c8af"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "ae28a78aaff9c8b5bf1cce14799333be"
  },
  {
    "url": "composable/event/event.html",
    "revision": "e196b110c92357912b314a823ab9bed5"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "e067f401623dae8e2c5d9b2193d28c08"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "633bf859c4995344a72e048d335f5fa6"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ce9d95f6e1f941a71ef9eb6af805e0ea"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "6405ffc61de1600e6622d917c5c93673"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "2c34cadf383603358423fe0e769bceee"
  },
  {
    "url": "composable/external/cookie.html",
    "revision": "7e9e1a2bcee1d00e347d858ab67d6ca6"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "f40cf3772ddc34b45a461c580f148b6d"
  },
  {
    "url": "composable/format/format.html",
    "revision": "aa0a474a4b8c7678c52b1ea735a3f4b9"
  },
  {
    "url": "composable/format/path.html",
    "revision": "f411ac4675a0ccaf17148730a6c26c1b"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "e132e54d9a6507f7c23083a2860d966d"
  },
  {
    "url": "composable/index.html",
    "revision": "2794079819b323ffccf10350c5e1ae2a"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "f34b297ec7b5542438b438d26fe0a39f"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "09518c326fcdbf32e019218cb2e48429"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "fc1e97d1b44b565ea5afbe99dee4deb7"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "ee5e0bcc90bfe1fc382ec0935b95206f"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "ea397b40f30c0ba7a8314ebdee0913a4"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "8ca10cd89bfdcd0b042447093abde01a"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "9e4620af54d03a537d41cdd9a5015d92"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "ea3fb8944f3829821a8034b561531512"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "2d5ed57aed2eeeb1163b8790375f1362"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "319dfbd492d94dafd899d84aee71c451"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "0b074b2eb180d205fe99aa302ca2acc3"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "fffc03b5d10cc2797ef0d156cb881474"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "0525adb506ee9f798e4094dd96fd77d4"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "b5f8f5f4ad7c4184e270b4ae1d9ac5c9"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "588401579c6e9dbc9d1769066b39b626"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "36e727b4456323ea664e67b93b5b3775"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "d5c67132b0b02702b05d733bb0147ba2"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "70899a9b63b7331e49450435f5459e9f"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "e5d94688391b43316dbf2d385810d3d6"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "280b64a3c827a755c8de20bae4080ef2"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "e11222e825974588fa01b3433644e52c"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "f04c671849202bb902d5b23c791e3b16"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "8704901145bbe1d45f8a940d601a6eac"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "780609602ba03941ffc6dfa61d5af882"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "24e3558cca216ab9225ae932242993fc"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "12e353d1e4b4ae512d45adbf5b81bca7"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "362e9e8ad1f1ea4b1de7ccbdd46c1812"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "8db302c367c5b7327f5e6c9133b50507"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "c0b7105e92aa759fd941f85d388fa996"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "1fb448a67c1b400b7224eb7b180c2af0"
  },
  {
    "url": "composable/web/language.html",
    "revision": "9f933dc246400774e4ca083a41ca87cf"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "1f44a94bfb52c63549fc9c32154cb6b8"
  },
  {
    "url": "composable/web/online.html",
    "revision": "41c51ec112bcb703eed3771770213956"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "e51baf76e1fa868424ae4c4face61f74"
  },
  {
    "url": "composable/web/share.html",
    "revision": "3a96f7ee85af6e390ae72cb54ea6f2af"
  },
  {
    "url": "composable/web/timeout.html",
    "revision": "51c3499d90cab7890e916387a1e7aeb2"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "5ef2e1e69d19bba17e4eba0b28768da3"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "a79b53e19407cc0faa68891a1393f655"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "8ca604a17f79e1d40a39a7705ef6365c"
  },
  {
    "url": "Examples/index.html",
    "revision": "b7241eaca16ff8d6997bc60c9a0da81d"
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
    "revision": "a2cb0a250b0370b12d0826b3e5c17d27"
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
