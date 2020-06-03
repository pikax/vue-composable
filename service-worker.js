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
    "revision": "73062e0e64d61e2e2e5099051408f7f5"
  },
  {
    "url": "api/axios.api.html",
    "revision": "d3960ccd8623fbe05e2d8fa6662ab738"
  },
  {
    "url": "api/core.api.html",
    "revision": "09dced873e690352f9a98f7eb82a9836"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "422f904c3ee20bc5684091efd841c8c3"
  },
  {
    "url": "api/web.api.html",
    "revision": "95e607d3f71076e0d1e6ba37a280efe8"
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
    "url": "assets/js/1.f72fb79e.js",
    "revision": "da3c4334bdc1be028990d1c2070770e2"
  },
  {
    "url": "assets/js/10.1c00abb9.js",
    "revision": "f326258ab682104c97ba7267ee066c79"
  },
  {
    "url": "assets/js/100.4a662319.js",
    "revision": "3f71d911249f2e482102fb530750fca3"
  },
  {
    "url": "assets/js/101.91df1b42.js",
    "revision": "0722cab78f86f0ff5a36caa6a557f67f"
  },
  {
    "url": "assets/js/102.bf9504e6.js",
    "revision": "8933e85e6e1afc05e9beb1493ce8592a"
  },
  {
    "url": "assets/js/103.a2e25f5b.js",
    "revision": "84e707e2170700be772f9b56ecc55043"
  },
  {
    "url": "assets/js/11.772bb5d6.js",
    "revision": "4101073083b202dabb5860f5d816a892"
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
    "url": "assets/js/43.bb827bea.js",
    "revision": "9d38f88eecf48cd42a5eb8a8e88cc3ba"
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
    "url": "assets/js/51.16c73f05.js",
    "revision": "5a634b216672fb30a0cd7b4dcc6d77a6"
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
    "url": "assets/js/54.590bf84d.js",
    "revision": "19fe7230e87dc8e358162676e92cb80e"
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
    "url": "assets/js/77.cf098204.js",
    "revision": "d27dca030d0fc64df2481d18f85f9ede"
  },
  {
    "url": "assets/js/78.077f6418.js",
    "revision": "47cc99f1463f8d2e991c6633a5cb9d6a"
  },
  {
    "url": "assets/js/79.773023ac.js",
    "revision": "617ee70c18d181046437143c2c5c5c86"
  },
  {
    "url": "assets/js/8.a21d323d.js",
    "revision": "2a704e5fd27c771f8ec94b924200c82a"
  },
  {
    "url": "assets/js/80.90dc656a.js",
    "revision": "7d71c758a60b1ee2dc2671adfd7d9d54"
  },
  {
    "url": "assets/js/81.554c6d59.js",
    "revision": "a9023f293c4b1f80dc45d5f2422aadd7"
  },
  {
    "url": "assets/js/82.2ebef105.js",
    "revision": "99f79e4f70fc133071d1e6646c159e2f"
  },
  {
    "url": "assets/js/83.e13bbb16.js",
    "revision": "bbda61ca784648c6b8caff00237104b5"
  },
  {
    "url": "assets/js/84.820036d8.js",
    "revision": "3e185c15a42edbd42bd1a1e8f6e0c8e9"
  },
  {
    "url": "assets/js/85.8c89cc04.js",
    "revision": "0831371f429d785728053d22b9191e83"
  },
  {
    "url": "assets/js/86.5e0276ad.js",
    "revision": "c427d5e9191ff0c86f9f426f45496f44"
  },
  {
    "url": "assets/js/87.f5c3937a.js",
    "revision": "7ac92e30c1da80fa9c95dc7ab9ca6846"
  },
  {
    "url": "assets/js/88.64fd6dbb.js",
    "revision": "156b66b9f9f3f5e73501e74556137050"
  },
  {
    "url": "assets/js/89.2c893541.js",
    "revision": "4d4af3476924745876d0ce26f333318c"
  },
  {
    "url": "assets/js/9.1109e34b.js",
    "revision": "5a8100529a3acbcae48a12d7c01e13a8"
  },
  {
    "url": "assets/js/90.1ecb3c4e.js",
    "revision": "0a5681930f87c48e5b38f14417f028cd"
  },
  {
    "url": "assets/js/91.c7d43cbf.js",
    "revision": "0c73cf98601868b08f8d826c33d8c00d"
  },
  {
    "url": "assets/js/92.0aff12a5.js",
    "revision": "72d4634f9f374f958fff632296b3d305"
  },
  {
    "url": "assets/js/93.d11f713b.js",
    "revision": "daba54bd4999f5cc8067a27a0f7d10e7"
  },
  {
    "url": "assets/js/94.55adced4.js",
    "revision": "8eb689f789af5851da17c3985439da8c"
  },
  {
    "url": "assets/js/95.c56b5610.js",
    "revision": "0193b1ec19c1014113299f19df7eabee"
  },
  {
    "url": "assets/js/96.1b5ee086.js",
    "revision": "c70031c87ccaa89201b13a1fff610f2c"
  },
  {
    "url": "assets/js/97.2ab676c7.js",
    "revision": "c65971e7f8833cfad3393291442b256d"
  },
  {
    "url": "assets/js/98.36dcccdf.js",
    "revision": "2b36e17cf7ffec9ea718eaf71b569497"
  },
  {
    "url": "assets/js/99.a2d33272.js",
    "revision": "0fbe8e0acaf8accbee21b1df57c5c091"
  },
  {
    "url": "assets/js/app.920c002c.js",
    "revision": "473f5432d3d9e260a5b8284f0f6b6c67"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "ddbf49792354a630ac83e75617da3df8"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "9079d77be0a1f7d1ff27650e1ee5edb8"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "9200fa4dc09025ba25cd35167c589c08"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "abe4f83add21e0bccb0527347ae89a59"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "118814ec975e514a92cf646943b12b57"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "4e091e7d3e7d6faa29d545aecfaa258a"
  },
  {
    "url": "composable/date/now.html",
    "revision": "f00574386a7a974fcd61c7d73e33019f"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "5fe8a10d61dd957cf0a050f23b80b25c"
  },
  {
    "url": "composable/event/event.html",
    "revision": "7f06094f4e8962f4e303d02f7b268133"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "90d0d7fc07b0d5ada6fc8c0f8fe27a91"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "e4745cf6d01ab26092a9e734344918ca"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "2af8bb739fd9e1d85d326bc914ce3b82"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "c8ceda8ca7f6b7270aca500584655d1c"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "2cf0fe0cf572cb25bdab56c7276d7433"
  },
  {
    "url": "composable/format/format.html",
    "revision": "442d92630d641e9cbc5ef06a4743bc83"
  },
  {
    "url": "composable/format/path.html",
    "revision": "6c735e368d1c696deefdc6a8d54ad052"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "89f74520cb42329c7f9030bb9942601e"
  },
  {
    "url": "composable/index.html",
    "revision": "f92396e7cf6a688dd85848ef95fecdbe"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "55c9be9cd940c8fee082b9809c5a0aff"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "563a2dd3a00ec143eac1674d90c2bfb8"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "fd635e65dcf87db8b45b7d0eb64e4bb7"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "ca994f9eb2e03c709253e89dc96ea792"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "c45e7c6cf59df72e7ca0d27a2c73a179"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "a145b0690f7670a7c58b7e4b792cfb6d"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "9615febec66165cad3f74ca63676580e"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "9fe8a694fd145a142db3165d7fe3113a"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fa17573ef3ab044fd63046b9d3c19be9"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "da906744169267ea3f8776fc25fe822f"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "7193fb517e02472d6d5b900cab4b89c7"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "ae6e43b742bcb3ab2663f69f393c77a7"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "cb4f2c405561d6113bdd99c1a66586cc"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "08c225becb683dbb906f5a99c063ed6d"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "e9605bbfdfce72066706912e8506807e"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "f679e572736995b5e9b291d0efce18ae"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "d5ff5b94417d604267ef517e4c8976e7"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "1ec86f2de70863e2ae664f4f0fb5f012"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "2baa3df6c4b93500047d1574d26ee8ec"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "c5942dea50b14d9a722bf1a56cc40dfd"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "ea580acb5bebd919d3768d01dcc74352"
  },
  {
    "url": "composable/web/language.html",
    "revision": "543864895b8755e4bdecb677a30389b7"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "43087f1c1c54e193a2f4794b5a1adb99"
  },
  {
    "url": "composable/web/online.html",
    "revision": "e7598a13d3faf99c9f5186b488acf365"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "6e000531e41a7d94a4eb22248f7c6186"
  },
  {
    "url": "composable/web/share.html",
    "revision": "00bf617da1b37aa175053d870e10e26b"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "8863af7ba1b1866c2df69a80b9e2ef61"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "6f6754fb47fca391db3c0d27c90c3c10"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "5fce4d8e5172dd9864d5c48c10ec8a3a"
  },
  {
    "url": "Examples/index.html",
    "revision": "aa870f8c0cc364311452fa5551dad0fa"
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
    "revision": "ccdfdb10e39593eda57c3399b2cd1734"
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
