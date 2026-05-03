import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { themes } from "@/global/themes";

interface FlagProps {
  caption?: string;
  color: string;
  selected?: boolean;
  onPress?: () => void;
}

export function Flag({ color, caption, selected, onPress }: FlagProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        style.container,
        {
          backgroundColor: color,
          opacity: selected === false ? 0.5 : 1,
          borderWidth: selected ? 2 : 0,
          borderColor: themes.colors.white,
        },
      ]}>
      <Text style={style.text}>
        {caption}
      </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: themes.borderRadius.sm,
    paddingVertical: themes.spacing.xs,
    paddingHorizontal: themes.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: themes.colors.white,
    fontSize: 12,
    fontWeight: "700",
  }
});
