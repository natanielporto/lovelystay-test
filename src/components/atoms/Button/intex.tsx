"use client";

import * as S from "./styles";

interface ButtonProps {
  action: string;
}

export default function Button({ action }: ButtonProps) {
  return <S.Container>{action}</S.Container>;
}
