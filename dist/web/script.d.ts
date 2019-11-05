import { Ref } from "@vue/composition-api";
interface ScriptOptions {
    src: string;
    async?: boolean;
    defer?: boolean;
    module?: boolean;
}
interface ScriptReturn {
    loading: Ref<boolean>;
    error: Ref<boolean>;
    success: Ref<boolean>;
}
export declare function useScript(opts: ScriptOptions): ScriptReturn;
export declare function useScript(name: string): ScriptReturn;
export {};
