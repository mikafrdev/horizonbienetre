import { useEffect } from 'react';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;  // À définir en .env.production
const isProd = import.meta.env.MODE === 'production';

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!isProd || !GA_MEASUREMENT_ID) return;

    // Injecte le script gtag.js
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialise gtag après le chargement
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
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
