---
title: vue-composable
lang: en-US
home: true
# heroImage:
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
- [Mouse Move](composable/event/onMoveMove) - Attach `mousemove` listener to a DOM element
- [Resize](composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](composable/event/onScroll) - Attach `scroll` listener to a DOM element

### MISC

- [localStorage](composable/misc/localStorage) - Reactive access to a `localStorage`

### Pagination

- [Pagination](composable/pagination/pagination) - Generic reactive pagination controls
- [Array Pagination](composable/pagination/arrayPagination) - Array pagination

### Promise

- [Promise](composable/promise/promise) - `Promise` reactive resolve and reject
- [Cancellable Promise](composable/promise/cancellablePromise) - Allow to cancel promises
- [Retry](composable/promise/retry) - Provides functionality to retry `promise`

### Web

- [Fetch](composable/web/fetch) - reactive `fetch` wrapper
- [WebSocket](composable/web/webSocket) - reactive `WebSocket` wrapper
- [IntersectionObserver](composable/web/intersectionObserver) - reactive `IntersectionObserver`

### External

> New packages needed

- [Axios](composable/external/axios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) reactive `axios` wrapper client

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
