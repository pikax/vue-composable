# @vue-composable/axios

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

<!-- [![npm version](https://badge.fury.io/js/%40vue-composable%2Faxios.svg)](https://badge.fury.io/js/%40vue-composable%2Faxios) -->

[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/axios@next)](https://bundlephobia.com/result?p=@vue-composable/axios@next)

# Vue 3

This version is `alpha` with support for the vue3 ([vue-next](https://github.com/vuejs/vue-next))

> Check webpack [vue3 example](https://github.com/pikax/vue-composable/tree/vue3/examples/vue-next-webpack-preview-master) or [CodeSandbox](https://codesandbox.io/s/vue-composable-next-6m5et)

## Introduction

Use Axios library with the [composition-api](https://github.com/vuejs/composition-api)

## Installing

```bash
# install with yarn
yarn add vue@next vue-composable@next @vue-composable/axios@next

# install with npm
npm install vue@next vue-composable@next @vue-composable/axios@next
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

## License

[MIT](http://opensource.org/licenses/MIT)
