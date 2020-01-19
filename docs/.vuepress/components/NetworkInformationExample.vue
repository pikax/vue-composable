<template>
  <div>
    <h3>Network information</h3>

    <p>
      supported: <b>{{ supported }}</b>
    </p>
    <p>
      downlink: <b>{{ downlink }}</b>
    </p>
    <p>
      downlinkMax: <b>{{ downlinkMax }}</b>
    </p>
    <p>
      effectiveType: <b>{{ effectiveType }}</b>
    </p>
    <p>
      round-trip time: <b>{{ rtt }}</b>
    </p>
    <p>
      saveData: <b>{{ saveData }}</b>
    </p>
    <p>
      type: <b>{{ type }}</b>
    </p>
  </div>
</template>

<script>
import { useNetworkInformation } from "vue-composable";

export default {
  name: "NetworkInformationExample",
  setup() {
    return useNetworkInformation();
  }
};
</script>
