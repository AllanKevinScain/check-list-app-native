import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreensNameType } from "../routes/index.routes";

type NavigationProps = NativeStackNavigationProp<ScreensNameType>;

export function useRouter() {
    return useNavigation<NavigationProps>()
}