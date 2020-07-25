import { useTimeline } from "../../src";
import { ref } from "../../src/api";

describe("timeline", () => {
  it("should work", () => {
    const value = ref("");
    const timeline = useTimeline(value);

    expect(timeline.value).toMatchObject([]);

    value.value = "1";
    expect(timeline.value).toMatchObject([{ item: "" }]);

    value.value = "2";
    expect(timeline.value).toMatchObject([{ item: "1" }, { item: "" }]);
  });

  it("should not store more than the maxLength", () => {
    const value = ref("");
    const timeline = useTimeline(value, { maxLength: 1 });

    expect(timeline.value).toMatchObject([]);

    value.value = "1";
    expect(timeline.value).toMatchObject([{ item: "" }]);

    value.value = "2";
    expect(timeline.value).toMatchObject([{ item: "1" }]);
  });

  it("should use the clone option", () => {
    const value = ref("");
    const clone = jest.fn().mockImplementation(x => `x${x}`);
    const timeline = useTimeline(value, { clone });

    expect(timeline.value).toMatchObject([]);

    value.value = "1";
    expect(clone).toHaveBeenCalledTimes(1);
    expect(timeline.value).toMatchObject([{ item: "x" }]);

    value.value = "2";
    expect(clone).toHaveBeenCalledTimes(2);
    expect(timeline.value).toMatchObject([{ item: "x1" }, { item: "x" }]);
  });

  it("should watch deep changes", () => {
    const value = ref({ a: 1 });
    const timeline = useTimeline(value, { deep: true });

    expect(timeline.value).toMatchObject([]);

    value.value.a++;
    expect(timeline.value).toMatchObject([{ item: value.value }]);

    value.value.a++;
    expect(timeline.value).toMatchObject([
      { item: value.value },
      { item: value.value }
    ]);
  });
});
