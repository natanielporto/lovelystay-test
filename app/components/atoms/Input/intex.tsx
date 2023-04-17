"use client";

import React, { ForwardedRef, ReactElement, forwardRef } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder: string;
}

function ForwardInput(
  { placeholder }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  return <S.Container placeholder={placeholder} ref={ref} />;
}

export const Input = forwardRef(ForwardInput);
