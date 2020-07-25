import { createApp } from "vue";
import App from "./App.vue";
import { hydrationPlugin } from "vue-composable";

const app = createApp(App);

app.use(hydrationPlugin);

app.mount("#app");
