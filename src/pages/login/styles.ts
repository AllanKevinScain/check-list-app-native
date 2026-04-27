import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

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
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themas.colors.primary,
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
    createAccountText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'semibold'
    }
})