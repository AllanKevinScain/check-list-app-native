import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomBar, LoginPage } from "@/pages";

import { themes } from "@/global/themes";
import { AuthProvider } from "@/context/auth/provider";

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
      backgroundColor: themes.colors.background,
    },
  },
  screens,
  layout: ({ children }) => <AuthProvider>{children}</AuthProvider>,
});
