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
    "revision": "1e6fce84c4d13568d4ef5228d18c8793"
  },
  {
    "url": "api/axios.api.html",
    "revision": "7b7dcb437dcfab4733842322fb9a97eb"
  },
  {
    "url": "api/core.api.html",
    "revision": "c166c6e6d77f4193b1aec14b73f2e65c"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "a3d04c549800c064e81bd9d92d1b5279"
  },
  {
    "url": "api/web.api.html",
    "revision": "2225b82d236e06e76962b220e898b940"
  },
  {
    "url": "assets/css/2.styles.fd49838a.css",
    "revision": "0264095ea6230a01f0a843bdfc1e1e7a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.41f788fc.js",
    "revision": "37139d7757a95b7b7ce017038a4ae706"
  },
  {
    "url": "assets/js/1.6f6be1c8.js",
    "revision": "5dacdd5bba827910e873f91d5bc02ac7"
  },
  {
    "url": "assets/js/10.70377aa6.js",
    "revision": "3264fc1c2828e98173dc4b9ef3528f4b"
  },
  {
    "url": "assets/js/100.8479455c.js",
    "revision": "50bd7217c306cb5b10de78977ac61508"
  },
  {
    "url": "assets/js/101.c170c604.js",
    "revision": "8f978e6339371a005e8d478263202b7a"
  },
  {
    "url": "assets/js/102.5313c0bf.js",
    "revision": "e13b4133622569af699dbc58ce54b4e7"
  },
  {
    "url": "assets/js/103.5e423532.js",
    "revision": "9a0cd16d1d6ba1bc0abb8fb9ea197a66"
  },
  {
    "url": "assets/js/104.2d2aec83.js",
    "revision": "2e3b55aefceed231c8eda79f110b3eeb"
  },
  {
    "url": "assets/js/105.42dbdc83.js",
    "revision": "f8932da11d81f0aa07aa88fddaa40cca"
  },
  {
    "url": "assets/js/106.741b82c5.js",
    "revision": "1b037a98ab5fcc5ce68af1477244b3c8"
  },
  {
    "url": "assets/js/107.6c32499d.js",
    "revision": "dbe6a4b3209ec714bc2cb51bf2f9b1c6"
  },
  {
    "url": "assets/js/108.c5e6f2a2.js",
    "revision": "1e6ecd0909f406a5d4e3df733150c8b5"
  },
  {
    "url": "assets/js/109.dbb0de60.js",
    "revision": "5d4d6c99e13deaac6141506f162da5b3"
  },
  {
    "url": "assets/js/11.5297426c.js",
    "revision": "ca5605739422fdb34f893394091f2524"
  },
  {
    "url": "assets/js/110.66263c26.js",
    "revision": "77af32a7f34715f85974f6f5dbc148e8"
  },
  {
    "url": "assets/js/111.61fc1f28.js",
    "revision": "bb450e7e11b03a9b2f31a3cfe4447498"
  },
  {
    "url": "assets/js/112.88ecfdff.js",
    "revision": "3d45038f887809cfc5331f7883e1ae69"
  },
  {
    "url": "assets/js/113.98264803.js",
    "revision": "26b0cd97f92d17372ff7dd66961fa0bf"
  },
  {
    "url": "assets/js/114.6ae68642.js",
    "revision": "f50181b0a9015274f750badad01f4786"
  },
  {
    "url": "assets/js/115.2d77c3ef.js",
    "revision": "bc5c70940b00931a5b210e8a8d6c1f53"
  },
  {
    "url": "assets/js/116.1e2cc17b.js",
    "revision": "f9a9bc4a3953e4ab30eb965edda6856b"
  },
  {
    "url": "assets/js/117.37e2c1a1.js",
    "revision": "52dd2aa485a4f48e8bb2f83604ae3423"
  },
  {
    "url": "assets/js/118.de80a401.js",
    "revision": "6d7772dc45279e49f28c300d2f75a9a8"
  },
  {
    "url": "assets/js/119.20bc49c7.js",
    "revision": "94b2d7cbc06b1a5e74be1261b67cafc9"
  },
  {
    "url": "assets/js/12.84ecd77e.js",
    "revision": "c8794b36c74d803f677460972861b9ee"
  },
  {
    "url": "assets/js/120.bdc6891b.js",
    "revision": "6900488a4dfc7bde9a98061013d776e1"
  },
  {
    "url": "assets/js/121.ddc61194.js",
    "revision": "6bdd67e4a387ded86395a5aa481bb498"
  },
  {
    "url": "assets/js/122.4856ed0c.js",
    "revision": "ccb0b46b180dc54acc2d78c8ad5d0e0a"
  },
  {
    "url": "assets/js/13.f610bc78.js",
    "revision": "8af536c47db45eeedb5712261d5f5fe0"
  },
  {
    "url": "assets/js/14.3ffe29b5.js",
    "revision": "cb0d328afbbbf9bdda7539e107e7dd24"
  },
  {
    "url": "assets/js/15.d293aac2.js",
    "revision": "c2e41cfb4bd411443af5dfe8a805a211"
  },
  {
    "url": "assets/js/16.1e89d37f.js",
    "revision": "bbe329fa1fde20977ef481e8216636cd"
  },
  {
    "url": "assets/js/17.1c9979bf.js",
    "revision": "b07b6f47d4ea0aa5b61e33fcb37422d8"
  },
  {
    "url": "assets/js/18.07f60d7a.js",
    "revision": "f05950d7c9b3c23bdd93b5784c0928cc"
  },
  {
    "url": "assets/js/19.bb45fee4.js",
    "revision": "af98a19ae50dfa7c7853c9a250480177"
  },
  {
    "url": "assets/js/20.f1c9ab18.js",
    "revision": "76598717270ed601a24ecf496dff2d60"
  },
  {
    "url": "assets/js/21.e4ac072e.js",
    "revision": "a9eb62a6c64c7c8f941eb9c9a527751a"
  },
  {
    "url": "assets/js/22.fe0c215d.js",
    "revision": "51f6675070938c62da4c53ea653546b4"
  },
  {
    "url": "assets/js/23.78b28f64.js",
    "revision": "0cdf08de43d6d509f3d157b1889b1b53"
  },
  {
    "url": "assets/js/24.86d8e602.js",
    "revision": "a41d269c544be2b7cf5b729242e4d516"
  },
  {
    "url": "assets/js/25.e48e476e.js",
    "revision": "9177fd980b1040f3aff41f3ecc8f20ba"
  },
  {
    "url": "assets/js/26.957eb90e.js",
    "revision": "9ef32f19234d9b2beefda5ced4f75ffb"
  },
  {
    "url": "assets/js/27.ed175cdf.js",
    "revision": "4818b0f450a1c80b41f38e3f540d24a8"
  },
  {
    "url": "assets/js/28.6b8e27e5.js",
    "revision": "2566b918f3eacef162cae25b73e3e8b6"
  },
  {
    "url": "assets/js/29.4e70db25.js",
    "revision": "7822bb668cee33d0b9ff086bb01d66b7"
  },
  {
    "url": "assets/js/30.9a41e10c.js",
    "revision": "668cbb219cc23f08d76a98e458d25188"
  },
  {
    "url": "assets/js/31.24e2bf28.js",
    "revision": "60a2c5bebefff934a5dff986c4164e50"
  },
  {
    "url": "assets/js/32.c9f48806.js",
    "revision": "add6564222acc00753525d479f44c26b"
  },
  {
    "url": "assets/js/33.6d7205d5.js",
    "revision": "6ba566c89350333afb1e1ecddcd084cf"
  },
  {
    "url": "assets/js/34.7ce8608c.js",
    "revision": "6fca08e91f1022ddcbd1e2ac6024fb6a"
  },
  {
    "url": "assets/js/35.a749da52.js",
    "revision": "218e40d87fb9a8f1b34952ecf1326d6d"
  },
  {
    "url": "assets/js/36.04c24be7.js",
    "revision": "cbadb13c8fede44b47d218b8d436fc49"
  },
  {
    "url": "assets/js/37.fc91eb86.js",
    "revision": "4fe0695a1d95e600b58b4cc80b29b8ee"
  },
  {
    "url": "assets/js/38.0b9df14d.js",
    "revision": "26f4b73156a1fa269fc979028944ab00"
  },
  {
    "url": "assets/js/39.32525d6b.js",
    "revision": "35fb8160ebb903e02bcda771692e2693"
  },
  {
    "url": "assets/js/4.c98027c0.js",
    "revision": "f6825b25ee267ea2c9f5466df784f9f6"
  },
  {
    "url": "assets/js/40.44d4d9a1.js",
    "revision": "f3c6f58efc319c52194774ca311f7477"
  },
  {
    "url": "assets/js/41.b90ee77f.js",
    "revision": "dc7eb40ff88b27554d993a69e0cbce7f"
  },
  {
    "url": "assets/js/42.43436cfd.js",
    "revision": "99bb3f87157bbb692fb4c053a77684fd"
  },
  {
    "url": "assets/js/43.efb2b362.js",
    "revision": "1e565fd114234a19a9ac8b0f520dbb57"
  },
  {
    "url": "assets/js/44.9c1a47a8.js",
    "revision": "b974cd025ea0db7b89c6124ef7c609a6"
  },
  {
    "url": "assets/js/45.b12f2653.js",
    "revision": "50447f6a3afbbca9428145408361a46e"
  },
  {
    "url": "assets/js/46.a88ceb98.js",
    "revision": "e3cf437967830755762c079e943022cc"
  },
  {
    "url": "assets/js/47.93e21d11.js",
    "revision": "d790f4c8f1c0e1742e38a4b28b526b45"
  },
  {
    "url": "assets/js/48.5086a310.js",
    "revision": "fc069e6b487605cc073cd3c109d5cb05"
  },
  {
    "url": "assets/js/49.83a27e58.js",
    "revision": "d57d93cf0e77bc1fc58498d91a9ac32e"
  },
  {
    "url": "assets/js/5.7cb078de.js",
    "revision": "3322b73572b5f9291b5867ccb6db3f9f"
  },
  {
    "url": "assets/js/50.1cc7abde.js",
    "revision": "e699ac53b9f83d98d060c5cc8617223e"
  },
  {
    "url": "assets/js/51.e3825daf.js",
    "revision": "0bcc1b4294bce4d19b50c196ba058fe7"
  },
  {
    "url": "assets/js/52.7e5763f9.js",
    "revision": "c25ee7e6234e8b966d48d869a2a9758e"
  },
  {
    "url": "assets/js/53.447fb11a.js",
    "revision": "2225e6e5ad136c79b17d476eda057bfa"
  },
  {
    "url": "assets/js/54.8fb1c950.js",
    "revision": "8e3ff17915a9316b6247635d4bbd8351"
  },
  {
    "url": "assets/js/55.3f61a9af.js",
    "revision": "3d9fd4bba51de87d6ebcbbcff6fa8db3"
  },
  {
    "url": "assets/js/56.8a6c08c8.js",
    "revision": "18a1002afb069796366773e4123aea9e"
  },
  {
    "url": "assets/js/57.9344514c.js",
    "revision": "c5d3098de470c8f194ca06ae790167d3"
  },
  {
    "url": "assets/js/58.70762e00.js",
    "revision": "d0406aff9836730832c27f46dc289c5f"
  },
  {
    "url": "assets/js/59.b78a363e.js",
    "revision": "fcb251121ae9385d5ac85a9da3b3c24d"
  },
  {
    "url": "assets/js/6.3c1b86c5.js",
    "revision": "a875540132ac123a112d4a4db791d5e1"
  },
  {
    "url": "assets/js/60.c36bac03.js",
    "revision": "fe0e153b52e389f8ef3ff233c84ea21d"
  },
  {
    "url": "assets/js/61.7edb5d19.js",
    "revision": "14576eaa1fa9e6cb90df4b70ce6ed973"
  },
  {
    "url": "assets/js/62.e62992bf.js",
    "revision": "7e6d18eafafab21d18ac1f4091b78c8b"
  },
  {
    "url": "assets/js/63.112addfc.js",
    "revision": "b7b049ccefccea0deffe8c151d64444e"
  },
  {
    "url": "assets/js/64.7ea1ac25.js",
    "revision": "e4164b63326615ab0736d01f9dd7b5ca"
  },
  {
    "url": "assets/js/65.bbf73576.js",
    "revision": "49bccd02493c4565ebca806da49d496f"
  },
  {
    "url": "assets/js/66.20baad2e.js",
    "revision": "4a48cd4319ba0bfeca7d1f48823922e9"
  },
  {
    "url": "assets/js/67.fd8c1168.js",
    "revision": "5423e34b985bbfded8fbe553eab27424"
  },
  {
    "url": "assets/js/68.a05c8541.js",
    "revision": "998d1bcd193a51c0915e7810025c919b"
  },
  {
    "url": "assets/js/69.c8dacb47.js",
    "revision": "9a9fa063f7558dc3294525cfde4fb1fd"
  },
  {
    "url": "assets/js/7.b6e7f9f5.js",
    "revision": "e2b77e343ed6bf2448da5ae928f84b99"
  },
  {
    "url": "assets/js/70.a360aaae.js",
    "revision": "dea2a58f2200a6f9f4e1d9eb1af82370"
  },
  {
    "url": "assets/js/71.e416a518.js",
    "revision": "34bba6a8eea927d6305655288f9c3ce1"
  },
  {
    "url": "assets/js/72.f4972d58.js",
    "revision": "220603ad36958ff807f0c83c6a396e86"
  },
  {
    "url": "assets/js/73.3f1a9a65.js",
    "revision": "a7628ea003a13b5f4f73870ea034a7ef"
  },
  {
    "url": "assets/js/74.ec965de2.js",
    "revision": "51e45967cf946b1db6936516042de942"
  },
  {
    "url": "assets/js/75.bda1a4ef.js",
    "revision": "d8040cc1393c41ffb7866e44b14daf7d"
  },
  {
    "url": "assets/js/76.eecea35e.js",
    "revision": "2801182c209d54c25ec44a15a166757d"
  },
  {
    "url": "assets/js/77.147b31b4.js",
    "revision": "b4a1129277d95f2407b33c81f1d5ea16"
  },
  {
    "url": "assets/js/78.7132f257.js",
    "revision": "06817bae05ea5d353b1f7ca68e15231c"
  },
  {
    "url": "assets/js/79.354b8d62.js",
    "revision": "28b8180103a69b50cb5fa1b78c3bed20"
  },
  {
    "url": "assets/js/8.c97c1bda.js",
    "revision": "f4a3fd517a4f4f6238363ab3cd2ade7c"
  },
  {
    "url": "assets/js/80.f222e22a.js",
    "revision": "0bcf0a6efbaef1cc4b6d7e0936c5666d"
  },
  {
    "url": "assets/js/81.31de343c.js",
    "revision": "75b099c9fa0c4c62bcd9c1079101303f"
  },
  {
    "url": "assets/js/82.1812e37a.js",
    "revision": "c0bb33bae084a7feb9a0bf224bc87cb2"
  },
  {
    "url": "assets/js/83.f8b8dcc0.js",
    "revision": "891f571d211dbb66bc1d3d405bf932f7"
  },
  {
    "url": "assets/js/84.433620af.js",
    "revision": "84647c9cc4837fda6c95ef487a3b1b80"
  },
  {
    "url": "assets/js/85.8f60ffb5.js",
    "revision": "2098fb38554d882cec0921cddaec87f1"
  },
  {
    "url": "assets/js/86.63c86198.js",
    "revision": "2f26fb11357e03f583c0a1178404a690"
  },
  {
    "url": "assets/js/87.3734cbd1.js",
    "revision": "6b67125ad9e91a50634dc05a1f12d4fa"
  },
  {
    "url": "assets/js/88.c132a82b.js",
    "revision": "87400c03a9a6fc38a3ac475eb99f0262"
  },
  {
    "url": "assets/js/89.9523b42c.js",
    "revision": "ef4c6ac90b154bf7bb408cf175142dc1"
  },
  {
    "url": "assets/js/9.b1fb012e.js",
    "revision": "63e53f7232b3da87bcf6fd13d3177bb2"
  },
  {
    "url": "assets/js/90.4403087f.js",
    "revision": "ee3d5f5dd51d5dd8f9375ba6f9e27738"
  },
  {
    "url": "assets/js/91.10fa599b.js",
    "revision": "3c569e016646cde48b7b67fd3621868f"
  },
  {
    "url": "assets/js/92.80195820.js",
    "revision": "c599660487344df9529a8f9ae23b8e22"
  },
  {
    "url": "assets/js/93.d780339a.js",
    "revision": "3670a233ca4b2a662b06d42376f74669"
  },
  {
    "url": "assets/js/94.77b098f7.js",
    "revision": "5a1256651bc370ada56c621f521bac53"
  },
  {
    "url": "assets/js/95.6aa59f13.js",
    "revision": "ae13c1ad12f569350221e98cf0919f4d"
  },
  {
    "url": "assets/js/96.8149a5bf.js",
    "revision": "38e8e51dab44596fc294eccf09654861"
  },
  {
    "url": "assets/js/97.bfe5ef63.js",
    "revision": "963a1e2490d30ae8391a6d3b096684c4"
  },
  {
    "url": "assets/js/98.fa0a5018.js",
    "revision": "554aafa64e9a0e017a7f4f0e5459a600"
  },
  {
    "url": "assets/js/99.0b3c8236.js",
    "revision": "096b55813d8047dc205350858f6fed88"
  },
  {
    "url": "assets/js/app.464f9f48.js",
    "revision": "c905c0dbba1d7bdb64ffa23b2c769d51"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "e3786b3615811ea190649c41486a7590"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "c5e37ff0e7902e1f28db60095b07a1e8"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "cf05dd517563fcd37efab7e6438aabc0"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "85803ab14d0bb17e1efe798af894d248"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "b300433d3034ec3adf06d49b294f9e36"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "0f716c76fb2393553c515c79fac6d6ac"
  },
  {
    "url": "composable/date/now.html",
    "revision": "dbe3829ed67411e1f6584801a0d0133a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "83155a027eeea727f112d3d4ba1df60d"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "99ec5a8eba3b5be42363f86b3d8b7f25"
  },
  {
    "url": "composable/event/event.html",
    "revision": "3642613e17f7d31e4b2bc92ec40f5ce6"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "35b73e933b5023a3e83e44c0e4a8e06a"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "1f711efda5cd44239bc8568e89aba434"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "d38d7a275b89de89b88239403196b6a6"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "2aa2c3c630f6ea15b0aede0ea862c1bd"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "61de0ed4ab3456c12cc0491ee2391301"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "b7aaabaacdb0b443e35046fae050ec9d"
  },
  {
    "url": "composable/format/format.html",
    "revision": "d0df62016cb6fe907fabe003ddb1ffcd"
  },
  {
    "url": "composable/format/path.html",
    "revision": "9409be139eead41cb20792ad69c550a6"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "9941ed45e10064f7ed1ea3b1a3c80a02"
  },
  {
    "url": "composable/index.html",
    "revision": "6bde661f66d73fa94a1e27674e4d863b"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "cfa52fa89a5b85c1fd8615b380b9916a"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "4088e593415cf6023b68fdfa0c41e65e"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "607c818d181089bba1b4926b0696ae49"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "2c64cdb5825a536b918ee3b7cd4012f9"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "a217f22e83f0e06bb3deb65fd48e0507"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "8fed9ba30e73b9c00e3f6df0717606b4"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "256ef214210419e8f3416601eee6888d"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "bd33f9f5301bda456fdca14781d30963"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "53af9bf7ba9a3994e61e8aaed8a03f51"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "e8e81e1cb63008b6208382e08ae6af74"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "3d85aa22fa9cc3ed3678cf8a6471cbaa"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "b6e65d0fcfaa42dbd25a5272d842a49a"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "dcf2d3e3e393aa2cb3aec95bf2602c81"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "5b4990fa179fd9a44d1aba24f76cb27d"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "85a2a0b854e7fe7dadf48e75c025f587"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "7c0064946d465ea01de58e71cc581dec"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "5e32e26cdf3a3da45c9ad3f6e22fe757"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "359a37ef900ddf2af86ae4fd8c9479c9"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "777c7fe987927c0750c95e057560a019"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "1dfd6a215c7f7790334ab124b74d1cb6"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "a387a1ffd902c6477742e732aa4c9e5d"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "c89515d5a00fe2276f044534178169f9"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "1087f116f8725baca3f402e003922369"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "2ff781a6442108fb91cdca1d85f3f277"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "85dfa52b3f7735113f20a9cf86ef4fe0"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "1deb77dda6e77b4267c3d150457a8c02"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "b8c5db771c88264b9ba03dc180d7d7a1"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "67a8499866334533a82135e3d5aaba00"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "739651ea2e34bacda20427afa0f2a982"
  },
  {
    "url": "composable/web/language.html",
    "revision": "a709c68339be5a661d3857d95b162824"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "2966153ba3401e02fa8c1346f141893d"
  },
  {
    "url": "composable/web/online.html",
    "revision": "b8e1a5ae064d5995ece69c96ff8a0609"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "d8f9c8f9cfc4ba7baed0cd7c4033afb1"
  },
  {
    "url": "composable/web/share.html",
    "revision": "9a044e92caf530369971f1aa171b1628"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "f1c7dbc085ca31d99085641461a64963"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "8c0bac51b4573cf2a6a485f53f281f45"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "c793fb9a8a5cac64d29bf1ac8338c384"
  },
  {
    "url": "Examples/index.html",
    "revision": "0b888b5ec73b19647c1766313bc571f8"
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
    "revision": "55d763743d6d9c33b65a055dca536686"
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
