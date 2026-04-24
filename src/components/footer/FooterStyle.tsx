import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute", 
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#3700b3",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
});
