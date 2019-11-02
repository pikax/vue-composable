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
    ["meta", { property: "og:image", content: "" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/img/apple-icon-57x57.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/img/apple-icon-60x60.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/img/apple-icon-72x72.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/img/apple-icon-76x76.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/img/apple-icon-114x114.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/img/apple-icon-120x120.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/img/apple-icon-144x144.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/img/apple-icon-152x152.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-icon-180x180.png"
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
        sizes: "96x96",
        href: "/img/favicon-96x96.png"
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
    docsDir: "docs",
    editLinks: true,
    sidebarDepth: 2,
    sidebar: {
      // "/composable": [
      //   "",
      //   ['guide/web/fetch', "fetch"]
      // ],
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
            ["composable/promise/cancellablePromise", "cancellablePromise"]
          ]
        },
        {
          title: "Web",
          sidebarDepth: 1,
          collapsable: false,
          children: [
            ["composable/web/fetch", "fetch"],
            ["composable/web/axios", "axios"],
            ["composable/web/webSocket", "webSocket"]
          ]
        }
      ]
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Help us improve this page!",
        nav: [
          { text: "Composable", link: "/composable/" },
          { text: "Examples", link: "/examples/" }
        ]
      }
    }
  }
};
