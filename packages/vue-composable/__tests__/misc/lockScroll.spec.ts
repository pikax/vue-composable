import { createVue, nextTick } from "../utils";
import { NO_OP, SCROLL_LOCK_CLASS, useLockScroll, wrap } from "../../src";
import { Ref, ref } from "../../src/api";

describe("lockscroll", () => {
  it("should work", async () => {
    let element: Ref<Element | undefined> = {} as any;
    let locked: Ref<Boolean> = {} as any;
    const { mount, destroy } = createVue({
      template: `<div ref="element"></div>`,
      setup() {
        element = ref<Element>();

        locked = useLockScroll(element, { auto: true }).locked;

        return {
          element,
        };
      },
    });

    expect(element.value).toBeUndefined();
    mount();

    expect(locked.value).toBe(true);
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(true);

    locked.value = false;
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(false);

    destroy();
  });

  it("should warn if no valid element is passed", () => {
    const warn = jest.spyOn(console, "warn");

    const { mount } = createVue({
      setup() {
        const element = ref<Element>();
        useLockScroll(element);

        return {
          element,
        };
      },
    });
    mount();

    expect(warn).toBeCalledTimes(1);
    expect(warn).toBeCalledWith("[useLockScroll] element is undefined");
  });

  it("should stop toggling if removed", () => {
    let element: Ref<Element | undefined> = {} as any;
    let locked: Ref<Boolean> = {} as any;
    let remove: () => void = NO_OP;
    const { mount, destroy } = createVue({
      template: `<div ref="element"></div>`,
      setup() {
        element = ref<Element>();

        const sl = useLockScroll(element);
        locked = sl.locked;
        remove = sl.remove;

        return {
          element,
        };
      },
    });

    expect(element.value).toBeUndefined();
    mount();

    expect(locked.value).toBe(true);
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(true);

    remove();

    locked.value = false; // should not affect
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(true);

    destroy();
  });

  it("should call onChange", () => {
    let element: Ref<Element | undefined> = {} as any;
    let locked: Ref<Boolean> = {} as any;
    const onChange = jest.fn();
    const { mount, destroy } = createVue({
      template: `<div ref="element"></div>`,
      setup() {
        element = ref<Element>();

        const sl = useLockScroll(element, { onChange });
        locked = sl.locked;

        return {
          element,
        };
      },
    });

    expect(element.value).toBeUndefined();
    expect(onChange).not.toHaveBeenCalled();
    mount();

    expect(locked.value).toBe(true);
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(1);

    locked.value = false;
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(2);

    destroy();

    // should not call after destroy
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("should allow passing custom lockedClass", () => {
    const lockedClass = "my-lock";
    let element: Ref<Element | undefined> = {} as any;
    let locked: Ref<Boolean> = {} as any;
    const { mount, destroy } = createVue({
      template: `<div ref="element"></div>`,
      setup() {
        element = ref<Element>();

        locked = useLockScroll(element, lockedClass).locked;

        return {
          element,
        };
      },
    });

    expect(element.value).toBeUndefined();
    mount();

    expect(locked.value).toBe(true);
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(false);
    expect(element.value!.classList.contains(lockedClass)).toBe(true);

    locked.value = false;
    expect(element.value!.classList.contains(SCROLL_LOCK_CLASS)).toBe(false);
    expect(element.value!.classList.contains(lockedClass)).toBe(false);

    destroy();
  });

  describe("array", () => {
    it("should allow passing an array", () => {
      const array = ref([
        document.createElement("div"),
        ref<Element | undefined>(document.createElement("div")),
      ]);

      let lock: () => void = NO_OP;
      let unlock: () => void = NO_OP;

      const { mount, destroy } = createVue({
        template: `<div ref="element"></div>`,
        setup() {
          const element = ref<Element>();

          array.value.push(element);

          const sl = useLockScroll(array);

          lock = sl.lock;
          unlock = sl.unlock;

          return {
            element,
          };
        },
      });

      if (!__VUE_2__) {
        expect(array.value).toHaveLength(2);
      }

      mount();
      expect(array.value).toHaveLength(3);

      expect(
        array.value.every((x) =>
          wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
        ),
      ).toBe(true);

      unlock();
      expect(
        array.value.every((x) =>
          wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
        ),
      ).toBe(false);

      lock();

      expect(
        array.value.every((x) =>
          wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
        ),
      ).toBe(true);

      destroy();
    });

    if (!__VUE_2__) {
      it("should keep track on element added", async () => {
        const len = ref(10);

        let elements: Ref<Element[]> = ref([]);
        let lock: () => void = NO_OP;
        let unlock: () => void = NO_OP;
        const onChange = jest.fn();
        const { mount, destroy } = createVue({
          template: `<div>
            <div v-for="(x, i) in len" :ref="el =>elements[i] = el" ></div>
        </div>`,
          setup() {
            const sl = useLockScroll(elements, { onChange });
            lock = sl.lock;
            unlock = sl.unlock;

            return {
              elements,
              len,
            };
          },
        });

        mount();
        expect(elements.value).toHaveLength(len.value);

        expect(
          elements.value.every((x) =>
            wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
          ),
        ).toBe(true);

        len.value++;
        await nextTick();

        expect(elements.value).toHaveLength(len.value);

        expect(
          elements.value.every((x) =>
            wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
          ),
        ).toBe(true);

        unlock();
        expect(
          elements.value.every((x) =>
            wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
          ),
        ).toBe(false);

        lock();

        expect(
          elements.value.every((x) =>
            wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
          ),
        ).toBe(true);

        len.value++;
        await nextTick();

        expect(elements.value).toHaveLength(len.value);

        expect(
          elements.value.every((x) =>
            wrap(x).value.classList.contains(SCROLL_LOCK_CLASS)
          ),
        ).toBe(true);

        destroy();
      });
    }
    it("should only raised onChanged when locked changes or new item added", async () => {
      const array = ref([document.createElement("div")]);
      const onChange = jest.fn();

      const sl = useLockScroll(array, { onChange, auto: false });

      expect(onChange).not.toHaveBeenCalled();
      sl.lock();
      expect(onChange).toHaveBeenCalledTimes(1);

      array.value.push(document.createElement("div"));
      expect(onChange).toHaveBeenCalledTimes(2);

      sl.unlock();

      expect(onChange).toHaveBeenCalledTimes(4);

      // when removing it should call on change
      array.value.splice(1, 1);
      expect(onChange).toHaveBeenCalledTimes(4);
    });
  });
  describe("selector", () => {
    it("should get elements after mounting", async () => {
      const elements = [
        document.createElement("div"),
        document.createElement("button"),
      ];

      elements.forEach((x) => {
        x.classList.add("to-lock");
        document.body.appendChild(x);
      });

      let lock: () => void = NO_OP;
      let unlock: () => void = NO_OP;
      const onChange = jest.fn();
      const { mount, destroy } = createVue({
        template: `<div class="to-lock"></div>`,
        setup() {
          const sl = useLockScroll(".to-lock", { onChange });

          lock = sl.lock;
          unlock = sl.unlock;

          return {};
        },
      });

      if (!__VUE_2__) {
        expect(onChange).not.toHaveBeenCalled();
      }

      mount();
      const targetElements = Array.from(document.querySelectorAll(".to-lock"));

      expect(onChange).toHaveBeenCalledTimes(6);
      expect(
        targetElements.every(
          (x) => x.classList.contains(SCROLL_LOCK_CLASS) === true,
        ),
      ).toBe(true);

      unlock();
      expect(onChange).toHaveBeenCalledTimes(9);

      expect(
        targetElements.every(
          (x) => x.classList.contains(SCROLL_LOCK_CLASS) === false,
        ),
      ).toBe(true);

      lock();
      expect(onChange).toHaveBeenCalledTimes(12);

      expect(
        targetElements.every(
          (x) => x.classList.contains(SCROLL_LOCK_CLASS) === true,
        ),
      ).toBe(true);

      destroy();

      expect(
        elements.every((x) =>
          x.classList.contains(SCROLL_LOCK_CLASS) === false
        ),
      ).toBe(true);
    });
  });
});
