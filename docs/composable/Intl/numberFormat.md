# Intl.NumberFormat

> The [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

## Parameters

```js
import { useIntlNumberFormat } from "vue-composable";

useIntlNumberFormat(locales?,options?);

```

| Parameters | Type                            | Required | Default     | Description                                                                                                                                  |
| ---------- | ------------------------------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| locales    | `Ref<string | string[]>`        | `false`  | `undefined` | Default locale passed to [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)  |
| options    | `Ref<Intl.NumberFormatOptions>` | `false`  | `undefined` | Default options passed to [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) |

## State

The `useIntlNumberFormat` function exposes the following reactive state:

```js
import { useIntlNumberFormat } from "vue-composable";

const { formatter } = useIntlNumberFormat();
```

| State     | Type                     | Description            |
| --------- | ------------------------ | ---------------------- |
| formatter | `Ref<Intl.NumberFormat>` | Current formatter used |

## Methods

The `useIntlNumberFormat` function exposes the following methods:

```js
import { useIntlNumberFormat } from "vue-composable";

const { format, formatString } = useIntlNumberFormat();
```

| Signature      | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| `format`       | returns reactive `ref<string>`, if value is `ref<number>` it will update automatically |
| `formatString` | returns `formatted` string                                                             |

## Example

<intl-number-format-example/>
### Code

```vue
<template>
  <div>
    <ul>
      <li>
        <label for="value">value</label>
        <input name="value" v-model.number="value" type="number" />
      </li>

      <li>
        <label for="locale">Locale</label>
        <select name="locale" v-model="selectedLocale">
          <option v-for="l in locales" :value="l">{{ l }}</option>
        </select>
      </li>

      <li>
        <label for="style">options.style</label>
        <select name="style" v-model="options.style">
          <option value="decimal">decimal</option>
          <option value="percent">percent</option>
          <option value="currency">currency</option>
        </select>
      </li>
      <template v-if="options.style === 'currency'">
        <li>
          <label for="currency">options.currency</label>
          <input name="currency" v-model="options.currency" />
        </li>
        <li>
          <label for="currencyDisplay">options.currencyDisplay</label>
          <select name="currencyDisplay" v-model="options.currencyDisplay">
            <option value="symbol">symbol</option>
            <option value="code">code</option>
          </select>
        </li>
      </template>
    </ul>

    <p>
      value:
      <b>{{ formatString(value) }}</b>
    </p>

    <p>
      formatted:
      <b>{{ formattedValue }}</b>
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useIntlNumberFormat, useLanguage } from "vue-composable";

export default defineComponent({
  name: "intl-number-format-example",

  setup() {
    const { languages, language } = useLanguage();
    const locales = languages.value.concat(...["pt-PT", "pt-BR"]);

    const selectedLocale = ref(language.value);

    const options = ref({
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol"
    });

    const { formatString, format } = useIntlNumberFormat(
      selectedLocale,
      options
    );

    const value = ref(400);

    const formattedValue = format(value);

    return {
      locales,

      selectedLocale,
      formatString,

      options,

      value,
      formattedValue
    };
  }
});
</script>
```
