import type { TaskSchemaInfertype } from "@/schema";
import type { RefObject } from "react";
import { createContext } from "react";
import type { IHandles } from "react-native-modalize/lib/options";

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

export interface ListContextType extends UseModalizeType {
  list: ListType[];
  updateList: (data: ListType[]) => void;
  modeModal: ModalModeType;
  updateModalMode: (mode: ModalModeType) => void;
}

export const ListContext = createContext<ListContextType>({
  list: [],
  updateList: () => null,
  close: () => null,
  open: () => null,
  ref: {} as RefObject<IHandles>,
  modeModal: "create",
  updateModalMode: () => null,
});
