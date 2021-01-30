import { useCookie } from "../../src";
import Cookies from "js-cookie";
import { createVue } from "../utils";
import { watch } from "@vue/runtime-dom";

describe("cookie", () => {
  const cookieName: string = "some-cookie";

  it("should have initial value of undefined if no cookie exist", () => {
    const { cookie } = useCookie(cookieName);
    expect(cookie.value).toBeUndefined();
  });

  it("should have initial value if cookie exist", () => {
    Cookies.set(cookieName, "initial");

    const { cookie } = useCookie(cookieName);
    expect(cookie.value).toBe("initial");

    // cleanup
    Cookies.remove(cookieName);
  });

  it("should have initial value of defaultValue if no cookie exist", () => {
    const spy = jest.spyOn(Cookies, "set");
    const { cookie } = useCookie(cookieName, "defaultValue", { path: "" });

    expect(spy).toHaveBeenCalled();
    expect(cookie.value).toBe("defaultValue");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    // cleanup
    spy.mockRestore();
    Cookies.remove(cookieName);
  });

  it("should update the cookie on call to setCookie", () => {
    const spy = jest.spyOn(Cookies, "set");

    createVue({
      template: `<div></div>`,
      setup() {
        const { cookie, setCookie } = useCookie(cookieName);

        expect(spy).not.toHaveBeenCalled();
        expect(cookie.value).toBeUndefined();

        setCookie("updated");
        expect(spy).toHaveBeenCalledTimes(1);
        expect(cookie.value).toBe("updated");
        expect(cookie.value).toBe(Cookies.get(cookieName));

        setCookie("update again", { path: "/" });
        expect(spy).toHaveBeenCalledTimes(2);
        expect(cookie.value).toBe("update again");
        expect(cookie.value).toBe(Cookies.get(cookieName));
      },
    });

    // cleanup
    spy.mockRestore();
    Cookies.remove(cookieName, { path: "/" });
  });

  it("should update the cookie on cookie value changed", () => {
    const spy = jest.spyOn(Cookies, "set");

    createVue({
      template: `<div></div>`,
      setup() {
        const { cookie } = useCookie(cookieName);

        expect(spy).not.toHaveBeenCalled();

        cookie.value = "updated";

        let unwatch = watch(cookie, () => {
          expect(spy).toHaveBeenCalledTimes(1);
          expect(cookie.value).toBe("updated");
          expect(cookie.value).toBe(Cookies.get(cookieName));
        });
        unwatch();

        cookie.value = "updated";

        unwatch = watch(cookie, () => {
          expect(spy).toHaveBeenCalledTimes(1);
          expect(cookie.value).toBe("updated");
          expect(cookie.value).toBe(Cookies.get(cookieName));
        });
        unwatch();

        cookie.value = "updated1";

        unwatch = watch(cookie, () => {
          expect(spy).toHaveBeenCalledTimes(2);
          expect(cookie.value).toBe("updated1");
          expect(cookie.value).toBe(Cookies.get(cookieName));
        });
        unwatch();

        return {
          cookie,
        };
      },
    }).mount();

    // cleanup
    spy.mockRestore();
    Cookies.remove(cookieName);
  });

  it("should remove the cookie on call removeCookie", () => {
    const spy = jest.spyOn(Cookies, "remove");

    createVue({
      template: `<div></div>`,
      setup() {
        const { cookie, setCookie, removeCookie } = useCookie(cookieName);

        expect(spy).not.toHaveBeenCalled();

        setCookie("updated");
        expect(cookie.value).toBe("updated");
        expect(cookie.value).toBe(Cookies.get(cookieName));

        removeCookie();
        expect(spy).toHaveBeenCalled();
        expect(cookie.value).toBeUndefined();
        expect(Cookies.get(cookieName)).toBeUndefined();

        return {
          cookie,
        };
      },
    }).mount();

    // cleanup
    spy.mockRestore();
  });

  it("should remove the cookie on cookie value is undefined or null", () => {
    const spy = jest.spyOn(Cookies, "remove");

    createVue({
      template: `<div></div>`,
      setup() {
        const { cookie, setCookie } = useCookie(cookieName);

        expect(spy).not.toHaveBeenCalled();

        setCookie("updated");
        expect(cookie.value).toBe("updated");
        expect(cookie.value).toBe(Cookies.get(cookieName));

        cookie.value = void 0;
        let unwatch = watch(cookie, () => {
          expect(spy).toHaveBeenCalledTimes(1);
          expect(cookie.value).toBeUndefined();
          expect(Cookies.get(cookieName)).toBeUndefined();
        });
        unwatch();

        setCookie("updated1");
        expect(cookie.value).toBe("updated1");
        expect(cookie.value).toBe(Cookies.get(cookieName));

        cookie.value = null;
        unwatch = watch(cookie, () => {
          expect(spy).toHaveBeenCalledTimes(2);
          expect(cookie.value).toBeUndefined();
          expect(Cookies.get(cookieName)).toBeUndefined();
        });
        unwatch();

        return {
          cookie,
        };
      },
    }).mount();

    // cleanup
    spy.mockRestore();
  });
});
