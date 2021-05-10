# lockScroll

> Add `no-scroll` class to a element or selector.

## Parameters

```js
import { useLockScroll } from "vue-composable";

const options = {
    lockedClass: String,
    auto: Boolean,
    onChange(el: Element, lock: Boolean)
}

const selector = '.selector'
const lockClass = 'lock-class'
const element = ref<HTMLElement>();
const elements = [element]

useLockScroll(selector, options?);
useLockScroll(selector, lockClass?);

useLockScroll(element);
useLockScroll(element, options?);
useLockScroll(element, lockClass?);

useLockScroll(elements);
useLockScroll(elements, options?);
useLockScroll(elements, lockClass?);

```

| Parameters | Type             | Required    | Default     | Description                 |
| ---------- | ---------------- | ----------- | ----------- | --------------------------- |
| selector   | `String`         | `true`      |             | string selector             |
| element    | `Ref<Element>    | Element`    | `true`      |                             | template element |
| elements   | `Ref<Elements[]> | Elements[]` | `true`      |                             | list of elements |
| options    | `Options`        | `false`     |             | Options for `useLockScroll` |
| lockClass  | `String`         | `false`     | `no-scroll` | custom `lockClass`          |

## State

The `useLockScroll` function exposes the following reactive state:

```js
import { useLockScroll } from "vue-composable";

const { locked } = useLockScroll();
```

| State  | Type           | Description         |
| ------ | -------------- | ------------------- |
| locked | `Ref<Boolean>` | Is currently locked |

## Methods

The `useLockScroll` function exposes the following methods:

```js
import { lock, unlock, remove } from "vue-composable";

const { remove } = useLockScroll();
```

| Signature | Description                        |
| --------- | ---------------------------------- |
| lock      | `lock` the current status          |
| unlock    | `unlock` the current status        |
| remove    | stops tracking `lock` and `unlock` |

## Example

<lock-scroll-example />

### Code

```vue
<template>
  <div>
    Toggle
    <b>locked</b> to enable or disable
    <b>scroll</b>
    <div ref="elref" class="scroll-component">
      <p v-for="x in 10" :key="x">{{ x }}</p>
    </div>

    <button @click="remove">remove</button>
    <span>
      <input type="checkbox" v-model="locked" />
      Locked
    </span>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useLockScroll } from "vue-composable";

export default {
  setup(_) {
    const elref = ref(null);

    const { locked, remove } = useLockScroll(elref);

    return {
      elref,
      locked,
      remove,
    };
  },
};
</script>
<style scoped>
.scroll-component {
  overflow: scroll;
  height: 70px;
  background: gray;
}

.no-scroll {
  overflow: hidden !important;
}
</style>
```
