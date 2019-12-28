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
    "revision": "619cd560b7449ed9e750336243790adb"
  },
  {
    "url": "assets/css/3.styles.affacf07.css",
    "revision": "437f228b8127876a67f1dfc272104dc0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.6f7ea561.js",
    "revision": "d0336ea2ff30e809279d83b26af471d9"
  },
  {
    "url": "assets/js/1.8b459a5f.js",
    "revision": "4243991d1d612599c9eb00517674f042"
  },
  {
    "url": "assets/js/10.46741bbe.js",
    "revision": "367026bc3f0386c6c789a623b75e1f4b"
  },
  {
    "url": "assets/js/11.b2654d5f.js",
    "revision": "8ac396d105ffe1486f6421a0726bc00a"
  },
  {
    "url": "assets/js/12.a313782b.js",
    "revision": "71a61d69e3b7b811326b1e32f7f3e799"
  },
  {
    "url": "assets/js/13.ccc16073.js",
    "revision": "dc2b20881e5e7fa203a83c7fec5b743e"
  },
  {
    "url": "assets/js/14.de5307d6.js",
    "revision": "48a4535ebecbb190bbdb3dae2b2ebf27"
  },
  {
    "url": "assets/js/15.0eb5bbd2.js",
    "revision": "276fc0d07ee6ae6c74c77d3763520313"
  },
  {
    "url": "assets/js/16.902d038c.js",
    "revision": "e748da01c72a25b559c0cc9106b3e58e"
  },
  {
    "url": "assets/js/17.ccb813ce.js",
    "revision": "5bbbc49476496224c77105c326202c85"
  },
  {
    "url": "assets/js/18.59bb4685.js",
    "revision": "25e8aadf37ad43556a628829c6219957"
  },
  {
    "url": "assets/js/19.53be621d.js",
    "revision": "dd84d316975bb533f4e4db3c9e4d2043"
  },
  {
    "url": "assets/js/2.04d8b0b1.js",
    "revision": "5bdfed48f6bb00322d1b6d20052f74cd"
  },
  {
    "url": "assets/js/20.9c7981bd.js",
    "revision": "28b1c20656d1c512a9d68cf32df72c4d"
  },
  {
    "url": "assets/js/21.4522c6e1.js",
    "revision": "223a365726593cc1243e3b8ebaa3a671"
  },
  {
    "url": "assets/js/22.297bc806.js",
    "revision": "88f90f8999c6477b733f852df1f44c54"
  },
  {
    "url": "assets/js/23.4ae750e2.js",
    "revision": "1144e2afccc94139f52b7f352af1daae"
  },
  {
    "url": "assets/js/24.f0fee8fd.js",
    "revision": "5536c1ed3e5c50901bfab18156ac5531"
  },
  {
    "url": "assets/js/25.b25d412e.js",
    "revision": "10dd3caf7a575175130350399fd70dd4"
  },
  {
    "url": "assets/js/26.96b2117d.js",
    "revision": "af5c4845014ff1aadb2657caebf9af5a"
  },
  {
    "url": "assets/js/27.5cc8dfbc.js",
    "revision": "a082ff3857bfa6182182de8d9ef8a1c5"
  },
  {
    "url": "assets/js/28.a396ea6c.js",
    "revision": "a0d624ba20529bef147e759935147873"
  },
  {
    "url": "assets/js/29.107e92ee.js",
    "revision": "4fe97a0e0397590c483ef53f943b4ac8"
  },
  {
    "url": "assets/js/30.83a58829.js",
    "revision": "63cf2977f1c3f254c26fe766849e05ba"
  },
  {
    "url": "assets/js/31.38dfd685.js",
    "revision": "e21b53251ec90d426da20282822a601f"
  },
  {
    "url": "assets/js/32.2834d632.js",
    "revision": "e5e22b77c5cffb88e4f5ec0896695235"
  },
  {
    "url": "assets/js/33.447fa9d1.js",
    "revision": "83ceb9fd677713340cce88d238531eb5"
  },
  {
    "url": "assets/js/34.cb7b19ab.js",
    "revision": "39631b0cc6824ad2a23efa666b1a0a65"
  },
  {
    "url": "assets/js/35.1541bb30.js",
    "revision": "17d9bfa431921e51736c5f73e7db06d0"
  },
  {
    "url": "assets/js/36.94a92f87.js",
    "revision": "f28a4e13da46f51972ec9b82ee53d206"
  },
  {
    "url": "assets/js/37.d752eea1.js",
    "revision": "8158f38a0b523e38856577aa97f1d7a3"
  },
  {
    "url": "assets/js/38.d3556e6b.js",
    "revision": "fa0d3677778ab660c2782f528841d213"
  },
  {
    "url": "assets/js/39.a5e39278.js",
    "revision": "ed689004b452e5ae8225620210174e68"
  },
  {
    "url": "assets/js/40.9d965d0b.js",
    "revision": "19832257783d44e3f181ae4d18b6f105"
  },
  {
    "url": "assets/js/41.7ba76347.js",
    "revision": "557573beb35f4796f0a22d070247ec72"
  },
  {
    "url": "assets/js/42.ca5a4163.js",
    "revision": "d4cc831c26890ba9f31affe42946f84a"
  },
  {
    "url": "assets/js/43.78aa4aae.js",
    "revision": "4d1400faa763a113b52f83733074f29a"
  },
  {
    "url": "assets/js/44.bfebe72e.js",
    "revision": "c38e89597ce3d1edd06092b422af5e4e"
  },
  {
    "url": "assets/js/45.d75fedf8.js",
    "revision": "471b672fdfd64ef1b143882f0f0c775b"
  },
  {
    "url": "assets/js/46.bc58eb40.js",
    "revision": "e9c108040dec4f02bf1d96c165b4ca05"
  },
  {
    "url": "assets/js/5.18a00d40.js",
    "revision": "eefdfd477bac2c7f075305c040d24368"
  },
  {
    "url": "assets/js/6.5aeb0c45.js",
    "revision": "eae4e1e1d961cfad5cd0764856200cae"
  },
  {
    "url": "assets/js/7.4a77e215.js",
    "revision": "97da412764ae131722f74d1ad03573af"
  },
  {
    "url": "assets/js/8.4e91b3a3.js",
    "revision": "485623a57395232649b32e7782ab21ea"
  },
  {
    "url": "assets/js/9.b2edd88b.js",
    "revision": "9ee512041d591e48e39a0808063c0f76"
  },
  {
    "url": "assets/js/app.2bfdc857.js",
    "revision": "207bfe6211940db87fc49d64a9b38b9b"
  },
  {
    "url": "composable/_template.html",
    "revision": "204a76017f68660cb04b11772acb29e0"
  },
  {
    "url": "composable/event/event.html",
    "revision": "085b5ae56127399109aa3f9467813cdd"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "b94189c0c74876078ff804f8bf93e52c"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "3980cfe6f41512fa65663ad404c436c1"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "09db7f64b14d56648591a3998d30fc5c"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "1473fb2914624c4aebd840952faca216"
  },
  {
    "url": "composable/index.html",
    "revision": "00445ae47054ab28644051eae4855fad"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "a5006f798b0f38f8669e8faf3142317e"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "7524d8f5b3a1c850b56c0bb6924ab191"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "0899c85056cae3ec60273b2e3d71c8a2"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "531d9df9a03a2c5eaa8c0fc9094c02bc"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "ad32f599df144c944b04ca6a7e897692"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "837d0dff140daeeae74f58435a2d824d"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "a76edbad67a1f250d82431471975ddd2"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0d59f42d6482bc4202c597a3f9b590e3"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "770518e3ca7c1ec7b033d38fc998cd58"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "c90528805bf9ef267d6e60023548eb93"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "e89f1d51e32d3e707f1c7abf131e88ab"
  },
  {
    "url": "Examples/index.html",
    "revision": "aa3d28ab277bd64d0c02807a3b3257d0"
  },
  {
    "url": "index.html",
    "revision": "c0f8d2e438ce62a7cda4d6d5ca43d04c"
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
