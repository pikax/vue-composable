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
    "revision": "ff683057883fd42690b8442d1f3a4893"
  },
  {
    "url": "api/axios.api.html",
    "revision": "9a45e8248e3bf8204228342c7a490c97"
  },
  {
    "url": "api/core.api.html",
    "revision": "e59132fe08cc4db8fd498232d8fd2f18"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "0b05e140ec113271ae2b0ca92c4a540f"
  },
  {
    "url": "api/web.api.html",
    "revision": "ce7fee6c87f4a3ac69a64155fc2a876f"
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
    "url": "assets/js/1.6fc21b55.js",
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
    "url": "assets/js/63.2249ece6.js",
    "revision": "687efadc92d338faaf23529b62fb3f6b"
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
    "url": "assets/js/app.0107be84.js",
    "revision": "0733283fa954aa75446b640fadc42da5"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "4b3bb6831881980d2f1c6d003d029ae9"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "12c122f3447ae2f2411ff41c9b014957"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "827fec26ad9103a690aa829d7ad1ebbf"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "a56c1f888d02d18c6f31aa1e8d736308"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "fc3fe072332f8bce02469576f801e16c"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "feafcfc297bc2774fb62512be2968af5"
  },
  {
    "url": "composable/date/now.html",
    "revision": "15cf1e32bfcf0e582e270da578c83eeb"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "bd82b572eaa991335d9bb5f58be694c8"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "46c08d85d764f8aaebfadb7b5c96dd87"
  },
  {
    "url": "composable/event/event.html",
    "revision": "4f3f364a344570d66aef1c485992cca1"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "602a60400f59a6186f58cc1ae2f3041f"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "339c2935adfd503e4c73d5cc93bb14dc"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "a2eda65d43bdc97acc5aa90dfa8a9a68"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "6106f7398076e36e191da1b804ddf874"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "01081718ce433eb8a77c78f10a27c1aa"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "cabcb6efacf6dddc7fe80957064f8664"
  },
  {
    "url": "composable/format/format.html",
    "revision": "e38fed168d591b659bf93a4bf7f4fbb4"
  },
  {
    "url": "composable/format/path.html",
    "revision": "5d7d7a906a3ee59e73608e74c0381cbf"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "05e7d2f3338094812bb0b0080ca89fa8"
  },
  {
    "url": "composable/index.html",
    "revision": "5c170a79389eb79707028432dec99b8d"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "b26de42854af4d559a3eaf8283712414"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "d78bb6caf4a75134fb06c4293f64e21e"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "83c8a4e3cd95b1f506eb16efe45e40d7"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "fee5ca8b2f7dd094664558bc792bbeb7"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "aa54248635f1abfc8591da66514589c1"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "a420adb72f88d5e1c40ea6fa3856ddb5"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "a7bb30b6f3e16e2f91c251c1da59cde5"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "f95e3e76be79efe21bf81df2230a7d9b"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "b466ee79548d8c6ff5d1ae34f5b423d6"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "d768ad7ca5466270878f15afb56c67e1"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "8b7ee40a2289260f2820e4975ae71722"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "2b396d00c18929dadaf8985f2c66004b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "71dcfc01e189d879947d39f1837839d0"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "9f2b76b1d076fa4531229e2599a888e1"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "76f905109ed7c59d965ccce1c1f3f6a1"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "835d093587d13af253dd321c2bf099ae"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "5e11ab1ad9feb57d8d09850e2250127d"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "928a00855c7a2bebadb4537ca894c237"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "601d75dcf4625047d725afbe71d70973"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "1bb620c45c432ec0e4cbb7738c929bf9"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "d4e0934ad274e348d6048aa41c53e89b"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "3222e2a17afc4689c485cc01c3f1daca"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "8a8e3917602040b52ae36b8fa99c263c"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "58cedf242c691b92b04150423bd48d07"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "fac8dd2fe8b3f32b55c4c0306df2d92a"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "ff15e18529a2ef99038bf8dc836f6b40"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "c6ba811957a6ca83a101ee8a6b2056d6"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "e991c4636f135a275e02c7d8592a82ce"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "d4c787be145f87ac8a818f038211f26d"
  },
  {
    "url": "composable/web/language.html",
    "revision": "9d10989978ce59e773f168b20f2ce1e1"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "6649ce6060b61d04a3f1d08bb903ab63"
  },
  {
    "url": "composable/web/online.html",
    "revision": "330af3c80b62357e2266414dd881d119"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "198796d5d592a8037958d5f3f3035565"
  },
  {
    "url": "composable/web/share.html",
    "revision": "34f3af0efa3d845d44ba96f6ac94786c"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "d9c312894ab3d03e769e156e85216f69"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "83b10770054eb9891ea32f022541346f"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "f8c08d258e73cb136c409f91cae3c7cc"
  },
  {
    "url": "Examples/index.html",
    "revision": "ea099a3498a070d7fae770902cb7d60f"
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
    "revision": "d14053237ac98768aec46df4744a2e84"
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
