# Mouse distance from Element

> Distance in pixels from an element

## Parameters

```js
import { useMouseDistanceFromElement } from "vue-composable";

useMouseDistanceFromElement(element, options?, wait?);
```

| Parameters | Type              | Required                 | Default     | Description            |
| ---------- | ----------------- | ------------------------ | ----------- | ---------------------- |
| element    | `Ref<HTMLElement> | HTMLElement`             | `true`      |                        | Element |
| options    | `boolean          | AddEventListenerOptions` | `false`     | `{passive: true}`      | Listener options |
| wait       | `Number`          | `false`                  | `undefined` | Debounce event in `ms` |

## State

The `useMouseDistanceFromElement` function exposes the following reactive state:

```js
import { useMouseDistanceFromElement } from "vue-composable";

const { distance } = useMouseDistanceFromElement();
```

| State    | Type               | Description                            |
| -------- | ------------------ | -------------------------------------- |
| distance | `Computed<Number>` | Distance in pixels from Element center |

## Methods

The `useMouseDistanceFromElement` function exposes the following methods:

```js
import { useMouseDistanceFromElement } from "vue-composable";

const { remove } = useMouseDistanceFromElement();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

<mouse-distance-from-element-example/>

### Code

```vue

```
