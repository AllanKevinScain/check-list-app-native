import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    height: 40,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
    gap: 10,
  },
  containerFlags: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  textFlags: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  containerRangerDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
