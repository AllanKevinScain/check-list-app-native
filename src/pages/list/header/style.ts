import { Dimensions, StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 5,
    backgroundColor: themes.colors.primary,
    padding: themes.spacing.md,
    marginBottom: themes.spacing.md,
    justifyContent: "flex-end",
    zIndex: 1,

    // Android Shadow
    elevation: 8,

    // iOS Shadow
    shadowColor: themes.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuContainer: {
    position: "absolute",
    right: 20,
    top: 50,
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
