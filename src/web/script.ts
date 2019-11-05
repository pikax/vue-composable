import { ref, Ref } from "@vue/composition-api";
import { isString } from "../utils";

interface ScriptOptions {
  src: string;
  async?: boolean;
  defer?: boolean;
  module?: boolean;
}

interface ScriptReturn {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  success: Ref<boolean>;
}

export function useScript(opts: ScriptOptions): ScriptReturn;
export function useScript(name: string): ScriptReturn;
export function useScript(options: string | ScriptOptions): ScriptReturn {
  const loading = ref(true);
  const error = ref(false);
  const success = ref(false);

  const opts = isString(options) ? { src: options } : options;

  const script = document.createElement("script");
  script.async = opts.async || false;
  script.defer = opts.defer || false;
  if (opts.module) {
    script.type = "module";
  }

  script.addEventListener(
    "load",
    () => {
      loading.value = false;
      success.value = true;
      error.value = false;
    },
    { passive: true }
  );
  script.addEventListener(
    "error",
    () => {
      loading.value = false;
      success.value = false;
      error.value = true;
    },
    {
      passive: true
    }
  );
  script.src = opts.src;

  document.body.appendChild(script);

  return {
    loading,
    error,
    success
  };
}
