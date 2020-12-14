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
    "revision": "c5d4e97165a06f0966ac60be46e5533a"
  },
  {
    "url": "api/axios.api.html",
    "revision": "45f4fef53ed58fe0f06fedd1eb2c755b"
  },
  {
    "url": "api/core.api.html",
    "revision": "752345a34732d38bb4283709b3332230"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "a8dcd4a164d23b9cdc9f84bb0bb12de5"
  },
  {
    "url": "api/web.api.html",
    "revision": "c28544e54c442a0d89303b20dd2f95f0"
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
    "url": "assets/js/1.e74996e3.js",
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
    "url": "assets/js/60.7517c9ce.js",
    "revision": "9b840b8a60c4f2b64f6337b8aa23673f"
  },
  {
    "url": "assets/js/61.9782dca1.js",
    "revision": "33e5edd0eb1e8df33d7e63ce393ec4c6"
  },
  {
    "url": "assets/js/62.4ed18f59.js",
    "revision": "6e12f19d24c72f4ef752fb34a498aa99"
  },
  {
    "url": "assets/js/63.ab0d6d06.js",
    "revision": "2f050051b93d1e68a20507efbc691b1c"
  },
  {
    "url": "assets/js/64.0efe657b.js",
    "revision": "495d41fa9ec43817a49423a6e08e862d"
  },
  {
    "url": "assets/js/65.6adb961a.js",
    "revision": "138c5749949a1e018c420ef2334ead45"
  },
  {
    "url": "assets/js/66.c98a37a1.js",
    "revision": "d61ed22ed036299b39b34eba97e27d18"
  },
  {
    "url": "assets/js/67.5e9ba640.js",
    "revision": "69525f42ddd48cab96cb1dab5521cc6e"
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
    "url": "assets/js/96.98aae6e2.js",
    "revision": "32fe9822b4694bef7f32eb66fad6b3c3"
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
    "url": "assets/js/app.e319c708.js",
    "revision": "07f86eb7105a02ecd6dd22f1bb934f06"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "41a0585543e7a0acea5a2a2c12007dd8"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "d9ce81efa3c7cf7f1a95f949b5350f37"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "a0fa4c92110358fa35d25ca0c2bea854"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "69e70fbd2b3467cc3a80683dc630be19"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "9ffb0993316becc1f2aa3b6875d3e668"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "691da1e03ffa8da0a7d0d7102e321077"
  },
  {
    "url": "composable/date/now.html",
    "revision": "3bae63ca5382e50a05eb9a522766bee5"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "3f430f2d127e3600e05b1ffbe45397ff"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "dfe06dfbb1289d10a53d449fb703c379"
  },
  {
    "url": "composable/event/event.html",
    "revision": "dd880db52e6d92c63a4f5a9f0b7a3fef"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "5901fa02bd08e02b00fefb2a7d8f0f4c"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "66af30fc836b2d2dfece6ed354174fd8"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "e990f3ad9704fe1c01f44cb8c6c894e9"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "c8a2f464e4961189a9a574bb7a4895bb"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "5927a7fb4ce56c7f46637c6504f200e9"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "d667c836380eb524115fd6ec3d03a26a"
  },
  {
    "url": "composable/format/format.html",
    "revision": "0bcb8ddc5fdd47d1e399c9240b956a3e"
  },
  {
    "url": "composable/format/path.html",
    "revision": "1bc3ce6bf38b037392dfdb7f6f336706"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "ff8fc12d345e36e784bb16459b0c27bf"
  },
  {
    "url": "composable/index.html",
    "revision": "52347ee0ead969f28e29f5a38ec5c18e"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "c5af224e2f9bdded6aec73aaa5c6f19f"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "c7724b94dd63c3b83a20e3cf42e1eb5c"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "e10f8c03069a72cea61e37c9b4347b23"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "a6ed7599ca6f00f5278dd56004e18bd1"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "0276380217069ceecea1b53e9ad472d0"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "85295a9386de3f6fd9f7193fd48c8399"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "6bbb0740455d92a8f252f3b988cf18da"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "2b1e1e5d2c780ecb4d26efc0ebbd0e3a"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "c7eec3d1adcc0c8bf295fcbcd551d452"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "207301d5bc4558cefcd624622d04468b"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "b9762f8fd338ff00dee492c27c29cfcb"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "0745a5f07a4594ce92e551479136ea64"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "cf6542ff3d7ef44ed42709422bf1449a"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "5859ea5d48dc65c5579defd48d4958fb"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "9e6fd689bf66dcb3b3d2c5091f737d8f"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "d1c11a8455f4343867af73e2ad8923e8"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "e35691a7e7b6d97e9d24c9fba141f26e"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "2c6dee9d4fa60f2df7b52ee80e9366bb"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "bdb21559efa7ed402b1e8b3646e38c6c"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "5d9d11d7a4b4333bae02d26aefbb3c6b"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "5333c14df4c1a54ea398c2dc970cbf46"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "19560db296a7e138126d98329cbb0039"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "a7dacfb454aefd21e5107f4f060f8a62"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "243bc5d367fb81d51c941ba94c3574a3"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "d7a00904e96d96a8cd717faa2bdf744d"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "e2cf83d4324390d2e53c47a6c0cb999e"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "aba376921672a5b3ec1a438cae9ac4f4"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "bcc6daa5c263f33d8d8d647195ceae5d"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "44a97702153ac70d3f92ab6151c25a4c"
  },
  {
    "url": "composable/web/language.html",
    "revision": "95df415c9d1505b8730c45622a4e6058"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "acc7b4d3a777a56f49b345c333fe274a"
  },
  {
    "url": "composable/web/online.html",
    "revision": "71153d20b4f61b6705d77191a6bace78"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "c09ab06438d67752e877e4609dc5c17e"
  },
  {
    "url": "composable/web/share.html",
    "revision": "72581085572f81bc990f2a9e89ce43e9"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "bb57ab5dbd01a454bfd18e63d07de44a"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "35d810cba28bc5bc2c1b783b7929462c"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "e3ac8d471cf5b7dd554e4cf038099410"
  },
  {
    "url": "Examples/index.html",
    "revision": "24dd0cc254252e9edd9aa6d31996c225"
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
    "revision": "283cc5f895881f9804ad513e0b1829f8"
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
