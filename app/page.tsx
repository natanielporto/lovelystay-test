"use client";

import SearchBox from "./components/organisms/SearchBox/intex";
import ThemeSwitch from "./components/atoms/Switch";
import * as S from "./styles";

export default function HomePage() {
  return (
    <>
      <ThemeSwitch />
      <S.Container>
        <SearchBox />
      </S.Container>
    </>
  );
}
