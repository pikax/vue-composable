<template>
  <div>
    <p>
      Supported: <b>{{ supported }}</b>
    </p>
    <p>
      To test please open 2 or more tabs, press send and all the other tabs
      should show the message
    </p>

    <p v-if="data">received: {{ data }}</p>

    <div>
      <input
        v-model="message"
        placeholder="Write a message"
        @keydown.enter="submitMessage"
      />
      <button @click="submitMessage">send</button>
    </div>
  </div>
</template>

<script>
import { useBroadcastChannel } from "vue-composable";
import { ref } from "@vue/composition-api";

export default {
  name: "broadcast-channel-example",

  setup() {
    const { supported, data, send } = useBroadcastChannel("composable-example");
    const message = ref("");
    const submitMessage = () => {
      send(message.value);
      message.value = "";
    };

    return {
      supported,
      data,
      message,
      submitMessage
    };
  }
};
</script>
