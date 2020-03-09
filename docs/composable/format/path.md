# Path

> Retrieve object value based on string path

## Parameters

```js
import { usePath } from "vue-composable";

const value = usePath(source, path, separator?, notFoundReturn);
```

| Parameters     | Type                 | Required | Default | Description                       |
| -------------- | -------------------- | -------- | ------- | --------------------------------- |
| source         | `Object|Ref<Object>` | `true`   |         | `Object` source                   |
| path           | `String|Ref<String>` | `true`   |         | string `path` to value            |
| separator      | `String`             | `false`  | `.`     | path separator                    |
| notFoundReturn | `Function`           | `false`  |         | Not found or invalid path handler |

## State

The `usePath` function exposes the following reactive state:

```ts
import { usePath } from "vue-composable";

const name = usePath({ user: { name: "test" } }, "user.name");

// or typed

const name = usePath<string>({ user: { name: "test" } }, "user.name");
```

| State | Type     | Description                                       |
| ----- | -------- | ------------------------------------------------- |
| name  | `Ref<T>` | Readonly `ref` with the object value for the path |

## Example

<path-example/>

### Code

```vue
<template>
  <div id="format">
    <div>
      <h4>Path example</h4>
      <div>
        Path:
        <input v-model="inputPath" />
      </div>
      <div>
        <p>Object</p>
        <textarea v-text="json" />
      </div>

      <div>
        <p>Value:</p>
        <textarea v-text="inputValue" disabled />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from "@vue/composition-api";
import { usePath } from "vue-composable";

export default defineComponent({
  name: "path-example",
  setup() {
    const inputPath = ref("user.name");
    const json = ref(JSON.stringify({ user: { name: "test" } }));

    const inputValue = usePath(
      computed(() => JSON.parse(json.value)),
      inputPath,
      ".",
      () => "Not Found"
    );

    return {
      inputPath,
      json,
      inputValue
    };
  }
});
</script>
```
