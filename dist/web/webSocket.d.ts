export declare function useWebSocket(url: string, protocols?: string | string[]): {
    ws: WebSocket;
    send: (data: string | ArrayBuffer | SharedArrayBuffer | Blob | ArrayBufferView) => void;
    messageEvent: import("@vue/composition-api").Ref<MessageEvent | null>;
    errorEvent: import("@vue/composition-api").Ref<Event | undefined>;
    data: import("@vue/composition-api").Ref<any>;
    isOpen: import("@vue/composition-api").Ref<boolean>;
    isClosed: import("@vue/composition-api").Ref<boolean>;
    errored: import("@vue/composition-api").Ref<boolean>;
};
