<template>
  <div>
    <p>Supported: {{ supported }}</p>
    <p>
      Mind: {{ mindDescription }} <button @click="changeMind">Change</button>
    </p>
    <p>IsMaster: {{ master }}</p>

    <input v-model="data" :disabled="!editable" />

    <p>targets: {{ targets.length }}</p>
  </div>
</template>

<script>
import { useSharedRef } from "vue-composable";
import { computed } from "@vue/composition-api";

export default {
  setup() {
    const s = useSharedRef("test", 0);

    const mindDescription = computed(() => {
      switch (s.mind.value) {
        case 0:
          return "HIVE";
        case 1:
          return "MASTER";
      }
    });

    const changeMind = () => {
      s.setMind((s.mind.value + 1) % 2);
    };

    return {
      ...s,
      mindDescription,
      changeMind
    };
  }
};
</script>
