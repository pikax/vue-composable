# 

> The [mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event).

## State

The `useOnScroll` function exposes the following reactive state:

```js
import { useOnScroll } from "vue-composable";

const { scrollTop, scrollLeft } = useOnScroll();
```

| State      | Type     | Description         |
| ---------- | -------- | ------------------- |
| scrollTop  | `Number` | Scroll top position |
| scrollLeft | `Number` | Scroll let position |

## Methods

The `useOnScroll` function exposes the following methods:

```js
import { useOnScroll } from "vue-composable";

const { remove } = useOnScroll();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

```vue

```

### Code

<on-scroll-example/>
