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

    undo.jump(0);
    expect(undo.prev.value).toHaveLength(2);
    expect(undo.next.value).toHaveLength(0);
  });
});
