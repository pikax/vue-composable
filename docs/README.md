---
title: vue-composable
lang: en-US
home: true
# heroImage:
actionText: Get Started →
actionLink: ./guide/
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

100% typescript based composable components and full type support out-of-box.

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

> Event based

- Event <Badge text="WIP" type="warn" />
- Mouse Move <Badge text="WIP" type="warn" />
- Resize <Badge text="WIP" type="warn" />
- Scroll <Badge text="WIP" type="warn" />

### Pagination

> Pagination related

- Pagination <Badge text="WIP" type="warn" />
- Array Pagination <Badge text="WIP" type="warn" />

### Promise

> Promise based

- Promise <Badge text="WIP" type="warn" />
- Cancellable Promise <Badge text="WIP" type="warn" />

### Web

> Web based

- Axios <Badge text="WIP" type="warn" />
- [Fetch](/guide/web/fetch)
- WebSocket <Badge text="WIP" type="warn" />

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
import { useArrayPagination } from 'vue-composable';

export default {
  setup() {
    const array = new Array(1000).fill(0).map((_, i) => i);
    const { result, next, prev, currentPage, lastPage } = useArrayPagination(
      array,
      {}
    );

    return { result, next, prev, currentPage, lastPage };
  }
};
</script>
```

<!-- TODO: Insert geolocation example -->
