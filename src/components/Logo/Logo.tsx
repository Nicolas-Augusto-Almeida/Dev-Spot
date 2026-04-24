import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./LogoStyles";
import Sparkle from "../../assets/Sparkle.png";

export function Logo() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>DEV.SPOT</Text>
        <Image source={Sparkle} style={styles.imageSize} />
      </View>
      <Image
        source={require("../../assets/Capa.png")}
        style={styles.capaSize}
      />
    </View>
  );
}
