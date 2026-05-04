import type { TaskSchemaInfertype } from "@/schema";
import { createContext } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { ListType } from "../list";

export interface FormTaskListContextType {
  methods: UseFormReturn<TaskSchemaInfertype>;
  updateList: (data: ListType[]) => void;
}

export const FormTaskListContext = createContext<FormTaskListContextType>({
  methods: {} as UseFormReturn<TaskSchemaInfertype>,
  updateList: () => null,
});
