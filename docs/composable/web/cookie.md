# Cookie

> The [cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

## Parameters

```js
import { useCookie } from "vue-composable";

useCookie(key, defaultValue, defaultOptions);
```

| Parameters     | Type     | Required | Default | Description                                                                                                                                     |
| -------------- | -------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| key            | `String` | `true`   |         | cookie name                                                                                                                                     |
| defaultValue   | `String` | `false`  |         | cookie default value when cookie is undefined                                                                                                   |
| defaultOptions | `Object` | `false`  |         | cookie default options when cookie is undefined. <br/> <br/> The [js-cookie options](https://github.com/js-cookie/js-cookie#cookie-attributes). |

## State

The `useCookie` function exposes the following reactive state:

```js
import { useCookie } from "vue-composable";

const { cookie } = useCookie("some-cookie");
```

| State  | Type        | Description |
| ------ | ----------- | ----------- | ----------- | ---------------- |
| cookie | `Ref<String | null        | undefined>` | The cookie value |

## Methods

The `useCookie` function exposes the following methods:

```js
import { useCookie } from "vue-composable";

const { setCookie, removeCookie } = useCookie("some-cookie");
```

| Signature      | Description             |
| -------------- | ----------------------- |
| `setCookie`    | update the cookie value |
| `removeCookie` | remove the cookie       |

## Example

<cookie-example />

### Code

```vue
<template>
  <div>
    cookie value: {{ cookie }}
    <p>
      <button @click="updateCookie">Update Cookie</button>
    </p>
    <p>
      <button @click="removeCookie">Remove Cookie</button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useCookie } from "vue-composable";

export default defineComponent({
  name: "cookie-example",

  setup() {
    let idx = 0;

    let { cookie, setCookie, removeCookie } = useCookie("my-cookie");

    function updateCookie() {
      cookie.value = `my-cookie-${++idx}`;
    }

    return {
      cookie,

      updateCookie,
      removeCookie,
    };
  },
});
</script>

<style></style>
```
