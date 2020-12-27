import { ref, Ref } from "../api";
import { isClient } from "../utils";

export function useClipboard() {
  const supported = isClient && "clipboard" in navigator;
  const clipboardData: Ref = ref("");

  if (supported) {
    window.addEventListener("copy", async () => {
      clipboardData.value = await navigator.clipboard.readText();
    });
  }

  function write(data: any) {
    clipboardData.value = data;
    return navigator.clipboard.writeText(data);
  }

  async function read() {
    await navigator.clipboard.readText();
  }

  return {
    clipboardData,
    write,
    read,
  };
}
