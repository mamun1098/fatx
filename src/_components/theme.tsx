/**
 * Title: Theme component
 * Description: Description of the component
 * Author: Kaji Hasibur Rahman
 * Date: 2024-10-21
 */
"use client";
import { createTheme } from "@mui/material/styles";

// Define the light theme
export const lightTheme = createTheme({
  typography: {
    fontFamily: "Kumbh Sans, serif",
    h1: {
      fontFamily: "Poppins, serif",
    },
    h2: {
      fontFamily: "Poppins, serif",
    },
    h3: {
      fontFamily: "Poppins, serif",
    },
    h4: {
      fontFamily: "Poppins, serif",
    },
    h5: {
      fontFamily: "Poppins, serif",
    },
    h6: {
      fontFamily: "Poppins, serif",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, serif",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Kumbh Sans, serif",
    },
    button: {
      fontFamily: "Poppins, serif",
    },
  },
  palette: {
    mode: "light",
    text: {
      primary: "#121212",
    },
    primary: {
      main: "#2885fd",
    },
    secondary: {
      main: "#ff7aac",
    },
    info: {
      main: "#121212",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        body: {
          fontFamily: "Kumbh Sans, serif",
        },
      },
    },
  },
});
