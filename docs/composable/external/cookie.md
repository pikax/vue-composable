# Cookie

> The [cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

Provides a wrapper to use [js-cookie](https://github.com/js-cookie/js-cookie).

## Parameters

```js
import { useCookie } from "@vue-composable/cookie";

useCookie(key, defaultValue, defaultOptions);
```

| Parameters     | Type     | Required | Description                                                                                                                                  |
| -------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| key            | `String` | `true`   | Cookie name                                                                                                                                  |
| defaultValue   | `String` | `false`  | Set default value when cookie is undefined                                                                                                   |
| defaultOptions | `Object` | `false`  | Set default options when cookie is undefined. <br/> <br/> The [js-cookie options](https://github.com/js-cookie/js-cookie#cookie-attributes). |

## State

The `useCookie` function exposes the following reactive state:

```js
import { useCookie } from "@vue-composable/cookie";

const { cookie } = useCookie("some-cookie");
```

| State  | Type        | Description |
| ------ | ----------- | ----------- | ----------- | ---------------- |
| cookie | `Ref<String | null        | undefined>` | The cookie value |

## Methods

The `useCookie` function exposes the following methods:

```js
import { useCookie } from "@vue-composable/cookie";

const { setCookie, removeCookie } = useCookie("some-cookie");
```

| Signature      | Description             |
| -------------- | ----------------------- |
| `setCookie`    | Update the cookie value |
| `removeCookie` | Remove the cookie       |

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
      <button @click="deleteCookie">Remove Cookie</button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useCookie } from "@vue-composable/cookie";

export default defineComponent({
  name: "cookie-example",

  setup() {
    let idx = 0;

    let { cookie, setCookie, removeCookie } = useCookie("my-cookie");

    function updateCookie() {
      cookie.value = `my-cookie-${++idx}`;
    }

    function deleteCookie() {
      removeCookie();
    }

    return {
      cookie,

      updateCookie,
      deleteCookie,
    };
  },
});
</script>

<style></style>
```
