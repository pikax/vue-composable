# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased]

---

 -->

## 1.0.0-dev.3

_2020-01-09_

---

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
