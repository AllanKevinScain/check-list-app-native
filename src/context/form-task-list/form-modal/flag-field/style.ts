import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  containerFlags: {
    flexDirection: "row",
    gap: themes.spacing.sm,
    marginTop: themes.spacing.sm,
    marginBottom: themes.spacing.xl,
  },
  textFlags: {
    fontSize: 16,
    fontWeight: "600",
    color: themes.colors.black,
    marginTop: themes.spacing.md,
  },
});
