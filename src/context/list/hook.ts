import { useContext } from "react";
import { ListContext, ListContextType } from "./context";

export function useListProvider(): ListContextType {
    return useContext(ListContext)
}