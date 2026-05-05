import type { FilterTaskSchemaInfertype, TaskSchemaInfertype } from "@/schema";
import type { RefObject } from "react";
import { createContext } from "react";
import type { IHandles } from "react-native-modalize/lib/options";
import type { UseTaskListInterface, UseModalModeInterface } from "./list-hook";
import type { UseFormReturn } from "react-hook-form";
import type { UseModalizeType } from "@/@types/use-modalize.type";

export type ModalModeType = "create" | "edit";

export type ListType = Pick<TaskSchemaInfertype, "title" | "description" | "flag" | "limitDate" | "limitTime"> & {
  at_updated: Date;
  id: string;
};

export type ListContextType = UseTaskListInterface &
  UseModalModeInterface & {
    formModalizeValues: UseModalizeType;
    multiSelectModalizeValues: UseModalizeType;
  };

export const ListContext = createContext<ListContextType>({
  // lista primária
  list: [],
  updateList: () => null,

  // itens da lista selecionados
  selectedList: [],
  updateSelectedList: () => null,

  // modal de formulario
  formModalizeValues: {
    close: () => null,
    open: () => null,
    ref: {} as RefObject<IHandles>,
  },
  multiSelectModalizeValues: {
    close: () => null,
    open: () => null,
    ref: {} as RefObject<IHandles>,
  },
  // modal mode
  modeModal: "create",
  updateModalMode: () => null,

  // search / pesquisa
  filterdList: [],
  filterMethods: {} as UseFormReturn<FilterTaskSchemaInfertype>,
});
