# vue-composable

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

[![CircleCI](https://circleci.com/gh/pikax/vue-composable.svg?style=svg)](https://circleci.com/gh/pikax/vue-composable)
[![Coverage Status](https://coveralls.io/repos/github/pikax/vue-composable/badge.svg?branch=master)](https://coveralls.io/github/pikax/vue-composable?branch=master)
[![npm version](https://badge.fury.io/js/vue-composable.svg)](https://badge.fury.io/js/vue-composable)
[![bundle size](https://badgen.net/bundlephobia/minzip/vue-composable)](https://bundlephobia.com/result?p=vue-composable)

<p align="center">Out-of-the-box ready to use composables</p>

- **🌴 TreeShakable**
- **🧙‍♂️ Fully Typescript**
- **💚 Vue 3 and 2 support**
- **🔨 Vue Devtools support**

## Introduction

This library aim is to be one stop shop for many real-world composable functions, with aggressive tree-shaking to keep it light on your end code.

## Installing

```bash
# @vue/composition-api

# install with yarn
yarn add @vue/composition-api vue-composable

# install with npm
npm install @vue/composition-api vue-composable

# vue 3

# install with yarn
yarn add vue-composable

# install with npm
npm install vue-composable
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/)

### Composable

### Event

- [Event](https://pikax.me/vue-composable/composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](https://pikax.me/vue-composable/composable/event/onMouseMove) - Attach `mousemove` listener to a DOM element
- [Resize](https://pikax.me/vue-composable/composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](https://pikax.me/vue-composable/composable/event/onScroll) - Attach `scroll` listener to a DOM element
- [onOutsidePress](https://pikax.me/vue-composable/composable/event/onOutsidePress) - Execute callback when click is outside of element

### Dom

- [Mouse distance from Element](https://pikax.me/vue-composable/composable/dom/mouseDistanceFromElement) - Distance in pixels from an element center

### Date

- [useNow](https://pikax.me/vue-composable/composable/date/now) : Return reactive custom timer with specified refresh rate
- [useDateNow](https://pikax.me/vue-composable/composable/date/dateNow) : Returns reactive `Date.now()` with custom refresh rate
- [usePerformanceNow](https://pikax.me/vue-composable/composable/date/performanceNow) : Returns reactive `performance.now()` with custom refresh rate

### Format

- [format](https://pikax.me/vue-composable/composable/format/format) - Reactive string format
- [path](https://pikax.me/vue-composable/composable/format/path) - Retrieve object value based on string path

### Breakpoint

- [MatchMedia](https://pikax.me/vue-composable/composable/breakpoint/matchMedia) - reactive `MatchMedia`
- [Breakpoint](https://pikax.me/vue-composable/composable/breakpoint/breakpoint) - reactive `breakpoints` based on `window.innerWidth`
- [Chrome](https://pikax.me/vue-composable/composable/breakpoint/breakpointChrome) - reactive chrome breakpoints
- [TailwindCSS](https://pikax.me/vue-composable/composable/breakpoint/breakpointTailwindCSS) - reactive TailwindCSS breakpoints

### MISC

- [sharedRef](https://pikax.me/vue-composable/composable/misc/sharedRef) - cross-tab reactive `ref`
- [VModel](https://pikax.me/vue-composable/composable/misc/vmodel) - helper to wrap model update into a `ref` `[vue3 only]`
- [injectFactory](https://pikax.me/vue-composable/composable/misc/injectFactory) - same as [inject](https://vue-composition-api-rfc.netlify.app/api.html#dependency-injection) but allows you to have a factory as default value
- [interval](https://pikax.me/vue-composable/composable/misc/interval) - self-remove `setInterval` on unmount
- [lockScroll](https://pikax.me/vue-composable/composable/misc/lockScroll) - `lock-scroll` component
- [refDebounced](https://pikax.me/vue-composable/composable/misc/refDebounced) - debounces the update value of a `ref`

### Storage

- [WebStorage](https://pikax.me/vue-composable/composable/storage/webStorage) - Reactive access to `Storage API`, `useLocalStorage` and `useSessionStorage` use this
- [storage](https://pikax.me/vue-composable/composable/storage/storage) - uses `localStorage` or on safari private it uses `sessionStorage`
- [localStorage](https://pikax.me/vue-composable/composable/storage/localStorage) - Reactive access to a `localStorage`
- [sessionStorage](https://pikax.me/vue-composable/composable/storage/sessionStorage) - Reactive access to a `sessionStorage`

### Pagination

- [Pagination](https://pikax.me/vue-composable/composable/pagination/pagination) - Generic reactive pagination controls
- [Array Pagination](https://pikax.me/vue-composable/composable/pagination/arrayPagination) - Array pagination

### Validation

- [Validation](https://pikax.me/vue-composable/composable/validation/validation) - model based validation inspired by [vuelidate](https://vuelidate.js.org/)

### i18n

- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Simple i18n implementation with API inspired by [vue-i18n](https://github.com/kazupon/vue-i18n)

### Intl

- [dateTimeFormat](https://pikax.me/vue-composable/composable/Intl/dateTimeFormat) - Intl.DateTimeFormat
- [numberFormat](https://pikax.me/vue-composable/composable/Intl/numberFormat) - Intl.NumberFormat
- [currencyFormat](https://pikax.me/vue-composable/composable/Intl/currencyFormat) - CurrencyFormat with Intl.NumberFormat

### Promise

- [Promise](https://pikax.me/vue-composable/composable/promise/promise) - `Promise` reactive resolve and reject
- [promiseLazy](https://pikax.me/vue-composable/composable/promise/promiseLazy) - Sugar for [usePromise](https://pikax.me/vue-composable/composable/promise/promise) `lazy:true`
- [Cancellable Promise](https://pikax.me/vue-composable/composable/promise/cancellablePromise) - Allow to cancel promises
- [Retry](https://pikax.me/vue-composable/composable/promise/retry) - Provides functionality to retry `promise`

### Meta

- [Title](https://pikax.me/vue-composable/composable/meta/title) - reactive `document.title`

### State

- [Timeline](https://pikax.me/vue-composable/composable/state/timeline) - Tracks variable history
- [Undo](https://pikax.me/vue-composable/composable/state/undo) - Tracks variable history, to allow `undo` and `redo`
- [valueSync](https://pikax.me/vue-composable/composable/state/valueSync) - syncs variables value, across multiple `ref`s

### Web

- [Fetch](https://pikax.me/vue-composable/composable/web/fetch) - reactive `fetch` wrapper
- [WebSocket](https://pikax.me/vue-composable/composable/web/webSocket) - reactive `WebSocket` wrapper
- [IntersectionObserver](https://pikax.me/vue-composable/composable/web/intersectionObserver) - reactive `IntersectionObserver`
- [NetworkInformation](https://pikax.me/vue-composable/composable/web/networkInformation) - reactive `NetworkInformation` wrapper
- [Online](<[composable/web](https://pikax.me/vue-composable/composable/web)/online>) - reactive `navigator.onLine` wrapper
- [PageVisibility](https://pikax.me/vue-composable/composable/web/pageVisibility) - reactive `Page Visibility API`
- [Language](https://pikax.me/vue-composable/composable/web/language) - reactive `NavigatorLanguage`
- [BroadcastChannel](https://pikax.me/vue-composable/composable/web/broadcastChannel) - reactive `BroadcastChannel API`
- [Geolocation API](https://pikax.me/vue-composable/composable/web/geolocation)
- [CSS variables](https://pikax.me/vue-composable/composable/web/cssVariables) - reactive `CSS variables`
- [Worker](https://pikax.me/vue-composable/composable/web/worker) - `Web Worker API`
- [WorkerFunction](https://pikax.me/vue-composable/composable/web/workerFunction) - Webworker Function, offload a function to webworker
- [share](https://pikax.me/vue-composable/composable/web/share) - WebShare API
- [Clipboard](https://pikax.me/vue-composable/composable/web/clipboard) - Clipboard API

### External

> New packages needed

- [Axios](https://pikax.me/vue-composable/composable/external/axios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) reactive `axios` wrapper client
- [makeAxios](https://pikax.me/vue-composable/composable/external/makeAxios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) wrap your `axios` instance
- [useCookie](https://pikax.me/vue-composable/composable/external/useCookie) - [@vue-composable/cookie](https://www.npmjs.com/package/@vue-composable/cookie) `js-cookie` wrapper

## Information

This is a monorepo project, please check [packages](packages/)

## Devtools

There's some experimental devtools support starting from `1.0.0-beta.6`, only available for `vue-next` and `devtools beta 6`.

- [devtools beta chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

### Install plugin

To use devtools you need to install the plugin first:

```ts
import { createApp } from "vue";
import { VueComposableDevtools } from "vue-composable";
import App from "./App.vue";

const app = createApp(App);
app.use(VueComposableDevtools);
// or
app.use(VueComposableDevtools, {
  id: "vue-composable",
  label: "devtool composables"
});

app.mount("#app");
```

### Component State

To add properties to the component inspector tab
[ComponentState](https://github.com/vuejs/vue-devtools/blob/next/packages/api/src/api/component.ts#L68)

```ts
const bar = "bar";
useDevtoolsComponentState(
  {
    bar
  },
  {
    type: "custom composable" // change group
  }
);

const baz = () => "baz";
useDevtoolsComponentState({ baz });
// no duplicates added by default
useDevtoolsComponentState({ baz });

const the = 42;
useDevtoolsComponentState({ the });
// to allow multiple same key
useDevtoolsComponentState({ the }, { duplicate: true });

// use a devtools api list directly
interface StateBase {
  key: string;
  value: any;
  editable: boolean;
  objectType?: "ref" | "reactive" | "computed" | "other";
  raw?: string;
  type?: string;
}
useDevtoolsComponentState([
  {
    key: "_bar",
    type: "direct",
    value: "bar",
    editable: true
  },
  {
    key: "_baz",
    type: "direct",
    value: "baz",
    editable: false
  }
]);

// raw change
useDevtoolsComponentState((payload, ctx) => {
  payload.state.push(
    ...[
      {
        key: "_bar",
        type: "raw",
        value: "bar",
        editable: true
      },
      {
        key: "_baz",
        type: "raw",
        value: "baz",
        editable: false
      }
    ]
  );
});
```

### Timeline events

To add timeline events:

```ts
const id = "vue-composable";
const label = "Test events";
const color = 0x92a2bf;

const { addEvent, pushEvent } = useDevtoolsTimelineLayer(
  id,
  description,
  color
);

// adds event to a specific point in the timeline
addEvent({
  time: Date.now(),
  data: {
    // data object
  },
  meta: {
    // meta object
  }
});

// adds event with `time: Date.now()`
pushEvent({
  data: {
    // data object
  },
  meta: {
    // meta object
  }
});
```

### Inspector

Allows to create a new inspector for your data.

> I'm still experimenting on how to expose this API on a composable, this will likely to change in the future, suggestions are welcome.

```ts
useDevtoolsInspector(
  {
    id: "vue-composable",
    label: "test vue-composable"
  },
  // list of nodes, this can be reactive
  [
    {
      id: "test",
      label: "test - vue-composable",
      depth: 0,
      state: {
        composable: [
          {
            editable: false,
            key: "count",
            objectType: "Ref",
            type: "setup",
            value: myRefValue
          }
        ]
      }
    }
  ]
);
```

## Typescript

`Typescript@3.x` is not supported, the supported version can be checked on [package.json](./package.json), usually is the latest version or the same major as `vue-3`

## Contributing

You can contribute raising issues and by helping out with code.

Tests and Documentation are the most important things for me, because good documentation is really useful!

I really appreciate some tweaks or changes on how the documentation is displayed and how to make it easier to read.

Twitter: [@pikax_dev](https://twitter.com/pikax_dev)

## Build

```bash
# install packages
yarn

# build and test for v2
yarn build --version=2
yarn test:vue2

# build and test for v3
yarn build
yarn test
```

### New composable

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)

[now]: https://pikax.me/vue-composable/composable/date/now
[date-now]: https://pikax.me/vue-composable/composable/date/dateNow
[performance-now]: https://pikax.me/vue-composable/composable/date/performanceNow
[pagination]: https://pikax.me/vue-composable/composable/pagination/pagination
[array-pagination]: https://pikax.me/vue-composable/composable/pagination/arrayPagination
[promise]: https://pikax.me/vue-composable/composable/promise/promise
[retry]: https://pikax.me/vue-composable/composable/promise/retry
[cancellable-promise]: https://pikax.me/vue-composable/composable/promise/cancellablePromise
[debounce]: https://github.com/pikax/vue-composable
