"use client";

import { Suspense, useContext, useMemo } from "react";
import * as S from "./styles";
import RepoCard from "../../components/organisms/RepoCard";
import { GlobalContext } from "../../globalContext/searchContext";
import ThemeSwitch from "../../components/atoms/Switch";
import { BackButton } from "../../components/atoms/BackButton";

export default async function UserPage() {
  const { user, userRepos } = useContext(GlobalContext);

  const repositories = useMemo(
    () =>
      userRepos?.map((repository: any) => (
        <RepoCard key={repository.id} {...repository} />
      )),
    [userRepos]
  );

  return (
    <S.Container>
      <BackButton />
      <ThemeSwitch />
      <Suspense fallback={<div>Loading repositories...</div>}>
        <ul>{repositories}</ul>
      </Suspense>
    </S.Container>
  );
}
