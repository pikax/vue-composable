<template>
  <div>
    <div>
      <select v-model="locale">
        <option v-for="l in locales" :key="l" :value="l">{{
          i18n.locales[l]
        }}</option>
      </select>
      <div>
        <label for="name">{{ i18n.input.name.label }}</label>
        <input
          name="name"
          v-model="name"
          :placeholder="i18n.input.name.placeholder"
        />
      </div>
    </div>

    <h1>{{ i18n.title }}</h1>
    <h5>{{ $t("hello", { name }).value }}</h5>

    <p>
      {{
        $t("currentDate", { day: $t(`weekDays[${new Date().getDay()}]`) }).value
      }}
    </p>
    <p>
      {{ $t("currentDate", { day: i18n.weekDays[new Date().getDay()] }).value }}
    </p>
  </div>
</template>

<script>
import { useI18n, buildI18n, promisedTimeout } from "vue-composable";
import { ref, computed } from "@vue/composition-api";
export default {
  setup() {
    const name = ref("");
    const i18n = buildI18n({
      locale: "en",
      fallback: "en",
      messages: {
        en: {
          locales: {
            en: "English",
            pt: "Portuguese",
            es: "Spanish"
          },

          weekDays: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday"
          ],

          input: {
            name: {
              label: "Name",
              placeholder: "Your name"
            }
          },
          hello: "Hello {name}",
          currentDate: "Today is: {day}"
        },
        pt: {
          locales: {
            en: "Inglês",
            pt: "Português",
            es: "Espanhol"
          },

          weekDays: [
            "Domingo",
            "Segunda-feira",
            "Terca-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado"
          ],

          input: {
            name: {
              label: "Nome",
              placeholder: "O teu nome"
            }
          },
          currentDate: "Hoje e': {day}",

          hello: "Olá {name}"
        },

        // promised based
        es: () =>
          promisedTimeout(10).then(() => ({
            locales: {
              en: "Ingles",
              pt: "Portugués",
              es: "Espanol"
            },
            input: {
              name: {
                label: "Nombre",
                placeholder: "Tu nombre"
              }
            },

            weekDays: [
              "Domingo",
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado"
            ],

            hello: "Holla {name}"
          }))
      }
    });
    return {
      ...i18n,
      name
    };
  }
};
</script>
