import React, { useEffect, useReducer, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ThemeContext } from "../../context/ThemeContext";
import { RootStackParamList, Repo } from "../../types/navigation";

type State = {
  repos: Repo[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Repo[] }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: State = {
  repos: [],
  loading: false,
  error: null,
};

function reposReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { repos: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Repos">;

const GITHUB_USERNAME = "torvalds";
const GITHUB_TOKEN = process.env.EXPO_PUBLIC_GITHUB_TOKEN ?? "";

const ReposScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [state, dispatch] = useReducer(reposReducer, initialState);

  const fetchRepos = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const data: Repo[] = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message ?? "Erro desconhecido",
      });
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const colors = {
    bg: isDark ? "#001848" : "#F3F4F6",
    card: isDark ? "#0a2255" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#111827",
    secondary: isDark ? "#C7D2FE" : "#374151",
    accent: "#22D3EE",
    border: isDark ? "#1e3a8a" : "#E5E7EB",
  };

  const renderRepo = ({ item }: { item: Repo }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
      onPress={() => navigation.navigate("RepoDetail", { repo: item })}
    >
      <Text style={[styles.repoName, { color: colors.accent }]}>
        {item.name}
      </Text>
      {item.description ? (
        <Text
          style={[styles.repoDesc, { color: colors.secondary }]}
          numberOfLines={2}
        >
          {item.description}
        </Text>
      ) : null}
      <View style={styles.row}>
        {item.language ? (
          <Text style={[styles.tag, { color: colors.accent }]}>
            ⚙ {item.language}
          </Text>
        ) : null}
        <Text style={[styles.tag, { color: colors.secondary }]}>
          ⭐ {item.stargazers_count}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Repositórios — {GITHUB_USERNAME}
      </Text>

      {state.loading && (
        <ActivityIndicator
          size="large"
          color={colors.accent}
          style={{ marginTop: 40 }}
        />
      )}

      {state.error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>⚠ {state.error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={fetchRepos}>
            <Text style={styles.retryText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      {!state.loading && !state.error && (
        <FlatList
          data={state.repos}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderRepo}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
  },
  repoName: { fontSize: 16, fontWeight: "700", marginBottom: 4 },
  repoDesc: { fontSize: 13, marginBottom: 8, lineHeight: 18 },
  row: { flexDirection: "row", gap: 12 },
  tag: { fontSize: 12, fontWeight: "600" },
  errorBox: { alignItems: "center", marginTop: 40 },
  errorText: { color: "#f87171", fontSize: 14, marginBottom: 12 },
  retryBtn: {
    backgroundColor: "#22D3EE",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: { color: "#001848", fontWeight: "700" },
});

export default ReposScreen;