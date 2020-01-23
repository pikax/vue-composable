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
  name: "shared-ref-example",
  setup() {
    const sharedRef = useSharedRef("test-shared-ref", 0);

    const mindDescription = computed(() => {
      switch (sharedRef.mind.value) {
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
      ...sharedRef,
      mindDescription,
      changeMind
    };
  }
};
</script>
