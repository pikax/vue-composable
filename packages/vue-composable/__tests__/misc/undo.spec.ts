import { useUndo } from "../../src";
import { ref } from "vue3";
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

    undo.jump(-1);
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
});
