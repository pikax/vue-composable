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
    "revision": "8ca9865bd369d6e447f021464eaaece4"
  },
  {
    "url": "api/axios.api.html",
    "revision": "3f0868ea31a94946a8c692d26c2d994b"
  },
  {
    "url": "api/core.api.html",
    "revision": "050dc5686a9344774412a90448303ba6"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "c8c2815dd1799ab1a92e32743d51ee3a"
  },
  {
    "url": "api/web.api.html",
    "revision": "9ff9d19fe89d3e147325d84684945ac2"
  },
  {
    "url": "assets/css/2.styles.fd49838a.css",
    "revision": "0264095ea6230a01f0a843bdfc1e1e7a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.804665ab.js",
    "revision": "e6a476eb7d8d043aca32f9cc1002fb75"
  },
  {
    "url": "assets/js/1.e11d6985.js",
    "revision": "621b29dd46d958457a734f3c7ab179de"
  },
  {
    "url": "assets/js/10.86bca962.js",
    "revision": "726b0c2431cf3e43aa61de61ed64a227"
  },
  {
    "url": "assets/js/100.a959c454.js",
    "revision": "644a01f389cf795608c2b339e499b1de"
  },
  {
    "url": "assets/js/101.fc09bff5.js",
    "revision": "8f648dce179303f477572a7fb3fb4189"
  },
  {
    "url": "assets/js/102.93d83ceb.js",
    "revision": "9f39f20dbaba3e9deb9736bd185d1172"
  },
  {
    "url": "assets/js/103.9bd2f57a.js",
    "revision": "070ae9f10e4ca01e3811754773eced9d"
  },
  {
    "url": "assets/js/104.ae9cd86c.js",
    "revision": "03ecfb04783040648856e8d7dec9a5f5"
  },
  {
    "url": "assets/js/105.1c3e7868.js",
    "revision": "55927637a0aa785e8be18b01484aeb9c"
  },
  {
    "url": "assets/js/106.6cc45580.js",
    "revision": "f1ffe3add97b1cfcccebde912483fc41"
  },
  {
    "url": "assets/js/107.41a816a7.js",
    "revision": "56639d43a0575dc023aeaffbad7ea8a8"
  },
  {
    "url": "assets/js/108.754148fa.js",
    "revision": "a7ccd32edc801faa5a9c4885b2a5bdea"
  },
  {
    "url": "assets/js/109.15d1075c.js",
    "revision": "f65c4dfc4f3a6330f7937affb9e2421f"
  },
  {
    "url": "assets/js/11.adb304e9.js",
    "revision": "69c1ead86e8d5b39a51005566ebc9aa1"
  },
  {
    "url": "assets/js/110.10b8477a.js",
    "revision": "8702868377c221807d59593ca30e9a5a"
  },
  {
    "url": "assets/js/111.006c5b1a.js",
    "revision": "2d59b0ad7d92827f449a725bdf83eecf"
  },
  {
    "url": "assets/js/112.64f7c8a2.js",
    "revision": "7c22be8822d5cfb22aeef325bfa7140a"
  },
  {
    "url": "assets/js/113.37d03a42.js",
    "revision": "b3565a7e91eacc9004c2ad6b612d87b5"
  },
  {
    "url": "assets/js/114.e426d1f7.js",
    "revision": "99d4a361b798a63c96c6ecbb76e327b0"
  },
  {
    "url": "assets/js/115.11a9d595.js",
    "revision": "4f2660313f14996e7e327edce468e0d5"
  },
  {
    "url": "assets/js/116.5748e12a.js",
    "revision": "a56a9795d24f3d81774387cc09413d0d"
  },
  {
    "url": "assets/js/117.201e7189.js",
    "revision": "2571eb208789f50dc4d269489cc57b0f"
  },
  {
    "url": "assets/js/118.7811f883.js",
    "revision": "3d4294435c63d17495f9d39e7ba3b630"
  },
  {
    "url": "assets/js/119.f61ba072.js",
    "revision": "5f5842391bd4f9c084eef6a0cf865625"
  },
  {
    "url": "assets/js/12.a50cfc4a.js",
    "revision": "d57c62a5781edfddeca3fdba5b0ec988"
  },
  {
    "url": "assets/js/120.39bcdb1c.js",
    "revision": "4007694ed8df57a8ef9c9cfe95a5d24f"
  },
  {
    "url": "assets/js/121.58eee5a1.js",
    "revision": "52c26998eaa20c816f51b8e330d6fec8"
  },
  {
    "url": "assets/js/122.3f585aa3.js",
    "revision": "e63845f8d645ba3ab48b86ced305c516"
  },
  {
    "url": "assets/js/13.907f1981.js",
    "revision": "b9184d5a7a75f2a5f448107c0ca35f9f"
  },
  {
    "url": "assets/js/14.6ecf5754.js",
    "revision": "a7da00d76c5e738f0c4b31b7de862c67"
  },
  {
    "url": "assets/js/15.f6f5f914.js",
    "revision": "26f9f1e2d1d5f3561eeb3abedb3902ad"
  },
  {
    "url": "assets/js/16.c54c49d3.js",
    "revision": "51c5ea914211d5e6bdde83c5bbadb607"
  },
  {
    "url": "assets/js/17.85f63b3c.js",
    "revision": "3b7b7942d10895ead4d11c9795878b9e"
  },
  {
    "url": "assets/js/18.e22c5c33.js",
    "revision": "33a14b58b7b3d64d223f0d3b9e124214"
  },
  {
    "url": "assets/js/19.3d0eb72f.js",
    "revision": "03937f06a4772173803a5037feb107b7"
  },
  {
    "url": "assets/js/20.c5319d99.js",
    "revision": "a79540b298dddb0bc4c0a27163b01713"
  },
  {
    "url": "assets/js/21.d073f58d.js",
    "revision": "eeffbdd241542833f0e504ecfa3c7362"
  },
  {
    "url": "assets/js/22.e2d45d9c.js",
    "revision": "665825a5e89994db9ed63aaa4ecb9b0a"
  },
  {
    "url": "assets/js/23.beabfc9f.js",
    "revision": "4323b3ac8052e458eea59d65fc00e332"
  },
  {
    "url": "assets/js/24.dfc36678.js",
    "revision": "7e0d2ed9247269c636d2b792fe0aba5f"
  },
  {
    "url": "assets/js/25.1a2f67bd.js",
    "revision": "561f8f2128d92aafa3aaa8d30c3d105c"
  },
  {
    "url": "assets/js/26.26a91ffb.js",
    "revision": "87e27c1837526f43edd33f5a107f4792"
  },
  {
    "url": "assets/js/27.923cfef0.js",
    "revision": "10cfed3a099964026555d93d4fde6b4a"
  },
  {
    "url": "assets/js/28.ba970855.js",
    "revision": "a167c49fcc02dc280310b8a4ea185cde"
  },
  {
    "url": "assets/js/29.0242b778.js",
    "revision": "c0c839293a56ccaa7f751d4aad2f076a"
  },
  {
    "url": "assets/js/30.184a139c.js",
    "revision": "ee8bdf8aac63d2539881c9d3319bc7fb"
  },
  {
    "url": "assets/js/31.adb2b55e.js",
    "revision": "5afcdd0431e7ff3eaf46a38f558e567e"
  },
  {
    "url": "assets/js/32.b82db1ee.js",
    "revision": "6738e67eab4d06f04451ee6d77e25a51"
  },
  {
    "url": "assets/js/33.70f5db48.js",
    "revision": "1ed3e720aca056a037bef0241cfc9fff"
  },
  {
    "url": "assets/js/34.b41b042a.js",
    "revision": "24bea597f29f2f7f13960ecd6a3fcc67"
  },
  {
    "url": "assets/js/35.582b7f1f.js",
    "revision": "2ff52d5f59247721443088c177e5bf6a"
  },
  {
    "url": "assets/js/36.65f330c7.js",
    "revision": "f933dac4cdd93575d0eb20595f7cc5ae"
  },
  {
    "url": "assets/js/37.28fed666.js",
    "revision": "61dd50113469acb8638add2e10b08b30"
  },
  {
    "url": "assets/js/38.c720cac6.js",
    "revision": "9627a2c22169f0579278731076ca1bdc"
  },
  {
    "url": "assets/js/39.bc4e5f73.js",
    "revision": "78a59c815d8c6f0abf2a19e829243827"
  },
  {
    "url": "assets/js/4.5124f622.js",
    "revision": "58162871c4b730636cf8a53bb7120817"
  },
  {
    "url": "assets/js/40.ee1c818a.js",
    "revision": "3a4e2019b454491846f3aef61376cb42"
  },
  {
    "url": "assets/js/41.894bd35e.js",
    "revision": "4b16efb98f6f8c655435f60e5cc0a5f5"
  },
  {
    "url": "assets/js/42.81387fed.js",
    "revision": "d6e55ae1d1679e883f43c3ff5d39235a"
  },
  {
    "url": "assets/js/43.268f9fa2.js",
    "revision": "7b99c8207229310b9a713f5922b139fe"
  },
  {
    "url": "assets/js/44.b8c3410b.js",
    "revision": "ce1bf9f8e12e66925d4d8d279d5746e2"
  },
  {
    "url": "assets/js/45.3e9a9d78.js",
    "revision": "8de3f4540f3bc8898566eff3df544c56"
  },
  {
    "url": "assets/js/46.3e6cf009.js",
    "revision": "8259e3b7de7db4daf75a232b029b66ab"
  },
  {
    "url": "assets/js/47.ca2667e3.js",
    "revision": "392df46d5d66bc6cdfc8040122f9872e"
  },
  {
    "url": "assets/js/48.11106547.js",
    "revision": "78557b77386a8d3cac57a3706d451473"
  },
  {
    "url": "assets/js/49.de938323.js",
    "revision": "4647e91ad25cfc79b042cb59247c0fcb"
  },
  {
    "url": "assets/js/5.d335550d.js",
    "revision": "0a6498349b9e85b7a88b3c77b3c85e55"
  },
  {
    "url": "assets/js/50.40c1ee6d.js",
    "revision": "97ee8f21ceaadfdf88458c2641e96631"
  },
  {
    "url": "assets/js/51.bc9e5c93.js",
    "revision": "c6916935910d6bcf697e0713177f8164"
  },
  {
    "url": "assets/js/52.9278838f.js",
    "revision": "e2539ea6374c3025767b5542109343d1"
  },
  {
    "url": "assets/js/53.3e6a460a.js",
    "revision": "50b781dc6e3cdbdb0b4d20026f84c8ef"
  },
  {
    "url": "assets/js/54.f2746877.js",
    "revision": "89ce0991cd47194a721fdb69a9f2a250"
  },
  {
    "url": "assets/js/55.45ac93cf.js",
    "revision": "e805e3ec716e038fefb245a5d68c5b76"
  },
  {
    "url": "assets/js/56.448a2cd7.js",
    "revision": "1a3d7729cc1fd59975ae5b74a38ebe54"
  },
  {
    "url": "assets/js/57.4e924147.js",
    "revision": "b2ebd01b3d5bcbea63ff6ab722ca9731"
  },
  {
    "url": "assets/js/58.738ddbdc.js",
    "revision": "34a95cfd7638ace5f4bcb42205430de6"
  },
  {
    "url": "assets/js/59.f6b62432.js",
    "revision": "4a363e70f565f8a4bacc431cffd635cb"
  },
  {
    "url": "assets/js/6.a53e2810.js",
    "revision": "c9c740b053aefa371d11cde3b2ebe984"
  },
  {
    "url": "assets/js/60.dded9c36.js",
    "revision": "ffde5b2ceb6c0a4da71048dc49aaf214"
  },
  {
    "url": "assets/js/61.bb70ec1e.js",
    "revision": "79979e030fd256a16424b5a20f34be7b"
  },
  {
    "url": "assets/js/62.dcde0359.js",
    "revision": "58a3b5b07da1c255f6ca2a9c2b96d9e6"
  },
  {
    "url": "assets/js/63.ab0d6d06.js",
    "revision": "2f050051b93d1e68a20507efbc691b1c"
  },
  {
    "url": "assets/js/64.0efe657b.js",
    "revision": "495d41fa9ec43817a49423a6e08e862d"
  },
  {
    "url": "assets/js/65.6adb961a.js",
    "revision": "138c5749949a1e018c420ef2334ead45"
  },
  {
    "url": "assets/js/66.c98a37a1.js",
    "revision": "d61ed22ed036299b39b34eba97e27d18"
  },
  {
    "url": "assets/js/67.5e9ba640.js",
    "revision": "69525f42ddd48cab96cb1dab5521cc6e"
  },
  {
    "url": "assets/js/68.b4b3c161.js",
    "revision": "229d8b24a3830df8462b056b2a868047"
  },
  {
    "url": "assets/js/69.b708374f.js",
    "revision": "db23fea3074970f4fde1f217e834287c"
  },
  {
    "url": "assets/js/7.c0e0e43a.js",
    "revision": "1995eeef026c4d7ed84650360def1c61"
  },
  {
    "url": "assets/js/70.f8ba9641.js",
    "revision": "1ce422e160563a1775b5631732de9a00"
  },
  {
    "url": "assets/js/71.a8a75423.js",
    "revision": "7e4a01b78b28591704e54a8aea0c0403"
  },
  {
    "url": "assets/js/72.39b8e0a7.js",
    "revision": "d0ea179d819edf301ee3ca53cc76c40d"
  },
  {
    "url": "assets/js/73.64e770c4.js",
    "revision": "29381e9b0c706b0bf63d774db515f8ac"
  },
  {
    "url": "assets/js/74.3b4dd02e.js",
    "revision": "a80f2006a67c14887656abf065fe52f6"
  },
  {
    "url": "assets/js/75.946e2856.js",
    "revision": "460370ebf3c56904e3fd840ea1b4390c"
  },
  {
    "url": "assets/js/76.989f7185.js",
    "revision": "524d7334d8a714c4071f451bae54fe29"
  },
  {
    "url": "assets/js/77.b483f65a.js",
    "revision": "a9fed7fdf96bd4674630a9432681ae2f"
  },
  {
    "url": "assets/js/78.f091b312.js",
    "revision": "29cb44705312fc3d00c656663152389b"
  },
  {
    "url": "assets/js/79.be803b41.js",
    "revision": "87fed449d642b4ec6fa94ee45d5ed581"
  },
  {
    "url": "assets/js/8.c3ff2f2c.js",
    "revision": "7663fcb975b89e61d510a1385594a914"
  },
  {
    "url": "assets/js/80.c1593844.js",
    "revision": "47788038752f0970e320c60626fb2b35"
  },
  {
    "url": "assets/js/81.888c6aee.js",
    "revision": "88de5730db993182e30ee1a3afae0b7b"
  },
  {
    "url": "assets/js/82.9f9aa871.js",
    "revision": "41aabc5ae8b1ba4fb37dd3ab70181f34"
  },
  {
    "url": "assets/js/83.5735d2fe.js",
    "revision": "2fa1a21e649585e783159b126b8ef257"
  },
  {
    "url": "assets/js/84.8a06d908.js",
    "revision": "e6e0c68b86cca923a90237b2ca6b39ad"
  },
  {
    "url": "assets/js/85.21a4c0e6.js",
    "revision": "b1f498b9487269b74f0305637d9553cb"
  },
  {
    "url": "assets/js/86.e40d4146.js",
    "revision": "b2088e7303c4a2bd0de91b4533e22e59"
  },
  {
    "url": "assets/js/87.3d7e7eff.js",
    "revision": "6a416d3d0003b612bb30e1988bac9d08"
  },
  {
    "url": "assets/js/88.9363b338.js",
    "revision": "8869274a88ab7210107eadb0796f59cb"
  },
  {
    "url": "assets/js/89.35722a4e.js",
    "revision": "e6541951decbfbc53071562cf7afd329"
  },
  {
    "url": "assets/js/9.a5cbf1b8.js",
    "revision": "064674531548a110323eb05cb22aa43a"
  },
  {
    "url": "assets/js/90.6ac6c9be.js",
    "revision": "b076779961167d046cc10529c042fa98"
  },
  {
    "url": "assets/js/91.bc9ccae0.js",
    "revision": "d1320717ec720f06b2a766329de3f41d"
  },
  {
    "url": "assets/js/92.e3aa4bfd.js",
    "revision": "c2447d330b046d04c93a16c909420cec"
  },
  {
    "url": "assets/js/93.9e53146c.js",
    "revision": "e23dac132a5efcc03cd1fb2f0e4de1d1"
  },
  {
    "url": "assets/js/94.f78db15c.js",
    "revision": "f0d237fc028ee6f67c4492c8e87ec1ed"
  },
  {
    "url": "assets/js/95.6b6ba009.js",
    "revision": "47dc7528d2ece703c2b6937f37c92268"
  },
  {
    "url": "assets/js/96.90a55fbc.js",
    "revision": "31a216ebda88e9b795d20431f5cccf96"
  },
  {
    "url": "assets/js/97.3020a0d9.js",
    "revision": "1bba2d40c1247c6611aa4efba9cd88d5"
  },
  {
    "url": "assets/js/98.1f3c4b86.js",
    "revision": "12dad007e3dcf58c96bbdd0584e08004"
  },
  {
    "url": "assets/js/99.fc88b50c.js",
    "revision": "5e7a34c153258592cfb351cd21dc0c82"
  },
  {
    "url": "assets/js/app.5f1d3d5b.js",
    "revision": "4841dd3f8afe1b8112204fc4fab2197b"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "51ad0d42bb79a48795663e220687de1b"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "545e01958b70ed4fd7fd11ad08208258"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "0907c3f9486324051c58b6cfe1ebfb66"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "a60d5428db1b2231083c49f93824b847"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "5c9beb782719056e06a18058dac1e156"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "ace772ac77e7db6360853f427b91520b"
  },
  {
    "url": "composable/date/now.html",
    "revision": "23b3976ec682636a469d54ee5c8f15ab"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "06bdb44338bb94ad24c4a435bac9336d"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "41d4b816972ff7d7983c1ad88b0dfd23"
  },
  {
    "url": "composable/event/event.html",
    "revision": "7a76136c452d0615ffac0c43b31aa22d"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "3dee264db8193fd15e7d7a188492fe6f"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "4d9783c0611f0c80dff152b2a8ef64a5"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "3f81ae7b3b4289b896cfc7baf203f856"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "3f996f93d8de108aad465d8345b6b604"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "f4c7d3055467ed0c5872f3e458d55305"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "ff906dd4d8aac60b44db26e62786e815"
  },
  {
    "url": "composable/format/format.html",
    "revision": "e2c282c67e1f5551607763a826c4ac12"
  },
  {
    "url": "composable/format/path.html",
    "revision": "5ec1e57158f86fc3f93270bef8171a5f"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "20289172187c6d448b79448095de1f0c"
  },
  {
    "url": "composable/index.html",
    "revision": "7cf8a887c17b88d60b40d26763d90936"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "1394d9cb2548ff0ba4cb2a87b3bd4e67"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "7b166b8e6f7a5090d15728e26c6446d2"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "577476c3f1f8c90e1f9de60910b5c6b7"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "d81c293881181f2fc86eada50590f07e"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "409a849f4eb5de751711c70406ff4a0f"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "d27f0fa7083b0167a8580ef500188e50"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "3f86c5bb7f9b130b3f62ec967ab2766b"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "5c3e09bb5b45702ed6b41058b4e1ebca"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "d1d1806683257cc8889513cb5b536276"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "20c7af95283372f7311bb5d893dae378"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "d77a3198109619b9dc2fdcb4bf50531c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "8ed7b12feb5464a6cc6d604d56121cbb"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "de180cc7cca598d455c58b69bd0fafe1"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "4090049fa33f40f4c59437f147601aa8"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "115f843c565aeb870c04e61cab5f3eab"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "b7746057846e2c5c85ae387c31c83230"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "01ece3a6966a15a94684d403d7b437b2"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "f5fe8496204f1f42d1ba0e80283b9bb1"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "9eacd692a6fc726797c7702202ddc453"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "60f5758e7b0a9411c93c693f528f6a29"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "9aa907d8d1c0c62c1fdd6e11a0d8d058"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "128b2345b4a8e7bf90239ea61d4e69ca"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "f0e001a9f6b13554dd3c1bd54e561577"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "d1474bbfcea54913c75bd1b43c05f099"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "a220804ceaba63f16f415c372236149b"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "f5891f583fa7404e567f8aa7c0c71e7e"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "4d857f35f2978fada7b644e90d60b3ac"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "ed52fd49777b7beafeca0a04df744e6b"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "150c2fbbaed2ff42d53d38a9c958f86d"
  },
  {
    "url": "composable/web/language.html",
    "revision": "2e242093e4e4534efb9663b8913a8bf3"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "a9f06e60eb4e6b47744c72766e13823e"
  },
  {
    "url": "composable/web/online.html",
    "revision": "97ce9c743812d5b6d11f2e88d534463d"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "4ecaa26147ff79bcaf816f239fe79b7f"
  },
  {
    "url": "composable/web/share.html",
    "revision": "d2e02f9540f56393b56ef56b3afc1005"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "a987fd54c0fb77db9ecf9f7bdcdde8ef"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "513d2657870d1a357c55448016778727"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "56d56affc2e2774e5facf1e8a0b99b48"
  },
  {
    "url": "Examples/index.html",
    "revision": "eb0ce38b1241607107697a1e565548a0"
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
    "revision": "54c9ddc7f32354c6b8c73d0df84e29cd"
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
