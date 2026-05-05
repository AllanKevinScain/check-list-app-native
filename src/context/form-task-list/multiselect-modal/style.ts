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
  itemsContainer: {
    gap: 10,
    padding: 20,
    alignItems: "flex-end",
  },
  item: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.colors.surfaceSecondary,
  },
  textItem: {
    color: themes.colors.white,
  },
});
