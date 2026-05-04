import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 40,
  },
  text: {
    fontSize: 16,
    color: themes.colors.textPrimary,
  },
  button: {
    // height: 35,
    maxWidth: Dimensions.get("window").width / 2,
    flexDirection: "row",
  },
});
