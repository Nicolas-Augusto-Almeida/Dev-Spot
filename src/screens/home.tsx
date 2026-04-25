import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Linking, Switch, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ThemeContext } from "../context/ThemeContext";
import { Alert } from "react-native";
import { Logo } from "../components/Logo/Logo";
import { NewText } from "../components/Text/NewText";
import { styles } from "./HomeStyle";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

type RootStackParamList = {
  Home: undefined;
  AboutMe: undefined;
};

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = () => {
  const navigation = useNavigation<NavigationProps>();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const colors = {
    text: isDark ? "#FFFFFF" : "#111827",
    secondary: isDark ? "#C7D2FE" : "#374151",
    buttonText: isDark ? "#001848" : "#F9FAFB",
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.container}>
        <Logo />
        <NewText />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AboutMe")}
        >
          <Text style={[styles.buttonText, { color: colors.buttonText }]}>
            Sobre mim
          </Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Entre em contato")}
      >
      <Text style={[styles.buttonText, { color: colors.buttonText }]}>
        Entre em contato!
      </Text>
      </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Acesse minhas redes:
        </Text>

        <View style={styles.toggleContainer}>
          <Text style={[styles.toggleText, { color: colors.secondary }]}>
            Alterar visualização
          </Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => openLink("https://github.com")}
        >
          <View style={styles.socialContent}>
            <FontAwesome name="github" size={20} color="#22D3EE" />
            <Text style={[styles.socialText, { color: colors.text }]}>
              GitHub
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => openLink("https://linkedin.com")}
        >
          <View style={styles.socialContent}>
            <FontAwesome name="linkedin" size={20} color="#22D3EE" />
            <Text style={[styles.socialText, { color: colors.text }]}>
              LinkedIn
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => openLink("https://instagram.com")}
        >
          <View style={styles.socialContent}>
            <FontAwesome name="instagram" size={20} color="#22D3EE" />
            <Text style={[styles.socialText, { color: colors.text }]}>
              Instagram
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => openLink("https://twitch.tv")}
        >
          <View style={styles.socialContent}>
            <FontAwesome5 name="twitch" size={20} color="#22D3EE" />
            <Text style={[styles.socialText, { color: colors.text }]}>
              Twitch
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;