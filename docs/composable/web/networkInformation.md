# NetworkInformation

> The [NetworkInformation](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation).

## State

The `useNetworkInformation` function exposes the following reactive state:

```js
import { useNetworkInformation } from "vue-composable";

const {
  downlink,
  downlinkMax,
  effectiveType,
  rtt,
  saveData,
  supported,
  type
} = useNetworkInformation();
```

| State         | Type      | Description                                                                                                                                                                                                |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| downlink      | `Number`  | Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.                                                                               |
|               |
| downlinkMax   | `Number`  | Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.                                                                                               |
|               |
| effectiveType | `String`  | Returns the effective type of the connection meaning one of `slow-2g`, `2g`, `3g`, or `4g`. This value is determined using a combination of recently observed round-trip time and downlink values.         |
|               |
| rtt           | `Number`  | Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.                                                                             |
|               |
| saveData      | `Boolean` | Returns true if the user has set a reduced data usage option on the user agent.                                                                                                                            |
|               |
| supported     | `Boolean` | If the current browser supports `Network Information API`                                                                                                                                                  |
| type          | `String`  | Returns the type of connection a device is using to communicate with the network. It will be one of the following values: `bluetooth`, `cellular`, `ethernet`, `none`, `wifi`, `wimax`, `other`, `unknown` |

## Methods

The `useNetworkInformation` function exposes the following methods:

```js
import { useNetworkInformation } from "vue-composable";

const { remove } = useNetworkInformation();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example


<network-information-example/>


### Code

```vue
<template>
  <div>
    <h3>Network information</h3>

    <p>
      supported: <b>{{ supported }}</b>
    </p>
    <p>
      downlink: <b>{{ downlink }}</b>
    </p>
    <p>
      downlinkMax: <b>{{ downlinkMax }}</b>
    </p>
    <p>
      effectiveType: <b>{{ effectiveType }}</b>
    </p>
    <p>
      round-trip time: <b>{{ rtt }}</b>
    </p>
    <p>
      saveData: <b>{{ saveData }}</b>
    </p>
    <p>
      type: <b>{{ type }}</b>
    </p>
  </div>
</template>

<script>
import { useNetworkInformation } from "vue-composable";

export default {
  name: "NetworkInformationExample",
  setup() {
    return useNetworkInformation();
  }
};
</script>
```
