import { StyleSheet, Text, View } from "react-native";
import Footer from "./src/components/footer/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
