import React from "react";
export function formatText(text) {
   return text.split("\n\n").flatMap((block, i, arr) => {
      const segments = block.split(/(\*\*[^*]+\*\*)/g).map((part, idx) => {
         // Gère le texte en gras
         if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={`strong-${i}-${idx}`}>{part.slice(2, -2)}</strong>;
         }
         return <React.Fragment key={`fragment-${i}-${idx}`}>{part}</React.Fragment>;
      });

      // Ajoute un <br /> entre chaque bloc de texte séparé par \n\n
      return i < arr.length - 1
         ? [...segments, <br key={`br-${i}`} />]
         : segments;
   });
}

export default function RenderContent({ content }) {
   if (!content) return null;

   return content.map((block, index) => {
      switch (block.type) {
         case "p":
            return <p key={index}>{formatText(block.text)}</p>;

         case "ul":
            return (
               <ul key={index} className={block.className}>
                  {block.items.map((item, idx) => {
                     if (typeof item === "string") {
                        return <li key={idx}>{formatText(item)}</li>;
                     } else if (
                        typeof item === "object" &&
                        item.type === "li"
                     ) {
                        return (
                           <li key={idx}>
                              {formatText(item.text)}
                              {item.sublist && (
                                 <RenderContent content={[item.sublist]} />
                              )}
                           </li>
                        );
                     }
                     return null;
                  })}
               </ul>
            );

         default:
            return null;
      }
   });
}
