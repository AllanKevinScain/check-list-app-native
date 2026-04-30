import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ScreensNameType } from "@/routes/index.routes";

type NavigationProps = NativeStackNavigationProp<ScreensNameType>;

export function useRouter() {
  return useNavigation<NavigationProps>();
}
