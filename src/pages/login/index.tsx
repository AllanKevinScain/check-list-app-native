import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

import logo from "../../assets/logo.png";
import { themas } from "../../global/themes";
import { useState } from "react";
import { Button, Textfield } from "../../components";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

export default function Login() {
    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    });

    const [showPass, setShowPass] = useState(false);

    function togglePass() { setShowPass(s => !s) }

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
                <Textfield
                    label="ENDEREÇO DE E-MAIL:"
                    placeholder="youremail@email.com"
                    value={loginState.email}
                    onChangeText={(e) => setLoginState(s => ({...s, email: e}))}
                    IconRight={MaterialIcons}
                    iconRightName="email"
                 />
                <Textfield
                    label="SENHA:"
                    placeholder="Your pass"
                    value={loginState.password}
                    onChangeText={(e) => setLoginState(s => ({...s, password: e}))}
                    IconRight={Octicons}
                    iconRightName="eye-closed"
                    secureTextEntry={showPass}
                    iconPress={togglePass}
                 />
            </View>
            <View style={style.boxBottom}>
                <Button onPress={handleLogin}>
                    Entrar
                </Button>
            </View>
            <Text style={style.createAccountText}>
                Não te conta?{" "}
                <Text style={{color: themas.colors.primary}}>Crie agora!</Text>
            </Text>
        </View>
    )
}