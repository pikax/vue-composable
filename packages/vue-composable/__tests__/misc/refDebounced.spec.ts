import { useRefDebounced } from "../../src";

describe("refDebounced", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it("should work", () => {
    const r = useRefDebounced("a", 1);

    expect(r.value).toBe("a");

    r.value = "b";

    // should not been updated yet
    expect(r.value).toBe("a");

    jest.runTimersToTime(2);
    expect(r.value).toBe("b");
  });

  it("should allow use only a delay", () => {
    const r = useRefDebounced(1);
    expect(r.value).toBe(undefined);

    r.value = 1;

    // should not been updated yet
    expect(r.value).toBe(undefined);

    jest.runTimersToTime(2);
    expect(r.value).toBe(1);
  });
});
