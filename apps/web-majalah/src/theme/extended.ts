import { baseTheme } from "./base";

baseTheme.typography = {
  ...baseTheme.typography,
  h3: {
    fontSize: "1.25rem",
    fontWeight: 700,
    [baseTheme.breakpoints.up("tablet")]: {
      fontSize: "2.375rem",
    },
  },
  h4: {
    fontSize: "1rem",
    fontWeight: 700,
    [baseTheme.breakpoints.up("tablet")]: {
      fontSize: "1.875rem",
    },
  },
  h5: {
    fontSize: "0.875rem",
    fontWeight: 600,
    [baseTheme.breakpoints.up("tablet")]: {
      fontSize: "1.375rem",
    },
  },
  h6: {
    fontSize: "0.875rem",
    fontWeight: 600,
    [baseTheme.breakpoints.up("tablet")]: {
      fontSize: "1.125rem",
    },
  },
  subtitle2: {
    fontWeight: 600,
  },
};

export { baseTheme as theme };
