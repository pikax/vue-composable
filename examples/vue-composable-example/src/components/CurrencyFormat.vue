<template>
  <div>
    <div>
      <label for="num">Number</label>
      <input type="number" v-model.number="inputNumber" />
    </div>
    <input type="text" v-model="currency" />
    <input type="text" v-model="locale" />

    <p>{{ formatAmountString(inputNumber) }}</p>
    <p>{{ formatAmount(inputNumber).value }}</p>

    <p>{{ formattedValue }}</p>
    <p>{{ formattedWithDecimal }}</p>
    <p>{{ formattedWithRef }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useCurrencyFormat, useFo } from "vue-composable";

export default defineComponent({
  setup() {
    const inputNumber = ref(123456480);
    const currency = ref("GBP");

    const locale = ref("default");

    const { formatAmount, formatAmountString } = useCurrencyFormat(
      currency,
      locale
    );

    const formattedValue = formatAmount(inputNumber);

    const formattedWithDecimal = formatAmount(inputNumber, "EUR");

    const formattedWithRef = formatAmount(inputNumber, currency);

    return {
      inputNumber,
      locale,

      currency,
      formatAmountString,

      formatAmount,
      formattedValue,
      formattedWithDecimal,
      formattedWithRef
    };
  }
});
</script>

<style></style>
