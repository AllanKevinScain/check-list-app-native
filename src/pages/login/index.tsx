import { Image, Text, View } from "react-native";
import { style } from "./styles";
import logo from "@/assets/react-logo.png";
import { Button, TextfieldRHF } from "@/components";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "@/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginSchemaInfertype } from "@/schema";
import { loginSchema } from "@/schema";

export function LoginPage() {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "teste@gmail.com",
      password: "1234",
    },
  });

  function handleLogin(data: LoginSchemaInfertype) {
    console.log("🚀 ~ handleLogin ~ data:", data);
    router.reset({ routes: [{ name: "bottomRoutes" }] });
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={logo} style={style.logo} resizeMode="contain" />
        <Text style={style.logoText}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMiddle}>
        <TextfieldRHF
          control={control}
          name="email"
          rules={{ required: true }}
          label="ENDEREÇO DE E-MAIL:"
          placeholder="youremail@email.com"
          IconRight={MaterialIcons}
          iconRightName="email"
        />
        <TextfieldRHF
          control={control}
          name="password"
          rules={{ required: true }}
          label="SENHA:"
          placeholder="Your pass"
        />
      </View>
      <View style={style.boxBottom}>
        <Button onPress={handleSubmit(handleLogin)}>Entrar</Button>
      </View>
      <Text style={style.createAccountText}>
        Não tem conta? <Text style={style.createAccountLink}>Crie agora!</Text>
      </Text>
    </View>
  );
}
