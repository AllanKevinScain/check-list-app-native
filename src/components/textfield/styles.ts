import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    inputLabel: {
        color: themas.colors.gray,
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
        borderColor: themas.colors.lightGray,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightGray
    },
})