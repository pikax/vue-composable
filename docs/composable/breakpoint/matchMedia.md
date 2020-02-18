# MatchMedia

> The [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

## Parameters

```js
import { useMatchMedia } from "vue-composable";

const matchMedia = useMatchMedia(mediaQueryString);
```

| Parameters       | Type     | Required | Description                                     |
| ---------------- | -------- | -------- | ----------------------------------------------- |
| mediaQueryString | `String` | `true`   | A string representing the media query to parse. |

## State

The `useMatchMedia` function exposes the following reactive state:

```js
import { useMatchMedia } from "vue-composable";

const { supported, mediaQueryList, matches } = useMatchMedia();
```

| State          | Type                                                                              | Description                                                                                          |
| -------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| supported      | `Boolean`                                                                         | Is MatchMedia supported                                                                              |
| mediaQueryList | [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) | List of objects stores information on a media query                                                  |
| matches        | `Ref<Boolean>`                                                                    | A Boolean that returns true if the document currently matches the media query list, or false if not. |

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

<match-media-example/>

### Code

```vue
<template>
  <div>
    <p>
      Screen less than 600px: <b>{{ matches }}</b>
    </p>
  </div>
</template>

<script>
import { useMatchMedia } from "vue-composable";

export default {
  name: "match-media-example",
  setup() {
    return useMatchMedia("(max-width: 600px)");
  }
};
</script>
```
