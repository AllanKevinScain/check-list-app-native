import { useEffect } from "react";
import type { ListType } from "./context";
import { ListContext } from "./context";
import { useModalize } from "react-native-modalize";
import { useAsyncStorage } from "@/hooks";
import { TASK_LIST_KEY } from "@/constants/keys";
import { useFilterList, useModalMode } from "./list-hook";

export function ListProvider({ children }: { children: React.ReactNode }) {
  const modalizeValues = useModalize();
  const { getItem } = useAsyncStorage();
  const modeModalState = useModalMode();
  const listState = useFilterList();
  const { updateList } = listState;

  useEffect(() => {
    async function load() {
      const items = (await getItem(TASK_LIST_KEY)) as ListType[];
      updateList(items || []);
    }
    load();
  }, [getItem, updateList]);

  return (
    <ListContext.Provider value={{ ...listState, ...modalizeValues, ...modeModalState }}>
      {children}
    </ListContext.Provider>
  );
}
