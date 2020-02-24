import { useWebSocket } from "../../src";
import { WS } from "jest-websocket-mock";
import { watch } from "@vue/composition-api";
import { nextTick } from "../utils";

describe("WebSocket", () => {
  const FAKE_URL = `ws://localhost:42`;
  let server: WS = undefined as any;

  let warnSpy: jest.SpyInstance = undefined as any;
  beforeAll(() => {
    warnSpy = jest.spyOn(console, "warn").mockImplementation();
  });

  beforeEach(() => {
    server = new WS(FAKE_URL);
    warnSpy.mockReset();
  });

  afterEach(() => {
    server!.close();
  });

  afterAll(() => {
    warnSpy.mockReset();
  });

  it("should connect to server", async () => {
    const { isOpen } = useWebSocket(FAKE_URL);

    await server.connected;

    expect(isOpen.value).toBe(true);
  });

  it("should received message", async () => {
    const { messageEvent } = useWebSocket(FAKE_URL);
    await server.connected;

    expect(messageEvent.value).toBeNull();

    server.send("test");
    expect(messageEvent.value).not.toBeNull();

    expect(messageEvent.value).toMatchObject({
      data: "test"
    });
  });

  it("should send message", async () => {
    const { send } = useWebSocket(FAKE_URL);
    await server.connected;

    send("test");

    expect(await server.nextMessage).toBe("test");
  });

  it("should store error", async () => {
    const { errorEvent, errored } = useWebSocket(FAKE_URL);
    await server.connected;

    server.error();

    expect(errorEvent.value).toBeTruthy();
    expect(errored.value).toBe(true);
  });

  it("should close", async () => {
    const { close, isClosed } = useWebSocket(FAKE_URL);
    await server.connected;

    // server.error()
    close();
    await server.closed;

    expect(isClosed).toBeTruthy();
  });

  it("should warn if the rate of messaging is too high", async () => {
    const messages = ["test", "test1", "test2"];
    const received: string[] = [];

    const { data } = useWebSocket(FAKE_URL);
    await server.connected;

    watch(data, (m: any) => received.push(m), {
      immediate: false
    });

    for (let i = 0; i < messages.length; i++) {
      server.send(messages[i]);
    }

    await nextTick();
    expect(warnSpy).toHaveBeenCalled();
  });

  it("should get all messages", async () => {
    const messages = ["test", "test1", "test2"];
    const received: string[] = [];

    const { data } = useWebSocket(FAKE_URL);
    await server.connected;

    watch(data, (m: any) => received.push(m), {
      immediate: false
    });

    for (let i = 0; i < messages.length; i++) {
      server.send(messages[i]);

      await nextTick();
    }

    expect(received).toStrictEqual(messages);
  });
});
