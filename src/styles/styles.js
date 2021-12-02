import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginTop: 20,
    alignItems: "center",
  },
  textSkill: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
