import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface ThemeOptions {
    background?: {};
  }
}

export const defaultTheme = createTheme({
  background: {
    primary: 'black',
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export type DefaultTheme = typeof defaultTheme;
