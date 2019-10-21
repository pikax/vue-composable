"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
const utils_1 = require("./utils");
const event_1 = require("./event");
const debounce_1 = require("./debounce");
function useMouseResize(el, options, wait) {
    const element = utils_1.unwrap(el);
    const mouseX = composition_api_1.ref(0);
    const mouseY = composition_api_1.ref(0);
    let handler = (ev) => {
        mouseX.value = ev.x;
        mouseY.value = ev.y;
    };
    const eventOptions = typeof options === "number" ? undefined : options;
    const ms = typeof options === "number" ? options : wait;
    if (ms) {
        handler = debounce_1.useDebounce(handler, wait);
    }
    const remove = event_1.useEvent(element, "mousemove", handler, eventOptions);
    return {
        mouseX,
        mouseY,
        remove
    };
}
exports.useMouseResize = useMouseResize;
//# sourceMappingURL=on-mouse-move.js.map