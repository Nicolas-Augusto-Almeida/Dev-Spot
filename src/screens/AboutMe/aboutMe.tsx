import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";

import { Logo } from "../../components/Logo/Logo";
import { styles } from "./aboutMeStyle";
import { ThemeContext } from "../../context/ThemeContext";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const colors = {
    text: isDark ? "#FFFFFF" : "#111827",
    secondary: isDark ? "#C7D2FE" : "#374151",
    card: isDark ? "#001848" : "#FFFFFF",
    border: "#22D3EE",
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.container}>
        <Logo />

        <Text style={[styles.title, { color: colors.text }]}>Sobre mim</Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.text, { color: colors.secondary }]}>
            Cheguei no código, bug querendo mandar, tela branca piscando,
            difícil de encarar, mas quando o Melky cola, já muda o lugar,
            transforma erro em solução, faz tudo funcionar.
            {"\n\n"}É stack na mente, lógica no olhar, explica de um jeito que
            dá pra acompanhar, se trava na função, ele vem destravar, tipo debug
            humano pronto pra salvar.
            {"\n\n"}
            Não é só teoria, é prática na missão, cada aula é upgrade na
            programação, sai do “não entendi” pra “peguei a visão”, com o Melky
            no comando, evolução na mão.
            {"\n\n"}
            Então respeita o nome, segura essa track, professor de código com
            flow de full stack, se o sistema cai, ele traz de volta no hack,
            Melky é brabo — não tem rollback.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutMe;
