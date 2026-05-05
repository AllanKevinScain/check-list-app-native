import { Text, View } from "react-native";
import { style } from "./style";
import { Ball } from "../ball";
import { Flag, Swipeable } from "@/components";
import { formatedDateToBR } from "@/utils";
import { useFormContext } from "react-hook-form";
import type { TaskSchemaInfertype } from "@/schema";
import { useItemAsyncStorage } from "@/hooks";
import { TASK_LIST_KEY } from "@/constants/keys";
import { useListProvider, type ListType } from "@/context/list";

export type ItemListType = ListType & {
  openModal: () => void;
};

export function ItemList(props: ItemListType) {
  const { openModal, ...item } = props;
  const { id, title, limitDate, limitTime, flag, at_updated } = item;

  const { updateList, selectedList, updateSelectedList } = useListProvider();
  const { reset } = useFormContext<TaskSchemaInfertype>();

  const { removeItem } = useItemAsyncStorage(TASK_LIST_KEY);

  return (
    <View style={style.container}>
      <Ball selected={selectedList.includes(id)} onPress={() => updateSelectedList([id])} />
      <Swipeable
        styleContainer={style.swipeableContainer}
        onRemove={async () => {
          const items = await removeItem(id);
          updateList(items);
        }}
        onUpdated={() => {
          reset(item);
          openModal();
        }}>
        <View style={style.secondaryContainer}>
          <Text style={style.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={style.description}>
            {formatedDateToBR({ date: limitDate, time: limitTime }).replace(" ", " - ")}
          </Text>
          <Text style={style.description}>Create at: {formatedDateToBR({ date: at_updated }).replace(" ", " - ")}</Text>
        </View>
        <Flag caption={flag} disabled />
      </Swipeable>
    </View>
  );
}
