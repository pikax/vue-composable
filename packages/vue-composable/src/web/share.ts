import { ref, Ref } from "../api";
import { FALSE_OP, isClient } from "../utils";

declare global {
  interface NavigatorShareData {
    url: string;
    text: string;
    title: string;
  }

  interface Navigator {
    share: (data: Partial<NavigatorShareData>) => Promise<any>;
    canShare: (data: Partial<NavigatorShareData>) => boolean;
  }
}

interface ShareReturn {
  /**
   * If current device supports [Web Share API](https://w3c.github.io/web-share)
   * - [compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
   */
  supported: boolean;

  /**
   * Set to true if the content was shared
   */
  shared: Ref<boolean>;

  /**
   * Set to true if the user didn't share
   */
  cancelled: Ref<boolean>;

  /**
   * Share information with user
   */
  share: Navigator["share"];
  /**
   * Check if you can share with user
   */
  canShare: Navigator["canShare"];
}

/**
 * Invokes the native sharing mechanism of the device
 * [compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
 * @param data - if provided it will automatically try to share it
 */
export function useShare(data?: Partial<NavigatorShareData>): ShareReturn {
  const supported = isClient && "share" in navigator;

  let share: Navigator["share"] = () => Promise.resolve(false);
  let canShare: Navigator["canShare"] = FALSE_OP;
  let shared = ref(false);
  let cancelled = ref(false);

  if (supported) {
    share = data => {
      shared.value = false;
      cancelled.value = false;
      return navigator
        .share(data)
        .then(x => {
          shared.value = true;
          return x;
        })
        .catch(e => {
          shared.value = false;
          cancelled.value = true;
          return false;
        });
    };

    canShare = data => navigator.canShare(data);

    if (data) {
      if (canShare(data)) {
        share(data);
      }
    }
  }

  return {
    supported,

    share,
    canShare,
    shared,
    cancelled
  };
}
