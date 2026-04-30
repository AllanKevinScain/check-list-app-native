import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Ball } from "../ball";
import { Flag } from "@/components";

export type ItemListType = {
  item: number;
  title: string;
  description: string;
  flag: "urgente" | "opcional";
};

export function ItemList(props: ItemListType) {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.secondaryContainer}>
        <Ball />
        <View>
          <Text style={style.title}>{props.title}</Text>
          <Text style={style.description}>{props.description}</Text>
        </View>
      </View>
      <Flag caption={props.flag} />
    </TouchableOpacity>
  );
}
