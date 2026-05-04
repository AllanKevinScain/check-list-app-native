import { useCallback, useState } from "react";
import type { ListType } from "../context";

export interface UseFilterListInterface {
  filteredList: string[];
  updateFilteredList: (data: string) => void;
  list: ListType[];
  updateList: (data: ListType[]) => void;
}

export function useFilterList(): UseFilterListInterface {
  const [list, setList] = useState<ListType[]>([]);
  const [filteredList, setFilteredList] = useState<string[]>([]);

  const updateList = useCallback((data: ListType[]) => {
    setList(data);
  }, []);

  const updateFilteredList = useCallback((id: string) => {
    setFilteredList((s) => {
      if (s.includes(id)) return s.filter((i) => i !== id);
      return [...s, id];
    });
  }, []);

  return {
    filteredList,
    updateFilteredList,
    list,
    updateList,
  };
}
