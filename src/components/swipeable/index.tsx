import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { style } from "./style";
import { Button } from "../button";

interface SwipeableProps {
  styleContainer?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onRemove: () => void;
  onUpdated: () => void;
}

export function Swipeable(props: SwipeableProps) {
  const { children, styleContainer, onRemove, onUpdated } = props;

  const translateX = useSharedValue(0);
  const ACTION_WIDTH = 190;

  const handlePress = () => {
    const isOpen = translateX.value !== 0;

    if (isOpen) {
      translateX.value = withSpring(0);
    } else {
      translateX.value = withSpring(-ACTION_WIDTH);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <View style={style.actions}>
        <Button
          style={style.removeButton}
          variant="primary"
          onPress={(e) => {
            e.stopPropagation();
            onRemove();
          }}>
          Remove
        </Button>
        <Button
          style={style.updatedButton}
          variant="secondary"
          onPress={(e) => {
            e.stopPropagation();
            onUpdated();
            handlePress();
          }}>
          Update
        </Button>
      </View>

      <Animated.View style={[styleContainer, animatedStyle]}>{children}</Animated.View>
    </TouchableOpacity>
  );
}
