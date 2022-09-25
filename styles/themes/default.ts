import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const themeDefault = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export type Theme = typeof themeDefault;
