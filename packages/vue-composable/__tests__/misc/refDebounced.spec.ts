import { ref } from "../../src/api";
import { refDebounced } from "../../src";

describe("refDebounced", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it("should work", () => {
    const r = refDebounced("a", 1);

    expect(r.value).toBe("a");

    r.value = "b";

    // should not been updated yet
    expect(r.value).toBe("a");

    jest.runTimersToTime(2);
    expect(r.value).toBe("b");
  });

  it("should allow use only a delay", () => {
    const r = refDebounced(1);
    expect(r.value).toBe(undefined);

    r.value = 1;

    // should not been updated yet
    expect(r.value).toBe(undefined);

    jest.runTimersToTime(2);
    expect(r.value).toBe(1);
  });

  it("should update the passed ref with delay", () => {
    const v = ref("a");
    const r = refDebounced(v, 1);
    expect(r.value).toBe("a");

    r.value = "b";

    // should not been updated yet
    expect(r.value).toBe("a");
    expect(v.value).toBe("a");

    jest.runTimersToTime(2);
    expect(r.value).toBe("b");
    expect(v.value).toBe("b");
  });
});
