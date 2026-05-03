import type { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import type { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { themes } from "@/global/themes";
import type { ComponentProps, ElementType } from "react";
import { useState } from "react";

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
  type?: "pass" | "text";
  iconPress?: () => void;
}

export function Textfield({
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
  type = "text",
  secureTextEntry,
  ...restInputProps
}: TextFieldProps) {
  const [showPass, setShowPass] = useState(true);

  const isPasswordField = type === "pass";

  function togglePass() {
    setShowPass((s) => !s);
  }

  const iconColor = themes.colors.textSecondary;

  return (
    <View style={style.container}>
      {label && <Text style={[style.inputLabel, labelStyle]}>{label}</Text>}
      <View style={[style.inputBox, !!messageError && { borderColor: themes.colors.error }, containerStyle]}>
        {IconLeft && iconLeftName && (
          <TouchableOpacity onPress={iconPress} disabled={!iconPress} style={{ marginRight: themes.spacing.sm }}>
            <IconLeft name={iconLeftName} size={20} color={iconColor} />
          </TouchableOpacity>
        )}

        <TextInput
          style={[style.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={themes.colors.textSecondary}
          secureTextEntry={isPasswordField ? showPass : secureTextEntry}
          {...restInputProps}
        />

        {isPasswordField && (
          <TouchableOpacity onPress={togglePass} style={{ marginLeft: themes.spacing.sm }}>
            <Octicons name={showPass ? "eye-closed" : "eye"} size={20} color={iconColor} />
          </TouchableOpacity>
        )}

        {IconRight && iconRightName && !isPasswordField && (
          <TouchableOpacity onPress={iconPress} style={{ marginLeft: themes.spacing.sm }}>
            <IconRight name={iconRightName} size={20} color={iconColor} />
          </TouchableOpacity>
        )}
      </View>
      {!!messageError && <Text style={style.error}>{messageError}</Text>}
    </View>
  );
}
