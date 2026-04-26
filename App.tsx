import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider, ThemeContext } from "./src/context/ThemeContext";
import { useContext } from "react";

import Home from "./src/screens/Home/home";
import AboutMe from "./src/screens/AboutMe/aboutMe";
import Footer from "./src/components/footer/Footer";

const Stack = createNativeStackNavigator();

function Routes() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <NavigationContainer>
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? "#001848" : "#F3F4F6" },
        ]}
      >
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            contentStyle: {
              backgroundColor: isDark ? "#001848" : "#F3F4F6",
            },
            headerStyle: {
              backgroundColor: isDark ? "#001848" : "#F3F4F6",
            },
            headerTintColor: isDark ? "#22D3EE" : "#2563EB",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />

          <Stack.Screen
            name="AboutMe"
            component={AboutMe}
            options={{ title: "Sobre mim" }}
          />
        </Stack.Navigator>

        <Footer />
      </View>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
