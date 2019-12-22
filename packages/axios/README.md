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