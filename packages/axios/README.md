# @vue-composable/axios

[![npm version](https://badge.fury.io/js/%40vue-composable%2Faxios.svg)](https://badge.fury.io/js/%40vue-composable%2Faxios)

# vue-next

> For [vue-next](https://github.com/vuejs/vue-next) support please check [@next](https://www.npmjs.com/package/@vue-composable/axios/v/next)

## Introduction

Use Axios library with the [composition-api](https://github.com/vuejs/composition-api)

## Installing

```bash
# install with yarn
yarn add @vue/composition-api vue-composable @vue-composable/axios

# install with npm
npm install @vue/composition-api vue-composable @vue-composable/axios
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
import { ref, watch } from "@vue/composition-api";
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
