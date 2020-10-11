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
    "revision": "43b2e40802c2062a6a63517df7d3b1a1"
  },
  {
    "url": "api/axios.api.html",
    "revision": "16d5be28b095ec7ccfeb5f7fda6cc7ed"
  },
  {
    "url": "api/core.api.html",
    "revision": "83f6ab638d1b1072d8a28cc667e7cf02"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "af287f3521427d81399b345b16bfaf0d"
  },
  {
    "url": "api/web.api.html",
    "revision": "bac147eb7e315cb3b24986495815ea60"
  },
  {
    "url": "assets/css/2.styles.fe65d24c.css",
    "revision": "69296ce1ec2a07ef617eabff7825937f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.3e1739eb.js",
    "revision": "7dab009a46cb380bdd540fe42caf66e8"
  },
  {
    "url": "assets/js/1.1d876cf4.js",
    "revision": "8f2955feabbe2521d931a88f3720520d"
  },
  {
    "url": "assets/js/10.21ea3947.js",
    "revision": "af26a2a81ffb47682369bcef790a86bd"
  },
  {
    "url": "assets/js/100.79795a3b.js",
    "revision": "d1a73a2c6a61df371baab609e35c9a33"
  },
  {
    "url": "assets/js/101.cc3ea5c8.js",
    "revision": "7efbf4b105a644538a8e34622c9d916c"
  },
  {
    "url": "assets/js/102.fc3c5240.js",
    "revision": "5ad86b9d8de102cc911098eda1611e04"
  },
  {
    "url": "assets/js/103.545aff4e.js",
    "revision": "d25770bfe103873976c6336b6b82e412"
  },
  {
    "url": "assets/js/104.3e874278.js",
    "revision": "216c6a6eda60e1161a9b6b8b1462e1bf"
  },
  {
    "url": "assets/js/105.c89b3b89.js",
    "revision": "3c54bd4ab38d8b64556ac99db4f321dc"
  },
  {
    "url": "assets/js/106.3d3ae044.js",
    "revision": "118c2beec93a88489986fa1e88f2e773"
  },
  {
    "url": "assets/js/107.0a94d815.js",
    "revision": "7abb0b82d880f14164fb2f7d14b3c29c"
  },
  {
    "url": "assets/js/108.183e9da8.js",
    "revision": "23c5b7874619f079eb71c091c0bb4069"
  },
  {
    "url": "assets/js/109.88c903c2.js",
    "revision": "2d1217380f7ad5233d4a539fd9feb872"
  },
  {
    "url": "assets/js/11.8cde0ff9.js",
    "revision": "13483a19fc72e23f703e2bca47ce9f7e"
  },
  {
    "url": "assets/js/110.36d97009.js",
    "revision": "0afe3b12d7c94943c62945704d76c9e8"
  },
  {
    "url": "assets/js/111.2ebec5be.js",
    "revision": "736e6b4b37d01dc544f68e90948d30da"
  },
  {
    "url": "assets/js/112.20939427.js",
    "revision": "393e0b7254e4365fd60122df26563155"
  },
  {
    "url": "assets/js/113.d5e8ed88.js",
    "revision": "05b6ec71457b8db0282f9af8cded7322"
  },
  {
    "url": "assets/js/114.6bee93a6.js",
    "revision": "96759152337e92147a689ea30d3c5378"
  },
  {
    "url": "assets/js/115.05476ba7.js",
    "revision": "8c560ed95875d697a073423ee129a23b"
  },
  {
    "url": "assets/js/116.e8d870de.js",
    "revision": "33f6c7a6a29a5544da0ab620c17679bc"
  },
  {
    "url": "assets/js/117.db0685ee.js",
    "revision": "ba7da19920afc31638a82568f68ca7f1"
  },
  {
    "url": "assets/js/118.bc1e8fd8.js",
    "revision": "168e29a587c9ef758a0ea64346257a09"
  },
  {
    "url": "assets/js/119.3fbc7d7a.js",
    "revision": "d2c00707cc085be33bad26d983bfe3f0"
  },
  {
    "url": "assets/js/12.61c2dfe7.js",
    "revision": "22c971a53e68ec1a34627c43fb5e7eea"
  },
  {
    "url": "assets/js/120.db243a05.js",
    "revision": "1966705696a284467eadc7d6b30e7844"
  },
  {
    "url": "assets/js/121.ca9ddcde.js",
    "revision": "ad34900b3481e1fb6127112d25ddddce"
  },
  {
    "url": "assets/js/13.76a096cf.js",
    "revision": "9ed57aa3b0c8da1a5fc02418dda7e4bb"
  },
  {
    "url": "assets/js/14.6f24b731.js",
    "revision": "64b58b12a4ff85c60a80eba65fb0c16d"
  },
  {
    "url": "assets/js/15.5525f48a.js",
    "revision": "84d1c6bfa364a50cba6b083abffd60b1"
  },
  {
    "url": "assets/js/16.d94e5ac1.js",
    "revision": "54d3ce0bc6b1d325c5e4d8e4c514f5c9"
  },
  {
    "url": "assets/js/17.beff56d7.js",
    "revision": "05df16aa9158f0d4151102ecc5f0aa03"
  },
  {
    "url": "assets/js/18.94dab8bc.js",
    "revision": "d27cf318cbed30d7c757852e004e615f"
  },
  {
    "url": "assets/js/19.4461f377.js",
    "revision": "2f0d67333238d8fe1d986ad10309cdf8"
  },
  {
    "url": "assets/js/20.d6c1673f.js",
    "revision": "69b0d46690d007f7cbe90917901a560f"
  },
  {
    "url": "assets/js/21.e391ef58.js",
    "revision": "b0c901675115732fde414edeb1c88d91"
  },
  {
    "url": "assets/js/22.f3b1e42d.js",
    "revision": "c189991a65264718717eadc8ed88d831"
  },
  {
    "url": "assets/js/23.49110acf.js",
    "revision": "4f2674725ae945872f8e882725ed6dce"
  },
  {
    "url": "assets/js/24.7ae8f3c3.js",
    "revision": "8b8fabcc42adafb92807e14b4d351105"
  },
  {
    "url": "assets/js/25.dd24713a.js",
    "revision": "ee277e1f9faff5932f3011252935a2bf"
  },
  {
    "url": "assets/js/26.c61fd2bc.js",
    "revision": "1767eeae4bc102099467a0d7dd87c1f4"
  },
  {
    "url": "assets/js/27.32781ace.js",
    "revision": "58941a55b6fba97f2f4e603abab245bb"
  },
  {
    "url": "assets/js/28.5ebf96e1.js",
    "revision": "ddf3623a44d3514f950af5bcb2cc19fc"
  },
  {
    "url": "assets/js/29.be6cb876.js",
    "revision": "0eadfedf31f74d2ff3ae60c0ab0d6acd"
  },
  {
    "url": "assets/js/30.389f856a.js",
    "revision": "679d5c4ccfb26eddb2cbb5417066fafc"
  },
  {
    "url": "assets/js/31.7efb1c0f.js",
    "revision": "29be91d9ec368ff1be44e0b417350143"
  },
  {
    "url": "assets/js/32.84ae83af.js",
    "revision": "50ee8fda2c140fcd2b9da50d5f67526e"
  },
  {
    "url": "assets/js/33.44928e22.js",
    "revision": "3081237ebe0adcc9021a1febbb4229f0"
  },
  {
    "url": "assets/js/34.93955e28.js",
    "revision": "eec00d7a626878ef8c39ae4eb28127e9"
  },
  {
    "url": "assets/js/35.b0e87679.js",
    "revision": "ae4074219fdd291f75cb3eb1a0505382"
  },
  {
    "url": "assets/js/36.26574488.js",
    "revision": "e14e5fc9984548fa862fd12773b409a1"
  },
  {
    "url": "assets/js/37.0e49217b.js",
    "revision": "2416dff6f2080047513dc62b139e7034"
  },
  {
    "url": "assets/js/38.7bad9f26.js",
    "revision": "b310f4819410cdba173638cc85630afb"
  },
  {
    "url": "assets/js/39.1bab2db8.js",
    "revision": "b132869e4f9a4bbdaa9ae855a88ec502"
  },
  {
    "url": "assets/js/4.3c3287f0.js",
    "revision": "9b9782b5cda208ed84d27d8e8a52e0e6"
  },
  {
    "url": "assets/js/40.0db1eb13.js",
    "revision": "6ad53f9aaf32544627f42461177cc518"
  },
  {
    "url": "assets/js/41.919ee0d6.js",
    "revision": "77f463bf4e656619f141a9b9c9438075"
  },
  {
    "url": "assets/js/42.410a9bb0.js",
    "revision": "cf9025670facbb14912e7b04e4b0bc09"
  },
  {
    "url": "assets/js/43.7cb38a28.js",
    "revision": "91192fd71ed58480e611b3acda6c698f"
  },
  {
    "url": "assets/js/44.078afaf6.js",
    "revision": "f357bc10dfde83db1eb255ce489ceaec"
  },
  {
    "url": "assets/js/45.cbdd0928.js",
    "revision": "23aa0ce160b6f28c8b445fedd2597ef1"
  },
  {
    "url": "assets/js/46.8106a385.js",
    "revision": "bd2602a2b6137fafea0f25896eae6c2d"
  },
  {
    "url": "assets/js/47.61190d51.js",
    "revision": "d69d9c021b963040a4d452ca7167eadc"
  },
  {
    "url": "assets/js/48.5c9b658f.js",
    "revision": "6e172d4d29cd2fa8636feb57d3bf36ad"
  },
  {
    "url": "assets/js/49.4fec9f34.js",
    "revision": "8ca365c960572285c268f13a6c9ffb2e"
  },
  {
    "url": "assets/js/5.eb729c09.js",
    "revision": "6955d5c7d603d0176549f45e29d87670"
  },
  {
    "url": "assets/js/50.09adfb15.js",
    "revision": "71290c8175bd9c79f124835b7f632526"
  },
  {
    "url": "assets/js/51.60e8355f.js",
    "revision": "bc2875f24b7e0f136fec94687f3fcaac"
  },
  {
    "url": "assets/js/52.b1b73112.js",
    "revision": "5977ae56719fabf28bbf855092b15511"
  },
  {
    "url": "assets/js/53.1d10c54c.js",
    "revision": "d06078f90648b50c7d862473976fc181"
  },
  {
    "url": "assets/js/54.f077b127.js",
    "revision": "c0ff4b94331b3a17142d1e57ff823a19"
  },
  {
    "url": "assets/js/55.298f99b8.js",
    "revision": "d4d5d500bd7e56cf0ad70214492f57fe"
  },
  {
    "url": "assets/js/56.6fec0adf.js",
    "revision": "d7d48b5c351af909d0982363622708f3"
  },
  {
    "url": "assets/js/57.4f9fe701.js",
    "revision": "2c642b33245d99e2cc7d0422cfd54f89"
  },
  {
    "url": "assets/js/58.b68087d1.js",
    "revision": "c9da4fec42ee2e976397a3b0c8d895a1"
  },
  {
    "url": "assets/js/59.6399f544.js",
    "revision": "d5fdd45467db34ba2746e1b7f8f5b701"
  },
  {
    "url": "assets/js/6.0877cede.js",
    "revision": "f23fdb55a3e53ae339e5fd598d544dd7"
  },
  {
    "url": "assets/js/60.ed4c0b7e.js",
    "revision": "e671e3e0c512e82ff5b1612f11e49ad8"
  },
  {
    "url": "assets/js/61.6aae3baa.js",
    "revision": "df0bad6bca85d81a5624747667372a31"
  },
  {
    "url": "assets/js/62.cf5daa19.js",
    "revision": "fcd99d4a06d1c7616720d4f0198a5ec9"
  },
  {
    "url": "assets/js/63.fc88a891.js",
    "revision": "d563082113a82489937f5f6661ecd997"
  },
  {
    "url": "assets/js/64.2e11a993.js",
    "revision": "e4164b63326615ab0736d01f9dd7b5ca"
  },
  {
    "url": "assets/js/65.4d53e396.js",
    "revision": "b6f68c21d8ffb1f17b152fe0fd9cb9f4"
  },
  {
    "url": "assets/js/66.3344c5b3.js",
    "revision": "7dbac17fc67496b64506be6e3bd3f91d"
  },
  {
    "url": "assets/js/67.8589b764.js",
    "revision": "2bf4893c0738735983c263b61e0b041c"
  },
  {
    "url": "assets/js/68.139679b1.js",
    "revision": "5a8be4a577ec417f7d5eb84d90a22376"
  },
  {
    "url": "assets/js/69.d88f3cf0.js",
    "revision": "08e4a064a5185bc09a90e89228741a82"
  },
  {
    "url": "assets/js/7.5ec858f8.js",
    "revision": "9224841454fe3a9f8d57c134b958811b"
  },
  {
    "url": "assets/js/70.72d42cc8.js",
    "revision": "200f8c3108f663633540f3b28e1ed8e3"
  },
  {
    "url": "assets/js/71.40a02da8.js",
    "revision": "dc2ea92aa8fcd50ea477270fed8a6d70"
  },
  {
    "url": "assets/js/72.b00ebcb9.js",
    "revision": "0b9b919e396fe87f62799cd683d370c1"
  },
  {
    "url": "assets/js/73.1dbdb5ac.js",
    "revision": "2c90b7eb7fa39cfeb71f1133188ca692"
  },
  {
    "url": "assets/js/74.42c49202.js",
    "revision": "923e6b270e4179ed5b96cdb23c81c289"
  },
  {
    "url": "assets/js/75.c149e539.js",
    "revision": "4d2481a2595ee7846f288dda76819cb5"
  },
  {
    "url": "assets/js/76.9825d3a8.js",
    "revision": "998e388ad178c8d483ed9365229a25e1"
  },
  {
    "url": "assets/js/77.49b63c0a.js",
    "revision": "4f8229b147357036c195097152542f59"
  },
  {
    "url": "assets/js/78.b27c7766.js",
    "revision": "9121b7a044147ab82f00f796008adf9f"
  },
  {
    "url": "assets/js/79.3f728fd5.js",
    "revision": "c7820a3ffa77fddd9d88ac9374cd1189"
  },
  {
    "url": "assets/js/8.3a9341ad.js",
    "revision": "33e24526a4531c27674e3ce7d801254f"
  },
  {
    "url": "assets/js/80.41909d23.js",
    "revision": "32a2a7fa15b4f117e447cae7b7a08fb8"
  },
  {
    "url": "assets/js/81.6ef6908d.js",
    "revision": "179cfe791fec3565c6a64bea97f4d9e7"
  },
  {
    "url": "assets/js/82.c0471fe3.js",
    "revision": "d6b070106c5fde293f65948ba472592c"
  },
  {
    "url": "assets/js/83.55d24fbe.js",
    "revision": "09025f14a2418343311dfe13dcb75c3b"
  },
  {
    "url": "assets/js/84.460c4f2b.js",
    "revision": "84c2e54fe76271872ddada102337c793"
  },
  {
    "url": "assets/js/85.f9385120.js",
    "revision": "2fdf975409dbd22813ed6a6d958bf8e6"
  },
  {
    "url": "assets/js/86.86f96597.js",
    "revision": "311b802196a6d8ee6b38a1515c75b1d4"
  },
  {
    "url": "assets/js/87.430426c7.js",
    "revision": "b3d653565177d34d5a3c9a099b0c49c4"
  },
  {
    "url": "assets/js/88.ae3ed7a7.js",
    "revision": "e064eb6fb48818e4d5459205a9b470d9"
  },
  {
    "url": "assets/js/89.07391eac.js",
    "revision": "4c12a2cb8ac34af381185615a47fedb0"
  },
  {
    "url": "assets/js/9.4d3c0abf.js",
    "revision": "f207c06d4fbb88130b57555cac81550f"
  },
  {
    "url": "assets/js/90.04207418.js",
    "revision": "bfcf60380d54c799bf822ee66bbf7b0a"
  },
  {
    "url": "assets/js/91.3e605067.js",
    "revision": "eba602bee3115aeb8db168f323c4877d"
  },
  {
    "url": "assets/js/92.7fafadca.js",
    "revision": "edb294d1067f127ef6b63963bb0782b1"
  },
  {
    "url": "assets/js/93.9da0b9df.js",
    "revision": "46ea8616fc15d406e45671382a162718"
  },
  {
    "url": "assets/js/94.339c9d9b.js",
    "revision": "74c6ee606ed883c97e72994a380cacdf"
  },
  {
    "url": "assets/js/95.0172e1fe.js",
    "revision": "08d3a1e21645c6a22fdec261de5a7ec8"
  },
  {
    "url": "assets/js/96.1fe534a3.js",
    "revision": "809bb7c0340c365488579252b04c28ed"
  },
  {
    "url": "assets/js/97.ee505df5.js",
    "revision": "7b66307b82388a0eb24993a9872d85b0"
  },
  {
    "url": "assets/js/98.d721b813.js",
    "revision": "8a9069d0e9a148be769841c7cf757ee9"
  },
  {
    "url": "assets/js/99.cde139e9.js",
    "revision": "01a308518361d8f9d7d7af2c0362dd79"
  },
  {
    "url": "assets/js/app.cf4fb077.js",
    "revision": "a0720d2deb5d5e1243ecc2f06a96d38f"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "8d86a96544fb4c192fc2623b17573d63"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "c4d20605c7622a0c8a66d0ed4f79bf9a"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "5e2c05c563251bcf975be22de0aba2bb"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "c67e81925ab7b2eeab0b1072ed9eb2f4"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "a5a8b901982608428c9cd69f4919a667"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "549e4e140c6fe13bcd0f4bf723868a38"
  },
  {
    "url": "composable/date/now.html",
    "revision": "b4111af22cce6eebd0622e509770252e"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "4edb59de38366f33a4128750c29d27ff"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "aaabbe32e08ced5676babcb8cfbb0eed"
  },
  {
    "url": "composable/event/event.html",
    "revision": "15cbefa60b40fc532b9b616805813916"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "a718cf003728fb36a0a8a1af3aaa350f"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "6ffe6bfa9cbde352ce8251c9cef9d94e"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "9c1745513839a56f7d20c18e04c5806b"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "aa07bd5a7172f5af38442692bdf06a5b"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "76d11c63a1433566a846eabb9b9302d4"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "4e58bac96ec45544dcc2ac1de07dee21"
  },
  {
    "url": "composable/format/format.html",
    "revision": "2cc54c7941749cf0c76b2a24e069f7ca"
  },
  {
    "url": "composable/format/path.html",
    "revision": "2d62333354f0f04b6f1be800fbf61ff0"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "2c2f942fb56bc3ca98dd5881e03a61f9"
  },
  {
    "url": "composable/index.html",
    "revision": "f3d80de6462a1386a17e06f352b7492b"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "c684bd32346b43ac27a3c61435d6002c"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "c3c3611193e15acce318769c2f7cfb6a"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "e13d56acc42e2fb3335d709a168e7fc3"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "261dd7fba68d008af49e7e08b4595856"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "7a164b2ac790501a36a14bbcbabc991a"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "9ee3680728803a87f03d2dd862d70945"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "169c8f37e88b692057d23bc6605dbd14"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "74f79bd546dc3bcccbe6ceb41cadbabc"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "8d554f0ff1e3c2fff0e243f36b9c84c8"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "eb8891d05b6feaa57f9dfd3bbe53755c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "9dc158a77d7a7d2e27a02570924f6f80"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "52cc6a375ea0e566b35a955168a0c2ab"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "64941c0c19bb9adfa92fd8eefc3372d9"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "ea030390590671579671d12c96a517f4"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "ff3486a8792764bf296367006bcb72ef"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "c3fde1d0c55961423e791b0b5dfedd22"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "c86c5ea02c92597c8a60cc1ab55ff451"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "2b117020a4461bfddc19f143f2ae2aea"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "2302618527c5a27947df39167947679c"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "4d7efba0df608526ae1e9257766f40d2"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "d4331f65e556f4c90aadd3f40d000771"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "ef0c5b8c662cc6d8ec3df77d99c079d5"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "98174e7dd97127c39e292632f454b0e7"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "a9724362e75fe09f4fa2a41ca3341340"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "fd0260e0b8845aafc9c458569784e701"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "66845a47fb8e4db66826c5dcea3c4a6b"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "2fd774e1fad22a07d6512bf35f079426"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "1654399b48bbde6e1202d92c4fbe5e16"
  },
  {
    "url": "composable/web/language.html",
    "revision": "4fb5f4c2ba2b3a71dbc7348b78e86cbb"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "27f1534cb20bcc7784b7387f78e0635d"
  },
  {
    "url": "composable/web/online.html",
    "revision": "bb5b1221ffd57f8f082d19ad37159e5e"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "1b7cebaaf2ef986e3b04dc441fe38b64"
  },
  {
    "url": "composable/web/share.html",
    "revision": "771a4426c8b9cbc31e480aabc5f01139"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "15369543adcb0ec00ffa66e725033eb8"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "24f33acdc9d5468bdd6a66108626e547"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "516ab3ee0dafc5099d400e7db6a48b4d"
  },
  {
    "url": "Examples/index.html",
    "revision": "a01f41745d33d06ddab7fc8329ae60be"
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
    "revision": "71e33a4e5df031d8d4ec21c2b9e483ae"
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
