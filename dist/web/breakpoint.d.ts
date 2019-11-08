import { Ref } from "@vue/composition-api";
import { RemoveEventFunction } from "../event/event";
export declare function useBreakpoint<T>(breakpoints: Record<keyof T, number | string>): Record<keyof T, Ref<boolean>> & {
    remove: RemoveEventFunction;
    current: Ref<keyof T | undefined>;
};
