import { TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { themes } from "@/global/themes";

interface BallProps {
  size?: number;
  color?: string;
  selected?: boolean;
  onPress?: () => void;
}

export function Ball(props: BallProps) {
  const { color = themes.colors.secondary, selected, size = 24, onPress } = props;

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View
        style={[
          style.containerBall,
          {
            height: size,
            width: size,
            borderColor: color,
          },
        ]}>
        <View
          style={[
            style.ball,
            {
              backgroundColor: color,
              opacity: selected ? 1 : 0,
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}
