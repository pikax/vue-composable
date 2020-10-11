import type {
  CustomInspectorOptions,
  CustomInspectorNode,
  CustomInspectorState,
} from "@vue/devtools-api";
import { reactive, Ref, computed, toRaw, watch, ref } from "../api";
import { RefTyped } from "../utils";
import { getDevtools } from "./api";

export interface DevtoolInspectorNode extends CustomInspectorNode {
  children: DevtoolInspectorNode[];

  state: CustomInspectorState;
}
export interface DevtoolInspectorNodeStateValue {
  editable: boolean;
  objectType: string;
  type: string;
  value: any;
}

export interface DevtoolInspectorNodeState {
  [key: string]: RefTyped<DevtoolInspectorNodeStateValue>[];
  props: RefTyped<DevtoolInspectorNodeStateValue>[];
  undefined: RefTyped<DevtoolInspectorNodeStateValue>[];
  computed: RefTyped<DevtoolInspectorNodeStateValue>[];
  "register module": RefTyped<DevtoolInspectorNodeStateValue>[];
  "unregister module": RefTyped<DevtoolInspectorNodeStateValue>[];
  setup: RefTyped<DevtoolInspectorNodeStateValue>[];
  state: RefTyped<DevtoolInspectorNodeStateValue>[];
  getters: RefTyped<DevtoolInspectorNodeStateValue>[];
  mutation: RefTyped<DevtoolInspectorNodeStateValue>[];
  "vuex bindings": RefTyped<DevtoolInspectorNodeStateValue>[];
  $refs: RefTyped<DevtoolInspectorNodeStateValue>[];
  $attrs: RefTyped<DevtoolInspectorNodeStateValue>[];
}

export type DevtoolsInspectorNodeFilter = (
  search: string,
  nodes: DevtoolInspectorNode[]
) => DevtoolInspectorNode[];
export type DevtoolsInspectorStateFilter = (
  search: string,
  state: CustomInspectorState
) => CustomInspectorState;

export function useDevtoolsInspector(
  options: CustomInspectorOptions & {
    nodeFilter?: DevtoolsInspectorNodeFilter;
    stateFilter?: DevtoolsInspectorStateFilter;
  },
  nodeList: DevtoolInspectorNode[] = []
): { nodes: Ref<DevtoolInspectorNode[]> } {
  const api = getDevtools();
  const nodes: Ref<DevtoolInspectorNode[]> = ref(nodeList) as any;

  const byId = computed(() => {
    if (!nodes.value) return new Map<string, DevtoolInspectorNode>();

    const r = toRaw(nodes.value);
    const m = new Map<string, DevtoolInspectorNode>();
    for (const i of r) {
      m.set(i.id, i);
    }
    return m;
  });

  if (api) {
    const id = options.id;
    api.addInspector(options);

    // api.on.getInspectorState();

    api.on.getInspectorTree((payload) => {
      if (payload.inspectorId != id) return;
      if (!nodes.value) return;
      const filter = payload.filter;
      let m = toRaw(nodes.value);
      if (payload.filter) {
        if (options.nodeFilter) {
          m = options.nodeFilter(payload.filter, m);
        } else {
          // TODO better filtering, only currently filtering root nodes
          m = m.filter(
            (x) => x.id.indexOf(filter) >= 0 || x.label.indexOf(filter) >= 0
          );
        }
      }
      payload.rootNodes = m;
    });

    api.on.getInspectorState((payload) => {
      if (payload.inspectorId != id) return;

      const node = byId.value.get(payload.nodeId);
      if (node) {
        const s = reactive(node.state); // unwrap
        payload.state = options.stateFilter ? options.stateFilter("", s) : s;
      }
    });

    watch(
      nodes,
      () => {
        api.sendInspectorTree(id);
        api.sendInspectorState(id);
      },
      {
        immediate: true,
        deep: true,
      }
    );
  }

  return {
    nodes,
  };
}
