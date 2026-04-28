import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 40,
        shadowColor: "#000000",
        borderTopWidth: 1,
        borderTopColor: themes.colors.gray
    }
})