import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   typography: {
      fontFamily: "Verdana, sans-serif",
      h1: { fontFamily: '"Source Serif Pro", serif' },
      h2: { fontFamily: '"Source Serif Pro", serif' },
      h3: { fontFamily: '"Source Serif Pro", serif' },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: `
            h1, h2, h3 {
               font-family: "Source Serif Pro", serif;
            }
         `,
      },
   },
});

export default theme;
