# Script

> The [HTMLScriptElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement).

## State

The `useScript` function exposes the following reactive state:

```js
import { useScript } from "vue-composable";

const { scrollTop, scrollLeft } = useScript();
```

| State   | Type      | Description                   |
| ------- | --------- | ----------------------------- |
| loading | `Boolean` | Is the script loading         |
| success | `Boolean` | Script loaded with success    |
| error   | `Any`     | Error when loading the script |

## Example

```vue
<template>
  <div>
    Loading Axios: {{url}}
    <p>Loading: {{loading}}</p>
    <p>Success: {{success}}</p>
    <p>Error: {{error}}</p>
  </div>
</template>

<script>
import { useScript } from "vue-composable";
export default {
  name: "script-example",
  setup() {
    const axios = "https://unpkg.com/axios/dist/axios.min.js";
    return {
      ...useScript(axios),
      url: axios
    };
  }
};
</script>
```

### Code

<script-example/>
