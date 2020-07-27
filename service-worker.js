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
    "revision": "7f8a21127a994cf2bd315c43a7bf3841"
  },
  {
    "url": "api/axios.api.html",
    "revision": "0255d2429600e80a8ad9012c8775ff3c"
  },
  {
    "url": "api/core.api.html",
    "revision": "c27f54c72a5cf603c9e9a131ea8e7592"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "ffa74141ef9067b7445bb975f6480f7e"
  },
  {
    "url": "api/web.api.html",
    "revision": "3bc5fb06d1d5f493c779ee2f1e413802"
  },
  {
    "url": "assets/css/2.styles.e4095f46.css",
    "revision": "1773dfc42efcd85274f5520562a468dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.c5dfdf9f.js",
    "revision": "ef9ce5ef46df59b7e2e9d4b8cae94a82"
  },
  {
    "url": "assets/js/1.07249b2c.js",
    "revision": "8ba722d1fe50539ad9ee736ac4316eeb"
  },
  {
    "url": "assets/js/10.cb8b3433.js",
    "revision": "55b01e8e9ce103a1b63ef98a08e6e11c"
  },
  {
    "url": "assets/js/100.aaa28c8c.js",
    "revision": "9dcf327bb40cce21d83383ea704b1b4f"
  },
  {
    "url": "assets/js/101.a252ba0a.js",
    "revision": "34c89dc559334ee45a7aff4ae406f03d"
  },
  {
    "url": "assets/js/102.b460e6bd.js",
    "revision": "4d0c70627eabfe2a8a37cc7aac019e41"
  },
  {
    "url": "assets/js/103.21a5269e.js",
    "revision": "071c446469fb065ad10a2d65b0f31113"
  },
  {
    "url": "assets/js/104.29f7f33c.js",
    "revision": "2077a2ebe33a7544d8544634dc9bf1a2"
  },
  {
    "url": "assets/js/105.62ec634c.js",
    "revision": "2e9ebda0937d5a7b78e13ffb13fa252a"
  },
  {
    "url": "assets/js/106.b78c8e5c.js",
    "revision": "6bfaed9b037237a1fb2eb4bbf0feff66"
  },
  {
    "url": "assets/js/107.9204f9cb.js",
    "revision": "8ce99b1945c7ce18e0d11d3f5574216f"
  },
  {
    "url": "assets/js/108.ba8ecb25.js",
    "revision": "ca47aa30ca119c0280a8a5271812d4b0"
  },
  {
    "url": "assets/js/109.bfbef071.js",
    "revision": "b35857dedf481cdd3fdebfb0e9135f8b"
  },
  {
    "url": "assets/js/11.c8bd5a4c.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.55dcfbf9.js",
    "revision": "4145abd636457f671672777b05c4b4ef"
  },
  {
    "url": "assets/js/12.6048d1cd.js",
    "revision": "93f7a18ccab2bd6302d397974e118d0d"
  },
  {
    "url": "assets/js/13.0adb0f5e.js",
    "revision": "a710d8d978bbec4a7b82cc1627baba35"
  },
  {
    "url": "assets/js/14.bf02849e.js",
    "revision": "48d5ba01af5fdd1ed1a76c881bb852b7"
  },
  {
    "url": "assets/js/15.91e99604.js",
    "revision": "9e45dcfcc2dc47a79e42b5eadf24d9c8"
  },
  {
    "url": "assets/js/16.be09f164.js",
    "revision": "fd9d8031d3d7dfd450ee226e0b61b4f4"
  },
  {
    "url": "assets/js/17.0a0caecf.js",
    "revision": "776f568a9c26f1cadd059b33bc69cfee"
  },
  {
    "url": "assets/js/18.c6e84508.js",
    "revision": "34d47884c8a98cbcbfad864cde93adc0"
  },
  {
    "url": "assets/js/19.173a1f61.js",
    "revision": "c47e6828b96e733b0f1314a7312dc92b"
  },
  {
    "url": "assets/js/20.d04ba74a.js",
    "revision": "afe9525f572d6c4ac5d0f45d7476bfd7"
  },
  {
    "url": "assets/js/21.e300b6d5.js",
    "revision": "1417550e4fd6638da05754c741efdb44"
  },
  {
    "url": "assets/js/22.0e091c82.js",
    "revision": "5fc21e4834df8399f587bc51156cb396"
  },
  {
    "url": "assets/js/23.8c8e4cb9.js",
    "revision": "e4b7e053c633eec9c4c241b10b9cd794"
  },
  {
    "url": "assets/js/24.7bdcda37.js",
    "revision": "b0d827b1a8cfbe28c1d659a0dba4ea15"
  },
  {
    "url": "assets/js/25.f235abf9.js",
    "revision": "65f5eba314394386e31c151ce3c2c0b1"
  },
  {
    "url": "assets/js/26.1280b55c.js",
    "revision": "8cd4dd034e6c178d9b5e69ad18916157"
  },
  {
    "url": "assets/js/27.50a6bf86.js",
    "revision": "050cfeaccfcf4a45ad58031aa27c4a9e"
  },
  {
    "url": "assets/js/28.d5aa9c02.js",
    "revision": "710d877ef1a1e3608950079780d881c7"
  },
  {
    "url": "assets/js/29.cb5eaf58.js",
    "revision": "8be34dcd3e62a8677c7b7834c5b87934"
  },
  {
    "url": "assets/js/30.112c0286.js",
    "revision": "70a01abcdd73ab4532fca0a7aca3950b"
  },
  {
    "url": "assets/js/31.0370c827.js",
    "revision": "5c27e14b2c77743b6a357448368e76e1"
  },
  {
    "url": "assets/js/32.1ac2e03a.js",
    "revision": "b1d36316938f01b15cac29ea6b855866"
  },
  {
    "url": "assets/js/33.b5f1026c.js",
    "revision": "d25ca6d0770cc67ce39dd4ab016c724a"
  },
  {
    "url": "assets/js/34.712381e2.js",
    "revision": "79b83abf5912f8c632da0b42d1f92b27"
  },
  {
    "url": "assets/js/35.8339e1bd.js",
    "revision": "9ce3895f4024b264565e850ce4c98d37"
  },
  {
    "url": "assets/js/36.805e4fcc.js",
    "revision": "c3210b9b3a692b69986370306cbee9a8"
  },
  {
    "url": "assets/js/37.e6a6ec4b.js",
    "revision": "b3f7747bd87e879f02d1e4a594b8f5c2"
  },
  {
    "url": "assets/js/38.c36a569c.js",
    "revision": "663a20acf27f20425fecd88c03233945"
  },
  {
    "url": "assets/js/39.c10eacb7.js",
    "revision": "9030a67c7f3bebfe362cc152442e4f9b"
  },
  {
    "url": "assets/js/4.aed6686f.js",
    "revision": "6bef0dc8c8f79a4867da493bd5110c3b"
  },
  {
    "url": "assets/js/40.04128a0c.js",
    "revision": "658c1f382fb7b3140bdfcd40ab5ea313"
  },
  {
    "url": "assets/js/41.19321f5f.js",
    "revision": "84308467d0d13ad457bcd1187df004f5"
  },
  {
    "url": "assets/js/42.3a0d007f.js",
    "revision": "825f41dd71db1c13781341a94da3cc38"
  },
  {
    "url": "assets/js/43.59dce8c4.js",
    "revision": "2f868756be89dfbfc458a3e43128f904"
  },
  {
    "url": "assets/js/44.7189cf45.js",
    "revision": "defb9bebfbf90a3cd9b69965bb99a168"
  },
  {
    "url": "assets/js/45.1b761f5e.js",
    "revision": "09c339264706b05b67510cdc333aa358"
  },
  {
    "url": "assets/js/46.180284a7.js",
    "revision": "5f9c048740a2a1fc979db2ed56015813"
  },
  {
    "url": "assets/js/47.9cba61ba.js",
    "revision": "800d0ff31c05fba785001c897b781bc4"
  },
  {
    "url": "assets/js/48.709753e8.js",
    "revision": "0e100719a319c89ec3dd4141105412e1"
  },
  {
    "url": "assets/js/49.46b973ae.js",
    "revision": "85cc833b2a07592761d85a18f266c2e0"
  },
  {
    "url": "assets/js/5.3a64806d.js",
    "revision": "06bfdae6c332f46974267eeaf83889c4"
  },
  {
    "url": "assets/js/50.aec6765f.js",
    "revision": "debfe52f895ab83c736801aa7aebcde0"
  },
  {
    "url": "assets/js/51.dc2f8458.js",
    "revision": "6229b13ae03274478e27f22c9f49582b"
  },
  {
    "url": "assets/js/52.521cffad.js",
    "revision": "c8db139cc57e70dc16ca05b70005dff7"
  },
  {
    "url": "assets/js/53.ecf0d492.js",
    "revision": "5ca5cedc626fab96ed9d65a9c50e58fe"
  },
  {
    "url": "assets/js/54.cada4996.js",
    "revision": "860db4a76dade37e2669add1983eee7c"
  },
  {
    "url": "assets/js/55.441dd020.js",
    "revision": "02a1868267ac27f71dffae451dddb71d"
  },
  {
    "url": "assets/js/56.eb8c9c03.js",
    "revision": "19241d44c61d1fed6480c8d38fbad253"
  },
  {
    "url": "assets/js/57.409427a6.js",
    "revision": "34af530f8a58fdb94bcda6a8ecdb9ff6"
  },
  {
    "url": "assets/js/58.0a6f20c4.js",
    "revision": "6ae5e7c29e586052660e5618c309914b"
  },
  {
    "url": "assets/js/59.a08533f3.js",
    "revision": "4fb7d41f2705f17dc71a1e7b9028e673"
  },
  {
    "url": "assets/js/6.b06ea722.js",
    "revision": "bc1738da9458d0bcfb0687fff2cf2359"
  },
  {
    "url": "assets/js/60.4c55834a.js",
    "revision": "d5ef6056d6a66510259eb76b67d7802f"
  },
  {
    "url": "assets/js/61.5a1d5dae.js",
    "revision": "71014d623b65f7e3597b053d7ae5aa71"
  },
  {
    "url": "assets/js/62.eb7842bd.js",
    "revision": "78b8e931005c6b42441e5220baa3960a"
  },
  {
    "url": "assets/js/63.d61225a2.js",
    "revision": "63addc40e4c582496feb1269ea0a8ef9"
  },
  {
    "url": "assets/js/64.71501c31.js",
    "revision": "9e9d23e43de851534d043e6e316b1455"
  },
  {
    "url": "assets/js/65.64d38d9c.js",
    "revision": "cf5fddff15a6d8b512b953e384ff8b35"
  },
  {
    "url": "assets/js/66.e1107281.js",
    "revision": "4f5f36f9e32351472c0b7f09e084bd3a"
  },
  {
    "url": "assets/js/67.903b7c0a.js",
    "revision": "9c3041093f097d11f7aa8cae13adfb21"
  },
  {
    "url": "assets/js/68.b8173f15.js",
    "revision": "86277f8551327e6ddce93db4be62f0d8"
  },
  {
    "url": "assets/js/69.be11ac7f.js",
    "revision": "ba2ad37e3e75815dd53b6138d282807b"
  },
  {
    "url": "assets/js/7.97e15ea3.js",
    "revision": "eeda74ba86e067e73c1aa2685255ca68"
  },
  {
    "url": "assets/js/70.c20b9f5b.js",
    "revision": "c01a47555c06fab1d9f39e1d952ad629"
  },
  {
    "url": "assets/js/71.5512707c.js",
    "revision": "6d1574b8c7ab0945ce7c6a6a217cdc32"
  },
  {
    "url": "assets/js/72.958ba604.js",
    "revision": "7686677015e4cafa9df59d9a7a3ba094"
  },
  {
    "url": "assets/js/73.1ed16b35.js",
    "revision": "d4d07ddf98ec6b83dda1ab17e6442761"
  },
  {
    "url": "assets/js/74.abd7c0a4.js",
    "revision": "62f55835059d4c235a3f410ba8994ec9"
  },
  {
    "url": "assets/js/75.f0bd936f.js",
    "revision": "a30a8f6962be2b6042c47614f10c6580"
  },
  {
    "url": "assets/js/76.332f19ea.js",
    "revision": "95070ae018b9576cedcd2014205b3be9"
  },
  {
    "url": "assets/js/77.ebad9296.js",
    "revision": "831f38cb77d2187e62fefe470e44fd82"
  },
  {
    "url": "assets/js/78.afd0cf38.js",
    "revision": "4482bec4e1fab6af592fad98bcd9b257"
  },
  {
    "url": "assets/js/79.d1b1d4a7.js",
    "revision": "d40cc2ae79ca3705974a578ae0b5f5b2"
  },
  {
    "url": "assets/js/8.14c757a4.js",
    "revision": "c51e5daee960861eebb8d9072cf64d2a"
  },
  {
    "url": "assets/js/80.869fadbe.js",
    "revision": "df3db11135347a6b1ec32a0ce51bdabe"
  },
  {
    "url": "assets/js/81.39f0d988.js",
    "revision": "6982dd85ed8891c880bcf3fcde6d0acd"
  },
  {
    "url": "assets/js/82.bba9e897.js",
    "revision": "b0f70751877550bb906257dba2e3e6bd"
  },
  {
    "url": "assets/js/83.efed092d.js",
    "revision": "44250af83248ebef2083651deb0892be"
  },
  {
    "url": "assets/js/84.05daa9a8.js",
    "revision": "a0b8e5b9b9ecfb73434d18b046c73d65"
  },
  {
    "url": "assets/js/85.4f9772d9.js",
    "revision": "f94579950aa677c1ed1746fc86209b44"
  },
  {
    "url": "assets/js/86.479a7a37.js",
    "revision": "31aeda4f0b46124cfa85db5173410b15"
  },
  {
    "url": "assets/js/87.5c8c806f.js",
    "revision": "3a0acff0c30fa931677b593761c42de7"
  },
  {
    "url": "assets/js/88.b474b23f.js",
    "revision": "0fe6731550679d86d8205010247258e1"
  },
  {
    "url": "assets/js/89.8281d516.js",
    "revision": "14cc43f882ff0c4d625e4eb56a8734ce"
  },
  {
    "url": "assets/js/9.8fac4e26.js",
    "revision": "ac26593ef2858e24751dde109a69a740"
  },
  {
    "url": "assets/js/90.1c86c2dc.js",
    "revision": "e0e8a8ed8ba7a6b460abf6ccdf1c1c29"
  },
  {
    "url": "assets/js/91.a07579d5.js",
    "revision": "16c90655b90616daf623355b3e787558"
  },
  {
    "url": "assets/js/92.948cc73e.js",
    "revision": "4d8982f4e8eec54e08447669849e32b0"
  },
  {
    "url": "assets/js/93.3749fe76.js",
    "revision": "99ce632e83bfd8b9809d65826d48b29b"
  },
  {
    "url": "assets/js/94.d4c44f19.js",
    "revision": "5fa2346705c6b38d6083b7a03ee60d75"
  },
  {
    "url": "assets/js/95.0c9459ef.js",
    "revision": "b5ab902c9040f6bfbb85f75d35523d13"
  },
  {
    "url": "assets/js/96.ec6a5ac6.js",
    "revision": "ad1d9b922d51ebcca4cdabaadfc72455"
  },
  {
    "url": "assets/js/97.7dae8a1e.js",
    "revision": "1b46d276caa515980e301e4a041ebe6e"
  },
  {
    "url": "assets/js/98.ab5112bb.js",
    "revision": "782eb3d038f4dd7791d3ca3d5a796c9a"
  },
  {
    "url": "assets/js/99.98d8f4bd.js",
    "revision": "5d6579c13bbd290946b19fdc81e5ae81"
  },
  {
    "url": "assets/js/app.cd71ed4a.js",
    "revision": "8f10c892e4ca97377fe46d0c676ab82e"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "3cf4e8f8c199084a35635bd628fccc43"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "d254a144cbbbaf50fafb1a8f973431bc"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "6a02ec7b7abf8762e7a4e4c0b4364b0d"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "b3861a5f4011aba184ea5a6dca71cfb5"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "7801ec936fe6de01228b2a349c1da93a"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "10369503236376cefa8e4c704742ae5d"
  },
  {
    "url": "composable/date/now.html",
    "revision": "bd75be8c358978c6398d031f71e779d9"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "cf1e034aa4a0ecbb7a89ec856a0dc701"
  },
  {
    "url": "composable/event/event.html",
    "revision": "9df5b78b031873c0c94b5be1c899524f"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "d0969a199b8bc12de7e9037037864938"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "a1d69b9446ebd49506fab5258509247e"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "56a20b3abe922505e2c5edf40cabb87a"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "cef3eb843145921a64e4d393b072f223"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "b4328be9ee531149f0ee43202853510f"
  },
  {
    "url": "composable/format/format.html",
    "revision": "fc1ea526013a1fd161b5a7998169c4ad"
  },
  {
    "url": "composable/format/path.html",
    "revision": "3819a6144bcb679caa6b06a47e5b7ffb"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "c1f6b06186de532061d2d34ea15f194b"
  },
  {
    "url": "composable/index.html",
    "revision": "8f5e3668bac48ac096d965e42d2d9185"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "daa5c238d0d1255600fa484f2cb4164f"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "623c1627f8dfa701427f3faffacf1a17"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "470f84a077d9677d1d8a4e9b56938e37"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "89409fe3d0958b4faf698782a636674c"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "360542f3ad4b0e245a8c29f577eaec13"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "c089f4a396aecf2c8d3064fbfb80caed"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "2f3c01a3ca64ac6ccaf1b0bae04d71ee"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "d79ac395c4a90b1ebd26a5a8e3272006"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "0c4295330e610891b5fa56c98ad2ec5e"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "1f23aeee86dbe1b8d95433cf6cb3e0d6"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "4c9eb8b3d796dfab75bb64e05a72ad2a"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "d9a382253e01f6122a057caa309e16ec"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "c05a7630e3fa8f9cf78f622bdf1a24ba"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "3f035b1d4f25e95fd3b8221430fcc904"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "317e8b91429174a17c03841f95e235c4"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "e6790bd89a0b856921f9a7420f2a516f"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "0a6d36a089f83331b8b018501b7a5d1f"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "ce2b1168133ba2e99174afba6432d041"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "c228f536787797be8f714497f84f8c9b"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "923179931a12a42214b464d14f97ccb3"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "5ab6be3bbded1240238e6ba63534d100"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "ae275ee882800cb49a61d9a36ba40c5f"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "8a66a3dc50b75cf0be01dc76729133bd"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "d04232cbb5dd3749710ba592e4a36b55"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "aa254f509b82c328cb6bbb9ff166c4c5"
  },
  {
    "url": "composable/web/language.html",
    "revision": "74ef367dac1a6c9a5ccf2a4e95053358"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "aec1c5b6d7a32436337bff9e0bfc19da"
  },
  {
    "url": "composable/web/online.html",
    "revision": "db3d3fa41a294ffb6700ca0c54ac1161"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "06f3383daa007e53413deb1ffdefa042"
  },
  {
    "url": "composable/web/share.html",
    "revision": "a1b76ffe641dc7c4a6d1d7d788442a7d"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "6c7b97b56b049e65b2063811482bb412"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "800d244f39cdf3bef10f94e695c41c21"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "25308150485acff16c59e4f49fb66326"
  },
  {
    "url": "Examples/index.html",
    "revision": "8a774dd90cd14703ee67138bfbaedd42"
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
    "revision": "b9ed9c5257c4684f94c330cae60541d5"
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
