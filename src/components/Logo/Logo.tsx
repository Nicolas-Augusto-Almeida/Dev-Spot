import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./LogoStyles";
import { ThemeContext } from "../../context/ThemeContext";
import Sparkle from "../../assets/Sparkle.png";

export function Logo() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const colors = {
    text: isDark ? "#FFFFFF" : "#111827",
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.text, { color: colors.text }]}>
          DEV.SPOT
        </Text>
        <Image source={Sparkle} style={styles.imageSize} />
      </View>

      <Image
        source={require("../../assets/Capa.png")}
        style={styles.capaSize}
      />
    </View>
  );
}