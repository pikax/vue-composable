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
    "revision": "489769da46c189ce0ebc56ab81885ae3"
  },
  {
    "url": "api/axios.api.html",
    "revision": "26f55e2acec00f5f54e0598a83bafe1a"
  },
  {
    "url": "api/core.api.html",
    "revision": "3945bfaf988ea1844af4e0e1950995be"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "f3b6c53218d3b4b609bd3ed53ebfec30"
  },
  {
    "url": "api/web.api.html",
    "revision": "0430f646d337d4a78c6aa7207942f11e"
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
    "url": "assets/js/0.e60449c4.js",
    "revision": "84778bd74c2190532c4070429ef8f0d0"
  },
  {
    "url": "assets/js/1.9f2959c6.js",
    "revision": "c0a0654f894e48ea1764a629b68efd5e"
  },
  {
    "url": "assets/js/10.1c00abb9.js",
    "revision": "f326258ab682104c97ba7267ee066c79"
  },
  {
    "url": "assets/js/100.50490de4.js",
    "revision": "f27995825df536883d954b63cae23c7d"
  },
  {
    "url": "assets/js/11.9439d284.js",
    "revision": "eb1a666f199b7664c7ed89d733a21bec"
  },
  {
    "url": "assets/js/12.3d67ef1b.js",
    "revision": "a22bc4267265e366c719d1f9c5b8fd89"
  },
  {
    "url": "assets/js/13.07174802.js",
    "revision": "de015505847480390911e6bee204a617"
  },
  {
    "url": "assets/js/14.43e31e33.js",
    "revision": "2f1b2019ff7de34cab757e2f4c470a21"
  },
  {
    "url": "assets/js/15.d661f856.js",
    "revision": "ce1fdc7184c628c6e47cb4d5888c201e"
  },
  {
    "url": "assets/js/16.03b399fe.js",
    "revision": "d044842c2a8240a48363cbf69a6f3633"
  },
  {
    "url": "assets/js/17.86b0962a.js",
    "revision": "83d1e6c60ab1fce4c69432486ecad582"
  },
  {
    "url": "assets/js/18.55bbc1bf.js",
    "revision": "04e49d079fb1430e5230081ed2b11c29"
  },
  {
    "url": "assets/js/19.bc4566ca.js",
    "revision": "c16a9f3ef7601c6a4e047974484721a2"
  },
  {
    "url": "assets/js/20.1281bb0f.js",
    "revision": "b21fb3e2ac50016ee69cbe82e082fa9d"
  },
  {
    "url": "assets/js/21.d1582037.js",
    "revision": "b12db31aee96a612bd0d37810f2c4eea"
  },
  {
    "url": "assets/js/22.f40555fb.js",
    "revision": "a1a7730c1809772bfb0874aea5804fd8"
  },
  {
    "url": "assets/js/23.690ab8eb.js",
    "revision": "c212baccabc029f9a4a0580329060a6e"
  },
  {
    "url": "assets/js/24.1797bfa8.js",
    "revision": "382a7494f660f38d8635c61c3d2215d9"
  },
  {
    "url": "assets/js/25.73027da3.js",
    "revision": "9443c508d1a2d568d2b4cca2a694d6c4"
  },
  {
    "url": "assets/js/26.fffc5d23.js",
    "revision": "e33e5a986b47a6ffa16e2e2ad57b30ad"
  },
  {
    "url": "assets/js/27.6823e46a.js",
    "revision": "61e3c1d6fb450420c2dcc4bfcd232376"
  },
  {
    "url": "assets/js/28.403cd0de.js",
    "revision": "d9c64085561e2842a87937c375eef2c7"
  },
  {
    "url": "assets/js/29.31d9aa0c.js",
    "revision": "eee2efdad3b77043803bf300e2daa74d"
  },
  {
    "url": "assets/js/30.de708cc0.js",
    "revision": "8c7231b24bdb33c2c1f39609a330e632"
  },
  {
    "url": "assets/js/31.193267ff.js",
    "revision": "df616a5d6a55f0366a595e0648210c6a"
  },
  {
    "url": "assets/js/32.09bacb02.js",
    "revision": "6c076500f4704d60730bc72b520d6822"
  },
  {
    "url": "assets/js/33.a7390c1a.js",
    "revision": "64be001f8aa7109f3320a756fced1638"
  },
  {
    "url": "assets/js/34.5b6440a5.js",
    "revision": "9386718cbbb0d15a7678bc489ee57409"
  },
  {
    "url": "assets/js/35.1f42e2e3.js",
    "revision": "cbe5e9493f8524c6218686557f7db575"
  },
  {
    "url": "assets/js/36.cd796f5a.js",
    "revision": "b79b2b2a1c1f450a6347912b534bd74e"
  },
  {
    "url": "assets/js/37.f13245d1.js",
    "revision": "a725493f2d85ee95f743f10fcc91c146"
  },
  {
    "url": "assets/js/38.2eb8dad7.js",
    "revision": "755809177228ca84d8ac4fc6ee86091c"
  },
  {
    "url": "assets/js/39.1b4f7d6d.js",
    "revision": "dc5cc099fc2923636a4faee53977bd85"
  },
  {
    "url": "assets/js/4.0bb2b256.js",
    "revision": "52cdf81837bf56c16a679ef747faa5c2"
  },
  {
    "url": "assets/js/40.c3789ae5.js",
    "revision": "89c03cbaf56cd50a6f29e5d56d6f3037"
  },
  {
    "url": "assets/js/41.c88114d8.js",
    "revision": "b125f9d3ae5d8a98c2f96fa6d43799d7"
  },
  {
    "url": "assets/js/42.b2bf8d71.js",
    "revision": "3ad2923350040659f157ce6beab76227"
  },
  {
    "url": "assets/js/43.443aa9cc.js",
    "revision": "e4226d2d3a31785325a58889dc9170ca"
  },
  {
    "url": "assets/js/44.3f19fac1.js",
    "revision": "86bb4a63783c50844f5e660d241d44c3"
  },
  {
    "url": "assets/js/45.418bf6b1.js",
    "revision": "2f30f04b666f4646303f2a8e9a5d5717"
  },
  {
    "url": "assets/js/46.7a0391e3.js",
    "revision": "5fd07d2758c09b88d70138fd59231887"
  },
  {
    "url": "assets/js/47.8d847fd4.js",
    "revision": "c4da13850bd471aa5ed0e79828cfa5b3"
  },
  {
    "url": "assets/js/48.2689c40a.js",
    "revision": "502b9eaf7aa57fdf50ce6d0d8fa310e0"
  },
  {
    "url": "assets/js/49.a34defb1.js",
    "revision": "3accffc8f665a35fd056f654daf82cc5"
  },
  {
    "url": "assets/js/5.ba02ea2b.js",
    "revision": "440fea1baeda99a204901ab5550a1a3f"
  },
  {
    "url": "assets/js/50.e7cbf964.js",
    "revision": "38606e84d84ec764c6bee6a0cd9ec686"
  },
  {
    "url": "assets/js/51.08d50495.js",
    "revision": "e6dbc5290c9f822891b6738872d4f91b"
  },
  {
    "url": "assets/js/52.f0c6f40e.js",
    "revision": "147cd68d899e9b29af78657b453d440c"
  },
  {
    "url": "assets/js/53.3bc45439.js",
    "revision": "fd3e808a7192d1bc318f90f0f507a218"
  },
  {
    "url": "assets/js/54.83fd33d8.js",
    "revision": "28580fc7bb7faf20cee551a5fba96a16"
  },
  {
    "url": "assets/js/55.35e97ae9.js",
    "revision": "56316be3abdd46755d899237ce7c7b2e"
  },
  {
    "url": "assets/js/56.d3bc2da3.js",
    "revision": "5c847608aaf8f8406132e97916efd2b7"
  },
  {
    "url": "assets/js/57.4413bc5d.js",
    "revision": "da26820f9c08fefa8f6ec06e4e9f5a56"
  },
  {
    "url": "assets/js/58.cf559354.js",
    "revision": "37680afaa4ab1809ff80c83aeccce71f"
  },
  {
    "url": "assets/js/59.1b0e10c5.js",
    "revision": "256dd6e9e885f3527316e2fb38c7e7ac"
  },
  {
    "url": "assets/js/6.2bcd3a88.js",
    "revision": "b819afb266d28ae8e8a166376ce2976d"
  },
  {
    "url": "assets/js/60.8f831bb0.js",
    "revision": "1a5afb396341ec93315b48ab7a4a79c3"
  },
  {
    "url": "assets/js/61.02886809.js",
    "revision": "404a2554b5a07ce33a72d8f0e83d29e5"
  },
  {
    "url": "assets/js/62.4f57d397.js",
    "revision": "36d436b8ed7d78ee1645afd39fb3fa33"
  },
  {
    "url": "assets/js/63.96d951e3.js",
    "revision": "9ce22e9222ba54dae9024ddd5c29e5e4"
  },
  {
    "url": "assets/js/64.5411fe72.js",
    "revision": "fbc65536df3da9c889cb857256a83c4c"
  },
  {
    "url": "assets/js/65.7c72b76c.js",
    "revision": "1486846ddbd02cef7147d13c138dac08"
  },
  {
    "url": "assets/js/66.c6d42f04.js",
    "revision": "fa15ee03a53f93f145272f70bb7af7e7"
  },
  {
    "url": "assets/js/67.83be218f.js",
    "revision": "c3850b61e2ddcb34d4df48acbf29fcbc"
  },
  {
    "url": "assets/js/68.580f9897.js",
    "revision": "b1944d512c055454c290b8b4bb168256"
  },
  {
    "url": "assets/js/69.f2746509.js",
    "revision": "d4db18edfd58369ac44f2dd0f7401215"
  },
  {
    "url": "assets/js/7.e3640962.js",
    "revision": "0b7c77560b4e17b3a7c7ef6dbcc5c069"
  },
  {
    "url": "assets/js/70.831fa13b.js",
    "revision": "df4e3590913882413787fb8292b2cd57"
  },
  {
    "url": "assets/js/71.12f21ef5.js",
    "revision": "a942897397eac19bb5a82bff4c611198"
  },
  {
    "url": "assets/js/72.5dc514ae.js",
    "revision": "92aa235ded73d4d99b15f3c883134279"
  },
  {
    "url": "assets/js/73.1b944e73.js",
    "revision": "1020a1546a3b43d35d4174bbe81db428"
  },
  {
    "url": "assets/js/74.04fe756c.js",
    "revision": "4f1ce0d02f1024b719b7f9f684827a3b"
  },
  {
    "url": "assets/js/75.b30ed792.js",
    "revision": "8ea872ca9f451c5eb7e0243b732accdd"
  },
  {
    "url": "assets/js/76.cf8000d0.js",
    "revision": "416198c9d9832d94b1b25bce36d980bf"
  },
  {
    "url": "assets/js/77.3aecdde7.js",
    "revision": "82669e9f949b16adb4b1b7e586462f1f"
  },
  {
    "url": "assets/js/78.68dc10eb.js",
    "revision": "43a3dc0a31862805910f1e18f202488f"
  },
  {
    "url": "assets/js/79.bc8d4f2c.js",
    "revision": "f61c261e5afd18d9572b2b96edbbed94"
  },
  {
    "url": "assets/js/8.609d477a.js",
    "revision": "2a704e5fd27c771f8ec94b924200c82a"
  },
  {
    "url": "assets/js/80.d0efb330.js",
    "revision": "5871e588ac434e2c428cc2476ea55f66"
  },
  {
    "url": "assets/js/81.93dc798e.js",
    "revision": "de4caf880bd7c08e3ced1acbcd76dad9"
  },
  {
    "url": "assets/js/82.a4471177.js",
    "revision": "f7b73279d2b215afbe6a4047ff078a73"
  },
  {
    "url": "assets/js/83.3a8ea085.js",
    "revision": "267cab052c861a55869f16dd9256898e"
  },
  {
    "url": "assets/js/84.74974e68.js",
    "revision": "a04c8f754e918b57242feb5e1fda1bfb"
  },
  {
    "url": "assets/js/85.5547eeff.js",
    "revision": "0bb30f7798185b3bcf02159650766b41"
  },
  {
    "url": "assets/js/86.5e38b1c6.js",
    "revision": "8403db25cddbb05f531ed0b473c2e44e"
  },
  {
    "url": "assets/js/87.764a3809.js",
    "revision": "821cff62006142612672121a9b1bd3e5"
  },
  {
    "url": "assets/js/88.94957c3e.js",
    "revision": "b1fd05c609ef76a18659826a8d7901b8"
  },
  {
    "url": "assets/js/89.a037c26d.js",
    "revision": "7d39c8662530a06178d6d331d935c56c"
  },
  {
    "url": "assets/js/9.d73a6bd1.js",
    "revision": "7c9cc3c8078a08512b06eb0879c0d9f7"
  },
  {
    "url": "assets/js/90.9382d257.js",
    "revision": "ee430afb35e07f87eacc37138ed886fa"
  },
  {
    "url": "assets/js/91.2caa5053.js",
    "revision": "a6984994006e740118c61194f457d3ce"
  },
  {
    "url": "assets/js/92.a2b395a3.js",
    "revision": "299afca737eb18ae075df3c2a69dec18"
  },
  {
    "url": "assets/js/93.11b9a256.js",
    "revision": "5af926e96ea588c510215efec5b40beb"
  },
  {
    "url": "assets/js/94.e6c49405.js",
    "revision": "c2e1bc21547097c1c2f2427d55ba3742"
  },
  {
    "url": "assets/js/95.6207c06b.js",
    "revision": "34dedf8e11407afbd9b50f7443f4667b"
  },
  {
    "url": "assets/js/96.5612f8a6.js",
    "revision": "e46fc7e50a8e6d52daba9aa0027310df"
  },
  {
    "url": "assets/js/97.f9854f62.js",
    "revision": "cd4106692dd7ec7604055c2dddf92c7f"
  },
  {
    "url": "assets/js/98.70c3096b.js",
    "revision": "f680de5edb3b915f85554e7fefff11ce"
  },
  {
    "url": "assets/js/99.a9f58bf3.js",
    "revision": "a48971871d0cfad3236c78892e3c88d4"
  },
  {
    "url": "assets/js/app.94225eeb.js",
    "revision": "45487b279005a2aa15b2f9732ab53a96"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "433d777fd4fd0ce045f93c8e550704c1"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "a37490f961f816f4515dd19f681701e7"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "aef57232331681d9252a1818cd98d20e"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "9c8ceb30f5fe02a430b7aaea7f3535c5"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "87839f4be1c5fe3b6c39ef451cb4b763"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "2a5c6eb8e662e0e854768082fc41346f"
  },
  {
    "url": "composable/date/now.html",
    "revision": "4abcc9c0cff4ca10a26933a5a97e292a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "49d5010e15ae5507c725ae9fb31d5eb2"
  },
  {
    "url": "composable/event/event.html",
    "revision": "04c488adc2d17895837c0eeda664baaf"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "5f0df853ff689cf1eef4ad9aa3a7e762"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "60260de6ca9fe4443501f3effcd1ac14"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "4568b876aec6f8fecc04ec873dd75993"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "ffae530512a9e1289eff07361836499d"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "4bc4cd194f7e2634848bccaa4b32fd7e"
  },
  {
    "url": "composable/format/format.html",
    "revision": "2788cd4c4e9198002fac7c71e0fc6d9b"
  },
  {
    "url": "composable/format/path.html",
    "revision": "87fef3b0c0ba51533b19dbc9244353c2"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "883f6611b682af28e4e1a4fc0f102c24"
  },
  {
    "url": "composable/index.html",
    "revision": "c907daed363684c3a34b3ed95f16ec68"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "29d8e9c0f05bd566453fdbfca1b0835b"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "02f78cc487d1e2d2c4dbee36c95b7fed"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "b02b76939dcbc41b713bd02ba63594f0"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "7c4f55b3544da6b83540ae0acfc70bc8"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "f64ecd0dc09fc440addf8c8e2594cc3d"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "8944ca0d22620a90f61eef2793c3af1c"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "c86c4afac5917afe41284c6386fe6443"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "f8d6892d96d4b719165403cb2498c432"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "55656d6f94fcb7156c5fc5a3fda3bf4e"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "0fc7927db06952d635f78a0ee2753483"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "a70bba703f20a1faedf35434900d5e83"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "59d7d6ac5de9736cb3beefbae5f4263e"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "772873d064353f8ca3b7a5077189eb7c"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "89a1dc42f7ec0172790ad88b5dae07a5"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "5ad8f5014ca8a4205208ff3a0f0b8dd4"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "2636f2ac21a7efde9119619df65234a0"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "a32f61d9ff1276b5835fb7128588bf8b"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "f6e80ea62ad3ac5c84982dff8a12fa42"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "7408e18740a232c0a5de345deeb7c9a6"
  },
  {
    "url": "composable/web/language.html",
    "revision": "4ba94339df45c8e494636327d90ab248"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "38998a92033814395828964b00a3ae58"
  },
  {
    "url": "composable/web/online.html",
    "revision": "c4d56b82ced688c1d09ee14c169bc7fc"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "b48a3608b51429c4212ba19b012f8424"
  },
  {
    "url": "composable/web/share.html",
    "revision": "7b231275d05907eca36f84e3ff3faec1"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "69b454dc32bfc86a30153f9827b797c5"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "f5e5e85db192d253aad2d4398b7183d1"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "98a614caafb5945bae1cdcfa78a61c14"
  },
  {
    "url": "Examples/index.html",
    "revision": "2b43658362d987b3c3ebb1233ef99a7b"
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
    "revision": "fd072ef2bf957a4cad15fbaf6436dea5"
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
