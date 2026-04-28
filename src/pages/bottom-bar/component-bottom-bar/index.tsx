import { Text, TouchableOpacity, View } from "react-native";
import { TabItem } from "../tab-item/index.";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { style } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export function BottomBarComponent(props: BottomTabBarProps) {
    const {navigate} = props.navigation;
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
            />
            <TabItem
                Icon={FontAwesome}
                iconName="user"
                onPress={() => navigate("User")}
                isSelected={currentRouteName === "User"}
            />
        </View>
    )
}