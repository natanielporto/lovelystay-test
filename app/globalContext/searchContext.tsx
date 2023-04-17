"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

interface Repository {
  id: number;
  clone_url: string;
  full_name: string;
  git_url: string;
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  description: string;
}

interface User {
  avatar_url: string;
  name: string;
  public_repos: number;
  public_gists: number;
  bio: string;
  followers: number;
  following: number;
  login: string;
}

interface Context {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
  toggleTheme: () => void;

  user: User;
  username: string;
  setUsername: (username: string) => void;

  userRepos: Repository[];
  singleRepo: Repository | null;
  setReponame: (reponame: string) => void;
}

interface GlobalProvider {
  children: ReactNode;
}

export const GlobalContext = createContext({} as Context);

export function GlobalProvider({ children }: GlobalProvider) {
  const STORAGE_KEY = "theme";

  const [user, setUser] = useState<User>({} as User);
  const [userRepos, setUserRepos] = useState<Repository[]>([]);
  const [singleRepo, setSingleRepo] = useState<Repository | null>(null);
  const [username, setUsername] = useState<string>("natanielporto");
  const [reponame, setReponame] = useState<string>("");
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      return storedTheme ? JSON.parse(storedTheme) : dark;
    }
  });

  const toggleTheme = useCallback(() => {
    const newTheme = theme?.title === "light" ? dark : light;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
    setTheme(newTheme);
  }, [theme?.title]);

  const getUser = useCallback(async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 600 },
    });
    const data = await response.json();

    return setUser(data);
  }, []);

  const getRepos = useCallback(async (username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        next: { revalidate: 600 },
      }
    );
    const data = await response.json();

    return setUserRepos(data);
  }, []);

  const getSingleRepo = useCallback(
    async ({ username, reponame }: { username: string; reponame: string }) => {
      const response = await fetch(
        `https://api.github.com/users/${username}/${reponame}`,
        {
          next: { revalidate: 600 },
        }
      );
      const data = await response.json();

      return setSingleRepo(data);
    },
    []
  );

  useEffect(() => {
    if (username) {
      getUser(username);
      getRepos(username);
    }
  }, [getRepos, getUser, username]);

  useEffect(() => {
    if (reponame && username) getSingleRepo({ username, reponame });
  }, [getSingleRepo, reponame, username]);

  const contextValue = {
    theme,
    setTheme,
    toggleTheme,
    user,
    username,
    setUsername,
    userRepos,
    singleRepo,
    setReponame,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
