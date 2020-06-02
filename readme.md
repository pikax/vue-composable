# vue-composable

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

[![CircleCI](https://circleci.com/gh/pikax/vue-composable.svg?style=svg)](https://circleci.com/gh/pikax/vue-composable)
[![Coverage Status](https://coveralls.io/repos/github/pikax/vue-composable/badge.svg?branch=master)](https://coveralls.io/github/pikax/vue-composable?branch=master)
[![npm version](https://badge.fury.io/js/vue-composable.svg)](https://badge.fury.io/js/vue-composable)
[![bundle size](https://badgen.net/bundlephobia/minzip/vue-composable)](https://bundlephobia.com/result?p=vue-composable@next)

## Introduction

`vue-composable` is out-of-box ready to use [composition-api](https://github.com/vuejs/composition-api) generic components.

100% typescript based composable components and full type support out-of-box.

Built for [vue-next](https://github.com/vuejs/vue-next) and [composition-api](https://github.com/vuejs/composition-api)

This library aim is to be one stop shop for many real-world composable functions, with aggressive tree-shaking to keep it light on your end code.

# Vue 3

[Vue3](https://github.com/vuejs/vue-next) aka [vue-next](https://github.com/vuejs/vue-next) is supported on the [@next](https://www.npmjs.com/package/vue-composable/v/next)

## Installing

```bash
# @vue/composition-api

# install with yarn
yarn add @vue/composition-api vue-composable

# install with npm
npm install @vue/composition-api vue-composable


# vue-next / vue@3.0.0-beta

# install with yarn
yarn add vue-composable@next

# install with npm
npm install vue-composable@next
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/)

### Composable

### Event

- [Event](https://pikax.me/vue-composable/composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](https://pikax.me/vue-composable/composable/event/onMouseMove) - Attach `mousemove` listener to a DOM element
- [Resize](https://pikax.me/vue-composable/composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](https://pikax.me/vue-composable/composable/event/onScroll) - Attach `scroll` listener to a DOM element

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
- [VModel](https://pikax.me/vue-composable/composable/meta/vmodel) - helper to wrap model update into a `ref` `[vue3 only]`

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

- [numberFormat](https://pikax.me/vue-composable/composable/Intl/numberFormat) - Intl.NumberFormat
- [currencyFormat](https://pikax.me/vue-composable/composable/Intl/currencyFormat) - CurrencyFormat with Intl.NumberFormat

### Promise

- [Promise](https://pikax.me/vue-composable/composable/promise/promise) - `Promise` reactive resolve and reject
- [promiseLazy](https://pikax.me/vue-composable/composable/promise/promiseLazy) - Sugar for [usePromise](https://pikax.me/vue-composable/composable/promise/promise) `lazy:true`
- [Cancellable Promise](https://pikax.me/vue-composable/composable/promise/cancellablePromise) - Allow to cancel promises
- [Retry](https://pikax.me/vue-composable/composable/promise/retry) - Provides functionality to retry `promise`

### Meta

- [Title](https://pikax.me/vue-composable/composable/meta/title) - reactive `document.title`

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

### External

> New packages needed

- [Axios](https://pikax.me/vue-composable/composable/external/axios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) reactive `axios` wrapper client
- [makeAxios](https://pikax.me/vue-composable/composable/external/makeAxios) - [@vue-composable/makeAxios](https://www.npmjs.com/package/@vue-composable/makeAxios) wrap your `axios` instance

## Information

This is a monorepo project, please check [packages](packages/)

## Contributing

You can contribute raising issues and by helping out with code.

Tests and Documentation are the most important things for me, because good documentation is really useful!

I really appreciate some tweaks or changes on how the documentation is displayed and how to make it easier to read.

> I really need an logo for this project, if you have a good idea for a logo, please enter in contact with me, you can find me on the `Vue discord : @pikax

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
