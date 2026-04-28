import { Alert, Image, Text, View } from "react-native";
import { style } from "./styles";
import logo from "../../assets/logo.png";
import { themes } from "../../global/themes";
import { useState } from "react";
import { Button, Textfield } from "../../components";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "../../hooks";




export function LoginPage() {
    const router = useRouter()

    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    });

    const [showPass, setShowPass] = useState(false);

    function togglePass() { setShowPass(s => !s) }

    function handleLogin() {
        if (loginState.email && loginState.password) {
            return router.reset({routes: [{ name: "bottomRoutes" }]});
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
                <Text style={{color: themes.colors.primary}}>Crie agora!</Text>
            </Text>
        </View>
    )
}