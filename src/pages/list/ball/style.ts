import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 10,
    justifyContent: "center",
    paddingRight: themes.spacing.md,
  },
  containerBall: {
    borderRadius: 40,
    borderWidth: 1,
    padding: 2,
  },
  ball: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
});
