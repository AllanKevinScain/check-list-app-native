import type { TaskSchemaInfertype } from "@/schema";
import { createContext } from "react";
import type { UseFormReturn } from "react-hook-form";

export interface FormTaskListContextType {
  methods: UseFormReturn<TaskSchemaInfertype>;
}

export const FormTaskListContext = createContext<FormTaskListContextType>({
  methods: {} as UseFormReturn<TaskSchemaInfertype>,
});
