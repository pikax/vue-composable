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
    "revision": "e37730bc8cad653572418a7206b40470"
  },
  {
    "url": "api/axios.api.html",
    "revision": "e9b33d50881f09d253a6ff36a018d78e"
  },
  {
    "url": "api/core.api.html",
    "revision": "84db773520a1c9e7576bb1bfeef37849"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "6b5d994c02110b4af4e5e68aa74d4b1a"
  },
  {
    "url": "api/web.api.html",
    "revision": "16add8156abafb7d246807a859af887a"
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
    "url": "assets/js/1.5e4c0141.js",
    "revision": "83d521a42ec853dabc191848f505c576"
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
    "url": "assets/js/53.74a6135d.js",
    "revision": "61218a0f6ec51dc37ac01ab095db1551"
  },
  {
    "url": "assets/js/54.754d86a4.js",
    "revision": "88d8734d501e24e0f2f90734bcf71243"
  },
  {
    "url": "assets/js/55.b4c41ca0.js",
    "revision": "753fae1e9890b9461a49117d576d9f45"
  },
  {
    "url": "assets/js/56.b8a61922.js",
    "revision": "b1e1dbf666fdd7a36b53ecf1d7eac946"
  },
  {
    "url": "assets/js/57.8b20188a.js",
    "revision": "1b4c149e864daa100831ea749c14b777"
  },
  {
    "url": "assets/js/58.f35bcf07.js",
    "revision": "cffcd109d964274ab1d8b79204b349eb"
  },
  {
    "url": "assets/js/59.b198b6d7.js",
    "revision": "859fb59dfdbc27dc91f5c4680f42b977"
  },
  {
    "url": "assets/js/6.9d3e5868.js",
    "revision": "b819afb266d28ae8e8a166376ce2976d"
  },
  {
    "url": "assets/js/60.5e54b37e.js",
    "revision": "6a981d813a9563d7b98877f55e846ce9"
  },
  {
    "url": "assets/js/61.ed2180b7.js",
    "revision": "20c173c68d45265d46cb1893bd46dc5c"
  },
  {
    "url": "assets/js/62.3fad0123.js",
    "revision": "8926d4c53919e62779d357271b6a4c68"
  },
  {
    "url": "assets/js/63.024efeb9.js",
    "revision": "cbf827c0143a56d0a930835179aacdef"
  },
  {
    "url": "assets/js/64.1ed56a45.js",
    "revision": "33538de7a7ff2d208333e72f4b83c210"
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
    "url": "assets/js/68.d4bb2ab5.js",
    "revision": "161dd4080a70551805d2bcdd0c99f2bb"
  },
  {
    "url": "assets/js/69.34d50704.js",
    "revision": "705591e29504f677558f7fe4333c1260"
  },
  {
    "url": "assets/js/7.556b50eb.js",
    "revision": "0b7c77560b4e17b3a7c7ef6dbcc5c069"
  },
  {
    "url": "assets/js/70.1dd7e881.js",
    "revision": "be26fe1965df14dbc985dc77fa43f1f3"
  },
  {
    "url": "assets/js/71.8a7a7b3e.js",
    "revision": "ad90d08273eef64a72ecb307ae24fcbd"
  },
  {
    "url": "assets/js/72.1618550e.js",
    "revision": "825904cfdffc6066aee843bcead51cc1"
  },
  {
    "url": "assets/js/73.0b44de83.js",
    "revision": "3ad8bf6f265e7e73a924cb4e471ec394"
  },
  {
    "url": "assets/js/74.d2601fde.js",
    "revision": "27f9e0b98d2dfa19c2548916f2ec7c54"
  },
  {
    "url": "assets/js/75.eabfb38f.js",
    "revision": "6aa210a5e61f637452861221c590f268"
  },
  {
    "url": "assets/js/76.2f8a16ba.js",
    "revision": "ce143354c98aa9c0e30e2515d57ed5bf"
  },
  {
    "url": "assets/js/77.7bc287a5.js",
    "revision": "1a7ea4d5ed302efd120a5eebca7028ed"
  },
  {
    "url": "assets/js/78.d1720224.js",
    "revision": "60422dcea43cad11415f30d6a2407a8c"
  },
  {
    "url": "assets/js/79.b742013b.js",
    "revision": "18faed7bb9eb38c005af6c04ede6dbda"
  },
  {
    "url": "assets/js/8.a21d323d.js",
    "revision": "2a704e5fd27c771f8ec94b924200c82a"
  },
  {
    "url": "assets/js/80.987c500c.js",
    "revision": "e1db919df6836e17a2ebbb2e4aa5de94"
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
    "url": "assets/js/app.0116cb6b.js",
    "revision": "9b373cadeb4f4975b33efd26ba1b3566"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "9f9e4146557abb4e2e5be2fe32b51402"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "8f1c86958d45fc8e59053e84a4a8391f"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "35d5b9751257661fc1866019c94e4dcd"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "bb9753c6986ffbd836de89044eb6b9ba"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "193f31ca7a132006a19fe32307cc73bd"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "e5c8bb7df89dce75294407d8df34814d"
  },
  {
    "url": "composable/date/now.html",
    "revision": "8f9bf9c03423ec1652321f64a2bb9c81"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "b158f386c9bf77ab889339ecff1f381a"
  },
  {
    "url": "composable/event/event.html",
    "revision": "0b5cf0fe2fb757e6d6536b79be42f94f"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "a118920bb3af42a7ab16b43277942f26"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "b1c78289ebcdd7157e222ec371d72e89"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "e37124e6eb21ce94e21d4ba230deff12"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "ef20964d23cde798dffbd9dd9ea8b8cc"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "30c33b27a83f2c0af1ef931b739ef570"
  },
  {
    "url": "composable/format/format.html",
    "revision": "72c723da9be96bc249fceab793f1bac6"
  },
  {
    "url": "composable/format/path.html",
    "revision": "e45b29151857bb5284aec55c066682e7"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "ebcf9cb9dba81d83ea9a1a97e0393e66"
  },
  {
    "url": "composable/index.html",
    "revision": "2fb72e622b3e5431a3ac00c6887cc895"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "d88fecd4ff66470acdbfa32a1d2c093c"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "884c0e835631b4c0beefb890a9078bb9"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "fa16de18c2666ca1d9e0c3e2987aed03"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "f54eab5087e2615d23a01ecd1215a54d"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "4430879ead89772efe29781d575c5a03"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "cf8f68370682fc1d67358d3acfb1c4db"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "a8c2487143b26d6c8eb5f2fe88d5780e"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "0e9fc89599efd35a303ceb85068cb8f4"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b87001c777e1c8c2cfd8d3ae51f18e83"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "be3acebf8527bbedb503604a673488e0"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "757efeca72560df75d14088a953d98ba"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "82fc609b403182c2334ec1bf90ba96f6"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "4ecf883165c00809785e7b36c3056804"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "e5654429332d6efd0c2894f29769da61"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "12b6ffd10871d8aeeb603a3d75e67db0"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "25f1a427ea3174876e393d14f6e5cc3c"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "4ccc0a5a8a0dd64b61b36fa3255f74bb"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "a07c70ed41128c0de06ebfd007197d9c"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "92415511cca816b7172bcf776acc38af"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "a9e03aac13e42ed3ffc180c0f30cb293"
  },
  {
    "url": "composable/web/language.html",
    "revision": "decf965a93c79dd4d90cde821a33e29f"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "501b67c255c4c1b46215052bacda325c"
  },
  {
    "url": "composable/web/online.html",
    "revision": "ecb37387d9b206c8d69523a352ac3546"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "5230c99ecbd2a2d61ad8a3c4abf2ee13"
  },
  {
    "url": "composable/web/share.html",
    "revision": "f088bf21a16e4f68eb129cd805a6adab"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "89d651152ef53a7ff8957e1766d95beb"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "fdfa556949102aebf16aeced3c0dac90"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "df6098a054efb0e373050e29a6e509b6"
  },
  {
    "url": "Examples/index.html",
    "revision": "cd7ef4acb7e785f745f8fb58205c34ed"
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
    "revision": "96c3a5bd488bda2a14d396fa92ac625d"
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
