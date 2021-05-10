# CurrencyFormat

> Format currency using [useIntlNumberFormat](../Intl/numberFormat);

## Parameters

```js
import { useCurrencyFormat } from "vue-composable";

useCurrencyFormat();

useCurrencyFormat(currency, locale?, options?);
useCurrencyFormat(options, locale?);
```

| Parameters | Type         | Required   | Default     | Description                                                                                                                                 |
| ---------- | ------------ | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| currency   | `Ref<string> | string`    | `false`     | `undefined`                                                                                                                                 | Default currency |
| locale     | `Ref<string  | string[]>` | `false`     | `undefined`                                                                                                                                 | Default locale passed to [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) |
| options    |              | `false`    | `undefined` | Default locale passed to [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) |

## Methods

The `useCurrencyFormat` function exposes the following methods:

```js
import { useCurrencyFormat } from "vue-composable";

const { format, formatString } = useCurrencyFormat();
```

| Signature      | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| `format`       | returns reactive `ref<string>`, if value is `ref<number>` it will update automatically |
| `formatString` | returns `formatted` string                                                             |

## Example

<currency-format-example/>

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
    </ul>
    <p>
      value:
      <b>{{ formatString(value) }}</b>
    </p>

    <p>
      formatted:
      <b>{{ formattedValue }}</b>
    </p>
    <p>
      Override currency
      <b>{{ formatString(value, "EUR") }}</b>
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useCurrencyFormat, useLanguage } from "vue-composable";

export default defineComponent({
  name: "currency-format-example",

  setup() {
    const { languages, language } = useLanguage();
    const locales = languages.value.concat(...["pt-PT", "pt-BR"]);

    const selectedLocale = ref(language.value);

    const options = ref({
      currency: "USD",
      currencyDisplay: "symbol",
    });

    const { formatString, format } = useCurrencyFormat(options, selectedLocale);

    const value = ref(400);

    const formattedValue = format(value);

    return {
      locales,

      selectedLocale,
      formatString,

      options,

      value,
      formattedValue,
    };
  },
});
</script>
```
