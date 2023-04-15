"use client";

import CustomSwitch from "@/components/atoms/Switch";
import InputField from "@/components/molecules/InputField/intex";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <InputField />
      <CustomSwitch />
    </S.Container>
  );
}
