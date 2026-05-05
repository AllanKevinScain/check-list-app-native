import { Modalize } from "react-native-modalize";
import { Dimensions, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { DatepickerRHF, TextfieldRHF } from "@/components";
import { style } from "./style";
import { themes } from "@/global/themes";
import { useFormContext } from "react-hook-form";
import uuid from "react-native-uuid";

import { type TaskSchemaInfertype } from "@/schema";
import { FlagField } from "./flag-field";
import { useItemAsyncStorage } from "@/hooks";
import { TASK_LIST_KEY } from "@/constants/keys";

import { defaultValues } from "../provider";
import { useListProvider, type ListType } from "@/context/list";
import type { UseModalizeType } from "@/@types/use-modalize.type";

interface FormModalProps extends UseModalizeType {
  mode: "create" | "edit";
}

export function FormModal(props: FormModalProps) {
  const { close, ref, mode = "create" } = props;

  const { control, handleSubmit, setValue, reset } = useFormContext<TaskSchemaInfertype>();
  const { fieldArrayMethods } = useListProvider();
  const { append, update, fields } = fieldArrayMethods;

  const { addItem, editItem } = useItemAsyncStorage(TASK_LIST_KEY);

  async function onCreate(data: ListType) {
    try {
      await addItem(data);
      append(data);
    } catch (error) {
      console.log("🚀 ~ create item error", error);
    } finally {
      close();
      reset(defaultValues);
    }
  }
  async function onEdit(data: ListType) {
    try {
      await editItem(data.id, data);
      const index = fields.findIndex((f) => f.id === data.id);
      if (index !== -1) {
        update(index, data);
      }
    } catch (error) {
      console.log("🚀 ~ edit item error", error);
    } finally {
      close();
      reset(defaultValues);
    }
  }

  async function onSubmit(data: TaskSchemaInfertype) {
    const formatedData = {
      ...data,
      id: mode === "create" ? (uuid.v4() as string) : data.id!,
      at_updated: new Date(),
    };

    if (mode === "edit") {
      await onEdit(formatedData);
    } else {
      await onCreate(formatedData);
    }
  }

  return (
    <Modalize ref={ref} avoidKeyboardLikeIOS modalHeight={Dimensions.get("window").height / 1.6}>
      <KeyboardAvoidingView style={style.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={style.header}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <AntDesign name="check" size={30} color={themes.colors.black} />
          </TouchableOpacity>
          <Text style={style.title}>Register task</Text>
          <TouchableOpacity onPress={() => close()}>
            <MaterialIcons name="close" size={30} color={themes.colors.black} />
          </TouchableOpacity>
        </View>

        <View style={style.formContainer}>
          <TextfieldRHF
            control={control}
            name="title"
            label="Title:"
            labelStyle={style.inputLabel}
            placeholder="Digite o título da tarefa"
          />
          <TextfieldRHF
            control={control}
            name="description"
            label="Description:"
            labelStyle={style.inputLabel}
            containerStyle={{ height: 100, borderRadius: 20 }}
            multiline
            numberOfLines={5}
            placeholder="Sobre o que é a tarefa?"
          />
          <View style={style.containerRangerDate}>
            <DatepickerRHF
              control={control}
              name="limitDate"
              label="Limit date:"
              labelStyle={style.inputLabel}
              containerStyle={{ width: 200 }}
              mode="date"
            />
            <DatepickerRHF
              control={control}
              name="limitTime"
              label="Limit time:"
              labelStyle={style.inputLabel}
              containerStyle={{ width: 120 }}
              mode="time"
            />
          </View>
          <FlagField control={control} setValue={setValue} />
        </View>
      </KeyboardAvoidingView>
    </Modalize>
  );
}
