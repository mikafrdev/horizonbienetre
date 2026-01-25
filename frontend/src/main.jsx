import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "normalize.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { MatomoProvider, createInstance } from "@streamr/matomo-tracker-react";
import "./index.css";

const isSecure = window.location.protocol === 'https:';

const instance = createInstance({
   urlBase: "https://matomo.horizonbienetre.fr/",
   siteId: 3,
   linkTracking: false, //app react false
   configurations: {
      disableCookies: true, //RGPD friendly
      setSecureCookie: isSecure, //HTTPS only
      setRequestMethod: "POST", //URLs propres + plus sûr
   },
});

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <MatomoProvider value={instance}>
         <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
         </ThemeProvider>
      </MatomoProvider>
   </React.StrictMode>,
);
