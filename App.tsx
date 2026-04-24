import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "./src/components/footer/Footer";
import Home from "./src/screens/home";


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
      <Home></Home>
      <Footer></Footer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001848"
  },
});
