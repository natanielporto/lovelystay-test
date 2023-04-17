import { GlobalContext } from "../../../globalContext/searchContext";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import * as S from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../hooks/useTheme";

export default function ThemeSwitch() {
  const { colors } = useContext(ThemeContext);
  const { toggleTheme, theme } = useContext(GlobalContext);

  return (
    <S.Container>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        checkedIcon={<FaSun style={{ marginTop: 6, marginLeft: 7 }} />}
        uncheckedIcon={<FaMoon style={{ marginTop: 6, marginLeft: 7 }} />}
        onColor={colors.primary}
        offColor={colors.secondary}
      />
    </S.Container>
  );
}
