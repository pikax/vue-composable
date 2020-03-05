<template>
  <div>
    <div>
      <label for="foreground-value"
        >Override the value for <code>--color-foreground</code>:</label
      >
      <input
        type="text"
        id="foreground-value"
        @input="set('color-foreground', $event.target.value)"
        :model="foreground"
      />
    </div>

    <div class="text" style="color: var(--color-foreground)">
      <span v-if="listening">
        I am a text with the following color:
      </span>
      <span v-else>
        My color will be updated but not my label:
      </span>
      {{ foreground }}
    </div>

    <div>
      <button type="button" @click="stop()" :disabled="!listening">
        Stop listening
      </button>
      <button type="button" @click="resume()" :disabled="listening">
        Resume listening
      </button>
      <button
        type="button"
        @click="foreground = get('color-foreground')"
        :disabled="listening"
      >
        Manual label update
      </button>
    </div>
  </div>
</template>

<script>
import { useCssVariables } from "../../../packages/web/dist/web.cjs.js";
import { ref } from "@vue/composition-api";

export default {
  name: "css-variables-example",
  setup() {
    const { stop, resume, get, set, listening, foreground } = useCssVariables({
      foreground: "color-foreground"
    });

    set("color-foreground", "red");

    return {
      listening,
      stop,
      resume,
      get,
      set,
      listening,
      foreground,
      document
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
