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
    "revision": "ad69853c2a31534811aa4d9aa3ae1505"
  },
  {
    "url": "api/axios.api.html",
    "revision": "d7a5716ba848e67dfbf5b3cdd676ac18"
  },
  {
    "url": "api/core.api.html",
    "revision": "ebc84650680ee55eb8edb0054536586e"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "b84a196f796fc984a11dfa354c4147e6"
  },
  {
    "url": "api/web.api.html",
    "revision": "bdf54b67b0740e85c31b4b4fd88d1a25"
  },
  {
    "url": "assets/css/2.styles.5b97ddb8.css",
    "revision": "8b8cdd2c45f55f08e17d61b29466cdd9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.1dc96119.js",
    "revision": "de42fb736cfb2274f8ba071df433a020"
  },
  {
    "url": "assets/js/1.ca7cca52.js",
    "revision": "40905edae09e7dbf1a3e21d7dafaca14"
  },
  {
    "url": "assets/js/10.2796c2aa.js",
    "revision": "8cebad95edd5a2888cc6af0a83050f84"
  },
  {
    "url": "assets/js/100.23934ed0.js",
    "revision": "5f88e8c0005c7f9bd8adb5a5af02cc22"
  },
  {
    "url": "assets/js/101.1facb2bf.js",
    "revision": "5138f2c907969fa4df28bf258fa9ce0d"
  },
  {
    "url": "assets/js/102.29007dbd.js",
    "revision": "1dbbaeecb401a36adcac4a225a3131c2"
  },
  {
    "url": "assets/js/103.809f3513.js",
    "revision": "95699282e27504d4d2acf3b0ea845929"
  },
  {
    "url": "assets/js/104.8905153e.js",
    "revision": "5d9dbaaa02d7f78a53ec56a17c281c30"
  },
  {
    "url": "assets/js/105.db34bf17.js",
    "revision": "0da9c76f911f88cd09c48e761b8a82ab"
  },
  {
    "url": "assets/js/106.8877f7bc.js",
    "revision": "79e27fc6ebb2c926c5ce8198eddb6ab5"
  },
  {
    "url": "assets/js/107.37c72234.js",
    "revision": "03b5809a8f4c0a6706486c05b90cc0cb"
  },
  {
    "url": "assets/js/108.2b8ffe91.js",
    "revision": "af106137dd8851fdc570a4f05f7feb70"
  },
  {
    "url": "assets/js/11.6baf9a52.js",
    "revision": "c052ac4e2d51b7ad04286c83fc6fcecc"
  },
  {
    "url": "assets/js/12.e67d79a4.js",
    "revision": "8e4e244d17158296b44b0c1c3ca3e267"
  },
  {
    "url": "assets/js/13.efc2e488.js",
    "revision": "8de5effc94571b56aabc8800d9164e01"
  },
  {
    "url": "assets/js/14.df2d2647.js",
    "revision": "dcea91bca31492929fd7747b23a43bab"
  },
  {
    "url": "assets/js/15.9e2a21b1.js",
    "revision": "b309914922852d41af42bfe9d4549787"
  },
  {
    "url": "assets/js/16.02a6ff78.js",
    "revision": "01950cdc0da00052b8d9e2658ae7dc67"
  },
  {
    "url": "assets/js/17.a8360b92.js",
    "revision": "28875b3c70a3578449a7ee30467e2ceb"
  },
  {
    "url": "assets/js/18.ef2a600f.js",
    "revision": "cfb1ce5af4d7082d4502d4a9d905e241"
  },
  {
    "url": "assets/js/19.6d03dc05.js",
    "revision": "7604d502d8b2f4c2a2ba5db99a294418"
  },
  {
    "url": "assets/js/20.10c0c3c3.js",
    "revision": "81ec276eb9d7cd19bc3505d997ff1763"
  },
  {
    "url": "assets/js/21.f612873c.js",
    "revision": "6aadb4bb1951d4906343db6c4d657090"
  },
  {
    "url": "assets/js/22.d2a9562d.js",
    "revision": "a2ded318ab7015eaf14c9a547c67b769"
  },
  {
    "url": "assets/js/23.1387d98a.js",
    "revision": "e98b68a224eece849f85f6c4dfac4994"
  },
  {
    "url": "assets/js/24.5b68e87a.js",
    "revision": "3e44cec166bf65f3209e5728d675d239"
  },
  {
    "url": "assets/js/25.5d196686.js",
    "revision": "72915cedf5c34fd0341577af8a7edeab"
  },
  {
    "url": "assets/js/26.aba30798.js",
    "revision": "a63060b2aac6866e53e0d52e38352874"
  },
  {
    "url": "assets/js/27.f6da48d0.js",
    "revision": "869c12d05dd849b4a2388290408aeded"
  },
  {
    "url": "assets/js/28.397df336.js",
    "revision": "0f8ebd44eab7490f84ffe3c8ee8f84ca"
  },
  {
    "url": "assets/js/29.d41e5708.js",
    "revision": "c35cfcb6481629b492e8adeb5cb8cb55"
  },
  {
    "url": "assets/js/30.b93bb967.js",
    "revision": "c706c2be357215f71df678de121c262c"
  },
  {
    "url": "assets/js/31.c06e98c7.js",
    "revision": "345d82346c8e1d846f13702d1a27db16"
  },
  {
    "url": "assets/js/32.03a261f7.js",
    "revision": "321f0aeb424148a5267d4c47e99cd013"
  },
  {
    "url": "assets/js/33.0f38fd12.js",
    "revision": "408afca3b7c28b807a7032f200fb8026"
  },
  {
    "url": "assets/js/34.b066d9be.js",
    "revision": "dcee2ca29379431764529f8b7e2b2f72"
  },
  {
    "url": "assets/js/35.1b5b1ac8.js",
    "revision": "29503112156424224211db3603e8153a"
  },
  {
    "url": "assets/js/36.024e53cd.js",
    "revision": "3c4adbdf793397292334653822bb2e99"
  },
  {
    "url": "assets/js/37.bdbbffb7.js",
    "revision": "fd4581d6c0d6a44e9de26006ee3e9271"
  },
  {
    "url": "assets/js/38.e5d974a7.js",
    "revision": "1bf313b0be899825251979c38d0376aa"
  },
  {
    "url": "assets/js/39.8448e6e7.js",
    "revision": "bda12fce519d10ac91aece8739a2f3f8"
  },
  {
    "url": "assets/js/4.817d576a.js",
    "revision": "3a9ddf04219af7e3aa05d59e8f882569"
  },
  {
    "url": "assets/js/40.d03cc6af.js",
    "revision": "43fbc8b33e30e0d2cccca89a76f804c8"
  },
  {
    "url": "assets/js/41.444b136f.js",
    "revision": "e89f405ee35d12bf045bb461aeb34b97"
  },
  {
    "url": "assets/js/42.62db6a43.js",
    "revision": "337eeb6617b1e887e035ac5c8823b724"
  },
  {
    "url": "assets/js/43.3f04ee32.js",
    "revision": "7f9146fd5dc75c2e4468bcb69ef6eeeb"
  },
  {
    "url": "assets/js/44.ef309264.js",
    "revision": "f2102ea36df0fba9ea520053faf2cc5c"
  },
  {
    "url": "assets/js/45.827c4c4e.js",
    "revision": "c0d6548cef3facaaf3438a1df20408de"
  },
  {
    "url": "assets/js/46.0f868d4d.js",
    "revision": "bb6e1830bb9b02a33bf57ce0b28d3201"
  },
  {
    "url": "assets/js/47.5d257cea.js",
    "revision": "8fb57ad47a96e998dcb6978c5557397f"
  },
  {
    "url": "assets/js/48.b0e305f6.js",
    "revision": "9b207561f36ca86dac5aa35c9dc82450"
  },
  {
    "url": "assets/js/49.6f79f25b.js",
    "revision": "307b860723fa57eb64a791003f90c056"
  },
  {
    "url": "assets/js/5.511be1ae.js",
    "revision": "7b81dd540fbbf106d85ff37ab4cd49ec"
  },
  {
    "url": "assets/js/50.23804d6a.js",
    "revision": "686173909ca7178ef6cd933268512c0d"
  },
  {
    "url": "assets/js/51.88571378.js",
    "revision": "5d6f210d2cd75687a142d4b70c2e7aad"
  },
  {
    "url": "assets/js/52.6b5e264c.js",
    "revision": "bbe29fd91d3bc2bbfbc68d131adb526d"
  },
  {
    "url": "assets/js/53.a5e4d695.js",
    "revision": "ae6811847853c3289b581994c1889602"
  },
  {
    "url": "assets/js/54.75cd43e9.js",
    "revision": "ca9068915354341b5878a7e22fbed222"
  },
  {
    "url": "assets/js/55.7944d462.js",
    "revision": "d48bce6a4173740ed9879991a9d53f2b"
  },
  {
    "url": "assets/js/56.d8ba03ef.js",
    "revision": "3b9b527890af7cda3eaddf4c1f5dde5d"
  },
  {
    "url": "assets/js/57.31e1b839.js",
    "revision": "677fb500a15e8e9a99814692955cca07"
  },
  {
    "url": "assets/js/58.b0103a90.js",
    "revision": "dbe1b0e24eb23047507f0649ae62f7c8"
  },
  {
    "url": "assets/js/59.01b7e065.js",
    "revision": "31cfef78374eff581455f3dfb705bb05"
  },
  {
    "url": "assets/js/6.ef9ed42e.js",
    "revision": "cc8f68398e55eaf63a43b3a9898da506"
  },
  {
    "url": "assets/js/60.8ffedfc4.js",
    "revision": "d9335dfa0c355c61b1464e34e99a92f8"
  },
  {
    "url": "assets/js/61.29a687e8.js",
    "revision": "0793b1db6160f2e303b1b8e723b511a3"
  },
  {
    "url": "assets/js/62.b9a7bfde.js",
    "revision": "d74ed06f79d540ee6ea64c1d69447836"
  },
  {
    "url": "assets/js/63.ebd4d263.js",
    "revision": "6a5848e9f7c87bd3f979fdf18b294850"
  },
  {
    "url": "assets/js/64.3482de25.js",
    "revision": "0017daebfe4fa0e7df92c0c305e30ba6"
  },
  {
    "url": "assets/js/65.591165f3.js",
    "revision": "e189b5356e040b6f1539fd0adc001f1e"
  },
  {
    "url": "assets/js/66.3582878b.js",
    "revision": "2909580a7e3cabd0cf08c6d2d684850a"
  },
  {
    "url": "assets/js/67.da96bfff.js",
    "revision": "218cd4d0ac78f32d17d42309468e67d2"
  },
  {
    "url": "assets/js/68.dc6ae7e2.js",
    "revision": "aab8843ac32341a97bbe602c7e548d10"
  },
  {
    "url": "assets/js/69.49e65176.js",
    "revision": "50f6c15e7764e670f1d0da630b29e75e"
  },
  {
    "url": "assets/js/7.db22b1b3.js",
    "revision": "0462c5f559ab93ae2559f8160460bf70"
  },
  {
    "url": "assets/js/70.cbea06c6.js",
    "revision": "a0288de6a00dc262e9cbe6a25d0d8716"
  },
  {
    "url": "assets/js/71.7866ce23.js",
    "revision": "1065d3240a7b387420c2f5f59e6f194e"
  },
  {
    "url": "assets/js/72.b3c1bf6a.js",
    "revision": "0707e471e924c9e1a8ec4fa57ea532b6"
  },
  {
    "url": "assets/js/73.b562b847.js",
    "revision": "8fa99e1c72d725dad2996bbc4936c0a6"
  },
  {
    "url": "assets/js/74.9f80abf8.js",
    "revision": "fc3eeff6b9b842387c349b2043e41dcb"
  },
  {
    "url": "assets/js/75.cb06714e.js",
    "revision": "0ad30e749507aeeb012a43c565e5d014"
  },
  {
    "url": "assets/js/76.364dd4e5.js",
    "revision": "728fa8dc94cf28c2bdf3d3bbd883a123"
  },
  {
    "url": "assets/js/77.d4949071.js",
    "revision": "83c9f4762dda383e86f4deb9ee96e303"
  },
  {
    "url": "assets/js/78.e35392b9.js",
    "revision": "63910a252d1c593d409c049149d9d673"
  },
  {
    "url": "assets/js/79.acb06ecb.js",
    "revision": "211036926417e661ff284dd378b0eaa9"
  },
  {
    "url": "assets/js/8.4079b0f7.js",
    "revision": "205f41cfdd89d174473a4dfb935bfa51"
  },
  {
    "url": "assets/js/80.a255ca43.js",
    "revision": "7019e5c03eea6f588c47e05d06cd7b5a"
  },
  {
    "url": "assets/js/81.7f00e205.js",
    "revision": "8349d80e0a081caec193f8dbffa0a163"
  },
  {
    "url": "assets/js/82.39927fe6.js",
    "revision": "6c2bbd47fe48373cc33f391dc1d04209"
  },
  {
    "url": "assets/js/83.51641f76.js",
    "revision": "99109aece55980e063449b0d3f464d24"
  },
  {
    "url": "assets/js/84.27501f3a.js",
    "revision": "5ead00216acbe86ef3d1774c40238e0b"
  },
  {
    "url": "assets/js/85.80899799.js",
    "revision": "8abded15c6cc6aa714bdc55f2c9c7f8f"
  },
  {
    "url": "assets/js/86.2c517bb7.js",
    "revision": "30e33d77858fcaad868cf374c02ace58"
  },
  {
    "url": "assets/js/87.cf790e92.js",
    "revision": "25aef1a784d7a22362400da0845ee1fd"
  },
  {
    "url": "assets/js/88.162285c2.js",
    "revision": "5e6a5f799bcd8b509c06b0bee72e92b0"
  },
  {
    "url": "assets/js/89.8e004190.js",
    "revision": "08dc67a0c2313745479dff3a18a62995"
  },
  {
    "url": "assets/js/9.ba6a0390.js",
    "revision": "979995691feb118a3408feca8bdebb0e"
  },
  {
    "url": "assets/js/90.3c603b26.js",
    "revision": "d2a366af73406a622221ca7a662074f4"
  },
  {
    "url": "assets/js/91.6b7f480e.js",
    "revision": "fa08c852d7d2a95aeccf6189fa5717ec"
  },
  {
    "url": "assets/js/92.87635016.js",
    "revision": "fe582194f3e502fec7a0ff957395e6e1"
  },
  {
    "url": "assets/js/93.bf3e843d.js",
    "revision": "858c8163c49331be0707be64201db3e1"
  },
  {
    "url": "assets/js/94.c828c810.js",
    "revision": "53152ce12afc51b7ccd71e5c644ae063"
  },
  {
    "url": "assets/js/95.df4f1ac5.js",
    "revision": "05d8c71d37096377c243a5645a89d1ce"
  },
  {
    "url": "assets/js/96.3726a1c3.js",
    "revision": "5c6d0b7f64cf7e1c2eba89d65f2a9c43"
  },
  {
    "url": "assets/js/97.792985d8.js",
    "revision": "16f0b928ca0e85a58cd325b4fb2597d9"
  },
  {
    "url": "assets/js/98.0ad2063e.js",
    "revision": "1ab377ae3e8ea195806055ca4a60ec62"
  },
  {
    "url": "assets/js/99.3e0fce2e.js",
    "revision": "27a40fb11df5eda95de42af7aa588cb1"
  },
  {
    "url": "assets/js/app.948b27b3.js",
    "revision": "33499e21c9ca45ba35e5041214fb871c"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "4419a21a7c43af74bd9a5db33f67b023"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "ba2b67ba95f9bc5ae562264a93bfec6f"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "522c7b4f824841df43b5881cf466b4e6"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "c844c7fce6338751595df8c4ecd97cce"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "f65370e6f80a0fea4244beca8af19343"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "648ba6b562c1973aa0e2649c7ee9a431"
  },
  {
    "url": "composable/date/now.html",
    "revision": "39bcd0cd367691dba5d4e31522434ab9"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "ff9fab1dac848468890eeca66cf682ed"
  },
  {
    "url": "composable/event/event.html",
    "revision": "6a0bfa889530db526263bdc8b226a407"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "e422cbfe62fbc43064580d7ccb181cf5"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "0cdc8df74cf9dcc3eb2109bd921f3ff3"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "4766b2c8aa1db935323d14dd2a9826bd"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "6b9be48e7583e8ea6ff54de8e60ec128"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "aa88f888017ed7f51928188b66a7d790"
  },
  {
    "url": "composable/format/format.html",
    "revision": "bcb76044ed02c750b2748512e895285b"
  },
  {
    "url": "composable/format/path.html",
    "revision": "9d507eda69fd035f109af6ef33500068"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "8f19fd1a352ef8e03149eba3b415f23e"
  },
  {
    "url": "composable/index.html",
    "revision": "11294501f8743e702e30a33be0833b66"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "02399e57f215b4dd6f35ad09813e42ed"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "4c5e13b41365489c5ee52dfdc69f5a43"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "55bae1e83f004f90e19308a1d72880b1"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "1c2251a76d424b17369f782f850166ad"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "63712bc12caa888cea12cabfbbd868a6"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "6fd17592842a26bc5cd5054f40c66e15"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "7ba7c69be0b0a87fa5367d8a88750f56"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "28f7f76c0c02deb1496b30f74bb6940d"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "3ed1038a7c58ac06fa87f5d4058ca36c"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "3e724cabe21c1e2220d5c43a2e59e9b8"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "664a231f41ba6b0851db5bc73a8a742d"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "e3a8263b785f7e40ac39bda6afcbcede"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "21c8931608dfeb38b4bab331ff8509c2"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "df97b25d86d1dc124ee7191a4b4f9cb3"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "22f9b0f12858ddb7f7452ef076aed9b9"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "176604188a3df0f4c69385d59d6456fe"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "617d6968126ed142f265f5c8ad06789f"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "d2bd1fa99f3c644757bdfb245eb6c8a9"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "5b066d2661193e043087511f560d54d5"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "6dd97c79e0ac8d083d7980c4c998206e"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "3cbacab04bfbad2a4c44f815910a7fff"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "773f911ef293b031464d0a45f4bdf5b0"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "70ce671b8173b9fa27ab2a9204e5ecf7"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "2d40515a32aaa59e91f8891f3c8a258a"
  },
  {
    "url": "composable/web/language.html",
    "revision": "4f4318d260fe0a5e60e8d8a4228754a3"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "c3a2bf2fc482c72e4bdf9fb1b0a9fec9"
  },
  {
    "url": "composable/web/online.html",
    "revision": "f84174c5ee6dab8a53f45c66316831d5"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "20368eadde5b32c951b90bbb39e6c1f2"
  },
  {
    "url": "composable/web/share.html",
    "revision": "4a8808e36538b010f3b36bf7ca70a4f8"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "8404f0b327ba32520ec9608c42ab1f2f"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "c9c4b0a77b49dcc90cb9e25924b26e3f"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "3a504e86217f124c9fc1a1d26ed2bd07"
  },
  {
    "url": "Examples/index.html",
    "revision": "56989d289903a2dd02e49149769f9dd3"
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
    "revision": "3256df2a5a7cba22c0adf16ec2cd156d"
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
