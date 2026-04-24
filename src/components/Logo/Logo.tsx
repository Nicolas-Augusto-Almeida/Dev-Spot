import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./LogoStyles";
import Sparkle from "../../assets/Sparkle.png";

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DEV.SPOT</Text>
      <Image source={Sparkle} style={styles.imageSize} />
    </View>
  );
}
