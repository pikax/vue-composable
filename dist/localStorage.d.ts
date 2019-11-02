import { Ref } from "@vue/composition-api";
import { RefTyped } from "./utils";
export declare type LocalStorageTyped<T> = string;
export interface LocalStorageReturn<T> {
    storage: Ref<T>;
    /**
     * @description Removes current item from the store
     */
    remove: () => void;
    /**
     * @description Clears all tracked localStorage items
     */
    clear: () => void;
}
export declare function useLocalStorage<T = any>(key: LocalStorageTyped<T> | string, defaultValue?: RefTyped<T>): LocalStorageReturn<T>;
