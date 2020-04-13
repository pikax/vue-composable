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
    "url": "api/axios.api.html",
    "revision": "b0f9aaf18887beaa35dc2d4c6202b0ff"
  },
  {
    "url": "api/core.api.html",
    "revision": "9061f3c9a9ccc345587be3f3beecb917"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "fbafb0aeef1b07cc55383903eac34159"
  },
  {
    "url": "api/web.api.html",
    "revision": "f980018796e160bd741e1058994a6d25"
  },
  {
    "url": "assets/css/3.styles.345ee591.css",
    "revision": "79d2e93e4320a03f34e85f105475a1d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.431f1166.js",
    "revision": "9c8dd84798999cc9b06f1f6bcbef5b36"
  },
  {
    "url": "assets/js/1.6dea1c5c.js",
    "revision": "22062205a4db16f7cd8ba52607dd8d8f"
  },
  {
    "url": "assets/js/10.4dc30a33.js",
    "revision": "0e57634f1f3ef8e9f7eb4349a2561753"
  },
  {
    "url": "assets/js/11.fe7a7772.js",
    "revision": "993d082587ba7a71bb871a074c7b214e"
  },
  {
    "url": "assets/js/12.8c6b3f18.js",
    "revision": "983e73653f565a1ca0a7de6596a43292"
  },
  {
    "url": "assets/js/13.97edf4d6.js",
    "revision": "ac9cba129c68d8fcab8fefc0565233cc"
  },
  {
    "url": "assets/js/14.54e5f940.js",
    "revision": "2e5f14c17b7d6c1a7895beda60e70e3e"
  },
  {
    "url": "assets/js/15.6c6509ec.js",
    "revision": "2cb71a365aeadb462c2676284b92dc28"
  },
  {
    "url": "assets/js/16.f4a6b48d.js",
    "revision": "4669cc42cfbce5520c8e733693b91904"
  },
  {
    "url": "assets/js/17.51d95812.js",
    "revision": "26cb72de76501ec99b61a920d14ceab8"
  },
  {
    "url": "assets/js/18.83e1c66e.js",
    "revision": "8163839e1425cdae7a16becffb45120e"
  },
  {
    "url": "assets/js/19.39c55e31.js",
    "revision": "6077035137d3c79e4b896523f510717e"
  },
  {
    "url": "assets/js/2.9dbc69e7.js",
    "revision": "7077dab556107c36ca8b535e7233dde8"
  },
  {
    "url": "assets/js/20.eb9f7129.js",
    "revision": "5e10b53f2708e5c53e75927ab3743dd2"
  },
  {
    "url": "assets/js/21.11bc0d9a.js",
    "revision": "00dabb851d80153f48acbbe4a2ef2cc7"
  },
  {
    "url": "assets/js/22.15dd65b7.js",
    "revision": "47790e95ae604b337ac3064db5330b42"
  },
  {
    "url": "assets/js/23.9a770abc.js",
    "revision": "7d51ba915030ed278fde1452841e38d4"
  },
  {
    "url": "assets/js/24.1c91a5c4.js",
    "revision": "fb4e922e5f5ad1f9b626b9e4a2709b9a"
  },
  {
    "url": "assets/js/25.3da42e6a.js",
    "revision": "e98ad0cb726c710dd8ebcf87b3f10ee7"
  },
  {
    "url": "assets/js/26.cfa6ebf8.js",
    "revision": "dda6874e0980ae049a0465a402b7fb35"
  },
  {
    "url": "assets/js/27.83ec95c6.js",
    "revision": "bcc66c39fd365a3947442f464f097d75"
  },
  {
    "url": "assets/js/28.0e94512c.js",
    "revision": "40f69d64aa211aea82ff3c55c2045027"
  },
  {
    "url": "assets/js/29.75a00299.js",
    "revision": "754725b39bebf1baa01339d6ae426206"
  },
  {
    "url": "assets/js/30.70170a87.js",
    "revision": "cea4f74ad5d3cd68483f77af500e5e17"
  },
  {
    "url": "assets/js/31.fb030966.js",
    "revision": "4f417c4e5c001cbc35e17e2c01667a10"
  },
  {
    "url": "assets/js/32.471f5eef.js",
    "revision": "786cce4900af272f13adbbca54513d61"
  },
  {
    "url": "assets/js/33.88815e7c.js",
    "revision": "864574427abb0208d26ccac265ba7240"
  },
  {
    "url": "assets/js/34.e8859694.js",
    "revision": "c4e1cb9809d5eb97a8901fcd2f5137a7"
  },
  {
    "url": "assets/js/35.f096ee29.js",
    "revision": "7d074596ec03f981ba93326ea526f7ab"
  },
  {
    "url": "assets/js/36.c6319814.js",
    "revision": "1b4a1f3d5b753b4cb3f73ef4307ece73"
  },
  {
    "url": "assets/js/37.954fb5f7.js",
    "revision": "a2582de75750c38d5411c3e1932bbba5"
  },
  {
    "url": "assets/js/38.2fb164d8.js",
    "revision": "19018309b0ffd52dea1ceb2a36fbf92c"
  },
  {
    "url": "assets/js/39.e346ec36.js",
    "revision": "0dd474f1a8c3a59489e43946db3ce3a8"
  },
  {
    "url": "assets/js/40.6afacd16.js",
    "revision": "6dc07dd8ea38cba34e5d34f140f08db9"
  },
  {
    "url": "assets/js/41.9eb5feb4.js",
    "revision": "bdff22aaa6a5c8cf44bbce6913c95382"
  },
  {
    "url": "assets/js/42.d2d7c56f.js",
    "revision": "de5e1eed11599ee477a7cf6930cc5cf1"
  },
  {
    "url": "assets/js/43.0c0e8a5f.js",
    "revision": "bd788fc67fa01f12e9a3b9591a355488"
  },
  {
    "url": "assets/js/44.b64c3023.js",
    "revision": "027a4e636e25b7cb9f5416ae1fa07891"
  },
  {
    "url": "assets/js/45.af43130e.js",
    "revision": "e7c28065d78d04012ee14ff98b6dda32"
  },
  {
    "url": "assets/js/46.cebaafa1.js",
    "revision": "af9dfa69f5f397624f9c5977c4cc9671"
  },
  {
    "url": "assets/js/47.e1800757.js",
    "revision": "1c744bc8295a4093e2bdcab895b95119"
  },
  {
    "url": "assets/js/48.fa4c3130.js",
    "revision": "8381a86da99ea7f5722fbd3a55a3827a"
  },
  {
    "url": "assets/js/49.aa8ad3cc.js",
    "revision": "19faedc66db6793cf2649785d99f76f6"
  },
  {
    "url": "assets/js/5.cda46c24.js",
    "revision": "94d0ea2de72c7d31c4524d7c1724ea8f"
  },
  {
    "url": "assets/js/50.29e7accf.js",
    "revision": "d45e5d87fd65fe99b92d708ae350e999"
  },
  {
    "url": "assets/js/51.e2ead732.js",
    "revision": "57531895b61bf78972e894c2bf80d361"
  },
  {
    "url": "assets/js/52.6b20001b.js",
    "revision": "ff67c1497132071fdaa70e26e7266e0b"
  },
  {
    "url": "assets/js/53.dc95b8b2.js",
    "revision": "59d3dca5f36bb719aa162e5869ccc08e"
  },
  {
    "url": "assets/js/54.0f8a91f8.js",
    "revision": "5724cda1a0478494070a57cb56e0a8bb"
  },
  {
    "url": "assets/js/55.e0452ae3.js",
    "revision": "0b80a845d9ac17d33a1cc49d009f008c"
  },
  {
    "url": "assets/js/56.62eba55f.js",
    "revision": "dffdc9ad931f6d14c45b18681ce36f2b"
  },
  {
    "url": "assets/js/57.de6bd03b.js",
    "revision": "e9067d5f2422de578655d304e509a98c"
  },
  {
    "url": "assets/js/58.20f75c98.js",
    "revision": "2d62acc91f591c825ff774629927c8d0"
  },
  {
    "url": "assets/js/59.cf6b344b.js",
    "revision": "3fffe27ef2deb8833f2e49cb06d3f552"
  },
  {
    "url": "assets/js/6.b55cb954.js",
    "revision": "68efc52117bb479e2c61e90442cce72e"
  },
  {
    "url": "assets/js/60.3397a53f.js",
    "revision": "2f330e2eb8c3d40b4deea50ff763629f"
  },
  {
    "url": "assets/js/61.010022f6.js",
    "revision": "1d1c6cbe93b59ddf300edfaba06fd9d1"
  },
  {
    "url": "assets/js/62.b1b59bd6.js",
    "revision": "af0c02ef44cbbd2a08aea0ef8a99e221"
  },
  {
    "url": "assets/js/63.eebfb497.js",
    "revision": "4e04635ac36296eaa88d1cf0b0a652b9"
  },
  {
    "url": "assets/js/64.9629eb38.js",
    "revision": "fd9175a36b1597ab12b2f4d25ae704fe"
  },
  {
    "url": "assets/js/65.76d8b136.js",
    "revision": "285417ea4952222c438a0b8b123a7f44"
  },
  {
    "url": "assets/js/66.8defb94d.js",
    "revision": "ca453465f8738e64951dd01ffb37f4ae"
  },
  {
    "url": "assets/js/67.147b2995.js",
    "revision": "4847c7621fbf9b69a92cedc8ea8e8ce9"
  },
  {
    "url": "assets/js/68.04d3dc2b.js",
    "revision": "b2720c907ee1490ff8ef98103e4e298e"
  },
  {
    "url": "assets/js/69.f7ced1af.js",
    "revision": "fd604d5dad28a68bf378821cb917109b"
  },
  {
    "url": "assets/js/7.6d9422a7.js",
    "revision": "ecd3f6828d35c551fc9675f10db95ea1"
  },
  {
    "url": "assets/js/70.16cd28d0.js",
    "revision": "545a19c6de01a08de5bbd3ed64d3233f"
  },
  {
    "url": "assets/js/71.95a88559.js",
    "revision": "b77b22047ac0dba45157ceb19ab798ed"
  },
  {
    "url": "assets/js/72.8fdd810c.js",
    "revision": "e49782fcda1b3a81b942e85090ec1c42"
  },
  {
    "url": "assets/js/73.04f62563.js",
    "revision": "cae2313e7488b5b468b9083857a8cd40"
  },
  {
    "url": "assets/js/74.6b9d9666.js",
    "revision": "077358b703186c416af4aff47c40f35a"
  },
  {
    "url": "assets/js/75.27c5220c.js",
    "revision": "1441cec2471e2679a11d105c7483aa68"
  },
  {
    "url": "assets/js/76.eff2181b.js",
    "revision": "9964bbf60ea72171e7503584c25c646e"
  },
  {
    "url": "assets/js/77.290e549b.js",
    "revision": "c88616b86053b314ef8d06870aafd20e"
  },
  {
    "url": "assets/js/78.3d2dacdd.js",
    "revision": "29a9d6b75e8859ceb4282ac885f1e833"
  },
  {
    "url": "assets/js/79.399980de.js",
    "revision": "98f9f9312c160ec7c9aa0630e40066ad"
  },
  {
    "url": "assets/js/8.d3755b19.js",
    "revision": "d6de88d3764c2c1b44c40c486fa17fc0"
  },
  {
    "url": "assets/js/80.e2c5aed9.js",
    "revision": "740a294663d3c5cad392e0cd54164ef2"
  },
  {
    "url": "assets/js/81.bfeca3db.js",
    "revision": "1b9c6062f2f15e1b46bb21d43ea3d22e"
  },
  {
    "url": "assets/js/82.285cab80.js",
    "revision": "54f20582f1600484c234e5191f70321b"
  },
  {
    "url": "assets/js/83.02244c41.js",
    "revision": "804a1b3b0af3207a6a3af46a739b1d80"
  },
  {
    "url": "assets/js/84.512a9446.js",
    "revision": "84a4eb740f440fc7bea2af49f4b1a8df"
  },
  {
    "url": "assets/js/85.afb0afc3.js",
    "revision": "4dad6e505f76e504d5b5c33b0766fedf"
  },
  {
    "url": "assets/js/86.03a3ac35.js",
    "revision": "d8e538d56fab8cdd326a01e7939d3ff1"
  },
  {
    "url": "assets/js/87.368d596f.js",
    "revision": "d0f29565210aa7af094e7d9d92f6abf4"
  },
  {
    "url": "assets/js/88.3c7cc7c5.js",
    "revision": "caaa8753759c2e2ad35da1f32859e9dd"
  },
  {
    "url": "assets/js/89.e68b42ee.js",
    "revision": "805164d62049c071f5f4a803626f16ac"
  },
  {
    "url": "assets/js/9.e562e005.js",
    "revision": "d1a65aabe9c6910daedd413b5b6bac8f"
  },
  {
    "url": "assets/js/90.a7d04805.js",
    "revision": "83e42eb63358005450d642e247e25542"
  },
  {
    "url": "assets/js/91.5b1d872b.js",
    "revision": "ec17af0db0ffe6b610968f907c9e4103"
  },
  {
    "url": "assets/js/92.d18e6932.js",
    "revision": "656fc59044c73ebcdf8e5a9c1bab00b1"
  },
  {
    "url": "assets/js/93.843da95f.js",
    "revision": "a272e0655a9dbc08bff85468fd28b338"
  },
  {
    "url": "assets/js/94.ff321b69.js",
    "revision": "1342e8dae02737d55ce924cd6b24e14c"
  },
  {
    "url": "assets/js/95.a72556f8.js",
    "revision": "6e3e15dc38567d339a238f49c70b4be3"
  },
  {
    "url": "assets/js/app.3f5e2a55.js",
    "revision": "27577a527a1972c9954edd1a8218035e"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "a958187ee99db675d77d33e08d993d9a"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "20187567d202bb09c07c2484fcfda619"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "6a7b6e43cc117b2c5bf383b8236b10ad"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "28d25fbc4a5da7cd0d4825d62b061266"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "b247d8cb85266f889747d67daad164be"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "8262e0d1f882618dbb5068356a801106"
  },
  {
    "url": "composable/date/now.html",
    "revision": "60af1478b25c5e2edbad0091f6ad5b97"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "5dec6a84b6167e6dda936b9d86b9eb40"
  },
  {
    "url": "composable/event/event.html",
    "revision": "32d9b150e786d575c0af77ce253f9391"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "8ead3d2b5446fb4236eb5f7a19269d9f"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "6857dba9c6080b6f0cedd8809fa7772a"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "841f5aeefacc45fe5d363e4ce8c1d86a"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "b3fe346b403120b9506fffc9a72ab19f"
  },
  {
    "url": "composable/format/format.html",
    "revision": "1d1ca9bdb762f88a82473ac640daa66f"
  },
  {
    "url": "composable/format/path.html",
    "revision": "0cca90e517fce8d08dbb9321ec014e62"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "2523fda4e0a8e7cd3b3a0f08c96f6f0b"
  },
  {
    "url": "composable/index.html",
    "revision": "d4e7ea0778a88e920922ecc170df7b67"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "aecb1f0dd0d6aaa614391d7dd4a9fbe0"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "cf5aad9093104be043807497b8a25ad0"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "ddf0224efd0f471297cffeb38476bb4f"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "5cae64c6be8be69704ef05240200ebb0"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "fafbbdea39773e826d72a3ef3594eba5"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "272e4415b6f609bcb9c8a67ccf38feb3"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "502e1eb9d67ab823ecb18184bbb61047"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "8ffd8a0e06dcbef2cf163974cbeab06e"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "17127b5d37239dc8b09168675e830b94"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "26d640c0254f7871fb467e05be5ca727"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "2557ba4a9f4532ffd24325b99be29165"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "17bbab8120d61646852ff380d3841257"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "bafb7be50a010b540af79296521634ac"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "de12232994b3cb4f56ad208cbe5d34e6"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "9229a291acde90efa2dda41b3ee654a8"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "a89ae8f63f4cb1ab61e086e381e8b132"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "cce2bc224067f012a00b686c09b08862"
  },
  {
    "url": "composable/web/language.html",
    "revision": "53e4f4fe4a95cff3bb8a772cb90afcda"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "d7bb2ce964198a55732df6e6ac75cae7"
  },
  {
    "url": "composable/web/online.html",
    "revision": "80c4ca301148d06ef380e72464dffabb"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "e12d16b43da35562181e2c8abf8fa985"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "cba4f06cc190c854dd9c88a109691daa"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "73c64639cae5725ffd6810979d52486d"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "214ebe49464ad7eda1f5ae73ffb56d9d"
  },
  {
    "url": "Examples/index.html",
    "revision": "5988685927111ee1c2e9364214d0146e"
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
    "revision": "a54331b60d1ce82db364ce2d55c607c9"
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
