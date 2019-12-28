#

> The [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

## Parameters

```js
import { useMatchMedia } from "vue-composable";

const matchMedia = useMatchMedia(mediaQueryString);
```

| Parameters | Type | Description |
|mediaQueryString| string| A string representing the media query to parse.

## State

The `useMatchMedia` function exposes the following reactive state:

```js
import { useMatchMedia } from "vue-composable";

const { scrollTop, scrollLeft } = useMatchMedia();
```

| State      | Type     | Description         |
| ---------- | -------- | ------------------- |
| scrollTop  | `Number` | Scroll top position |
| scrollLeft | `Number` | Scroll let position |

## Methods

The `useMatchMedia` function exposes the following methods:

```js
import { useMatchMedia } from "vue-composable";

const { remove } = useMatchMedia();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

```vue

```

### Code

<on-scroll-example/>
