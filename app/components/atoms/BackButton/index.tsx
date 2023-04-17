import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import * as S from "./styles";

export const BackButton = () => {
  const router = useRouter();

  const handleInitialPage = () => router.push("/");

  return (
    <S.Backbutton role="button" onClick={handleInitialPage}>
      <FaArrowLeft />
      <span>New Search</span>
    </S.Backbutton>
  );
};
