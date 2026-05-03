import { Modalize } from "react-native-modalize";
import { Dimensions, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { DatepickerRHF, Flag, TextfieldRHF } from "@/components";
import { style } from "./style";
import { themes } from "@/global/themes";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { taskSchema, type TaskSchemaInfertype } from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";

interface ModalProps {
  ref: React.RefObject<Modalize>;
  close: () => void;
}

type FlagsType = {
  caption: "urgente" | "opcional";
  color: string;
};

const flags: FlagsType[] = [
  { caption: "urgente", color: themes.colors.error },
  { caption: "opcional", color: themes.colors.secondary },
];

export function Modal(props: ModalProps) {
  const { close, ref } = props;

  const { control, handleSubmit } = useForm<TaskSchemaInfertype>({
    resolver: yupResolver(taskSchema) as any,
    defaultValues: {
      title: "",
      description: "",
      limitTime: new Date(),
      limitDate: new Date(),
    },
  });

  function onSubmit(data: TaskSchemaInfertype) {
    const formatedData = { id: uuid(), ...data };
    console.log("🚀 ~ onSubmit ~ formatedData:", formatedData);
  }

  return (
    <Modalize
      ref={ref}
      adjustToContentHeight={true}
      childrenStyle={{
        height: Dimensions.get("window").height / 1.6,
      }}>
      <KeyboardAvoidingView style={style.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={style.header}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <AntDesign name="check" size={30} color={themes.colors.black} />
          </TouchableOpacity>
          <Text style={style.title}>Criar Tarfea</Text>
          <TouchableOpacity onPress={close}>
            <MaterialIcons name="close" size={30} color={themes.colors.black} />
          </TouchableOpacity>
        </View>

        <View style={style.formContainer}>
          <TextfieldRHF
            control={control}
            name="title"
            label="Titulo:"
            labelStyle={style.inputLabel}
            placeholder="Digite o título da tarefa"
          />
          <TextfieldRHF
            control={control}
            name="description"
            label="Descrição:"
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
              label="Tempo limite:"
              labelStyle={style.inputLabel}
              containerStyle={{ width: 200 }}
              mode="date"
            />
            <DatepickerRHF
              control={control}
              name="limitTime"
              label="Hora limite:"
              labelStyle={style.inputLabel}
              containerStyle={{ width: 120 }}
              mode="time"
            />
          </View>
          <View>
            <Text style={style.textFlags}>Flags:</Text>
            <View style={style.containerFlags}>
              {flags.map((flag) => {
                return (
                  <TouchableOpacity key={flag.caption}>
                    <Flag {...flag} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modalize>
  );
}
