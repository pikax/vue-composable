import { ref, watch, onMounted, onUnmounted } from "@vue/composition-api";
import { NO_OP } from "@vue-composable/core";


export interface GeolocationOptions {
  /**
   * Executes request location immediately, default = true 
   */
  immediate?: boolean
}

export function useGeolocation(options?: PositionOptions & GeolocationOptions) {
  const supported = !!navigator.geolocation;

  // used to check if the execution is lazy
  const lazy = ref(options ? options?.immediate === false : undefined);

  const error = ref<PositionError>(null);

  const timestamp = ref<number>(null);
  const coords = ref<Position["coords"]>(null);
  const highAccuracy = ref<boolean>(options && options.enableHighAccuracy);

  // allow manual control on when the geolocation is requested
  let enable = NO_OP;

  if (supported) {
    const setPosition = (pos: Position) => {
      timestamp.value = pos.timestamp;
      coords.value = pos.coords;
      error.value = null;
    };
    const setError = (err: PositionError) => {
      timestamp.value = Date.now();
      coords.value = null;
      error.value = err;
    };
    const clearWatch = () =>
      lazy.value !== true && watchId && navigator.geolocation.clearWatch(watchId);

    if (lazy.value) {
      enable = () => lazy.value = false;
    }

    let watchId = 0;

    onMounted(() =>
      watch(() => [highAccuracy, lazy], ([acc]) => {
        clearWatch();

        watchId = navigator.geolocation.watchPosition(
          setPosition,
          setError,
          options ? { ...options, enableHighAccuracy: acc.value } : undefined
        );
      }, {
        lazy: lazy.value
      })
    );
    onUnmounted(clearWatch);
  }

  return {
    supported,

    enable,

    error,

    timestamp,
    coords,
    highAccuracy
  };
}
