import { useEffect } from "react";

export default function SEOMetaData({ metadata }) {
   
   useEffect(() => {
      if (!metadata) return;
      
      const {
         metaTitle,
         metaDescription,
         metaKeywords,
         metaImage,
         metaType = "website",
         twitterCardType = "summary_large_image",
         path,
      } = metadata;
      
      const BASE_URL = import.meta.env.VITE_FRONTEND_URL;
      document.title = metaTitle;

      const metaImagePath = `${BASE_URL}${metaImage}`;

      console.log("metaImagePath :", metaImagePath);

      setMetaTag("name", "description", metaDescription);

      if (metaKeywords) {
         setMetaTag("name", "keywords", metaKeywords);
      }

      setMetaTag("property", "og:title", metaTitle);
      setMetaTag("property", "og:description", metaDescription);
      setMetaTag("property", "og:image", metaImagePath);
      setMetaTag("property", "og:url", BASE_URL);
      setMetaTag("property", "og:type", metaType);

      setMetaTag("name", "twitter:card", twitterCardType);
      setMetaTag("name", "twitter:title", metaTitle);
      setMetaTag("name", "twitter:description", metaDescription);
      setMetaTag("name", "twitter:image", metaImagePath);

      setCanonical(path);
   }, [metadata]);

   return null;
}

/**
 * Crée ou met à jour une balise meta
 */
function setMetaTag(attr, name, content) {
   if (!content) return;

   let element = document.querySelector(`meta[${attr}="${name}"]`);

   if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, name);
      document.head.appendChild(element);
   }

   element.setAttribute("content", content);
}

function setCanonical(path) {
   const canonicalUrl = `${import.meta.env.VITE_FRONTEND_URL}${path}`;
   let element = document.querySelector('link[rel="canonical"]');

   if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", "canonical");
      document.head.appendChild(element);
   }

   element.setAttribute("href", canonicalUrl);
}
