<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/sharedRef">Shared Ref</router-link>
      </li>
      <li>
        <router-link to="/arrayPagination">Array Pagination</router-link>
      </li>
      <li>
        <router-link to="/fetch">Fetch</router-link>
      </li>

      <li>
        <router-link to="/networkInformation">Network Information</router-link>
      </li>

      <li>
        <router-link to="/cancellablePromise">Cancellable Promise</router-link>
      </li>

      <li>
        <router-link to="/SWAPI">SWAPI</router-link>
      </li>

      <li @click="a++">{{ a }} - a</li>
      <li @click="data++">{{ data }} - data</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Fetch from "./components/Fetch";
import {
  onUnmounted,
  ref,
  computed,
  getCurrentInstance,
  Ref
} from "@vue/composition-api";
import { useBroadcastChannel, refShared, useSharedRef } from "vue-composable";

// let shared = undefined;

// export function refShared(defaultValue, id) {
//   const vm = getCurrentInstance();
//   const name = `${vm.$vnode.tag}${vm._uid}${id}`;

//   if (true) {
//     if (!shared) {
//       shared = new Set();
//     }
//     if (shared.has(name)) {
//       console.warn(
//         "[refShared] You can only have one refShared per component, if you need more please assign pass an id refShared(defaultValue, id)"
//       );
//     }
//     shared.add(name);
//   }

//   const { addListener, send, close } = useBroadcastChannel(name);

//   const r = ref(defaultValue);
//   send({ t: 0 });

//   addListener(({ data }) => {
//     switch (data.t) {
//       case 0: {
//         // request to be
//         send({ t: 1, v: r.value });
//         break;
//       }
//       case 1: {
//         console.log("upadet", data.v);
//         if (data.v !== r.value) {
//           console.log("s p", r.value, "n", data.v);

//           r.value = data.v;
//         }
//         break;
//       }
//     }
//   });

//   const data = computed({
//     get() {
//       return r.value;
//     },
//     set(v) {
//       send({ t: 1, v });
//       r.value = v;
//     }
//   });

//   onUnmounted(() => {
//     close();
//     shared.delete(name);
//   });
//   return data;
// }

export default {
  name: "App",
  components: {
    HelloWorld,
    Fetch
  },

  setup() {
    const a = refShared(0);

    const { data, master, mind } = useSharedRef("test", 0);
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
      a,
      data,
      master,
      mind
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
