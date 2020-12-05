import { ref, watch, onMounted, onUnmounted, Ref } from "../api";
import { NO_OP, isBoolean, isClient } from "../utils";

export interface GeolocationOptions {
  /**
   * @description Executes request location immediately
   * @default true
   */
  immediate?: boolean;
}

export function useGeolocation(options?: PositionOptions & GeolocationOptions) {
  const supported = isClient && !!navigator.geolocation;

  // used to check if the execution is lazy
  const lazy: Ref<boolean | undefined> = ref(
    options ? options.immediate === false : undefined
  );

  const error = ref<GeolocationPositionError | null>(null);

  const timestamp = ref<number | null>(null);
  const coords = ref<GeolocationPosition["coords"] | null>(null);
  const highAccuracy = ref<boolean | null>(
    (options && options.enableHighAccuracy) || null
  );

  // allow manual control on when the geolocation is requested
  let refresh = NO_OP;

  if (supported) {
    const setPosition = (pos: GeolocationPosition) => {
      timestamp.value = pos.timestamp;
      coords.value = pos.coords;
      error.value = null;
    };
    const setError = (err: GeolocationPositionError) => {
      timestamp.value = Date.now();
      coords.value = null;
      error.value = err;
    };
    const clearWatch = () =>
      lazy.value !== true &&
      watchId &&
      navigator.geolocation.clearWatch(watchId);

    let _currentPositionRefresh = () =>
      navigator.geolocation.getCurrentPosition(setPosition, setError, options);

    if (lazy.value) {
      refresh = () => {
        if (lazy.value) {
          lazy.value = false;
        } else {
          _currentPositionRefresh();
        }
      };
    } else {
      // NOTE probably useless??
      refresh = _currentPositionRefresh;
    }

    let watchId = 0;

    onMounted(() =>
      watch(
        [highAccuracy, lazy],
        (a) => {
          clearWatch();

          const enableHighAccuracy = isBoolean(a[0])
            ? a[0]
            : options
            ? options.enableHighAccuracy
            : undefined;

          watchId = navigator.geolocation.watchPosition(
            setPosition,
            setError,
            options
              ? { ...options, enableHighAccuracy }
              : { enableHighAccuracy }
          );
        },
        {
          immediate: !lazy.value,
        }
      )
    );
    onUnmounted(clearWatch);
  }

  return {
    supported,

    refresh,

    error,

    timestamp,
    coords,
    highAccuracy,
  };
}
