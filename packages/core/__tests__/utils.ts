export const Vue: any = require('vue/dist/vue.common');

Vue.config.productionTip = false;
Vue.config.devtools = false;


Vue.config.warnHandler = (err: any) => {
    throw err;
}

Vue.config.errorHandler = (err: any) => {
    throw err;
}

export function nextTick<T>(callback: (this: T) => void, context?: T): void;
export function nextTick(): Promise<void>;
export function nextTick<T>(callback?: (this: T) => void, context?: T) {
    if (!callback) {
        return Vue.nextTick();
    }
    return Vue.nextTick(callback, context);
}