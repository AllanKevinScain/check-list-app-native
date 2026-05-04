import type { TouchableOpacityProps } from "react-native";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { themes } from "@/global/themes";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  isLoading,
  variant = "primary",
  style: customStyle,
  disabled,
  ...rest
}: ButtonProps) {
  const buttonStyles = [
    style.button,
    variant === "secondary" && style.buttonSecondary,
    variant === "ghost" && style.buttonGhost,
    disabled && style.buttonDisabled,
    customStyle,
  ];

  const textStyles = [style.buttonText, variant === "ghost" && style.buttonTextGhost];

  return (
    <TouchableOpacity style={buttonStyles} disabled={disabled || isLoading} activeOpacity={0.7} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={variant === "ghost" ? themes.colors.primary : themes.colors.white} />
      ) : (
        <Text style={textStyles}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
