import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "white"
    },
})