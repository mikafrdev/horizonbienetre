import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MATOMO_URL = "https://matomo.horizonbienetre.fr/";

const MatomoTracking = ({ siteId }) => {
   const location = useLocation();
   const isInitialized = useRef(false);

   // 1️⃣ Initialisation Matomo (1 seule fois)
   useEffect(() => {
      if (isInitialized.current) return;

      window._paq = window._paq || [];

      window._paq.push(["enableLinkTracking"]);
      window._paq.push(["setSiteId", siteId]);
      window._paq.push(["setTrackerUrl", MATOMO_URL + "matomo.php"]);

      const d = document;
      const g = d.createElement("script");
      const s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = MATOMO_URL + "matomo.js";
      s.parentNode.insertBefore(g, s);

      isInitialized.current = true;
   }, [siteId]);

   // 2️⃣ Tracking des pages (SPA)
   useEffect(() => {
      if (!window._paq || !isInitialized.current) return;

      const url = location.pathname + location.search + location.hash;

      window._paq.push(["setCustomUrl", url]);
      window._paq.push(["setDocumentTitle", document.title]);
      window._paq.push(["trackPageView"]);
   }, [location]);

   return null;
};

export default MatomoTracking;

export const matomoTrackEvent = (category, action, label, value) => {
   if (!window._paq) return;

   window._paq.push(["trackEvent", category, action, label, value]);
};
