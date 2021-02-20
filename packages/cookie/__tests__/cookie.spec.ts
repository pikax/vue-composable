import { useCookie } from "../src";
import Cookies from "js-cookie";
import { createVue, nextTick } from "./utils";

type CoreTypes = typeof import("../src");

describe("cookie", () => {
  const cookieName: string = "some-cookie";

  const buildUseCookie = () => {
    let _cookie: ReturnType<CoreTypes["useCookie"]> = undefined as any;
    createVue({
      template: `<div></div>`,
      setup() {
        _cookie = useCookie(cookieName);
        return;
      },
    }).mount();

    return _cookie;
  };

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

    const { cookie, setCookie } = buildUseCookie();

    expect(spy).not.toHaveBeenCalled();
    expect(cookie.value).toBeUndefined();

    setCookie("updated");
    expect(cookie.value).toBe("updated");
    expect(cookie.value).toBe(Cookies.get(cookieName));
    expect(spy).toHaveBeenCalledTimes(1);

    setCookie("update again", { path: "/" });
    expect(spy).toHaveBeenCalledTimes(2);
    expect(cookie.value).toBe("update again");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    // cleanup
    spy.mockRestore();
    Cookies.remove(cookieName, { path: "/" });
  });

  it("should update the cookie on cookie value changed", async () => {
    const spy = jest.spyOn(Cookies, "set");

    const { cookie } = buildUseCookie();

    expect(spy).not.toHaveBeenCalled();

    cookie.value = "updated";
    await nextTick();
    expect(spy).toHaveBeenCalled();
    expect(cookie.value).toBe("updated");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    cookie.value = "updated";
    await nextTick();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(cookie.value).toBe("updated");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    cookie.value = "updated1";
    await nextTick();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(cookie.value).toBe("updated1");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    // cleanup
    spy.mockRestore();
    Cookies.remove(cookieName);
  });

  it("should remove the cookie on call removeCookie", () => {
    const spy = jest.spyOn(Cookies, "remove");

    const { cookie, setCookie, removeCookie } = buildUseCookie();

    expect(spy).not.toHaveBeenCalled();

    setCookie("updated");
    expect(cookie.value).toBe("updated");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    removeCookie();
    expect(spy).toHaveBeenCalled();
    expect(cookie.value).toBeUndefined();
    expect(Cookies.get(cookieName)).toBeUndefined();

    // cleanup
    spy.mockRestore();
  });

  it("should remove the cookie on cookie value is undefined or null", async () => {
    const spy = jest.spyOn(Cookies, "remove");

    const { cookie, setCookie } = buildUseCookie();

    expect(spy).not.toHaveBeenCalled();

    setCookie("updated");
    expect(spy).not.toHaveBeenCalled();
    expect(cookie.value).toBe("updated");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    cookie.value = void 0;
    await nextTick();
    expect(spy).toHaveBeenCalled();
    expect(cookie.value).toBeUndefined();
    expect(Cookies.get(cookieName)).toBeUndefined();

    setCookie("updated");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(cookie.value).toBe("updated");
    expect(cookie.value).toBe(Cookies.get(cookieName));

    cookie.value = null;
    await nextTick();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(cookie.value).toBeNull();
    expect(Cookies.get(cookieName)).toBeUndefined();

    // cleanup
    spy.mockRestore();
  });
});
