import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TextStyle";

export function NewText() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Eleve seu negócio digital a um outro nível {' '}
        
        <Text style={styles.highlight}>
          com um Front-end de qualidade!
        </Text>
      </Text>

      <Text style={styles.contentText}>
        Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em
        React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em
        prática boas ideias. Vamos conversar?
      </Text>

    </View>
  );
}