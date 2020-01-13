import { ref, watch, onMounted, onUnmounted } from "@vue/composition-api";
export function useGeolocation(options?: PositionOptions) {
  const supported = !!navigator.geolocation;

  const error = ref<PositionError>(null);

  const timestamp = ref<number>(null);
  const coords = ref<Position["coords"]>(null);
  const highAccuracy = ref<boolean>(options && options.enableHighAccuracy);

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
      watchId && navigator.geolocation.clearWatch(watchId);

    let watchId = 0;

    onMounted(() =>
      watch(highAccuracy, acc => {
        clearWatch();

        watchId = navigator.geolocation.watchPosition(
          setPosition,
          setError,
          options ? { ...options, enableHighAccuracy: acc } : undefined
        );
      })
    );
    onUnmounted(clearWatch);
  }

  return {
    supported,
    error,

    timestamp,
    coords,
    highAccuracy
  };
}
