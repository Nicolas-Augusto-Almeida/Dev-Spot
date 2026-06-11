export type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
};

export type RootStackParamList = {
  Home: undefined;
  AboutMe: undefined;
  Repos: undefined;
  RepoDetail: { repo: Repo };
};
