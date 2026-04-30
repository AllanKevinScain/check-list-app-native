import { Dimensions, StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 6,
    backgroundColor: themes.colors.primary,
    padding: 20,
    justifyContent: "flex-end",
  },
  welcomeLabel: {
    color: "white",
  },
  inputBox: {
    maxWidth: "80%",
  },
  flatList: {
    paddingHorizontal: 30,
  },
});
