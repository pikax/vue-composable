import { useUndo } from "../../src";
import { ref } from "../../src/api";
describe("undo", () => {
  it("should work", () => {
    const v = ref(0);

    const undo = useUndo(v);

    expect(undo.value).toBe(v);

    v.value = 1;
    expect(undo.prev.value).toHaveLength(1);

    v.value++;
    expect(undo.prev.value).toHaveLength(2);

    undo.undo();
    expect(v.value).toBe(1);
    expect(undo.prev.value).toHaveLength(2);
    expect(undo.next.value).toHaveLength(1);

    undo.redo();
    expect(undo.prev.value).toHaveLength(2);
    expect(undo.next.value).toHaveLength(0);

    const x = 10;
    for (let i = 0; i < x; ++i) {
      v.value = i;
    }
    expect(undo.prev.value).toHaveLength(2 + x);
    expect(undo.next.value).toHaveLength(0);

    undo.jump(x);

    expect(undo.prev.value).toHaveLength(3);
    expect(undo.next.value).toHaveLength(x);

    v.value = 42;
    expect(undo.prev.value).toHaveLength(3);
    expect(undo.next.value).toHaveLength(0);
  });

  it("should only store maxItems", () => {
    const undo = useUndo(1, { maxLength: 2 });

    undo.value.value++;
    expect(undo.prev.value).toStrictEqual([1]);

    undo.value.value++;
    expect(undo.prev.value).toStrictEqual([2, 1]);

    undo.value.value++;
    expect(undo.prev.value).toStrictEqual([3, 2]);

    undo.value.value++;
    expect(undo.prev.value).toStrictEqual([4, 3]);
  });

  it("should use clone function", () => {
    const clone = jest.fn() as any;
    const undo = useUndo({ a: 1 }, { clone });

    expect(clone).toHaveBeenCalled();

    undo.value.value = { a: 2 };
    expect(clone).toHaveBeenCalledTimes(2);
  });
});
