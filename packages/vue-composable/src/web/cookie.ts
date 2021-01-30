import { ref, Ref, watch } from "../api";
import { isUndefined, isNull } from "../utils";
import Cookies from "js-cookie";

interface UseCookieReturn {
  cookie: Ref<string | undefined | null>;
  setCookie: (newValue: string, options?: Cookies.CookieAttributes) => void;
  removeCookie: (options?: Cookies.CookieAttributes) => void;
}

export function useCookie(
  key: string,
  defaultValue?: string,
  defaultOptions?: Cookies.CookieAttributes
): UseCookieReturn {
  let cookie: Ref<string | undefined | null> = ref(null);

  let value = Cookies.get(key);
  if (isUndefined(value)) {
    cookie.value = defaultValue;

    if (!isUndefined(defaultValue) && !isNull(defaultValue)) {
      Cookies.set(key, defaultValue, defaultOptions);
    }
  } else {
    cookie.value = value;
  }

  const setCookie = (newValue: string, options?: Cookies.CookieAttributes) => {
    cookie.value = newValue;
    Cookies.set(key, newValue, options);
  };

  const removeCookie = (options?: Cookies.CookieAttributes) => {
    cookie.value = undefined;
    Cookies.remove(key, options);
  };

  watch(cookie, (cookie, prevCookie) => {
    if (isUndefined(cookie) || isNull(cookie)) {
      removeCookie();
    } else if (cookie !== prevCookie) {
      setCookie(cookie);
    }
  });

  return {
    cookie,

    setCookie,
    removeCookie,
  };
}
