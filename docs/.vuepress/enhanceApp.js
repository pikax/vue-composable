import VueCompositionAPI from '@vue/composition-api';

import VueComposable from '../../dist/vue-composable.es';

window.VueComposable = VueComposable;

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
};