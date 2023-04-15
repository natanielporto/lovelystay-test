import { GlobalContext } from "@/globalContext/searchContext";
import dark from "@/styles/themes/dark";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

export default function CustomSwitch() {
  const { colors } = useContext(ThemeContext);
  const { handleTheme, theme } = useContext(GlobalContext);

  return (
    <Switch
      onChange={handleTheme}
      checked={theme.title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onColor={colors.primary}
      offColor={colors.secondary}
    />
  );
}
