# vue-composable

[![CircleCI](https://circleci.com/gh/pikax/vue-composable.svg?style=svg)](https://circleci.com/gh/pikax/vue-composable)
[![Coverage Status](https://coveralls.io/repos/github/pikax/vue-composable/badge.svg?branch=master)](https://coveralls.io/github/pikax/vue-composable?branch=master)
[![npm version](https://badge.fury.io/js/vue-composable.svg)](https://badge.fury.io/js/vue-composable)

## Introduction

`vue-composable` is out-of-box ready to use [composition-api](https://github.com/vuejs/composition-api) generic components, eg: [useFetch](examples/fetch.html)

100% typescript based composable components and full type support out-of-box.

## Installing

```bash
# install with yarn
yarn add @vue/composition-api vue-composable

# install with npm
npm install @vue/composition-api vue-composable
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/)

### Event

- [Event](https://pikax.me/vue-composable/composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](https://pikax.me/vue-composable/composable/event/onMoveMove) - Attach `mousemove` listener to a DOM element
- [Resize](https://pikax.me/vue-composable/composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](https://pikax.me/vue-composable/composable/event/onScroll) - Attach `scroll` listener to a DOM element
- [Breakpoint](docs/composable/event/breakpoint.md) - reactive `breakpoints` based on `window.innerWidth`

### MISC

- [localStorage](https://pikax.me/vue-composable/composable/misc/localStorage) - Reactive access to a `localStorage`

### Pagination

- [Pagination](https://pikax.me/vue-composable/composable/pagination/pagination) - Generic reactive pagination controls
- [Array Pagination](https://pikax.me/vue-composable/composable/pagination/arrayPagination) - Array pagination

### Promise

- [Promise](https://pikax.me/vue-composable/composable/promise/promise) - `Promise` reactive resolve and reject
- [Cancellable Promise](https://pikax.me/vue-composable/composable/promise/cancellablePromise) - Allow to cancel promises
- [Retry](https://pikax.me/vue-composable/composable/promise/retry) - Provides functionality to retry `promise`

### Web

- [Axios](https://pikax.me/vue-composable/composable/web/axios) - reactive `axios` wrapper client
- [Fetch](https://pikax.me/vue-composable/composable/web/fetch) - reactive `fetch` wrapper
- [WebSocket](https://pikax.me/vue-composable/composable/web/webSocket) - reactive `WebSocket` wrapper

## Examples

Check out the [examples folder](examples) or start hacking on [codesandbox](https://codesandbox.io/s/vue-composable-examples-yuusf).

[![Edit Vue Composable Examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-yuusf?fontsize=14)

### NOTE

Currently only works with [composition-api](https://github.com/vuejs/composition-api), when [Vue3](https://github.com/vuejs/vue-next) gets release I will update to use the new reactive system (using [@vue/reactivity](https://github.com/vuejs/vue-next/tree/master/packages/reactivity))

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

## License

[MIT](http://opensource.org/licenses/MIT)
