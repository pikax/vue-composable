# @vue-composable/router

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

[![npm version](https://badge.fury.io/js/%40vue-composable%2Frouter.svg)](https://badge.fury.io/js/%40vue-composable%2Frouter)
[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/router)](https://bundlephobia.com/result?p=@vue-composable/router)

<!-- # vue-next

> For [vue-next](https://github.com/vuejs/vue-next) support please check [@next](https://www.npmjs.com/package/@vue-composable/router/v/next) -->

## Introduction

Use router library with the [composition-api](https://github.com/vuejs/composition-api)

## Installing

```bash
# install with yarn
yarn add @vue/composition-api @vue-composable/router

# install with npm
npm install @vue/composition-api @vue-composable/router
```

## Documentation

<!-- Check our [documentation](https://pikax.me/vue-composable/composable/external/router) -->

```js
// main.js
import VueComposableRouter from "@vue-composable/router";

// this is required
Vue.use(vueComposableRouter);

// component.vue

import { getVueRouter } from "@vue-composable/router";

export default {
  setup() {
    getVueRouter().push("/");
  }
};
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)
