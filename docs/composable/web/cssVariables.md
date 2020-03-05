# CSS variables

Expose the CSS variables of your choice to reactive properties.

## Parameters

```ts
import { useCssVariables } from "vue-composable";

useCssVariables(variables);
useCssVariables(variables, options);
useCssVariables(variables, element, options);

useCssVariables({
  backgroundColor: "color-background", // value is css as --color-background
  foregroundColor: "--color-foreground", // value is css as --color-foreground
  onBackgroundColor: {
    name: "color-on-background",
    value: "red"
  }
});

/**
 * API to assign a value to the css variable
 */
export interface CssVarDefinition {
  name: string;
  value: RefTyped<string>;
}

/**
 * Possible configuration
 */
export type CssVarDef = CssVarDefinition | string;

const defaultOptions = {
  attributes: true,
  attributeFilter: ["style"]
};
```

| Parameters | Type                        | Required | Default                    | Description                                                                                                                                |
| ---------- | --------------------------- | -------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| variables  | `Record<string, CssVarDef>` | `true`   |                            | dictionary with the cssVariable name you wish to track/change                                                                              |
| options    | `MutationObserverInit`      | `false`  | `defaultOptions`           | Options passed to `MutationObserver.observe` [MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit) |
| element    | `HTMLElement`               | `false`  | `document.documentElement` | element to keep track of CssVariables, it will default to document.documentElement if is in a client browser                               |

## State

The `useCssVariables` function exposes the following reactive states:

```js
import { useCssVariables } from "vue-composable";

const {
  supported,
  observing,
  backgroundColor,
  onBackgroundColor
} = useCssVariables({
  backgroundColor: "color-background",
  onBackgroundColor: {
    name: "color-on-background",
    value: "red"
  }
});

// backgroundColor contains the `--color-background` CSS variable
// onBackgroundColor sets `--color-on-background` CSS variable with the value 'red'
// observing is true

backGroundColor.value = "yellow"; // updates the cssVariable to yellow
```

| State        | Type              | Description                                                                 |
| ------------ | ----------------- | --------------------------------------------------------------------------- |
| supported    | `Boolean`         | Returns true if `MutationObserver` is supported                             |
| observing    | `Ref<Boolean>`    | A value that indicates if the observer is listening to CSS variable changes |
| ...variables | `Ref<TVariables>` | Object with the same keys but with reactive CSS variable value              |

## Methods

The `useCssVariables` function exposes the following methods:

```js
import { useCssVariables } from "vue-composable";

const { resume, stop } = useCssVariables();
```

| Signature | Description                       |
| --------- | --------------------------------- |
| `resume`  | Start observing the changes again |
| `stop`    | Stops observing the changes       |

## Example

<css-variables-example/>

### Code

```vue
<template>
  <div>
    <div>
      <label for="foreground-value">
        Override the value for
        <code>--color-foreground</code>:
      </label>
      <input type="text" id="foreground-value" v-model="foreground" />
    </div>

    <div ref="textDiv" class="text" style="color: var(--color-foreground)">
      <span v-if="observing">I am a text with the following color:</span>
      <span v-else>My color will be updated but not my label:</span>
      {{ foreground }}
    </div>

    <div>
      <button type="button" @click="stop" :disabled="!observing">
        Stop observing
      </button>
      <button type="button" @click="resume" :disabled="observing">
        Resume observing
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useCssVariables } from "vue-composable";

export default {
  name: "css-variables-example",
  setup() {
    const textDiv = ref(null);

    const { stop, resume, observing, foreground } = useCssVariables(
      {
        foreground: {
          name: "color-foreground",
          value: "red"
        }
      },
      textDiv
    );

    return {
      textDiv,

      observing,
      stop,
      resume,
      observing,
      foreground
    };
  }
};
</script>

<style scoped>
div > div {
  margin-top: 15px;
}

.text {
  margin: 15px 0;
}
</style>
```
