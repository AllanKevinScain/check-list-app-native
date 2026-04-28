import { StyleSheet } from "react-native";
import { themes } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 40,
        zIndex: 50
    },
    principalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        height: 70,
        width: 70,
        borderRadius: 40,
        top: -30
    },
    icon: {
        color: themes.colors.primary,
        fontSize: 32
    }
})