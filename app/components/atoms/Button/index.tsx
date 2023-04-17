"use client";

import React from "react";
import * as S from "./styles";

interface ButtonProps {
  action: string;
}

export default function Button({ action }: ButtonProps) {
  return <S.Container type="button">{action}</S.Container>;
}
