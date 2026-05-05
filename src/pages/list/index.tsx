import { FlatList, View } from "react-native";
import { style } from "./style";
import { EmptyList } from "@/components";
import { ItemList } from "./item-list";
import { defaultValues, useListProvider } from "@/context";
import { useFormContext, useWatch } from "react-hook-form";
import type { TaskSchemaInfertype } from "@/schema";
import { Header } from "./header";
import { useMemo } from "react";

export function ListPage() {
  const { updateModalMode, formModalizeValues, fieldArrayMethods, listMethods } = useListProvider();
  const { reset } = useFormContext<TaskSchemaInfertype>();
  const { open } = formModalizeValues;
  const { fields } = fieldArrayMethods;

  const watchedSearch = useWatch({ control: listMethods.control, name: "search" });

  const filterdList = useMemo(() => {
    const search = watchedSearch?.toLowerCase();

    if (search) {
      return fields.filter((i) => {
        const title = i.title.toLowerCase();
        const description = i.description?.toLowerCase();
        if (title.includes(search) || description?.includes(search)) {
          return i;
        }
      });
    }

    return fields;
  }, [fields, watchedSearch]);

  return (
    <View style={style.container}>
      <Header />

      <FlatList
        data={filterdList}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemList
            {...item}
            key={item.id}
            openModal={() => {
              updateModalMode("edit");
              open();
            }}
          />
        )}
        ListEmptyComponent={() => {
          if (fields.length === 0) {
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
                listMethods.reset({ search: "" });
              }}
            />
          );
        }}
      />
    </View>
  );
}
