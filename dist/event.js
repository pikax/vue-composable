"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
function useEvent(el, name, listener, options) {
    const element = composition_api_1.isRef(el) ? el.value : el;
    const remove = () => element.removeEventListener(name, listener);
    composition_api_1.onMounted(() => element.addEventListener(name, listener, options));
    composition_api_1.onUnmounted(remove);
    return remove;
}
exports.useEvent = useEvent;
//# sourceMappingURL=event.js.map