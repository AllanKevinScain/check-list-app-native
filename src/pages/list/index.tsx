import { FlatList, View } from "react-native";
import { style } from "./style";
import { EmptyList } from "@/components";
import { ItemList } from "./item-list";
import { defaultValues, useListProvider } from "@/context";
import { useFormContext } from "react-hook-form";
import type { TaskSchemaInfertype } from "@/schema";
import { Header } from "./header";

export function ListPage() {
  const { reset } = useFormContext<TaskSchemaInfertype>();
  const { list, filterdList, updateModalMode, filterMethods, formModalizeValues } = useListProvider();
  const { open } = formModalizeValues;

  return (
    <View style={style.container}>
      <Header />

      <FlatList
        data={filterdList}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemList
            {...item}
            openModal={() => {
              updateModalMode("edit");
              open();
            }}
          />
        )}
        ListEmptyComponent={() => {
          if (list.length === 0) {
            return (
              <EmptyList
                buttonContent="Add item"
                onButtonPress={() => {
                  updateModalMode("create");
                  reset(defaultValues);
                  open();
                }}
              />
            );
          }

          return (
            <EmptyList
              message="Any item founded"
              buttonContent="Clear search"
              onButtonPress={() => {
                filterMethods.reset({ search: "" });
              }}
            />
          );
        }}
      />
    </View>
  );
}
