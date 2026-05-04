import { FlatList, Text, View } from "react-native";
import { style } from "./style";
import { EmptyList, Textfield } from "@/components";
import { MaterialIcons } from "@expo/vector-icons";
import { ItemList } from "./item-list";
import { defaultValues, useListProvider } from "@/context";
import { useFormContext } from "react-hook-form";
import type { TaskSchemaInfertype } from "@/schema";

export function ListPage() {
  const { reset } = useFormContext<TaskSchemaInfertype>();
  const { open, list, updateList, updateModalMode } = useListProvider();

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.welcomeLabel}>
          Bom dia, <Text style={{ fontWeight: "bold" }}>Allan S.</Text>
        </Text>
        <View style={style.inputBox}>
          <Textfield IconLeft={MaterialIcons} iconLeftName="search" placeholder="Search" />
        </View>
      </View>

      <FlatList
        data={list}
        style={style.flatList}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemList
            {...item}
            openModal={() => {
              updateModalMode("edit");
              open();
            }}
            updateList={updateList}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList
            buttonContent="Add item"
            onButtonPress={() => {
              updateModalMode("create");
              reset(defaultValues);
              open();
            }}
          />
        )}
      />
    </View>
  );
}
