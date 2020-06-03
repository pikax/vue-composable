# VModel

> helper to wrap model update into a `ref`

::: warning

Only supported on `vue3`
When using with `@vue/composition-api` it will always return `ref(undefined)`
:::

## Parameters

```js
import { useVModel } from "vue-composable";

useVModel(props, propName);
```

| Parameters | Type     | Required | Description                             |
| ---------- | -------- | -------- | --------------------------------------- |
| props      | `Props`  | `true`   | Props object from the `setup(props)`    |
| propName   | `string` | `true`   | Prop key, used to access property value |

## State

The `useVModel` function exposes the following reactive state:

```js
import { useVModel } from "vue-composable";

const myValue = useVModel(props, "myValue");
```

| State   | Type     | Description        |
| ------- | -------- | ------------------ |
| myValue | `Ref<T>` | Value for the prop |

## Example

[![Edit vue-composable-vmode-next](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-composable-vmode-next-rj6no?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.vue)

### Code

```vue
<template>
  <div>
    <p>myValue: {{ myValue }}</p>

    <child v-model:value="myValue" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useVModel } from "vue-composable";
export default defineComponent({
  components: {
    child: defineComponent({
      template: `<div>
      <label :for="child-input">Update value</label>
      <input name="child-input" v-model="value">
      </div>`,
      props: {
        value: String
      },
      setup(props) {
        const value = useVModel(props, "value");

        return {
          value
        };
      }
    })
  },

  setup() {
    const myValue = ref("MyValue");

    return {
      myValue
    };
  }
});
</script>
```
