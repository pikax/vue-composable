import { Ref, ref, watch } from "./api";
import Cookies from "js-cookie";
import { isNull, isUndefined } from "vue-composable";

interface UseCookieReturn {
  cookie: Ref<string | undefined | null>;
  setCookie: (newValue: string, options?: Cookies.CookieAttributes) => void;
  removeCookie: (options?: Cookies.CookieAttributes) => void;
}

export function useCookie(
  key: string,
  defaultValue?: string,
  defaultOptions?: Cookies.CookieAttributes,
): UseCookieReturn {
  let cookie: Ref<string | undefined | null> = ref(null);
  let _options: Cookies.CookieAttributes | undefined;

  let value = Cookies.get(key);
  if (isUndefined(value)) {
    cookie.value = defaultValue;

    if (!isUndefined(defaultValue) && !isNull(defaultValue)) {
      Cookies.set(key, defaultValue, defaultOptions);
      _options = defaultOptions;
    }
  } else {
    cookie.value = value;
  }

  const setCookie = (newValue: string, options?: Cookies.CookieAttributes) => {
    cookie.value = newValue;
    _options = options;
    Cookies.set(key, cookie.value, _options);
  };

  const removeCookie = () => {
    cookie.value = undefined;
    Cookies.remove(key, _options);
  };

  watch(
    cookie,
    (cookie, prevCookie) => {
      if (isUndefined(cookie) || isNull(cookie)) {
        Cookies.remove(key, _options);
      } else if (cookie !== prevCookie) {
        Cookies.set(key, cookie, _options);
      }
    },
    {
      deep: true,
    },
  );

  return {
    cookie,

    setCookie,
    removeCookie,
  };
}
