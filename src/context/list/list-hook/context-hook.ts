import { useContext } from "react";
import type { ListContextType } from "../context";
import { ListContext } from "../context";

export function useListProvider(): ListContextType {
  return useContext(ListContext);
}
