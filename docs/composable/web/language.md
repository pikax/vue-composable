# Language

> [NavigatorLanguage](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage).

## State

The `useLanguage` function exposes the following reactive state:

```js
import { useLanguage } from "vue-composable";

const { language, languages } = useLanguage();
```

| State     | Type            | Description                          |
| --------- | --------------- | ------------------------------------ |
| language  | `Ref(string)`   | Preferred language of the user       |
| languages | `Ref(string[])` | Array of languages known to the user |

## Methods

The `useLanguage` function exposes the following methods:

## Example


<language-example/>


### Code

```vue
<template>
  <div>
    <h3>
      Language: <b>{{ language }}</b>
    </h3>
    <div>
      <h4>Preferred Languages</h4>
      <ul>
        <li v-for="l in languages" :key="l">
          {{ l }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "vue-composable";
export default {
  setup() {
    return useLanguage();
  }
};
</script>
```
