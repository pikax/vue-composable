# injectFactory

> Same as [inject](https://vue-composition-api-rfc.netlify.app/api.html#dependency-injection) but allows you to have a factory as default value.

## Parameters

```js
import { injectFactory } from "vue-composable";

const value = injectFactory(key, factory);
```

| Parameters | Type                                 | Required | Description                                 |
| ---------- | ------------------------------------ | -------- | ------------------------------------------- |
| key        | `String|Symbol`                      | `true`   | key                                         |
| factory    | `Function<T> | Function<Promise<T>>` | `true`   | Will be called if there's no value provided |

### Code

```ts
const users = injectFactory("myValue", () => {
  if (new Date().getDate() === 2) {
    return {
      a: 1
    };
  }

  return {
    b: 1
  };
});

// promise
const users = injectFactory("myValue", () =>
  axios.get("/users").then(x => x.data)
);
if (isPromise(users)) {
  // no value found, we can handle it
} else {
  // users provided
}
```
