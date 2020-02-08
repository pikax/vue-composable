import { Ref, ref } from "@vue/composition-api";
import { RemoveEventFunction, useEvent } from "../event";
import { NO_OP, isClient, PASSIVE_EV } from "@vue-composable/core";

interface NetworkInformationEventMap {
  change: Event;
}

type NetworkInformationEffectiveType = "slow-2g" | "2g" | "3g" | "4g";
type NetworkInformationType =
  | "bluetooth"
  | "cellular"
  | "ethernet"
  | "mixed"
  | "none"
  | "other"
  | "unknown"
  | "wifi"
  | "wimax";

export interface NetworkInformation {
  readonly downlink: number;
  readonly downlinkMax: number;
  readonly effectiveType: NetworkInformationEffectiveType;
  readonly rtt: number;
  readonly saveData: Boolean;
  readonly type: NetworkInformationType;

  onchange: (this: NetworkInformation, ev: Event) => void;

  addEventListener<K extends keyof NetworkInformationEventMap>(
    type: K,
    listener: (
      this: NetworkInformation,
      ev: NetworkInformationEventMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof NetworkInformationEventMap>(
    type: K,
    listener: (
      this: NetworkInformation,
      ev: NetworkInformationEventMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

interface NetworkInformationReturn {
  readonly supported: boolean;

  /**
   * @description Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds
   */
  readonly downlink: Ref<number>;
  /**
   * @description Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.
   */
  readonly downlinkMax: Ref<number>;
  /**
   * @description Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.
   */
  readonly effectiveType: Ref<NetworkInformationEffectiveType>;
  /**
   * @description Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.
   */
  readonly rtt: Ref<number>;
  /**
   * @description Returns true if the user has set a reduced data usage option on the user agent.
   */
  readonly saveData: Ref<Boolean>;
  /**
   * @description Returns the type of connection a device is using to communicate with the network. It will be one of the following values:
   * @enum { NetworkInformationType}
   */
  readonly type: Ref<NetworkInformationType>;

  remove: RemoveEventFunction;
}

export function useNetworkInformation(): NetworkInformationReturn {
  const connection = isClient
    ? navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection
    : false;
  const supported = !!connection;
  const downlink = ref<number>(0);
  const downlinkMax = ref<number>(0);
  const effectiveType = ref<NetworkInformationEffectiveType>("unknown");
  const rtt = ref<number>(0);
  const saveData = ref<Boolean>(false);
  const type = ref<NetworkInformationType>("none");

  let handler = NO_OP;
  let remove = NO_OP;

  /* istanbul ignore else  */
  if (connection) {
    handler = () => {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    };

    remove = useEvent<NetworkInformation, NetworkInformationEventMap, "change">(
      connection,
      "change",
      handler,
      PASSIVE_EV
    );

    handler();
  } else {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn(
        "[navigator.connection] not found, networkInformation not available."
      );
    }
  }

  return {
    supported,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    saveData,
    type,

    remove
  };
}
