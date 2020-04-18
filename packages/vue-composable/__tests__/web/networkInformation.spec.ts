import { createVue, nextTick } from "../utils";
import { NetworkInformation, useNetworkInformation } from "../../src";
import { reactive } from "@vue/runtime-core";

describe("network information", () => {
  let eventListener: Function = null as any;
  let connectionMock = null as any;

  const connection = navigator.connection;
  afterAll(() => {
    navigator.connection = connection;
  });

  beforeEach(() => {
    connectionMock = {
      downlink: 0,
      downlinkMax: 0,
      effectiveType: "slow-2g",
      rtt: 0,
      saveData: false,
      type: "none",
      addEventListener: jest.fn().mockImplementation((t, handler) => {
        eventListener = handler;
      }),
      removeEventListener: jest.fn(),
      onchange: jest.fn()
    } as NetworkInformation;

    navigator.connection = connectionMock;
  });

  const buildNetwork = (beforeSetup?: () => any) => {
    const conn = navigator.connection;
    navigator.mozConnection = navigator.webkitConnection = navigator.connection = null as any;
    let networkInformation = useNetworkInformation();
    createVue({
      template: `<div></div>`,
      setup() {
        navigator.connection = conn;
        beforeSetup && beforeSetup();
        networkInformation = useNetworkInformation();
        if (networkInformation) {
          return networkInformation;
        }
        return networkInformation;
      }
    }).mount();
    return networkInformation;
  };

  describe("fallback to correct `navigator.connection`", () => {
    const consoleWarn = console.warn;

    beforeEach(() => {
      navigator.connection = navigator.mozConnection = navigator.webkitConnection = null as any;
      console.warn = jest.fn();
    });
    afterAll(() => {
      console.warn = consoleWarn;
    });

    it("should set supported to false if connection not available", () => {
      const { supported } = useNetworkInformation();
      expect(supported).toBe(false);
    });

    it("should warn if not supported", () => {
      useNetworkInformation();
      expect(console.warn).toBeCalledWith(
        "[navigator.connection] not found, networkInformation not available."
      );
    });
    it("should get connection from navigator", () => {
      const { supported } = buildNetwork(
        () => (navigator.connection = connectionMock)
      );
      expect(supported).toBe(true);
    });
    it("should get mozConnection from navigator", () => {
      const { supported } = buildNetwork(
        () => (navigator.mozConnection = connectionMock)
      );
      expect(supported).toBe(true);
    });
    it("should get webkitConnection from navigator", () => {
      const { supported } = buildNetwork(
        () => (navigator.webkitConnection = connectionMock)
      );
      expect(supported).toBe(true);
    });
  });

  it("should update connection values on change", async () => {
    const {
      downlink,
      downlinkMax,
      effectiveType,
      rtt,
      saveData,
      type
    } = buildNetwork();

    expect(connectionMock.addEventListener).toHaveBeenCalled();
    expect(eventListener).toBeTruthy();

    const r = reactive({
      downlink,
      downlinkMax,
      effectiveType,
      rtt,
      saveData,
      type
    });

    expect(connectionMock).toMatchObject(r);

    connectionMock.downlink = 22;
    connectionMock.downlink = 22;
    connectionMock.downlinkMax = 20;
    connectionMock.effectiveType = "4g";
    connectionMock.rtt = 10;
    connectionMock.saveData = true;
    connectionMock.type = "wifi";

    eventListener();
    await nextTick();

    expect(connectionMock).toMatchObject(r);
  });

  it("should removeListener on remove()", () => {
    const { remove } = buildNetwork();

    expect(connectionMock.removeEventListener).not.toHaveBeenCalled();
    remove();

    expect(connectionMock.removeEventListener).toHaveBeenCalled();
  });

  it("should call removeListener on unmount", () => {
    const vm = createVue({
      template: "<div></div>",
      setup() {
        return useNetworkInformation();
      }
    });

    expect(connectionMock.removeEventListener).not.toHaveBeenCalled();
    vm.mount();
    expect(connectionMock.removeEventListener).not.toHaveBeenCalled();
    vm.destroy();
    expect(connectionMock.removeEventListener).toHaveBeenCalled();
  });
});
