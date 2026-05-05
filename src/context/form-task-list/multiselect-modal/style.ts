import { themes } from "@/global/themes";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  modalHeader: {
    padding: themes.spacing.md,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: themes.colors.white,
  },
});
