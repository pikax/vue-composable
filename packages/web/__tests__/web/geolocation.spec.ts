import { useGeolocation } from "../../src";
import { Vue, nextTick } from "../utils";

describe("geolocation", () => {
  const __geolocation = navigator.geolocation;

  const clearWatchFn = jest.fn();
  const getCurrentPositionFn = jest.fn();
  const watchPositionFn = jest.fn().mockImplementation(() => 1);

  const geolocation: Geolocation = {
    clearWatch: clearWatchFn,
    getCurrentPosition: getCurrentPositionFn,
    watchPosition: watchPositionFn
  };

  beforeEach(() => {
    (navigator as any).geolocation = geolocation;
    clearWatchFn.mockClear();
    getCurrentPositionFn.mockClear();
    watchPositionFn.mockClear();
  });

  afterAll(() => {
    (navigator as any).geolocation = __geolocation;
  });

  it("should not be supported", () => {
    (navigator as any).geolocation = false;
    const { supported } = useGeolocation();

    expect(supported).toBe(false);
  });

  it("should pass the arguments to the watch", () => {
    let promise: Promise<void> = Promise.resolve();
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const opts: PositionOptions = {
          maximumAge: 10,
          timeout: 10,
          enableHighAccuracy: false
        };
        const geo = useGeolocation(opts);

        expect(geo.supported).toBe(true);

        promise = nextTick().then(async x => {
          expect(clearWatchFn).not.toHaveBeenCalled();
          expect(watchPositionFn).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining(opts)
          );
        });

        return {
          geo
        };
      }
    });
    vm.$mount();
    return promise;
  });

  it("refresh should call getCurrentPosition", () => {
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const geo = useGeolocation();

        expect(getCurrentPositionFn).not.toHaveBeenCalled();
        geo.refresh();
        expect(getCurrentPositionFn).toHaveBeenCalled();

        return {
          geo
        };
      }
    });
    vm.$mount();
  });

  it("should be lazy `immediate` = false", () => {
    let promise: Promise<void> = Promise.resolve();
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const geo = useGeolocation({ immediate: false });

        expect(getCurrentPositionFn).not.toHaveBeenCalled();
        geo.refresh();

        promise = nextTick().then(async () => {
          expect(clearWatchFn).not.toHaveBeenCalled();
          expect(watchPositionFn).toHaveBeenCalledTimes(1);
          expect(getCurrentPositionFn).not.toHaveBeenCalled();

          geo.refresh();
          expect(getCurrentPositionFn).toHaveBeenCalled();
        });

        return {
          geo
        };
      }
    });
    vm.$mount();
    return promise;
  });

  it("should watchPosition", async () => {
    let promise: Promise<void> = Promise.resolve();
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const geo = useGeolocation();

        promise = nextTick().then(async x => {
          expect(clearWatchFn).not.toHaveBeenCalled();
          expect(watchPositionFn).toHaveBeenCalledTimes(1);
        });

        return {
          geo
        };
      }
    });
    vm.$mount();
    await promise;
    vm.$destroy();
    expect(clearWatchFn).toHaveBeenCalled();
    expect(watchPositionFn).toHaveBeenCalledTimes(1);
  });

  it("should update the watchPosition if highAccuracy changes", async () => {
    let promise: Promise<void> = Promise.resolve();
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const geo = useGeolocation();

        promise = nextTick().then(async () => {
          expect(clearWatchFn).not.toHaveBeenCalled();
          expect(watchPositionFn).toHaveBeenCalledTimes(1);

          geo.highAccuracy.value = true;
          await nextTick();

          expect(clearWatchFn).toHaveBeenCalledTimes(1);
          expect(watchPositionFn).toHaveBeenCalledTimes(2);

          geo.highAccuracy.value = false;
          await nextTick();

          expect(clearWatchFn).toHaveBeenCalledTimes(2);
          expect(watchPositionFn).toHaveBeenCalledTimes(3);
        });

        return {
          geo
        };
      }
    });
    vm.$mount();
    await promise;
    vm.$destroy();
    expect(clearWatchFn).toHaveBeenCalled();
  });

  it("should set the correct values", async () => {
    let promise: Promise<void> = Promise.resolve();
    const vm = new Vue({
      template: "<div ref='el'></div>",
      setup() {
        const geo = useGeolocation();

        promise = nextTick().then(async x => {
          expect(clearWatchFn).not.toHaveBeenCalled();
          expect(watchPositionFn).toHaveBeenCalledTimes(1);

          const [setPosition, setError] = watchPositionFn.mock.calls[0];

          expect(setPosition).toBeInstanceOf(Function);
          expect(setError).toBeInstanceOf(Function);

          expect(geo.coords.value).toBeNull();
          expect(geo.timestamp.value).toBeNull();
          expect(geo.highAccuracy.value).toBeNull();
          expect(geo.error.value).toBeNull();

          const pos: Position = {
            coords: {
              accuracy: 10,
              altitude: 20,
              altitudeAccuracy: 30,
              heading: 40,
              latitude: 50,
              longitude: 60,
              speed: 70
            },
            timestamp: 11111111
          };

          setPosition(pos);

          await nextTick();

          expect(geo.coords.value).toBe(pos.coords);
          expect(geo.timestamp.value).toBe(pos.timestamp);
          expect(geo.error.value).toBeNull();

          const error = {
            err: 1
          };
          setError(error);
          await nextTick();

          expect(geo.coords.value).toBeNull();
          expect(geo.timestamp.value).not.toBe(pos.timestamp);
          expect(geo.error.value).toBe(error);

          const pos2: Position = {
            coords: {
              accuracy: 1,
              altitude: 2,
              altitudeAccuracy: 3,
              heading: 4,
              latitude: 5,
              longitude: 6,
              speed: 7
            },
            timestamp: 22222
          };

          setPosition(pos2);

          await nextTick();

          expect(geo.coords.value).toBe(pos2.coords);
          expect(geo.timestamp.value).toBe(pos2.timestamp);
          expect(geo.error.value).toBeNull();
        });

        return {
          geo
        };
      }
    });
    vm.$mount();
    await promise;
    vm.$destroy();
    expect(clearWatchFn).toHaveBeenCalled();
    expect(watchPositionFn).toHaveBeenCalledTimes(1);
  });
});
