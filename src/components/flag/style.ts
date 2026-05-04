import { themes } from "@/global/themes";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    borderRadius: themes.borderRadius.sm,
    padding: 2,
  },
  text: {
    color: themes.colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
