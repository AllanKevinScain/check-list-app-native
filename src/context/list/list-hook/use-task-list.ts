import { useCallback, useState } from "react";
import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form";
import { useForm, useFieldArray } from "react-hook-form";
import type { TaskListSchemaInfertype } from "@/schema";

export interface UseTaskListInterface {
  selectedList: string[];
  updateSelectedList: (data: string[]) => void;

  listMethods: UseFormReturn<TaskListSchemaInfertype>;
  fieldArrayMethods: UseFieldArrayReturn<TaskListSchemaInfertype, "tasks", "key">;
}

export function useTaskList(): UseTaskListInterface {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const listMethods = useForm<TaskListSchemaInfertype>({
    defaultValues: { tasks: [], search: undefined },
  });

  const fieldArrayMethods = useFieldArray({
    control: listMethods.control,
    name: "tasks",
    keyName: "key",
  });

  const updateSelectedList = useCallback(
    (ids: string[]) => {
      if (ids.length === 1) {
        const id = ids[0];
        return setSelectedList((s) => {
          if (s.includes(id)) return s.filter((i) => i !== id);
          return [...s, id];
        });
      }

      if (fieldArrayMethods.fields.length === selectedList.length) return setSelectedList([]);
      if (ids.length > 1) return setSelectedList(ids);
    },
    [fieldArrayMethods.fields.length, selectedList.length],
  );

  return {
    selectedList,
    updateSelectedList,
    listMethods,
    fieldArrayMethods,
  };
}
