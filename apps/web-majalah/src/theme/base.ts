import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

import { openSans } from "./font";

export const baseTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#b42823",
        },
        grey: {
          50: "#fafafa",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#b42823",
        },
        grey: {
          50: "#323232",
        },
      },
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      desktop: 1200,
    },
  },
});
