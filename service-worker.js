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
    "revision": "31a8e856ba46ef6043fd336b0fe44cde"
  },
  {
    "url": "api/axios.api.html",
    "revision": "8dda27f1a4f508c77d5acb1fb6b2ad59"
  },
  {
    "url": "api/core.api.html",
    "revision": "009dde667a0c42faff07b5c6d8a20f85"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "174b257d8a9a7214371d4d0d8e5c3feb"
  },
  {
    "url": "api/web.api.html",
    "revision": "da9c406c572648a52eee937e35a3a071"
  },
  {
    "url": "assets/css/2.styles.7a7969f8.css",
    "revision": "b41178b59c66518fac8b35d9c7be731b"
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
    "url": "assets/js/1.61161786.js",
    "revision": "b63d94906b2c3fba1c8bffe558d234f7"
  },
  {
    "url": "assets/js/10.7e0a2997.js",
    "revision": "37324a8ec9fdca082f6757374e5a276b"
  },
  {
    "url": "assets/js/100.ce089eac.js",
    "revision": "dc4cfd6480b057f4a116a9ad7e2001ec"
  },
  {
    "url": "assets/js/101.c4e9daed.js",
    "revision": "f6e729e0ce3491c3bb44ba6d9fa39b15"
  },
  {
    "url": "assets/js/102.75641e8b.js",
    "revision": "104889e24d9f38859645526b1aece615"
  },
  {
    "url": "assets/js/103.27f792fb.js",
    "revision": "32bfce00d1a0b9b26b13f5bd827b05ad"
  },
  {
    "url": "assets/js/104.25cc96af.js",
    "revision": "7f041dc59b98b334f2ed6893bd6916f8"
  },
  {
    "url": "assets/js/105.c2a129db.js",
    "revision": "012d80b5eade23b1ad919f3aac5d64e3"
  },
  {
    "url": "assets/js/106.8bd0859d.js",
    "revision": "edaf8453e6215b852ae02857f45db235"
  },
  {
    "url": "assets/js/107.69f092be.js",
    "revision": "2abf33d2f033c3bd98246d7ddc164476"
  },
  {
    "url": "assets/js/108.5e56c98e.js",
    "revision": "30f5afadc04289c0b414a58751b2c34f"
  },
  {
    "url": "assets/js/109.9cb21aba.js",
    "revision": "3916c2213cf21b6eb2339d46016f7d7c"
  },
  {
    "url": "assets/js/11.0b6b8131.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.bd665ccd.js",
    "revision": "f7e9e587bc798331c5ab6dbe8fb2355c"
  },
  {
    "url": "assets/js/111.cb41f07b.js",
    "revision": "43d9ea0ea5ffa7c7806f8b308b5cd565"
  },
  {
    "url": "assets/js/112.723ddfcf.js",
    "revision": "72d61c2ee7bbdefa4d8e0bf3dc264c7f"
  },
  {
    "url": "assets/js/113.21a96fe2.js",
    "revision": "3e99a2d55889525fa7aff98795aa789e"
  },
  {
    "url": "assets/js/114.9e2dbecc.js",
    "revision": "5b36455866d018fb125087595fd18cd1"
  },
  {
    "url": "assets/js/115.416fad0f.js",
    "revision": "aa26864766a4bf5fe610a52008f0edbe"
  },
  {
    "url": "assets/js/116.4862e56e.js",
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
    "url": "assets/js/13.1a38c888.js",
    "revision": "1aba39ca03663600db45394ac412492e"
  },
  {
    "url": "assets/js/14.d040c6a0.js",
    "revision": "48d5ba01af5fdd1ed1a76c881bb852b7"
  },
  {
    "url": "assets/js/15.a70a261f.js",
    "revision": "9e45dcfcc2dc47a79e42b5eadf24d9c8"
  },
  {
    "url": "assets/js/16.88e9619c.js",
    "revision": "fd9d8031d3d7dfd450ee226e0b61b4f4"
  },
  {
    "url": "assets/js/17.c94b006a.js",
    "revision": "776f568a9c26f1cadd059b33bc69cfee"
  },
  {
    "url": "assets/js/18.a02ea1c3.js",
    "revision": "34d47884c8a98cbcbfad864cde93adc0"
  },
  {
    "url": "assets/js/19.8e368437.js",
    "revision": "c47e6828b96e733b0f1314a7312dc92b"
  },
  {
    "url": "assets/js/20.c50030ff.js",
    "revision": "d166a8be71f9eaca411dd95f7f504d71"
  },
  {
    "url": "assets/js/21.aa825015.js",
    "revision": "1417550e4fd6638da05754c741efdb44"
  },
  {
    "url": "assets/js/22.b019e8a5.js",
    "revision": "5fc21e4834df8399f587bc51156cb396"
  },
  {
    "url": "assets/js/23.d68914e7.js",
    "revision": "d0f564d3d0ce18b47c6ad0a8a96f6c7b"
  },
  {
    "url": "assets/js/24.ada5444c.js",
    "revision": "b0d827b1a8cfbe28c1d659a0dba4ea15"
  },
  {
    "url": "assets/js/25.72225406.js",
    "revision": "65f5eba314394386e31c151ce3c2c0b1"
  },
  {
    "url": "assets/js/26.07e7d596.js",
    "revision": "8cd4dd034e6c178d9b5e69ad18916157"
  },
  {
    "url": "assets/js/27.0ad36501.js",
    "revision": "050cfeaccfcf4a45ad58031aa27c4a9e"
  },
  {
    "url": "assets/js/28.e4753145.js",
    "revision": "54e9e7daa1da7fce00ebcbd27d9793dd"
  },
  {
    "url": "assets/js/29.109f0475.js",
    "revision": "8be34dcd3e62a8677c7b7834c5b87934"
  },
  {
    "url": "assets/js/30.ad840f58.js",
    "revision": "70a01abcdd73ab4532fca0a7aca3950b"
  },
  {
    "url": "assets/js/31.36467ae9.js",
    "revision": "5c27e14b2c77743b6a357448368e76e1"
  },
  {
    "url": "assets/js/32.e2cfdde2.js",
    "revision": "b1d36316938f01b15cac29ea6b855866"
  },
  {
    "url": "assets/js/33.bbc3dffb.js",
    "revision": "7916e6772169bd4df6d48bc7233c2a34"
  },
  {
    "url": "assets/js/34.847c9370.js",
    "revision": "54e41f5fbb39e746006dd04684e7ed57"
  },
  {
    "url": "assets/js/35.17361778.js",
    "revision": "7c7ff074da7a27ac59c9e6c7700e6e51"
  },
  {
    "url": "assets/js/36.7ff4beaa.js",
    "revision": "3c7565ba43ebf5f95a9e63315e8159d2"
  },
  {
    "url": "assets/js/37.040efa38.js",
    "revision": "6b67035a3a8e6d38e1c2bb47ca9edded"
  },
  {
    "url": "assets/js/38.b5061edc.js",
    "revision": "15afe95506663d4e8c7bae5850be718a"
  },
  {
    "url": "assets/js/39.47a77915.js",
    "revision": "6d98243301b49f4f017ff3fd29286f54"
  },
  {
    "url": "assets/js/4.8cf43a1e.js",
    "revision": "cce014705ab81e99f9df6a3ba5a5f0b9"
  },
  {
    "url": "assets/js/40.1a4b9751.js",
    "revision": "58150a81365fd7637b6be4d381f9c932"
  },
  {
    "url": "assets/js/41.c0756155.js",
    "revision": "d861f5b39286e4330ee370efb461689b"
  },
  {
    "url": "assets/js/42.d20fea3d.js",
    "revision": "d851752de55443b1d4b556a2df5beb2d"
  },
  {
    "url": "assets/js/43.6409a9d9.js",
    "revision": "b778d4e95362366b0430024076499054"
  },
  {
    "url": "assets/js/44.251aa38a.js",
    "revision": "614dc4b3aa291210683b1343c64e2990"
  },
  {
    "url": "assets/js/45.6da54298.js",
    "revision": "958761147e5664e382bff4dc8efba2e8"
  },
  {
    "url": "assets/js/46.820896bf.js",
    "revision": "bccd1177676ba8ad0dd2c9eb8a7950db"
  },
  {
    "url": "assets/js/47.154b0258.js",
    "revision": "00418f826d33f1f548e53016a51a2ea1"
  },
  {
    "url": "assets/js/48.5c1111c2.js",
    "revision": "00913a8eaccb0cfb3639c0fa2ec404da"
  },
  {
    "url": "assets/js/49.c9183125.js",
    "revision": "1e67968f87a970530aa9882707144890"
  },
  {
    "url": "assets/js/5.3fc7c62a.js",
    "revision": "232909725d4ab97bcab48cc0e458ac63"
  },
  {
    "url": "assets/js/50.a3c3d8a8.js",
    "revision": "3f57494d97d3bd3c8877fcc16e8ee817"
  },
  {
    "url": "assets/js/51.e5cfd505.js",
    "revision": "52620435ab7e853f4ddf648d1c3b9924"
  },
  {
    "url": "assets/js/52.c87cb8ad.js",
    "revision": "f6b81bfe76490fd97d633f1025ba09d2"
  },
  {
    "url": "assets/js/53.bf00c8cc.js",
    "revision": "056936d38629723990e484b1b3c9bd52"
  },
  {
    "url": "assets/js/54.7a57f078.js",
    "revision": "91a7413df28468b0ae631fef43562f52"
  },
  {
    "url": "assets/js/55.98e05abe.js",
    "revision": "bb678f22046ed37c29d4aac46b2849a5"
  },
  {
    "url": "assets/js/56.453f96c6.js",
    "revision": "4d644e94107129d617302560f0631040"
  },
  {
    "url": "assets/js/57.08ed4664.js",
    "revision": "6e3c8a16aff5856ba131ec4a3be2feb3"
  },
  {
    "url": "assets/js/58.04529710.js",
    "revision": "8ae9a2887335e5f00b48e337bffaf41a"
  },
  {
    "url": "assets/js/59.fb263312.js",
    "revision": "ce76b8ccb348b2c3e95c42ff48d14a07"
  },
  {
    "url": "assets/js/6.6bfdb089.js",
    "revision": "bc1738da9458d0bcfb0687fff2cf2359"
  },
  {
    "url": "assets/js/60.d863dab0.js",
    "revision": "722843591cee9a9cb4b31858a8efdceb"
  },
  {
    "url": "assets/js/61.64aa5954.js",
    "revision": "bd599e3ad49744d33ad1eab523773bfa"
  },
  {
    "url": "assets/js/62.5dddfab1.js",
    "revision": "1c6edeed33f565797e821ad9f07f3e22"
  },
  {
    "url": "assets/js/63.6333cd0c.js",
    "revision": "d07b5729c2a88522972c0c16281df042"
  },
  {
    "url": "assets/js/64.dd280533.js",
    "revision": "fcc0d469a009a1331c347e8981013b42"
  },
  {
    "url": "assets/js/65.042c690d.js",
    "revision": "d11f4fae8846c1630f4f89e95aff6651"
  },
  {
    "url": "assets/js/66.875dc317.js",
    "revision": "b43f1503a2f5da9cd5738fe5d6c766f3"
  },
  {
    "url": "assets/js/67.645e092b.js",
    "revision": "546e3901549bdc717fef11936ce1e519"
  },
  {
    "url": "assets/js/68.e84ddf2e.js",
    "revision": "9c8c22e4db64709fd48c8be54e900df1"
  },
  {
    "url": "assets/js/69.13b3edf7.js",
    "revision": "d8234de66c6dbce083e2957055964ba7"
  },
  {
    "url": "assets/js/7.b3d326d6.js",
    "revision": "eeda74ba86e067e73c1aa2685255ca68"
  },
  {
    "url": "assets/js/70.b6fb80a9.js",
    "revision": "7d084465aafbe3f30f3997bfc0a8b325"
  },
  {
    "url": "assets/js/71.986450f5.js",
    "revision": "679de1216b871168357c321a01a3567a"
  },
  {
    "url": "assets/js/72.914ea1f6.js",
    "revision": "dd062f894a4edd5b35cd141fbf0766f6"
  },
  {
    "url": "assets/js/73.077629cc.js",
    "revision": "1913f42222b7784aabd4e415e2b0656d"
  },
  {
    "url": "assets/js/74.ee2ae381.js",
    "revision": "9804ac698f267ed4085f0b5ab6007e13"
  },
  {
    "url": "assets/js/75.2bf84725.js",
    "revision": "5930e1874800c0c85f55288f756c3324"
  },
  {
    "url": "assets/js/76.c47fb301.js",
    "revision": "20f002e30ee3b6253fb10fc4328fe3c2"
  },
  {
    "url": "assets/js/77.858bbc13.js",
    "revision": "e0edfdef20f0e64c8439aeb5df4b55ed"
  },
  {
    "url": "assets/js/78.ac6e49bb.js",
    "revision": "a31af031a728c58113333967789c1044"
  },
  {
    "url": "assets/js/79.c62a66a3.js",
    "revision": "2dc6b07af63b998273776cd2922d2f82"
  },
  {
    "url": "assets/js/8.c5d7ccbd.js",
    "revision": "c51e5daee960861eebb8d9072cf64d2a"
  },
  {
    "url": "assets/js/80.7fbce11f.js",
    "revision": "64d5164bd30a9f7875d9b2c122b3168b"
  },
  {
    "url": "assets/js/81.92563702.js",
    "revision": "8f10644ed1097d659a3d400ecf120e61"
  },
  {
    "url": "assets/js/82.44f2b554.js",
    "revision": "5965b6e9c7fe6c0105d0bf2d17104ddd"
  },
  {
    "url": "assets/js/83.ae733f2b.js",
    "revision": "8a434e8e15743eff2ec3f7134e211dac"
  },
  {
    "url": "assets/js/84.7992aa1d.js",
    "revision": "2a51c31ed5dd34eb25acb4d3ee246e85"
  },
  {
    "url": "assets/js/85.0e03e616.js",
    "revision": "fbb27711ed239897aab0d4d87491349d"
  },
  {
    "url": "assets/js/86.a818df6a.js",
    "revision": "97a7c618a92fdaebb5f910a2487a4db0"
  },
  {
    "url": "assets/js/87.4fc9ce8a.js",
    "revision": "bd75b75007a8910f646ce6e922fb0637"
  },
  {
    "url": "assets/js/88.76248dc5.js",
    "revision": "f29db7630786baf920f9c691dd225e38"
  },
  {
    "url": "assets/js/89.32976413.js",
    "revision": "a8780bd37dea54a32ee8ff4807ef39a4"
  },
  {
    "url": "assets/js/9.ade6a848.js",
    "revision": "fb42f25bc4918cae866627632178e231"
  },
  {
    "url": "assets/js/90.60d016a9.js",
    "revision": "8b2272ff2c1ce1024bdcc09b91914850"
  },
  {
    "url": "assets/js/91.2df6405c.js",
    "revision": "83d7130a42dfaa696e550560156bbfec"
  },
  {
    "url": "assets/js/92.1e4fa018.js",
    "revision": "82a97c0c9aee00b36185fe4b225c0e0b"
  },
  {
    "url": "assets/js/93.8c38d496.js",
    "revision": "a8ce7674e5c9c3afb5586c7f2d2d2214"
  },
  {
    "url": "assets/js/94.15d4af3b.js",
    "revision": "dfdee26800d27269b458c87043cee309"
  },
  {
    "url": "assets/js/95.ec8ee56a.js",
    "revision": "9c448a5554176d50ddab9bb8784f91af"
  },
  {
    "url": "assets/js/96.b69bccc3.js",
    "revision": "88201aa17a83e8a6f21127db9d49f54e"
  },
  {
    "url": "assets/js/97.e35c0542.js",
    "revision": "38cacc827576fdf57423d1ad2c5cc4f1"
  },
  {
    "url": "assets/js/98.553b1ab0.js",
    "revision": "cba0a276fb84f029440d0e0db175eb3c"
  },
  {
    "url": "assets/js/99.d0c6a524.js",
    "revision": "52f6e3a1d3fd31b78662d6b4f43a5ad8"
  },
  {
    "url": "assets/js/app.624468b0.js",
    "revision": "f56cfac944fa285d814fb31778e20eb6"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "a84aa404983ba5fbb261bfa18bfc0b68"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "932cda37b4e1ffaa136fdbe977a13abb"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "0f9027a0f92443a3bec0da102520151b"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "2f6f18fc2f2ba3277f40b51dc31ca919"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "66a8d737507b1a69252c0b79b96bd531"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "fa8395135a098ab771b338e47ec5a775"
  },
  {
    "url": "composable/date/now.html",
    "revision": "2130eb2cbcff5da000433992659ae1e4"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "dfa9231b4c6b08dd48508b788ff496fe"
  },
  {
    "url": "composable/event/event.html",
    "revision": "7b59f0bd52b110b296b59efa12450b2f"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "bbe87044337f70c0cc7b4e44e06060a3"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "1b0287efd833bdaf32f46840e922934a"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "bd6c6953fdc88163d9b2493bbe9c6c58"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "d1e08f85f9675a26358e6b6d2d82ade3"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "89e08dc496a7ce1b89fecd74606c20cc"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "7507d1a8e480fd30098bee8fe9e36bb1"
  },
  {
    "url": "composable/format/format.html",
    "revision": "296e4cf3e6a65d26f6e51cb3362b7e1a"
  },
  {
    "url": "composable/format/path.html",
    "revision": "c501a67d2aea46292c51277867dbdf8f"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "0e767bd32a6be7d9a6aef8adfe678a7e"
  },
  {
    "url": "composable/index.html",
    "revision": "d929d506ce84bc805d655bf623d94561"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "ff92151ecf7d1e9763c72e5034dd6f40"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "21d958f2396dd2cfc240ad595d21fb14"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "fab20c5cf0273edee2f5dfb0f26d0e84"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "e9386188f9a055fd0db7c49a2bf1e0f0"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "0722b45546be63b906fc491b70807473"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "291fa71634cb7364ec8351eafd60b001"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "1a48ad1f17ffa10aec98854241ee25c0"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "acd448037dcee04194eff855795e16ed"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "057ec0c7f0848fb6cc51ddcb20d8885a"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "f151124e0e4a5a664af4c8703e9061d9"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "7b04e138076ce47a617b8b7910b17a7b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "98946519f55768a138d6d71e28881ef3"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "bc906d6920e73c8cb542941e796fdd49"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "15a71c320917cfd0a90f2559113e96d2"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "4ffcb835d489074d50953f974b026cd3"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "3dd76b8ce66c16bd682bc56916720238"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "2e7f4d85dfa38c8cedbaf0621905ce99"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "6426788c80a8b0b4f04630b9bc882cea"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "8dcd952f0998e9b5052c749447d50f3a"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "9a5c00500666a7b41e6595572dab7234"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "ad06dd0fe2f953ec976634974707af75"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "9db5eb3f9e76e49ab34c11aff46d726d"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "7bb9648dc486f02b56ebd9eef432615f"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "053061c11149634f8a066f4768be9cb9"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "e8d1241e3edd54f8bd75fcf99e703dd9"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "b3dfcd0adcc708902d357b9427e96be5"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "358e1362251269ea5235f83a6873a5c2"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "b741969f25d32e270708a0acdb311c43"
  },
  {
    "url": "composable/web/language.html",
    "revision": "422bf3231b3135a70e6c746ae648e1e7"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "8d51e791a041c78bf4204b328ee49a6c"
  },
  {
    "url": "composable/web/online.html",
    "revision": "5d167c306a8d110765d3f6996a79fb20"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "2b921c9e2adf2d940126a8ce0f68f58c"
  },
  {
    "url": "composable/web/share.html",
    "revision": "d155cd19a49606602b6e564d8233da5d"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "42d70881a99cf64806f06adb208d2990"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "e2969a00fba8bf02bd4740db3c5215c2"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "ad904f45f039570fb08ef67497f74676"
  },
  {
    "url": "Examples/index.html",
    "revision": "8c9615ce1daac159e3f67c540bcb3f60"
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
    "revision": "eb74c56905dd34a4830ba407811a9fe5"
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
