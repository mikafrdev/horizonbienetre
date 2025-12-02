import { useEffect } from "react";

const GTM_ID = import.meta.env.VITE_GTM_ID;
const GA4_ID = import.meta.env.VITE_GA4_ID;
const isProd = import.meta.env.MODE === "production";

export default function GoogleTagManager() {
   useEffect(() => {
      if (!isProd || !GTM_ID) return;

      console.log("GTM PROD !");

      // Injecte le script gtag.js
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialise gtag après le chargement
      script.onload = () => {
         window.dataLayer = window.dataLayer || [];
         function gtag() {
            window.dataLayer.push(arguments);
         }
         window.gtag = gtag;

         gtag("js", new Date());
         gtag("config", GA4_ID);
      };

      // Cleanup si composant démonté
      return () => {
         document.head.removeChild(script);
      };
   }, []);

   return null;
}
