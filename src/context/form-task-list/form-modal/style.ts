import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: themes.spacing.lg,
  },
  header: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: themes.spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: themes.colors.black,
  },
  formContainer: {
    width: "100%",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: themes.colors.textSecondary,
    marginBottom: themes.spacing.xs,
  },
  containerRangerDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: themes.spacing.md,
    marginTop: themes.spacing.md,
  },
});
