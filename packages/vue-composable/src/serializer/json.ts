import { RefTyped } from "../utils";
import { useSerializer } from "./serializer";

export function useJSON<T>(obj: RefTyped<T>) {
  return useSerializer<T>(obj, JSON);
}
