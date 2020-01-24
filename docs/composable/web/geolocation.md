# Geolocation API

> [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Parameters

```js
import { useGeolocation } from "vue-composable";

const geolocation = useGeolocation(options?);
```

| Parameters | Type                                        | Required | Default               | Description                                                                         |
| ---------- | ------------------------------------------- | -------- | --------------------- | ----------------------------------------------------------------------------------- |
| options    | `PositionOptions` & `{immediate?: boolean}` |          | `{ immediate: true }` | Options to handle geoLocation, `immediate` will trigger `watchPosition` on mounting |

## State

The `useGeolocation` function exposes the following reactive state:

```js
import { useGeolocation } from "vue-composable";

const { supported, coords, highAccuracy, error, timestamp } = useGeolocation();
```

| State        | Type                 | Description                                |
| ------------ | -------------------- | ------------------------------------------ |
| supported    | `Boolean`            | Checks if the browser supports Geolocation |
| coords       | `Ref<Position>`      | Position object                            |
| highAccuracy | `Ref<Boolean>`       | enable or disable highAccuracy mode        |
| error        | `Ref<PositionError>` | last position error                        |
| timestamp    | `Ref<Number>`        | Timestamp of the last position or error    |

## Methods

The `useGeolocation` function exposes the following methods:

```js
import { useGeolocation } from "vue-composable";

const { refresh } = useGeolocation();
```

| Signature | Description                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `refresh` | Refreshes the location. If `immediate:false` it will add a watch on `watchPosition` and if called multiple times will call `getCurrentPosition` |

## Example


<geolocation-example/>


### Code

```vue
<template>
  <div>
    <h6>
      Supported: <b>{{ supported }}</b>
    </h6>
    <button @click="refresh">Request location</button>
    <div>
      coords:
      <ul v-if="coords">
        <li>latitude: {{ coords.latitude }}</li>
        <li>longitude: {{ coords.longitude }}</li>
        <li>altitude : {{ coords.altitude }}</li>
        <li>accuracy: {{ coords.accuracy }}</li>
        <li>altitudeAccuracy: {{ coords.altitudeAccuracy }}</li>
        <li>heading : {{ coords.heading }}</li>
        <li>speed : {{ coords.speed }}</li>
      </ul>
      <div v-else-if="error">
        <p><b>Error:</b> {{ error }}</p>
      </div>
      <div v-else>
        No coords
      </div>
    </div>
  </div>
</template>

<script>
import { useGeolocation } from "vue-composable";
export default {
  setup() {
    return useGeolocation({ immediate: true });
  }
};
</script>
```
