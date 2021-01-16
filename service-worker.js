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
    "revision": "8cb51df580f5d4cc35e8fcfde3e3c4f0"
  },
  {
    "url": "api/axios.api.html",
    "revision": "1c8cc5f4dba69843734b4c69e93cc590"
  },
  {
    "url": "api/core.api.html",
    "revision": "1975b6146798dcf603e4c2cf5429886b"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "398206d736966c7e80c2d5264f223983"
  },
  {
    "url": "api/web.api.html",
    "revision": "25c961f2f0c8ace4d38f56fec12c7374"
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
    "url": "assets/js/1.fb12b434.js",
    "revision": "5b14ab5c978543e27ff83b4a872f5a52"
  },
  {
    "url": "assets/js/10.34d5b4fe.js",
    "revision": "a27da5518868405106d3c6556fd810cc"
  },
  {
    "url": "assets/js/100.ad9d3b0c.js",
    "revision": "11f355635e669039ec7f50b3b79b3342"
  },
  {
    "url": "assets/js/101.60ba23e2.js",
    "revision": "4782d1f02bbe81bde7350147ff3bb25f"
  },
  {
    "url": "assets/js/102.50a77957.js",
    "revision": "9ce64df53d341e1245f61918c00511b0"
  },
  {
    "url": "assets/js/103.bbd7aca7.js",
    "revision": "8d45ae5545e9e3c441a37468add52d97"
  },
  {
    "url": "assets/js/104.8056d7c7.js",
    "revision": "2739ef8b05b43fb30bde13769b342dda"
  },
  {
    "url": "assets/js/105.e458aea1.js",
    "revision": "0bf740cda9cc7561ef23ba63c0669f80"
  },
  {
    "url": "assets/js/106.8a28bb87.js",
    "revision": "38f307f14453b4a253b9f5e38ac17005"
  },
  {
    "url": "assets/js/107.9f81fc59.js",
    "revision": "6114dac069ef1edaf7b1b288b187ac67"
  },
  {
    "url": "assets/js/108.da702b65.js",
    "revision": "a69c86e3f15081a3633b2926eecf838e"
  },
  {
    "url": "assets/js/109.f079e612.js",
    "revision": "45c95faa1063863661ececc3710886d3"
  },
  {
    "url": "assets/js/11.57fa9bed.js",
    "revision": "9765dc1bad80b9c5520865a55c3253db"
  },
  {
    "url": "assets/js/110.49caa5db.js",
    "revision": "658d882e7dd2a0d82850c668204c94fc"
  },
  {
    "url": "assets/js/111.5208973b.js",
    "revision": "b92e88ce8ae3cb2f97c79b4b9cb6312d"
  },
  {
    "url": "assets/js/112.87b1d192.js",
    "revision": "2a88da33209910b941f4e4608121f6d9"
  },
  {
    "url": "assets/js/113.8611656e.js",
    "revision": "9b69a3940b790f44c2c5fd6c59cefbc5"
  },
  {
    "url": "assets/js/114.297c0a6c.js",
    "revision": "ebda4098435f18d7ceb33fe750cfdee3"
  },
  {
    "url": "assets/js/115.fd180ec2.js",
    "revision": "afb50c93c2f70107c4b4c8f7f67d24dd"
  },
  {
    "url": "assets/js/116.1492542e.js",
    "revision": "d12cdc53d2e977afceaede17518b56f4"
  },
  {
    "url": "assets/js/117.1d84f735.js",
    "revision": "1c79fc8add8f31473485fa8645dbe485"
  },
  {
    "url": "assets/js/118.d21a89ba.js",
    "revision": "0d4a41bab7b1e0735058bd61c6d0d25d"
  },
  {
    "url": "assets/js/119.06c0966d.js",
    "revision": "fc704be045b09ccab5da99c746242755"
  },
  {
    "url": "assets/js/12.04f05e46.js",
    "revision": "0af7df92f968c625ddbe9d9cc79b3106"
  },
  {
    "url": "assets/js/120.16ed638b.js",
    "revision": "f2a1cae32983040be51b723ba3b8a91e"
  },
  {
    "url": "assets/js/121.b708a74e.js",
    "revision": "dbc530856bc5fa1c2a57e7e5129ed229"
  },
  {
    "url": "assets/js/122.9be5684b.js",
    "revision": "5734deee92dd52fa533df54efa9d886f"
  },
  {
    "url": "assets/js/123.abc1edc9.js",
    "revision": "5742e50b7aafaa010aff199c1331fb95"
  },
  {
    "url": "assets/js/124.a8f78b97.js",
    "revision": "4d95a3c3c5b118c95ee74a6ecd1d1846"
  },
  {
    "url": "assets/js/13.ba07f262.js",
    "revision": "64d584475062e5eb50b140446f3b8453"
  },
  {
    "url": "assets/js/14.467781d7.js",
    "revision": "3f0e1ea4951aa1d3023c53be69c50908"
  },
  {
    "url": "assets/js/15.add89d11.js",
    "revision": "824554da5c3e392a2c51f0181612cd31"
  },
  {
    "url": "assets/js/16.0dd8ac21.js",
    "revision": "d0c61dcd95723b3f7014bb151920ce57"
  },
  {
    "url": "assets/js/17.9eba39a0.js",
    "revision": "b10bf01ca70341c3b62d64810b097664"
  },
  {
    "url": "assets/js/18.756f4b8b.js",
    "revision": "90cabd457a140196e752bf51ac13927a"
  },
  {
    "url": "assets/js/19.3c06582e.js",
    "revision": "7ae7dd3205bbfe1e788f6b84eea07f50"
  },
  {
    "url": "assets/js/20.2798cc5c.js",
    "revision": "e985508a27bc3430d1bbcfd624993f32"
  },
  {
    "url": "assets/js/21.51bb03a8.js",
    "revision": "99872ccecd7d47528b0e1cc6cf3809f0"
  },
  {
    "url": "assets/js/22.cd11f090.js",
    "revision": "6589f55db503f75a0fc89039a4aa7f1f"
  },
  {
    "url": "assets/js/23.0c4caf38.js",
    "revision": "a57eccf63bccca94051ee5608b97a43d"
  },
  {
    "url": "assets/js/24.657d0406.js",
    "revision": "3ad6cba40dc2c023a9f9060c3bab0ee6"
  },
  {
    "url": "assets/js/25.dd9822f8.js",
    "revision": "d3bcba4429abd127910e95f5419181c0"
  },
  {
    "url": "assets/js/26.45c6d731.js",
    "revision": "dcaed4f0b2868fabf805a6486c07783f"
  },
  {
    "url": "assets/js/27.87c47f51.js",
    "revision": "6d15406f02cc4a490976a905b4d10044"
  },
  {
    "url": "assets/js/28.cc3c09d7.js",
    "revision": "3e6d792b7db0b860f3cb61884ab32c9c"
  },
  {
    "url": "assets/js/29.d2fa25ed.js",
    "revision": "842cf9ab59a61f2634864f65da28b388"
  },
  {
    "url": "assets/js/30.3a843639.js",
    "revision": "4a895afef5da2d9043bfffa2f38658d8"
  },
  {
    "url": "assets/js/31.f5ea218b.js",
    "revision": "4f40394e08bf8df9f47a7f71b8d37af2"
  },
  {
    "url": "assets/js/32.8d2c655f.js",
    "revision": "5be71e59f503aeb8d10aad3734a58941"
  },
  {
    "url": "assets/js/33.b6d927e4.js",
    "revision": "85c9705e675478634b3a5be830c2882c"
  },
  {
    "url": "assets/js/34.dd924a83.js",
    "revision": "9c78f2579bb8187f9a6407760b26be92"
  },
  {
    "url": "assets/js/35.0ef2f721.js",
    "revision": "326b7d4d1fd280ba67a99cc47bcc0b7e"
  },
  {
    "url": "assets/js/36.67e94c32.js",
    "revision": "a4a904947bd515d4549fea9c3aff6036"
  },
  {
    "url": "assets/js/37.5dbca67d.js",
    "revision": "b582b61504251d783c76a959c0f19cf4"
  },
  {
    "url": "assets/js/38.c08ae4b6.js",
    "revision": "80b209cffbda5e6b6850948114fa863f"
  },
  {
    "url": "assets/js/39.6a88c30c.js",
    "revision": "5efb57b5cabae45bc8d3e0ea10d510df"
  },
  {
    "url": "assets/js/4.4300f3fb.js",
    "revision": "4e136de35def929965f9f205de12fdb1"
  },
  {
    "url": "assets/js/40.041fc47a.js",
    "revision": "4323c2e13b669629abce953d132672ef"
  },
  {
    "url": "assets/js/41.f24284f1.js",
    "revision": "06d48176ed6b6b767589b13e72ba8c99"
  },
  {
    "url": "assets/js/42.5141231a.js",
    "revision": "9f079653bf4a6e27053a8af700900377"
  },
  {
    "url": "assets/js/43.3e24f07d.js",
    "revision": "3da16ce85b5ebd0abe412870f3f82be3"
  },
  {
    "url": "assets/js/44.8c22b78c.js",
    "revision": "d26da3208adb72760e7896627d22eb4f"
  },
  {
    "url": "assets/js/45.1247fc94.js",
    "revision": "abdaa8912364d4397c07424994372c8f"
  },
  {
    "url": "assets/js/46.e6cc2e4e.js",
    "revision": "e55b7c2a40b78a21423c745149a8799a"
  },
  {
    "url": "assets/js/47.a3e99b11.js",
    "revision": "5864c6141dea4ea624b540543df709b8"
  },
  {
    "url": "assets/js/48.e06a69b8.js",
    "revision": "cf3eee62dc07e461e27931858dfcc19e"
  },
  {
    "url": "assets/js/49.15304d94.js",
    "revision": "5bdaa8aaace8555fa7dc77741779ceb9"
  },
  {
    "url": "assets/js/5.7393717f.js",
    "revision": "b9bdd65eec7ebbafd60813f5a07df28f"
  },
  {
    "url": "assets/js/50.36e516e3.js",
    "revision": "270b223ec95b0608fc3143a27a876166"
  },
  {
    "url": "assets/js/51.c477b204.js",
    "revision": "8c6af9a3f988e04fc12e5bcba2f1ed6e"
  },
  {
    "url": "assets/js/52.a5d1cdf6.js",
    "revision": "4c6fbedcef6ee5c0819606d3e9defecc"
  },
  {
    "url": "assets/js/53.9532b4dc.js",
    "revision": "790ac10ee926da75f3cc38cd8d25be5e"
  },
  {
    "url": "assets/js/54.32ea58c0.js",
    "revision": "a8cf1f1a3580e2d8b809fb95fcb52d16"
  },
  {
    "url": "assets/js/55.56ce8438.js",
    "revision": "8792fd15acc7da1a0834dc968f1acbd3"
  },
  {
    "url": "assets/js/56.148584d9.js",
    "revision": "73376d683b9c10edd729b59980787739"
  },
  {
    "url": "assets/js/57.8b1e41b5.js",
    "revision": "1bbf52e6a7fd026ba62dd629b8bf820e"
  },
  {
    "url": "assets/js/58.181e2479.js",
    "revision": "e14b8f02f4584f496636e759c555a792"
  },
  {
    "url": "assets/js/59.7be8e2b7.js",
    "revision": "59ec18e48adedf30f58ff522c922f080"
  },
  {
    "url": "assets/js/6.08ab9547.js",
    "revision": "e455cd175aafaffcb4638417582a325d"
  },
  {
    "url": "assets/js/60.e1eb2e60.js",
    "revision": "4d511461d6ecbaab7e548539c4c015b1"
  },
  {
    "url": "assets/js/61.517523f7.js",
    "revision": "247a1118d79e7bee9239c1d26273a404"
  },
  {
    "url": "assets/js/62.166825c8.js",
    "revision": "5272ec6a058ac4e7eef869a4a24f47b5"
  },
  {
    "url": "assets/js/63.80e35598.js",
    "revision": "ffd3b0691e68d237bffba9505fd8b8d0"
  },
  {
    "url": "assets/js/64.5d77c236.js",
    "revision": "ed577cf4fb8d53ca99f352e922eb9a41"
  },
  {
    "url": "assets/js/65.56063b59.js",
    "revision": "a644dc2c80dd1d709ae96d16dd693f59"
  },
  {
    "url": "assets/js/66.01e6dafd.js",
    "revision": "df4d9b73b78c7909d73b095e317bf58c"
  },
  {
    "url": "assets/js/67.66bc95d0.js",
    "revision": "23594f9d728c7843963c0ed08d54580e"
  },
  {
    "url": "assets/js/68.d7effdfe.js",
    "revision": "34d713b301ef267de86c0f1f34dd4d02"
  },
  {
    "url": "assets/js/69.142547b9.js",
    "revision": "3f655fb4aa5ebab13dbad3f03f46635e"
  },
  {
    "url": "assets/js/7.649da1bb.js",
    "revision": "83ec5d6e00ea14fc19dc557d1ab21870"
  },
  {
    "url": "assets/js/70.dbbcf303.js",
    "revision": "0c934ef3616641d04a7781a5bed8fb75"
  },
  {
    "url": "assets/js/71.d2b80215.js",
    "revision": "dd1156b878e101a6228c1c26c55abf1c"
  },
  {
    "url": "assets/js/72.b0113e89.js",
    "revision": "13ce3a6741d126445ecfa57293a7a7a2"
  },
  {
    "url": "assets/js/73.d1f184ce.js",
    "revision": "56c66b6ab8e0a98cd1f306a925a0ae41"
  },
  {
    "url": "assets/js/74.de021d98.js",
    "revision": "bb968157428c2932798c201612bfe418"
  },
  {
    "url": "assets/js/75.56c22dd9.js",
    "revision": "822a57bc3dda74894c72cadc70fb981b"
  },
  {
    "url": "assets/js/76.a729767d.js",
    "revision": "fe365fea1c368eb05778008a4af6f786"
  },
  {
    "url": "assets/js/77.34639cc9.js",
    "revision": "94fca121adb8cc0fa7a09fb1fe1f2a5b"
  },
  {
    "url": "assets/js/78.233c1934.js",
    "revision": "2aa64f5578982ff3a5c09bf1a2a3f492"
  },
  {
    "url": "assets/js/79.99a0b6f5.js",
    "revision": "3c712a7540c00a9568166ffe275d2bcf"
  },
  {
    "url": "assets/js/8.85225050.js",
    "revision": "a11c953e20bfe844a814d17b9eb7dd69"
  },
  {
    "url": "assets/js/80.03c73c4f.js",
    "revision": "19cbb1653e6d0d9b6e212f714a64d9ff"
  },
  {
    "url": "assets/js/81.ea500e4d.js",
    "revision": "84a102df55d41a6cf07d830cbb4b4cd2"
  },
  {
    "url": "assets/js/82.dcfddb91.js",
    "revision": "f41ee299c8a2463ba01ab7b279379f73"
  },
  {
    "url": "assets/js/83.f00db514.js",
    "revision": "ede45e43d81242dfbc621f409fe5dcb2"
  },
  {
    "url": "assets/js/84.d0ee12d8.js",
    "revision": "a408feaefa5c614118c1c8144c03fd1e"
  },
  {
    "url": "assets/js/85.bd543a46.js",
    "revision": "b06276459d0d9af4169897e79758b078"
  },
  {
    "url": "assets/js/86.b786ccab.js",
    "revision": "2c05e7c3c23a083de0e3a7e9d5ed5400"
  },
  {
    "url": "assets/js/87.97884bd2.js",
    "revision": "188d03cf3b723da04f471550e3f129aa"
  },
  {
    "url": "assets/js/88.4ab30e21.js",
    "revision": "88dab07f2804abeedcb1c6529e4ed814"
  },
  {
    "url": "assets/js/89.8679499f.js",
    "revision": "701bb4baa681d169c38d6ce6141d2734"
  },
  {
    "url": "assets/js/9.237779a3.js",
    "revision": "164a58bba9941e6d4bd0dfe9d6d0b9a6"
  },
  {
    "url": "assets/js/90.eed3246c.js",
    "revision": "445d00e84effa6e34b80d56107aa3e8d"
  },
  {
    "url": "assets/js/91.ceaf7e7d.js",
    "revision": "9999edf1b6d6adc98495b406f5e50e52"
  },
  {
    "url": "assets/js/92.76fbbe91.js",
    "revision": "cb0c7b8184465dec51cdd6eaa556fba5"
  },
  {
    "url": "assets/js/93.eb7f80b7.js",
    "revision": "1382aa6c32ecf317bbfe1daad458eb15"
  },
  {
    "url": "assets/js/94.0956a65e.js",
    "revision": "8bc5592c4992447a579e1743396c3bf3"
  },
  {
    "url": "assets/js/95.6757f7ce.js",
    "revision": "fb0c1cf8ace0598f62b59753f0dba020"
  },
  {
    "url": "assets/js/96.83bf3838.js",
    "revision": "6dab35d1dd813887af495c5663cde302"
  },
  {
    "url": "assets/js/97.f5ced415.js",
    "revision": "14a75eaa7fa2f211cd314f30d87b6d5e"
  },
  {
    "url": "assets/js/98.244ea944.js",
    "revision": "5c8976b5288f1abbd782d6e19401c1b8"
  },
  {
    "url": "assets/js/99.967af3ae.js",
    "revision": "a632165008d1e0ba16aa7ed04f8fa6ec"
  },
  {
    "url": "assets/js/app.0c3af3d0.js",
    "revision": "d1be1b69bf8e1b3c993edb43a5352356"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "11de84bb0fd7542a44638a8f39ca40f9"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "bfb99bd94071e231c16927c115a7bb7e"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "048d7cb07d5d0515956560d55fe587bc"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "73e207c35cf50fc2c247f33746ef9b9e"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "2fff0f1f1b0bb5d6f2cc36642d7dc749"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "a41a38b639638dee7733aee5423eb562"
  },
  {
    "url": "composable/date/now.html",
    "revision": "9a0b02b51a7d587aa6a0d11c846034ad"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "d8164476336e41f366751bf20fa4436d"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "98f8c7d651d117b425a193a0a31f88a3"
  },
  {
    "url": "composable/event/event.html",
    "revision": "69a290d0c2301da9a4a689f225a1e1ed"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "add1c1c24c76b6334638983c8077904e"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "23b80d8030e689329d9e45494adf6387"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "98c06d8976bba84aa27d5f542c427ce7"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "c3f9c01d7d5f39b4c0e513955599f31c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "1dad9604e656a4ae2c57ab0a90830f9d"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "c1a742aa288682fd6ea5140322e10055"
  },
  {
    "url": "composable/format/format.html",
    "revision": "715e81acc55b49cee95cc29aed6f35fc"
  },
  {
    "url": "composable/format/path.html",
    "revision": "148687332456f586909fbf3ac9f48bee"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "23b611eaebfbc6c024d4b7784bb5dc5f"
  },
  {
    "url": "composable/index.html",
    "revision": "7a2adc5bb682a99d3b9e5fc0ef85b106"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "b9ccd7fefd19fb991a22f7b6b221416c"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "45f3e14f59b5dc0b963b13957d59db07"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "f3e7953001f54be866886bc6b85aabca"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "109efa624d21f919f68980b945a6ec44"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "6e287c6f3af0c4ff4dc00cdd5481e75f"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "f62432e6adb84aeb1b25d0c1a144ba0c"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "da74add3b20f4dd382868f5b3d56380e"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "03f71d43ee2deb5a466e48d66ca14354"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "af8d177b266f99492bc5d8923bc6916d"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "2751a1b42b3e14c7940459a367fd5c92"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "fdddc8fb73b9d5c3ac12d575ddde5d61"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "ddb7a6d3e7bedef940e33e023db70975"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "c2baf15c9c3220e956772ccbbf43b4a1"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "f36399257b5094925b8aeb03152e88af"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "64910a01c9ac7a7455c8656c52ca0b3e"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "a89135b3e63278f2ff27311a68a74e25"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "f276d5ed7f68b2c7ff7cbfd5a99ff9ac"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "32c815278396470bcc6beb705d4a1184"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "593087ccd1cf751cd139cb9c515e35ea"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "b263478b69dd893889b8df8fdac5668c"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "952f2185ff9aa1c3d22e4dd9e850779f"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "f94e7b37adec00ec29b15ef4e63f2a99"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "2359964d5e4d415302c6da60621e5241"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "d638669d6a4c53194848c831c10e5314"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "cef524844c543bdb83369ce2b7e7136c"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "90e960d18c41ab497fb1ea349053fe89"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "32db9ce2166bd869ef1d4e03e355c3e2"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "4f639632136690aad29d6ad0c3ee6f00"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "76e64861d62b17c24049b7e0ebd6f5b6"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "d181b3c716e0ae75a018deb38a25b641"
  },
  {
    "url": "composable/web/language.html",
    "revision": "4b4c100b0db206bc816ee98b03aa6941"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "1fc1b4cdb99f85d42a64a0dde8a1524a"
  },
  {
    "url": "composable/web/online.html",
    "revision": "586877056ad70220514afb3488d52487"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "276f24b923ef9cab15d2405a000d1edf"
  },
  {
    "url": "composable/web/share.html",
    "revision": "fc128e74baf38d9fe274787124449504"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "762a6a4eb2721b508c1ca01e08c9b861"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "2488183043f652cc3b5b3f068a9d9136"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "b2ecb426f6d1703bc1069dc5297d0fc9"
  },
  {
    "url": "Examples/index.html",
    "revision": "daeb1833d89b598c4c9eed200799ae2c"
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
    "revision": "457f32a2fb56834588b9ab1f0831c8b8"
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
