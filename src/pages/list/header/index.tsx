import { TextfieldRHF } from "@/components";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { useListProvider } from "@/context";

export function Header() {
  const { multiSelectModalizeValues, listMethods } = useListProvider();
  const { open } = multiSelectModalizeValues;
  return (
    <View style={style.header}>
      <TouchableOpacity style={style.menuContainer} onPress={() => open()}>
        <FontAwesome5 name="ellipsis-v" size={24} />
      </TouchableOpacity>

      <Text style={style.welcomeLabel}>
        Bom dia, <Text style={{ fontWeight: "bold" }}>Allan S.</Text>
      </Text>
      <View style={style.inputBox}>
        <TextfieldRHF
          control={listMethods.control}
          name="search"
          IconLeft={MaterialIcons}
          iconLeftName="search"
          placeholder="Search"
        />
      </View>
    </View>
  );
}
