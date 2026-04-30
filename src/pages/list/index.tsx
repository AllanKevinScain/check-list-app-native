import { FlatList, Text, View } from "react-native";
import { style } from "./style";
import { Textfield } from "@/components";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import type { ItemListType } from "./item-list";
import { ItemList } from "./item-list";

const initialList: ItemListType[] = [
  {
    item: 1,
    title: "Teste 1",
    description: "Descrição 1",
    flag: "urgente",
  },
  {
    item: 2,
    title: "Teste 2",
    description: "Descrição 2",
    flag: "urgente",
  },
  {
    item: 3,
    title: "Teste 3",
    description: "Descrição 3",
    flag: "urgente",
  },
];

export function ListPage() {
  const [list] = useState<ItemListType[]>(initialList);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.welcomeLabel}>
          Bom dia, <Text style={{ fontWeight: "bold" }}>Allan S.</Text>
        </Text>
        <View style={style.inputBox}>
          <Textfield IconLeft={MaterialIcons} iconLeftName="search" />
        </View>
      </View>

      <FlatList
        data={list}
        style={style.flatList}
        keyExtractor={({ item }) => item.toString()}
        renderItem={({ item }) => <ItemList {...item} />}
      />
    </View>
  );
}
