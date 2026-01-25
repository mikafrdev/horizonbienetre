import React, { useEffect } from "react";

const MatomoTracking = ({ siteId }) => {
   useEffect(() => {
      // Si Matomo est déjà initialisé, ne pas le réinitialiser
      if (window._paq) return;

      // Initialisation de Matomo
      var _paq = (window._paq = window._paq || []);
      _paq.push(["trackPageView"]); // Suivi de la vue de la page
      _paq.push(["enableLinkTracking"]); // Suivi des clics sur les liens

      (function () {
         var u = "https://matomo.horizonbienetre.fr/";
         _paq.push(["setTrackerUrl", u + "matomo.php"]);
         _paq.push(["setSiteId", siteId]);

         var d = document,
            g = d.createElement("script"),
            s = d.getElementsByTagName("script")[0];
         g.async = true;
         g.src = u + "matomo.js";
         s.parentNode.insertBefore(g, s);
      })();
   }, [siteId]);

   return null;
};

export default MatomoTracking;
