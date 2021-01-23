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
    "revision": "20056a1ced2c66bfca20d4602831a0e9"
  },
  {
    "url": "api/axios.api.html",
    "revision": "5d9e3c7e7fe9e0e7251ef2b11299b405"
  },
  {
    "url": "api/core.api.html",
    "revision": "c477a63dab409c68376ce0af9d17b95a"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "2cde334bad0f2bd8365095e74b1cc39b"
  },
  {
    "url": "api/web.api.html",
    "revision": "f24058d2a5c19bc244c02e78b946d620"
  },
  {
    "url": "assets/css/2.styles.84d234d8.css",
    "revision": "aff948461e64d13a49a710ddfa4bb773"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.eb17c356.js",
    "revision": "6b80776e7c491b141d164bf051ddfbf3"
  },
  {
    "url": "assets/js/1.60d36d77.js",
    "revision": "96fba9a9edd3e3375339016ceb2db7af"
  },
  {
    "url": "assets/js/10.9ef0350a.js",
    "revision": "b8bed16c13e4fa6a1abc43cc10298204"
  },
  {
    "url": "assets/js/100.60a90058.js",
    "revision": "a08dcb196923dbaf6fdb7b44ed8a73a5"
  },
  {
    "url": "assets/js/101.fbcb55dc.js",
    "revision": "12f4a56e6490ba5defb40f49900111a9"
  },
  {
    "url": "assets/js/102.39d7a0aa.js",
    "revision": "570a0cbcd8c3e1cc8374a1ba16e4f908"
  },
  {
    "url": "assets/js/103.977b17f9.js",
    "revision": "99c150de3e397790f9f0871c42a0bc09"
  },
  {
    "url": "assets/js/104.20a39529.js",
    "revision": "88693d3252c2cffcd955e5cec18072f7"
  },
  {
    "url": "assets/js/105.e82a53d3.js",
    "revision": "b0815825f3bdaa56ea294f64aca1d41b"
  },
  {
    "url": "assets/js/106.8f0080a9.js",
    "revision": "8796cfbf66d7df27203503e790ce8bd5"
  },
  {
    "url": "assets/js/107.23e5017c.js",
    "revision": "79606101959580e7183a68caedfb3874"
  },
  {
    "url": "assets/js/108.688b1e5f.js",
    "revision": "fb937df7beb56bda3ef622582620f6b4"
  },
  {
    "url": "assets/js/109.14708b40.js",
    "revision": "617df0c0f3c2618f5e6291bbd9d80aaf"
  },
  {
    "url": "assets/js/11.57fa9bed.js",
    "revision": "9765dc1bad80b9c5520865a55c3253db"
  },
  {
    "url": "assets/js/110.b0070a63.js",
    "revision": "ae1bb3f572b080b722f4b1330870d1a3"
  },
  {
    "url": "assets/js/111.39beb021.js",
    "revision": "8c699c8cb357af42aa43158f1f0da976"
  },
  {
    "url": "assets/js/112.ba505276.js",
    "revision": "8a81a095fa0f2af1cc92274a3e3925bc"
  },
  {
    "url": "assets/js/113.4096b954.js",
    "revision": "eca018f60755599cafef43818cbb08bb"
  },
  {
    "url": "assets/js/114.d2461582.js",
    "revision": "c11a2a981d5065706d9137810860c1a9"
  },
  {
    "url": "assets/js/115.16d1ecc8.js",
    "revision": "a657f489b013b37f67835039109ac977"
  },
  {
    "url": "assets/js/116.1793f30d.js",
    "revision": "6e538a877c9526604f08978ab1033d25"
  },
  {
    "url": "assets/js/117.50cac2fa.js",
    "revision": "6dc639eff6e0a059c9630ab73befaac3"
  },
  {
    "url": "assets/js/118.ce19dd19.js",
    "revision": "10ad437163dcda8d63de0526bdee9a65"
  },
  {
    "url": "assets/js/119.76831f36.js",
    "revision": "82c3003f16fa7d84ca7d8b1aa80003d4"
  },
  {
    "url": "assets/js/12.3c29a01d.js",
    "revision": "ad3541484f06bd588d4c71f49a228fd7"
  },
  {
    "url": "assets/js/120.1d3ed1d9.js",
    "revision": "154ad14f7d4cb42215c39a6ee5b20919"
  },
  {
    "url": "assets/js/121.f892f94e.js",
    "revision": "fe92b0472efa391fb25671655fc7217d"
  },
  {
    "url": "assets/js/122.602a39ff.js",
    "revision": "4075f162d78fac7b7c0cb0f7087fe744"
  },
  {
    "url": "assets/js/123.4ba7bc2e.js",
    "revision": "8ee869ecb7e766f098bd6a41a16c4d29"
  },
  {
    "url": "assets/js/124.cde8c656.js",
    "revision": "6204fb2b58713ea264d3ed11c2178dc6"
  },
  {
    "url": "assets/js/125.c2e6f94b.js",
    "revision": "889a512333dcbf3af0d03c2c2b085b6d"
  },
  {
    "url": "assets/js/126.5d893aed.js",
    "revision": "c89283c4c28bdff1a0b1861929a56bc0"
  },
  {
    "url": "assets/js/13.2e6d0713.js",
    "revision": "01ec5fa0bf1495fa11badd9903545be9"
  },
  {
    "url": "assets/js/14.392c7a38.js",
    "revision": "475df430c49fbe54eef657767c8bae86"
  },
  {
    "url": "assets/js/15.91b8eec8.js",
    "revision": "824554da5c3e392a2c51f0181612cd31"
  },
  {
    "url": "assets/js/16.1844646e.js",
    "revision": "d0c61dcd95723b3f7014bb151920ce57"
  },
  {
    "url": "assets/js/17.0392cbcf.js",
    "revision": "b10bf01ca70341c3b62d64810b097664"
  },
  {
    "url": "assets/js/18.0c85986a.js",
    "revision": "90cabd457a140196e752bf51ac13927a"
  },
  {
    "url": "assets/js/19.38784913.js",
    "revision": "7ae7dd3205bbfe1e788f6b84eea07f50"
  },
  {
    "url": "assets/js/20.24c607a6.js",
    "revision": "e985508a27bc3430d1bbcfd624993f32"
  },
  {
    "url": "assets/js/21.67613a75.js",
    "revision": "99872ccecd7d47528b0e1cc6cf3809f0"
  },
  {
    "url": "assets/js/22.1c656d30.js",
    "revision": "6589f55db503f75a0fc89039a4aa7f1f"
  },
  {
    "url": "assets/js/23.2f769fb1.js",
    "revision": "a57eccf63bccca94051ee5608b97a43d"
  },
  {
    "url": "assets/js/24.1095de2d.js",
    "revision": "3ad6cba40dc2c023a9f9060c3bab0ee6"
  },
  {
    "url": "assets/js/25.ef0f3ada.js",
    "revision": "d3bcba4429abd127910e95f5419181c0"
  },
  {
    "url": "assets/js/26.5917d222.js",
    "revision": "dcaed4f0b2868fabf805a6486c07783f"
  },
  {
    "url": "assets/js/27.251cc5eb.js",
    "revision": "6d15406f02cc4a490976a905b4d10044"
  },
  {
    "url": "assets/js/28.fbd38ce3.js",
    "revision": "3e6d792b7db0b860f3cb61884ab32c9c"
  },
  {
    "url": "assets/js/29.270f766a.js",
    "revision": "842cf9ab59a61f2634864f65da28b388"
  },
  {
    "url": "assets/js/30.fe60b59b.js",
    "revision": "4a895afef5da2d9043bfffa2f38658d8"
  },
  {
    "url": "assets/js/31.f5e5eb20.js",
    "revision": "4f40394e08bf8df9f47a7f71b8d37af2"
  },
  {
    "url": "assets/js/32.0e1fa14d.js",
    "revision": "5be71e59f503aeb8d10aad3734a58941"
  },
  {
    "url": "assets/js/33.ab46fa9f.js",
    "revision": "85c9705e675478634b3a5be830c2882c"
  },
  {
    "url": "assets/js/34.820d7775.js",
    "revision": "9c78f2579bb8187f9a6407760b26be92"
  },
  {
    "url": "assets/js/35.350b2b39.js",
    "revision": "326b7d4d1fd280ba67a99cc47bcc0b7e"
  },
  {
    "url": "assets/js/36.fcefcb2c.js",
    "revision": "a4a904947bd515d4549fea9c3aff6036"
  },
  {
    "url": "assets/js/37.3815d59c.js",
    "revision": "b582b61504251d783c76a959c0f19cf4"
  },
  {
    "url": "assets/js/38.7cc542ba.js",
    "revision": "80b209cffbda5e6b6850948114fa863f"
  },
  {
    "url": "assets/js/39.84563734.js",
    "revision": "5efb57b5cabae45bc8d3e0ea10d510df"
  },
  {
    "url": "assets/js/4.4300f3fb.js",
    "revision": "4e136de35def929965f9f205de12fdb1"
  },
  {
    "url": "assets/js/40.78a9e561.js",
    "revision": "4323c2e13b669629abce953d132672ef"
  },
  {
    "url": "assets/js/41.4c7c4468.js",
    "revision": "06d48176ed6b6b767589b13e72ba8c99"
  },
  {
    "url": "assets/js/42.fe51cd4f.js",
    "revision": "9f079653bf4a6e27053a8af700900377"
  },
  {
    "url": "assets/js/43.c1c1dfce.js",
    "revision": "3da16ce85b5ebd0abe412870f3f82be3"
  },
  {
    "url": "assets/js/44.c47f18f0.js",
    "revision": "d26da3208adb72760e7896627d22eb4f"
  },
  {
    "url": "assets/js/45.010580d6.js",
    "revision": "abdaa8912364d4397c07424994372c8f"
  },
  {
    "url": "assets/js/46.fb63a7a0.js",
    "revision": "e55b7c2a40b78a21423c745149a8799a"
  },
  {
    "url": "assets/js/47.b74a304d.js",
    "revision": "5864c6141dea4ea624b540543df709b8"
  },
  {
    "url": "assets/js/48.11e07499.js",
    "revision": "cf3eee62dc07e461e27931858dfcc19e"
  },
  {
    "url": "assets/js/49.b50826af.js",
    "revision": "5bdaa8aaace8555fa7dc77741779ceb9"
  },
  {
    "url": "assets/js/5.7393717f.js",
    "revision": "b9bdd65eec7ebbafd60813f5a07df28f"
  },
  {
    "url": "assets/js/50.eb7ac4ee.js",
    "revision": "637edce33c56a6b4c0993da829e273a9"
  },
  {
    "url": "assets/js/51.94ab8722.js",
    "revision": "8c6af9a3f988e04fc12e5bcba2f1ed6e"
  },
  {
    "url": "assets/js/52.528d06c3.js",
    "revision": "4c6fbedcef6ee5c0819606d3e9defecc"
  },
  {
    "url": "assets/js/53.e78bd1ba.js",
    "revision": "c879f6779b596aa57b1fce3391f7e424"
  },
  {
    "url": "assets/js/54.4c7e6720.js",
    "revision": "c35e51ddb3fb2ed242aa14f562270736"
  },
  {
    "url": "assets/js/55.9d549ef1.js",
    "revision": "403228480cb362d05ea04cd497e50691"
  },
  {
    "url": "assets/js/56.0ee6f46d.js",
    "revision": "60aeca8150186e60ee7b8b1b6c4c6319"
  },
  {
    "url": "assets/js/57.f3f45843.js",
    "revision": "95a372252f13ce736525ed4b1adfa28a"
  },
  {
    "url": "assets/js/58.e7576bbb.js",
    "revision": "642139e065144ea2c5c3ca6ba706e7e8"
  },
  {
    "url": "assets/js/59.843ae03e.js",
    "revision": "ec3c4c8cad57372cc8b7f0a2a42ef059"
  },
  {
    "url": "assets/js/6.71c7f057.js",
    "revision": "e455cd175aafaffcb4638417582a325d"
  },
  {
    "url": "assets/js/60.51b0b4ef.js",
    "revision": "d241d0165b04fd7fc9fc56e4e287bc9f"
  },
  {
    "url": "assets/js/61.0f1dcb8e.js",
    "revision": "ae0746af77972e8d558e7bb79a744286"
  },
  {
    "url": "assets/js/62.8f576808.js",
    "revision": "c9ca223dfc30931dcf9c99e1917a5636"
  },
  {
    "url": "assets/js/63.bc1f1a69.js",
    "revision": "7285ec67f9717d59c90b069b00af1506"
  },
  {
    "url": "assets/js/64.833209cf.js",
    "revision": "618f9ff9df21448f5d6ab5e0ea165f70"
  },
  {
    "url": "assets/js/65.ba8cceaf.js",
    "revision": "7369ee7c0ec50b5e14ddc06af50579e5"
  },
  {
    "url": "assets/js/66.d0b6b075.js",
    "revision": "9d6031225713eb5c5a44be2133486030"
  },
  {
    "url": "assets/js/67.cf3d96f7.js",
    "revision": "523b851ffcfbe4929781a05d0599f744"
  },
  {
    "url": "assets/js/68.2fd5b5fc.js",
    "revision": "858ee1096166008453a07bffe3b71728"
  },
  {
    "url": "assets/js/69.cfd1b277.js",
    "revision": "65159c4941e793a726466d1cecf0cefa"
  },
  {
    "url": "assets/js/7.e609f252.js",
    "revision": "83ec5d6e00ea14fc19dc557d1ab21870"
  },
  {
    "url": "assets/js/70.3a7ef6e5.js",
    "revision": "16a0fe233550ceecdbabc13f5555f329"
  },
  {
    "url": "assets/js/71.dca9e1c5.js",
    "revision": "7ca779ba698a23ee3d674c600aba5725"
  },
  {
    "url": "assets/js/72.26aaf33f.js",
    "revision": "dc1c4ff05249c13f93632a5652e55a22"
  },
  {
    "url": "assets/js/73.c711b2b5.js",
    "revision": "d6ed9d65f68cbad9c9a4f74db072a435"
  },
  {
    "url": "assets/js/74.d9696618.js",
    "revision": "ba6fafcda9fc46caea73e536a63c09e3"
  },
  {
    "url": "assets/js/75.25d0fda7.js",
    "revision": "e670db225afe082b1e11af85a2aea5d6"
  },
  {
    "url": "assets/js/76.0b94d94d.js",
    "revision": "41d8134284fbb3daa993be05e116a329"
  },
  {
    "url": "assets/js/77.66863ef0.js",
    "revision": "6a0ce92ccb03a07b52c257af090ab3df"
  },
  {
    "url": "assets/js/78.1f85ea99.js",
    "revision": "bf1bd6759749d8c40ab6a5e7f33d6cb2"
  },
  {
    "url": "assets/js/79.bb03d70b.js",
    "revision": "74beabd6f3a54c4a065a588eba003426"
  },
  {
    "url": "assets/js/8.d0b76c96.js",
    "revision": "a11c953e20bfe844a814d17b9eb7dd69"
  },
  {
    "url": "assets/js/80.b279ce2b.js",
    "revision": "71df3f2b653f6a9d62c37c2369102d3f"
  },
  {
    "url": "assets/js/81.c652bda3.js",
    "revision": "3e514a768a4db020e9c0a805f5ca45d9"
  },
  {
    "url": "assets/js/82.15fd2aae.js",
    "revision": "9a1a62f33169134e184cbaa36b387627"
  },
  {
    "url": "assets/js/83.699aed48.js",
    "revision": "656ea0b827d3532c71b1a38345e9886c"
  },
  {
    "url": "assets/js/84.11aa0202.js",
    "revision": "7c5f28d7ba45f17d388cdc64b34325e0"
  },
  {
    "url": "assets/js/85.2b3fe274.js",
    "revision": "80a5a5ad5833b97add90cbb5997ff31c"
  },
  {
    "url": "assets/js/86.b4a34215.js",
    "revision": "954cb94a657feb9be8fde253b67d5756"
  },
  {
    "url": "assets/js/87.555fcda0.js",
    "revision": "dee0d01db7a46d817fc4e36f92c95144"
  },
  {
    "url": "assets/js/88.a8774f99.js",
    "revision": "802fbfdf2130cffb2614a94bd2d48d10"
  },
  {
    "url": "assets/js/89.a48176a8.js",
    "revision": "6c2ed0a28638b10cc63b0c6bfe04312d"
  },
  {
    "url": "assets/js/9.174d5762.js",
    "revision": "164a58bba9941e6d4bd0dfe9d6d0b9a6"
  },
  {
    "url": "assets/js/90.efa363b5.js",
    "revision": "6ec9b2b6c3f9a592fa7fa67de0737f55"
  },
  {
    "url": "assets/js/91.68a7c935.js",
    "revision": "074dce02f2dee236c6cc46865cb07937"
  },
  {
    "url": "assets/js/92.115d5d3e.js",
    "revision": "241348b62a4721dc7decb6dc799040ce"
  },
  {
    "url": "assets/js/93.bf6ed896.js",
    "revision": "efcebd72622778aa9cd469bbbd23d828"
  },
  {
    "url": "assets/js/94.d040c14b.js",
    "revision": "7fb9f1c126c47c3ecf8a23396b4247b6"
  },
  {
    "url": "assets/js/95.268fe02c.js",
    "revision": "c4e927506c1f5793b236d45727ce0251"
  },
  {
    "url": "assets/js/96.05365520.js",
    "revision": "a62992661f4d37344b6a19ce1d04fe19"
  },
  {
    "url": "assets/js/97.ba1cdffa.js",
    "revision": "0256b9148f2ada9e9ea7f6f7c771088a"
  },
  {
    "url": "assets/js/98.b6dd63be.js",
    "revision": "82513a21620d9ed67b65e289fe43c7f5"
  },
  {
    "url": "assets/js/99.f1663f18.js",
    "revision": "471ff83e1e98de0cda2e4a36fbdf1d5c"
  },
  {
    "url": "assets/js/app.e197248e.js",
    "revision": "35dad247071448e1aa28afc81a901d2e"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "e9bb552b0461f043c8f6b0678b535868"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "358732d12f8adfe487c4743eb446c6f2"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "6fffb713acd519d377ec7a7119de72a9"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "181e1ad858527b135a04b96e7e842634"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "8f0e5ee9ebfedddbc97c51694a39177a"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "c29c637426debdc505c6ff12d64a0765"
  },
  {
    "url": "composable/date/now.html",
    "revision": "0b9baba31026de6e07ade698a772ec6a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "7889ec80679d3e5a9cc7ab4ceb46bf88"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "ba86cf0d7e63e44d10ad8a71f1a5da2b"
  },
  {
    "url": "composable/event/event.html",
    "revision": "28bc0f2672eadde5f7517adc88432765"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "1cb6355385078c95a0b8427c02caab4d"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "d1e6cb2a562fe485b1fc3325b356c30e"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "7d3e3bfc11aa534448e9e90725ebc66b"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "f97e2bf99f3b7cbe795f031fea67b2a7"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "b3dbc1623b3082398187fbbedf89fb3f"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "e817f6fb6dedaf38ce649e81ebc29af5"
  },
  {
    "url": "composable/format/format.html",
    "revision": "d357db2a17bcb0815d82e0633ac5a545"
  },
  {
    "url": "composable/format/path.html",
    "revision": "feba201debe6166a88086a03c5108eba"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "a6d7ac44dfc275ced154c5e2903f2619"
  },
  {
    "url": "composable/index.html",
    "revision": "b3146d771e9220d2e4600d6c82e97d0f"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "468daadf2e5d353986644cfe92fa7d20"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "1f91a71a9d456929e1255f1551e0e86e"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "7928c85ea04e7f8879d529cdbc071107"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "63a3d7127d34ba35b9906031fd40388f"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "a803b7cb58701615e135bbecce25a043"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "9f69fe85229c7d69a36c06ce9d73490a"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "973315099a968bc2dfad6b848685317c"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "81e9705f5b89a2e19df189c2d8903d5f"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "6b690890befd92acc170b8eeffd32c36"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "405b640bf282b7605e8d013b6635988b"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "f07368a9e54e555e048241a1b8221680"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "973b6dd3ca4692647b67f37e7a11cce5"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "8d9312fec6a6677b104a9d52cb3217d3"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "26a4ab70b9120ccf9b993d34f6ccd616"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "3802af1dd62a653a7ed50c8f8339aa11"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "5c38df773299e03075f009b59ac06d35"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "4b23f4531129dc73f78aae139286717e"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "23acc4eead0aef7b34ac93c2bf0978d0"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "87948c40dcae58cabb331c56f769dd32"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "bad9d656faf39c9351b8bb052e402429"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "eb2b96964003c02b188f8d21ef627a5e"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "c69f1193d4113c7f46cd53e8c8d27979"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "94ee9a34d90bea2cd8aaab16a2ba9405"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "40baadb862dee3e8c34bd53a48c43316"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "a823d583cd26f69de5d8dfc56dfcc94c"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "911bd38f8eb9524dda92718f8ac17b59"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "057f64d72af057eacba51fd20aa02625"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "0f2386e01ca9ec4f9c189afce055f1e8"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "9afd9c7a05956b0ea5813e8991f62d47"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "7a80c2fc0073a394e9bc8917903b905f"
  },
  {
    "url": "composable/web/language.html",
    "revision": "a44db6a7a6919992697c795aa940216d"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "64bf2fa3afdfd4b8492dae0ec58bd01f"
  },
  {
    "url": "composable/web/online.html",
    "revision": "85c6528b7c64f8d3dd3f6194130f5f2c"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "28bb818a090d05f4181c4329ce1cda08"
  },
  {
    "url": "composable/web/share.html",
    "revision": "33af0a6fe3c0790419809f8374180657"
  },
  {
    "url": "composable/web/timeout.html",
    "revision": "dab975a601fef62adf5100bcb175c54b"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "579c46dd7331e949db7848e9e9c2a29d"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "c4ff43aa2c4e577faef0ed00f3f9168d"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "c80ffb4ceb82fef73550d20d0fc8ca50"
  },
  {
    "url": "Examples/index.html",
    "revision": "dbf8e59a2e2fc7326c7c1d8a1c16bc9e"
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
    "revision": "5345356b42c6ac03b163d320b89e76ee"
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
