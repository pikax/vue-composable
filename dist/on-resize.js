"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
const utils_1 = require("./utils");
const event_1 = require("./event");
const debounce_1 = require("./debounce");
function useOnResize(el, options, wait) {
    const element = utils_1.unwrap(el);
    const height = composition_api_1.ref(element.clientHeight);
    const width = composition_api_1.ref(element.clientWidth);
    let handler = (ev) => {
        height.value = element.clientHeight;
        width.value = element.clientWidth;
    };
    const eventOptions = typeof options === "number" ? undefined : options;
    const ms = typeof options === "number" ? options : wait;
    if (ms) {
        handler = debounce_1.useDebounce(handler, wait);
    }
    const remove = event_1.useEvent(element, "resize", handler, eventOptions);
    return {
        height,
        width,
        remove
    };
}
exports.useOnResize = useOnResize;
//# sourceMappingURL=on-resize.js.map