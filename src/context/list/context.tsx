import { createContext } from "react";

export interface ListContextType {
  open: boolean
  handle: () => void;
}

export const ListContext = createContext<ListContextType>({
  handle: () => null,
  open: false
});