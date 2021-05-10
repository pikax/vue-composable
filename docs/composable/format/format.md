# useFormat

> Format text based on arguments

## Parameters

```js
import { useFormat } from "vue-composable";

useFormat(format, obj);
useFormat(format, arg1, arg2);
```

| Parameters       | Type                       | Required  | Description |
| ---------------- | -------------------------- | --------- | ----------- |
| format           | `Ref<string>               | String`   | `true`      | String format |
| obj              | `Record<string, Ref<string | object>>` | `true`      | Object based dictionary |
| args/`arg1,arg2` | `Array<Ref<string          | object>>` | `true`      | Array based keys |

## State

The `useFormat` function exposes the following reactive state:

```js
import { useFormat } from "vue-composable";

const result = useFormat();
```

| State  | Type     | Description     |
| ------ | -------- | --------------- |
| result | `String` | Reactive format |

## Example

<format-example/>

### Code

```vue
<template>
  <div id="format">
    <div>
      <h4>Array based example</h4>
      <div>
        Format:
        <input v-model="inputFormat" />
      </div>

      <ul>
        <li v-for="(a, i) in args" :key="i">
          <input v-model="a.value" @input="onChange($event, i)" />
          <button title="remove" @click="remove(i)">x</button>
        </li>

        <li>
          <button @click="add">add +</button>
        </li>
      </ul>
    </div>

    <p>
      <b>{{ format }}</b>
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useFormat } from "vue-composable";

export default {
  name: "format-example",
  setup() {
    const inputFormat = ref("{0} {1}");
    const args = ref([ref("hello"), ref("world")]);
    const format = useFormat(inputFormat, args);

    const add = () => args.value.push(ref(`{${args.value.length}}`));
    const remove = (index) => args.value.splice(index, 1);

    const onChange = (ev, index) => {
      args.value[index].value = ev.target.value;
    };

    return {
      inputFormat,
      format,
      args,

      onChange,
      add,
      remove,
    };
  },
};
</script>
```
