import { ref, Ref, watch } from "../api";
import { debounce } from "../debounce";
import { useEvent } from "../event";
import { isClient, isString } from "../utils";

export interface UseClipboard {
  supported: boolean;
  text: Ref<string | undefined>;

  writeText(text: string): Promise<void>;
  readText(): Promise<string | undefined>;
}

export function useClipboard(): UseClipboard {
  const supported = isClient && "clipboard" in navigator;
  const text = ref<string>();

  let writeText = (data: string) => {
    text.value = data;
    if (!supported) return Promise.resolve();
    // TOOD check for permissions
    return navigator.clipboard.writeText(data);
  };

  let readText: () => Promise<string | undefined> = () =>
    Promise.resolve(undefined);

  if (supported) {
    let updating = false;
    const update = () => readText().then((x) => (text.value = x));
    (["copy", "cut", "focus"] as const).map((event) =>
      useEvent(window, event, () => update())
    );

    readText = () =>
      navigator.clipboard.readText().then((x) => {
        try {
          updating = true;
          return (text.value = x);
        } finally {
          // case of a sync watch it might throw
          updating = false;
        }
      });

    watch(
      text,
      debounce((s: string) => {
        if (updating || !isString(s)) return;
        writeText(s);
      }, 100)
    );
  }

  return {
    supported,
    text,

    writeText,
    readText,
  };
}
