"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
const utils_1 = require("./utils");
const event_1 = require("./event");
const debounce_1 = require("./debounce");
function useOnScroll(el, options, wait) {
    const element = utils_1.unwrap(el);
    const scrollTop = composition_api_1.ref(element.scrollTop);
    const scrollLeft = composition_api_1.ref(element.scrollLeft);
    let handler = (ev) => {
        scrollTop.value = element.scrollTop;
        scrollLeft.value = element.scrollLeft;
    };
    const eventOptions = typeof options === "number" ? undefined : options;
    const ms = typeof options === "number" ? options : wait;
    if (ms) {
        handler = debounce_1.useDebounce(handler, wait);
    }
    const remove = event_1.useEvent(element, "scroll", handler, eventOptions);
    return {
        scrollTop,
        scrollLeft,
        remove
    };
}
exports.useOnScroll = useOnScroll;
//# sourceMappingURL=on-scroll.js.map