import { Text, View } from "react-native";
import { style } from "./style";
import { Ball } from "../ball";
import { Flag, Swipeable } from "@/components";
import { themes } from "@/global/themes";
import { formatedDateToBR } from "@/utils";
import { useFormContext } from "react-hook-form";
import type { TaskSchemaInfertype } from "@/schema";
import { useItemAsyncStorage } from "@/hooks";
import { TASK_LIST_KEY } from "@/constants/keys";
import type { ListType } from "@/context/list";

export type ItemListType = ListType & {
  openModal: () => void;
  updateList: (data: ListType[]) => void;
};

export function ItemList(props: ItemListType) {
  const { openModal, updateList, ...item } = props;
  const { id, title, timeLimit, flag, at_updated } = item;

  const { removeItem } = useItemAsyncStorage(TASK_LIST_KEY);

  const { reset } = useFormContext<TaskSchemaInfertype>();

  return (
    <Swipeable
      styleContainer={style.container}
      onRemove={async () => {
        const items = await removeItem(id);
        updateList(items);
      }}
      onUpdated={() => {
        reset(item);
        openModal();
      }}>
      <View style={style.secondaryContainer}>
        <Ball />
        <View>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{formatedDateToBR(timeLimit).replace(" ", " - ")}</Text>
          <Text style={style.description}>Create at: {formatedDateToBR(at_updated).replace(" ", " - ")}</Text>
        </View>
      </View>
      <Flag caption={flag} color={flag === "urgent" ? themes.colors.error : themes.colors.secondary} />
    </Swipeable>
  );
}
