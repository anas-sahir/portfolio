import { extendTheme } from "@chakra-ui/react";
import color from "../utils/color";
import useColor from "../utils/useColor";


export default extendTheme({
  breakpoints: {
    sm: '321px',
    md: '769px',
    lg: '960px',
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
    initialColorMode: window.localStorage.getItem('chakra-ui-color-mode'),
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
      // text: {
      //   default: "red",
      //   _dark: "green"
      // },
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: 'green.500',
        _dark: 'green.400',
      },
      secondary: {
        default: 'blue.800',
        _dark: 'blue.700',
      },
    },
  },
  // components styling
  // components: {
  //   Button: {
  //     // 1. We can update the base styles
  //     baseStyle: {
  //       fontWeight: 'bold', // Normally, it is "semibold"
  //     },
  //     // 2. We can add a new button size or extend existing
  //     sizes: {
  //       xl: {
  //         h: '56px',
  //         fontSize: 'lg',
  //         px: '32px',
  //       },
  //     },
  //     // 3. We can add a new visual variant
  //     variants: {
  //       'with-shadow': {
  //         bg: 'red.400',
  //         boxShadow: '0 0 2px 2px #efdfde',
  //       },
  //       // 4. We can override existing variants
  //       solid: (props) => ({
  //         bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
  //       }),
  //     },
  //   },
  // },

});