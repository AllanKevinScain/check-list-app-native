import { Dimensions, StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
    gap: 10,
  },
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 6,
    backgroundColor: themes.colors.primary,
    padding: themes.spacing.md,
    marginBottom: themes.spacing.md,
    justifyContent: "flex-end",

    // Android Shadow
    elevation: 4,

    // iOS Shadow
    shadowColor: themes.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  welcomeLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: themes.colors.textOnPrimary,
  },
  inputBox: {
    marginTop: themes.spacing.xs,
  },
});
