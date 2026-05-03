import type { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import type { ComponentProps, ElementType } from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "./styles";

type NameAntDesigneType = ComponentProps<typeof AntDesign>["name"];
type NameFontAwesomeType = ComponentProps<typeof FontAwesome>["name"];
type NameEntypoType = ComponentProps<typeof Entypo>["name"];

type IconNameType = NameAntDesigneType | NameFontAwesomeType | NameEntypoType;
type TabIconType = ElementType;

interface TabItemProps {
  Icon: TabIconType;
  iconName: IconNameType;
  onPress?: () => void;
  disabled?: boolean;
  iconSize?: number;
  isPrincipal?: boolean;
  isSelected?: boolean;
}

import { themes } from "@/global/themes";

export function TabItem(props: TabItemProps) {
  const { Icon, iconName, onPress, disabled = false, iconSize = 32, isPrincipal = false, isSelected = false } = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={style.container}>
      {isPrincipal && (
        <View style={style.principalContainer}>
          <Icon name={iconName} size={iconSize} color={themes.colors.white} />
        </View>
      )}
      {!isPrincipal && (
        <Icon 
          name={iconName} 
          size={iconSize} 
          color={isSelected ? themes.colors.primary : themes.colors.textSecondary} 
          style={style.icon} 
        />
      )}
    </TouchableOpacity>
  );
}
