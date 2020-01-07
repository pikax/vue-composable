# vue-composable

[![CircleCI](https://circleci.com/gh/pikax/vue-composable.svg?style=svg)](https://circleci.com/gh/pikax/vue-composable)
[![Coverage Status](https://coveralls.io/repos/github/pikax/vue-composable/badge.svg?branch=master)](https://coveralls.io/github/pikax/vue-composable?branch=master)
[![npm version](https://badge.fury.io/js/vue-composable.svg)](https://badge.fury.io/js/vue-composable)

# Vue 3

This version is `alpha` with support for the vue3 ([vue-next](https://github.com/vuejs/vue-next))

> Check webpack [vue3 example](https://github.com/pikax/vue-composable/tree/vue3/examples/vue-next-webpack-preview-master)

## Introduction

`vue-composable` is out-of-box ready to use the brand new [Vue 3](https://github.com/vuejs/vue-next) [composition-api](https://vue-composition-api-rfc.netlify.com/) generic components.

100% typescript based composable components and full type support out-of-box.

## Installing

```bash
# install with yarn
yarn add @vue/composition-api vue-composable

# install with npm
npm install @vue/composition-api vue-composable
```

## Documentation
> NOTE documentation might be slightly wrong, because it was built for the v2

Check our [documentation](https://pikax.me/vue-composable/)

### Event

- [Event](https://pikax.me/vue-composable/composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](https://pikax.me/vue-composable/composable/event/onMoveMove) - Attach `mousemove` listener to a DOM element
- [Resize](https://pikax.me/vue-composable/composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](https://pikax.me/vue-composable/composable/event/onScroll) - Attach `scroll` listener to a DOM element

### MISC

- [localStorage](https://pikax.me/vue-composable/composable/misc/localStorage) - Reactive access to a `localStorage`
- [matchMedia](https://pikax.me/vue-composable/composable/misc/matchMedia) - Reactive `matchMedia`
- [breakpoint](https://pikax.me/vue-composable/composable/misc/breakpoint) - reactive `breakpoints` based on `window.innerWidth`

### Pagination

- [Pagination](https://pikax.me/vue-composable/composable/pagination/pagination) - Generic reactive pagination controls
- [Array Pagination](https://pikax.me/vue-composable/composable/pagination/arrayPagination) - Array pagination

### Promise

- [Promise](https://pikax.me/vue-composable/composable/promise/promise) - `Promise` reactive resolve and reject
- [Cancellable Promise](https://pikax.me/vue-composable/composable/promise/cancellablePromise) - Allow to cancel promises
- [Retry](https://pikax.me/vue-composable/composable/promise/retry) - Provides functionality to retry `promise`

### Web

- [Fetch](https://pikax.me/vue-composable/composable/web/fetch) - reactive `fetch` wrapper
- [WebSocket](https://pikax.me/vue-composable/composable/web/webSocket) - reactive `WebSocket` wrapper
- [IntersectionObserver](https://pikax.me/vue-composable/composable/web/intersectionObserver) - reactive `IntersectionObserver`

### External

> New packages needed

- [Axios](https://pikax.me/vue-composable/composable/external/axios) - [@vue-composable/axios](https://www.npmjs.com/package/@vue-composable/axios) reactive `axios` wrapper client

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)
