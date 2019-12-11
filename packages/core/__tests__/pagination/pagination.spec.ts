import { usePagination } from "../../src/pagination/pagination";
import { nextTick } from "../utils";

describe("pagination", () => {
  let warnSpy: jest.SpyInstance = undefined as any;
  beforeAll(() => {
    warnSpy = jest.spyOn(console, "warn").mockImplementation();
  });
  
  beforeEach(()=>{
    warnSpy.mockReset();
  })
  
  afterAll(()=>{
    warnSpy.mockReset();
  })

  it("should return pagination", () => {
    const use = usePagination({
      pageSize: 10,
      currentPage: 1,
      total: 100
    });

    expect(use).toMatchObject({
      pageSize: { value: 10 },
      total: { value: 100 },
      currentPage: { value: 1 },
      lastPage: { value: 10 },
      offset: { value: 0 },

      next: expect.any(Function),
      prev: expect.any(Function),
      first: expect.any(Function),
      last: expect.any(Function)
    });
  });

  it("should update pages", () => {
    const use = usePagination({
      pageSize: 10,
      currentPage: 1,
      total: 100
    });

    use.pageSize.value = 20;

    expect(use).toMatchObject({
      pageSize: { value: 20 },
      total: { value: 100 },
      currentPage: { value: 1 },
      lastPage: { value: 5 },
      offset: { value: 0 }
    });

    use.pageSize.value = 100;

    expect(use).toMatchObject({
      pageSize: { value: 100 },
      total: { value: 100 },
      currentPage: { value: 1 },
      lastPage: { value: 1 },
      offset: { value: 0 }
    });
  });

  it("should update total", async () => {
    const use = usePagination({
      pageSize: 10,
      currentPage: 1,
      total: 100
    });

    use.total.value = 5;
    await nextTick();
    expect(use).toMatchObject({
      pageSize: { value: 10 },
      total: { value: 5 },
      currentPage: { value: 1 },
      lastPage: { value: 1 },
      offset: { value: 0 }
    });

    use.total.value = 1000;
    await nextTick();
    expect(use).toMatchObject({
      pageSize: { value: 10 },
      total: { value: 1000 },
      currentPage: { value: 1 },
      lastPage: { value: 100 },
      offset: { value: 0 }
    });
  });

  it("should update currentPage to last", async () => {
    const use = usePagination({
      pageSize: 10,
      currentPage: 9,
      total: 100
    });

    expect(use.currentPage.value).toBe(9);

    use.total.value = 50;
    await nextTick();
    expect(use.currentPage.value).toBe(5);
  });

  describe("navigation", () => {
    it("should `next`", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 5,
        total: 100
      });

      expect(use.currentPage.value).toBe(5);

      use.next();
      await nextTick();

      expect(use.currentPage.value).toBe(6);
    });

    it("should `prev`", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 5,
        total: 100
      });

      expect(use.currentPage.value).toBe(5);
      use.prev();
      await nextTick();

      expect(use.currentPage.value).toBe(4);
    });

    it("should `first`", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 5,
        total: 100
      });

      expect(use.currentPage.value).toBe(5);
      use.first();
      await nextTick();

      expect(use.currentPage.value).toBe(1);
    });

    it("should `last`", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 5,
        total: 100
      });

      expect(use.currentPage.value).toBe(5);
      use.last();
      await nextTick();

      expect(use.currentPage.value).toBe(10);
    });
  });

  describe("currentPage", () => {
    it("should currentPage should be `1` if `0` is passed", () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 0,
        total: 100
      });

      expect(use.currentPage.value).toBe(1);
    });

    it("should not go below page 1", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 2,
        total: 100
      });

      use.currentPage.value = -1;
      await nextTick();

      expect(use.currentPage.value).toBe(1);
    });

    it("should allow setting the page through currentPage", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 1,
        total: 100
      });

      use.currentPage.value++;
      await nextTick();
      expect(use).toMatchObject({
        offset: { value: 10 },
        currentPage: { value: 2 }
      });

      use.currentPage.value = 5;
      await nextTick();
      expect(use).toMatchObject({
        offset: { value: 40 },
        currentPage: { value: 5 }
      });

      use.currentPage.value = 500;
      await nextTick();
      expect(use).toMatchObject({
        offset: { value: 90 },
        currentPage: { value: 10 }
      });

      use.currentPage.value--;
      await nextTick();
      expect(use).toMatchObject({
        offset: { value: 80 },
        currentPage: { value: 9 }
      });
    });

    it("should not change if assigning not `number`", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 2,
        total: 100
      });

      use.currentPage.value = "10" as any;
      await nextTick();

      expect(use.currentPage.value).toBe(2);
    });
  });


  describe('validations', ()=>{
    it("should warn when you try assign invalid value to pageSize", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 1,
        total: 100
      });
      const value = "11";
  
      expect(use.currentPage.value).toBe(1);
      expect(use.offset.value).toBe(0);
  
      use.pageSize.value = value as any;
  
      expect(warnSpy).toBeCalledWith(expect.stringContaining(`[pageSize] expected number but got: '${typeof value}' value: '${value}'`));
      expect(use.pageSize.value).toBe(10);
    });

    it("should warn when you try assign invalid value to pageSize", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 1,
        total: 100
      });
      const value = "11";
  
      expect(use.currentPage.value).toBe(1);
      expect(use.offset.value).toBe(0);
  
      use.currentPage.value = value as any;
  
      expect(warnSpy).toBeCalledWith(expect.stringContaining(`[currentPage] expected number but got: '${typeof value}' value: '${value}'`));
      expect(use.currentPage.value).toBe(1);
    });

    it("should warn when you try assign invalid value to offset", async () => {
      const use = usePagination({
        pageSize: 10,
        currentPage: 2,
        total: 100
      });
      const value = "11";
  
      expect(use.currentPage.value).toBe(2);
      expect(use.offset.value).toBe(10);
  
      use.offset.value = value as any;
  
      expect(warnSpy).toBeCalledWith(expect.stringContaining(`[offset] expected number but got: '${typeof value}' value: '${value}'`));
      expect(use.offset.value).toBe(10);
    });

  })

  it("when changing the pageSize offset shouldn't change", () => {
    const use = usePagination({
      pageSize: 10,
      currentPage: 2,
      total: 100
    });

    use.pageSize.value++;

    expect(use.offset.value).toBe(10);
  });
});
