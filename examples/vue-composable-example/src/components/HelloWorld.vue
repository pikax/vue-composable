<template>
  <div class="hello">
    <h1>Vue composable examples</h1>
    <h3>Select one above</h3>

    <li @click="a.a++">{{ a.a }} - a</li>
  </div>
</template>

<script>
// import { refShared } from "vue-composable";
import {
  ref,
  reactive,
  getCurrentInstance,
  computed,
  watch,
  onUnmounted
} from "@vue/composition-api";
import { useBroadcastChannel, unwrap } from "vue-composable";

const shared = new Set();

export function refShared(defaultValue, id) {
  const vm = getCurrentInstance();
  const name = `${vm.$vnode.tag}${vm._uid}${id}`;

  if (true) {
    if (shared.has(name)) {
      console.warn(
        "[refShared] You can only have one refShared per component, if you need more please assign pass an id refShared(defaultValue, id)"
      );
    }
    shared.add(name);
  }

  const { addListener, send, close } = useBroadcastChannel(name);

  // const unwrapped = unwrap(defaultValue);
  // let r = typeof unwrapped === "object" ? { ...unwrapped } : unwrapped;
  let r = ref(defaultValue);
  send({ t: 0 });
  let synced = false;
  let updateState = false;


  const sendNotification = (t, v) => {
    const vv = typeof v === "object" ? { ...v } : v;
    send({ t, v: vv });
  };

  addListener(({ data }) => {
    switch (data.t) {
      case 0: {
        sendNotification(1, r.value);
        break;
      }
      case 1: {
        if (synced) {
          break;
        }
        synced = true;
      }
      case 2: {
        updateState = true;
        r.value = data.v;
        ts.value = Date.now();
        break;
      }
    }
  });

  addListener(e => {
    console.log("received", e.data.t, e.data.v);
  });

  const data = computed({
    get() {
      return r.value;
    },
    set(v) {
      r.value = v;
      ts.value = Date.now();
    }
  });

  watch(
    r,
    v => {
      console.log("w", v, updateState);
      if (updateState) {
        updateState = false;
        return;
      }
      sendNotification(2, v);

      updateState = false;
    },
    { deep: true, lazy: true }
  );

  onUnmounted(() => {
    close();
    shared.delete(name);
  });
  return data;
}
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  setup() {
    const a = refShared({ a: 0 });
    // setInterval(() => a.value.a++, 1000);
    // const b = sharedRef(0);
    // const a = data;

    // onUnmounted(close);

    // const stuff = () => {
    //   debugger;
    //   send("22");
    // };
    // addListener(v => {
    //   console.log("eee", v);
    //   a.value = v.value;
    // });

    return {
      a
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
