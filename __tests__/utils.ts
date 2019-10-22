// const vue = import('vue/dist/vue.esm');
const Vue: any = require('vue/dist/vue.common');
// import Vue from 'vue';

export function nextTick<T>(callback: (this: T) => void, context?: T): void;
export function nextTick(): Promise<void>;
export function nextTick<T>(callback?: (this: T) => void, context?: T) {
    if(!callback) {
        return Vue.nextTick();
    }
    return Vue.nextTick(callback, context);
}