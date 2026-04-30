import { createContext } from "react";

export interface ListContextType {
  handle: () => void;
}

export const ListContext = createContext<ListContextType>({
  handle: () => null,
});