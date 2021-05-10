# Intl.DateTimeFormat

> The [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

## Parameters

```js
import { useIntlDateTimeFormat } from "vue-composable";

useIntlDateTimeFormat(locales?,options?);

```

| Parameters | Type                              | Required   | Default     | Description                                                                                                                                                          |
| ---------- | --------------------------------- | ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| locales    | `Ref<string                       | string[]>` | `false`     | `undefined`                                                                                                                                                          | Default locale passed to [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) |
| options    | `Ref<Intl.DateTimeFormatOptions>` | `false`    | `undefined` | Default options passed to [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) |

## State

The `useIntlDateTimeFormat` function exposes the following reactive state:

```js
import { useIntlDateTimeFormat } from "vue-composable";

const { formatter } = useIntlDateTimeFormat();
```

| State     | Type                       | Description            |
| --------- | -------------------------- | ---------------------- |
| formatter | `Ref<Intl.DateTimeFormat>` | Current formatter used |

## Methods

The `useIntlDateTimeFormat` function exposes the following methods:

```js
import { useIntlDateTimeFormat } from "vue-composable";

const { format, formatString } = useIntlDateTimeFormat();
```

| Signature      | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| `format`       | returns reactive `ref<string>`, if value is `ref<number>` it will update automatically |
| `formatString` | returns `formatted` string                                                             |

## Example

<intl-date-time-format-example/>

### Code

```vue
<template>
  <div>
    <ul>
      <li>
        <label for="value">value</label>
        <input name="value" v-model="value" type="date" />
      </li>

      <li>
        <label for="locale">Locale</label>
        <select name="locale" v-model="selectedLocale">
          <option v-for="l in locales" :value="l">{{ l }}</option>
        </select>
      </li>

      <li>
        <label for="style">options.year</label>
        <select name="style" v-model="options.year">
          <option value="numeric">numeric</option>
          <option value="2-digit">2-digit</option>
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
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useIntlDateTimeFormat, useLanguage } from "vue-composable";

export default defineComponent({
  name: "intl-date-time-format-example",

  setup() {
    const { languages, language } = useLanguage();
    const locales = languages.value.concat(...["pt-PT", "pt-BR"]);

    const selectedLocale = ref(language.value || "en");

    const options = ref({
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const { formatString, format } = useIntlDateTimeFormat(
      selectedLocale,
      options
    );

    const value = ref("2020-01-01");

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
