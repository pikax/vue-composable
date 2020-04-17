<template>
  <div>
    <div>
      <label for="num">Number</label>
      <input type="number" v-model.number="inputNumber" />
    </div>
    <input type="number" v-model.number="options.minimumFractionDigits" />
    <input type="text" v-model="locale" />

    <p>{{ formatString(inputNumber) }}</p>
    <p>{{ format(inputNumber).value }}</p>

    <p>{{ formattedValue }}</p>
    <p>{{ formattedWithDecimal }}</p>
    <p>{{ formattedWithRef }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useIntlNumberFormat } from "vue-composable";

export default defineComponent({
  setup() {
    const inputNumber = ref(123456480);
    const options = ref({
      minimumFractionDigits: 2
    });

    const locale = ref("default");

    const { format, formatString } = useIntlNumberFormat(locale);

    const formattedValue = format(inputNumber);

    const formattedWithDecimal = format(inputNumber, {
      minimumFractionDigits: 3
    });

    const formattedWithRef = format(inputNumber, options);

    return {
      inputNumber,
      locale,

      options,
      formatString,

      format,
      formattedValue,
      formattedWithDecimal,
      formattedWithRef
    };
  }
});
</script>

<style></style>
