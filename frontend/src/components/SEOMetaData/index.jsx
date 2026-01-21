import { useEffect } from "react";

export default function SEOMetaData({ metadata }) {
   useEffect(() => {
      if (!metadata) return;

      const {
         metaTitle,
         metaDescription,
         metaKeywords,
         metaImage,
         metaUrl,
         metaType = "website",
         twitterCardType = "summary_large_image",
      } = metadata;

      document.title = metaTitle;

      setMetaTag("name", "description", metaDescription);

      if (metaKeywords) {
         setMetaTag("name", "keywords", metaKeywords);
      }

      setMetaTag("property", "og:title", metaTitle);
      setMetaTag("property", "og:description", metaDescription);
      setMetaTag("property", "og:image", metaImage);
      setMetaTag("property", "og:url", metaUrl);
      setMetaTag("property", "og:type", metaType);

      setMetaTag("name", "twitter:card", twitterCardType);
      setMetaTag("name", "twitter:title", metaTitle);
      setMetaTag("name", "twitter:description", metaDescription);
      setMetaTag("name", "twitter:image", metaImage);
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
