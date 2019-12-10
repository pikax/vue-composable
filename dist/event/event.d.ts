import { RefTyped } from "../utils";
export declare type RemoveEventFunction = () => void;
export declare function useEvent<K extends keyof WindowEventMap>(el: RefTyped<Window>, name: K, listener: (this: Document, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): RemoveEventFunction;
export declare function useEvent<K extends keyof DocumentEventMap>(el: RefTyped<Element>, name: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): RemoveEventFunction;
