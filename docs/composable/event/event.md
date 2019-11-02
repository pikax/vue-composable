# Event

> The [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

Base composable used in the other element composables

## Methods

The `useEvent` function exposes the following methods:

```js
import { useFetch } from "vue-composable";

const { cancel } = useFetch(elem);
```

## Example

```vue
<template>
  <div ref="elref">
    Mouse
    <p>x: {{state.x}}</p>
    <p>y: {{state.y}}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/composition-api';
import { useEvent } from "../../../";

export default {
  name: 'event-example',
  setup(_){
    const elref = ref(null);
    const state = reactive({
      x: 0,
      y: 0
    })
    const remove = useEvent(elref, 'mousemove', e=> {
      state.x = e.x;
      state.y = e.y;
    })

    return {
      elref,
      remove,
      state
    }
  }
}
</script>
```

### Code

<event-example/>
