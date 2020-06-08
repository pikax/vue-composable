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
    "revision": "6eb31614d16f231ac77d44dcb6670f0b"
  },
  {
    "url": "api/axios.api.html",
    "revision": "d44db510b536158bece45f19f7d90ddb"
  },
  {
    "url": "api/core.api.html",
    "revision": "7e331947e6793d0c9e363841a64fabf9"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "19b71388aabd8a0ae35d638412c4f91b"
  },
  {
    "url": "api/web.api.html",
    "revision": "123b717ab5ed86f73fe89b11542110f7"
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
    "url": "assets/js/1.d2e90a3b.js",
    "revision": "d7be5cb56ef670d63a900788e0f8078b"
  },
  {
    "url": "assets/js/10.1c00abb9.js",
    "revision": "f326258ab682104c97ba7267ee066c79"
  },
  {
    "url": "assets/js/100.9b6fc86d.js",
    "revision": "33cc505c9f05f996fc033a9bd6451656"
  },
  {
    "url": "assets/js/101.74fcb5f1.js",
    "revision": "c0bbbd6ac23072ac9521599d4c46f024"
  },
  {
    "url": "assets/js/102.9a18c32b.js",
    "revision": "f360450dfc484762f7578fe8fd4a1b62"
  },
  {
    "url": "assets/js/103.211f414f.js",
    "revision": "0e97072227f73af50181753b1188d2f9"
  },
  {
    "url": "assets/js/104.045e0adc.js",
    "revision": "bc478afed651667b939471ee37735a49"
  },
  {
    "url": "assets/js/11.e27980ff.js",
    "revision": "fdd2d529dfba776d1322f05153f647c8"
  },
  {
    "url": "assets/js/12.6e120a7b.js",
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
    "url": "assets/js/22.297b42df.js",
    "revision": "a1a7730c1809772bfb0874aea5804fd8"
  },
  {
    "url": "assets/js/23.701ef63b.js",
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
    "url": "assets/js/4.0bb2b256.js",
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
    "url": "assets/js/42.e0c7491d.js",
    "revision": "3ad2923350040659f157ce6beab76227"
  },
  {
    "url": "assets/js/43.9030e258.js",
    "revision": "af703963f55917a2a9b8fe8570f7d019"
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
    "url": "assets/js/47.ac1195bf.js",
    "revision": "abbe4bd03b5e24a8f48f24d19d86dc1d"
  },
  {
    "url": "assets/js/48.6a537562.js",
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
    "url": "assets/js/51.5a4012e2.js",
    "revision": "acc2b09029003fd6297abba144fe20cb"
  },
  {
    "url": "assets/js/52.698edbd2.js",
    "revision": "efb4c84018c5caa687ceebe2a20f1ae5"
  },
  {
    "url": "assets/js/53.74a6135d.js",
    "revision": "61218a0f6ec51dc37ac01ab095db1551"
  },
  {
    "url": "assets/js/54.2899ca74.js",
    "revision": "3189d736922b1b32f3bafbbfba3b8a0d"
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
    "url": "assets/js/68.6bbd5cab.js",
    "revision": "1fff5deac5c5461941c1222ce34b1455"
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
    "url": "assets/js/79.7f3c0392.js",
    "revision": "eef090fbd71d88f372165aa71a233f09"
  },
  {
    "url": "assets/js/8.a21d323d.js",
    "revision": "2a704e5fd27c771f8ec94b924200c82a"
  },
  {
    "url": "assets/js/80.044db163.js",
    "revision": "11cf30ab9f6621068d5014d235cfb8f8"
  },
  {
    "url": "assets/js/81.e10082f6.js",
    "revision": "49352fec8d3279838b056afca289d609"
  },
  {
    "url": "assets/js/82.48e0344f.js",
    "revision": "b536f7fb861be4252527773e44e9cb18"
  },
  {
    "url": "assets/js/83.127641e0.js",
    "revision": "484de1e070a6fe58eb60da2c5d690d75"
  },
  {
    "url": "assets/js/84.2b095bad.js",
    "revision": "66b12139a99b9a0df83d5ed584c49717"
  },
  {
    "url": "assets/js/85.329a2ecf.js",
    "revision": "2a3b930c93cb297ebd230dcc55895832"
  },
  {
    "url": "assets/js/86.7b36fbed.js",
    "revision": "04bff04597297e519c0694eb9147a129"
  },
  {
    "url": "assets/js/87.f4e36759.js",
    "revision": "18e05b9c2a259b90c0d60af3a13c72e2"
  },
  {
    "url": "assets/js/88.f54a6928.js",
    "revision": "37b8d64c366b24a906f79c78aa7eaffa"
  },
  {
    "url": "assets/js/89.3a7583ac.js",
    "revision": "23e99fd5495dd94e5ed83af9f3af52a5"
  },
  {
    "url": "assets/js/9.1109e34b.js",
    "revision": "5a8100529a3acbcae48a12d7c01e13a8"
  },
  {
    "url": "assets/js/90.fa4ac0fd.js",
    "revision": "98f15e908926f9f56c4489f0c6f7121f"
  },
  {
    "url": "assets/js/91.6d968779.js",
    "revision": "f4c8728304485647b53016dc61e1ac8a"
  },
  {
    "url": "assets/js/92.9a289d31.js",
    "revision": "fb324c1aa8886296614b13e2005bf176"
  },
  {
    "url": "assets/js/93.36abc7cf.js",
    "revision": "58bbd57537add8b1e7a0da940ddfdd77"
  },
  {
    "url": "assets/js/94.a57a244f.js",
    "revision": "59acdb7e79e70849c958b444a97fa236"
  },
  {
    "url": "assets/js/95.d3f649d8.js",
    "revision": "d29f051b234350c6cf2b5dfd2b9366c8"
  },
  {
    "url": "assets/js/96.c6c8a22e.js",
    "revision": "e8326c9d714a9ef94e584731c1709e88"
  },
  {
    "url": "assets/js/97.3b11238b.js",
    "revision": "aeaeb4201fce31473c15a5af03d397b5"
  },
  {
    "url": "assets/js/98.581e18c9.js",
    "revision": "bdb595bc98853800d0978bf386f45bee"
  },
  {
    "url": "assets/js/99.14ced597.js",
    "revision": "677258a88d7c7c6d5640b7d339fb7b6b"
  },
  {
    "url": "assets/js/app.35aa688e.js",
    "revision": "fd87088a1ce69a7de8920643c565f8d0"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "8fc523721af16afa5bbba0a6f2b5d885"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "6ffb88ac2adff5465215ff1d9362282e"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "229ed7fc648edbb11bffe10022fb9686"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "50e6cf3b024541a51d6fe13f72bd0081"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "a6d657d0db7c27b50b0cd5210e4cb41f"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "0d4b2e946fe7876285c7b34e18dcd0bf"
  },
  {
    "url": "composable/date/now.html",
    "revision": "fcb894cc9df312a78dbbcab643270620"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "b26a960ee3fc21314b3a6681c5b2312e"
  },
  {
    "url": "composable/event/event.html",
    "revision": "13066cdf2f4a540098f44de6aaafa7ee"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "0d40e93d4e30a1173ce7d1f106ff73cd"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "fb4ea3822536c349ef5280ec36923606"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "2b900dba98aeca1dfbd848e1a7257abf"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "327fc1c29fa7405c99de8d7691652332"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "3ec8386d21c3688b79862bb5128b2b58"
  },
  {
    "url": "composable/format/format.html",
    "revision": "3ef354f0222a6ff5996623d4cfc1753c"
  },
  {
    "url": "composable/format/path.html",
    "revision": "885d8ca0f3d562e4312b8cc14d4e90c2"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "057007cde3bf139d6629259490328685"
  },
  {
    "url": "composable/index.html",
    "revision": "e1d59770c97f27306737c9b4c24d23f4"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "8344d460b98d1d096983278e2c700611"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "01b442a550c06a64dd9a4842e8a9405a"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "63a9b82da49c65978cf7af908bc1af90"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "ee2d63272a2c85eb94703d0e28bc9583"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "1745f7e8992801662ed3c9b2d33518c0"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "c19e956cfef8834e3a6d125465e9c1ed"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "8ff58f6a6b7bce6a39b0c8ebbc1d54b7"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "0b15ff4b9fe0568049bf27f0956949ad"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "1df7d403d1c80c4ff1c742018c0e96a7"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "1500ab7821022eb0aac11c73503446aa"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "a82ab50f28ff8f4d89b03d40c58a971b"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "ae7e622116b19db4a2e1ee6f6b4e1e02"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "fd71d78c422fd72adbb23d481a3789fa"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "2a958f365e2286bcd5ab0e29e638db46"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "b49b7598c296d8f8385c2a3fb673b873"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "15b1ded228e512cb1318978eb12f3929"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "a15fba9d009c495465a0d72212a8fdee"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "50df3034952ee39102285a5fa74c60e4"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "6b441ca9580ab8efb71fab2328b93922"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "6d64ba107861a082e0aeb8b63b53826b"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "59702fd4ff1b78c4809909ff513e34db"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "510ac1b749c50913958f6971e5023f90"
  },
  {
    "url": "composable/web/language.html",
    "revision": "f205e733a9d5618b5cc4fb8356903010"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "2fd083af7bbc651590277a88c52b813f"
  },
  {
    "url": "composable/web/online.html",
    "revision": "828ed6a7a17fe33eebb6b3c06a0d9fc9"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "b13baa5aea08609f30dbce30f698bae9"
  },
  {
    "url": "composable/web/share.html",
    "revision": "200284519e1bef8b2b25fd60fa97036c"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "81cadde2a060cb411f3fe2b583b7f2ce"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "69d9ac904f59ecd0b57da80531d08788"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "1e892806732e89cb095445bce79e54a9"
  },
  {
    "url": "Examples/index.html",
    "revision": "dbc59165e5509f23b6844e7b92f3e587"
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
    "revision": "5fddf2113dbfae2fe6f9f7a57c77fd6d"
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
