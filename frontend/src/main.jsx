import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import 'normalize.css';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <RouterProvider router={router} />
      </ThemeProvider>
   </React.StrictMode>
);
