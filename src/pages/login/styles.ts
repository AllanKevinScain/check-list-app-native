import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: themes.spacing.xl,
    backgroundColor: themes.colors.background,
  },
  boxTop: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMiddle: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    justifyContent: "center",
  },
  boxBottom: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoText: {
    fontWeight: "700",
    fontSize: 24,
    marginTop: themes.spacing.md,
    color: themes.colors.textPrimary,
  },
  createAccountText: {
    fontSize: 16,
    marginTop: themes.spacing.lg,
    color: themes.colors.textSecondary,
    fontWeight: "500",
  },
  createAccountLink: {
    color: themes.colors.primary,
    fontWeight: "700",
  }
});
