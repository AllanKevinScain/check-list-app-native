import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: themes.spacing.md,
    paddingHorizontal: themes.spacing.lg,
    backgroundColor: themes.colors.white, // Modal background
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
