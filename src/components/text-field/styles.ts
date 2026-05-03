import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputLabel: {
    color: themes.colors.textSecondary,
    marginBottom: themes.spacing.xs,
    fontWeight: "600",
    fontSize: 14,
  },
  inputBox: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: themes.colors.border,
    borderRadius: themes.borderRadius.md,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: themes.spacing.md,
    backgroundColor: themes.colors.surface,
  },
  input: {
    flex: 1,
    height: "100%",
    color: themes.colors.textPrimary,
    fontSize: 16,
  },
  error: {
    fontWeight: "500",
    color: themes.colors.error,
    fontSize: 12,
    marginTop: themes.spacing.xs,
  },
});
