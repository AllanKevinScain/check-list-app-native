import type { ListType } from "@/context/list";
import { useAsyncStorage } from "./use-async-storage";

export function useItemAsyncStorage(key: string) {
  const { getItem, editData, addData, removeData } = useAsyncStorage();

  async function addItem(data: ListType) {
    let items = ((await getItem(key)) as ListType[]) || [];

    if (items) items.push(data);
    await addData(key, items);

    return items;
  }

  async function editItem(id: string, data: ListType) {
    let items = ((await getItem(key)) as ListType[]) || [];

    if (items) {
      items = items.map((i) => {
        if (i.id === id) return data;
        return i;
      });
    }
    await editData(key, items);

    return items;
  }

  async function removeItem(id: string) {
    let items = ((await getItem(key)) as ListType[]) || [];

    if (items) items = items.filter((i) => i.id !== id);
    await editData(key, items);

    return items;
  }

  async function clear() {
    await removeData(key);
    return [];
  }

  return { addItem, editItem, removeItem, clear };
}
