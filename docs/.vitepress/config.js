module.exports = {
  define: {
    __VUE_2__: false,
    "process.env.SSR": true,
  },
  title: "vue-composable",
  description:
    "Vue composition-api composable components. i18n, validation, pagination, fetch, etc. +30 variable composable functions",
  // plugins: [
  //   "@vuepress/back-to-top",
  //   [
  //     "@vuepress/pwa",
  //     {
  //       serviceWorker: true,
  //       updatePopup: true,
  //     },
  //   ],
  // ],
  base: process.env.DOCS_BASE || "",
  head: [
    ["meta", { charset: "utf-8" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/img/ms-icon-144x144.png" },
    ],
    ["meta", { name: "theme-color", content: "#41b883" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ["meta", { property: "og:image", content: "/img/favicon-32x32.png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/img/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/img/android-icon-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "vue-composable",
      description: "Vue composition-api composable components",
    },
  },
  themeConfig: {
    repo: "pikax/vue-composable",
    docsRepo: "pikax/vue-composable",
    logo: "/assets/logo.svg",
    docsDir: "docs",
    editLinks: true,
    sidebarDepth: 2,
    sidebar: {
      "/examples/": [],
      "": [
        {
          text: "test",
          children: [{ link: "composable/event/event", text: "event" }],
        },
      ],
      "/": [
        "",
        {
          text: "Event",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            { link: "composable/event/event", text: "event" },
            { link: "composable/event/onMouseMove", text: "onMouseMove" },
            { link: "composable/event/onResize", text: "onResize" },
            { link: "composable/event/onScroll", text: "onScroll" },
            { link: "composable/event/onOutsidePress", text: "onOutsidePress" },
          ],
        },
        {
          text: "Date",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/date/now", text: "now" },
            { link: "composable/date/dateNow", text: "dateNow" },
            { link: "composable/date/performanceNow", text: "performanceNow" },
          ],
        },
        {
          text: "Format",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/format/format", text: "format" },
            { link: "composable/format/path", text: "path" },
          ],
        },

        {
          text: "Breakpoint",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/breakpoint/matchMedia", text: "matchMedia" },
            { link: "composable/breakpoint/breakpoint", text: "breakpoint" },
            { link: "composable/breakpoint/breakpointChrome", text: "Chrome" },
            {
              link: "composable/breakpoint/breakpointTailwindCSS",
              text: "TailwindCSS",
            },
          ],
        },
        {
          text: "Misc",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/misc/sharedRef", text: "SharedRef" },
            { link: "composable/misc/vmodel", text: "vModel" },
            { link: "composable/misc/injectFactory", text: "injectFactory" },
            { link: "composable/misc/lockScroll", text: "lockScroll" },
          ],
        },
        {
          text: "Storage",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/storage/webStorage", text: "WebStorage" },
            { link: "composable/storage/storage", text: "Storage" },
            { link: "composable/storage/localStorage", text: "localStorage" },
            {
              link: "composable/storage/sessionStorage",
              text: "sessionStorage",
            },
          ],
        },
        {
          text: "Pagination",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            { link: "composable/pagination/pagination", text: "pagination" },
            {
              link: "composable/pagination/arrayPagination",
              text: "arrayPagination",
            },
          ],
        },
        {
          text: "Promise",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/promise/promise", text: "promise" },
            { link: "composable/promise/promiseLazy", text: "Lazy Promise" },
            {
              link: "composable/promise/cancellablePromise",
              text: "cancellablePromise",
            },
            { link: "composable/promise/retry", text: "retry" },
          ],
        },
        {
          text: "Intl",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/Intl/dateTimeFormat", text: "dateTimeFormat" },
            { link: "composable/Intl/numberFormat", text: "numberFormat" },
            { link: "composable/Intl/currencyFormat", text: "currencyFormat" },
          ],
        },
        {
          text: "Web",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/web/fetch", text: "fetch" },
            { link: "composable/web/webSocket", text: "webSocket" },
            {
              link: "composable/web/intersectionObserver",
              text: "IntersectionObserver",
            },
            {
              link: "composable/web/networkInformation",
              text: "NetworkInformation",
            },
            { link: "composable/web/online", text: "Navigator.onLine" },
            {
              link: "composable/web/pageVisibility",
              text: "PageVisibilityAPI",
            },
            { link: "composable/web/language", text: "Language" },
            {
              link: "composable/web/broadcastChannel",
              text: "BroadcastChannel API",
            },
            { link: "composable/web/geolocation", text: "Geolocation API" },
            { link: "composable/web/cssVariables", text: "CSS variables" },
            { link: "composable/web/worker", text: "WebWorker API" },
            {
              link: "composable/web/workerFunction",
              text: "WebWorker Function",
            },
            { link: "composable/web/share", text: "WebShare API" },
          ],
        },
        {
          text: "Validation",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/validation/validation", text: "Validation" },
          ],
        },
        {
          text: "i18n",
          sidebarDepth: 1,
          collapsable: false,
          children: [{ link: "composable/i18n/i18n", text: "i18n" }],
        },
        {
          text: "meta",
          sidebarDepth: 1,
          collapsable: false,
          children: [{ link: "composable/meta/text", text: "text" }],
        },
        {
          text: "state",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/state/timeline", text: "Timeline" },
            { link: "composable/state/undo", text: "Undo" },
            { link: "composable/state/valueSync", text: "ValueSync" },
          ],
        },
        {
          text: "External",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            { link: "composable/external/axios", text: "axios" },
            { link: "composable/external/makeAxios", text: "makeAxios" },
          ],
        },
      ],
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Help us improve this page!",
        nav: [
          { text: "Composable", link: "/composable/" },
          // { text: "Examples", link: "/examples/" }
        ],
      },
    },
  },
};
