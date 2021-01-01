import { ref, Ref, watch } from "../api";
import { debounce } from "../debounce";
import { useEvent } from "../event";
import { isClient, isString } from "../utils";

export interface UseClipboard {
  supported: boolean;
  text: Ref<string | undefined>;

  write(data: string): Promise<void>;
  read(): Promise<string | undefined>;
}

export function useClipboard(): UseClipboard {
  const supported = isClient && "clipboard" in navigator;
  const text = ref<string>();

  let write = (data: string) => {
    text.value = data;
    if (!supported) return Promise.resolve();
    // TOOD check for permissions
    return navigator.clipboard.writeText(data);
  };

  let read: () => Promise<string | undefined> = () =>
    Promise.resolve(undefined);

  if (supported) {
    let updating = false;
    const update = () => read().then((x) => (text.value = x));
    (["copy", "cut", "focus"] as const).map((event) =>
      useEvent(window, event, () => update())
    );

    read = () =>
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
        write(s);
      }, 100)
    );
  }

  return {
    supported,
    text,

    write,
    read,
  };
}
