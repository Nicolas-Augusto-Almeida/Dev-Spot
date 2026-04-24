import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking, Switch } from "react-native";
import { Logo } from "../components/Logo/Logo";
import { NewText } from "../components/Text/NewText";
import { styles } from "./HomeStyle";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previous) => !previous);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <NewText />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sobre mim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entre em contato!</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Acesse minhas redes:</Text>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Alterar visualização</Text>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </View>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://github.com")}
      >
        <View style={styles.socialContent}>
          <FontAwesome name="github" size={20} color="#22D3EE" />
          <Text style={styles.socialText}>GitHub</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://linkedin.com")}
      >
        <View style={styles.socialContent}>
          <FontAwesome name="linkedin" size={20} color="#22D3EE" />
          <Text style={styles.socialText}>LinkedIn</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://instagram.com")}
      >
        <View style={styles.socialContent}>
          <FontAwesome name="instagram" size={20} color="#22D3EE" />
          <Text style={styles.socialText}>Instagram</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://twitch.tv")}
      >
        <View style={styles.socialContent}>
          <FontAwesome5 name="twitch" size={20} color="#22D3EE" />
          <Text style={styles.socialText}>Twitch</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
