import { StyleSheet } from "react-native";

import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    width: "80%",
    padding: themes.spacing.md,
    borderRadius: themes.borderRadius.md,
    elevation: 5,
    alignItems: "center",
    backgroundColor: themes.colors.white,
  },
  dateText: {
    marginTop: themes.spacing.md,
    fontSize: 18,
    textAlign: "center",
    color: themes.colors.black,
  },
});
