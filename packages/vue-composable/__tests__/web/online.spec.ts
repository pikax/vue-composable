import { useOnline } from "../../src";

describe("online", () => {
  const windowEventSpy = jest.fn();
  const windowEvent = window.addEventListener;
  const windowRemoveEvent = window.removeEventListener;

  const raiseOffline = () => windowEventSpy.mock.calls[0][1]();
  const raiseOnline = () => windowEventSpy.mock.calls[1][1]();

  beforeAll(() => {
    window.addEventListener = windowEventSpy;
  });
  afterAll(() => {
    window.addEventListener = windowEvent;
    window.removeEventListener = windowRemoveEvent;
  });

  it("should only add event listener once", () => {
    expect(windowEventSpy).not.toHaveBeenCalled();

    useOnline();
    useOnline();

    expect(windowEventSpy).toHaveBeenCalled();
    expect(windowEventSpy).toHaveBeenCalledTimes(2);

    expect(windowEventSpy).toHaveBeenNthCalledWith(
      1,
      "offline",
      expect.anything(),
      expect.anything(),
    );
    expect(windowEventSpy).toHaveBeenNthCalledWith(
      2,
      "online",
      expect.anything(),
      expect.anything(),
    );
  });

  it("should update to online", () => {
    const { online } = useOnline();

    raiseOffline();
    expect(online.value).toBe(false);

    raiseOnline();
    expect(online.value).toBe(true);

    raiseOffline();
    expect(online.value).toBe(false);
  });
});
