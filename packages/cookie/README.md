# @vue-composable/cookie

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

[![npm version](https://badge.fury.io/js/%40vue-composable%2Fcookie.svg)](https://badge.fury.io/js/%40vue-composable%2Fcookie)

[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/cookie)](https://bundlephobia.com/result?p=@vue-composable/cookie)

## Introduction

Use js-cookie library with the [composition-api](https://github.com/vuejs/composition-api)

# Vue 3

[Vue3](https://github.com/vuejs/vue-next) aka [vue-next](https://github.com/vuejs/vue-next) is fully supported

## Installing

```bash
# @vue/composition-api

# install with yarn
yarn add @vue/composition-api @vue-composable/cookie

# install with npm
npm install @vue/composition-api @vue-composable/cookie


# vue-next / vue@3.0.0

# install with yarn
yarn add @vue-composable/cookie

# install with npm
npm install @vue-composable/cookie
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/composable/external/cookie)

```vue
<template>
  <div>
    cookie value: {{ cookie }}
    <p>
      <button @click="updateCookie">Update Cookie</button>
    </p>
    <p>
      <button @click="deleteCookie">Remove Cookie</button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useCookie } from "@vue-composable/cookie";

export default defineComponent({
  name: "cookie-example",

  setup() {
    let idx = 0;

    let { cookie, setCookie, removeCookie } = useCookie("my-cookie");

    function updateCookie() {
      cookie.value = `my-cookie-${++idx}`;
    }

    function deleteCookie() {
      removeCookie();
    }

    return {
      cookie,

      updateCookie,
      deleteCookie,
    };
  },
});
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

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
