import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 40,
    shadowColor: themes.colors.black,
    borderTopWidth: 1,
    borderTopColor: themes.colors.border,
  },
});
