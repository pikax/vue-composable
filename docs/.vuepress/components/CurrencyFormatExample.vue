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
