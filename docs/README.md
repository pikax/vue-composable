---
title: vue-composable
lang: en-US
home: true
heroImage: /assets/logo.svg
actionText: Get Started →
actionLink: ./composable/
features:
  - title: Composition
    details: General purpose composable components that fits your needs.
  - title: Reactive
    details: Full usable of `reactive`, ready to use on your templates.
  - title: TypeScript Support
    details: 100% Written in TypeScript.
footer: MIT Licensed | Copyright © 2019-present Carlos Rodrigues
description: Vue composition-api composable components
meta:
  - name: og:title
    content: vue-composable
  - name: og:description
    content: Vue composition-api composable components
---

## Introduction

`vue-composable` is out-of-box ready to use [composition-api](https://github.com/vuejs/composition-api) generic components.

:100: typescript based composable components and full type support out-of-box.

## Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-composable
# install with npm
npm install @vue/composition-api vue-composable
```

## Examples

Check out the [examples folder](examples) or start hacking on [codesandbox](https://codesandbox.io/s/vue-composable-examples-yuusf).

[![Edit Vue Composable Examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-yuusf?fontsize=14)

## Composables

### Event

- [Event](composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](composable/event/onMouseMove) - Attach `mousemove` listener to a DOM element
- [Resize](composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](composable/event/onScroll) - Attach `scroll` listener to a DOM element
- [onOutsidePress](composable/event/onOutsidePress) - Execute callback when click is outside of element

### Dom

- [Mouse distance from Element](https://pikax.me/vue-composable/composable/dom/mouseDistanceFromElement) - Distance in pixels from an element center

### Date

- [useNow](composable/date/now) : Return reactive custom timer with specified refresh rate
- [useDateNow](composable/date/dateNow) : Returns reactive `Date.now()` with custom refresh rate
- [usePerformanceNow](composable/date/performanceNow) : Returns reactive `performance.now()` with custom refresh rate

### Format

- [format](composable/format/format) - Reactive string format
- [path](composable/format/path) - Retrieve object value based on string path

### Breakpoint

- [MatchMedia](composable/breakpoint/matchMedia) - reactive `MatchMedia`
- [Breakpoint](composable/breakpoint/breakpoint) - reactive `breakpoints` based on `window.innerWidth`
- [Chrome](composable/breakpoint/breakpointChrome) - reactive chrome breakpoints
- [TailwindCSS](composable/breakpoint/breakpointTailwindCSS) - reactive TailwindCSS breakpoints

### MISC

- [sharedRef](composable/misc/sharedRef) - cross-tab reactive `ref`
- [VModel](composable/misc/vmodel) - helper to wrap model update into a `ref` `[vue3 only]`
- [injectFactory](composable/misc/injectFactory) - same as [inject](https://vue-composition-api-rfc.netlify.app/api.html#dependency-injection) but allows you to have a factory as default value
- [interval](composable/misc/interval) - self-remove `setInterval` on unmount
- [lockScroll](composable/misc/lockScroll) - `lock-scroll` component
- [refDebounced](composable/misc/refDebounced) - debounces the update value of a `ref`

### Storage

- [WebStorage](composable/storage/webStorage) - Reactive access to `Storage API`, `useLocalStorage` and `useSessionStorage` use this
- [storage](composable/storage/storage) - uses `localStorage` or on safari private it uses `sessionStorage`
- [localStorage](composable/storage/localStorage) - Reactive access to a `localStorage`
- [sessionStorage](composable/storage/sessionStorage) - Reactive access to a `sessionStorage`

### Pagination

- [Pagination](composable/pagination/pagination) - Generic reactive pagination controls
- [Array Pagination](composable/pagination/arrayPagination) - Array pagination

### Validation

- [Validation](composable/validation/validation) - model based validation inspired by [vuelidate](https://vuelidate.js.org/)

### i18n

- [i18n](composable/i18n/i18n) - Simple i18n implementation with API inspired by [vue-i18n](https://github.com/kazupon/vue-i18n)

### Intl

- [dateTimeFormat](composable/Intl/dateTimeFormat) - Intl.DateTimeFormat
- [numberFormat](composable/Intl/numberFormat) - Intl.NumberFormat
- [currencyFormat](composable/Intl/currencyFormat) - CurrencyFormat with Intl.NumberFormat

### Promise

- [Promise](composable/promise/promise) - `Promise` reactive resolve and reject
- [promiseLazy](composable/promise/promiseLazy) - Sugar for [usePromise](composable/promise/promise) `lazy:true`
- [Cancellable Promise](composable/promise/cancellablePromise) - Allow to cancel promises
- [Retry](composable/promise/retry) - Provides functionality to retry `promise`

### Meta

- [Title](composable/meta/title) - reactive `document.title`

### State

- [Timeline](composable/state/timeline) - Tracks variable history
- [Undo](composable/state/undo) - Tracks variable history, to allow `undo` and `redo`
- [valueSync](composable/state/valueSync) - syncs variables value, across multiple `ref`s

### Web

- [Fetch](composable/web/fetch) - reactive `fetch` wrapper
- [WebSocket](composable/web/webSocket) - reactive `WebSocket` wrapper
- [IntersectionObserver](composable/web/intersectionObserver) - reactive `IntersectionObserver`
- [NetworkInformation](composable/web/networkInformation) - reactive `NetworkInformation` wrapper
- [Online](<[composable/web](composable/web)/online>) - reactive `navigator.onLine` wrapper
- [PageVisibility](composable/web/pageVisibility) - reactive `Page Visibility API`
- [Language](composable/web/language) - reactive `NavigatorLanguage`
- [BroadcastChannel](composable/web/broadcastChannel) - reactive `BroadcastChannel API`
- [Geolocation API](composable/web/geolocation)
- [CSS variables](composable/web/cssVariables) - reactive `CSS variables`
- [Worker](composable/web/worker) - `Web Worker API`
- [WorkerFunction](composable/web/workerFunction) - Webworker Function, offload a function to webworker
- [share](composable/web/share) - WebShare API
- [Clipboard](https://pikax.me/vue-composable/composable/web/clipboard) - Clipboard API

### External

> New packages needed

- [Axios](composable/external/axios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) reactive `axios` wrapper client
- [makeAxios](composable/external/makeAxios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) wrap your `axios` instance
- [useCookie](https://pikax.me/vue-composable/composable/external/useCookie) - [@vue-composable/cookie](https://www.npmjs.com/package/@vue-composable/cookie) `js-cookie` wrapper

## Usage

```vue
<template>
  <div>
    <p>page {{ currentPage }} of {{ lastPage }}</p>
    <p>
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </p>
    <ul>
      <li v-for="n in result" :key="n">
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useArrayPagination } from "vue-composable";

export default {
  setup() {
    const array = new Array(1000).fill(0).map((_, i) => i);
    const { result, next, prev, currentPage, lastPage } = useArrayPagination(
      array,
      {
        pageSize: 3
      }
    );

    return { result, next, prev, currentPage, lastPage };
  }
};
</script>
```

### Pagination example

<array-pagination-example/>
