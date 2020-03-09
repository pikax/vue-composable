module.exports = {
  title: "vue-composable",
  description: "Vue composition-api composable components",
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  base: "/vue-composable/",
  head: [
    ["meta", { charset: "utf-8" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/img/ms-icon-144x144.png" }
    ],
    ["meta", { name: "theme-color", content: "#41b883" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    ["meta", { property: "og:image", content: "/img/favicon-32x32.png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/img/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/img/android-icon-192x192.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png"
      }
    ]
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "vue-composable",
      description: "Vue composition-api composable components"
    }
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
      "/": [
        "",
        {
          title: "Event",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ["composable/event/event", "event"],
            ["composable/event/onMouseMove", "onMouseMove"],
            ["composable/event/onResize", "onResize"],
            ["composable/event/onScroll", "onScroll"]
          ]
        },
        {
          title: "Date",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/date/now", "now"],
            ["composable/date/dateNow", "dateNow"],
            ["composable/date/performanceNow", "performanceNow"]
          ]
        },
        {
          title: "Format",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/format/format", "format"],
            ["composable/format/path", "path"]
          ]
        },

        {
          title: "Breakpoint",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/breakpoint/matchMedia", "matchMedia"],
            ["composable/breakpoint/breakpoint", "breakpoint"],
            ["composable/breakpoint/breakpointChrome", "Chrome"],
            ["composable/breakpoint/breakpointTailwindCSS", "TailwindCSS"]
          ]
        },
        {
          title: "Misc",
          sidebarDepth: 1,
          collapsable: false,
          children: [["composable/misc/sharedRef", "SharedRef"]]
        },
        {
          title: "Storage",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/storage/webStorage", "WebStorage"],
            ["composable/storage/storage", "Storage"],
            ["composable/storage/localStorage", "localStorage"],
            ["composable/storage/sessionStorage", "sessionStorage"]
          ]
        },
        {
          title: "Pagination",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ["composable/pagination/pagination", "pagination"],
            ["composable/pagination/arrayPagination", "arrayPagination"]
          ]
        },
        {
          title: "Promise",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/promise/promise", "promise"],
            ["composable/promise/cancellablePromise", "cancellablePromise"],
            ["composable/promise/retry", "retry"]
          ]
        },
        {
          title: "Web",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/web/fetch", "fetch"],
            ["composable/web/webSocket", "webSocket"],
            ["composable/web/intersectionObserver", "IntersectionObserver"],
            ["composable/web/networkInformation", "NetworkInformation"],
            ["composable/web/online", "Navigator.onLine"],
            ["composable/web/pageVisibility", "PageVisibilityAPI"],
            ["composable/web/language", "Language"],
            ["composable/web/broadcastChannel", "BroadcastChannel API"],
            ["composable/web/geolocation", "Geolocation API"],
            ["composable/web/cssVariables", "CSS variables"]
          ]
        },
        {
          title: "Validation",
          sidebarDepth: 1,
          collapsable: false,
          children: [["composable/validation/validation", "Validation"]]
        },
        {
          title: "i18n",
          sidebarDepth: 1,
          collapsable: false,
          children: [["composable/i18n/i18n", "i18n"]]
        },
        {
          title: "External",
          sidebarDepth: 1,
          collapsable: false,
          children: [["composable/external/axios", "axios"]]
        }
      ]
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Help us improve this page!",
        nav: [
          { text: "Composable", link: "/composable/" }
          // { text: "Examples", link: "/examples/" }
        ]
      }
    }
  }
};
