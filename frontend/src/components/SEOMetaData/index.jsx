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
         metaSiteName,
         twitterCardType = "summary_large_image",
         path,
      } = metadata;

      const BASE_URL = import.meta.env.VITE_FRONTEND_URL;
      const pageUrl = `${BASE_URL}${path}`;
      const metaImagePath = `${BASE_URL}${metaImage}`;

      document.title = metaTitle;

      const tags = [
         // Standard
         ["name", "description", metaDescription],
         ["name", "keywords", metaKeywords],

         // Open Graph
         ["property", "og:title", metaTitle],
         ["property", "og:description", metaDescription],
         ["property", "og:image", metaImagePath],
         ["property", "og:url", pageUrl],
         ["property", "og:type", metaType],
         ["property", "og:site_name", metaSiteName],

         // Twitter
         ["name", "twitter:card", twitterCardType],
         ["name", "twitter:title", metaTitle],
         ["name", "twitter:description", metaDescription],
         ["name", "twitter:image", metaImagePath],
      ];

      tags.forEach(([attr, name, content]) => setMetaTag(attr, name, content));
      setCanonical(pageUrl);
   }, [metadata]);

   return null;
}

function setMetaTag(attr, name, content) {
   if (!content) return;

   let el = document.querySelector(`meta[${attr}="${name}"]`);

   if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
   }

   el.setAttribute("content", content);
}

function setCanonical(url) {
   let el = document.querySelector('link[rel="canonical"]');

   if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      document.head.appendChild(el);
   }

   el.setAttribute("href", url);
}