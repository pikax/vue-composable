# Validation

> `validation` composable inspired by [vuelidate](https://github.com/vuelidate/vuelidate)

## Parameters

```js
import { useValidation } from "vue-composable";

const form = useValidation(options);
```

| Parameters | Type     | Required | Default | Description             |
| ---------- | -------- | -------- | ------- | ----------------------- |
| options    | `Object` | `true`   |         | Validation input object |

## State

The `useValidation` function exposes the following reactive state:

```js
import { useValidation } from "vue-composable";

const { scrollTop, scrollLeft } = useValidation();
```

| State      | Type     | Description         |
| ---------- | -------- | ------------------- |
| scrollTop  | `Number` | Scroll top position |
| scrollLeft | `Number` | Scroll let position |

## Methods

The `useValidation` function exposes the following methods:

```js
import { useValidation } from "vue-composable";

const { remove } = useValidation();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

<validation-example/>

### Code

```vue

```
