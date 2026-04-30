import type { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import type { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { themes } from "@/global/themes";
import type { ComponentProps, ElementType } from "react";
import { useMemo } from "react";

type MaterialIconsType = ComponentProps<typeof MaterialIcons>;
type NameMaterialIconsType = Pick<MaterialIconsType, "name">;

type FontAwesomeType = ComponentProps<typeof FontAwesome>;
type NameFontAwesomeType = Pick<FontAwesomeType, "name">;

type OcticonsType = ComponentProps<typeof Octicons>;
type NameOcticonsType = Pick<OcticonsType, "name">;

type IconNameType = NameMaterialIconsType["name"] | NameFontAwesomeType["name"] | NameOcticonsType["name"];

export interface TextFieldProps extends TextInputProps {
  label?: string;
  IconLeft?: ElementType;
  iconLeftName?: IconNameType;
  IconRight?: ElementType;
  iconRightName?: IconNameType;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  messageError?: string;
  iconPress?: () => void;
}

export function Textfield(props: TextFieldProps) {
  const {
    value = "",
    onChangeText = () => null,
    label,
    IconLeft,
    iconLeftName,
    IconRight,
    iconRightName,
    iconPress,
    labelStyle,
    containerStyle,
    inputStyle,
    messageError,
    ...restInputProps
  } = props;

  const paddingInputWithIcon = useMemo(() => {
    if (IconLeft && IconRight) return 0;
    if (IconLeft || IconRight) return 10;

    return 20;
  }, [IconLeft, IconRight]);

  return (
    <>
      {label && <Text style={[style.inputLabel, labelStyle]}>{label}</Text>}
      <View style={[style.inputBox, { paddingLeft: paddingInputWithIcon }, containerStyle]}>
        {IconLeft && iconLeftName && (
          <TouchableOpacity onPress={iconPress}>
            <IconLeft name={iconLeftName} size={20} color={themes.colors.gray} />
          </TouchableOpacity>
        )}
        <TextInput style={[style.input, inputStyle]} value={value} onChangeText={onChangeText} {...restInputProps} />
        {IconRight && iconRightName && (
          <TouchableOpacity onPress={iconPress}>
            <IconRight name={iconRightName} size={20} color={themes.colors.gray} />
          </TouchableOpacity>
        )}
      </View>
      {!!messageError && <Text style={style.error}>{messageError}</Text>}
    </>
  );
}
