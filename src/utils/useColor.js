import { useColorMode, useTheme } from "@chakra-ui/react";

const useColor = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const { modes } = theme.colors;
  return {
    mode: colorMode,
    toggle: toggleColorMode,
    color: (colorName) => modes[colorMode][colorName],
    pick: (lightPick, darkPick) =>
      colorMode === "light" ? lightPick : darkPick,
  };
};

export default useColor;