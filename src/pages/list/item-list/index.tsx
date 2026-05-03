import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Ball } from "../ball";
import { Flag } from "@/components";
import { themes } from "@/global/themes";

export type ItemListType = {
  id: string;
  title: string;
  description: string;
  flag: "urgente" | "opcional";
};

export function ItemList(props: ItemListType) {
  const { title, description, flag } = props;
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.secondaryContainer}>
        <Ball />
        <View>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{description}</Text>
        </View>
      </View>
      <Flag caption={flag} color={flag === "urgente" ? themes.colors.error : themes.colors.secondary} />
    </TouchableOpacity>
  );
}
