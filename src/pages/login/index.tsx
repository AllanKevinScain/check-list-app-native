import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

import logo from "../../assets/logo.png";
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { useState } from "react";

export default function Login() {
    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    });

    function handleLogin() {
        if (loginState.email && loginState.password) {
            return Alert.alert("Logado com sucesso!")
        }

        return Alert.alert("Atenção", "Preencha todos os campos");
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={logo} style={style.logo} resizeMode="contain" />
                <Text style={style.logoText}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMiddle}>
                <Text style={style.inputLabel}>ENDEREÇO DE E-MAIL:</Text>
                <View style={style.inputBox}>
                    <TextInput
                        style={style.input}
                        value={loginState.email}
                        onChangeText={(e) => setLoginState(s => ({...s, email: e}))}
                    />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray} />
                </View>
                <Text style={style.inputLabel}>SENHA:</Text>
                <View style={style.inputBox}>
                    <TextInput
                        style={style.input}
                        value={loginState.password}
                        onChangeText={(e) => setLoginState(s => ({...s, password: e}))}
                    />
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleLogin}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.createAccountText}>
                Não te conta?{" "}
                <Text style={{color: themas.colors.primary}}>Crie agora!</Text>
            </Text>
        </View>
    )
}