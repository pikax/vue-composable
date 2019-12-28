# WebSocket

> The [Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

## State

The `useWebSocket` function exposes the following reactive state:

```js
import { useWebSocket } from "vue-composable";

const {
  ws,
  messageEvent,
  errorEvent,
  data,
  isOpen,
  isClosed,
  errored
} = useWebSocket();
```

| State        | Type           | Description                 |
| ------------ | -------------- | --------------------------- |
| ws           | `WebSocket`    | WebSocket instance          |
| messageEvent | `MessageEvent` | Last message event received |
| errorEvent   | `ErrorEvent`   | Error event                 |
| data         | `any`          | Last data received          |
| isOpen       | `Boolean`      | Is websocket open           |
| isClosed     | `Boolean`      | Is websocket closed         |
| errored      | `Boolean`      | Is websocket errored        |

## Methods

The `useWebSocket` function exposes the following methods:

```js
import { useWebSocket } from "vue-composable";

const { send, close } = useWebSocket();
```

| Signature | Description                     |
| --------- | ------------------------------- |
| `send`    | Sends message through WebSocket |
| `close`   | Closes WebSocket connection     |

## Example

```vue
<template>
  <div>
    <button @click="send" :disabled="!isOpen">Send</button>
    <button @click="close(1000)" :disabled="!isOpen">Close</button>
    <p>open: {{ isOpen }}</p>
    <p>closed: {{ isClosed }}</p>
    <p>data: {{ data }}</p>
    <p>errored: {{ errored }}</p>
  </div>
</template>

<script>
import { useWebSocket } from "vue-composable";
export default {
  name: "web-socket-example",
  setup() {
    const { isOpen, isClosed, data, errored, send, close } = useWebSocket(
      "wss://javascript.info/article/websocket/demo/hello"
    );

    return {
      isOpen,
      isClosed,
      data,
      errored,
      send,
      close
    };
  }
};
</script>
```

### Code

<ClientOnly>
<web-socket-example/>
</ClientOnly>
