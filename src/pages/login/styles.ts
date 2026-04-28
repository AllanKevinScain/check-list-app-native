import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    boxTop: {
        height: Dimensions.get('window').height / 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMiddle: {
        height: Dimensions.get('window').height / 4,
        justifyContent: 'center',
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 23,
        marginTop: 40
    },
    createAccountText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'semibold'
    }
})