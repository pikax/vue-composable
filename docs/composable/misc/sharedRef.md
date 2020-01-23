# useSharedRef

> Share the same value across multiple tabs (within the same origin) in the same browser.

::: warning

This relies on [BroadcastChannel API](./../web/broadcastChannel.md).
Safari doesn't support it.

:::

::: tip

You can use short version [refShared](#refshared)

:::

## Parameters

```js
import { useSharedRef } from "vue-composable";

const sharedRef = useSharedRef(name, defaultValue?);
```

| Parameters   | Type     | Required | Default     | Description                  |
| ------------ | -------- | -------- | ----------- | ---------------------------- |
| name         | `String` | `true`   |             | Name of the BroadcastChannel |
| defaultValue | `T`      | false    | `undefined` | Default value                |

## State

The `useSharedRef` function exposes the following reactive state:

```js
import { useSharedRef } from "vue-composable";

const { supported, id, data, master, mind, editable, targets } = useSharedRef();
```

| State     | Type                        | Description                                                                       |
| --------- | --------------------------- | --------------------------------------------------------------------------------- |
| supported | `boolean`                   | Returns true if [BroadcastChannel API](./../web/broadcastChannel.md) is supported |
| id        | `number`                    | Id of the reference                                                               |
| data      | `Ref<T>`                    | Value                                                                             |
| mind      | `Ref<RefSharedMessageType>` | This describes on how this `ref` interacts with other tabs [check](#mind)         |
| master    | `Ref<boolean>`              | If this instance is `master` instance                                             |
| editable  | `Ref<boolean>`              | If this instance is editable                                                      |
| targets   | `Ref<number[]>`             | Connected `ref`                                                                   |

## Methods

The `useSharedRef` function exposes the following methods:

```js
import { useSharedRef } from "vue-composable";

const { ping, setMind, addListener } = useSharedRef();
```

| Signature           | Description                                    |
| ------------------- | ---------------------------------------------- |
| `ping()`            | sends a ping to listeners                      |
| `setMind(MindMode)` | sets all the listeners to the same mode        |
| `addListener`       | adds a callback to Broadcast Channel `message` |

## Information

### Mind

This is how the multiple tabs interact with each other, is possible to have two modes:

- **0**: Hive (_default_)
- **1**: Master

```ts
const { setMind } = useSharedRef();
// javascript
setMind(0); // set mind to HIVE
setMind(1); // set mind to MASTER

// typescript
import { SharedRefMind } from "vue-composable";
setMind(SharedRefMind.HIVE); // set mind to HIVE
setMind(SharedRefMind.MASTER); // set mind to MASTER
```

::: tip

When a `useSharedRef(id)` is called it will try to sync with other tabs, `setMind` only needs to set in one intance.

:::

#### HIVE MODE

This interaction allows the `ref` to be updated by everyone.
If you have 5 tabs open every tab is allowed to update and everyone will sync to the latest modified value.

#### MASTER MODE

This interaction only allows the `master` to send updates to the other tabs. In `master` mode if the reference is not master the `data` **value changes will be ignored**

::: tip

If you want to change the master instance, please call `setMind(1)` on the instance you want to control, this will update all of the other.

:::

::: warning

If the master instance gets destroyed (the component unmounted or tab closed) a new `master` will be assigned automatically (it will be the oldest instance)

:::

## Example

<ClientOnly>
<shared-ref-video/>
</ClientOnly>

<ClientOnly>
<shared-ref-example/>
</ClientOnly>

### Code

```vue
<template>
  <div>
    <p>Supported: {{ supported }}</p>
    <p>
      Mind: {{ mindDescription }} <button @click="changeMind">Change</button>
    </p>
    <p>IsMaster: {{ master }}</p>

    <input v-model="data" :disabled="!editable" />

    <p>targets: {{ targets.length }}</p>
  </div>
</template>

<script>
import { useSharedRef } from "vue-composable";
import { computed } from "@vue/composition-api";

export default {
  name: "shared-ref-example",
  setup() {
    const sharedRef = useSharedRef("test-shared-ref", 0);

    const mindDescription = computed(() => {
      switch (sharedRef.mind.value) {
        case 0:
          return "HIVE";
        case 1:
          return "MASTER";
      }
    });

    const changeMind = () => {
      sharedRef.setMind((sharedRef.mind.value + 1) % 2);
    };

    return {
      ...sharedRef,
      mindDescription,
      changeMind
    };
  }
};
</script>
```

## refShared

Short version, this uses [useSharedRef](#usesharedref) in HIVE mode.

### Parameters

```js
import { refShared } from "vue-composable";

const refShared = refShared(defaultValue?, id?);
```

| Parameters   | Type     | Required | Default     | Description                                                                                                                                           |
| ------------ | -------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultValue | `T`      | false    | `undefined` | Default value                                                                                                                                         |
| id           | `String` | `false`  | `undefined` | BroadcastChannel name, if not provided it will get be default `getCurrentInstance().$vnode.tag` this will allow have 1 shared reference per component |

### State

The `refShared` function returns a reactive `ref` variable:

```js
import { refShared } from "vue-composable";

const myShared = useSharedRef();
```

### Example

<ClientOnly>
<ref-shared-example/>
</ClientOnly>

#### Code

### Code

```vue
<template>
  <div>
    <p>
      To test please open 2 or more tabs and edit the input box
    </p>
    <input v-model="myRefVar" />
  </div>
</template>

<script>
import { refShared } from "vue-composable";
export default {
  name: "ref-shared-example",
  setup() {
    const myRefVar = refShared("Hello world");
    return { myRefVar };
  }
};
</script>
```
