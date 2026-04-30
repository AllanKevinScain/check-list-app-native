import { StyleSheet } from "react-native";
import { themes } from "@/global/themes";

export const style = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.colors.blackTransparent,
  },
  container: {
    width: "80%",
    padding: 16,
    elevation: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  dateText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});
