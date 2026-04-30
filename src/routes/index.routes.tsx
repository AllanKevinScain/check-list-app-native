import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomBar, LoginPage } from "@/pages";

const screens = {
  Login: LoginPage,
  bottomRoutes: BottomBar,
};
type ScreensType = typeof screens;
export type ScreensNameType = Record<keyof ScreensType, undefined>;

export const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: {
      backgroundColor: "white",
    },
  },
  screens,
});
