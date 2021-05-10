# TailwindCSS breakpoints

> Use the TailwindCSS breakpoints within javascript code.

## Parameters

```js
import { useBreakpointTailwindCSS } from "vue-composable";

useBreakpointTailwindCSS(tailwindConfig?);
```

| Parameters     | Type                 | Required | Default     | Description                 |
| -------------- | -------------------- | -------- | ----------- | --------------------------- |
| tailwindConfig | `tailwind.config.js` | `false`  | `undefined` | `tailwind.config.js` object |

## Usage

Check [useBreakpoint](./breakpoint.md) for more detailed usage

### Default

```js
import { useBreakpointTailwindCSS } from "vue-composable";

/**
 * it uses the default config found :
 * https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 **/
useBreakpointTailwindCSS();
```

### With custom `tailwind.config.js`

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
    },
  },
  variants: {
    /* custom variants */
  },
  plugins: [
    /* custom plugins */
  ],
};

// usage
import { useBreakpointTailwindCSS } from "vue-composable";
import tailwindConfig from "@/tailwind.config.js"; // location may be different

useBreakpointTailwindCSS(tailwindConfig);
/* Equivalent as: 

useBreakpoint({
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440
})

*/
```

### Usage with `inject/provide` with `typescript`

```ts
// parent.component.vue

import {
  ExtractTailwindScreens,
  useBreakpointTailwindCSS
} from "vue-composable";
import tailwindConfig from "@/tailwind.config.js"; // location may be different

export type TailwindConfigType = typeof tailwindConfig;

setup(){
  setBreakpointTailwindCSS(tailwindConfig); // provide config
  // ...
}

// child.component.vue

import { TailwindConfigType } from 'parent.component.vue' // you should move this type to an other file

setup(){
  useBreakpointTailwindCSS<TailwindConfigType>() // retrieve breakpoints
  // ...
}

```
