import React, { useContext } from "react";
import { View, Text } from "react-native";
import { styles } from "./TextStyle";
import { ThemeContext } from "../../context/ThemeContext";

export function NewText() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const colors = {
    text: isDark ? "#FFFFFF" : "#111827",
    secondary: isDark ? "#C7D2FE" : "#374151",
    highlight: "#22D3EE",
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        Eleve seu negócio digital a um outro nível{" "}
        <Text style={[styles.highlight, { color: colors.highlight }]}>
          com um Front-end de qualidade!
        </Text>
      </Text>

      <Text style={[styles.contentText, { color: colors.secondary }]}>
        Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em
        React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em
        prática boas ideias. Vamos conversar?
      </Text>
    </View>
  );
}