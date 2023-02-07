import { extendTheme } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config });

export const colors = () => {
  const {colorMode} = useColorMode();
  return {
    gray: {
      100: colorMode == 'light' ? 'gray.100' : 'whiteAlpha.200',
      200: colorMode == 'light' ? 'gray.200' : 'gray.700',
      600: colorMode == 'light' ? 'gray.600' : 'gray.300'
    },
  };
};