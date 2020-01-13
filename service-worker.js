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
    "revision": "a49570551ea375dacf1599260b591255"
  },
  {
    "url": "assets/css/3.styles.de1cabab.css",
    "revision": "437f228b8127876a67f1dfc272104dc0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.2a9567ee.js",
    "revision": "c1d81f860a41bdb1d5537c453e56fbfe"
  },
  {
    "url": "assets/js/1.87960c50.js",
    "revision": "079a532a64d7cdd85a53c2d42a40a00a"
  },
  {
    "url": "assets/js/10.67c6b0b2.js",
    "revision": "22f1c5720ef14c0602a9208723f255d3"
  },
  {
    "url": "assets/js/11.d28ce243.js",
    "revision": "49c7cd1521d3bedd296b53b0700b55d1"
  },
  {
    "url": "assets/js/12.30b8c14b.js",
    "revision": "1f0daea8e384439b0639efb9f85cddaa"
  },
  {
    "url": "assets/js/13.303f5328.js",
    "revision": "4477d92cea075706aca1e754d13a94d5"
  },
  {
    "url": "assets/js/14.4d15bc63.js",
    "revision": "2f7b9a5cd5e09b9a252889e0dee162aa"
  },
  {
    "url": "assets/js/15.3c899420.js",
    "revision": "89ce9a7c1bd9d18a41fced25edeaa754"
  },
  {
    "url": "assets/js/16.de6e30e7.js",
    "revision": "ae4c616ae27a595abb337718f926b11b"
  },
  {
    "url": "assets/js/17.dd9fead4.js",
    "revision": "77817cff48ba6fa325faa0aa50569ea3"
  },
  {
    "url": "assets/js/18.721e9621.js",
    "revision": "256e82128820db4997489872e87cb899"
  },
  {
    "url": "assets/js/19.20d8d6cf.js",
    "revision": "f170b547be9f1d869ec815cd39ab5f14"
  },
  {
    "url": "assets/js/2.3eb2ee6e.js",
    "revision": "b2011f1d08de92713bdbe4829b6cfefe"
  },
  {
    "url": "assets/js/20.cf57783e.js",
    "revision": "b999fb2ae4fccf5006cf0f6b55115417"
  },
  {
    "url": "assets/js/21.58e5a3b9.js",
    "revision": "9348daa6f71ebc472fd87fc19d188b90"
  },
  {
    "url": "assets/js/22.febeedf6.js",
    "revision": "c93231540348b11ece5542a6e6c2e436"
  },
  {
    "url": "assets/js/23.d01acff5.js",
    "revision": "f100a0cc6c8bf33146ba208b88001dd5"
  },
  {
    "url": "assets/js/24.0e587fd5.js",
    "revision": "f9e6c327100010c8d98b2b6b5e5ac6ed"
  },
  {
    "url": "assets/js/25.9e78e583.js",
    "revision": "2ef9acfcd19459a46a4377ed5f12b130"
  },
  {
    "url": "assets/js/26.fd70ae98.js",
    "revision": "13e80fd786fef4bd3591ef6c557d7126"
  },
  {
    "url": "assets/js/27.759b8b88.js",
    "revision": "02fc15dc2a195ebaffeffaab2c8e8ae6"
  },
  {
    "url": "assets/js/28.56b3218d.js",
    "revision": "988b81ce979ae21721744adffadf4c17"
  },
  {
    "url": "assets/js/29.def297dc.js",
    "revision": "6c22db977fbae92e37f87d84368a243e"
  },
  {
    "url": "assets/js/30.967af6ec.js",
    "revision": "9a6813541e146237e90e3e23323f6bf0"
  },
  {
    "url": "assets/js/31.d22ec343.js",
    "revision": "3db0eac2198254ee7d447a44cda5d7b5"
  },
  {
    "url": "assets/js/32.8b5d5128.js",
    "revision": "1a672cd5b7aef4d654e4ab14560de054"
  },
  {
    "url": "assets/js/33.f81bebd1.js",
    "revision": "0045de0e5ace84aa52d12554f5a5bec8"
  },
  {
    "url": "assets/js/34.a0dd5e83.js",
    "revision": "5532ab4f0f6ed771a08b3034a4411eb5"
  },
  {
    "url": "assets/js/35.e66ada89.js",
    "revision": "19e406d1589890273c938e1e789ec3a8"
  },
  {
    "url": "assets/js/36.d7d87a32.js",
    "revision": "97393fa60267a7bd2a7994bc4d013ced"
  },
  {
    "url": "assets/js/37.4d153922.js",
    "revision": "4fd1bfa36900ab87b4a590249cc03238"
  },
  {
    "url": "assets/js/38.b1852101.js",
    "revision": "3098de869f9a86ae52928aeb6f37b627"
  },
  {
    "url": "assets/js/39.d935e7cc.js",
    "revision": "342d5903d2bd243f5ada5a1e9533b21e"
  },
  {
    "url": "assets/js/40.13aeb4a1.js",
    "revision": "4f211974c35c3cf78be05153a1c98816"
  },
  {
    "url": "assets/js/41.df9eafa1.js",
    "revision": "1950fa82194a5ca05b6235bf6a2e9ef5"
  },
  {
    "url": "assets/js/42.19e74b07.js",
    "revision": "a5910a267ff38a6867a55b667b3ded3b"
  },
  {
    "url": "assets/js/43.be06345e.js",
    "revision": "91d8c99969da0bb605561c3614f997bc"
  },
  {
    "url": "assets/js/44.fa095fda.js",
    "revision": "dfe8e34ae559dfb20569def18eaf5c8f"
  },
  {
    "url": "assets/js/45.0529b0b6.js",
    "revision": "cb48d0be6504b5dc1e5b2234e5d188fa"
  },
  {
    "url": "assets/js/46.98439cf5.js",
    "revision": "bd8d39e811e5e5ae8e1e894b7b27844c"
  },
  {
    "url": "assets/js/47.7797714b.js",
    "revision": "477b44bd93fddc8b135a366cb7d535e0"
  },
  {
    "url": "assets/js/48.a7de4a47.js",
    "revision": "2c4d1919845137d51c5b02f8189c2dc3"
  },
  {
    "url": "assets/js/5.22eab902.js",
    "revision": "fe0f0974380b93cc3075b107580584f8"
  },
  {
    "url": "assets/js/6.5f15572b.js",
    "revision": "a065c21456b04ff58edfdb8ae83eb0e2"
  },
  {
    "url": "assets/js/7.f9c73880.js",
    "revision": "817922fc917a7ffd4ae6c0825f98c344"
  },
  {
    "url": "assets/js/8.f9901ed8.js",
    "revision": "686bfb983a6995c44b0a28134d0d99a6"
  },
  {
    "url": "assets/js/9.b4764fe5.js",
    "revision": "d6a21c8086bb11828ab7c7d6e9457a68"
  },
  {
    "url": "assets/js/app.90bcb3b2.js",
    "revision": "9c3f3dbd243d0d70f04e0a40dc2efb1c"
  },
  {
    "url": "composable/_template.html",
    "revision": "23c2dcdc025575b94a2a4c594af8cc48"
  },
  {
    "url": "composable/event/event.html",
    "revision": "357f3568c17bf8ec2edda1c1bb9660d6"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "f37937c8c6642c6685e191417b66b1b4"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "ac168fb9fd30dd56ae1615fa64fffa1d"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "cfd69e141b31f53c2ce261544d6aee04"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "936fbc7877ae143c14677f6cddd82238"
  },
  {
    "url": "composable/index.html",
    "revision": "ee8375f2d154fcaf4844e115ef076220"
  },
  {
    "url": "composable/misc/breakpoint.html",
    "revision": "7909b7da22c1d7b7c4e5a31e6fde8d95"
  },
  {
    "url": "composable/misc/localStorage.html",
    "revision": "f84de96813994798a8d47ee6abd5a901"
  },
  {
    "url": "composable/misc/matchMedia.html",
    "revision": "2ba6af99853993158d74be61bca77ae1"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "24dcbc050f139aac3b0de93199b6c1ce"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "3b502fd20c9f87eaafc9cf3145adaa58"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "1723880727290191093efcf52c77a23d"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "d4078bc614b8b21626ce5c0973fbee1a"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "a4db997faf7364d63de15492470f5fd2"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "b89f5ac3dc9fe2aefc10c9d3a4a45d3e"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "201e3653445d50f4c09a36e4d69bfa93"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "d8b6b836741749dd820c11e485792f90"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "7b448e9629e9700d381376dcbeae12f1"
  },
  {
    "url": "Examples/index.html",
    "revision": "cd54b26a1f3e1bbbcc4e79e6f9e391c0"
  },
  {
    "url": "index.html",
    "revision": "45e904059a73184a8ab8e821475316b4"
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
