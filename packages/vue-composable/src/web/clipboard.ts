import { Ref, ref, watch } from "../api";
import { debounce } from "../debounce";
import { useEvent } from "../event";
import { isClient, isString } from "../utils";

// TODO replace me with the node
// https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem
export interface ClipboardItem {
  new (input: { [contentType: string]: Blob }): ClipboardItem;
}

export interface UseClipboard {
  supported: boolean;
  text: Ref<string | undefined>;
  data: Ref<DataTransfer | undefined>;

  writeText(text: string): Promise<void>;
  readText(): Promise<string | undefined>;

  read(): Promise<DataTransfer | undefined>;
  write(items: ClipboardItem[]): Promise<void>;
}

export function useClipboard(): UseClipboard {
  const supported = isClient && "clipboard" in navigator;
  const text = ref<string>();
  const data = ref<DataTransfer>();

  const writeText = (data: string) => {
    text.value = data;
    if (!supported) return Promise.resolve();
    // TOOD check for permissions
    return navigator.clipboard.writeText(data);
  };

  const write = (data: ClipboardItem[]) => {
    if (!supported) return Promise.resolve();
    // TOOD check for permissions
    // @ts-ignore
    return navigator.clipboard.write(data);
  };

  let readText: () => Promise<string | undefined> = () =>
    Promise.resolve(undefined);

  // @ts-ignore
  let read: () => Promise<DataTransfer | undefined> = readText;

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

    // @ts-ignore this should work
    read = () => navigator.clipboard.read().then((x) => (data.value = x));

    watch(
      text,
      debounce((s: string) => {
        if (updating || !isString(s)) return;
        writeText(s);
      }, 100),
    );
  }

  return {
    supported,
    text,
    data,

    writeText,
    readText,

    write,
    read,
  };
}
