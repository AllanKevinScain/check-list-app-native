import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import logo from "@/assets/react-logo.png";
import { useAuth } from "@/context/auth/hook";
import { AntDesign } from "@expo/vector-icons";

export function LoginPage() {
  const { signInGoogle, submiting, message } = useAuth();

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={logo} style={style.logo} resizeMode="contain" />
        <Text style={style.logoText}>Bem vindo de volta!</Text>
      </View>
      {message !== null && (
        <View style={style.errorContainer}>
          <Text style={style.errorText}>{message}</Text>
        </View>
      )}

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.googleContainer} activeOpacity={0.8} disabled={submiting} onPress={signInGoogle}>
          <View style={style.googleContent}>
            <AntDesign name="google" size={20} color="#DB4437" />

            <Text style={style.googleText}>{submiting ? "Entrando..." : "Continuar com Google"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={style.createAccountText}>
        Não tem conta? <Text style={style.createAccountLink}>Crie agora!</Text>
      </Text>
    </View>
  );
}
