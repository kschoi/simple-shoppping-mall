import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const overrides = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
    cssVarPrefix: "planet",
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "gray.100")(props),
        background: mode("white", "gray.900")(props),
      },
    }),
  },
  colors: {
    // gray: {
    //   50: "#f0f0f0",
    //   900: "#222222",
    // },
  },
  fonts: {
    heading: '"Spoqa Han Sans Neo", sans-serif',
    body: '"Spoqa Han Sans Neo", sans-serif',
  },
};

export default extendTheme(overrides);
