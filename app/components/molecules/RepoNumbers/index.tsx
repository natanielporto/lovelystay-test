import React, { FC } from "react";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";
import * as S from "./styles";

interface RepoNumbers {
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

export const RepoNumbers: FC<RepoNumbers> = ({
  stargazers_count,
  forks_count,
  watchers_count,
}) => {
  return (
    <S.Container>
      <S.Information>
        <FaStar /> {stargazers_count}
      </S.Information>
      <S.Information>
        <FaCodeBranch /> {forks_count}
      </S.Information>
      <S.Information>
        <FaEye /> {watchers_count}
      </S.Information>
    </S.Container>
  );
};
