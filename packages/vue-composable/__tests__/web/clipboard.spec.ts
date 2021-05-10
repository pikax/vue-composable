import { UseClipboard, useClipboard } from "../../src";
import { createVue } from "../utils";

describe("clipboard tets", () => {
  test("not supported on node jest", () => {
    // TODO write mocks

    // @ts-ignore
    let clipboard: UseClipboard = undefined;

    createVue({
      setup() {
        clipboard = useClipboard();
      },
    }).mount();
    expect(clipboard.supported).toBe(false);
  });

  // it("should work", async () => {
  //   // @ts-ignore
  //   let clipboard: UseClipboard = undefined;

  //   createVue({
  //     setup() {
  //       clipboard = useClipboard();
  //     },
  //   }).mount();

  //   expect(clipboard.supported).toBe(true);
  //   expect(clipboard.text.value).toBe("");

  //   const input = document.createElement("input");
  //   input.value = "test";
  //   input.select();
  //   document.execCommand("copy");
  // });
});
