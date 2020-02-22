# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

### Changed

- moving [breakpoint](https://pikax.me/vue-composable/composable/breakpoint/breakpoint) and [matchMedia](https://pikax.me/vue-composable/composable/breakpoint/matchMedia) from `web/misc` to `web/breakpoint`
- [breakpoint](https://pikax.me/vue-composable/composable/breakpoint/breakpoint): Allow to pass width as string `${width}px`

### Added

- [Chrome](https://pikax.me/vue-composable/composable/breakpoint/breakpointChrome) - reactive chrome breakpoints
- [TailwindCSS](https://pikax.me/vue-composable/composable/breakpoint/breakpointTailwindCSS) - reactive TailwindCSS breakpoints
- [format](https://pikax.me/vue-composable/composable/format/format) - Reactive string format
- [Validation](https://pikax.me/vue-composable/composable/validation/validation) - model based validation inspired by [vuelidate](https://vuelidate.js.org/)
- [format](https://pikax.me/vue-composable/composable/format/path) - Access object property through string path
- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - i18n implementation with API inspired by [vue-i18n](https://github.com/kazupon/vue-i18n)

## 1.0.0-dev.9

_2020-02-07_

---

### Changed

- [Fetch](https://pikax.me/vue-composable/composable/web/fetch#methods): Allow cancel last request using AbortController
- [onScroll](https://pikax.me/vue-composable/composable/event/onScroll): allow passing only `undefined` or only wait on the first argument, it will use `window.document.scrollingElement`

### FIX

- NuxtJS typescript support

## 1.0.0-dev.8

_2020-02-04_

---

### Added

- [BroadcastChannel](https://pikax.me/vue-composable/composable/web/broadcastChannel) - reactive `BroadcastChannel API`
- [sharedRef](https://pikax.me/vue-composable/composable/misc/sharedRef.md) - cross-tab reactive `ref`
- [Geolocation API](https://pikax.me/vue-composable/composable/web/geolocation)
- [useNow][now] : Return reactive custom timer with specified refresh rate
- [useDateNow][date-now] : Returns reactive `Date.now()` with custom refresh rate
- [usePerformanceNow][performance-now] : Returns reactive `performance.now()` with custom refresh rate
- NuxtJS SSR support

### Changed

- Axios: Allow calling exec with a string

## 1.0.0-dev.7

_2020-01-19_

---

### Changed

- Fix readme storage links

## 1.0.0-dev.6

_2020-01-19_

---

### Added

- [Online](<[composable/web](https://pikax.me/vue-composable/composable/web)/online>) - reactive `navigator.onLine` wrapper
- [PageVisibility](https://pikax.me/vue-composable/composable/web/pageVisibility) - reactive `Page Visibility API`
- [Language](https://pikax.me/vue-composable/composable/web/language) - reactive `NavigatorLanguage`
- [WebStorage](composable/misc/webStorage) - Reactive access to `Storage API`, `useLocalStorage` and `useSessionStorage` use this
- [storage](composable/misc/storage) - uses `localStorage` or on safari private it uses `sessionStorage`
- [sessionStorage](composable/misc/sessionStorage) - Reactive access to a `sessionStorage`

### Changed

- [localStorage](composable/misc/localStorage) - refractor implementation to `useWebStorage` and added tab sync functionality

## 1.0.0-dev.4

_2020-01-13_

---

### Added

- [NetworkInformation](https://pikax.me/vue-composable/composable/web/networkInformation) - reactive `NetworkInformation` wrapper #70

## 1.0.0-dev.3

_2020-01-09_

---

### Changed

- changing `peerDependencies` to `dependencies`
- fix `cjs` modules, missing `index.js` in some packages, preventing it from being used in codesandbox

### Added

- `usePromise` - added new argument `throwException`, default: `false`, if true it will return the exception when using `exec`
- `useCancellablePromise` - added new argument `throwException`, default: `false`, if true it will return the exception when using `exec`
- `useAxios` - added new argument `throwException`, default: `false`, if true it will return the exception when using `exec`
- `useAxios` - `cancel(message?)` allows to cancel the latest axios request

## 1.0.0-dev.2

---

_2019-12-28_

### Added

- [IntersectionObserver](composable/web/intersectionObserver) - Provides functionality to IntersectionObserver #27
- [breakpoint](https://pikax.me/vue-composable/composable/misc/breakpoint) - reactive `breakpoints` based on `window.innerWidth`
- [matchMedia](https://pikax.me/vue-composable/composable/misc/matchMedia) - reactive `matchMedia`

## 1.0.0-dev.1

---

_2019-12-14_

### Changed

- Converting the project to monorepo
  - [vue-composable](https://www.npmjs.com/package/vue-composable): default package `core + web`
  - [@vue-composable/core](https://www.npmjs.com/package/@vue-composable/core) : core package
  - [@vue-composable/web](https://www.npmjs.com/package/@vue-composable/web) : web api packages
  - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) : axios dependent package

## 0.2.2

---

_2019-12-10_

### Fix

- Types: Allow passing `window` when using `useEvent`

## 0.2.0

---

_2019-11-03_

### Added

- [Retry](https://pikax.me/vue-composable/composable/promise/retry) - Provides functionality to retry `promise`
- [localStorage](https://pikax.me/vue-composable/composable/misc/localStorage) - Reactive access to a `localStorage`
- [Axios](https://pikax.me/vue-composable/composable/web/axios) - reactive `axios` wrapper client
- [WebSocket](https://pikax.me/vue-composable/composable/web/webSocket) - reactive `WebSocket` wrapper

## 0.1.0

---

_2019-10-23_
First release

### Added

- useArrayPagination
- useCancellablePromise
- useDebounce
- useEvent
- useFetch
- useOnMouseMove
- useOnResize
- usePagination
- usePromise

[now]: https://pikax.me/vue-composable/composable/date/now
[date-now]: https://pikax.me/vue-composable/composable/date/dateNow
[performance-now]: https://pikax.me/vue-composable/composable/date/performanceNow
