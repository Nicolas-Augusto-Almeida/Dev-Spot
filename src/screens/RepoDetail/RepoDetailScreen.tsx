import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ThemeContext } from "../../context/ThemeContext";
import { RootStackParamList } from "../../types/navigation";

type RepoDetailRouteProp = RouteProp<RootStackParamList, "RepoDetail">;

const RepoDetailScreen = () => {
  const route = useRoute<RepoDetailRouteProp>();
  const { repo } = route.params;
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#001848" : "#F3F4F6",
    card: isDark ? "#0a2255" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#111827",
    secondary: isDark ? "#C7D2FE" : "#374151",
    accent: "#22D3EE",
    border: isDark ? "#1e3a8a" : "#E5E7EB",
  };

  const updatedDate = new Date(repo.updated_at).toLocaleDateString("pt-BR");

  return (
    <ScrollView
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.repoName, { color: colors.accent }]}>
        {repo.name}
      </Text>

      {repo.description ? (
        <Text style={[styles.description, { color: colors.secondary }]}>
          {repo.description}
        </Text>
      ) : (
        <Text style={[styles.description, { color: colors.secondary, fontStyle: "italic" }]}>
          Sem descrição disponível.
        </Text>
      )}

      <View
        style={[
          styles.infoCard,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <InfoRow label="Linguagem" value={repo.language ?? "—"} textColor={colors.text} accentColor={colors.accent} />
        <InfoRow label="⭐ Stars" value={String(repo.stargazers_count)} textColor={colors.text} accentColor={colors.accent} />
        <InfoRow label="Atualizado em" value={updatedDate} textColor={colors.text} accentColor={colors.accent} />
      </View>

      <TouchableOpacity
        style={styles.linkBtn}
        onPress={() => Linking.openURL(repo.html_url)}
      >
        <Text style={styles.linkBtnText}>🔗 Abrir no GitHub</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const InfoRow = ({
  label,
  value,
  textColor,
  accentColor,
}: {
  label: string;
  value: string;
  textColor: string;
  accentColor: string;
}) => (
  <View style={styles.infoRow}>
    <Text style={[styles.infoLabel, { color: accentColor }]}>{label}</Text>
    <Text style={[styles.infoValue, { color: textColor }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 100 },
  repoName: { fontSize: 24, fontWeight: "800", marginBottom: 10 },
  description: { fontSize: 15, lineHeight: 22, marginBottom: 20 },
  infoCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLabel: { fontSize: 14, fontWeight: "600" },
  infoValue: { fontSize: 14 },
  linkBtn: {
    backgroundColor: "#22D3EE",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  linkBtnText: { color: "#001848", fontWeight: "700", fontSize: 15 },
});

export default RepoDetailScreen;
