<template>
  <div>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <div>
      <label for="throwError">Throw error</label>
      <input type="checkbox" name="throwError" v-model="throwError" />
    </div>
    <div>
      <label for="retryMode">Retry mode:</label>
      <select name="retryMode" v-model="mode">
        <option value="delay">Delay</option>
        <option value="backoff">Exponential backoff</option>
      </select>
    </div>
    <div v-if="mode === 'delay'">
      <label for="delay">Delay</label>
      <input type="number" name="delay" v-model.number="delay" />
    </div>
    <p v-if="loading">loading...</p>
    <p v-else-if="isRetrying">
      retrying in {{ nextRetryIn }}ms
      <span>Current: {{ retryCount }} retries</span>
    </p>
    <div v-else>
      <p>Status: {{ status }}</p>
      <span>{{ json }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "@vue/composition-api";
import {
  useFetch,
  useRetry,
  exponentialDelay,
  isClient,
  useNow,
  useDateNow,
} from "vue-composable";

export default {
  name: "retry-example",

  setup() {
    const id = ref(1);
    const throwError = ref(false);
    const delay = ref(200);
    const dateNow = ref(Date.now());
    const mode = ref("delay");

    const { now } = useDateNow({
      refreshMs: 10,
    });

    const retryDelay = (n) => {
      switch (mode.value) {
        case "delay":
          return delay.value;
        case "backoff":
          return exponentialDelay(n);
      }
    };

    const { json, loading, exec: fetchExec, error, status } = useFetch();
    const { isRetrying, nextRetry, retryCount, exec } = useRetry({
      retryDelay,
    });

    watch(id, (id) => {
      exec(() => {
        if (throwError.value) {
          throw new Error("blocked");
        }
        return fetchExec(`https://reqres.in/api/user/${id}`);
      });
    });

    // just to have a nice countdown
    const nextRetryIn = computed(() => Math.floor(nextRetry.value - now.value));

    return {
      id,
      json,
      loading,
      status,
      retryCount,
      delay,
      mode,
      throwError,
      isRetrying,
      nextRetryIn,
    };
  },
};
</script>
