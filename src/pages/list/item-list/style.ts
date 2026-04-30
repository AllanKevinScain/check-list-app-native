import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFF",
    marginTop: 6,
    padding: 10,

    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 10,
    borderWidth: 1,
    borderColor: themes.colors.lightGray,
  },
  secondaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: themes.colors.gray,
  },
});
