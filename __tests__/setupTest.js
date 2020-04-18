if (__VUE_2__) {
  const Vue = require("vue/dist/vue.common");

  const plugin = require("@vue/composition-api").default;

  Vue.config.productionTip = false;
  Vue.config.devtools = false;
  Vue.use(plugin);
}
