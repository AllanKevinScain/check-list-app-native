import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Modalize } from "react-native-modalize";
import { themes } from "@/global/themes";
import type { UseModalizeType } from "@/@types/use-modalize.type";

type MiltiSelectModalProps = UseModalizeType & {
  updateSelectedList: () => void;
};

export function MiltiSelectModal(props: MiltiSelectModalProps) {
  const { ref, close, updateSelectedList } = props;

  return (
    <Modalize ref={ref} modalHeight={Dimensions.get("window").height / 1.1} avoidKeyboardLikeIOS>
      <KeyboardAvoidingView style={style.modalContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={style.modalHeader}>
          <TouchableOpacity onPress={() => close()}>
            <MaterialIcons name="close" size={30} color={themes.colors.black} />
          </TouchableOpacity>
        </View>
        <View style={style.itemsContainer}>
          <TouchableOpacity style={style.item} onPress={updateSelectedList}>
            <Text style={style.textItem}>Selecionar todos</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modalize>
  );
}
