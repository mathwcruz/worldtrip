import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "500": "#999999",
      "400": "#DADADA",
      "100": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
    },
    teal: {
      "900": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white" ,
        color: "teal.900",
      },
    },
  },
});