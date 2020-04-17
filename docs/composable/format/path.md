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

## Access

```js
const o = {
  a: {
    a: 1,
    b: [
      2,
      {
        c: {
          ["a-b-c-d"]: 3
        }
      }
    ]
  }
};

usePath(o, "a[a]"); // result: 1 | equivalent: a.a
usePath(o, "[a]['a']"); // result: 1  | equivalent: a.a
usePath(o, '["a"][`b`][0]'); // result: 2 | equivalent: a.b["0"]
usePath(o, "a.b[1].c[a-b-c-d]"); // result: 3  | equivalent: a.b[1].c["a-b-c-d"]
```

## Limitations

The access in `[]` is limited to this regex expression:

```regex
 /\[[`'"]?([^`'"\]]*)[`'"]?\]/g
```

If you want to improve this, please raise an [issue](https://github.com/pikax/vue-composable/issues/new) or create a [PR](https://github.com/pikax/vue-composable/pulls)

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
