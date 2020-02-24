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

    <hr />

    <h3>Custom locale</h3>

    <div>
      <button v-if="locales.indexOf('custom') < 0" @click="addCustomLocale">
        Add custom locale
      </button>
      <button v-else @click="removeCustomLocale">Remove custom locale</button>
    </div>

    <textarea v-model="customLocaleJson"></textarea>
  </div>
</template>

<script>
import Vue from "vue";
import { useI18n, promisedTimeout } from "vue-composable";
import { ref, computed, watch, i18n } from "@vue/composition-api";

export default {
  setup() {
    const name = ref("");
    const i18n = useI18n({
      locale: "en",
      fallback: "en",
      messages: {
        en: {
          locales: {
            en: "English",
            pt: "Portuguese",
            es: "Spanish",
            custom: "YourLocale"
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

    const customLocale = ref({
      locales: {
        custom: "Awesome"
      },
      hello: "H3Y"
    });
    const customLocaleJson = ref(JSON.stringify(customLocale.value));

    const addCustomLocale = () => {
      i18n.addLocale("custom", customLocale.value);
      i18n.locale.value = "custom";
    };
    const removeCustomLocale = () => i18n.removeLocale("custom");

    watch(
      customLocaleJson,
      json => {
        try {
          customLocale.value = JSON.parse(json);
        } catch (e) {
          // err
        }
      },
      { lazy: true }
    );

    return {
      ...i18n,
      name,

      customLocaleJson,

      addCustomLocale,
      removeCustomLocale
    };
  }
};
</script>
