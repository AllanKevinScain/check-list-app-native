import { useEffect } from "react";
import type { ListType } from "./context";
import { ListContext } from "./context";
import { useModalize } from "react-native-modalize";
import { useAsyncStorage } from "@/hooks";
import { TASK_LIST_KEY } from "@/constants/keys";
import { useTaskList, useModalMode } from "./list-hook";
import { FormProvider } from "react-hook-form";

export function ListProvider({ children }: { children: React.ReactNode }) {
  const formModalizeValues = useModalize();
  const multiSelectModalizeValues = useModalize();
  const { getItem } = useAsyncStorage();
  const modeModalState = useModalMode();
  const listState = useTaskList();
  const { updateList, listMethods } = listState;

  useEffect(() => {
    async function load() {
      const items = (await getItem(TASK_LIST_KEY)) as ListType[];
      updateList(items || []);
    }
    load();
  }, [getItem, updateList]);

  return (
    <ListContext.Provider value={{ ...listState, ...modeModalState, formModalizeValues, multiSelectModalizeValues }}>
      <FormProvider {...listMethods}>{children}</FormProvider>
    </ListContext.Provider>
  );
}
