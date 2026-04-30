import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./src/routes/index.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
}
