import { Dimensions, StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height / 10,
    backgroundColor: themes.colors.surface,
    marginBottom: themes.spacing.md,
    paddingHorizontal: themes.spacing.md,
    paddingVertical: themes.spacing.sm,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: themes.borderRadius.md,
    borderWidth: 1,
    borderColor: themes.colors.border,
  },
  secondaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: themes.spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: themes.colors.textPrimary,
  },
  description: {
    fontSize: 13,
    fontWeight: "500",
    color: themes.colors.textSecondary,
    marginTop: 2,
  },
});
