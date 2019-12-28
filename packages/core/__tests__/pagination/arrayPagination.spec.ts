import { useArrayPagination } from "../../src";
import { nextTick } from "../utils";
import { ref } from "@vue/composition-api";

describe("arrayPagination", () => {
  it("should get correct array slice", async () => {
    const array = new Array(100).map((x, i) => i);
    const use = useArrayPagination(array, {
      currentPage: 1,
      pageSize: 10
    });

    expect(use.result.value).toMatchObject(array.slice(0, 10));

    use.currentPage.value++;
    await nextTick();

    expect(use.result.value).toMatchObject(array.slice(10, 20));
  });

  it("should update result if array changes", async () => {
    const arr = ref(new Array(10).map((x, i) => i));
    const use = useArrayPagination(arr, {
      currentPage: 1,
      pageSize: 10
    });

    expect(use.result.value).toMatchObject(arr.value.slice(0, 10));

    arr.value.push(-1);
    expect(use.result.value).toMatchObject(arr.value.slice(0, 10));
  });

  it("should set empty array if the array becomes invalid array", async () => {
    const arr = ref(new Array(10).map((x, i) => i));
    const use = useArrayPagination(arr, {
      currentPage: 1,
      pageSize: 10
    });

    expect(use.result.value).toMatchObject(arr.value.slice(0, 10));

    arr.value = 1 as any;
    expect(use.result.value).toHaveLength(0);
  });
});
