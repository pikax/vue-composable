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
    "revision": "a0e572744f56a866b62c94bc1e41a549"
  },
  {
    "url": "api/axios.api.html",
    "revision": "8d707d7cec3350afe28d2b8f1b693e3a"
  },
  {
    "url": "api/cookie.api.html",
    "revision": "4c43effbca25a5161e4f52d2d11c0530"
  },
  {
    "url": "api/core.api.html",
    "revision": "9d24e51201d3134c89470ac7e5d4a1f7"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "94a11d6c8cb0b4fa0afd39ab82dddc71"
  },
  {
    "url": "api/web.api.html",
    "revision": "828f71de89614f9546b5982f091246e9"
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
    "url": "assets/js/0.e0f0c803.js",
    "revision": "f0ce8452d5b04d3c683cd946ab87f2f7"
  },
  {
    "url": "assets/js/1.f94964aa.js",
    "revision": "a407391bb1a1efa4b5d6247d686b3d9d"
  },
  {
    "url": "assets/js/10.f535fb2c.js",
    "revision": "452ec55e9013cb6e982baac951b3d369"
  },
  {
    "url": "assets/js/100.686b7c89.js",
    "revision": "b9b29b67bad69966414ebfb8d168ec66"
  },
  {
    "url": "assets/js/101.b0e04838.js",
    "revision": "44c2622b5e35ff2b1797b8b5ba583105"
  },
  {
    "url": "assets/js/102.7a696091.js",
    "revision": "a1e9a9b10e928ffa5f7e228be4d51698"
  },
  {
    "url": "assets/js/103.939c963d.js",
    "revision": "5f941a6eb9918e47e99c6285b480cd67"
  },
  {
    "url": "assets/js/104.e74dc7e7.js",
    "revision": "827a355121b44646c966c329d529c83e"
  },
  {
    "url": "assets/js/105.b8c5a519.js",
    "revision": "267580a5bcb5bab40a31674cc900d0eb"
  },
  {
    "url": "assets/js/106.b5d2cd7a.js",
    "revision": "178cbc1021df77a4cbb389ae9a4f3981"
  },
  {
    "url": "assets/js/107.4593dfd4.js",
    "revision": "c76a51329b7edc3a1867f0928bdc850c"
  },
  {
    "url": "assets/js/108.dca87312.js",
    "revision": "fc1dcd0fb0305097186b13f9efc52f90"
  },
  {
    "url": "assets/js/109.e962e4b1.js",
    "revision": "62c415fcbe3ffb691aa1ebcc87cf53e5"
  },
  {
    "url": "assets/js/11.690dafd6.js",
    "revision": "85bbf906a226e095f0d8395de487a140"
  },
  {
    "url": "assets/js/110.82fafc0d.js",
    "revision": "f769dd40ed710dc4d67ea071e14c4184"
  },
  {
    "url": "assets/js/111.03787320.js",
    "revision": "1e9a2fa7ec2e46cb86b0c8e5a27984d5"
  },
  {
    "url": "assets/js/112.3ea6ac48.js",
    "revision": "fc66bfb344016d67d1c41189224de475"
  },
  {
    "url": "assets/js/113.c5929795.js",
    "revision": "fe8e55f99025a841150d9b4a08fd39c5"
  },
  {
    "url": "assets/js/114.988fd177.js",
    "revision": "130b8eca529d3112a9d373640d2e8609"
  },
  {
    "url": "assets/js/115.fd594d80.js",
    "revision": "06681b3e5f79131121e4bd820e2b8091"
  },
  {
    "url": "assets/js/116.ac712fd3.js",
    "revision": "03f0d49cfeb7da6d191cb2ce91f605ab"
  },
  {
    "url": "assets/js/117.8fef60d7.js",
    "revision": "2860cfcc9c8a3a92c5ff591ceeaa70a4"
  },
  {
    "url": "assets/js/118.f06681d7.js",
    "revision": "f96650642b6fd003305b8a8789725797"
  },
  {
    "url": "assets/js/119.195eb59e.js",
    "revision": "b860cad135ab2dd69eb0cb69fe4b104e"
  },
  {
    "url": "assets/js/12.7af3b9bc.js",
    "revision": "6d6bc876629876d2609749c88875634a"
  },
  {
    "url": "assets/js/120.75eb2e26.js",
    "revision": "380764bc351752a7f636761a643aaf01"
  },
  {
    "url": "assets/js/121.b7218673.js",
    "revision": "7a8338a234d741c79ebf80d602154928"
  },
  {
    "url": "assets/js/122.b7023c75.js",
    "revision": "79ebfc2fe3e9dbd47fb080c5bd8f2d52"
  },
  {
    "url": "assets/js/123.735f6868.js",
    "revision": "cf9dfaf7c1c0ea6fdc1ba4ca42c3feb9"
  },
  {
    "url": "assets/js/124.11c59bb4.js",
    "revision": "91a9a930ab594664a576369a405d7f13"
  },
  {
    "url": "assets/js/125.a4c9c36c.js",
    "revision": "2fc82a549424d645bfdc0f663fc70ea7"
  },
  {
    "url": "assets/js/126.fca1d844.js",
    "revision": "520a0931c74202d4b5025a9b6504f6f2"
  },
  {
    "url": "assets/js/127.4d4aae38.js",
    "revision": "000467dec9924722b1ee3c257d8dd1df"
  },
  {
    "url": "assets/js/128.d8822ddd.js",
    "revision": "76b69f82ede39133a9de0ac23e0bda35"
  },
  {
    "url": "assets/js/129.8cef764f.js",
    "revision": "8658ad7e7c8876d35b1dfc09e139c648"
  },
  {
    "url": "assets/js/13.e15e1a40.js",
    "revision": "c830025795072639b9c8cd1184db0659"
  },
  {
    "url": "assets/js/14.d78cb1c6.js",
    "revision": "65c78c6debdc25e6287723146fa6f7fe"
  },
  {
    "url": "assets/js/15.6866bfc5.js",
    "revision": "25724411b670c760aacc63c9bed5291e"
  },
  {
    "url": "assets/js/16.af39cc04.js",
    "revision": "6668285e3b40af5d1915026b57ec771a"
  },
  {
    "url": "assets/js/17.c0680221.js",
    "revision": "57bf0aec88e22c281c32e9abdd836578"
  },
  {
    "url": "assets/js/18.4a6cceea.js",
    "revision": "eb8b2c30aaffdab3752b101646dc8f28"
  },
  {
    "url": "assets/js/19.f690eb79.js",
    "revision": "20adb2e581e13e825a922d67c15758fe"
  },
  {
    "url": "assets/js/20.c1ba976f.js",
    "revision": "a98f037489e13c540e589b0fa0ea3d7a"
  },
  {
    "url": "assets/js/21.7c779f76.js",
    "revision": "56957281875dde7c5492a55eebabc96a"
  },
  {
    "url": "assets/js/22.8b09e2ab.js",
    "revision": "814c304c9310d31b8911827f61277388"
  },
  {
    "url": "assets/js/23.66669fbd.js",
    "revision": "dd3e5120e7ac9fe370a5b34c91123f87"
  },
  {
    "url": "assets/js/24.7fd92952.js",
    "revision": "139b85f46453632c0dcd24a6e9b5f15e"
  },
  {
    "url": "assets/js/25.bb2b2629.js",
    "revision": "98cba132827f6f783951fc843c6b1967"
  },
  {
    "url": "assets/js/26.24456f41.js",
    "revision": "8f56b5b805542314a58c934b245affbb"
  },
  {
    "url": "assets/js/27.9a870159.js",
    "revision": "f56cf4f31168d1b2e97a0e7a1cf0ddba"
  },
  {
    "url": "assets/js/28.ce79e3ec.js",
    "revision": "47d204a2833062d8c7d58da5a669f0a4"
  },
  {
    "url": "assets/js/29.b6a2ebb4.js",
    "revision": "8c354d7b727ec6953766dc2410c2136a"
  },
  {
    "url": "assets/js/30.1de60efe.js",
    "revision": "41e452a3718c8ba3014ebf637dc37cea"
  },
  {
    "url": "assets/js/31.2e381216.js",
    "revision": "e6d4370d59a6381b2f719da377fc2dc0"
  },
  {
    "url": "assets/js/32.dc350c62.js",
    "revision": "2f6e18dcc8b2436a88f3ad148f03adab"
  },
  {
    "url": "assets/js/33.d0a92f59.js",
    "revision": "b4a9aafece33d083cd45f64dd4be7ee1"
  },
  {
    "url": "assets/js/34.c55573db.js",
    "revision": "c36f6fc08ed4f9284ced33388c17e341"
  },
  {
    "url": "assets/js/35.d38f8032.js",
    "revision": "652efef843422d8b859644eefc85df4b"
  },
  {
    "url": "assets/js/36.a23dfb3f.js",
    "revision": "9df2d1a7d008c25a73720c2c39f4d184"
  },
  {
    "url": "assets/js/37.98d25722.js",
    "revision": "3e9588c7a8c00b2df53431d9ab37298b"
  },
  {
    "url": "assets/js/38.fe398ee1.js",
    "revision": "86cc27c5d18b06cd5b8d244ca3f042b9"
  },
  {
    "url": "assets/js/39.7c54d179.js",
    "revision": "f37bf52870f45b9da52a20bcce482bee"
  },
  {
    "url": "assets/js/4.7254b438.js",
    "revision": "d8e3973bd5ce1f59a84b47610e88359a"
  },
  {
    "url": "assets/js/40.093882ce.js",
    "revision": "e8b39a1df103f38009da7dbe4a553f2d"
  },
  {
    "url": "assets/js/41.ebc40cea.js",
    "revision": "5af8a084f02e7f111ed2972c460feb54"
  },
  {
    "url": "assets/js/42.c4334530.js",
    "revision": "0bf2b22ae508a62ad3473129e3825766"
  },
  {
    "url": "assets/js/43.9191d5cc.js",
    "revision": "0d186eb3edecc890d70f8e976da8d672"
  },
  {
    "url": "assets/js/44.5c8a54f8.js",
    "revision": "21c9b15f1e8730d436503a289727f778"
  },
  {
    "url": "assets/js/45.7e96ddc7.js",
    "revision": "c94959fda2caff85a8dca51d7ed7a3b6"
  },
  {
    "url": "assets/js/46.864ceec5.js",
    "revision": "1ab3f634a35af24219728221d5bb0260"
  },
  {
    "url": "assets/js/47.d41da03c.js",
    "revision": "736d9b353f48d0a723ef6aad6c015a45"
  },
  {
    "url": "assets/js/48.3c650c42.js",
    "revision": "7c6af1faba0fd09735de93a4afacfeb1"
  },
  {
    "url": "assets/js/49.5cca1908.js",
    "revision": "38da806a4d13914a0cf683458e24e48c"
  },
  {
    "url": "assets/js/5.a1c139b0.js",
    "revision": "7cf06fdf529463cc9878dcd7d4b66b86"
  },
  {
    "url": "assets/js/50.7f86739f.js",
    "revision": "a38f1586b9d7f71368b148fe31d51a8a"
  },
  {
    "url": "assets/js/51.702274ce.js",
    "revision": "73ea93faa9c46d2080d49f295710741f"
  },
  {
    "url": "assets/js/52.74853bb6.js",
    "revision": "766234310cb5a29aa01c8ef803aec264"
  },
  {
    "url": "assets/js/53.5ee183d9.js",
    "revision": "159cc3603b14184f6deda96213308a2c"
  },
  {
    "url": "assets/js/54.4eed708d.js",
    "revision": "918ce767ed228bb43713c9c523ff0831"
  },
  {
    "url": "assets/js/55.2711a1d9.js",
    "revision": "757e0e25478d1f2a44583e4e5e2b4aaa"
  },
  {
    "url": "assets/js/56.624a36b4.js",
    "revision": "29ea090ae590fd5484aa863a895bbb19"
  },
  {
    "url": "assets/js/57.6a0fda52.js",
    "revision": "ae459c7662034aabe4b73242c6dd3094"
  },
  {
    "url": "assets/js/58.1e4bb165.js",
    "revision": "f327690e3e6faedfbd9ab3fbfe24690a"
  },
  {
    "url": "assets/js/59.4f5823c9.js",
    "revision": "eed8c1b508f0168c6669198b0f548e48"
  },
  {
    "url": "assets/js/6.09252a8e.js",
    "revision": "ade794e781df1a69ebe1ca58dc9147ed"
  },
  {
    "url": "assets/js/60.3ae1b530.js",
    "revision": "c9a596c8f59ef501652b5ff72e2bee61"
  },
  {
    "url": "assets/js/61.315f533e.js",
    "revision": "6a66c9fdc94121f3a2a3b30835e5ba56"
  },
  {
    "url": "assets/js/62.07190827.js",
    "revision": "5a7f612ad561f8ab93bfbb2737b14ff9"
  },
  {
    "url": "assets/js/63.60fa90ce.js",
    "revision": "5cea085efeb9418a3dc846f90124e5b3"
  },
  {
    "url": "assets/js/64.18eabe44.js",
    "revision": "f72f371af3943e77c9ea83d3d4d09a3a"
  },
  {
    "url": "assets/js/65.d2a8628f.js",
    "revision": "dd227663f6c73e9d44ab0172765c2c1a"
  },
  {
    "url": "assets/js/66.a6c8ecad.js",
    "revision": "82612c49deb146c89d1aa111231aa40e"
  },
  {
    "url": "assets/js/67.4f92b3d2.js",
    "revision": "b1a023eeecae64a2b573847416566863"
  },
  {
    "url": "assets/js/68.83c102da.js",
    "revision": "04847ee612c6b892ca73be00e6aa6c0a"
  },
  {
    "url": "assets/js/69.debba77d.js",
    "revision": "6e4bf18e676a2ae674a5d0e5709d0a7e"
  },
  {
    "url": "assets/js/7.0a7d66b1.js",
    "revision": "c1f8e38e93c2cc11a6e07b43fc3bc663"
  },
  {
    "url": "assets/js/70.1a9e123d.js",
    "revision": "c6ccef558481a17e57a894a3321a078f"
  },
  {
    "url": "assets/js/71.d24ee39c.js",
    "revision": "5efc91a0c562414cb1eb2238a047c7d5"
  },
  {
    "url": "assets/js/72.69d18dcd.js",
    "revision": "45b7933a373a89f4651a0a26be64023f"
  },
  {
    "url": "assets/js/73.9abea0e5.js",
    "revision": "d90fc622d45d4f30cec7c119a8b40cf1"
  },
  {
    "url": "assets/js/74.61a83074.js",
    "revision": "5725f9a70a6c81b3553a7b6bd6931209"
  },
  {
    "url": "assets/js/75.90be1f04.js",
    "revision": "93160c23cc475b9425ed68389f27f93d"
  },
  {
    "url": "assets/js/76.a6c10017.js",
    "revision": "ce8f3159ef5444af9c5fc69ffd46a868"
  },
  {
    "url": "assets/js/77.58b9a343.js",
    "revision": "1f28b11be4f1b9b00143507e5977010a"
  },
  {
    "url": "assets/js/78.77d32173.js",
    "revision": "d85bda54b5577b66a4a0249b9eedc208"
  },
  {
    "url": "assets/js/79.ec5bfc41.js",
    "revision": "4e55b8ddd3a199251ce3208fb0c46c57"
  },
  {
    "url": "assets/js/8.93491336.js",
    "revision": "ee667fa572e25e7a40eded747f1e07c2"
  },
  {
    "url": "assets/js/80.1168faf5.js",
    "revision": "2062da08431e7a113700664597c3d02a"
  },
  {
    "url": "assets/js/81.10d518b9.js",
    "revision": "a1b82236265a1384c6d491722de84005"
  },
  {
    "url": "assets/js/82.2462b4bf.js",
    "revision": "c0f59e5f96504008ea3a411fe46e92a1"
  },
  {
    "url": "assets/js/83.481e8e43.js",
    "revision": "9ef5eceea193d6a61f132068455669c4"
  },
  {
    "url": "assets/js/84.a4816c01.js",
    "revision": "995a3e44a7321a9137cd5db13fe39238"
  },
  {
    "url": "assets/js/85.6f5c7ab6.js",
    "revision": "e4da585d3fba42ad9d3f60df7bb78066"
  },
  {
    "url": "assets/js/86.b5a2ff00.js",
    "revision": "5661f282bb6591eb3e883dc97629336a"
  },
  {
    "url": "assets/js/87.e8f0d566.js",
    "revision": "85390d0b5ecd5d2973c905dcfd224c53"
  },
  {
    "url": "assets/js/88.52118c65.js",
    "revision": "23fc8e917623d15b3bb85ecc1a95258d"
  },
  {
    "url": "assets/js/89.e4c38510.js",
    "revision": "acdc73525bf54d7565c0fd91d147d334"
  },
  {
    "url": "assets/js/9.4cfa80c4.js",
    "revision": "2ca9f094328be55dcfdf8a76324f4062"
  },
  {
    "url": "assets/js/90.3febed9d.js",
    "revision": "91394f4bca64d2be37ae99cd9ddc757f"
  },
  {
    "url": "assets/js/91.a669190e.js",
    "revision": "5dcb36fec417bb5200f95dc2d4f327e0"
  },
  {
    "url": "assets/js/92.6a81106b.js",
    "revision": "06a5a7075027a300a90be47cfd351c67"
  },
  {
    "url": "assets/js/93.e56689aa.js",
    "revision": "f46bd7e9e82fdb51503e3c546b0af5a1"
  },
  {
    "url": "assets/js/94.e7067b30.js",
    "revision": "e360ed70338de522be5174a70504e238"
  },
  {
    "url": "assets/js/95.8efa1de6.js",
    "revision": "ca409cfefe0c5db7a9702616943bedf0"
  },
  {
    "url": "assets/js/96.f3bd2602.js",
    "revision": "a5de7a8a3d8728749606b8e277a54704"
  },
  {
    "url": "assets/js/97.53337362.js",
    "revision": "0829059c3526505ae61ec24f21292cee"
  },
  {
    "url": "assets/js/98.ebfe8e8b.js",
    "revision": "2b44e92cc910b4c062bb5ff531c346c9"
  },
  {
    "url": "assets/js/99.244c9985.js",
    "revision": "7eaf5ad93c55076c5a92b2c72553eb16"
  },
  {
    "url": "assets/js/app.07745677.js",
    "revision": "4946708361e4444aa57e38d07fca4792"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "4dea0751caaeb825ef46962a2cefba0c"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "2b8c8930e8c9e08ae6204f6e9873c694"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "8029aeec833510093f3751e03140ab83"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "4f2e670a2cfa094dde4678fc18c3b347"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "d8c0ba6f36c72dc6f1840d6442de8d1a"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "e2f209b253f83633eaa388e3c5184ffa"
  },
  {
    "url": "composable/date/now.html",
    "revision": "e53517032ab89b4287749139c935e070"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "d142c446239bd6cb514fa4e46fc4a727"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "9b62a3d26b051f11103a8c579d75659c"
  },
  {
    "url": "composable/event/event.html",
    "revision": "588495ea0a864e1474e527d8983cf76b"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "1a3cc958c95018f7bfe99a90eba2a9b9"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "16a440c00d089c476dc9ff5562d7378b"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "8f40d08a6af212affcc35d0688c8fa38"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "bda455c40dfa0df89ab879a6cddffae7"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "bde3fa8fb152a836bfc97bbf78f81e40"
  },
  {
    "url": "composable/external/cookie.html",
    "revision": "ba991e7f6490f53b691d482a797e1dfb"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "87f6e17d7aae0713074eff7c9428eff2"
  },
  {
    "url": "composable/format/format.html",
    "revision": "441b66e0da83ab2f57cc5f0771f290e2"
  },
  {
    "url": "composable/format/path.html",
    "revision": "6e377dd83ebe01d85ad6b712177c2cc4"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "372ed14bc23cf026e54215177abed4ac"
  },
  {
    "url": "composable/index.html",
    "revision": "b869010a305c0f80f0438d1275762bb6"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "e282d0d41d7d62cd23fa0650b185667e"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "05dedbbf7c71171c15bb62cc2b812a9a"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "639bb7b7f5bfc21053ec3b4d1ef148ba"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "d75f8e5aae34001e8c64ed3136284b80"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "ebf235ca9293e45bc2d54faf4c7218ed"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "4a11fd0be01b6baef7938f9975d60bd1"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "fce14d7f441029d3a3c72c1e7b48c4ea"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "31b31caf9068c5e8f1da18a3e5681cc0"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "3b642f23772e16ef72958350659a0681"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "5012e6e86eec384c6ad1af8780196cdc"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "4554f8e20ae3c6e30a2b3c4de835c7eb"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "69443bde09a1d016e5d96edea11a069f"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "0d8854acae767a2be3e1cb13689efddb"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fcf505763c0ce2d84745fd25eaa5dbee"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "b4244c8f5bfda0799d507346d9cb4c5f"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0429444de241e50b44ed07769e04b130"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "ec36b691a6f12c9392a29765cee42dc2"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "5f98e4a4c3dab02a0d53be5267ee8002"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "0f305035e559e98424e246a9f031051b"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "259351641cf7b6ff6a0f98e0c248b542"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "8743ab4f7b1118698579820ed1429275"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "d8835590bcbcedc4a3a63a4970f928fc"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "4d37997bc044dec25599d8676292a298"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "28b24d3cc7d5ab31897e715f23e02b48"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "33e9720d3c96a78f0cb5b6b1415ac915"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "7f6b513c683ad5f053253360f74291a3"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "bc1e582fcb6bc4b676f5b6d7f683a697"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "be34ff22c5d8a7db4f5d3e2e25d44299"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "3be28c056ab2a5f2a85433438250bb66"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "f00458023949e9ec9940078fedb42e83"
  },
  {
    "url": "composable/web/language.html",
    "revision": "dab96fdc6d67f0fd5b2619b72c1486bf"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "8cde35f0564bcaeda62ccee54158b172"
  },
  {
    "url": "composable/web/online.html",
    "revision": "899d657acb0962f6265880812644791d"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "fc525a990f196d408ea93028c3de28d7"
  },
  {
    "url": "composable/web/share.html",
    "revision": "09ac865bae1fe0c85af37d77ebddbdaf"
  },
  {
    "url": "composable/web/timeout.html",
    "revision": "fc410be377c4e892374ec41afdcb66b0"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "cabcd53c048f86a5c5a9ef931b214718"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "8782880c0a1daad57035f7e18ef4b936"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "79eee93322666f082e9753178efd4342"
  },
  {
    "url": "Examples/index.html",
    "revision": "e9f262bf1013a3816f7fda372a6bacc5"
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
    "revision": "3ed65d1b4cdad184507ac116cdbe7e78"
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
