import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  actions: {
    width: "100%",
    height: Dimensions.get("window").height / 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: themes.spacing.md,

    backgroundColor: themes.colors.border,
    borderRadius: themes.borderRadius.md,
    paddingVertical: themes.spacing.sm,
    paddingHorizontal: themes.spacing.md,

    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
  removeButton: {
    width: "auto",
    height: "100%",
    borderRadius: themes.borderRadius.sm,
    backgroundColor: themes.colors.error,
    paddingHorizontal: themes.spacing.sm,
  },
  updatedButton: {
    width: "auto",
    height: "100%",
    borderRadius: themes.borderRadius.sm,
    backgroundColor: themes.colors.primary,
    paddingHorizontal: themes.spacing.sm,
  },
});
