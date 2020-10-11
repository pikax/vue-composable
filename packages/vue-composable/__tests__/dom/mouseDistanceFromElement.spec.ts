jest.mock("../../src/event/onMouseMove");

import { ref, Ref } from "../../src/api";
import { useMouseDistanceFromElement, useOnMouseMove } from "../../src";
import { nextTick } from "../utils";

describe("useMouseDistanceFromElement", () => {
  const useOnMouseMoveMock: jest.Mock<typeof useOnMouseMove> = useOnMouseMove as any;

  const pageXMock = ref(100);
  const pageYMock = ref(0);
  const removeMock = jest.fn();

  const mockElement = ref({
    offsetLeft: 100,
    offsetTop: 100,
    clientHeight: 10,
    clientWidth: 10,
  });

  const element = (mockElement as unknown) as Ref<HTMLElement>;

  beforeEach(() => {
    useOnMouseMoveMock.mockClear();
    useOnMouseMoveMock.mockReturnValue({
      pageX: pageXMock,
      pageY: pageYMock,
      remove: removeMock,
    } as any);

    mockElement.value = {
      offsetLeft: 100,
      offsetTop: 100,
      clientHeight: 10,
      clientWidth: 10,
    };
  });

  it("should use useMouseEvent", () => {
    const options = { test: 1 } as any;
    const wait = 10;
    useMouseDistanceFromElement(element, options, wait);

    expect(useOnMouseMoveMock).toHaveBeenCalledWith(window, options, wait);
  });
  it("should calculate the distance", () => {
    const { distance } = useMouseDistanceFromElement(element);

    expect(distance.value).toBe(105);
  });

  it("should return 0 if the element is null", () => {
    expect(useMouseDistanceFromElement(ref(null)).distance.value).toBe(0);
    expect(useMouseDistanceFromElement(null as any).distance.value).toBe(0);
  });

  it("should remove the event", () => {
    const { remove } = useMouseDistanceFromElement(element);

    expect(removeMock).not.toHaveBeenCalled();
    remove();
    expect(removeMock).toHaveBeenCalled();
  });

  describe("distance change", () => {
    beforeEach(() => {
      useOnMouseMoveMock.mockClear();
      useOnMouseMoveMock.mockReturnValue({
        pageX: pageXMock,
        pageY: pageYMock,
        remove: removeMock,
      } as any);

      mockElement.value = {
        offsetLeft: 100,
        offsetTop: 100,
        clientHeight: 10,
        clientWidth: 10,
      };
    });

    test("mouseX", async () => {
      mockElement.value.offsetTop = 0;
      pageYMock.value = 5;
      pageXMock.value = 0;

      const { distance } = useMouseDistanceFromElement(element);

      expect(distance.value).toBe(105);

      pageXMock.value += 5;

      await nextTick();
      expect(distance.value).toBe(100);
    });

    test("mouseY", async () => {
      mockElement.value.offsetLeft = 0;
      pageYMock.value = 0;
      pageXMock.value = 5;

      const { distance } = useMouseDistanceFromElement(element);

      expect(distance.value).toBe(105);

      pageYMock.value += 5;

      await nextTick();
      expect(distance.value).toBe(100);
    });

    test("element position", async () => {
      mockElement.value.offsetLeft = 0;
      pageYMock.value = 0;
      pageXMock.value = 5;

      const { distance } = useMouseDistanceFromElement(element);

      expect(distance.value).toBe(105);

      mockElement.value.offsetTop -= 5;

      await nextTick();
      expect(distance.value).toBe(100);
    });

    test("element", async () => {
      mockElement.value.offsetLeft = 0;
      pageYMock.value = 0;
      pageXMock.value = 5;

      const { distance } = useMouseDistanceFromElement(element);

      expect(distance.value).toBe(105);

      mockElement.value = {
        ...mockElement.value,
        offsetTop: mockElement.value.offsetTop - 5,
      };

      await nextTick();
      expect(distance.value).toBe(100);
    });
  });
});
