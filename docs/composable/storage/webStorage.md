# WebStorage

> [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

## Parameters

```js
import { useWebStorage } from "vue-composable";

const webStorage = useWebStorage(type, serializer?, delayMs?);
```

| Parameters | Type                          | Required | Default | Description                                                                                     |
| ---------- | ----------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| type       | `localStorage|sessionStorage` | `true`   |         | storage type, it will return always the same object if called multiple times with the same type |
| serializer | `Serializer`                  | `false`  | JSON    | custom serializer, it uses `stringify()` and `parse()`                                          |
| delayMs    | `number`                      | `false`  | 10      | `debounce` time for save to storage                                                             |

## State

The `useWebStorage` function exposes the following reactive state:

```js
import { useWebStorage } from "vue-composable";

const { supported, quotaError, store } = useWebStorage();
```

| State      | Type           | Description                                                                                                             |
| ---------- | -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| supported  | `boolean`      | if the store is supported, basically only false when on safari private tab                                              |
| quotaError | `Ref<boolean>` | true if the quota was exceeded on save                                                                                  |
| store      | `Storage`      | Storage object being used, this is **not** **localStorage** or **sessionStorage**, although it shares similar interface |

## Methods

The `useWebStorage` function exposes the following methods:

```js
import { useWebStorage } from "vue-composable";

const { remove } = useWebStorage();
```

| Signature | Description                |
| --------- | -------------------------- |
| `remove`  | Removes `store` from cache |
