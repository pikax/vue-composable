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
    "revision": "512f4729931e4d5d5d5793ca983eb082"
  },
  {
    "url": "api/axios.api.html",
    "revision": "4e077e23cb53401a13fa1e9141547637"
  },
  {
    "url": "api/core.api.html",
    "revision": "abdd4f1ba23d7e3755f26221d77a243e"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "0afb4e6d39ed3030513aea7f3f845ff3"
  },
  {
    "url": "api/web.api.html",
    "revision": "a392bb04f231408dcd73ccc621c03478"
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
    "url": "assets/js/0.53cc946f.js",
    "revision": "4422893d2d2ca7061590928344c4b31a"
  },
  {
    "url": "assets/js/1.a6ceed95.js",
    "revision": "b0471149819307ad676a2507fa03d727"
  },
  {
    "url": "assets/js/10.ace5ec0a.js",
    "revision": "45063f38c4c556e98b9df4697585b32d"
  },
  {
    "url": "assets/js/100.a0317d05.js",
    "revision": "f1f46e47043a146faa9524fea42a03e0"
  },
  {
    "url": "assets/js/101.6cad9faf.js",
    "revision": "80fd06407a04ee1af239043cb2741ed7"
  },
  {
    "url": "assets/js/102.757ca17f.js",
    "revision": "2580864d9cb03688c2f5e0854e1edf6f"
  },
  {
    "url": "assets/js/103.75483ed7.js",
    "revision": "3b7bae6c277c2005af86c06f82e57856"
  },
  {
    "url": "assets/js/104.fc4b5db0.js",
    "revision": "22095b61388c8cfb5b5c2e423a05a6ea"
  },
  {
    "url": "assets/js/105.dc3e78f2.js",
    "revision": "ba8e1ce5eff2d5179ff95442750f4ccc"
  },
  {
    "url": "assets/js/106.32b239cd.js",
    "revision": "7ef5a457b2f3fa896eecf0fc3b77dca6"
  },
  {
    "url": "assets/js/107.8d1dfb28.js",
    "revision": "590d20c9f9c74d81f68abcff10d87818"
  },
  {
    "url": "assets/js/108.260ae7d4.js",
    "revision": "bf80972b270053146028161aec55804e"
  },
  {
    "url": "assets/js/109.206724ba.js",
    "revision": "fa7b6bf6cff7b5237c80e266a83882d9"
  },
  {
    "url": "assets/js/11.fc503868.js",
    "revision": "4b881a588109705955504ff7b35a2ef7"
  },
  {
    "url": "assets/js/110.067e4573.js",
    "revision": "d6174ac7bfce90fe479e11677c99b753"
  },
  {
    "url": "assets/js/111.876f6f2d.js",
    "revision": "cf4c4bf2b0dc5f260fdad94c8b5eac64"
  },
  {
    "url": "assets/js/112.ef7fb3b2.js",
    "revision": "870551933ee448548ab341f0784aae2a"
  },
  {
    "url": "assets/js/113.6de6ff67.js",
    "revision": "bee83a97c79cc258e7ed2c94e1ec1ade"
  },
  {
    "url": "assets/js/114.bd7863b9.js",
    "revision": "513032903c65c9e06b32c10aec64a332"
  },
  {
    "url": "assets/js/115.b36ebc12.js",
    "revision": "ee2dc5f647e9a905c6688fe4ef667135"
  },
  {
    "url": "assets/js/116.fa07a59a.js",
    "revision": "3acca9be514fa0cd9e62b8e614cd6a60"
  },
  {
    "url": "assets/js/117.b028267a.js",
    "revision": "69f33832ff1013f673cac137b3b70f1a"
  },
  {
    "url": "assets/js/118.0ee4d04c.js",
    "revision": "571aa2cff3d8486d14ecbf054919178c"
  },
  {
    "url": "assets/js/119.86b84503.js",
    "revision": "281ad8d00ecae0a6d13eca5dba18b6ee"
  },
  {
    "url": "assets/js/12.32b51a18.js",
    "revision": "59a0caa1e212c72b65fc56b79cdbd520"
  },
  {
    "url": "assets/js/120.956d612a.js",
    "revision": "a9c0812c9e55c7fab5e48aecebf8f7da"
  },
  {
    "url": "assets/js/121.254bc145.js",
    "revision": "47488898402c489a35144335200b1a7c"
  },
  {
    "url": "assets/js/122.f1750003.js",
    "revision": "3059fd371cf55972225b2cf013e4d7a5"
  },
  {
    "url": "assets/js/123.5bfc6770.js",
    "revision": "5fd73f58a0530f1ac6d170a4fa9f0155"
  },
  {
    "url": "assets/js/124.5d4c956f.js",
    "revision": "d47784e4863b5b99e66c7ff7bce2d015"
  },
  {
    "url": "assets/js/13.18799e93.js",
    "revision": "e667d244e195673683176d5220db315f"
  },
  {
    "url": "assets/js/14.f4dfa62f.js",
    "revision": "7d0fb2478a801f92e3d88b32b543a4c4"
  },
  {
    "url": "assets/js/15.e87703ee.js",
    "revision": "f1b62460b2b3ab885883d769452a787e"
  },
  {
    "url": "assets/js/16.4edfbc1d.js",
    "revision": "51c5ea914211d5e6bdde83c5bbadb607"
  },
  {
    "url": "assets/js/17.8297fa86.js",
    "revision": "3b7b7942d10895ead4d11c9795878b9e"
  },
  {
    "url": "assets/js/18.3af6c1b1.js",
    "revision": "33a14b58b7b3d64d223f0d3b9e124214"
  },
  {
    "url": "assets/js/19.2d59fed2.js",
    "revision": "f4a1022115c854016c5e85614b37024d"
  },
  {
    "url": "assets/js/20.b47c2364.js",
    "revision": "c275a2d56b8d264610d1cecacd76e754"
  },
  {
    "url": "assets/js/21.335ca6ea.js",
    "revision": "0dc21c89a74ee5ff1a52ceefd93dde16"
  },
  {
    "url": "assets/js/22.25d7620e.js",
    "revision": "0fc058b541a88bcbcab91f76351f88cd"
  },
  {
    "url": "assets/js/23.7fdaadbb.js",
    "revision": "24340e7d2d9c3e94cde651710db0a154"
  },
  {
    "url": "assets/js/24.f76b467b.js",
    "revision": "76da533b19fdb7fe66efc491e0d8df77"
  },
  {
    "url": "assets/js/25.8c9fef6c.js",
    "revision": "9817e44990195406344f4e9bd1070382"
  },
  {
    "url": "assets/js/26.7856dcaf.js",
    "revision": "4bf335ac4e8066187d62fef58256d9db"
  },
  {
    "url": "assets/js/27.f3205d9e.js",
    "revision": "4489e2647f94b2d83aa511b9e7041c91"
  },
  {
    "url": "assets/js/28.1b156a29.js",
    "revision": "4f59ba19a2d5d0581a63398d2b0a51e4"
  },
  {
    "url": "assets/js/29.de9db30f.js",
    "revision": "45432af4b55fb567c0332c6695c53450"
  },
  {
    "url": "assets/js/30.796e118b.js",
    "revision": "d356c74b8cf71c694eeaf07e03bef739"
  },
  {
    "url": "assets/js/31.c1095af9.js",
    "revision": "977ea9c929c437842754de1253baa1a4"
  },
  {
    "url": "assets/js/32.a3e7bc43.js",
    "revision": "d400eaa36b5ee5480aefbaa9fd44922c"
  },
  {
    "url": "assets/js/33.e5432f39.js",
    "revision": "9d7196e317c9295e2e763c07a9a42d34"
  },
  {
    "url": "assets/js/34.d860249f.js",
    "revision": "c90478efba191c713ca5aeadea8d976d"
  },
  {
    "url": "assets/js/35.66e6b878.js",
    "revision": "6cb190de16a5ec91cd3e549a66b342b4"
  },
  {
    "url": "assets/js/36.b65b81a8.js",
    "revision": "ebf6a39c17d3bdd8b4b05db6d96d1431"
  },
  {
    "url": "assets/js/37.e7c2fe32.js",
    "revision": "ded10ca8779920a3d759afd41a58566c"
  },
  {
    "url": "assets/js/38.8d5f7a18.js",
    "revision": "3fa7ae12e7990907716b712f38e5c2c6"
  },
  {
    "url": "assets/js/39.e38d6329.js",
    "revision": "48230b22a1e4ce6cfbb9131df051436d"
  },
  {
    "url": "assets/js/4.6fc787d9.js",
    "revision": "73355482319c178f7834770d756eef51"
  },
  {
    "url": "assets/js/40.d9089c64.js",
    "revision": "b954c3daea081edef5262ed2e0c63793"
  },
  {
    "url": "assets/js/41.d044535b.js",
    "revision": "3ca08dd61ea4531aeb1462836a537635"
  },
  {
    "url": "assets/js/42.a0c55d98.js",
    "revision": "e6c72e7a14b023117a6e79c5c3f8e5da"
  },
  {
    "url": "assets/js/43.823df00f.js",
    "revision": "2d766947840a979b56f81730b5e1b05c"
  },
  {
    "url": "assets/js/44.5daf087f.js",
    "revision": "25155fb735aab42d2ca12066d2558d9d"
  },
  {
    "url": "assets/js/45.229deb81.js",
    "revision": "71c1e258cb1f94efa28be5899c0c0550"
  },
  {
    "url": "assets/js/46.f8fb0684.js",
    "revision": "7e196d9e9bc82408674b7682083c2fa7"
  },
  {
    "url": "assets/js/47.292557b6.js",
    "revision": "2b49f77e68c9f267876ff86ae2f77498"
  },
  {
    "url": "assets/js/48.13742b04.js",
    "revision": "1ab26002070dd181229faa9434b6389e"
  },
  {
    "url": "assets/js/49.44076aec.js",
    "revision": "74065d84f37aa4415cf4d5dc4ef99f69"
  },
  {
    "url": "assets/js/5.d335550d.js",
    "revision": "0a6498349b9e85b7a88b3c77b3c85e55"
  },
  {
    "url": "assets/js/50.2074f19c.js",
    "revision": "331d0b2dca52373c9a14dbcb7af19a6d"
  },
  {
    "url": "assets/js/51.9b0d2270.js",
    "revision": "4a28f0a45f7441b7eb5d22e6e09ebf35"
  },
  {
    "url": "assets/js/52.48a9ac3f.js",
    "revision": "9ec5e838c60dc9982b5fdb7daa2b15f1"
  },
  {
    "url": "assets/js/53.4160e3ae.js",
    "revision": "86d832a334228801e952b13b07dadd5a"
  },
  {
    "url": "assets/js/54.e3c2a7a4.js",
    "revision": "6183657d2fa01e03ed75ee3d7a67b4c8"
  },
  {
    "url": "assets/js/55.99a1183c.js",
    "revision": "299c08bd2a013071d7af8b6454eca179"
  },
  {
    "url": "assets/js/56.993cc5c0.js",
    "revision": "38e10ab69fa10c45521e01563fb2a294"
  },
  {
    "url": "assets/js/57.553bbc26.js",
    "revision": "d6fc8ab0664f3ee5a92f83283dc5bd55"
  },
  {
    "url": "assets/js/58.2fa0f9f9.js",
    "revision": "15882a345a67a8ee74b141be5ee80da4"
  },
  {
    "url": "assets/js/59.4005f73d.js",
    "revision": "5a1f35f5a059f65b58c5a5fce183406f"
  },
  {
    "url": "assets/js/6.63f2a460.js",
    "revision": "fb01dff48ae26096aff4a198d27b44c4"
  },
  {
    "url": "assets/js/60.7a385c51.js",
    "revision": "bf133db32bf2c677534a6f052d9393d9"
  },
  {
    "url": "assets/js/61.2250e8ba.js",
    "revision": "e133b86068b03d27172d9c3d65d68b8a"
  },
  {
    "url": "assets/js/62.f0acaf38.js",
    "revision": "e6b0c0678f17f6a485b31b2fda343123"
  },
  {
    "url": "assets/js/63.af460cc5.js",
    "revision": "c2ab66ff949832eca80d52f251abfd23"
  },
  {
    "url": "assets/js/64.bb42c388.js",
    "revision": "2a5ae65b556de19fe0a2ac669fe9bf83"
  },
  {
    "url": "assets/js/65.bca62537.js",
    "revision": "ed66b4d1a29972001b6de7bfa08d45b5"
  },
  {
    "url": "assets/js/66.f6dff784.js",
    "revision": "a45887ecf8e4c7507cbd4f83254e47b4"
  },
  {
    "url": "assets/js/67.15cf6d08.js",
    "revision": "692178be659a5fca3d3a7cdfe8e65168"
  },
  {
    "url": "assets/js/68.f414bad6.js",
    "revision": "fc29eee3029f34fac6c9b9e57acd294d"
  },
  {
    "url": "assets/js/69.a4aaa69d.js",
    "revision": "36dbec8a6ec4c894f58a2e041255da0c"
  },
  {
    "url": "assets/js/7.c7c8e438.js",
    "revision": "8c2fa0de3bb702f3a2b525bc3326e2c6"
  },
  {
    "url": "assets/js/70.abd1958d.js",
    "revision": "f47a8cd004e7c10d60bcded8282490e0"
  },
  {
    "url": "assets/js/71.e901157c.js",
    "revision": "c611424e1f025d7b5339a38738588820"
  },
  {
    "url": "assets/js/72.f62d2020.js",
    "revision": "0c8c484e4335e2e45892fdd95f1bddd6"
  },
  {
    "url": "assets/js/73.5a32cf68.js",
    "revision": "504905bea9256062a60cd1e19bfb67f4"
  },
  {
    "url": "assets/js/74.13588a9e.js",
    "revision": "f0c8267b63d89299dcf01fd2c75acfff"
  },
  {
    "url": "assets/js/75.9de75964.js",
    "revision": "05267ca385d2c9d8984421f94c6d6f06"
  },
  {
    "url": "assets/js/76.08b387b1.js",
    "revision": "2ad089fe0e7917b1c2d1914cff48bcfc"
  },
  {
    "url": "assets/js/77.a09bf0b5.js",
    "revision": "5584a9bbd930dfc8fdbafd841370ef1d"
  },
  {
    "url": "assets/js/78.e75eef4f.js",
    "revision": "e5a961123f619740ffd708db7dda7e2a"
  },
  {
    "url": "assets/js/79.6b13e50b.js",
    "revision": "b4634f021cf2e5ce102663a9d1e8dbe8"
  },
  {
    "url": "assets/js/8.aa86163c.js",
    "revision": "c6b95ae524211224173b984f151e25c1"
  },
  {
    "url": "assets/js/80.97587cc6.js",
    "revision": "c6cd7ab9c4e3d0d9ede9f67197598787"
  },
  {
    "url": "assets/js/81.6e0c5b9a.js",
    "revision": "ed24496e0548ca1c835b740627f1cb0c"
  },
  {
    "url": "assets/js/82.46b3898d.js",
    "revision": "3de8910ac42a450d2aa2de02a7aac587"
  },
  {
    "url": "assets/js/83.65f69be8.js",
    "revision": "b67e2fb87a0ccdf00427ed7f5fff9238"
  },
  {
    "url": "assets/js/84.7615d796.js",
    "revision": "cbda5ed17535a99251f3d31e21b36c4b"
  },
  {
    "url": "assets/js/85.c6dd8f93.js",
    "revision": "a317b1994cf7c8374d4b8623b3edb2cd"
  },
  {
    "url": "assets/js/86.187a3b30.js",
    "revision": "f9003bebbbdf24fdb7a1d8de4c069913"
  },
  {
    "url": "assets/js/87.a3df6df2.js",
    "revision": "5892520776df5fddc0c8b1768fd483aa"
  },
  {
    "url": "assets/js/88.0fb31e34.js",
    "revision": "cfdaa53a3c7623020ad6dbefae83c6c0"
  },
  {
    "url": "assets/js/89.0965d579.js",
    "revision": "584d7a1d1cd65e6cb61b07583ebbcd22"
  },
  {
    "url": "assets/js/9.c0f06697.js",
    "revision": "b18cc34334a84faa3473078957cfa43f"
  },
  {
    "url": "assets/js/90.81820e74.js",
    "revision": "7e533fe10a0ab2f4804fda15b4392971"
  },
  {
    "url": "assets/js/91.4ea23ab0.js",
    "revision": "fe7f87d3d4a7aafca8f55f4690e04868"
  },
  {
    "url": "assets/js/92.150d4a7e.js",
    "revision": "e806df4f27979ffdc27dbab8848c5a7d"
  },
  {
    "url": "assets/js/93.b83ce8f2.js",
    "revision": "72f0ce5c015b9a6d5cafdc69cc145afc"
  },
  {
    "url": "assets/js/94.b41e89ef.js",
    "revision": "2684ee703d23d69df905c35af489f1be"
  },
  {
    "url": "assets/js/95.9becbfee.js",
    "revision": "d937055ca4f361b7d324fe5b408d8612"
  },
  {
    "url": "assets/js/96.a3030363.js",
    "revision": "c74843ee920a8ee1d534b9f519976357"
  },
  {
    "url": "assets/js/97.219fdec8.js",
    "revision": "58f392803ba89e2896bcaf6dd2851afd"
  },
  {
    "url": "assets/js/98.dd8f947d.js",
    "revision": "d21c31f9c007d17be7885be212f8c5cf"
  },
  {
    "url": "assets/js/99.07d06398.js",
    "revision": "37d1d7e60f6978f4b847118394ecb5fb"
  },
  {
    "url": "assets/js/app.6bfe345f.js",
    "revision": "1d4018c7f8400c52274db505e401524c"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "4fa65e1d153b487151f20276bf08647c"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "cc8be1401aca4c9a3f9eb0482061aecc"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "74a8421aa1419f6b8ef2dd9565256768"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "67cd4061c1b9022512b80397a55177bf"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "79f24768e109574d5e76087ae78fa8b8"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "521ad912b0ae374ef7df7ff6be2ce398"
  },
  {
    "url": "composable/date/now.html",
    "revision": "e926ff64dbdd2df6bd0d5a256e23746a"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "9bde14035e560aff0765ff549df86cf6"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "50e4f3e8fb19c45f5f540d0511e86a57"
  },
  {
    "url": "composable/event/event.html",
    "revision": "ff48c227787dddcf9c9dda7103100217"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "c37ec5ac75b0fde1970fe1c4007d4a00"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "d40c0ef8b89f47e3e18367472cffd034"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "8ca7ad7c65c9b751d1025c0b97dcf6e2"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "8365523850a51883b4250d92d1a086db"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "99a832dc43bfd2941ac02e530a5ddd00"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "c41cf24d5456cb69fbe8c0b73af0d6b9"
  },
  {
    "url": "composable/format/format.html",
    "revision": "5ac5bdf9d87458b5b5ea43dcb59d88d2"
  },
  {
    "url": "composable/format/path.html",
    "revision": "75eeea8f5b488a0410df0d27adf80844"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "9957f006ce19863790e5d2fbc6bf49df"
  },
  {
    "url": "composable/index.html",
    "revision": "26375a8f45807a8d14307005f022876f"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "6b6fc6f5e3c451d27ebc4d4518d9120b"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "282526591acef1f431ce351d02f0440f"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "b1cafdc7ebcdc33288e4338eb1ddf1ec"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "0398b32cb7cd63b771012e2fdcb124c3"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "4606c7c9a395a4085f912a2ff7adc6ae"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "5db63388bd48b5eef5eb421812552fc8"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "64c19df22d75b4df47983a55ae53815e"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "ed614399da72f7f7ea465822f8fc54a2"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "fb03d6d2874da5b4ab9d11219c985d54"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "054c83f6a8350ed23fe9e43320f46cd1"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "0d75684921e6ed93b2bb08be46d48182"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "f189db853e72093690fdaca84b5a42b8"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "97854980f53ec661b7818de71b1a4f1a"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "80c6daba97ffaf60a6da7b6aba5644e0"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "0ec15499f2ccd72a18b71f25bcb50464"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "88d441665266f0b79cd75f45e305f41b"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "fb4de8c805532b57be9ca16d2a939cb5"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "c01ba638eca253b0057b897c8c532b6a"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "c419dcb927107f2389ad00d709dafedd"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "52367e162d3db9644c0965d42cb06e8b"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "58b23622147f6009a6412f753b963e47"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "a7e1a01dc6f2c0c7d28330c4c3ac08d9"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "e06d316512915bd08adb8cad66fa2fdb"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "d82a159535a5316125c80d5108379144"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "645fc47c0f2660076eeb3196f278397c"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "7451883742a436fca9abcea083c03a39"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "1942afc4d17661cfd85ed516ea090e87"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "9b0582176d8a4fa614b2da96bd2bf378"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "7b27552cc921dd308b0120f7e45fbf22"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "7bd23d9ce836290ac13b08bdf0de3be4"
  },
  {
    "url": "composable/web/language.html",
    "revision": "35759f954658dfb7bf4ce4c59cae30ff"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "9f11ce06bc891303c4b24ca9b33b522f"
  },
  {
    "url": "composable/web/online.html",
    "revision": "26205628878d35026262884f01c8c986"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "72a846f398fed7cf76bfa58ac7418ebe"
  },
  {
    "url": "composable/web/share.html",
    "revision": "ef9af1f9fdc676c8cf3303a81aaabf74"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "3577e48026d666fe88a9da88d889cd3a"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "80ce4be171396b28c20ff4b064c9fab4"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "5323aabb92401be46d4d377cdcb2f3c0"
  },
  {
    "url": "Examples/index.html",
    "revision": "93cfa8b29c6a8317f0555fdb497d4ec4"
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
    "revision": "af9e1f270edd9d379e3c460411027c1f"
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
