import { extendTheme } from "@chakra-ui/react";
import color from "../utils/color";
import useColor from "../utils/useColor";


export default extendTheme({
  breakpoints: {
    sm: '321px',
    md: '769px',
    lg: '9600px',
    xl: '1200px',
    xxl: '1536px',
  },
  colors: {
    modes: {
      light: {
        background: "#edf2f7",
        backgroundShade: "gray.200",
        // colorToggle: "#f00",
      },
      dark: {
        background: "#163042",
        backgroundShade: "#333",
        // colorToggle: "#0f0",
      },
    },
  },
  config: {
    // useSystemColorMode: true,
    // initialColorMode: window.localStorage.getItem('chakra-ui-color-mode'),
  },
  fonts: {
    body: "'baloo 2', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: color("background", props),
      },
    }),
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: 'red.500',
        _dark: 'red.400',
      },
      secondary: {
        default: 'red.800',
        _dark: 'red.700',
      },
    },
  },

});