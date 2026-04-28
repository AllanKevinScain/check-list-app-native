import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    inputLabel: {
        color: themes.colors.gray,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        height: '100%',
        width: '90%',
    },
    inputBox: {
        width: '100%',
        height: 40,
        marginTop: 5,
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themes.colors.lightGray
    },
})