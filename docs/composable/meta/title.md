# Title

> Reactive [Document.title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title).

## Parameters

```js
import { useTitle } from "vue-composable";

const title = useTitle(newTitle?);
```

| Parameters | Type     | Required | Default     | Description                |
| ---------- | -------- | -------- | ----------- | -------------------------- |
| newTitle   | `String` | `false`  | `undefined` | Overrides `document.title` |

## State

The `useTitle` function exposes the following reactive state:

```js
import { useTitle } from "vue-composable";

const title = useTitle();
```

| State | Type          | Description                                                                               |
| ----- | ------------- | ----------------------------------------------------------------------------------------- |
| title | `Ref<String>` | Ref for `document.title`, watches for `document.title` changes or set to update the title |

## Example

<title-example/>

### Code

```vue
<template>
  <div>
    <label for="title-updater">document.title:</label>
    <input name="title-updater" v-model="title" />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { useTitle } from "vue-composable";

export default defineComponent({
  setup() {
    const title = useTitle();
    return {
      title
    };
  }
});
</script>
```

## SSR

> SSR only supported for vue3, you can also make it work with vue2.

`useTitle` can also be used in a SSR setup.

When in `SSR` it **won't** try to change the `document.title` instead it will use a single `ref` across the render process.

### example

```ts
import { provideSSRTitle } from "vue-composable";

const app = createSSRApp(App);
const title = provideSSRTitle(app, "Awesome app");
// setup stuff
const appContent = await renderToString(app);

// title will

return `
<html>
  <head>
    <title>${title.value}</title>
  </head>
  <div id="app">
    ${appContent}
  </div>
</html
`;
```
