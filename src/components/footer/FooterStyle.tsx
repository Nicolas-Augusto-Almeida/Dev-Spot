import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#3700B3",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center'
  },
});
