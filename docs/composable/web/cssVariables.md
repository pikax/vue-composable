# CSS variables

Expose the CSS variables of your choice to reactive properties.

## State

The `useCssVariables` function exposes the following reactive states:

```js
import { useCssVariables } from "vue-composable";

const { listening, backgroundColor, onBackgroundColor } = useCssVariables({
  backgroundColor: "color-background",
  onBackgroundColor: "color-on-background"
});

// backgroundColor contains the `--color-background` CSS variable
// onBackgroundColor contains the `--color-on-background` CSS variable
// listening is true
```

| State     | Type      | Description                                                                 |
| --------- | --------- | --------------------------------------------------------------------------- |
| listening | `Boolean` | A value that indicates if the observer is listening to CSS variable changes |
| ...args   | `Args`    | Object with the same keys but with reactive CSS variable value              |

## Methods

The `useCssVariables` function exposes the following methods:

```js
import { useCssVariables } from "vue-composable";

const { get, set, resume, start } = useCssVariables();

// Sets the `--color-background` variable value
// You don't need the dashed before the variable name.
set("color-background", "red");

// Gets the `--color-background` variable value
// The result is not reactive, and you don't need the leading dashes
const backgroundColor = get("color-background"); // red
```

| Signature | Description                                                 | Arguments                                                                                     |
| --------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `get`     | Manually gets the given CSS variable from the given element | `variableName: string, element: HTMLElement = document.documentElement`                       |
| `set`     | Manually sets a CSS variable to the given element           | `variableName: string, value: string | null, element: HTMLElement = document.documentElement` |
| `stop`    | Stops observing the changes                                 |                                                                                               |
| `resume`  | Start observing the changes again                           |                                                                                               |

## Example

<css-variables-example/>

### Code

```vue
<template>
  <div>
    <div>
      <label for="foreground-value"
        >Override the value for <code>--color-foreground</code>:</label
      >
      <input
        type="text"
        id="foreground-value"
        @input="set('color-foreground', $event.target.value)"
        :model="foreground"
      />
    </div>

    <div class="text" style="color: var(--color-foreground)">
      <span v-if="listening">
        I am a text with the following color:
      </span>
      <span v-else>
        My color will be updated but not my label:
      </span>
      {{ foreground }}
    </div>

    <div>
      <button type="button" @click="stop()" :disabled="!listening">
        Stop listening
      </button>
      <button type="button" @click="resume()" :disabled="listening">
        Resume listening
      </button>
      <button
        type="button"
        @click="foreground = get('color-foreground')"
        :disabled="listening"
      >
        Manual label update
      </button>
    </div>
  </div>
</template>

<script>
import { useCssVariables } from "../../../packages/web/dist/web.cjs.js";
import { ref } from "@vue/composition-api";

export default {
  name: "css-variables-example",
  setup() {
    const { stop, resume, get, set, listening, foreground } = useCssVariables({
      foreground: "color-foreground"
    });

    set("color-foreground", "red");

    return {
      listening,
      stop,
      resume,
      get,
      set,
      listening,
      foreground,
      document
    };
  }
};
</script>
```
