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
    "revision": "92ebe56e1be952b0e8a439c361efbe9f"
  },
  {
    "url": "api/axios.api.html",
    "revision": "ff15e07dcc514e2b3190e0d996c188ba"
  },
  {
    "url": "api/core.api.html",
    "revision": "4822899785b4f14a65a3d4d4a95eab7e"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "a21abef6292e2badc7612e76e952f6fb"
  },
  {
    "url": "api/web.api.html",
    "revision": "6994134b45161196885a9f92a76e21e8"
  },
  {
    "url": "assets/css/2.styles.9db3d7f9.css",
    "revision": "9ae9fd4cbb3dee78580cbc53a3066fbb"
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
    "url": "assets/js/1.bcd7a000.js",
    "revision": "db1ced0b55f0422deee0168648006e97"
  },
  {
    "url": "assets/js/10.a5f75d92.js",
    "revision": "37324a8ec9fdca082f6757374e5a276b"
  },
  {
    "url": "assets/js/100.fb68e0d2.js",
    "revision": "dc4cfd6480b057f4a116a9ad7e2001ec"
  },
  {
    "url": "assets/js/101.926e28c2.js",
    "revision": "f6e729e0ce3491c3bb44ba6d9fa39b15"
  },
  {
    "url": "assets/js/102.2b898292.js",
    "revision": "104889e24d9f38859645526b1aece615"
  },
  {
    "url": "assets/js/103.d3ed602c.js",
    "revision": "32bfce00d1a0b9b26b13f5bd827b05ad"
  },
  {
    "url": "assets/js/104.98bb72b3.js",
    "revision": "7f041dc59b98b334f2ed6893bd6916f8"
  },
  {
    "url": "assets/js/105.b5046f06.js",
    "revision": "012d80b5eade23b1ad919f3aac5d64e3"
  },
  {
    "url": "assets/js/106.fc9960ba.js",
    "revision": "edaf8453e6215b852ae02857f45db235"
  },
  {
    "url": "assets/js/107.20702133.js",
    "revision": "2abf33d2f033c3bd98246d7ddc164476"
  },
  {
    "url": "assets/js/108.625ef473.js",
    "revision": "30f5afadc04289c0b414a58751b2c34f"
  },
  {
    "url": "assets/js/109.d2fe94ba.js",
    "revision": "3916c2213cf21b6eb2339d46016f7d7c"
  },
  {
    "url": "assets/js/11.2c6c2fbc.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.8ea1f24a.js",
    "revision": "f7e9e587bc798331c5ab6dbe8fb2355c"
  },
  {
    "url": "assets/js/111.c0da7ed7.js",
    "revision": "43d9ea0ea5ffa7c7806f8b308b5cd565"
  },
  {
    "url": "assets/js/112.fb066930.js",
    "revision": "72d61c2ee7bbdefa4d8e0bf3dc264c7f"
  },
  {
    "url": "assets/js/113.5ff30ffa.js",
    "revision": "3e99a2d55889525fa7aff98795aa789e"
  },
  {
    "url": "assets/js/114.9c6716cd.js",
    "revision": "5b36455866d018fb125087595fd18cd1"
  },
  {
    "url": "assets/js/115.83125f15.js",
    "revision": "aa26864766a4bf5fe610a52008f0edbe"
  },
  {
    "url": "assets/js/116.c23fddbe.js",
    "revision": "d27df4fc12ff2e1693e166325f92a445"
  },
  {
    "url": "assets/js/117.57e93c20.js",
    "revision": "5986f6ce8c3cce9b20c068af272d6e9f"
  },
  {
    "url": "assets/js/12.0f398068.js",
    "revision": "c5961ef62d6c8207ca7f2dab89c9ebd4"
  },
  {
    "url": "assets/js/13.5d15d990.js",
    "revision": "8fb7f353151cffb4e7feb16a9cf0fb34"
  },
  {
    "url": "assets/js/14.61bc8be4.js",
    "revision": "48d5ba01af5fdd1ed1a76c881bb852b7"
  },
  {
    "url": "assets/js/15.e1e3ba8b.js",
    "revision": "9e45dcfcc2dc47a79e42b5eadf24d9c8"
  },
  {
    "url": "assets/js/16.7cb3d419.js",
    "revision": "fd9d8031d3d7dfd450ee226e0b61b4f4"
  },
  {
    "url": "assets/js/17.19f6a1d1.js",
    "revision": "776f568a9c26f1cadd059b33bc69cfee"
  },
  {
    "url": "assets/js/18.34e5e9e0.js",
    "revision": "34d47884c8a98cbcbfad864cde93adc0"
  },
  {
    "url": "assets/js/19.8552faa8.js",
    "revision": "c47e6828b96e733b0f1314a7312dc92b"
  },
  {
    "url": "assets/js/20.e2a0e416.js",
    "revision": "afe9525f572d6c4ac5d0f45d7476bfd7"
  },
  {
    "url": "assets/js/21.e3836284.js",
    "revision": "1417550e4fd6638da05754c741efdb44"
  },
  {
    "url": "assets/js/22.ed5c8fc2.js",
    "revision": "5fc21e4834df8399f587bc51156cb396"
  },
  {
    "url": "assets/js/23.9939014e.js",
    "revision": "e4b7e053c633eec9c4c241b10b9cd794"
  },
  {
    "url": "assets/js/24.ff9c2484.js",
    "revision": "b0d827b1a8cfbe28c1d659a0dba4ea15"
  },
  {
    "url": "assets/js/25.dc993e21.js",
    "revision": "65f5eba314394386e31c151ce3c2c0b1"
  },
  {
    "url": "assets/js/26.09314024.js",
    "revision": "8cd4dd034e6c178d9b5e69ad18916157"
  },
  {
    "url": "assets/js/27.2611dae9.js",
    "revision": "050cfeaccfcf4a45ad58031aa27c4a9e"
  },
  {
    "url": "assets/js/28.8af33b2a.js",
    "revision": "710d877ef1a1e3608950079780d881c7"
  },
  {
    "url": "assets/js/29.bd556da7.js",
    "revision": "8be34dcd3e62a8677c7b7834c5b87934"
  },
  {
    "url": "assets/js/30.41dea793.js",
    "revision": "70a01abcdd73ab4532fca0a7aca3950b"
  },
  {
    "url": "assets/js/31.891a6085.js",
    "revision": "5c27e14b2c77743b6a357448368e76e1"
  },
  {
    "url": "assets/js/32.0f3e4cf2.js",
    "revision": "b1d36316938f01b15cac29ea6b855866"
  },
  {
    "url": "assets/js/33.b50c5f81.js",
    "revision": "7916e6772169bd4df6d48bc7233c2a34"
  },
  {
    "url": "assets/js/34.0b578040.js",
    "revision": "54e41f5fbb39e746006dd04684e7ed57"
  },
  {
    "url": "assets/js/35.0cbf0ff2.js",
    "revision": "7c7ff074da7a27ac59c9e6c7700e6e51"
  },
  {
    "url": "assets/js/36.9aeeafcc.js",
    "revision": "3c7565ba43ebf5f95a9e63315e8159d2"
  },
  {
    "url": "assets/js/37.0b422db1.js",
    "revision": "8627b9ecd5b05eb4beaaddfc06dc1787"
  },
  {
    "url": "assets/js/38.6512a558.js",
    "revision": "15afe95506663d4e8c7bae5850be718a"
  },
  {
    "url": "assets/js/39.7ebd91b4.js",
    "revision": "6d98243301b49f4f017ff3fd29286f54"
  },
  {
    "url": "assets/js/4.28672fdb.js",
    "revision": "9a4bb3abc682c23b74e8a5bd043ebb82"
  },
  {
    "url": "assets/js/40.146cd47d.js",
    "revision": "58150a81365fd7637b6be4d381f9c932"
  },
  {
    "url": "assets/js/41.ed291925.js",
    "revision": "d861f5b39286e4330ee370efb461689b"
  },
  {
    "url": "assets/js/42.5dcc14e7.js",
    "revision": "80726881a4c29dbc10c0f64db00cd5ec"
  },
  {
    "url": "assets/js/43.73a66fb9.js",
    "revision": "b778d4e95362366b0430024076499054"
  },
  {
    "url": "assets/js/44.b478d99d.js",
    "revision": "614dc4b3aa291210683b1343c64e2990"
  },
  {
    "url": "assets/js/45.056dee85.js",
    "revision": "958761147e5664e382bff4dc8efba2e8"
  },
  {
    "url": "assets/js/46.77018d11.js",
    "revision": "bccd1177676ba8ad0dd2c9eb8a7950db"
  },
  {
    "url": "assets/js/47.8c45d283.js",
    "revision": "feaca011683409793ed10fa5577ac110"
  },
  {
    "url": "assets/js/48.bd3a0efc.js",
    "revision": "00913a8eaccb0cfb3639c0fa2ec404da"
  },
  {
    "url": "assets/js/49.ffc91e92.js",
    "revision": "1e67968f87a970530aa9882707144890"
  },
  {
    "url": "assets/js/5.3a64806d.js",
    "revision": "06bfdae6c332f46974267eeaf83889c4"
  },
  {
    "url": "assets/js/50.a52986b5.js",
    "revision": "3f57494d97d3bd3c8877fcc16e8ee817"
  },
  {
    "url": "assets/js/51.901f3b4e.js",
    "revision": "52620435ab7e853f4ddf648d1c3b9924"
  },
  {
    "url": "assets/js/52.d69efd82.js",
    "revision": "f6b81bfe76490fd97d633f1025ba09d2"
  },
  {
    "url": "assets/js/53.b59450f2.js",
    "revision": "d8860b604023a9e25c5a9a0173782a7f"
  },
  {
    "url": "assets/js/54.5979f54a.js",
    "revision": "91a7413df28468b0ae631fef43562f52"
  },
  {
    "url": "assets/js/55.d4aa4ea0.js",
    "revision": "bb678f22046ed37c29d4aac46b2849a5"
  },
  {
    "url": "assets/js/56.687bdcfc.js",
    "revision": "4d644e94107129d617302560f0631040"
  },
  {
    "url": "assets/js/57.198ca06e.js",
    "revision": "6e3c8a16aff5856ba131ec4a3be2feb3"
  },
  {
    "url": "assets/js/58.0c3a1407.js",
    "revision": "8ae9a2887335e5f00b48e337bffaf41a"
  },
  {
    "url": "assets/js/59.2875bc06.js",
    "revision": "ce76b8ccb348b2c3e95c42ff48d14a07"
  },
  {
    "url": "assets/js/6.83f4ef8e.js",
    "revision": "bc1738da9458d0bcfb0687fff2cf2359"
  },
  {
    "url": "assets/js/60.5d9a4754.js",
    "revision": "8010b1d65a05b571a2f6a94a20377b73"
  },
  {
    "url": "assets/js/61.86397a36.js",
    "revision": "bd599e3ad49744d33ad1eab523773bfa"
  },
  {
    "url": "assets/js/62.e501a564.js",
    "revision": "1c6edeed33f565797e821ad9f07f3e22"
  },
  {
    "url": "assets/js/63.3fee586f.js",
    "revision": "d07b5729c2a88522972c0c16281df042"
  },
  {
    "url": "assets/js/64.f0cd0d4b.js",
    "revision": "fcc0d469a009a1331c347e8981013b42"
  },
  {
    "url": "assets/js/65.c0b78806.js",
    "revision": "d11f4fae8846c1630f4f89e95aff6651"
  },
  {
    "url": "assets/js/66.26367af7.js",
    "revision": "b43f1503a2f5da9cd5738fe5d6c766f3"
  },
  {
    "url": "assets/js/67.63f984f4.js",
    "revision": "546e3901549bdc717fef11936ce1e519"
  },
  {
    "url": "assets/js/68.8ddf3dc6.js",
    "revision": "9c8c22e4db64709fd48c8be54e900df1"
  },
  {
    "url": "assets/js/69.51dc8f64.js",
    "revision": "d8234de66c6dbce083e2957055964ba7"
  },
  {
    "url": "assets/js/7.90d6ae63.js",
    "revision": "eeda74ba86e067e73c1aa2685255ca68"
  },
  {
    "url": "assets/js/70.4f9fe2a8.js",
    "revision": "7d084465aafbe3f30f3997bfc0a8b325"
  },
  {
    "url": "assets/js/71.c90447d5.js",
    "revision": "679de1216b871168357c321a01a3567a"
  },
  {
    "url": "assets/js/72.5dec23c3.js",
    "revision": "dd062f894a4edd5b35cd141fbf0766f6"
  },
  {
    "url": "assets/js/73.96f057ad.js",
    "revision": "1913f42222b7784aabd4e415e2b0656d"
  },
  {
    "url": "assets/js/74.82260439.js",
    "revision": "9804ac698f267ed4085f0b5ab6007e13"
  },
  {
    "url": "assets/js/75.180c70dc.js",
    "revision": "5930e1874800c0c85f55288f756c3324"
  },
  {
    "url": "assets/js/76.bfebfcfc.js",
    "revision": "20f002e30ee3b6253fb10fc4328fe3c2"
  },
  {
    "url": "assets/js/77.860bd696.js",
    "revision": "e0edfdef20f0e64c8439aeb5df4b55ed"
  },
  {
    "url": "assets/js/78.36d351eb.js",
    "revision": "a31af031a728c58113333967789c1044"
  },
  {
    "url": "assets/js/79.446b4155.js",
    "revision": "2dc6b07af63b998273776cd2922d2f82"
  },
  {
    "url": "assets/js/8.c67a3c87.js",
    "revision": "c51e5daee960861eebb8d9072cf64d2a"
  },
  {
    "url": "assets/js/80.df7576b3.js",
    "revision": "64d5164bd30a9f7875d9b2c122b3168b"
  },
  {
    "url": "assets/js/81.bd7004cf.js",
    "revision": "8f10644ed1097d659a3d400ecf120e61"
  },
  {
    "url": "assets/js/82.abfa07a9.js",
    "revision": "5965b6e9c7fe6c0105d0bf2d17104ddd"
  },
  {
    "url": "assets/js/83.14763883.js",
    "revision": "4940c07178645f67c121be797246773b"
  },
  {
    "url": "assets/js/84.e83557ad.js",
    "revision": "2a51c31ed5dd34eb25acb4d3ee246e85"
  },
  {
    "url": "assets/js/85.0d1b87e4.js",
    "revision": "fbb27711ed239897aab0d4d87491349d"
  },
  {
    "url": "assets/js/86.0b363684.js",
    "revision": "97a7c618a92fdaebb5f910a2487a4db0"
  },
  {
    "url": "assets/js/87.8c1f203a.js",
    "revision": "bd75b75007a8910f646ce6e922fb0637"
  },
  {
    "url": "assets/js/88.a37a4f0c.js",
    "revision": "f29db7630786baf920f9c691dd225e38"
  },
  {
    "url": "assets/js/89.644afb1e.js",
    "revision": "a8780bd37dea54a32ee8ff4807ef39a4"
  },
  {
    "url": "assets/js/9.91e849a4.js",
    "revision": "fb42f25bc4918cae866627632178e231"
  },
  {
    "url": "assets/js/90.6f951c09.js",
    "revision": "8b2272ff2c1ce1024bdcc09b91914850"
  },
  {
    "url": "assets/js/91.c3629606.js",
    "revision": "83d7130a42dfaa696e550560156bbfec"
  },
  {
    "url": "assets/js/92.1d7ba205.js",
    "revision": "e98e15fc8639b0e724226f2aac1a2409"
  },
  {
    "url": "assets/js/93.c15a407e.js",
    "revision": "a8ce7674e5c9c3afb5586c7f2d2d2214"
  },
  {
    "url": "assets/js/94.ee6130d9.js",
    "revision": "dfdee26800d27269b458c87043cee309"
  },
  {
    "url": "assets/js/95.0d30d9a5.js",
    "revision": "9c448a5554176d50ddab9bb8784f91af"
  },
  {
    "url": "assets/js/96.83d71391.js",
    "revision": "88201aa17a83e8a6f21127db9d49f54e"
  },
  {
    "url": "assets/js/97.2773ef88.js",
    "revision": "38cacc827576fdf57423d1ad2c5cc4f1"
  },
  {
    "url": "assets/js/98.35bf4cad.js",
    "revision": "cba0a276fb84f029440d0e0db175eb3c"
  },
  {
    "url": "assets/js/99.bb195d30.js",
    "revision": "52f6e3a1d3fd31b78662d6b4f43a5ad8"
  },
  {
    "url": "assets/js/app.2341c55f.js",
    "revision": "b8fc1970a46f3f67615c30e306ac61d1"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "c2d8d02c9659deff42984e8c9da80a25"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "ad3e8d61a7e14f97a9a75e3192dcbf42"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "1bc1043a8c7532cb767a66ae1a88b198"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "9c192b6959ceebd61ae43a2d792747ee"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "e1d082ba6e4d6e87426f0b760c5bb831"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "680d76a3cf7e69ae7d362d13b0310e3a"
  },
  {
    "url": "composable/date/now.html",
    "revision": "877216636544f88ae6b6b13b388db361"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "5fcea17d03a74937a04e7fa5f0cc46a9"
  },
  {
    "url": "composable/event/event.html",
    "revision": "a16959d5016fb7c4cb142425d16c5c19"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "8f74a8b83dd5e6512f6787b103237752"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "eead76b7649cc5fd22f6a9e7c89cd64d"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "6767f3e19e2b1237188ceabb0bf00469"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "c50078dfec2beb14b508a6f5ac8a4b23"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "ad4ce5714bed48b9953269be532aaefe"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "c92cfc6563508b0a2a0786885be3b3b9"
  },
  {
    "url": "composable/format/format.html",
    "revision": "5a32af1b27cb756c6c5f919e16383632"
  },
  {
    "url": "composable/format/path.html",
    "revision": "24288f366e8ec40471e7ff949f16dea6"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "36f48733ce84332f5a3685698df30843"
  },
  {
    "url": "composable/index.html",
    "revision": "398607be54245cd59fd36bbe034848e1"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "02b334f4a0e7bd29070d06ca7d356b36"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "4dba3147fdd46da8a2d80dcb3cbb8177"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "d82f1a55f933e8993a885ced3005e9a5"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "5cd934d6667b8ffa7d4a9f8108210067"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "4427bdde2e249d50532268524d888c9e"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "66955e98c3f7ff3f76e4e2573326d0fa"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "e7f92ca85c6871ccdb20ae2067a691db"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "92a9bac12f1b082deb34d501ad0df61f"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "1235f424c6f15105eaf5d2f02d7cc57f"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "21542d429e09dc25baff6dafd85f60a9"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "10df9aab0f0ae87ae234fde85c8b2ae3"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "fa6dcd7adda50e2483c74c143239044b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "9b2e858d1ae589ef84fde4de32c44a8f"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b622def96eb749487f30d035dd55c43a"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "a39d75d6f4e3ed16defa0aed9d917178"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "7de9ea10c69d1db3ad67f3b5b81ef144"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "4fb93fc83597fda7855f48dcc59f9e16"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "55973ffc218565375bb9a2f70e7508e3"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "572fec3b9a284538e8972b81cb12ccbd"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "4b674cad2e28b383d030cc8c5e3e86d9"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "6b8b0627160753bacdd43ae058793dfc"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "cb8e4e2df54003706d6392b99185a011"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "4c375ca053d1488d3728b45c29bdf096"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "b2fad837e133d5a95b5196f94fcad102"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "74a800cb80e918114bfccec309422598"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "ca35adf56bfcad4c95323ba448dc76c5"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "e06ad9274d2433c03d612ba08ae4373a"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "95d31298204b0643d460c57bf2375e94"
  },
  {
    "url": "composable/web/language.html",
    "revision": "ac6fcca0405559afac2171a090642e18"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "e07a90bc2b52d71714a78ff581f7927b"
  },
  {
    "url": "composable/web/online.html",
    "revision": "a19f096a330a800b2fca737320289cdc"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "33f91b261c948619ff63f439bfad71ae"
  },
  {
    "url": "composable/web/share.html",
    "revision": "02e8a6deb0ffeb94738302067b7bc9c7"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "4190955239ce0c2fd4bedaf0b337b7da"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "5c113bbba5a20e5b0f40fcb4e07bd285"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "ca1a45d24573ce0249796aa89728abab"
  },
  {
    "url": "Examples/index.html",
    "revision": "a3e1f33922e98f579d405abc121ec950"
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
    "revision": "62cce5ecbee121cbfe68c6d1840f78d9"
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
