import { View, Text } from "react-native";
import { style } from "./style";
import { Button } from "../button";

interface EmptyListProps {
  message?: string;
  buttonContent?: string;
  onButtonPress?: () => void;
}

export function EmptyList(props: EmptyListProps) {
  const { message = "This list is empty.", buttonContent, onButtonPress } = props;
  return (
    <View style={style.container}>
      <Text style={style.text}>{message}</Text>
      {buttonContent && (
        <Button variant="ghost" style={style.button} onPress={onButtonPress}>
          {buttonContent}
        </Button>
      )}
    </View>
  );
}
