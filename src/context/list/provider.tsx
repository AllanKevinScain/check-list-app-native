import { useCallback, useEffect, useState } from "react";
import type { ListType, ModalModeType } from "./context";
import { ListContext } from "./context";
import { useModalize } from "react-native-modalize";
import { useAsyncStorage } from "@/hooks";
import { TASK_LIST_KEY } from "@/constants/keys";

export function ListProvider({ children }: { children: React.ReactNode }) {
  const modalizeValues = useModalize();
  const { getItem } = useAsyncStorage();

  const [list, setList] = useState<ListType[]>([]);
  const [modeModal, setMode] = useState<ModalModeType>("create");

  const updateList = useCallback((data: ListType[]) => {
    setList(data);
  }, []);

  function updateModalMode(mode: ModalModeType) {
    setMode(mode);
  }

  useEffect(() => {
    async function load() {
      const items = (await getItem(TASK_LIST_KEY)) as ListType[];
      updateList(items || []);
    }
    load();
  }, [getItem, updateList]);

  return (
    <ListContext.Provider value={{ list, updateList, updateModalMode, modeModal, ...modalizeValues }}>
      {children}
    </ListContext.Provider>
  );
}
