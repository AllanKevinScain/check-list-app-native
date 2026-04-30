import type { TouchableOpacityProps } from "react-native";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, isLoading, ...restButtonProps } = props;

  return (
    <TouchableOpacity style={style.button} {...restButtonProps} activeOpacity={0.6}>
      {isLoading ? <ActivityIndicator /> : <Text style={style.buttonText}>{children}</Text>}
    </TouchableOpacity>
  );
}
