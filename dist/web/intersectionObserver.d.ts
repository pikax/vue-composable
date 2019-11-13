import { RefTyped } from "../utils";
export interface IntersectionObserverOptions {
    root?: RefTyped<Element> | null;
    rootMargin?: RefTyped<string> | string;
    threshold?: RefTyped<number | number[]> | number | number[];
}
export declare function useIntersectionObserver(el: RefTyped<Element>, options?: RefTyped<IntersectionObserverOptions>): any;
export declare function useIntersectionObserver(options: RefTyped<IntersectionObserverOptions>): any;
