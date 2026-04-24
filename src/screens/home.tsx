import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking, Switch } from "react-native";
import { Logo } from "../components/Logo/Logo";
import { NewText } from "../components/Text/NewText";
import { styles } from "./HomeStyle";

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previous => !previous);

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
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
      </View>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://github.com")}
      >
        <Text style={styles.socialText}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://linkedin.com")}
      >
        <Text style={styles.socialText}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://instagram.com")}
      >
        <Text style={styles.socialText}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => openLink("https://twitch.tv")}
      >
        <Text style={styles.socialText}>Twitch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;