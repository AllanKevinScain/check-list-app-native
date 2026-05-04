import type { TaskSchemaInfertype } from "@/schema";
import type { RefObject } from "react";
import { createContext } from "react";
import type { IHandles } from "react-native-modalize/lib/options";
import type { UseFilterListInterface, UseModalModeInterface } from "./list-hook";

export type ModalModeType = "create" | "edit";

type UseModalizeType = {
  ref: React.RefObject<IHandles>;
  open: (dest?: "top" | "default" | undefined) => void;
  close: (dest?: "default" | "alwaysOpen" | undefined) => void;
};

export type ListType = Pick<TaskSchemaInfertype, "title" | "description" | "flag"> & {
  timeLimit: Date;
  at_updated: Date;
  id: string;
};

export type ListContextType = UseModalizeType & UseFilterListInterface & UseModalModeInterface;

export const ListContext = createContext<ListContextType>({
  list: [],
  filteredList: [],
  updateList: () => null,
  updateFilteredList: () => null,
  close: () => null,
  open: () => null,
  ref: {} as RefObject<IHandles>,
  modeModal: "create",
  updateModalMode: () => null,
});
