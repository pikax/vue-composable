import {
  inject,
  ref,
  InjectionKey,
  Ref,
  readonly,
  computed,
  Plugin
} from "../api";

// istanbul ignore next
const HYDRATION_KEY: InjectionKey<Readonly<
  Ref<Readonly<boolean>>
>> = /*#__PURE__*/ Symbol((__DEV__ && "VUE_COMPOSABLE_HYDRATION_KEY") || ``);

export const hydrationPlugin: Plugin = {
  // @ts-ignore
  install(app: any) {
    const hydrating = ref(true);
    const h = readonly(hydrating);
    if (__VUE_2__) {
      // TODO add mixin?
      if (__DEV__) {
        console.warn(
          "[hydrationPlugin] HydrationPlugin is not supported in vue2"
        );
        hydrating.value = false;
      }
    } else {
      // @ts-ignore
      app._context.provides[HYDRATION_KEY] = h;

      const appMount = app.mount;
      app.mount = (...args: any[]) => {
        const component = appMount(...args);
        hydrating.value = false;
        return component;
      };
    }
  }
};

export function useHydration() {
  if (__DEV__) {
    const s = Symbol();
    const r = inject(HYDRATION_KEY, s as any);
    if (r === s) {
      console.warn(
        "[useHydration] no hydration found, did you forget to `app.use(HydrationPlugin)`?"
      );
    }
  }
  return inject(
    HYDRATION_KEY,
    computed(() => false)
  );
}
