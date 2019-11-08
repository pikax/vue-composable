export declare function useMatchMedia(query: string): {
    mediaQueryList: import("@vue/composition-api").Ref<MediaQueryList>;
    remove: () => void;
    matches: import("@vue/composition-api").Ref<boolean>;
};
