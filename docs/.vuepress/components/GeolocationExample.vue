<template>
  <div>
    <h6>
      Supported: <b>{{ supported }}</b>
    </h6>
    <button @click="refresh">Request location</button>
    <div>
      coords:
      <ul v-if="coords">
        <li>latitude: {{ coords.latitude }}</li>
        <li>longitude: {{ coords.longitude }}</li>
        <li>altitude : {{ coords.altitude }}</li>
        <li>accuracy: {{ coords.accuracy }}</li>
        <li>altitudeAccuracy: {{ coords.altitudeAccuracy }}</li>
        <li>heading : {{ coords.heading }}</li>
        <li>speed : {{ coords.speed }}</li>
      </ul>
      <div v-else-if="error">
        <p><b>Error:</b> {{ error }}</p>
      </div>
      <div v-else>No coords</div>
    </div>
  </div>
</template>

<script>
import { useGeolocation } from "vue-composable";
export default {
  setup() {
    return useGeolocation({ immediate: true });
  },
};
</script>
