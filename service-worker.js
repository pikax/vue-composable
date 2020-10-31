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
    "revision": "dc4afe50c3b520c0d9938df45ff8f945"
  },
  {
    "url": "api/axios.api.html",
    "revision": "cf367b5c9bba8afb26393b2cbcf8b23f"
  },
  {
    "url": "api/core.api.html",
    "revision": "bd198836eecdc2b3deb95d01ab57ee61"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "995b3bf9a49ec791ebe6a7cc148674d5"
  },
  {
    "url": "api/web.api.html",
    "revision": "3662e5a6079104c6da9ce824636d1eee"
  },
  {
    "url": "assets/css/2.styles.7af71a64.css",
    "revision": "d9d481a99be701969b01dea359f7a7ea"
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
    "url": "assets/js/1.f7414563.js",
    "revision": "5dacdd5bba827910e873f91d5bc02ac7"
  },
  {
    "url": "assets/js/10.8ff0d92d.js",
    "revision": "4db5c6c536da35d6b5a70e4d04e4bd2b"
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
    "url": "assets/js/108.7d960a3c.js",
    "revision": "85a205a6db1334df5d1e78cadb564aca"
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
    "url": "assets/js/110.10b8477a.js",
    "revision": "8702868377c221807d59593ca30e9a5a"
  },
  {
    "url": "assets/js/111.f82f1239.js",
    "revision": "71101f114de7d1270b0c623b3de7f830"
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
    "url": "assets/js/61.4a0e0d28.js",
    "revision": "04de761cd32bbb089ae1f4d9900f1df9"
  },
  {
    "url": "assets/js/62.e62992bf.js",
    "revision": "7e6d18eafafab21d18ac1f4091b78c8b"
  },
  {
    "url": "assets/js/63.d3d02ecf.js",
    "revision": "1c2f71b88d8cf4b212d09edb32822b51"
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
    "url": "assets/js/87.29fb6760.js",
    "revision": "6d1b688f5383f5f53c91fae49b7f977a"
  },
  {
    "url": "assets/js/88.c132a82b.js",
    "revision": "87400c03a9a6fc38a3ac475eb99f0262"
  },
  {
    "url": "assets/js/89.c93db0c7.js",
    "revision": "83d175176e68ed3751c6e8fbabb86528"
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
    "url": "assets/js/app.b5b0b057.js",
    "revision": "ac1511dc220a711aa03a4db3930c6ef2"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "0f91e4e07f1c23e02e761a9f96a2b9c5"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "b7bdc0171a53d79a7ec952969a247c2b"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "03b8ddbba1a3bbd68939fd39a60035d3"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "20a280b715fd5555f50dfce0b325ae9c"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "b7a98331a99f57321b4b166ccc8bb8e8"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "8942ba2c1a244cf871cd966ef68d4b26"
  },
  {
    "url": "composable/date/now.html",
    "revision": "c96b643a0f3d7b1e2484e99712bdff09"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "39b17f479c64f58c9ddcd7d8fdfcf150"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "b1bff81ff7266c5a92148e14ee6b2089"
  },
  {
    "url": "composable/event/event.html",
    "revision": "bf20b051622dd8947a44b4bd6a970ad8"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "325b6de57b8a3e6719afd56a64445954"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "f60f2655793cb09d411908c63b746175"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "54a7f7118d2fd1122d7369a502ccb1d8"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "6580ede87daef38fd5cf8a6f7f87dcaf"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "47df8e25a8d943bb36b10ebd67179ab4"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "b927af68de32342eecade3d9e2fa4ddb"
  },
  {
    "url": "composable/format/format.html",
    "revision": "e3dacb5e65b49e0a3dfc38125246c378"
  },
  {
    "url": "composable/format/path.html",
    "revision": "ee2729591d678f7180104211c00c80da"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "487fb928f907afc770fcf9d96ca657c5"
  },
  {
    "url": "composable/index.html",
    "revision": "3615b57d9a1206c3cd712eb3739552a1"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "8ef2ed1cf2faeb5c26326560e56e0966"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "402824ca8a2645a084e50f0d696e1b61"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "b81eaeeed0ccd9b658a55d93d0e9d4c6"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "b7584a7a92e7053be518b08c246ead42"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "a024467a66cde7f470f847318a4415bd"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "b27a2571d66b3d7bc64c96f77ef8b0cc"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "cd220a2017329400cb5f2ee2fa509306"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "9f2a272c17c366fe8a0082aa103168be"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "21ba8422ba4f40ac449466fcefdf5c47"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "6538263721b3c93b46aba4a4194a468e"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "db96fcbcb3410c8dcd83bb91c7e99efe"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "1a8f391a7e63a4b81d350064c0956ef8"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "fec06b586f71d27f23b46f889fb7cf11"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fc8b45239bd695530395b8c48507d257"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "74ac9185a413571f33abfd3313db438e"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "db469b8edeeaa814f3aff89653842b5b"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "14c832772688218b6c8ea9c348c57411"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "2a75780c1083664db77231558d1be960"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "4fb6f4d868e6f8067e4acad5d4b90a3d"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "aa471fd7046a38346b62f71251274579"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "2e5254557e512725b5354e519ec8241e"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "0097291a6c4de1a8b77973b182e624b4"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "a9b7b7c9030ec21d6a9a00df4785fd20"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "8a5d941c4bc423c63413ded1c808d60f"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "419889579385f99de6ddab5ea926fb08"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "14fb339ed5d148c19345752c6e62f65f"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "b43f72ed240b536e0189c5823026db87"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "0fcb4719ca757a23e025502a8aa19282"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "64ced7e25202ac4059caca98789e47b0"
  },
  {
    "url": "composable/web/language.html",
    "revision": "38d84ecb51ee40fcee5a39d0d5b1f0c3"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "ef02f61c5c7c0e935d621df3dcd63223"
  },
  {
    "url": "composable/web/online.html",
    "revision": "6191cc21d130cd5df791f4860930c6ce"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "7f13a5713277a6076fa98865e02186a1"
  },
  {
    "url": "composable/web/share.html",
    "revision": "a05339f503850dc0cb1668435a7e0fff"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "6a124d908f4e41665e7b58c98ba3a81c"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "7c2a9199ab3ecbaaed4bb81de4d09c05"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "ce0152018ce4cff6bbab47bdcea5b733"
  },
  {
    "url": "Examples/index.html",
    "revision": "24ed15dffe9d9e518bc941939f39047a"
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
    "revision": "d3ac6faa2b830ec29283188caba59b74"
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
