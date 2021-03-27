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
    "revision": "93324385b1e93ad0fd5340cbdd19e7c1"
  },
  {
    "url": "api/axios.api.html",
    "revision": "f2612fc92be857f1e1da00c99db761ad"
  },
  {
    "url": "api/cookie.api.html",
    "revision": "bd88dc2151f1ec2f283ed42170a0e457"
  },
  {
    "url": "api/core.api.html",
    "revision": "7b85fb8564a8bebba4150b7350f6e356"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "177818e0adf7a4dbfec90f100b8e4dd2"
  },
  {
    "url": "api/web.api.html",
    "revision": "b574addce2109d685b502081a57973bf"
  },
  {
    "url": "assets/css/2.styles.08a81ced.css",
    "revision": "0cfc97604ebe40a1691231fc82812d5c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f0b23b33.js",
    "revision": "a41d9741693667cbcc34d2ac4d17b226"
  },
  {
    "url": "assets/js/1.89194adc.js",
    "revision": "84349003b13646813c6999a0581d4a5a"
  },
  {
    "url": "assets/js/10.b3b6b455.js",
    "revision": "cd6100c636d7614140e1ca866f078787"
  },
  {
    "url": "assets/js/100.6b48aae1.js",
    "revision": "5d0674b0a75a1c3df881436b34aaa92f"
  },
  {
    "url": "assets/js/101.1edf2756.js",
    "revision": "56b679d6b5f36acf5b69219c10ba73da"
  },
  {
    "url": "assets/js/102.622ba51b.js",
    "revision": "9a6aca249e3b138f5ad77e79f1b4a5be"
  },
  {
    "url": "assets/js/103.47ecf368.js",
    "revision": "8bfe8d831a2115e5cb17e7c6cf912a15"
  },
  {
    "url": "assets/js/104.a6beb05c.js",
    "revision": "5b85ed6c95819a2da93ccf2d27a9ff81"
  },
  {
    "url": "assets/js/105.83dead7c.js",
    "revision": "05e7d3645bb1e8ab77c8d3b2c62b871b"
  },
  {
    "url": "assets/js/106.06350edd.js",
    "revision": "6a90d767f77c3d10be94975b5d6126d8"
  },
  {
    "url": "assets/js/107.ad6abe84.js",
    "revision": "e4b90ddd83fe7445f1e6826b3b645539"
  },
  {
    "url": "assets/js/108.28167b13.js",
    "revision": "c204c7149611061445738dc672d86538"
  },
  {
    "url": "assets/js/109.6662de5b.js",
    "revision": "606180b50355f819f690fda6658e8a97"
  },
  {
    "url": "assets/js/11.07536317.js",
    "revision": "c70de5b0a312961048feb0ac48f79f53"
  },
  {
    "url": "assets/js/110.dc2e5b5a.js",
    "revision": "8b6576af678d0f6f0e1cdb9cd209c0fc"
  },
  {
    "url": "assets/js/111.8b6e90fb.js",
    "revision": "9256820fb7aa75368c988a78accf9680"
  },
  {
    "url": "assets/js/112.8b225c85.js",
    "revision": "1d7ee92b37d82ab1b474fa86dd7cead9"
  },
  {
    "url": "assets/js/113.b7e93e49.js",
    "revision": "8765892bc22a3990b823603fa4c558cb"
  },
  {
    "url": "assets/js/114.a9fa6ce5.js",
    "revision": "4643acc548d6416cd4c9b048e7e22b73"
  },
  {
    "url": "assets/js/115.54a2be9c.js",
    "revision": "e2802c5f3b8e548b63c53c8220acbbc8"
  },
  {
    "url": "assets/js/116.5ba09a56.js",
    "revision": "86632b517ae308779e40f3280eca3fe7"
  },
  {
    "url": "assets/js/117.e49d2454.js",
    "revision": "2f02d5ac7174c9a6a49777c71b0995f9"
  },
  {
    "url": "assets/js/118.048f5a51.js",
    "revision": "789ffe3d3d6097031c46e3470156cc4a"
  },
  {
    "url": "assets/js/119.189ecd7d.js",
    "revision": "c00a039ca7e1f5ffdb5f4223f06421ad"
  },
  {
    "url": "assets/js/12.ba70e594.js",
    "revision": "1aa0a89f755faaaed5654195d2c18582"
  },
  {
    "url": "assets/js/120.8cdc213b.js",
    "revision": "301872cbfa970e696acc511a8d7e634d"
  },
  {
    "url": "assets/js/121.201b003b.js",
    "revision": "9ebcaaa151500cbb20fb6ad09d8a62c6"
  },
  {
    "url": "assets/js/122.f3104818.js",
    "revision": "0a9b80459725ad0560e42d16f3b04752"
  },
  {
    "url": "assets/js/123.1e69acb3.js",
    "revision": "6765a372cdd3d493dc234a5e8d7ea03d"
  },
  {
    "url": "assets/js/124.7957acd0.js",
    "revision": "eb1a6f35f74e27f00c48721718a9ebdf"
  },
  {
    "url": "assets/js/125.b03c1387.js",
    "revision": "fe526da41a44ffc8ebeb4d047d0ccff6"
  },
  {
    "url": "assets/js/126.d9e706ec.js",
    "revision": "585e99700d1b15f531d6e5e7f2838e70"
  },
  {
    "url": "assets/js/127.d9e5347f.js",
    "revision": "d650a952c562d25cfbd062bc1352d855"
  },
  {
    "url": "assets/js/128.34241c90.js",
    "revision": "05d1ff9f81c476345e63b1f7b7a53abc"
  },
  {
    "url": "assets/js/129.e7075211.js",
    "revision": "0a3040cae05ca290c047bbf7b5d6eb95"
  },
  {
    "url": "assets/js/13.03b2b3da.js",
    "revision": "a9d1b72944733cf74f22f16bdd18aae3"
  },
  {
    "url": "assets/js/14.d8e925ee.js",
    "revision": "d577deb3061446a1d4dd0e2501b14349"
  },
  {
    "url": "assets/js/15.3c2c78f5.js",
    "revision": "3bbfdd7f0efdf2c86b5bf90e12fca245"
  },
  {
    "url": "assets/js/16.0933fd06.js",
    "revision": "5753a08c7df76a3696dbe73a33968312"
  },
  {
    "url": "assets/js/17.676761bf.js",
    "revision": "bc9ff70803b871b8f1827d1e1309d379"
  },
  {
    "url": "assets/js/18.75054703.js",
    "revision": "6a2a30cf327b070b8e03aaf4691bbe35"
  },
  {
    "url": "assets/js/19.225034cd.js",
    "revision": "9ea58a842163d2b04eb8c812440ba289"
  },
  {
    "url": "assets/js/20.163706eb.js",
    "revision": "63ba4ec96051496dec7bd7db7bab0a6c"
  },
  {
    "url": "assets/js/21.6633eaa7.js",
    "revision": "6689ebca0bb01dc18a1c5402c9550d79"
  },
  {
    "url": "assets/js/22.1f2a22dc.js",
    "revision": "6962528f1d9fead271881daba6d8e8b4"
  },
  {
    "url": "assets/js/23.ad873c86.js",
    "revision": "7aa3f54e49bcc8159264512db79623a3"
  },
  {
    "url": "assets/js/24.c62f1bf7.js",
    "revision": "d19bffc1f5ea1b55f8be6da94f6e1fc4"
  },
  {
    "url": "assets/js/25.c0d360d7.js",
    "revision": "fae05d88dcd7c0b6be62f1edbc82a02b"
  },
  {
    "url": "assets/js/26.91ad6548.js",
    "revision": "d3d945fa68c79275eda99da7ac0c1a8a"
  },
  {
    "url": "assets/js/27.7556f62f.js",
    "revision": "cef50e158563e2be827f3af6cd0200ca"
  },
  {
    "url": "assets/js/28.da4b4963.js",
    "revision": "3cbc95b583a9c4819f759050623893c9"
  },
  {
    "url": "assets/js/29.e06d3b32.js",
    "revision": "3e21398a3b5fc11b3c35637d8604a26e"
  },
  {
    "url": "assets/js/30.0a155d27.js",
    "revision": "1241e20f0d61cf534a0cc2a0ba3e1ee8"
  },
  {
    "url": "assets/js/31.00f98e7f.js",
    "revision": "d28dcf31db9fccbcd21e2dda383f4c99"
  },
  {
    "url": "assets/js/32.30d4433c.js",
    "revision": "e9abda3a81cffe4f0306d5c273379d53"
  },
  {
    "url": "assets/js/33.4540fd30.js",
    "revision": "9736e5b5eabb413ebd8b32a020b4b879"
  },
  {
    "url": "assets/js/34.73935083.js",
    "revision": "3df77176d6469c3aeffbc2a4882d8973"
  },
  {
    "url": "assets/js/35.8b01a97b.js",
    "revision": "b4576ee44fcb4dcf1dcd3f69e3e6681a"
  },
  {
    "url": "assets/js/36.72c921f7.js",
    "revision": "e3a39c0f9c6304c517663778fbaeb5d0"
  },
  {
    "url": "assets/js/37.8279dfd9.js",
    "revision": "51fcf56322f7020e28d30a3cfd7c51e7"
  },
  {
    "url": "assets/js/38.58ed9fda.js",
    "revision": "17041fb448bb9abaec6cbea65a3f9a99"
  },
  {
    "url": "assets/js/39.c6700d76.js",
    "revision": "6450122ead5bfa0a5707b46e8495ca2d"
  },
  {
    "url": "assets/js/4.9e019d32.js",
    "revision": "3545dd6fa18a21d15b6e2b9ad09a208b"
  },
  {
    "url": "assets/js/40.a04d4c93.js",
    "revision": "1bc6e0c43af5355362044868b60942c7"
  },
  {
    "url": "assets/js/41.d794423d.js",
    "revision": "bd55e9c24f64223e44d9deef86189ffd"
  },
  {
    "url": "assets/js/42.ad628f4b.js",
    "revision": "95a2f622292df423d3780ff632ad6b01"
  },
  {
    "url": "assets/js/43.8016a42a.js",
    "revision": "01749663179ae7e8a3aeb281cb290ac2"
  },
  {
    "url": "assets/js/44.2decee86.js",
    "revision": "e707c1887e6fe3414e2c4164a84205cc"
  },
  {
    "url": "assets/js/45.3cc5f7d8.js",
    "revision": "31b8a4a4346ffa4f2f4e0c0b2cbdd362"
  },
  {
    "url": "assets/js/46.898a04cc.js",
    "revision": "fe5f16b76411a94b2409e783fff0c58a"
  },
  {
    "url": "assets/js/47.bd9ffc2e.js",
    "revision": "b9a50066ddc6a6407f2a769f287be4e1"
  },
  {
    "url": "assets/js/48.19c2f333.js",
    "revision": "fb7889b0285aa14866c4fe328bdd237f"
  },
  {
    "url": "assets/js/49.dcd56735.js",
    "revision": "9b9371a834c8cb1de93f4a0a691d7eab"
  },
  {
    "url": "assets/js/5.31650a4b.js",
    "revision": "b7f69cb2ed044557151e74597312cf79"
  },
  {
    "url": "assets/js/50.6b4103ab.js",
    "revision": "fa40e19d26c3314394249f2fb3676276"
  },
  {
    "url": "assets/js/51.61dcab38.js",
    "revision": "3d46496648f3f16760972abe391165d6"
  },
  {
    "url": "assets/js/52.ada2ae89.js",
    "revision": "ce1f6b239be7ffe6a0c4c61c554e3fa3"
  },
  {
    "url": "assets/js/53.43cc0810.js",
    "revision": "08c03238b7dad48078b73e337eda07bc"
  },
  {
    "url": "assets/js/54.5231a73a.js",
    "revision": "35818bd960f02d419534f1acec60a7fc"
  },
  {
    "url": "assets/js/55.b46affaa.js",
    "revision": "6583cb5514fb6ae0bfb7b881765cbf3c"
  },
  {
    "url": "assets/js/56.e0190378.js",
    "revision": "437a2b58626c362ddc94d48d3f6d2e1d"
  },
  {
    "url": "assets/js/57.8abc2751.js",
    "revision": "64ffee316e57e68613a8eb16cfa788b9"
  },
  {
    "url": "assets/js/58.0b040264.js",
    "revision": "e4d5a7aa5b69d366d0024cfa8512dd6f"
  },
  {
    "url": "assets/js/59.52d2a7b3.js",
    "revision": "8e218643f0715ee2a673f1781b746ac2"
  },
  {
    "url": "assets/js/6.d8ce0b39.js",
    "revision": "0d357bbea701378f8667d7dc8ae7b938"
  },
  {
    "url": "assets/js/60.2ec2dd4d.js",
    "revision": "388c37fb1d707201ccac10957aa440d7"
  },
  {
    "url": "assets/js/61.60e41ceb.js",
    "revision": "cdea135c0c45de60775370a2e03263a3"
  },
  {
    "url": "assets/js/62.f8981957.js",
    "revision": "6a17816dfbb1e6d789c60fc6d0179497"
  },
  {
    "url": "assets/js/63.2f70fb02.js",
    "revision": "453211743e59cfd5cf4cf303f4029afc"
  },
  {
    "url": "assets/js/64.2d71c8a4.js",
    "revision": "614619fb96b34bcbdebac12bf3faef67"
  },
  {
    "url": "assets/js/65.27cd3e8e.js",
    "revision": "ede703d4e1f8dc5289c4a8e21a3663aa"
  },
  {
    "url": "assets/js/66.17ebb0f0.js",
    "revision": "f4852bd1efaba15cd7c1de45f6a0462b"
  },
  {
    "url": "assets/js/67.9e2c7ce3.js",
    "revision": "562e2366b7cf65aaa43123e7fa71e4cb"
  },
  {
    "url": "assets/js/68.4c7ab407.js",
    "revision": "c0f1ea6b4ed7ec027fc4689fe07c397f"
  },
  {
    "url": "assets/js/69.b6e4741b.js",
    "revision": "0a1c8129613d110ed0a588fb9d2fdb0a"
  },
  {
    "url": "assets/js/7.ac39ea3f.js",
    "revision": "0140dc2bd58f8b126bd3ba7be39ceb21"
  },
  {
    "url": "assets/js/70.2b8f5d3a.js",
    "revision": "718eed239b85adf863360f05546f8178"
  },
  {
    "url": "assets/js/71.3243d709.js",
    "revision": "27058bc1c8b15ca4a4801e530bce8017"
  },
  {
    "url": "assets/js/72.b16a0da4.js",
    "revision": "13e99cb1d5cee20adb358d42cfc43a4b"
  },
  {
    "url": "assets/js/73.2d087bcd.js",
    "revision": "2370ca2a7d5220d241362db93502f581"
  },
  {
    "url": "assets/js/74.0b5d86f0.js",
    "revision": "2b05b6e0155d063522114354cb5074f0"
  },
  {
    "url": "assets/js/75.3e71779d.js",
    "revision": "ab6b968bb3e6d4934b460db7a4bdde67"
  },
  {
    "url": "assets/js/76.c1b58666.js",
    "revision": "e7df486ac914f46ba4a942f150ebb073"
  },
  {
    "url": "assets/js/77.1a01a165.js",
    "revision": "62181c167e83f898c955b0ab94892542"
  },
  {
    "url": "assets/js/78.8903a679.js",
    "revision": "3f5f390486420b2727e61aeefce2288a"
  },
  {
    "url": "assets/js/79.faee4b58.js",
    "revision": "f5c8fa7e3b9a775046455a497b5c5445"
  },
  {
    "url": "assets/js/8.8a00a806.js",
    "revision": "2ec36b43b3730f5f251051f4c6e3c639"
  },
  {
    "url": "assets/js/80.b0ee4c91.js",
    "revision": "421f2d834c207549dae74a116417a0ec"
  },
  {
    "url": "assets/js/81.198f5e32.js",
    "revision": "e0cfdb84ea9082e0d01f67cf9640e648"
  },
  {
    "url": "assets/js/82.3050b795.js",
    "revision": "55f5404b15f5e2050dae941bd71a08f2"
  },
  {
    "url": "assets/js/83.84e82b32.js",
    "revision": "8907be857c433e5d423e8d9f55cb6aad"
  },
  {
    "url": "assets/js/84.bd7d9f8f.js",
    "revision": "38d92fa49c26cbd73327393dd8898774"
  },
  {
    "url": "assets/js/85.f8940873.js",
    "revision": "2c4fee74cb394c5b242c0949f74eae00"
  },
  {
    "url": "assets/js/86.4fba259b.js",
    "revision": "228fc2daced407d6a66d036df1aed1aa"
  },
  {
    "url": "assets/js/87.2b45edf1.js",
    "revision": "35c8562091bff690f1a97dcb9546d534"
  },
  {
    "url": "assets/js/88.872d0160.js",
    "revision": "1e19d11b5484f23286907a58bfdf6ebd"
  },
  {
    "url": "assets/js/89.c4ce1873.js",
    "revision": "8083493bcf029d56718a319e2f50b6ed"
  },
  {
    "url": "assets/js/9.ed0b96b2.js",
    "revision": "2777bac54acf5da4df25c70053826a8d"
  },
  {
    "url": "assets/js/90.1a995509.js",
    "revision": "1ebd800ba2474378ae4e1fd0e03fe05a"
  },
  {
    "url": "assets/js/91.b025094b.js",
    "revision": "038d457610fd48746c9a2cbfe4bf7780"
  },
  {
    "url": "assets/js/92.a1d4b305.js",
    "revision": "6479716c00e750b5f6656feab93516f4"
  },
  {
    "url": "assets/js/93.93be16db.js",
    "revision": "9742601bccbffa4b8451bfab7aacf139"
  },
  {
    "url": "assets/js/94.05123b5b.js",
    "revision": "b0c170908b0a592a0063e207395f0ab2"
  },
  {
    "url": "assets/js/95.b14d681a.js",
    "revision": "a57a53242ef2d136f2417352e9340095"
  },
  {
    "url": "assets/js/96.b14bfc93.js",
    "revision": "fde141865ee06d1897c71e90d0321f54"
  },
  {
    "url": "assets/js/97.73f43df4.js",
    "revision": "c95b04ccf45158953bb81ece5e1de277"
  },
  {
    "url": "assets/js/98.0173f0cb.js",
    "revision": "828abd265f399f6fd462c53ad7d3e59d"
  },
  {
    "url": "assets/js/99.06d681d3.js",
    "revision": "f79ecb032728eb43d3dd54c6cc631b9b"
  },
  {
    "url": "assets/js/app.434ba639.js",
    "revision": "55e047c178d2b2ac6e9c91fa122a5436"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "a43e9c399be6aad2f238b5558fa38331"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "c59b095ee2c49ebce591c89fa9faa107"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "58f61f2fce7e3b0716caacaa17af52ea"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "e56f0702a08bc8d7eecf3c929cc7d2a5"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "45d8b8db810a24f22cf22ed8701e037e"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "15de3bc113184b399693926cea152e8a"
  },
  {
    "url": "composable/date/now.html",
    "revision": "d3637866a10bf618bab66069c4e6a169"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "a1f8fd17f3076d582ffc822272e736c7"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "eab4c80b6d8f122c4035f32434c14c73"
  },
  {
    "url": "composable/event/event.html",
    "revision": "bdbd5532996963e03798d9f3fd02ca4e"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "4892bb88c792f5a2f5f0e504111757f0"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "5df77d5b0692e5bf9cefd2196e424657"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ef8514994a2448ffb94f3869bcabca00"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "84dedeae6ea10d5d65ef09eeebe26b3f"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "6d53e4e8e2f8ccd9e4b3eec0c6802b4f"
  },
  {
    "url": "composable/external/cookie.html",
    "revision": "e5b7b6585f969651f887bb43b64f4f2d"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "68b52720c24dbeec58de5bdb124d9e8c"
  },
  {
    "url": "composable/format/format.html",
    "revision": "4ef577f4620efe98fda8bfb18ebeeaa8"
  },
  {
    "url": "composable/format/path.html",
    "revision": "4d331c74d46ef619d67e6d4bb89ca20e"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "ad4ffd24aacf7dadc7dc457f1d46835a"
  },
  {
    "url": "composable/index.html",
    "revision": "4004a0bbfb9a05b3008f7d5970e940a5"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "4f1e28582e5bab505224d9c172a9db6d"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "f465383bde2dac81fd7d8c045fec8a64"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "71baf11d5da82fa12a02f019fe782a6b"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "30e6060f3f286e2f09a9cd3ac8793217"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "0124c49c70e321088d8435e5fd5ead61"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "4d78c120fe98b7c766ee404b2d1e7bed"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "b54c962c76be7695f9d24138a3dbf7b3"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "ebb8d870574819155715eb075877f311"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "7ecd010f544e3b3f8cee8d274122dcfd"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "c4a691875fc9c905c8fd4e4089044995"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "776d0d61ff85484c58cfe1473f249f29"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "347e3fa845db636a76d5ea6e44d42b30"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "fecffc001e30f3fe90d1560b5dc44119"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fd73d52eeade9f5ecad1446330523617"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "d540e47682fbd143c12669cf60c33937"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "1badbd953773c951a2f31eb67a2e4f1e"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "9ad4f4b9f3539e9f833c799a9ef0da0c"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "cbe019e2e4aff5ae455dc2772fd9319a"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "8c16d3bc75894fa1ce3df29424766735"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "5154100a299003da6164ea9ae88ef876"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "2a640d914cee64ed4e41ecc875fbbfc3"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "94dc053e88477b74334bf1840734269a"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "6b6a3d9abcb8f477c8579b070927877d"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "26ecfd561ec065fb2bb97e5a48b1cc4e"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "0b2727c8fe10a7e853f4b45ca611551b"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "a7a708513fa709bad59d4a3400d5bf98"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "230698547789617b29043e3c9497bf81"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "ce2e6b53ec7c6f7fa10b1e51a7cf00b0"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "480f861c88f7677022726d40b062b667"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "4a59edd2cf03aa1b17c6368af08a496b"
  },
  {
    "url": "composable/web/language.html",
    "revision": "cb48cb970258f9661b28277c78f85f2c"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "ff529c9717e1461df96bd02c1c5d72f6"
  },
  {
    "url": "composable/web/online.html",
    "revision": "73585aadacbcf5d91dac3903aca1931e"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "b842ecb06132a8194ca1913240e15ecc"
  },
  {
    "url": "composable/web/share.html",
    "revision": "23e39813b2ec93290e1f55a7a21324d3"
  },
  {
    "url": "composable/web/timeout.html",
    "revision": "c2f3a3a4d6fcd83fdee034ef255dc978"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "31a0787bf5ef4575614ee172460c0d41"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "9224e7072ceb56f55ecf9a8a82c88136"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "3bd6207a0eebf5e65b19b758d3cc5e7a"
  },
  {
    "url": "Examples/index.html",
    "revision": "35a62c78e01d0eb4f9702be476512a4b"
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
    "revision": "a7b74f8f69d587615c72d3120182a655"
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
