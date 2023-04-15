"use client";

import Button from "@/components/atoms/Button/intex";
import Input from "@/components/atoms/Input/intex";
import * as S from "./styles";

export default function InputField() {
  return (
    <S.Container>
      <Input placeholder="Fetch an user on GitHub" />
      <Button action="Search" />
    </S.Container>
  );
}
