import { Ref } from "@vue/composition-api";
export declare type RemoveEventFunction = () => void;
export declare function useEvent<K extends keyof DocumentEventMap>(el: Element | Ref<Element>, name: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): RemoveEventFunction;
