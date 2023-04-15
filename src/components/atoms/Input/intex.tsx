"use client";

import { ReactElement } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps): ReactElement {
  return <S.Container placeholder={placeholder} />;
}
