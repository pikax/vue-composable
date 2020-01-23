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
    "revision": "1b2618ef9e369e3714f844799a4c2331"
  },
  {
    "url": "assets/css/3.styles.c04b7cd6.css",
    "revision": "4d4bea4e957bda799831a82e5faefd4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ce4bb94b.js",
    "revision": "08fdef683d433b9c55086e0dc58278c9"
  },
  {
    "url": "assets/js/1.e82e366e.js",
    "revision": "291d87f0b73e8633e98e5647faaafc66"
  },
  {
    "url": "assets/js/10.b3d1cb0d.js",
    "revision": "4ed69af7453791b2a40b54cc37868ef3"
  },
  {
    "url": "assets/js/11.b1e9f10f.js",
    "revision": "6e29a6968f55d90938531f03367c747e"
  },
  {
    "url": "assets/js/12.0ec27436.js",
    "revision": "55dc42939e317cf02e1d028d9ba3afd6"
  },
  {
    "url": "assets/js/13.defc1e89.js",
    "revision": "e3067bec748c709f1d32616e8c50aadf"
  },
  {
    "url": "assets/js/14.b8a991fe.js",
    "revision": "45353e382e0075b45de39e52e5bf74bb"
  },
  {
    "url": "assets/js/15.d77a6b1a.js",
    "revision": "cf1064bc537fe3c7aa612793ce15a54d"
  },
  {
    "url": "assets/js/16.59daaaa6.js",
    "revision": "279cc60229aa8677a3540edce25c8cd1"
  },
  {
    "url": "assets/js/17.ee515985.js",
    "revision": "f2232fb28ccddfbbef49ddeb46628690"
  },
  {
    "url": "assets/js/18.81c9fab5.js",
    "revision": "1b39de8edc7d7d502af21803d6b65bd5"
  },
  {
    "url": "assets/js/19.00e64ffe.js",
    "revision": "35cb80fa42dad71517950dd3d98a3a92"
  },
  {
    "url": "assets/js/2.163895f1.js",
    "revision": "65eeb593e4f8fb271644b91ccceb1394"
  },
  {
    "url": "assets/js/20.35ce1724.js",
    "revision": "a5b8770ab684c1dc7ca1fd6e3b7f3cf5"
  },
  {
    "url": "assets/js/21.4170020b.js",
    "revision": "8088d71136d72225003c9e20958e727b"
  },
  {
    "url": "assets/js/22.804b5add.js",
    "revision": "24d826e4aaba133d8b9168db52a2d009"
  },
  {
    "url": "assets/js/23.1b8d4f5d.js",
    "revision": "58159b10cef0a9e91eedffd9237036a0"
  },
  {
    "url": "assets/js/24.7ff5d218.js",
    "revision": "40bce3584eb94eb23a2619f4116ea9a4"
  },
  {
    "url": "assets/js/25.63469247.js",
    "revision": "d0a41ba269ed8112c54fdc9dc0d764f9"
  },
  {
    "url": "assets/js/26.1c5260d5.js",
    "revision": "edca73504d6d2adab3637e8d078dbf8f"
  },
  {
    "url": "assets/js/27.46dd94db.js",
    "revision": "914ebbc44ba1c0372f7f64459dbd6837"
  },
  {
    "url": "assets/js/28.a42bad03.js",
    "revision": "660293ff99058f97a205e70237b79e80"
  },
  {
    "url": "assets/js/29.ebf71374.js",
    "revision": "e024b83da9e3031ba556123ad04afd8c"
  },
  {
    "url": "assets/js/30.a1c5b116.js",
    "revision": "b07e24e163c9043dd8cc8d63c9fd32c3"
  },
  {
    "url": "assets/js/31.4458b181.js",
    "revision": "439d66bb88062d26cdbcd7ed55f05352"
  },
  {
    "url": "assets/js/32.54438e01.js",
    "revision": "0c44b0fb91fd9335766af55cd73445be"
  },
  {
    "url": "assets/js/33.5dcaed3d.js",
    "revision": "db60e09d7fa259156bb40891a62472fb"
  },
  {
    "url": "assets/js/34.f44b848d.js",
    "revision": "85b7fab6513f518d6fadc3573151c95f"
  },
  {
    "url": "assets/js/35.36c1193c.js",
    "revision": "82d4ac40b4ae22dcb115930610223c60"
  },
  {
    "url": "assets/js/36.8b55ee18.js",
    "revision": "da9c6b4baf01da46ff7bedc362cb31ba"
  },
  {
    "url": "assets/js/37.2ce715f9.js",
    "revision": "1150795d40f4b7c9701a4b5091cabe06"
  },
  {
    "url": "assets/js/38.185e40ab.js",
    "revision": "c21c824dad31989f89e0e90cf0174251"
  },
  {
    "url": "assets/js/39.2fab0a05.js",
    "revision": "bed9a1e8245d0adb466d823d7e6bd710"
  },
  {
    "url": "assets/js/40.695da4ad.js",
    "revision": "4467c6eab19703bb9506126f16e846cf"
  },
  {
    "url": "assets/js/41.97ee49ed.js",
    "revision": "febb612eaa0c253d34c0b8ae379ebd61"
  },
  {
    "url": "assets/js/42.d5b13a76.js",
    "revision": "6654526c270e3df067ff182373d7a847"
  },
  {
    "url": "assets/js/43.1cc78f54.js",
    "revision": "d39ec5e19a4d8698f5f756365905ac4f"
  },
  {
    "url": "assets/js/44.5a29a1ec.js",
    "revision": "c47f82e4f5a81cd0e4cc6411f314125e"
  },
  {
    "url": "assets/js/45.e6d8bf66.js",
    "revision": "e5c1dd74bf57fc5f64947005760e219b"
  },
  {
    "url": "assets/js/46.f09f3159.js",
    "revision": "f25841765849cc88bfa939fc952e45c4"
  },
  {
    "url": "assets/js/47.6a7dfd02.js",
    "revision": "0c05552a6c91e3fc6406f729dc525678"
  },
  {
    "url": "assets/js/48.af05578e.js",
    "revision": "f49a595a3a06e21dce47e75b8259cfea"
  },
  {
    "url": "assets/js/49.ceabeed0.js",
    "revision": "4f7f18c2be7b1869d75497573424a8ba"
  },
  {
    "url": "assets/js/5.9fb3b766.js",
    "revision": "c81dc8cd96dc8f616234b5dff1b31009"
  },
  {
    "url": "assets/js/50.5c0b0339.js",
    "revision": "6029cc1f58b6f448c56100920a2628be"
  },
  {
    "url": "assets/js/51.6346e463.js",
    "revision": "490a059071527b973944b733613dd5f3"
  },
  {
    "url": "assets/js/52.9252e205.js",
    "revision": "bfc4dfb28c54a6ff619dfa9a90fceeec"
  },
  {
    "url": "assets/js/53.04fcaace.js",
    "revision": "d0eda25b79d925779ac2a054052c59be"
  },
  {
    "url": "assets/js/54.333207d9.js",
    "revision": "3c6e4ccd8c2c5159fd50aa1494bd9feb"
  },
  {
    "url": "assets/js/55.235794d9.js",
    "revision": "307fe53d5df5a8c93f1fbd9bb2c11c10"
  },
  {
    "url": "assets/js/56.7b476f4c.js",
    "revision": "9dd51fd04e6e31320dbd32ae3d5df7c3"
  },
  {
    "url": "assets/js/57.86c40d8b.js",
    "revision": "69423b41454687390ce886d2482fbd61"
  },
  {
    "url": "assets/js/58.ea4f5541.js",
    "revision": "e302fa6e60ea047ae1f1f8db39b0e180"
  },
  {
    "url": "assets/js/59.9405875e.js",
    "revision": "22d7cae7d7b28d0488f971caa6c6d065"
  },
  {
    "url": "assets/js/6.1bdf9344.js",
    "revision": "c73e8577ae8350d91ed41a25edf8e208"
  },
  {
    "url": "assets/js/60.6737b139.js",
    "revision": "6226bf899f7e77b467e437e934bed964"
  },
  {
    "url": "assets/js/61.e8484c01.js",
    "revision": "5b3e656d4c0c2c1afcc7c8bf9a054588"
  },
  {
    "url": "assets/js/62.b74a1253.js",
    "revision": "64ef54b34605927559909121b3a463e3"
  },
  {
    "url": "assets/js/63.e5b579f2.js",
    "revision": "e352849827aa360dfe235d537c91b035"
  },
  {
    "url": "assets/js/64.7bfef821.js",
    "revision": "b5b462d13f0f88c44f2da9dce1dcba3e"
  },
  {
    "url": "assets/js/65.05f5b7d9.js",
    "revision": "10a14d9f57f7838506b5e71442a169c9"
  },
  {
    "url": "assets/js/7.41fbb934.js",
    "revision": "d7992430120e44fd6269f827ad3190bf"
  },
  {
    "url": "assets/js/8.f948a534.js",
    "revision": "a5a70651dfb24d397464577e065cedf6"
  },
  {
    "url": "assets/js/9.8fe582ff.js",
    "revision": "3453b57f156ae2a0d5a4fc248c0790da"
  },
  {
    "url": "assets/js/app.2c18594e.js",
    "revision": "cc014a13c5fd2979bc604d3d71718fe6"
  },
  {
    "url": "composable/_template.html",
    "revision": "2e7c4346f5bd14284fd34a12bccc800a"
  },
  {
    "url": "composable/event/event.html",
    "revision": "3dfefa4d437e2875a22da215a2cc0a5d"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "52fbd60907a82ebce286a17e20a8889d"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "d69341397e2451bec98f480d41f1c3e2"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "07ea3cd48509107e2eb84142b122e25d"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "0fd590ed6021408d060ad4dfffcd73fb"
  },
  {
    "url": "composable/index.html",
    "revision": "3613138f5dbd6627b3b6a7286cdbc139"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "b43c2ef4a19339200aa11ab6dc479617"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "32313263be94b113d63cd0477283aac9"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "373c71f360626145f19706d70f9a21d1"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "ba24ffe3faee79c75a5b0a6253e7fda0"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "7bf1f3213cf72c3fe5887398bd27010b"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "97ece925b73724fbd5e3bfa6d8a725d8"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "66d7094b010254062ce31080c95628a6"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "c79109afb1e0e9e8711ed6fde6f98495"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "048dd56a30ad65c9ded035466c1a3e6d"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "95dae10c97e99d2d9a772af08990e53c"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "476fa727c81b6984800b0eaac0e8ed1e"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "3055a1f0bedbe8560f6d030a1ea15156"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "94f24941afc3863710a10af8396334f6"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "5831a286fbb32c5654b7d6e631dd00f5"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "da79a0e00fde7350680075ac25c4ddee"
  },
  {
    "url": "composable/web/language.html",
    "revision": "49e37bacda180808714e36ceb723557d"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "0c91f46138fbd983b77275c5ee641f28"
  },
  {
    "url": "composable/web/online.html",
    "revision": "353d406cb6ab9be108050e2f14d0b51b"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "16a223ab9233046343b5ce08536ab7f3"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "8f0c4f33f1381e8fc50b6637048570e4"
  },
  {
    "url": "Examples/index.html",
    "revision": "3565f80a18c4512c6f851b7e941581d2"
  },
  {
    "url": "index.html",
    "revision": "f39f65db186232c03e1f0e8c9fd3dd1e"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
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
