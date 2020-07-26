# @vue-composable/axios

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

[![npm version](https://badge.fury.io/js/%40vue-composable%2Faxios.svg)](https://badge.fury.io/js/%40vue-composable%2Faxios)

[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/axios)](https://bundlephobia.com/result?p=@vue-composable/axios)

## Introduction

Use Axios library with the [composition-api](https://github.com/vuejs/composition-api)

# Vue 3

[Vue3](https://github.com/vuejs/vue-next) aka [vue-next](https://github.com/vuejs/vue-next) is fully supported

## Installing

```bash
# @vue/composition-api

# install with yarn
yarn add @vue/composition-api @vue-composable/axios

# install with npm
npm install @vue/composition-api @vue-composable/axios


# vue-next / vue@3.0.0

# install with yarn
yarn add @vue-composable/axios

# install with npm
npm install @vue-composable/axios
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/composable/external/axios)

```vue
<template>
  <div>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <p v-if="loading">loading...</p>
    <div v-else>
      <p>Status: {{ status }}</p>
      {{ data }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "@vue/runtime-core";
import { useAxios } from "@vue-composable/axios";

export default {
  name: "axios-example",
  setup() {
    const id = ref(1);
    const { data, loading, exec, error, status } = useAxios();

    watch(id, id => {
      exec({
        method: "GET",
        url: "https://reqres.in/api/user/" + id
      });
    });

    return {
      id,
      data,
      loading,
      status
    };
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
