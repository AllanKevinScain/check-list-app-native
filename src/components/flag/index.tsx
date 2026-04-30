import { Text, TouchableOpacity } from "react-native";
import { style } from "./style";
import { themes } from "@/global/themes";

interface FlagProps {
  caption?: string;
  color?: string;
  selected?: boolean;
}

export function Flag(props: FlagProps) {
  const { color, caption, selected = false } = props;

  return (
    <TouchableOpacity
      style={[
        style.container,
        {
          backgroundColor: color ?? themes.colors.lightGray,
          borderColor: color ?? themes.colors.gray,
        },
      ]}>
      <Text
        style={{
          color: "white",
        }}>
        {caption}
      </Text>
    </TouchableOpacity>
  );
}
