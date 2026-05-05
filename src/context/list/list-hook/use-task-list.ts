import { useCallback, useMemo, useState } from "react";
import type { ListType } from "../context";
import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form";
import { useForm, useWatch, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FilterTaskSchemaInfertype } from "@/schema";
import { filterTaskSchema } from "@/schema";

export interface UseTaskListInterface {
  selectedList: string[];
  updateSelectedList: (data: string[]) => void;
  list: ListType[];
  updateList: (data: ListType[]) => void;
  filterdList: ListType[];
  filterMethods: UseFormReturn<FilterTaskSchemaInfertype>;
  listMethods: UseFormReturn<{ tasks: ListType[] }>;
  fieldArrayMethods: UseFieldArrayReturn<{ tasks: ListType[] }, "tasks", "key">;
}

export function useTaskList(): UseTaskListInterface {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const listMethods = useForm<{ tasks: ListType[] }>({
    defaultValues: { tasks: [] },
  });

  const fieldArrayMethods = useFieldArray({
    control: listMethods.control,
    name: "tasks",
    keyName: "key",
  });

  const { fields: list, replace } = fieldArrayMethods;

  const filterMethods = useForm<FilterTaskSchemaInfertype>({
    resolver: yupResolver(filterTaskSchema) as any,
    defaultValues: { search: undefined },
  });

  const watchedSearch = useWatch({
    control: filterMethods.control,
    name: "search",
  });

  const updateList = useCallback(
    (data: ListType[]) => {
      replace(data);
    },
    [replace],
  );

  const updateSelectedList = useCallback(
    (ids: string[]) => {
      if (ids.length === 1) {
        const id = ids[0];
        return setSelectedList((s) => {
          if (s.includes(id)) return s.filter((i) => i !== id);
          return [...s, id];
        });
      }

      if (list.length === selectedList.length) return setSelectedList([]);
      if (ids.length > 1) return setSelectedList(ids);
    },
    [list.length, selectedList.length],
  );

  const filterdList = useMemo(() => {
    const search = watchedSearch?.toLowerCase();

    if (search) {
      return list.filter((i) => {
        const title = i.title.toLowerCase();
        const description = i.description?.toLowerCase();
        if (title.includes(search) || description?.includes(search)) {
          return i;
        }
      });
    }

    return list;
  }, [list, watchedSearch]);

  return {
    selectedList,
    updateSelectedList,
    list: list as ListType[],
    filterdList: filterdList as ListType[],
    updateList,
    filterMethods,
    listMethods,
    fieldArrayMethods,
  };
}
