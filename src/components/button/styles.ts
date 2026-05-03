import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 300,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: themes.borderRadius.full,
    backgroundColor: themes.colors.primary,
    // Android Shadow
    elevation: 4,
    // iOS Shadow
    shadowColor: themes.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonSecondary: {
    backgroundColor: themes.colors.secondary,
  },
  buttonGhost: {
    backgroundColor: themes.colors.transparent,
    borderWidth: 1,
    borderColor: themes.colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonDisabled: {
    backgroundColor: themes.colors.surfaceSecondary,
    elevation: 0,
    shadowOpacity: 0,
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: themes.colors.textOnPrimary,
  },
  buttonTextGhost: {
    color: themes.colors.primary,
  },
});
