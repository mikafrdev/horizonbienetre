import { useEffect } from 'react';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GTM_ID;
const isProd = import.meta.env.MODE === 'production';

export default function GoogleTagManager() {
   useEffect(() => {
      if (!isProd || !GA_MEASUREMENT_ID) return;

      // Injecte le script gtag.js
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialise gtag après le chargement
      script.onload = () => {
         window.dataLayer = window.dataLayer || [];
         function gtag(){ window.dataLayer.push(arguments); }
         window.gtag = gtag;

         gtag('js', new Date());
         gtag('config', GA_MEASUREMENT_ID);
      };

      // Cleanup si composant démonté
      return () => {
         document.head.removeChild(script);
      };
   }, []);

   return null;
}