import React from "react";
import { View, Text, Image } from "react-native";
import { Logo } from "../components/Logo/Logo";
import { NewText } from "../components/Text/NewText";

const Home = () => {
  return (
    <View>
      <Logo />
      <NewText></NewText>
    </View>
  );
};

export default Home;
