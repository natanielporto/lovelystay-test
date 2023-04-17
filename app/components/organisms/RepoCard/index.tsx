import React, { FC } from "react";
import { RepoNumbers } from "../../molecules/RepoNumbers";
import Link from "next/link";
import * as S from "./styles";

interface RepoCard {
  name: string;
  description: string;
  html_url?: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

const RepoCard: FC<RepoCard> = ({
  name,
  description,
  html_url,
  stargazers_count,
  forks_count,
  watchers_count,
}) => {
  return (
    <S.Container>
      <Link href={`${html_url}`}>
        <h3>{name}</h3>
        <p>{description}</p>
        <RepoNumbers
          forks_count={forks_count}
          stargazers_count={stargazers_count}
          watchers_count={watchers_count}
        />
      </Link>
    </S.Container>
  );
};

export default RepoCard;
