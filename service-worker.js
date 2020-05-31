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
    "revision": "798ba6c27c78fc2ec0cc9b8e6437cb40"
  },
  {
    "url": "api/axios.api.html",
    "revision": "89d8e92e1ebbb3a4f334796e76c99293"
  },
  {
    "url": "api/core.api.html",
    "revision": "de6cb0e16264cbe4703abc17053bc297"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "461411fb96d248819a0547e375d9db67"
  },
  {
    "url": "api/web.api.html",
    "revision": "268d55d2d7d0a6e9c56482747c53e04f"
  },
  {
    "url": "assets/css/2.styles.2dbe08e5.css",
    "revision": "8b8cdd2c45f55f08e17d61b29466cdd9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e561a0fe.js",
    "revision": "09f394e5f0254059839114e5ed95364d"
  },
  {
    "url": "assets/js/1.d311954b.js",
    "revision": "da3c4334bdc1be028990d1c2070770e2"
  },
  {
    "url": "assets/js/10.1c00abb9.js",
    "revision": "f326258ab682104c97ba7267ee066c79"
  },
  {
    "url": "assets/js/100.306d11e3.js",
    "revision": "e981575b34bd885b7b73e5606f6701c5"
  },
  {
    "url": "assets/js/101.0607dc9e.js",
    "revision": "799e0314e44e75c2cf15069186984d2b"
  },
  {
    "url": "assets/js/102.a981d455.js",
    "revision": "74aa9e3fddfc532b6518ee41d0597a43"
  },
  {
    "url": "assets/js/11.b51f8977.js",
    "revision": "b54588fefe2f2844a6ea1dec0f6c84ae"
  },
  {
    "url": "assets/js/12.d32e92fd.js",
    "revision": "a22bc4267265e366c719d1f9c5b8fd89"
  },
  {
    "url": "assets/js/13.d77f7fb4.js",
    "revision": "de015505847480390911e6bee204a617"
  },
  {
    "url": "assets/js/14.742e5f58.js",
    "revision": "2f1b2019ff7de34cab757e2f4c470a21"
  },
  {
    "url": "assets/js/15.0ee95ae7.js",
    "revision": "ce1fdc7184c628c6e47cb4d5888c201e"
  },
  {
    "url": "assets/js/16.e5ac5634.js",
    "revision": "d044842c2a8240a48363cbf69a6f3633"
  },
  {
    "url": "assets/js/17.f2f6a69b.js",
    "revision": "83d1e6c60ab1fce4c69432486ecad582"
  },
  {
    "url": "assets/js/18.27df52e9.js",
    "revision": "04e49d079fb1430e5230081ed2b11c29"
  },
  {
    "url": "assets/js/19.7d7ca7a5.js",
    "revision": "c16a9f3ef7601c6a4e047974484721a2"
  },
  {
    "url": "assets/js/20.471a5a48.js",
    "revision": "b21fb3e2ac50016ee69cbe82e082fa9d"
  },
  {
    "url": "assets/js/21.12707bf2.js",
    "revision": "b12db31aee96a612bd0d37810f2c4eea"
  },
  {
    "url": "assets/js/22.f43c4c5b.js",
    "revision": "a1a7730c1809772bfb0874aea5804fd8"
  },
  {
    "url": "assets/js/23.171e0720.js",
    "revision": "c212baccabc029f9a4a0580329060a6e"
  },
  {
    "url": "assets/js/24.44987231.js",
    "revision": "382a7494f660f38d8635c61c3d2215d9"
  },
  {
    "url": "assets/js/25.32c06c83.js",
    "revision": "9443c508d1a2d568d2b4cca2a694d6c4"
  },
  {
    "url": "assets/js/26.c2c631ca.js",
    "revision": "e33e5a986b47a6ffa16e2e2ad57b30ad"
  },
  {
    "url": "assets/js/27.14f37c16.js",
    "revision": "61e3c1d6fb450420c2dcc4bfcd232376"
  },
  {
    "url": "assets/js/28.3042fc2e.js",
    "revision": "d9c64085561e2842a87937c375eef2c7"
  },
  {
    "url": "assets/js/29.b9d5d61f.js",
    "revision": "eee2efdad3b77043803bf300e2daa74d"
  },
  {
    "url": "assets/js/30.d24afce0.js",
    "revision": "8c7231b24bdb33c2c1f39609a330e632"
  },
  {
    "url": "assets/js/31.275becb0.js",
    "revision": "df616a5d6a55f0366a595e0648210c6a"
  },
  {
    "url": "assets/js/32.e4c34221.js",
    "revision": "6c076500f4704d60730bc72b520d6822"
  },
  {
    "url": "assets/js/33.078cd80e.js",
    "revision": "64be001f8aa7109f3320a756fced1638"
  },
  {
    "url": "assets/js/34.00c13627.js",
    "revision": "9386718cbbb0d15a7678bc489ee57409"
  },
  {
    "url": "assets/js/35.70d731f1.js",
    "revision": "cbe5e9493f8524c6218686557f7db575"
  },
  {
    "url": "assets/js/36.3b25981e.js",
    "revision": "b79b2b2a1c1f450a6347912b534bd74e"
  },
  {
    "url": "assets/js/37.b6f9e4bd.js",
    "revision": "a725493f2d85ee95f743f10fcc91c146"
  },
  {
    "url": "assets/js/38.589efe0d.js",
    "revision": "755809177228ca84d8ac4fc6ee86091c"
  },
  {
    "url": "assets/js/39.169d70e8.js",
    "revision": "dc5cc099fc2923636a4faee53977bd85"
  },
  {
    "url": "assets/js/4.0b6e41b2.js",
    "revision": "52cdf81837bf56c16a679ef747faa5c2"
  },
  {
    "url": "assets/js/40.69546b7e.js",
    "revision": "89c03cbaf56cd50a6f29e5d56d6f3037"
  },
  {
    "url": "assets/js/41.5e2a7b8f.js",
    "revision": "b125f9d3ae5d8a98c2f96fa6d43799d7"
  },
  {
    "url": "assets/js/42.2b150bdf.js",
    "revision": "3ad2923350040659f157ce6beab76227"
  },
  {
    "url": "assets/js/43.73a0d405.js",
    "revision": "639cfbe6ddffe38929b5a80c34f2bd62"
  },
  {
    "url": "assets/js/44.8aff21d1.js",
    "revision": "86bb4a63783c50844f5e660d241d44c3"
  },
  {
    "url": "assets/js/45.df8113fc.js",
    "revision": "2cdcf1bc67eb97ca6cb170c1a8ad49f3"
  },
  {
    "url": "assets/js/46.7ce8214a.js",
    "revision": "1a76e5780f83e129999e686c7fd5c9c9"
  },
  {
    "url": "assets/js/47.b9dda308.js",
    "revision": "abbe4bd03b5e24a8f48f24d19d86dc1d"
  },
  {
    "url": "assets/js/48.04577c4f.js",
    "revision": "1561755b3aabb0afbe79369de4c32f2b"
  },
  {
    "url": "assets/js/49.0453d0a3.js",
    "revision": "470a9f683c333aff1843b3bbaeb181c3"
  },
  {
    "url": "assets/js/5.ba02ea2b.js",
    "revision": "440fea1baeda99a204901ab5550a1a3f"
  },
  {
    "url": "assets/js/50.5fc5849b.js",
    "revision": "d999f1cd68ffc099298a5b29452b4888"
  },
  {
    "url": "assets/js/51.644d54d6.js",
    "revision": "424dc0fce93d571956d6c9b31230dc27"
  },
  {
    "url": "assets/js/52.51540104.js",
    "revision": "9df7d1a9fc7dc0bfeddc86411ae4d2c0"
  },
  {
    "url": "assets/js/53.4cf94ebf.js",
    "revision": "e10fe87a24e10a4806dcf38e277b86ac"
  },
  {
    "url": "assets/js/54.cc464e1a.js",
    "revision": "931aa70471a401a302e6a2956847fc90"
  },
  {
    "url": "assets/js/55.713fa6de.js",
    "revision": "eba4ad6216a9daaecbe51798a9cc5513"
  },
  {
    "url": "assets/js/56.ca0a33a5.js",
    "revision": "ae7aa7829b470ac8a47e060c4577cb37"
  },
  {
    "url": "assets/js/57.eafee9d8.js",
    "revision": "714002cd7ca8dfefd3df23837d0b5e4a"
  },
  {
    "url": "assets/js/58.d5af6614.js",
    "revision": "bf14319796de30196485d42480a6bc2e"
  },
  {
    "url": "assets/js/59.7062130a.js",
    "revision": "bd035718e19c41701628d44b61757a1f"
  },
  {
    "url": "assets/js/6.9d3e5868.js",
    "revision": "b819afb266d28ae8e8a166376ce2976d"
  },
  {
    "url": "assets/js/60.5e07adcd.js",
    "revision": "3bd5a4fe07d0a0ff0bf7e31c8ea8202d"
  },
  {
    "url": "assets/js/61.56a8936f.js",
    "revision": "ccf4366ab7ab1b10863fdb44e8b5c332"
  },
  {
    "url": "assets/js/62.d200f6c3.js",
    "revision": "1e2f78734ab456b9a8e1fc8525394e70"
  },
  {
    "url": "assets/js/63.5bdc47b9.js",
    "revision": "c95a18c9e6e3dcfd815c51a857f9f416"
  },
  {
    "url": "assets/js/64.097e57d5.js",
    "revision": "8eac918b59a66347f163f9e36f522556"
  },
  {
    "url": "assets/js/65.b7e74c9c.js",
    "revision": "e505b2447fd03cba1f9fd5274a12f415"
  },
  {
    "url": "assets/js/66.0b1d0a99.js",
    "revision": "ea99aca52320aa205aab1c86d74282f0"
  },
  {
    "url": "assets/js/67.81c045ed.js",
    "revision": "6e84ae6306f27bb4fe6f756dc1c90b93"
  },
  {
    "url": "assets/js/68.9b370a53.js",
    "revision": "c285c4e87afc11f044c529eca1591b74"
  },
  {
    "url": "assets/js/69.f714707a.js",
    "revision": "cb1155cc2331534cc2b3cc9026371547"
  },
  {
    "url": "assets/js/7.556b50eb.js",
    "revision": "0b7c77560b4e17b3a7c7ef6dbcc5c069"
  },
  {
    "url": "assets/js/70.08fcb22a.js",
    "revision": "7f40b4fe8c1c36dbeeb4c9bf946d7f43"
  },
  {
    "url": "assets/js/71.06e4c7d2.js",
    "revision": "b9164f6b723d8a25992e29b33b5d24ed"
  },
  {
    "url": "assets/js/72.6abc3160.js",
    "revision": "51cda0eec56e8a54af15bf7bbc2fb53f"
  },
  {
    "url": "assets/js/73.8a254075.js",
    "revision": "be654d5408b87fd1653dbad9a2cf3770"
  },
  {
    "url": "assets/js/74.868d35cb.js",
    "revision": "fb9fb886e349a17d7398501681a0156f"
  },
  {
    "url": "assets/js/75.ce474a9a.js",
    "revision": "694369d6cd5400bf631069604b346127"
  },
  {
    "url": "assets/js/76.754d8b89.js",
    "revision": "2e4956089a31594ecb79ea951c25572a"
  },
  {
    "url": "assets/js/77.749f61cc.js",
    "revision": "b1092a5111530db9f54359d50817aed6"
  },
  {
    "url": "assets/js/78.a34e7c3a.js",
    "revision": "e56323278528f63001914285d4b24d5c"
  },
  {
    "url": "assets/js/79.10270bd6.js",
    "revision": "f52c70c3d9fdf19517e666e6e0c54889"
  },
  {
    "url": "assets/js/8.a21d323d.js",
    "revision": "2a704e5fd27c771f8ec94b924200c82a"
  },
  {
    "url": "assets/js/80.23e05478.js",
    "revision": "fe5d333b3cc5585b4ddb0e58c891e0af"
  },
  {
    "url": "assets/js/81.d7abdc12.js",
    "revision": "e6ac9427528a05ecc34484c0cddaae9e"
  },
  {
    "url": "assets/js/82.759e762e.js",
    "revision": "ccfac3021861af5362de7ab523289261"
  },
  {
    "url": "assets/js/83.9437e405.js",
    "revision": "d9c9ecb87e1f4704ea70ac0538ef9994"
  },
  {
    "url": "assets/js/84.b8e3b493.js",
    "revision": "74d3c7037cb29202c6eb8113c9185c39"
  },
  {
    "url": "assets/js/85.9088043f.js",
    "revision": "9937a4c7f64391811d1b99d5082a60f1"
  },
  {
    "url": "assets/js/86.c1d4782c.js",
    "revision": "81902c96ccdec5ac68aaecf8bfa6014a"
  },
  {
    "url": "assets/js/87.5a560e19.js",
    "revision": "c14c103d07cd48a15bc90993a2b99b08"
  },
  {
    "url": "assets/js/88.c77f4005.js",
    "revision": "7265eeb5117fce1b103dee0ae9be852a"
  },
  {
    "url": "assets/js/89.e158ef86.js",
    "revision": "413414ebc2fd22d630db53b521c29e12"
  },
  {
    "url": "assets/js/9.1109e34b.js",
    "revision": "5a8100529a3acbcae48a12d7c01e13a8"
  },
  {
    "url": "assets/js/90.864f96a7.js",
    "revision": "9e7ba4d1777142049c5ce77c15bc8afa"
  },
  {
    "url": "assets/js/91.bc5538fc.js",
    "revision": "1801d9158333235fbd61108900d94914"
  },
  {
    "url": "assets/js/92.7d089961.js",
    "revision": "7b14926bcd49deebbc691f2e48efd5eb"
  },
  {
    "url": "assets/js/93.c8a6116f.js",
    "revision": "20a8b14ba1fc5b7304dc93b80b4cd83d"
  },
  {
    "url": "assets/js/94.b91d0004.js",
    "revision": "32434f66042a8cb3556244e0504493b6"
  },
  {
    "url": "assets/js/95.6df31751.js",
    "revision": "7384e1f8c75b5adbfceb6938ad065a1e"
  },
  {
    "url": "assets/js/96.8a7364ec.js",
    "revision": "3650db56deccecc8a4b28fee1cf268d3"
  },
  {
    "url": "assets/js/97.c0cf280a.js",
    "revision": "7fc05b4613fb7a1836e12b7d7fab355f"
  },
  {
    "url": "assets/js/98.2baf45d1.js",
    "revision": "1f52157ba38a48c895317dd532a01dbb"
  },
  {
    "url": "assets/js/99.01bd7f55.js",
    "revision": "e13b7dd167f294b44f37f5b834fdbfcc"
  },
  {
    "url": "assets/js/app.dcabf58f.js",
    "revision": "673d80cee990af294074f1e98504ad39"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "82ae21b5bd3b52758f5ccc3a639a0430"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "d07034d61803e862105a66281e4db7de"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "4600229cd4821c03a0273030a83d0be0"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "d65330d8b5a602c0c899768d7287e8b0"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "e955afb4cf596af31f6c25ebb9738cf3"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "46ef773930002615015876515c27139f"
  },
  {
    "url": "composable/date/now.html",
    "revision": "3092d74de28ecaff0c02aa640cab2188"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "f318adaf098fa51b7d37058ca4cb6c55"
  },
  {
    "url": "composable/event/event.html",
    "revision": "e35b31cd8522d2c5608295d90fbd4307"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "dbb60b6b8ecbeca2bedbcf3697d2f8c0"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "8f36d210e837132ec44d5d7ce6f4df97"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "5f1bc906001bdd913b2f618d323b3ac9"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "44d9e4bbd43d3813b63ad4845e0f6b73"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "77ae6a0b352f7b8a276b6b18afa993b3"
  },
  {
    "url": "composable/format/format.html",
    "revision": "ce555df67774f0435e5e01d6c82182a8"
  },
  {
    "url": "composable/format/path.html",
    "revision": "93d71c6a5959de47716068082fbb6661"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "cfcdf9e8857a7189e1ecd7b9f6fb3308"
  },
  {
    "url": "composable/index.html",
    "revision": "e76653bd38437ddf3dd096bbcacc1a55"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "882f856a7b47876e3e15c0d26b2ea930"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "a473ca09fa4c6b54390db2269b784d02"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "f300ee22e7591473ab6911a781caa714"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "908e78ddbfbe029a61e17df1ba5d1506"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "e776bcefe5cfea1d48a5d8e4b6e9d0ba"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "9ec66caf1b6321d95a9e6942bed2617e"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "c9497d761ec8fa9b525dcc222b8c1846"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "81eb966e9f74a3cc30c4da43933f7bd1"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "571e3db6afc3938eb59ab5b8852cc056"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "23cbf75f0e9bbd4506c7460aaf54c72e"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "c21832e5510c027ee98796a1bbe74e07"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "e3cb0570ba01ec1355a5486843073851"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "509d8207b3c5582623c1febf7436a5b0"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "50e1c16f0e0641c0fe03f18188e4becd"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "7a5f847e5e3ba55541a73e887410c250"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "e1b43e07100035a7b06b06dec92ed059"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "3b66c7baa1ea48e95f1b3249fb65c41a"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "d886197ca70bfa6dc6be84b5536b740a"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "11f27b340d269656e34cee188869361b"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "20faa310384f8cbe1127076f4457cd53"
  },
  {
    "url": "composable/web/language.html",
    "revision": "e4caf189e602b1d0765d4313be2acf28"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "76642325ed75fbfcdb502927f3f195a6"
  },
  {
    "url": "composable/web/online.html",
    "revision": "c8a4054eccde5d79940ce6e99d68e60a"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "cae1b8dbb641bea756516e42d3534d71"
  },
  {
    "url": "composable/web/share.html",
    "revision": "0fa4a9aac2e0d1f570276958865265e8"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "4c5578e6129c0f4cb24a4e487e2ec0bc"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "94e695b65581c7004e2e16ca1f1d384a"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "4a57e1724b5c53823ea67505e0e23027"
  },
  {
    "url": "Examples/index.html",
    "revision": "2400e79a293114cdc043a867f9a04a29"
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
    "revision": "1b055a7e5b2914f89c5ba0a15d8d506c"
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
