import { View } from "react-native";
import { style } from "./style";
import { themes } from "@/global/themes";

interface BallProps {
  size?: number;
  color?: string;
  selected?: boolean;
}

export function Ball(props: BallProps) {
  const { color, selected, size } = props;

  return (
    <View
      style={[
        style.container,
        {
          height: size ?? 20,
          width: size ?? 20,
          borderColor: color ?? themes.colors.lightGray,
        },
      ]}>
      <View
        style={[
          style.ball,
          {
            backgroundColor: color ?? themes.colors.lightGray,
            opacity: selected ? 1 : 0,
          },
        ]}
      />
    </View>
  );
}
