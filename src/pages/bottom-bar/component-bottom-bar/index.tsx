import { View } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { style } from "./styles";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useListProvider } from "@/context";
import { TabItem } from "../tab-item";

import { useFormContext } from "react-hook-form";
import { defaultValues } from "@/context/form-task-list/provider";
import type { TaskSchemaInfertype } from "@/schema";

export function BottomBarComponent(props: BottomTabBarProps) {
  const { navigate } = props.navigation;
  const { open, updateModalMode } = useListProvider();
  const { reset } = useFormContext<TaskSchemaInfertype>();

  const currentRouteName = props.state.routes[props.state.index].name;

  return (
    <View style={style.container}>
      <TabItem
        Icon={AntDesign}
        iconName="bars"
        onPress={() => navigate("List")}
        isSelected={currentRouteName === "List"}
      />
      <TabItem
        Icon={Entypo}
        iconName="plus"
        iconSize={40}
        isPrincipal
        onPress={() => {
          reset(defaultValues);
          updateModalMode("create");
          open();
        }}
      />
      <TabItem
        Icon={FontAwesome}
        iconName="user"
        onPress={() => navigate("User")}
        isSelected={currentRouteName === "User"}
      />
    </View>
  );
}
